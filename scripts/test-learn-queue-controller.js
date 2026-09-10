/**
 * ============================================================
 * AUTOMATED TEST SUITE: LEARN MODE UNLEARNED LINE PRIORITIZATION
 * ============================================================
 * Verifies:
 * 1. Unlearned line prioritization in Learn Mode (defaults to first unseen line).
 * 2. Skipping already mastered lines during linear Learn mode progression.
 * 3. Fallback behavior when 100% of lines in a module are completed.
 * 4. Mode boundary separation (Learn vs Practice vs Drill).
 * 5. Telemetry and attempt tracking integrity.
 */

import assert from 'assert';
import { LearnQueueController } from '../src/engine/learn-controller.js';

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

console.log('--- Starting Learn Mode Queue Controller Test Suite ---');

// Mock repertoire lines pool (5 lines)
const mockLines = [
  { id: 'french-advance-1', name: 'French Advance Mainline' },
  { id: 'french-advance-2', name: 'French Advance 5...Qb6' },
  { id: 'french-advance-3', name: 'French Advance 6.a3' },
  { id: 'french-advance-4', name: 'French Advance 6.Bd3' },
  { id: 'french-advance-5', name: 'French Advance Milner-Barry' }
];

// Mock user progress storage
class MockUserProgress {
  constructor(completedLineIds = []) {
    this.completed = new Set(completedLineIds);
    this.attempts = {};
  }

  isLineCompleted(line) {
    if (!line) return false;
    const id = typeof line === 'string' ? line : line.id;
    if (line.mastered === true || line.completedInLearn === true) return true;
    return this.completed.has(id);
  }

  recordAttempt(lineId) {
    this.attempts[lineId] = (this.attempts[lineId] || 0) + 1;
  }

  markCompleted(lineId) {
    this.completed.add(lineId);
    this.recordAttempt(lineId);
  }
}

// ==========================================
// 1. Initial Line Selection & Prioritization
// ==========================================
console.log('\n[1. Initial Line Selection & Prioritization]');

test('Fresh module (0 lines completed) initializes on line index 0', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress([]);
  const result = controller.findFirstUnlearnedLineIndex(mockLines, progress);

  assert.strictEqual(result.index, 0);
  assert.strictEqual(result.allMastered, false);
  assert.strictEqual(result.unlearnedCount, 5);
  assert.strictEqual(result.totalCount, 5);
});

test('Partially completed module (lines 0 & 1 completed) directly routes to line 2', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress(['french-advance-1', 'french-advance-2']);
  const result = controller.findFirstUnlearnedLineIndex(mockLines, progress);

  assert.strictEqual(result.index, 2);
  assert.strictEqual(result.allMastered, false);
  assert.strictEqual(result.unlearnedCount, 3);
  assert.strictEqual(mockLines[result.index].id, 'french-advance-3');
});

test('Non-contiguous completions (line 1 completed, line 0 uncompleted) starts on line 0', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress(['french-advance-2']);
  const result = controller.findFirstUnlearnedLineIndex(mockLines, progress);

  assert.strictEqual(result.index, 0);
  assert.strictEqual(result.allMastered, false);
  assert.strictEqual(result.unlearnedCount, 4);
});

// ==========================================
// 2. 100% Completed Module Fallback
// ==========================================
console.log('\n[2. 100% Mastered Module Fallback]');

test('Fully mastered module triggers graceful fallback to line 0 with allMastered = true', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress([
    'french-advance-1',
    'french-advance-2',
    'french-advance-3',
    'french-advance-4',
    'french-advance-5'
  ]);
  const result = controller.findFirstUnlearnedLineIndex(mockLines, progress);

  assert.strictEqual(result.index, 0);
  assert.strictEqual(result.allMastered, true);
  assert.strictEqual(result.unlearnedCount, 0);
  assert.strictEqual(controller.isModuleFullyMastered(mockLines, progress), true);
});

test('Empty line array returns safe boundary response', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress([]);
  const result = controller.findFirstUnlearnedLineIndex([], progress);

  assert.strictEqual(result.index, -1);
  assert.strictEqual(result.allMastered, false);
  assert.strictEqual(controller.isModuleFullyMastered([], progress), false);
});

// ==========================================
// 3. Linear Progression & Skip Mastered Lines
// ==========================================
console.log('\n[3. Linear Progression & Skipping Mastered Lines]');

test('Advances sequentially to next unlearned line, skipping previously mastered lines', () => {
  const controller = new LearnQueueController();
  // Lines 0 and 2 are mastered; Lines 1, 3, 4 are unlearned
  const progress = new MockUserProgress(['french-advance-1', 'french-advance-3']);
  const completedInSession = new Set();

  // Currently finishing line 1: next should skip line 2 (mastered) and land on line 3
  const nextIdx = controller.getNextUnlearnedLineIndex(
    mockLines,
    'french-advance-2',
    progress,
    completedInSession
  );

  assert.strictEqual(nextIdx, 3);
  assert.strictEqual(mockLines[nextIdx].id, 'french-advance-4');
});

test('Wrap-around discovers earlier skipped unlearned lines', () => {
  const controller = new LearnQueueController();
  // Line 0 is unlearned, Line 1 is completed, currently on line 4
  const progress = new MockUserProgress(['french-advance-2', 'french-advance-3', 'french-advance-4']);
  const completedInSession = new Set(['french-advance-5']);

  const nextIdx = controller.getNextUnlearnedLineIndex(
    mockLines,
    'french-advance-5',
    progress,
    completedInSession
  );

  // Wraps around and finds line 0
  assert.strictEqual(nextIdx, 0);
  assert.strictEqual(mockLines[nextIdx].id, 'french-advance-1');
});

test('Returns -1 when all unlearned lines in the sub-module have been completed', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress([
    'french-advance-1',
    'french-advance-2',
    'french-advance-3',
    'french-advance-4'
  ]);
  // Last uncompleted line (index 4) was just finished in this session
  const completedInSession = new Set(['french-advance-5']);

  const nextIdx = controller.getNextUnlearnedLineIndex(
    mockLines,
    'french-advance-5',
    progress,
    completedInSession
  );

  assert.strictEqual(nextIdx, -1);
});

// ==========================================
// 4. Mode Boundary Separation & Telemetry
// ==========================================
console.log('\n[4. Mode Boundary Separation & Telemetry Integrity]');

test('Practice mode filters strictly to mastered lines while Learn retains full pool', () => {
  const controller = new LearnQueueController();
  const progress = new MockUserProgress(['french-advance-1', 'french-advance-3']);

  const unlearned = controller.getUnlearnedLines(mockLines, progress);
  const mastered = controller.getMasteredLines(mockLines, progress);

  assert.strictEqual(unlearned.length, 3);
  assert.strictEqual(mastered.length, 2);
  assert.deepStrictEqual(mastered.map(l => l.id), ['french-advance-1', 'french-advance-3']);
});

test('Recording attempt and completion preserves accurate telemetry without corruption', () => {
  const progress = new MockUserProgress(['french-advance-1']);
  assert.strictEqual(progress.isLineCompleted('french-advance-2'), false);

  progress.markCompleted('french-advance-2');
  assert.strictEqual(progress.isLineCompleted('french-advance-2'), true);
  assert.strictEqual(progress.attempts['french-advance-2'], 1);
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL LEARN QUEUE TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
