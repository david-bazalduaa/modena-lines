/**
 * ============================================================
 * AUTOMATED TEST SUITE: DRILL DECK SHUFFLE & ROUND-ROBIN CYCLE
 * ============================================================
 * Verifies:
 * 1. Fisher-Yates unbiased shuffle algorithm.
 * 2. Mastered-only line filtering in Drill mode.
 * 3. Non-repeating round-robin deck queue.
 * 4. Multi-round progression (Round 1 -> Round 2 transition).
 * 5. Graceful fallback when 0 lines are mastered.
 * 6. Mid-session incorporation of newly mastered lines.
 * 7. Progress info formatting for UI telemetry.
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

import { fisherYatesShuffle, DrillDeckController } from '../src/engine/drill-controller.js';
import { userProgress } from '../src/storage/user-progress.js';

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

console.log('--- Starting Drill Deck Shuffle & Round-Robin Cycle Test Suite ---');

// ==========================================
// 1. Fisher-Yates Algorithm Verification
// ==========================================
console.log('\n[1. Fisher-Yates Algorithm Tests]');

test('fisherYatesShuffle preserves array elements without mutating input', () => {
  const original = [1, 2, 3, 4, 5, 6, 7, 8];
  const shuffled = fisherYatesShuffle(original);

  assert.strictEqual(shuffled.length, original.length, 'Length should match');
  assert.deepStrictEqual([...shuffled].sort((a, b) => a - b), original, 'Elements must be preserved');
  assert.strictEqual(original[0], 1, 'Original array must not be mutated');
});

test('fisherYatesShuffle produces random permutations', () => {
  const original = ['line-a', 'line-b', 'line-c', 'line-d', 'line-e'];
  const permutations = new Set();

  for (let i = 0; i < 20; i++) {
    const s = fisherYatesShuffle(original);
    permutations.add(s.join(','));
  }

  // Over 20 shuffles of 5 items (120 permutations), we expect > 1 distinct permutation
  assert(permutations.size > 1, `Expected multiple permutations, got ${permutations.size}`);
});

// ==========================================
// 2. Mastered Filtering & Deck Initialization
// ==========================================
console.log('\n[2. Mastered Filtering & Deck Queue]');

const mockSubCourse = {
  id: 'italian-piano-test',
  lines: [
    { id: 'piano-1', name: 'Giuoco Piano Mainline', mastered: false },
    { id: 'piano-2', name: 'Giuoco Piano Greco', mastered: true },
    { id: 'piano-3', name: 'Giuoco Piano Classical', mastered: false },
    { id: 'piano-4', name: 'Giuoco Piano Modern', mastered: true },
    { id: 'piano-5', name: 'Giuoco Piano Sideline', mastered: false }
  ]
};

test('isMastered checks both line.mastered flag and userProgress completion', () => {
  const controller = new DrillDeckController();
  assert.strictEqual(controller.isMastered(mockSubCourse.lines[1], userProgress), true, 'piano-2 is mastered');
  assert.strictEqual(controller.isMastered(mockSubCourse.lines[0], userProgress), false, 'piano-1 is not mastered yet');

  // Mark piano-1 completed in userProgress
  userProgress.markCompleted('piano-1', 4);
  assert.strictEqual(controller.isMastered(mockSubCourse.lines[0], userProgress), true, 'piano-1 should now be mastered via userProgress');
});

test('startDeck extracts mastered lines and initializes Round 1', () => {
  const controller = new DrillDeckController();
  // piano-1, piano-2, piano-4 are now mastered (3 lines)
  controller.startDeck(mockSubCourse, userProgress);

  const info = controller.getProgressInfo();
  assert.strictEqual(info.round, 1, 'Initial round should be 1');
  assert.strictEqual(info.total, 3, 'Total mastered lines in deck should be 3');
  assert.strictEqual(info.isFallback, false, 'Should not be in fallback mode');
});

// ==========================================
// 3. Non-Repeating Round-Robin Cycle
// ==========================================
console.log('\n[3. Non-Repeating Round-Robin Progression]');

test('popNextLine yields each mastered line exactly once in Round 1', () => {
  const controller = new DrillDeckController();
  controller.startDeck(mockSubCourse, userProgress);

  const seenLineIds = new Set();
  const poppedLines = [];

  for (let i = 0; i < 3; i++) {
    const item = controller.popNextLine(mockSubCourse, userProgress);
    assert(item !== null, `Popped item ${i} should not be null`);
    assert.strictEqual(item.round, 1, 'Should be round 1');
    assert.strictEqual(item.index, i + 1, `Index should be ${i + 1}`);
    assert(!seenLineIds.has(item.line.id), `Line ${item.line.id} must not repeat within the same round`);
    seenLineIds.add(item.line.id);
    poppedLines.push(item.line.id);
  }

  assert.strictEqual(seenLineIds.size, 3, 'All 3 mastered lines must be served');
});

test('popNextLine automatically and seamlessly starts Round 2 when deck empties', () => {
  const controller = new DrillDeckController();
  controller.startDeck(mockSubCourse, userProgress);

  // Pop all 3 lines of Round 1
  controller.popNextLine(mockSubCourse, userProgress);
  controller.popNextLine(mockSubCourse, userProgress);
  const lastLineRound1 = controller.popNextLine(mockSubCourse, userProgress);

  // Pop next line -> should trigger Round 2!
  const firstLineRound2 = controller.popNextLine(mockSubCourse, userProgress);

  assert.strictEqual(firstLineRound2.round, 2, 'Should advance to Round 2');
  assert.strictEqual(firstLineRound2.index, 1, 'Round 2 index should start at 1');
  assert.strictEqual(firstLineRound2.total, 3, 'Total lines in Round 2 should be 3');
  assert.strictEqual(firstLineRound2.isNewRound, true, 'isNewRound flag should be true');

  // Verify no immediate repeat across rounds if pool has > 1 line
  assert.notStrictEqual(
    firstLineRound2.line.id,
    lastLineRound1.line.id,
    'First line of Round 2 should not be identical to the last line of Round 1'
  );
});

// ==========================================
// 4. Mid-Session Incorporation of New Lines
// ==========================================
console.log('\n[4. Dynamic Mid-Session Incorporation]');

test('Newly mastered line during Round 1 is incorporated into Round 2 deck', () => {
  const controller = new DrillDeckController();
  controller.startDeck(mockSubCourse, userProgress);

  // In Round 1, 3 lines are mastered
  assert.strictEqual(controller.roundTotalLines, 3);

  // User masters piano-3 mid-session!
  userProgress.markCompleted('piano-3', 4);

  // Complete Round 1
  controller.popNextLine(mockSubCourse, userProgress);
  controller.popNextLine(mockSubCourse, userProgress);
  controller.popNextLine(mockSubCourse, userProgress);

  // Pop Round 2: should now include 4 lines!
  const r2Item = controller.popNextLine(mockSubCourse, userProgress);
  assert.strictEqual(r2Item.round, 2);
  assert.strictEqual(r2Item.total, 4, 'Round 2 should incorporate newly mastered line (total 4)');
});

// ==========================================
// 5. Zero-Mastered Fallback Handling
// ==========================================
console.log('\n[5. Zero-Mastered Fallback Handling]');

test('Gracefully falls back to exploration round when 0 lines are mastered', () => {
  const freshSubCourse = {
    id: 'unmastered-subcourse',
    lines: [
      { id: 'unm-1', name: 'Unmastered Line 1', mastered: false },
      { id: 'unm-2', name: 'Unmastered Line 2', mastered: false },
      { id: 'unm-3', name: 'Unmastered Line 3', mastered: false }
    ]
  };

  const controller = new DrillDeckController();
  controller.startDeck(freshSubCourse, userProgress);

  const info = controller.getProgressInfo();
  assert.strictEqual(info.isFallback, true, 'Should flag isFallback === true');
  assert.strictEqual(info.total, 3, 'Should include all 3 sub-course lines in fallback exploration');
  assert(info.label.includes('Exploration'), 'Label should indicate Exploration');

  const firstPop = controller.popNextLine(freshSubCourse, userProgress);
  assert(firstPop !== null, 'Popped item should not be null in fallback mode');
  assert.strictEqual(firstPop.isFallback, true, 'Popped item should have isFallback === true');
});

// ==========================================
// 6. Controller Reset
// ==========================================
console.log('\n[6. Controller Reset]');

test('reset() clears deck and restores initial state', () => {
  const controller = new DrillDeckController();
  controller.startDeck(mockSubCourse, userProgress);
  controller.popNextLine(mockSubCourse, userProgress);

  controller.reset();
  const info = controller.getProgressInfo();

  assert.strictEqual(info.round, 1);
  assert.strictEqual(info.index, 0);
  assert.strictEqual(info.total, 0);
  assert.strictEqual(controller.drillMasteredDeck.length, 0);
});

console.log(`\nResults: ${passedTests}/${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log('✓ ALL DRILL DECK SHUFFLE & CYCLE TESTS PASSED!');
  process.exit(0);
} else {
  console.error('✗ SOME TESTS FAILED!');
  process.exit(1);
}
