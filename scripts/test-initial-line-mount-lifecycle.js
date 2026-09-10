/**
 * ============================================================
 * AUTOMATED TEST SUITE: SUB-MODULE INITIAL LINE MOUNT LIFECYCLE
 * ============================================================
 * Verifies:
 * 1. Direct sub-module entry automatically determines and loads the first
 *    unlearned line (e.g. lines 0, 1, 2 completed -> mounts directly on line 3).
 * 2. Standalone pure helper resolveInitialLearnLineIndex(lines, userProgress).
 * 3. Alignment between direct view mount and manual onLearnModeClick handler.
 * 4. Fallback to index 0 with review pass flag when 100% of lines are completed.
 * 5. Clean single-pass mount with zero secondary re-renders.
 */

import assert from 'assert';
import { resolveInitialLearnLineIndex, LearnQueueController } from '../src/engine/learn-controller.js';

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

console.log('--- Starting Sub-Module Mount Lifecycle Test Suite ---');

// Mock Sub-Course Repertoire lines (5 lines)
const mockSubCourse = {
  id: 'french-advance-overreach',
  title: 'French Advance Overreach',
  lines: [
    { id: 'french-line-0', name: 'Variation 0 (Anchor Mainline)', moves: [{ from: 'e7', to: 'e6' }] },
    { id: 'french-line-1', name: 'Variation 1 (4...c5 Break)', moves: [{ from: 'c7', to: 'c5' }] },
    { id: 'french-line-2', name: 'Variation 2 (5...Qb6 Queen Pressure)', moves: [{ from: 'd8', to: 'b6' }] },
    { id: 'french-line-3', name: 'Variation 3 (6.a3 Punish Early Overreach)', moves: [{ from: 'c8', to: 'd7' }] },
    { id: 'french-line-4', name: 'Variation 4 (Milner-Barry Refutation)', moves: [{ from: 'f7', to: 'f6' }] }
  ]
};

// Mock UserProgress class simulating repository pattern
class MockUserProgress {
  constructor(completedLineIds = []) {
    this.completedMap = {};
    completedLineIds.forEach(id => {
      this.completedMap[id] = { completed: true, mastered: true, attempts: 2 };
    });
  }

  isLineCompleted(line) {
    if (!line) return false;
    const id = typeof line === 'string' ? line : line.id;
    if (line.mastered === true || line.completedInLearn === true) return true;
    return Boolean(this.completedMap[id] && this.completedMap[id].completed);
  }

  getLineStat(lineId) {
    return this.completedMap[lineId] || { completed: false, mastered: false, attempts: 0 };
  }
}

// ==========================================
// 1. Pure Helper Tests: resolveInitialLearnLineIndex
// ==========================================
console.log('\n[1. Pure Helper: resolveInitialLearnLineIndex]');

test('Fresh student (0 completed lines) resolves to index 0', () => {
  const progress = new MockUserProgress([]);
  const idx = resolveInitialLearnLineIndex(mockSubCourse.lines, progress);
  assert.strictEqual(idx, 0);
});

test('Student with lines 0, 1, and 2 completed resolves directly to index 3', () => {
  const progress = new MockUserProgress(['french-line-0', 'french-line-1', 'french-line-2']);
  const idx = resolveInitialLearnLineIndex(mockSubCourse.lines, progress);
  assert.strictEqual(idx, 3);
  assert.strictEqual(mockSubCourse.lines[idx].id, 'french-line-3');
});

test('Student with non-contiguous completions (lines 1 & 2 completed, 0 uncompleted) resolves to index 0', () => {
  const progress = new MockUserProgress(['french-line-1', 'french-line-2']);
  const idx = resolveInitialLearnLineIndex(mockSubCourse.lines, progress);
  assert.strictEqual(idx, 0);
});

test('Student with all lines completed falls back to index 0 for review pass', () => {
  const progress = new MockUserProgress([
    'french-line-0',
    'french-line-1',
    'french-line-2',
    'french-line-3',
    'french-line-4'
  ]);
  const idx = resolveInitialLearnLineIndex(mockSubCourse.lines, progress);
  assert.strictEqual(idx, 0);
});

test('Boundary: empty or invalid lines array returns 0 safely', () => {
  assert.strictEqual(resolveInitialLearnLineIndex([], null), 0);
  assert.strictEqual(resolveInitialLearnLineIndex(null, null), 0);
});

// ==========================================
// 2. Direct Sub-Module Mount Lifecycle
// ==========================================
console.log('\n[2. Direct Sub-Module Mount Lifecycle Simulation]');

class MockTrainerViewLifecycle {
  constructor(userProgress) {
    this.userProgress = userProgress;
    this.learnQueueController = new LearnQueueController();
    this.currentSubCourse = null;
    this.currentLine = null;
    this.currentMode = 'learn';
    this.isAllMasteredReviewPass = false;
    this.loadLineCallCount = 0;
    this.boardMountedFen = null;
    this.dropdownSelectedVal = null;
    this.activeLineTitle = '';
  }

