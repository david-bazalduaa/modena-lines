/* ============================================================
   REPERTOIRE AUTOMATED VALIDATION TEST SUITE
   Validates every move token with chess.js for London, Pirc,
   Ruy Lopez, Sicilian Defense, and Caro-Kann Defense lines.
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

import { ruyLopezBerlinLines } from '../src/data/lines/ruy-lopez-berlin.js';
import { ruyLopezClosedLines } from '../src/data/lines/ruy-lopez-closed.js';
import { ruyLopezMarshallLines } from '../src/data/lines/ruy-lopez-marshall.js';
import { ruyLopezSidelinesLines } from '../src/data/lines/ruy-lopez-sidelines.js';
import { ruyLopezExchangeLines } from '../src/data/lines/ruy-lopez-exchange.js';

import { sicilianNajdorfLines } from '../src/data/lines/sicilian-najdorf.js';
import { sicilianDragonLines } from '../src/data/lines/sicilian-dragon.js';
import { sicilianSveshnikovLines } from '../src/data/lines/sicilian-sveshnikov.js';
import { sicilianAntiLines } from '../src/data/lines/sicilian-anti.js';

import { caroKannClassicalLines } from '../src/data/lines/caro-kann-classical.js';
import { caroKannAdvanceLines } from '../src/data/lines/caro-kann-advance.js';
import { caroKannModernLines } from '../src/data/lines/caro-kann-modern.js';
import { caroKannTwoKnightsLines } from '../src/data/lines/caro-kann-two-knights.js';
import { caroKannPanovLines } from '../src/data/lines/caro-kann-panov.js';

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

const ruyLopezLines = [
  ...ruyLopezBerlinLines,
  ...ruyLopezClosedLines,
  ...ruyLopezMarshallLines,
  ...ruyLopezSidelinesLines,
  ...ruyLopezExchangeLines
];

const sicilianLines = [
  ...sicilianNajdorfLines,
  ...sicilianDragonLines,
  ...sicilianSveshnikovLines,
  ...sicilianAntiLines
];

const caroKannLines = [
  ...caroKannClassicalLines,
  ...caroKannAdvanceLines,
  ...caroKannModernLines,
  ...caroKannTwoKnightsLines,
  ...caroKannPanovLines
];

console.log(`\n========================================`);
console.log(`VALIDATING MASTER OPENING REPERTOIRES`);
console.log(`========================================`);
console.log(`London System:    ${londonLines.length} lines (Requirement: >= 25)`);
console.log(`Pirc Defense:     ${pircLines.length} lines (Requirement: >= 25)`);
console.log(`Ruy Lopez:        ${ruyLopezLines.length} lines (Requirement: >= 25)`);
console.log(`Sicilian Defense: ${sicilianLines.length} lines (Requirement: >= 25)`);
console.log(`Caro-Kann:        ${caroKannLines.length} lines (Requirement: >= 25)`);

let errors = 0;
const allIds = new Set();

function validateRepertoire(name, lines, expectedSide) {
  console.log(`\n--- Validating ${name} (${lines.length} lines, Expected Side: ${expectedSide}) ---`);
  
  if (lines.length < 25) {
    console.error(`[FAIL] ${name} has fewer than 25 lines: ${lines.length}`);
    errors++;
  }

  lines.forEach((line, index) => {
    // Check unique ID across all repertoires
    if (!line.id) {
      console.error(`[FAIL] ${name} index ${index}: Missing ID`);
      errors++;
    } else if (allIds.has(line.id)) {
      console.error(`[FAIL] Duplicate ID across codebase: '${line.id}'`);
      errors++;
    }
    allIds.add(line.id);

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

    // Validate turn parity:
    // If White repertoire (student is White), ply count must be odd (0-indexed ends on even, turn becomes 'b')
    // If Black repertoire (student is Black), ply count must be even (0-indexed ends on odd, turn becomes 'w')
    if (expectedSide === 'white' && game.turn() !== 'b') {
      console.error(`[FAIL] [${line.id}] White line does not conclude on White's move (turn=${game.turn()}, plies=${plyCount})`);
      errors++;
    } else if (expectedSide === 'black' && game.turn() !== 'w') {
      console.error(`[FAIL] [${line.id}] Black line does not conclude on Black's move (turn=${game.turn()}, plies=${plyCount})`);
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
validateRepertoire('Ruy Lopez', ruyLopezLines, 'white');
validateRepertoire('Sicilian Defense', sicilianLines, 'black');
validateRepertoire('Caro-Kann Defense', caroKannLines, 'black');

const totalLines = londonLines.length + pircLines.length + ruyLopezLines.length + sicilianLines.length + caroKannLines.length;

console.log(`\n========================================`);
if (errors === 0) {
  console.log(`SUCCESS: All ${totalLines} master lines validated with 0 errors!`);
  process.exit(0);
} else {
  console.error(`FAILED: Found ${errors} validation errors.`);
  process.exit(1);
}
