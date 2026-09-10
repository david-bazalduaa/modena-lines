import { COURSES, getAllLines, getCourseById, getSubCourseById } from '../src/data/courses.js';
import { resolvePlayerColor } from '../src/engine/game-loop.js';
import { processLineData } from '../src/engine/chess-logic.js';
import { Chess } from 'chess.js';

const expectedCourses = [
  {
    id: 'french-defense',
    title: 'French Defense Master Repertoire',
    subCourses: [
      'french-advance-overreach',
      'french-winawer-tactics',
      'french-classical-steinitz',
      'french-tarrasch-exchange'
    ]
  },
  {
    id: 'kings-indian-defense',
    title: 'King\'s Indian Defense Master Repertoire',
    subCourses: [
      'kid-classical-avalanche',
      'kid-samisch-blunders',
      'kid-averbakh-four-pawns',
      'kid-fianchetto-sidelines'
    ]
  },
  {
    id: 'nimzo-indian-defense',
    title: 'Nimzo-Indian Defense Master Repertoire',
    subCourses: [
      'nimzo-rubinstein-classical',
      'nimzo-samisch-blunders',
      'nimzo-leningrad-bg5',
      'nimzo-check-fork-oversights'
    ]
  },
  {
    id: 'slav-defense',
    title: 'Slav Defense Master Repertoire',
    subCourses: [
      'slav-classical-exploitation',
      'slav-semi-meran-traps',
      'slav-exchange-oversights',
      'slav-gambit-refutations'
    ]
  },
  {
    id: 'scandinavian-defense',
    title: 'Scandinavian Defense Master Repertoire',
    subCourses: [
      'scandi-mieses-kotrc',
      'scandi-modern-variation',
      'scandi-early-white-blunders',
      'scandi-portuguese-icelandic'
    ]
  },
  {
    id: 'grunfeld-defense',
    title: 'Grünfeld Defense Master Repertoire',
    subCourses: [
      'grunfeld-exchange-demolition',
      'grunfeld-russian-system',
      'grunfeld-seirawan-modern',
      'grunfeld-unsound-flank'
    ]
  }
];

console.log('============================================================');
console.log('TEST SUITE: BLACK DEFENSES COURSE REGISTRY & INTEGRATION');
console.log('============================================================');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failed++;
  }
}

expectedCourses.forEach(({ id, title, subCourses }) => {
  console.log(`\n--- Verifying Course: ${id} ---`);
  const course = getCourseById(id);
  assert(course !== null, `getCourseById("${id}") found course`);
  assert(course.side === 'black', `Course "${id}" side is 'black'`);
  assert(course.category === 'Black Defenses', `Course "${id}" category is 'Black Defenses'`);
  assert(course.subCourses.length === 4, `Course "${id}" has exactly 4 subcourses`);

  let courseTotalLines = 0;
  let tacticalCount = 0;
  let anchorCount = 0;

  subCourses.forEach(subId => {
    const sub = getSubCourseById(subId);
    assert(sub !== null, `getSubCourseById("${subId}") found`);
    assert(sub.side === 'black', `SubCourse "${subId}" side is 'black'`);
    assert(sub.lines.length === 13, `SubCourse "${subId}" has exactly 13 lines (got ${sub.lines.length})`);

    sub.lines.forEach(line => {
      courseTotalLines++;
      if (line.category === 'Tactical Punishment') tacticalCount++;
      if (line.category === 'Anchor Mainline') anchorCount++;

      // Verify side resolution
      const processed = processLineData(line);
      assert(processed.side === 'black', `Line "${line.id}" processed side is 'black'`);
      const resolved = resolvePlayerColor(processed, sub, course);
      if (resolved !== 'black') {
        assert(false, `Line "${line.id}" resolvePlayerColor returned "${resolved}"`);
      }

      // Verify line ends on Black's move
      const game = new Chess();
      const tokens = line.pgn.split(/\s+/).filter(t => t !== '' && !/^\d+\.$/.test(t));
      tokens.forEach(t => game.move(t, { sloppy: true }));
      if (game.turn() !== 'w') {
        assert(false, `Line "${line.id}" turn is '${game.turn()}' (expected 'w' for Black line)`);
      }
      if (tokens.length < 16) {
        assert(false, `Line "${line.id}" ply count ${tokens.length} < 16`);
      }
    });
  });

  assert(courseTotalLines === 52, `Course "${id}" total lines = 52 (got ${courseTotalLines})`);
  const tacticalRatio = Math.round((tacticalCount / courseTotalLines) * 100);
  assert(tacticalRatio >= 75, `Course "${id}" tactical ratio = ${tacticalRatio}% (${tacticalCount} Tactical, ${anchorCount} Anchors) >= 75%`);
});

// Verify all lines in getAllLines
console.log('\n--- Verifying Global Line Registry ---');
const allLines = getAllLines();
console.log(`Total lines in application registry: ${allLines.length}`);
assert(allLines.length >= 898, `getAllLines() contains at least 898 lines (got ${allLines.length})`);

console.log('\n============================================================');
console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`);
console.log('============================================================');

if (failed === 0) {
  console.log('ALL INTEGRATION TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error(`FAILED: ${failed} tests failed.`);
  process.exit(1);
}
