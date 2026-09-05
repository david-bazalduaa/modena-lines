/* ============================================================
   BUILD & EXPAND PIRC DEFENSE REPERTOIRE (50 VALIDATED LINES)
   Black Repertoire: Expected Side: black (turn=w)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { pircClassicalLines as existingClassical } from '../src/data/lines/pirc-classical.js';
import { pircAustrianLines as existingAustrian } from '../src/data/lines/pirc-austrian.js';
import { pirc150AttackLines as existing150 } from '../src/data/lines/pirc-150-attack.js';
import { pircFianchettoLines as existingFianchetto } from '../src/data/lines/pirc-fianchetto.js';
import { pircSidelinesLines as existingSidelines } from '../src/data/lines/pirc-sidelines.js';
import { newPircLines } from './test-expanded-pirc.js';

const newClassical = newPircLines.filter(l => l.subCourseId === 'pirc-classical');
const newAustrian = newPircLines.filter(l => l.subCourseId === 'pirc-austrian');
const new150 = newPircLines.filter(l => l.subCourseId === 'pirc-150-attack');
const newFianchetto = newPircLines.filter(l => l.subCourseId === 'pirc-fianchetto');
const newSidelines = newPircLines.filter(l => l.subCourseId === 'pirc-sidelines');

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

const allClassical = validateLines([...existingClassical, ...newClassical], 'pirc-classical', 'black');
const allAustrian = validateLines([...existingAustrian, ...newAustrian], 'pirc-austrian', 'black');
const all150 = validateLines([...existing150, ...new150], 'pirc-150-attack', 'black');
const allFianchetto = validateLines([...existingFianchetto, ...newFianchetto], 'pirc-fianchetto', 'black');
const allSidelines = validateLines([...existingSidelines, ...newSidelines], 'pirc-sidelines', 'black');

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

writeLineFile(path.resolve('./src/data/lines/pirc-classical.js'), 'pircClassicalLines', allClassical, 'pirc-classical');
writeLineFile(path.resolve('./src/data/lines/pirc-austrian.js'), 'pircAustrianLines', allAustrian, 'pirc-austrian');
writeLineFile(path.resolve('./src/data/lines/pirc-150-attack.js'), 'pirc150AttackLines', all150, 'pirc-150-attack');
writeLineFile(path.resolve('./src/data/lines/pirc-fianchetto.js'), 'pircFianchettoLines', allFianchetto, 'pirc-fianchetto');
writeLineFile(path.resolve('./src/data/lines/pirc-sidelines.js'), 'pircSidelinesLines', allSidelines, 'pirc-sidelines');

console.log(`Successfully built Pirc Defense:
- Classical: ${allClassical.length} lines
- Austrian: ${allAustrian.length} lines
- 150 Attack: ${all150.length} lines
- Fianchetto: ${allFianchetto.length} lines
- Sidelines: ${allSidelines.length} lines
TOTAL PIRC DEFENSE LINES: ${allClassical.length + allAustrian.length + all150.length + allFianchetto.length + allSidelines.length}`);
