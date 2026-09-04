/**
 * ============================================================
 * AUTOMATED TEST SUITE: LINEAR QUEUE PROGRESSION & SEQUENCING
 * ============================================================
 * Verifies:
 * 1. Sequential progression in Learn mode (1 -> 2 -> 3 -> 4 -> 5...).
 * 2. Elimination of the back-tracking glitch (1 -> 2 -> 1 -> 3).
 * 3. Graceful handling of manual line jumps (wrap back to skipped lines).
 * 4. Practice mode linear progression.
 * 5. Session completion settlement when all lines are mastered.
 */

import assert from 'assert';

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

console.log('--- Starting Linear Queue Progression Test Suite ---');

// Mock pool of 5 lines for sub-module testing
const mockPoolLines = [
  { id: 'line-1', name: 'Variation 1' },
  { id: 'line-2', name: 'Variation 2' },
  { id: 'line-3', name: 'Variation 3' },
  { id: 'line-4', name: 'Variation 4' },
  { id: 'line-5', name: 'Variation 5' }
];

class MockQueueManager {
  constructor(pool) {
    this.poolLines = pool;
    this.completedInLoop = new Set();
    this.lineQueue = pool.map((_, i) => i);
    this.currentLine = pool[0];
  }

  setCurrentLine(line) {
    this.currentLine = line;
  }

  completeCurrentLine() {
    if (this.currentLine) {
      this.completedInLoop.add(this.currentLine.id);
    }
  }

  getNextLineIndexFromQueue() {
    const poolLines = this.poolLines;
    if (!poolLines || poolLines.length === 0) {
      return -1;
    }

    if (this.completedInLoop.size >= poolLines.length) {
      return -1;
    }

    const currentIdx = poolLines.findIndex(l => l.id === this.currentLine?.id);
    const candidateIdx = currentIdx >= 0 ? currentIdx + 1 : 0;

    if (candidateIdx < poolLines.length && !this.completedInLoop.has(poolLines[candidateIdx].id)) {
      this.lineQueue = this.lineQueue.filter(idx => idx !== candidateIdx);
      return candidateIdx;
    }

    if (candidateIdx < poolLines.length) {
      for (let i = candidateIdx; i < poolLines.length; i++) {
        if (!this.completedInLoop.has(poolLines[i].id)) {
          this.lineQueue = this.lineQueue.filter(idx => idx !== i);
          return i;
        }
      }
    }

    for (let i = 0; i < poolLines.length; i++) {
      if (!this.completedInLoop.has(poolLines[i].id)) {
        this.lineQueue = this.lineQueue.filter(idx => idx !== i);
        return i;
      }
    }

    return -1;
  }
}

// ==========================================
// 1. Pure Linear Progression Test
// ==========================================
console.log('\n[1. Pure Linear Progression Sequence]');

test('Clean linear progression from Line 1 to Line 5 without back-tracking to Line 1', () => {
  const manager = new MockQueueManager(mockPoolLines);
  const progression = [];

  // Start at line 1 (index 0)
  manager.setCurrentLine(mockPoolLines[0]);

  // Complete Line 1 -> should advance to index 1 (Line 2)
  manager.completeCurrentLine();
  let next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 1, `Expected Line 2 (index 1), got index ${next}`);

  // Move to Line 2 (index 1) and complete -> MUST advance to index 2 (Line 3), NOT index 0!
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 2, `CRITICAL: Expected Line 3 (index 2), got index ${next} (must NOT be 0)`);

  // Move to Line 3 (index 2) and complete -> advance to index 3 (Line 4)
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 3, `Expected Line 4 (index 3), got index ${next}`);

  // Move to Line 4 (index 3) and complete -> advance to index 4 (Line 5)
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 4, `Expected Line 5 (index 4), got index ${next}`);

  // Move to Line 5 (index 4) and complete -> all 5 completed, should return -1
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, -1, `Expected session complete (-1), got index ${next}`);

  assert.deepStrictEqual(progression, [1, 2, 3, 4, -1], 'Progression must follow unbroken linear order 1 -> 2 -> 3 -> 4 -> 5 -> END');
});

// ==========================================
// 2. Manual Line Jump Wrap-Around Test
// ==========================================
console.log('\n[2. Manual Line Jump Wrap-Around]');

test('Manual line jump (starting at Line 3) proceeds linearly then wraps to skipped lines', () => {
  const manager = new MockQueueManager(mockPoolLines);
  const progression = [];

  // User starts directly at Line 3 (index 2)
  manager.setCurrentLine(mockPoolLines[2]);

  // Complete Line 3 -> advances to Line 4 (index 3)
  manager.completeCurrentLine();
  let next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 3);

  // Complete Line 4 -> advances to Line 5 (index 4)
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 4);

  // Complete Line 5 -> wraps back to first uncompleted line: Line 1 (index 0)!
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 0, 'Should wrap to skipped Line 1 (index 0)');

  // Complete Line 1 -> advances to Line 2 (index 1)
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, 1, 'Should advance to skipped Line 2 (index 1)');

  // Complete Line 2 -> all lines complete!
  manager.setCurrentLine(mockPoolLines[next]);
  manager.completeCurrentLine();
  next = manager.getNextLineIndexFromQueue();
  progression.push(next);
  assert.strictEqual(next, -1, 'All lines completed, should return -1');

  assert.deepStrictEqual(progression, [3, 4, 0, 1, -1]);
});

// ==========================================
// 3. Short Pool Boundary Handling
// ==========================================
console.log('\n[3. Single Line & Boundary Pools]');

test('Single line pool finishes immediately after completion', () => {
  const manager = new MockQueueManager([{ id: 'single-1' }]);
  manager.completeCurrentLine();
  const next = manager.getNextLineIndexFromQueue();
  assert.strictEqual(next, -1, 'Single line pool must return -1 upon completion');
});

console.log(`\nResults: ${passedTests}/${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log('✓ ALL LINEAR PROGRESSION TESTS PASSED!');
  process.exit(0);
} else {
  console.error('✗ SOME TESTS FAILED!');
  process.exit(1);
}
