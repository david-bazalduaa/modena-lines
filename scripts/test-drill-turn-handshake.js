/* ============================================================
   AUTOMATED VERIFICATION TEST: DRILL TURN HANDSHAKE & PERSPECTIVE
   Tests turn detection at position 0, orientation flipping,
   and automated first-move triggers for Black & White repertoires.
   ============================================================ */

import { Chess } from 'chess.js';
global.Chess = Chess;
import { COURSES, getAllLines, getCourseById } from '../src/data/courses.js';
import { processLineData } from '../src/engine/chess-logic.js';
import {
  resolvePlayerColor,
  evaluatePositionZeroTurnState,
  computeInitialGroundTurnConfig
} from '../src/engine/game-loop.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  [PASS] ${message}`);
  } else {
    failed++;
    console.error(`  [FAIL] ${message}`);
  }
}

console.log('============================================================');
console.log('TEST SUITE 1: REPERTOIRE PERSPECTIVE & SIDE RESOLUTION');
console.log('============================================================');

const allLines = getAllLines();

// 1. Verify that all courses have a defined side
COURSES.forEach(course => {
  assert(
    course.side === 'white' || course.side === 'black',
    `Course "${course.id}" has explicit valid side: "${course.side}"`
  );

  // Verify that all subcourses inherit side
  if (course.subCourses) {
    course.subCourses.forEach(sub => {
      assert(
        sub.side === course.side,
        `SubCourse "${sub.id}" inherits parent side: "${sub.side}"`
      );
    });
  }
});

// 2. Verify resolvePlayerColor on all individual lines
allLines.forEach(rawLine => {
  const line = processLineData(rawLine);
  const resolvedSide = resolvePlayerColor(line, null, null);
  const expectedSide = ['pirc-defense', 'sicilian-defense', 'caro-kann'].includes(rawLine.courseId)
    ? 'black'
    : 'white';

  if (resolvedSide !== expectedSide) {
    assert(false, `Line "${line.id}" resolved side "${resolvedSide}", expected "${expectedSide}"`);
  }
});
assert(true, `All ${allLines.length} lines resolved correct perspective ('white' vs 'black')`);

console.log('\n============================================================');
console.log('TEST SUITE 2: TURN HANDSHAKE AT POSITION 0');
console.log('============================================================');

// Black Repertoire Handshake:
const gameBlack = new Chess();
const blackTurnState = evaluatePositionZeroTurnState('black', gameBlack);
assert(blackTurnState.isUserTurn === false, 'Black Repertoire at pos 0: isUserTurn is false');
assert(blackTurnState.shouldTriggerOpponentFirstMove === true, 'Black Repertoire at pos 0: shouldTriggerOpponentFirstMove is true');
assert(blackTurnState.turnColor === 'white', 'Black Repertoire at pos 0: active chess turn is white');
assert(blackTurnState.movableColor === 'black', 'Black Repertoire at pos 0: player movable color is black');

// White Repertoire Handshake:
const gameWhite = new Chess();
const whiteTurnState = evaluatePositionZeroTurnState('white', gameWhite);
assert(whiteTurnState.isUserTurn === true, 'White Repertoire at pos 0: isUserTurn is true');
assert(whiteTurnState.shouldTriggerOpponentFirstMove === false, 'White Repertoire at pos 0: shouldTriggerOpponentFirstMove is false');
assert(whiteTurnState.turnColor === 'white', 'White Repertoire at pos 0: active chess turn is white');
assert(whiteTurnState.movableColor === 'white', 'White Repertoire at pos 0: player movable color is white');

console.log('\n============================================================');
console.log('TEST SUITE 3: CHESSGROUND INPUT LOCKING & ORIENTATION');
console.log('============================================================');

// Black Perspective at Start (Before White plays):
const initialBlackGroundConfig = computeInitialGroundTurnConfig('black', new Map(), true);
assert(initialBlackGroundConfig.orientation === 'black', 'Black Ground Config: orientation is "black"');
assert(initialBlackGroundConfig.turnColor === 'white', 'Black Ground Config: turnColor is "white"');
assert(initialBlackGroundConfig.movable.color === 'black', 'Black Ground Config: movable.color is "black"');
assert(initialBlackGroundConfig.movable.dests.size === 0, 'Black Ground Config: dests is empty Map (student input locked)');

// White Perspective at Start:
const dummyWhiteDests = new Map([['e2', ['e4']]]);
const initialWhiteGroundConfig = computeInitialGroundTurnConfig('white', dummyWhiteDests, false);
assert(initialWhiteGroundConfig.orientation === 'white', 'White Ground Config: orientation is "white"');
assert(initialWhiteGroundConfig.turnColor === 'white', 'White Ground Config: turnColor is "white"');
assert(initialWhiteGroundConfig.movable.color === 'white', 'White Ground Config: movable.color is "white"');
assert(initialWhiteGroundConfig.movable.dests.size === 1, 'White Ground Config: student has active legal dests');

console.log('\n============================================================');
console.log('TEST SUITE 4: FIRST MOVE EXECUTION & SEAMLESS HANDOVER TO BLACK');
console.log('============================================================');

// Test first move trigger for Pirc, Sicilian, and Caro-Kann lines
const sampleBlackCourses = ['pirc-defense', 'sicilian-defense', 'caro-kann'];

sampleBlackCourses.forEach(courseId => {
  const course = getCourseById(courseId);
  assert(Boolean(course), `Course "${courseId}" found`);

  const sampleLine = course.subCourses[0].lines[0];
  const processed = processLineData(sampleLine);

  assert(processed.moves.length > 0, `Line "${processed.id}" has normalized moves`);

  const move0 = processed.moves[0]; // White's opening move (CPU)
  const move1 = processed.moves[1]; // Black's response (Player)

  // Simulate Engine executing move 0
  const simGame = new Chess();
  assert(simGame.turn() === 'w', 'Simulation game begins with turn "w"');

  const cpuMoveResult = simGame.move(move0.san);
  assert(Boolean(cpuMoveResult), `CPU successfully plays move 0 (${move0.san}) on chess board`);
  assert(simGame.turn() === 'b', `After move 0, turn transitions to "b" (Black)`);

  // Verify student can legally play their response move 1
  const studentMoveResult = simGame.move(move1.san);
  assert(Boolean(studentMoveResult), `Student can play response move 1 (${move1.san})`);
  assert(simGame.turn() === 'w', `After move 1, turn transitions back to "w"`);
});

console.log('\n============================================================');
console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
console.log('============================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY!');
}
