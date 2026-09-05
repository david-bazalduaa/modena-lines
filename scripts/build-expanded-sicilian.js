/* ============================================================
   BUILD & EXPAND SICILIAN DEFENSE REPERTOIRE (52 VALIDATED LINES)
   Black Repertoire: Expected Side: black (turn=w)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { sicilianNajdorfLines as existingNajdorf } from '../src/data/lines/sicilian-najdorf.js';
import { sicilianDragonLines as existingDragon } from '../src/data/lines/sicilian-dragon.js';
import { sicilianSveshnikovLines as existingSveshnikov } from '../src/data/lines/sicilian-sveshnikov.js';
import { sicilianAntiLines as existingAnti } from '../src/data/lines/sicilian-anti.js';
import { newSicilianLines } from './test-expanded-sicilian.js';

const newNajdorf = newSicilianLines.filter(l => l.subCourseId === 'sicilian-najdorf');
const newDragon = newSicilianLines.filter(l => l.subCourseId === 'sicilian-dragon');
const newSveshnikov = newSicilianLines.filter(l => l.subCourseId === 'sicilian-sveshnikov');
const newAnti = newSicilianLines.filter(l => l.subCourseId === 'sicilian-anti');

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

const allNajdorf = validateLines([...existingNajdorf, ...newNajdorf], 'sicilian-najdorf', 'black');
const allDragon = validateLines([...existingDragon, ...newDragon], 'sicilian-dragon', 'black');
const allSveshnikov = validateLines([...existingSveshnikov, ...newSveshnikov], 'sicilian-sveshnikov', 'black');
const allAnti = validateLines([...existingAnti, ...newAnti], 'sicilian-anti', 'black');

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

writeLineFile(path.resolve('./src/data/lines/sicilian-najdorf.js'), 'sicilianNajdorfLines', allNajdorf, 'sicilian-najdorf');
writeLineFile(path.resolve('./src/data/lines/sicilian-dragon.js'), 'sicilianDragonLines', allDragon, 'sicilian-dragon');
writeLineFile(path.resolve('./src/data/lines/sicilian-sveshnikov.js'), 'sicilianSveshnikovLines', allSveshnikov, 'sicilian-sveshnikov');
writeLineFile(path.resolve('./src/data/lines/sicilian-anti.js'), 'sicilianAntiLines', allAnti, 'sicilian-anti');

console.log(`Successfully built Sicilian Defense:
- Najdorf: ${allNajdorf.length} lines
- Dragon: ${allDragon.length} lines
- Sveshnikov: ${allSveshnikov.length} lines
- Anti-Sicilians: ${allAnti.length} lines
TOTAL SICILIAN DEFENSE LINES: ${allNajdorf.length + allDragon.length + allSveshnikov.length + allAnti.length}`);
