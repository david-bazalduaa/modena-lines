import fs from 'fs';
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
console.log(`STEP 1: VALIDATING ALL ${all84.length} LINES BEFORE APPENDING`);
console.log(`========================================`);

const whiteCourses = new Set(['italian-game', 'london-system', 'ruy-lopez']);
const blackCourses = new Set(['sicilian-defense', 'caro-kann', 'pirc-defense']);

const subCourseGroups = {};

for (const line of all84) {
  const g = new Chess();
  const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (let p = 0; p < tokens.length; p++) {
    const t = tokens[p];
    if (!g.move(t, { sloppy: true })) {
      throw new Error(`[${line.id}] Illegal move '${t}' at ply ${p}`);
    }
  }

  // Check turn parity
  if (whiteCourses.has(line.courseId) && g.turn() !== 'b') {
    throw new Error(`[${line.id}] White line does not end on White's move! turn=${g.turn()}`);
  }
  if (blackCourses.has(line.courseId) && g.turn() !== 'w') {
    throw new Error(`[${line.id}] Black line does not end on Black's move! turn=${g.turn()}`);
  }

  // Set accurate previewFEN
  line.previewFEN = g.fen();

  if (!subCourseGroups[line.subCourseId]) {
    subCourseGroups[line.subCourseId] = [];
  }
  subCourseGroups[line.subCourseId].push(line);
}

console.log(`Validation passed! Grouped across ${Object.keys(subCourseGroups).length} subcourses.`);

const subCourseToFile = {
  'italian-giuoco-piano': 'src/data/lines/italian-giuoco.js',
  'italian-evans-gambit': 'src/data/lines/italian-evans.js',
  'italian-two-knights': 'src/data/lines/italian-two-knights.js',
  'italian-pianissimo': 'src/data/lines/italian-pianissimo.js',

  'london-classical-symmetrical': 'src/data/lines/london-classical.js',
  'london-kings-indian-grunfeld': 'src/data/lines/london-kings-indian.js',
  'london-queens-indian-benoni': 'src/data/lines/london-queens-indian.js',
  'london-sharp-jobava-steinitz': 'src/data/lines/london-sharp-jobava.js',

  'ruy-lopez-berlin-open': 'src/data/lines/ruy-lopez-berlin.js',
  'ruy-lopez-closed-mainlines': 'src/data/lines/ruy-lopez-closed.js',
  'ruy-lopez-marshall-anti': 'src/data/lines/ruy-lopez-marshall.js',
  'ruy-lopez-sidelines-gambits': 'src/data/lines/ruy-lopez-sidelines.js',
  'ruy-lopez-exchange-modern': 'src/data/lines/ruy-lopez-exchange.js',

  'sicilian-najdorf': 'src/data/lines/sicilian-najdorf.js',
  'sicilian-dragon-scheveningen': 'src/data/lines/sicilian-dragon.js',
  'sicilian-sveshnikov-classical': 'src/data/lines/sicilian-sveshnikov.js',
  'sicilian-anti-systems': 'src/data/lines/sicilian-anti.js',

  'caro-kann-classical': 'src/data/lines/caro-kann-classical.js',
  'caro-kann-advance': 'src/data/lines/caro-kann-advance.js',
  'caro-kann-modern-korchnoi': 'src/data/lines/caro-kann-modern.js',
  'caro-kann-two-knights-fantasy': 'src/data/lines/caro-kann-two-knights.js',
  'caro-kann-panov-attack': 'src/data/lines/caro-kann-panov.js',

  'pirc-classical-system': 'src/data/lines/pirc-classical.js',
  'pirc-austrian-attack': 'src/data/lines/pirc-austrian.js',
  'pirc-150-attack': 'src/data/lines/pirc-150-attack.js',
  'pirc-fianchetto-system': 'src/data/lines/pirc-fianchetto.js',
  'pirc-aggressive-sidelines': 'src/data/lines/pirc-sidelines.js'
};

function formatLineObject(line) {
  const annotationsStr = Object.entries(line.annotations)
    .map(([ply, note]) => `      ${ply}: ${JSON.stringify(note)}`)
    .join(',\n');

  return `  {
    id: ${JSON.stringify(line.id)},
    courseId: ${JSON.stringify(line.courseId)},
    subCourseId: ${JSON.stringify(line.subCourseId)},
    name: ${JSON.stringify(line.name)},
    shortName: ${JSON.stringify(line.shortName)},
    category: ${JSON.stringify(line.category)},
    eco: ${JSON.stringify(line.eco)},
    pgn: ${JSON.stringify(line.pgn)},
    fullAnnotation: ${JSON.stringify(line.fullAnnotation)},
    previewFEN: ${JSON.stringify(line.previewFEN)},
    annotations: {
${annotationsStr}
    }
  }`;
}

console.log(`\n========================================`);
console.log(`STEP 2: APPENDING LINES TO 27 SUBMODULE FILES`);
console.log(`========================================`);

let totalAppended = 0;

for (const [subCourseId, lines] of Object.entries(subCourseGroups)) {
  const filePath = subCourseToFile[subCourseId];
  if (!filePath) {
    throw new Error(`Missing file mapping for subCourseId: ${subCourseId}`);
  }

  const originalContent = fs.readFileSync(filePath, 'utf8');

  // Check if lines were already appended
  if (originalContent.includes(lines[0].id)) {
    console.log(`[SKIP] Lines for ${subCourseId} already present in ${filePath}`);
    continue;
  }

  const closeIdx = originalContent.indexOf('\n];');
  if (closeIdx === -1) {
    throw new Error(`Cannot find '\\n];' in ${filePath}`);
  }

  const before = originalContent.slice(0, closeIdx);
  const after = originalContent.slice(closeIdx);

  const formattedLinesBlock = lines.map(formatLineObject).join(',\n');

  const insertion = `,\n\n  // ============================================================\n  // TACTICAL PUNISHMENT & BLUNDER REFUTATION LINES\n  // ============================================================\n${formattedLinesBlock}`;

  const newContent = before + insertion + after;
  fs.writeFileSync(filePath, newContent, 'utf8');

  console.log(`[OK] Appended ${lines.length} lines to ${filePath} (${subCourseId})`);
  totalAppended += lines.length;
}

console.log(`\nDONE! Appended ${totalAppended} lines across all files.`);
