/* ============================================================
   BUILD & EXPAND LONDON SYSTEM REPERTOIRE (52 VALIDATED LINES)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { londonClassicalLines as existingClassical } from '../src/data/lines/london-classical.js';
import { londonKingsIndianLines as existingKID } from '../src/data/lines/london-kings-indian.js';
import { londonQueensIndianLines as existingQID } from '../src/data/lines/london-queens-indian.js';
import { londonSharpJobavaLines as existingJobava } from '../src/data/lines/london-sharp-jobava.js';
import { newLondonLines } from './test-expanded-london.js';

const newClassical = newLondonLines.filter(l => l.subCourseId === 'london-classical');
const newKID = newLondonLines.filter(l => l.subCourseId === 'london-kings-indian');
const newQID = newLondonLines.filter(l => l.subCourseId === 'london-queens-indian');
const newJobava = newLondonLines.filter(l => l.subCourseId === 'london-sharp-jobava');

function validateLines(lines, subcourseName, expectedSide = 'white') {
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

const allClassical = validateLines([...existingClassical, ...newClassical], 'london-classical');
const allKID = validateLines([...existingKID, ...newKID], 'london-kings-indian');
const allQID = validateLines([...existingQID, ...newQID], 'london-queens-indian');
const allJobava = validateLines([...existingJobava, ...newJobava], 'london-sharp-jobava');

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

writeLineFile(path.resolve('./src/data/lines/london-classical.js'), 'londonClassicalLines', allClassical, 'london-classical');
writeLineFile(path.resolve('./src/data/lines/london-kings-indian.js'), 'londonKingsIndianLines', allKID, 'london-kings-indian');
writeLineFile(path.resolve('./src/data/lines/london-queens-indian.js'), 'londonQueensIndianLines', allQID, 'london-queens-indian');
writeLineFile(path.resolve('./src/data/lines/london-sharp-jobava.js'), 'londonSharpJobavaLines', allJobava, 'london-sharp-jobava');

console.log(`Successfully built London System:
- Classical: ${allClassical.length} lines
- King's Indian: ${allKID.length} lines
- Queen's Indian / Slav: ${allQID.length} lines
- Sharp Jobava: ${allJobava.length} lines
TOTAL LONDON SYSTEM LINES: ${allClassical.length + allKID.length + allQID.length + allJobava.length}`);
