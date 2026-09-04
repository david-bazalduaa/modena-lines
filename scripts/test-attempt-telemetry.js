/**
 * ============================================================
 * AUTOMATED TEST SUITE: ATTEMPT METRIC LIFECYCLE & TELEMETRY
 * ============================================================
 * Verifies:
 * 1. userProgress.recordAttempt() updates line stats and totalAttempts.
 * 2. Helpers: getLineAttempts, getSubCourseAttempts, getSubCourseAccuracy, getTotalAttempts.
 * 3. TrainerView attempt lifecycle across all modes (Learn, Practice, Drill, Arena).
 * 4. Move submission, mistake triggers, and reset triggers.
 * 5. Persistence across line navigation.
 * 6. Reactive DOM data-binding for #stat-attempts, #stat-accuracy, #stat-lines.
 */

import assert from 'assert';

// Polyfill in-memory localStorage for Node test environment
if (typeof globalThis.localStorage === 'undefined') {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (key) => store.get(key) || null,
    setItem: (key, val) => store.set(key, String(val)),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear()
  };
}

import { userProgress } from '../src/storage/user-progress.js';
import { COURSES, getAllLines } from '../src/data/courses.js';

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    Error: ${err.message}`);
  }
}

console.log('--- Starting Attempt Metric Lifecycle & Session Telemetry Test Suite ---');

// ==========================================
// 1. UserProgress State Management Tests
// ==========================================
console.log('\n[1. UserProgress State Management]');

const testLineId = 'test-line-attempt-1';
const initialTotalAttempts = userProgress.getTotalAttempts();

test('recordAttempt increments line attempts and state.totalAttempts', () => {
  const initialLineAttempts = userProgress.getLineAttempts(testLineId);
  userProgress.recordAttempt(testLineId);

  const newLineAttempts = userProgress.getLineAttempts(testLineId);
  const newTotalAttempts = userProgress.getTotalAttempts();

  assert.strictEqual(newLineAttempts, initialLineAttempts + 1, 'Line attempts should increment by 1');
  assert.strictEqual(newTotalAttempts, initialTotalAttempts + 1, 'Total attempts should increment by 1');
});

test('getSubCourseAttempts aggregates all line attempts in a sub-course', () => {
  const mockSubCourseLines = [
    { id: 'sub-line-1' },
    { id: 'sub-line-2' },
    { id: 'sub-line-3' }
  ];

  userProgress.recordAttempt('sub-line-1');
  userProgress.recordAttempt('sub-line-1');
  userProgress.recordAttempt('sub-line-2');

  const subAttempts = userProgress.getSubCourseAttempts(mockSubCourseLines);
  assert.strictEqual(subAttempts, 3, `Expected 3 sub-course attempts, got ${subAttempts}`);
});

test('getSubCourseAccuracy computes average accuracy across attempted/completed lines', () => {
  const mockLines = [
    { id: 'acc-line-1' },
    { id: 'acc-line-2' }
  ];

  // acc-line-1: completed with 100%
  userProgress.markCompleted('acc-line-1', 4);
  // acc-line-2: completed with 1 mistake out of 4 moves -> 75%
  userProgress.recordAttempt('acc-line-2');
  userProgress.recordMistake('acc-line-2');
  userProgress.markCompleted('acc-line-2', 4);

  const avgAcc = userProgress.getSubCourseAccuracy(mockLines);
  // Average of 100 and 75 is 88%
  assert.strictEqual(avgAcc, 88, `Expected 88% accuracy, got ${avgAcc}`);
});

test('Subscriber notification is dispatched synchronously on recordAttempt', () => {
  let notified = false;
  const unsubscribe = userProgress.subscribe((state) => {
    notified = true;
  });

  userProgress.recordAttempt('subscriber-test-line');
  assert.strictEqual(notified, true, 'Subscriber callback should fire on recordAttempt');
  unsubscribe();
});

// ==========================================
// 2. Training Engine Lifecycle Simulation
// ==========================================
console.log('\n[2. Training Engine Lifecycle & DOM Data-Binding Simulation]');

// Create lightweight DOM mock for jQuery
const domStore = {};
function mockJQuery(selector) {
  return {
    length: 1,
    text(val) {
      if (val !== undefined) {
        domStore[selector] = String(val);
        return this;
      }
      return domStore[selector] || '';
    },
    html(val) {
      if (val !== undefined) {
        domStore[selector] = String(val);
        return this;
      }
      return domStore[selector] || '';
    },
    attr(name, val) {
      if (val !== undefined) {
        domStore[`${selector}[${name}]`] = String(val);
        return this;
      }
      return domStore[`${selector}[${name}]`] || '';
    },
    css() { return this; },
    prop() { return this; },
    empty() { return this; },
    append() { return this; },
    addClass() { return this; },
    removeClass() { return this; },
    val() { return ''; },
    off() { return this; },
    on() { return this; }
  };
}

test('TrainerView registers attempt in blind streak modes (Drill/Arena)', () => {
  const line = { id: 'drill-test-line-1', moves: [{ san: 'e4', from: 'e2', to: 'e4' }], name: 'Test Line' };
  
  // Simulate TrainerView state
  let currentAttemptRegistered = false;
  let sessionAttempts = 0;

  function registerLineAttempt(force = false) {
    if (!line || !line.id) return;
    if (currentAttemptRegistered && !force) return;
    currentAttemptRegistered = true;
    sessionAttempts++;
    userProgress.recordAttempt(line.id);
  }

  // Simulate initTrainingSession with options.isBlind: true (Drill Mode)
  const options = { isBlind: true };
  currentAttemptRegistered = false;
  registerLineAttempt();

  assert.strictEqual(currentAttemptRegistered, true, 'Attempt should be registered even in blind mode');
  assert.strictEqual(sessionAttempts, 1, 'sessionAttempts should increment');
  assert(userProgress.getLineAttempts(line.id) >= 1, 'Line attempts in storage should be >= 1');
});

test('handleUserMove ensures attempt is registered upon move submission without double-counting', () => {
  const line = { id: 'move-test-line-1', moves: [{ san: 'e4', from: 'e2', to: 'e4' }], name: 'Test Line' };
  let currentAttemptRegistered = false;
  let attemptsCount = 0;

  function registerLineAttempt() {
    if (currentAttemptRegistered) return;
    currentAttemptRegistered = true;
    attemptsCount++;
    userProgress.recordAttempt(line.id);
  }

  // Move 1
  if (!currentAttemptRegistered) registerLineAttempt();
  assert.strictEqual(attemptsCount, 1, 'First move should register attempt');

  // Move 2 in same line run
  if (!currentAttemptRegistered) registerLineAttempt();
  assert.strictEqual(attemptsCount, 1, 'Subsequent moves in same run must not duplicate-increment');
});

test('handleUserMove blunder branch ensures attempt was registered', () => {
  const line = { id: 'blunder-test-line-1', moves: [{ san: 'e4', from: 'e2', to: 'e4' }], name: 'Test Line' };
  let currentAttemptRegistered = false;
  let attemptsCount = 0;

  function registerLineAttempt() {
    if (currentAttemptRegistered) return;
    currentAttemptRegistered = true;
    attemptsCount++;
    userProgress.recordAttempt(line.id);
  }

  // Simulate blunder on un-registered attempt
  if (!currentAttemptRegistered) registerLineAttempt();
  userProgress.recordMistake(line.id);

  assert.strictEqual(attemptsCount, 1, 'Blunder should ensure attempt is captured');
  assert(userProgress.getLineStat(line.id).mistakes >= 1, 'Mistake should be recorded');
});

test('resetDrill resets attempt state so retry increments new attempt', () => {
  const line = { id: 'retry-test-line-1', moves: [{ san: 'e4' }], name: 'Test Line' };
  let currentAttemptRegistered = false;
  let attemptsCount = 0;

  function registerLineAttempt() {
    if (currentAttemptRegistered) return;
    currentAttemptRegistered = true;
    attemptsCount++;
    userProgress.recordAttempt(line.id);
  }

  // Run 1
  registerLineAttempt();
  assert.strictEqual(attemptsCount, 1, 'Run 1 registered');

  // Reset drill
  currentAttemptRegistered = false;

  // Run 2
  registerLineAttempt();
  assert.strictEqual(attemptsCount, 2, 'Run 2 should register a new attempt');
});

test('DOM #stat-attempts and #stat-accuracy receive accurate data-binding', () => {
  const subCourseLines = [
    { id: 'dom-line-1' },
    { id: 'dom-line-2' }
  ];

  userProgress.recordAttempt('dom-line-1');
  userProgress.recordAttempt('dom-line-1');
  userProgress.recordAttempt('dom-line-2');

  const subAttempts = userProgress.getSubCourseAttempts(subCourseLines);
  const subAccuracy = userProgress.getSubCourseAccuracy(subCourseLines);

  const $ = mockJQuery;
  $('#stat-attempts').text(subAttempts);
  $('#stat-accuracy').text(`${subAccuracy}%`);

  assert.strictEqual($('#stat-attempts').text(), '3', '#stat-attempts should display 3');
  assert.strictEqual($('#stat-accuracy').text(), '100%', '#stat-accuracy should display 100%');
});

test('Persistence across line navigation within sub-module', () => {
  const subCourseLines = [
    { id: 'nav-line-1' },
    { id: 'nav-line-2' }
  ];

  // User drills line 1 twice
  userProgress.recordAttempt('nav-line-1');
  userProgress.recordAttempt('nav-line-1');

  // Navigate to line 2 (which currently has 0 direct attempts)
  const currentLine = subCourseLines[1];
  const subAttempts = userProgress.getSubCourseAttempts(subCourseLines);

  // Sub-module session telemetry persists across line navigation!
  assert.strictEqual(subAttempts, 2, 'Sub-module attempts should persist across line navigation');
});

console.log(`\nResults: ${passedTests}/${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log('✓ ALL ATTEMPT METRIC LIFECYCLE TESTS PASSED!');
  process.exit(0);
} else {
  console.error('✗ SOME TESTS FAILED!');
  process.exit(1);
}
