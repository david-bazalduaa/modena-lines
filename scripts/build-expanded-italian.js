/* ============================================================
   BUILD & EXPAND ITALIAN GAME REPERTOIRE (52 VALIDATED LINES)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { giuocoPianoLines as existingGiuoco } from '../src/data/lines/italian-giuoco.js';
import { evansGambitLines as existingEvans } from '../src/data/lines/italian-evans.js';
import { twoKnightsLines as existingTwoKnights } from '../src/data/lines/italian-two-knights.js';
import { pianissimoLines as existingPianissimo } from '../src/data/lines/italian-pianissimo.js';
import { newItalianLines } from './test-expanded-italian.js';

const newGiuoco = newItalianLines.filter(l => l.subCourseId === 'italian-giuoco-piano');
const newEvans = newItalianLines.filter(l => l.subCourseId === 'italian-evans-gambit');
const newTwoKnights = newItalianLines.filter(l => l.subCourseId === 'italian-two-knights');
const newPianissimo = newItalianLines.filter(l => l.subCourseId === 'italian-pianissimo');

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

const allGiuoco = validateLines([...existingGiuoco, ...newGiuoco], 'italian-giuoco');
const allEvans = validateLines([...existingEvans, ...newEvans], 'italian-evans');
const allTwoKnights = validateLines([...existingTwoKnights, ...newTwoKnights], 'italian-two-knights');
const allPianissimo = validateLines([...existingPianissimo, ...newPianissimo], 'italian-pianissimo');

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

writeLineFile(path.resolve('./src/data/lines/italian-giuoco.js'), 'giuocoPianoLines', allGiuoco, 'italian-giuoco-piano');
writeLineFile(path.resolve('./src/data/lines/italian-evans.js'), 'evansGambitLines', allEvans, 'italian-evans-gambit');
writeLineFile(path.resolve('./src/data/lines/italian-two-knights.js'), 'twoKnightsLines', allTwoKnights, 'italian-two-knights');
writeLineFile(path.resolve('./src/data/lines/italian-pianissimo.js'), 'pianissimoLines', allPianissimo, 'italian-pianissimo');

console.log(`Successfully built Italian Game:
- Giuoco Piano: ${allGiuoco.length} lines
- Evans Gambit: ${allEvans.length} lines
- Two Knights: ${allTwoKnights.length} lines
- Pianissimo: ${allPianissimo.length} lines
TOTAL ITALIAN GAME LINES: ${allGiuoco.length + allEvans.length + allTwoKnights.length + allPianissimo.length}`);