  loadSubCourse(subCourse, lineIndex = null) {
    this.currentMode = 'learn';
    this.currentSubCourse = subCourse;

    if (!subCourse || !subCourse.lines || subCourse.lines.length === 0) return;

    // The centralized initial line resolution logic
    let targetIndex = 0;
    if (typeof lineIndex === 'number' && lineIndex > 0 && lineIndex < subCourse.lines.length) {
      targetIndex = lineIndex;
    } else {
      targetIndex = resolveInitialLearnLineIndex(subCourse.lines, this.userProgress);
    }

    this.isAllMasteredReviewPass = this.learnQueueController.isModuleFullyMastered(subCourse.lines, this.userProgress);

    // Mount and load line FIRST
    this.loadLine(subCourse.lines[targetIndex], 'learn');

    // Synchronize UI
    this.dropdownSelectedVal = targetIndex;
  }

  loadLine(line, mode = 'learn') {
    this.loadLineCallCount++;
    this.currentLine = line;
    this.currentMode = mode;
    this.boardMountedFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    this.activeLineTitle = line.name;
  }

  selectMode(selectedMode) {
    this.currentMode = selectedMode;
    if (selectedMode === 'learn') {
      const subLines = this.currentSubCourse ? this.currentSubCourse.lines : [];
      const targetIndex = resolveInitialLearnLineIndex(subLines, this.userProgress);
      this.isAllMasteredReviewPass = this.learnQueueController.isModuleFullyMastered(subLines, this.userProgress);

      const lineToLoad = subLines[targetIndex] || null;
      if (lineToLoad) {
        this.loadLine(lineToLoad, 'learn');
      }
      this.dropdownSelectedVal = targetIndex;
    }
  }
}

test('Direct sub-module entry with lines 0, 1, 2 completed immediately mounts on line 3 with single-pass load', () => {
  const progress = new MockUserProgress(['french-line-0', 'french-line-1', 'french-line-2']);
  const trainer = new MockTrainerViewLifecycle(progress);

  // Directly enter sub-module from Catalog/Hub (passing null as lineIndex)
  trainer.loadSubCourse(mockSubCourse, null);

  assert.strictEqual(trainer.currentLine.id, 'french-line-3');
  assert.strictEqual(trainer.activeLineTitle, 'Variation 3 (6.a3 Punish Early Overreach)');
  assert.strictEqual(trainer.dropdownSelectedVal, 3);
  assert.strictEqual(trainer.currentMode, 'learn');
  assert.strictEqual(trainer.isAllMasteredReviewPass, false);
  // Zero secondary re-renders: loadLine called exactly once
  assert.strictEqual(trainer.loadLineCallCount, 1);
});

test('Direct sub-module entry with 0 completed lines mounts on line 0', () => {
  const progress = new MockUserProgress([]);
  const trainer = new MockTrainerViewLifecycle(progress);

  trainer.loadSubCourse(mockSubCourse, null);

  assert.strictEqual(trainer.currentLine.id, 'french-line-0');
  assert.strictEqual(trainer.dropdownSelectedVal, 0);
  assert.strictEqual(trainer.loadLineCallCount, 1);
});

test('Direct sub-module entry with 100% completed lines mounts on line 0 in Review Pass mode', () => {
  const progress = new MockUserProgress([
    'french-line-0',
    'french-line-1',
    'french-line-2',
    'french-line-3',
    'french-line-4'
  ]);
  const trainer = new MockTrainerViewLifecycle(progress);

  trainer.loadSubCourse(mockSubCourse, null);

  assert.strictEqual(trainer.currentLine.id, 'french-line-0');
  assert.strictEqual(trainer.isAllMasteredReviewPass, true);
  assert.strictEqual(trainer.dropdownSelectedVal, 0);
  assert.strictEqual(trainer.loadLineCallCount, 1);
});

test('Manual onLearnModeClick aligns deterministically with direct mount resolution', () => {
  const progress = new MockUserProgress(['french-line-0', 'french-line-1', 'french-line-2']);
  const trainer = new MockTrainerViewLifecycle(progress);

  trainer.loadSubCourse(mockSubCourse, null);
  assert.strictEqual(trainer.currentLine.id, 'french-line-3');

  // Switch to practice mode
  trainer.selectMode('practice');
  assert.strictEqual(trainer.currentMode, 'practice');

  // Switch back to learn mode via onLearnModeClick
  trainer.selectMode('learn');
  assert.strictEqual(trainer.currentMode, 'learn');
  assert.strictEqual(trainer.currentLine.id, 'french-line-3');
  assert.strictEqual(trainer.dropdownSelectedVal, 3);
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL INITIAL LINE MOUNT LIFECYCLE TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
