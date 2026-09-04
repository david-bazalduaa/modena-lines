import { Chess } from 'chess.js';
import { allLines as whiteLines } from './build-all-punishments.js';
import { blackLines as sicilianLines } from './build-black-punishments.js';
import { caroAndPircLines } from './build-caro-pirc-punishments.js';

const all84 = [
  ...whiteLines,
  ...sicilianLines,
  ...caroAndPircLines
];

console.log(`\n========================================`);
console.log(`VERIFYING ALL ${all84.length} TACTICAL PUNISHMENT LINES`);
console.log(`========================================`);

let errors = 0;
const ids = new Set();
const subCourseCounts = {};

const whiteCourses = new Set(['italian-game', 'london-system', 'ruy-lopez']);
const blackCourses = new Set(['sicilian-defense', 'caro-kann', 'pirc-defense']);

for (let i = 0; i < all84.length; i++) {
  const line = all84[i];

  // Check ID
  if (!line.id) {
    console.error(`[FAIL] Line index ${i} missing ID`);
    errors++;
  } else if (ids.has(line.id)) {
    console.error(`[FAIL] Duplicate ID: ${line.id}`);
    errors++;
  }
  ids.add(line.id);

  // Track subcourse count
  subCourseCounts[line.subCourseId] = (subCourseCounts[line.subCourseId] || 0) + 1;

  // Validate chess moves
  const g = new Chess();
  const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (let p = 0; p < tokens.length; p++) {
    const t = tokens[p];
    if (!g.move(t, { sloppy: true })) {
      console.error(`[FAIL] [${line.id}] Illegal move '${t}' at ply ${p}`);
      errors++;
      break;
    }
  }

  const plyCount = tokens.length;
  if (plyCount < 16) {
    console.error(`[FAIL] [${line.id}] Ply count too short: ${plyCount} < 16`);
    errors++;
  }

  // Turn parity
  if (whiteCourses.has(line.courseId)) {
    if (g.turn() !== 'b') {
      console.error(`[FAIL] [${line.id}] White line does not end on White's move! turn=${g.turn()}`);
      errors++;
    }
  } else if (blackCourses.has(line.courseId)) {
    if (g.turn() !== 'w') {
      console.error(`[FAIL] [${line.id}] Black line does not end on Black's move! turn=${g.turn()}`);
      errors++;
    }
  } else {
    console.error(`[FAIL] [${line.id}] Unknown courseId: ${line.courseId}`);
    errors++;
  }

  // Assign exact previewFEN
  line.previewFEN = g.fen();

  // Validate annotations
  if (!line.annotations || Object.keys(line.annotations).length === 0) {
    console.error(`[FAIL] [${line.id}] Missing annotations`);
    errors++;
  } else {
    for (const k of Object.keys(line.annotations)) {
      const ply = parseInt(k, 10);
      if (isNaN(ply) || ply < 0 || ply >= plyCount) {
        console.error(`[FAIL] [${line.id}] Annotation ply ${k} out of bounds (0..${plyCount - 1})`);
        errors++;
      }
    }
  }
}

console.log(`\nSub-Course Distribution (${Object.keys(subCourseCounts).length} subcourses):`);
for (const [sc, cnt] of Object.entries(subCourseCounts).sort()) {
  console.log(`  ${sc.padEnd(35)}: ${cnt} lines`);
}

if (errors === 0) {
  console.log(`\nSUCCESS: ALL ${all84.length} LINES FULLY VALIDATED!`);
} else {
  console.error(`\nFAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
