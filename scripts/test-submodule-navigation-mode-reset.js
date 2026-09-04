/* ============================================================
   AUTOMATED TEST: SUB-MODULE NAVIGATION & MODE RESET LIFECYCLE
   Tests deterministic reset of training mode to 'learn' on
   every sub-module entry and clean teardown on route transitions.
   ============================================================ */

import { Chess } from 'chess.js';
global.Chess = Chess;
import { COURSES, getCourseById } from '../src/data/courses.js';
import { TrainerView } from '../src/ui/trainer-view.js';

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

// Mock jQuery and DOM methods for node environment
global.$ = (selector) => {
  const dummyEl = {
    length: 1,
    empty: () => dummyEl,
    html: () => dummyEl,
    text: () => dummyEl,
    append: () => dummyEl,
    find: () => dummyEl,
    val: () => '',
    prop: () => dummyEl,
    css: () => dummyEl,
    addClass: () => dummyEl,
    removeClass: () => dummyEl,
    hasClass: () => false,
    off: () => dummyEl,
    on: () => dummyEl
  };
  return dummyEl;
};
global.document = {
  getElementById: () => null,
  querySelector: () => null,
  documentElement: { style: { setProperty: () => {} } }
};
global.requestAnimationFrame = (fn) => setTimeout(fn, 0);

console.log('============================================================');
console.log('TEST SUITE: SUB-MODULE ENTRY & MODE RESET DETERMINISM');
console.log('============================================================');

const trainer = new TrainerView();
const italianCourse = getCourseById('italian-game');
const pircCourse = getCourseById('pirc-defense');

assert(Boolean(italianCourse && italianCourse.subCourses.length >= 2), 'Italian Game has >= 2 subcourses');
assert(Boolean(pircCourse && pircCourse.subCourses.length >= 2), 'Pirc Defense has >= 2 subcourses');

const sub1 = italianCourse.subCourses[0];
const sub2 = italianCourse.subCourses[1];
const pircSub1 = pircCourse.subCourses[0];

// 1. Initial subcourse load: should be 'learn'
trainer.loadSubCourse(sub1, 0, italianCourse);
assert(trainer.currentMode === 'learn', 'Initial subcourse load sets mode to "learn"');
assert(trainer.isBlindStreak === false, 'Initial subcourse load has isBlindStreak === false');

// 2. Switch mode in-session to 'drill'
trainer.currentMode = 'drill';
trainer.isBlindStreak = true;
trainer.streakScore = 5;
assert(trainer.currentMode === 'drill', 'In-session mode switch sets mode to "drill"');
assert(trainer.isBlindStreak === true, 'In-session mode switch sets isBlindStreak === true');

// 3. User navigates to a DIFFERENT sub-module in the same course
trainer.loadSubCourse(sub2, 0, italianCourse);
assert(trainer.currentMode === 'learn', 'Entering different subcourse resets mode to "learn"');
assert(trainer.isBlindStreak === false, 'Entering different subcourse resets isBlindStreak to false');
assert(trainer.streakScore === 0, 'Entering different subcourse resets streakScore to 0');

// 4. Switch mode in-session to 'practice'
trainer.currentMode = 'practice';
assert(trainer.currentMode === 'practice', 'In-session mode switch to "practice" works');

// 5. User navigates to a Black defense sub-module (e.g. Pirc Classical)
trainer.loadSubCourse(pircSub1, 0, pircCourse);
assert(trainer.currentMode === 'learn', 'Entering Black defense subcourse resets mode to "learn"');
assert(trainer.getPlayerColor() === 'black', 'Player perspective resolves to "black"');
assert(trainer.isBlindStreak === false, 'isBlindStreak is false');

// 6. Test teardownActiveSession on route navigation (Catalog / Hub)
trainer.currentMode = 'arena';
trainer.isBlindStreak = true;
trainer.streakScore = 8;
trainer.opponentMoveTimeout = setTimeout(() => {}, 10000);

trainer.teardownActiveSession();
assert(trainer.currentMode === 'learn', 'teardownActiveSession resets mode to "learn"');
assert(trainer.isBlindStreak === false, 'teardownActiveSession resets isBlindStreak to false');
assert(trainer.streakScore === 0, 'teardownActiveSession resets streakScore to 0');
assert(trainer.opponentMoveTimeout === null, 'teardownActiveSession clears pending opponent timeout');

console.log('\n============================================================');
console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
console.log('============================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY!');
}
