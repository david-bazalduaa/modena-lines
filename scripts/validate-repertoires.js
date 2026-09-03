/* ============================================================
   REPERTOIRE AUTOMATED VALIDATION TEST SCRIPT
   Validates every move token with chess.js for London & Pirc lines
   ============================================================ */

import { Chess } from 'chess.js';
import { londonClassicalLines } from '../src/data/lines/london-classical.js';
import { londonKingsIndianLines } from '../src/data/lines/london-kings-indian.js';
import { londonQueensIndianLines } from '../src/data/lines/london-queens-indian.js';
import { londonSharpJobavaLines } from '../src/data/lines/london-sharp-jobava.js';

import { pircClassicalLines } from '../src/data/lines/pirc-classical.js';
import { pircAustrianLines } from '../src/data/lines/pirc-austrian.js';
import { pirc150AttackLines } from '../src/data/lines/pirc-150-attack.js';
import { pircFianchettoLines } from '../src/data/lines/pirc-fianchetto.js';
import { pircSidelinesLines } from '../src/data/lines/pirc-sidelines.js';

const londonLines = [
  ...londonClassicalLines,
  ...londonKingsIndianLines,
  ...londonQueensIndianLines,
  ...londonSharpJobavaLines
];

const pircLines = [
  ...pircClassicalLines,
  ...pircAustrianLines,
  ...pirc150AttackLines,
  ...pircFianchettoLines,
  ...pircSidelinesLines
];

console.log(`\n========================================`);
console.log(`VALIDATING MASTER OPENING REPERTOIRES`);
console.log(`========================================`);
console.log(`London System lines: ${londonLines.length} (Requirement: >= 25)`);
console.log(`Pirc Defense lines:  ${pircLines.length} (Requirement: >= 25)`);

let errors = 0;

function validateRepertoire(name, lines, expectedSide) {
  console.log(`\n--- Validating ${name} (${lines.length} lines) ---`);
  
  if (lines.length < 25) {
    console.error(`[FAIL] ${name} has fewer than 25 lines: ${lines.length}`);
    errors++;
  }

  const ids = new Set();

  lines.forEach((line, index) => {
    // Check unique ID
    if (!line.id || ids.has(line.id)) {
      console.error(`[FAIL] Line index ${index}: Duplicate or missing ID '${line.id}'`);
      errors++;
    }
    ids.add(line.id);

    // Validate PGN with chess.js
    const tokens = line.pgn.split(/\s+/).filter(t => t !== '' && !/^\d+\.$/.test(t));
    const game = new Chess();

    for (let p = 0; p < tokens.length; p++) {
      const token = tokens[p];
      const res = game.move(token, { sloppy: true });
      if (!res) {
        console.error(`[FAIL] [${line.id}] Illegal move '${token}' at ply ${p} in PGN: ${line.pgn}`);
        errors++;
        break;
      }
    }

    const plyCount = tokens.length;
    if (plyCount < 16) {
      console.error(`[FAIL] [${line.id}] Ply depth too short (${plyCount} < 16)`);
      errors++;
    }

    // Check preview FEN validity
    if (line.previewFEN) {
      const fenTest = new Chess();
      if (!fenTest.load(line.previewFEN)) {
        console.error(`[FAIL] [${line.id}] Invalid previewFEN: ${line.previewFEN}`);
        errors++;
      }
    }

    // Validate annotations
    if (line.annotations) {
      for (const plyKey of Object.keys(line.annotations)) {
        const plyNum = parseInt(plyKey, 10);
        if (isNaN(plyNum) || plyNum < 0 || plyNum >= plyCount) {
          console.error(`[FAIL] [${line.id}] Annotation ply key ${plyKey} out of bounds (0..${plyCount-1})`);
          errors++;
        }
      }
    }
  });
}

validateRepertoire('London System', londonLines, 'white');
validateRepertoire('Pirc Defense', pircLines, 'black');

console.log(`\n========================================`);
if (errors === 0) {
  console.log(`SUCCESS: All 56 lines validated with 0 errors!`);
  process.exit(0);
} else {
  console.error(`FAILED: Found ${errors} validation errors.`);
  process.exit(1);
}
