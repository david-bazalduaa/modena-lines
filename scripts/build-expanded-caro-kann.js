/* ============================================================
   BUILD & EXPAND CARO-KANN DEFENSE REPERTOIRE (50 VALIDATED LINES)
   Black Repertoire: Expected Side: black (turn=w)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { caroKannClassicalLines as existingClassical } from '../src/data/lines/caro-kann-classical.js';
import { caroKannAdvanceLines as existingAdvance } from '../src/data/lines/caro-kann-advance.js';
import { caroKannModernLines as existingModern } from '../src/data/lines/caro-kann-modern.js';
import { caroKannTwoKnightsLines as existingTwoKnights } from '../src/data/lines/caro-kann-two-knights.js';
import { caroKannPanovLines as existingPanov } from '../src/data/lines/caro-kann-panov.js';
import { newCaroKannLines } from './test-expanded-caro-kann.js';

const newClassical = newCaroKannLines.filter(l => l.subCourseId === 'caro-kann-classical');
const newAdvance = newCaroKannLines.filter(l => l.subCourseId === 'caro-kann-advance');
const newModern = newCaroKannLines.filter(l => l.subCourseId === 'caro-kann-modern');
const newTwoKnights = newCaroKannLines.filter(l => l.subCourseId === 'caro-kann-two-knights');
const newPanov = newCaroKannLines.filter(l => l.subCourseId === 'caro-kann-panov');

function validateLines(lines, subcourseName, expectedSide = 'black') {
  const seenIds = new Set();
  const processed = [];

  for (const line of lines) {
    if (seenIds.has(line.id)) {
      throw new Error(`Duplicate ID: ${line.id} in ${subcourseName}`);
    }
    seenIds.add(line.id);

    const g = new Chess();
    const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
    let previewFEN = '';

    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (!g.move(t, { sloppy: true })) {
        throw new Error(`Invalid move in ${line.id}: ply ${i} token '${t}'`);
      }
      if (i === 15 || (i === tokens.length - 1 && !previewFEN)) {
        previewFEN = g.fen();
      }
    }

    const expectedTurn = expectedSide === 'white' ? 'b' : 'w';
    if (g.turn() !== expectedTurn) {
      throw new Error(`Turn parity error in ${line.id}: expected turn=${expectedTurn}, got ${g.turn()}`);
    }

    processed.push({
      ...line,
      previewFEN: line.previewFEN || previewFEN || g.fen()
    });
  }

  return processed;
}

const allClassical = validateLines([...existingClassical, ...newClassical], 'caro-kann-classical', 'black');
const allAdvance = validateLines([...existingAdvance, ...newAdvance], 'caro-kann-advance', 'black');
const allModern = validateLines([...existingModern, ...newModern], 'caro-kann-modern', 'black');
const allTwoKnights = validateLines([...existingTwoKnights, ...newTwoKnights], 'caro-kann-two-knights', 'black');
const allPanov = validateLines([...existingPanov, ...newPanov], 'caro-kann-panov', 'black');

function writeLineFile(filePath, varName, lines, subcourseId) {
  const content = `/* ============================================================
   AUTONOMOUSLY CURATED PRACTICAL REPERTOIRE LINES
   Sub-course: ${subcourseId} (${lines.length} Master Lines)
   Tactical Blunder Punishments & Decisive Master Refutations
   ============================================================ */

export const ${varName} = ${JSON.stringify(lines, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf8');
}

writeLineFile(path.resolve('./src/data/lines/caro-kann-classical.js'), 'caroKannClassicalLines', allClassical, 'caro-kann-classical');
writeLineFile(path.resolve('./src/data/lines/caro-kann-advance.js'), 'caroKannAdvanceLines', allAdvance, 'caro-kann-advance');
writeLineFile(path.resolve('./src/data/lines/caro-kann-modern.js'), 'caroKannModernLines', allModern, 'caro-kann-modern');
writeLineFile(path.resolve('./src/data/lines/caro-kann-two-knights.js'), 'caroKannTwoKnightsLines', allTwoKnights, 'caro-kann-two-knights');
writeLineFile(path.resolve('./src/data/lines/caro-kann-panov.js'), 'caroKannPanovLines', allPanov, 'caro-kann-panov');

console.log(`Successfully built Caro-Kann Defense:
- Classical: ${allClassical.length} lines
- Advance: ${allAdvance.length} lines
- Modern / Tartakower: ${allModern.length} lines
- Two Knights: ${allTwoKnights.length} lines
- Panov-Botvinnik: ${allPanov.length} lines
TOTAL CARO-KANN DEFENSE LINES: ${allClassical.length + allAdvance.length + allModern.length + allTwoKnights.length + allPanov.length}`);
