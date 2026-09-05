/* ============================================================
   BUILD & EXPAND RUY LOPEZ REPERTOIRE (50 VALIDATED LINES)
   ============================================================ */

import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

import { ruyLopezBerlinLines as existingBerlin } from '../src/data/lines/ruy-lopez-berlin.js';
import { ruyLopezClosedLines as existingClosed } from '../src/data/lines/ruy-lopez-closed.js';
import { ruyLopezMarshallLines as existingMarshall } from '../src/data/lines/ruy-lopez-marshall.js';
import { ruyLopezSidelinesLines as existingSidelines } from '../src/data/lines/ruy-lopez-sidelines.js';
import { ruyLopezExchangeLines as existingExchange } from '../src/data/lines/ruy-lopez-exchange.js';
import { newRuyLopezLines } from './test-expanded-ruy-lopez.js';

const newBerlin = newRuyLopezLines.filter(l => l.subCourseId === 'ruy-lopez-berlin');
const newClosed = newRuyLopezLines.filter(l => l.subCourseId === 'ruy-lopez-closed');
const newMarshall = newRuyLopezLines.filter(l => l.subCourseId === 'ruy-lopez-marshall');
const newSidelines = newRuyLopezLines.filter(l => l.subCourseId === 'ruy-lopez-sidelines');
const newExchange = newRuyLopezLines.filter(l => l.subCourseId === 'ruy-lopez-exchange');

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

const allBerlin = validateLines([...existingBerlin, ...newBerlin], 'ruy-lopez-berlin');
const allClosed = validateLines([...existingClosed, ...newClosed], 'ruy-lopez-closed');
const allMarshall = validateLines([...existingMarshall, ...newMarshall], 'ruy-lopez-marshall');
const allSidelines = validateLines([...existingSidelines, ...newSidelines], 'ruy-lopez-sidelines');
const allExchange = validateLines([...existingExchange, ...newExchange], 'ruy-lopez-exchange');

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

writeLineFile(path.resolve('./src/data/lines/ruy-lopez-berlin.js'), 'ruyLopezBerlinLines', allBerlin, 'ruy-lopez-berlin');
writeLineFile(path.resolve('./src/data/lines/ruy-lopez-closed.js'), 'ruyLopezClosedLines', allClosed, 'ruy-lopez-closed');
writeLineFile(path.resolve('./src/data/lines/ruy-lopez-marshall.js'), 'ruyLopezMarshallLines', allMarshall, 'ruy-lopez-marshall');
writeLineFile(path.resolve('./src/data/lines/ruy-lopez-sidelines.js'), 'ruyLopezSidelinesLines', allSidelines, 'ruy-lopez-sidelines');
writeLineFile(path.resolve('./src/data/lines/ruy-lopez-exchange.js'), 'ruyLopezExchangeLines', allExchange, 'ruy-lopez-exchange');

console.log(`Successfully built Ruy Lopez:
- Berlin: ${allBerlin.length} lines
- Closed: ${allClosed.length} lines
- Marshall: ${allMarshall.length} lines
- Sidelines: ${allSidelines.length} lines
- Exchange: ${allExchange.length} lines
TOTAL RUY LOPEZ LINES: ${allBerlin.length + allClosed.length + allMarshall.length + allSidelines.length + allExchange.length}`);
