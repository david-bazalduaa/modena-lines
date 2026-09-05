import fs from 'fs';
import path from 'path';

const subcourseFileMap = {
  // Italian Game (4)
  'italian-giuoco-piano': { file: 'italian-giuoco.js', exportName: 'giuocoPianoLines' },
  'italian-evans-gambit': { file: 'italian-evans.js', exportName: 'evansGambitLines' },
  'italian-two-knights': { file: 'italian-two-knights.js', exportName: 'twoKnightsLines' },
  'italian-pianissimo': { file: 'italian-pianissimo.js', exportName: 'pianissimoLines' },

  // London System (4)
  'london-classical-symmetrical': { file: 'london-classical.js', exportName: 'londonClassicalLines' },
  'london-kings-indian-grunfeld': { file: 'london-kings-indian.js', exportName: 'londonKingsIndianLines' },
  'london-queens-indian-benoni': { file: 'london-queens-indian.js', exportName: 'londonQueensIndianLines' },
  'london-sharp-jobava-steinitz': { file: 'london-sharp-jobava.js', exportName: 'londonSharpJobavaLines' },

  // Ruy Lopez (5)
  'ruy-lopez-berlin-open': { file: 'ruy-lopez-berlin.js', exportName: 'ruyLopezBerlinLines' },
  'ruy-lopez-closed-mainlines': { file: 'ruy-lopez-closed.js', exportName: 'ruyLopezClosedLines' },
  'ruy-lopez-marshall-anti': { file: 'ruy-lopez-marshall.js', exportName: 'ruyLopezMarshallLines' },
  'ruy-lopez-sidelines-gambits': { file: 'ruy-lopez-sidelines.js', exportName: 'ruyLopezSidelinesLines' },
  'ruy-lopez-exchange-modern': { file: 'ruy-lopez-exchange.js', exportName: 'ruyLopezExchangeLines' },

  // Sicilian Defense (4)
  'sicilian-najdorf': { file: 'sicilian-najdorf.js', exportName: 'sicilianNajdorfLines' },
  'sicilian-dragon-scheveningen': { file: 'sicilian-dragon.js', exportName: 'sicilianDragonLines' },
  'sicilian-sveshnikov-classical': { file: 'sicilian-sveshnikov.js', exportName: 'sicilianSveshnikovLines' },
  'sicilian-anti-systems': { file: 'sicilian-anti.js', exportName: 'sicilianAntiLines' },

  // Caro-Kann Defense (5)
  'caro-kann-classical': { file: 'caro-kann-classical.js', exportName: 'caroKannClassicalLines' },
  'caro-kann-advance': { file: 'caro-kann-advance.js', exportName: 'caroKannAdvanceLines' },
  'caro-kann-modern-korchnoi': { file: 'caro-kann-modern.js', exportName: 'caroKannModernLines' },
  'caro-kann-two-knights-fantasy': { file: 'caro-kann-two-knights.js', exportName: 'caroKannTwoKnightsLines' },
  'caro-kann-panov-attack': { file: 'caro-kann-panov.js', exportName: 'caroKannPanovLines' },

  // Pirc Defense (5)
  'pirc-classical-system': { file: 'pirc-classical.js', exportName: 'pircClassicalLines' },
  'pirc-austrian-attack': { file: 'pirc-austrian.js', exportName: 'pircAustrianLines' },
  'pirc-150-attack': { file: 'pirc-150-attack.js', exportName: 'pirc150AttackLines' },
  'pirc-fianchetto-system': { file: 'pirc-fianchetto.js', exportName: 'pircFianchettoLines' },
  'pirc-aggressive-sidelines': { file: 'pirc-sidelines.js', exportName: 'pircSidelinesLines' }
};

async function run() {
  const whiteMod = await import('./curated-white-repertoires.js');
  const blackMod = await import('./curated-black-repertoires.js');

  const allLines = [...whiteMod.curatedWhiteLines, ...blackMod.curatedBlackLines];
  console.log(`Loaded ${allLines.length} total curated lines.`);

  const bySubcourse = {};
  for (const line of allLines) {
    if (!bySubcourse[line.subCourseId]) {
      bySubcourse[line.subCourseId] = [];
    }
    bySubcourse[line.subCourseId].push(line);
  }

  const linesDir = path.resolve('./src/data/lines');

  for (const [subCourseId, config] of Object.entries(subcourseFileMap)) {
    const lines = bySubcourse[subCourseId] || [];
    if (lines.length === 0) {
      console.error(`WARNING: No lines found for ${subCourseId}!`);
      continue;
    }

    const targetFile = path.join(linesDir, config.file);
    const content = `/* ============================================================
   AUTONOMOUSLY CURATED PRACTICAL REPERTOIRE LINES
   Sub-course: ${subCourseId} (${lines.length} Master Lines)
   Tactical Blunder Punishments & Decisive Master Refutations
   ============================================================ */

export const ${config.exportName} = ${JSON.stringify(lines, null, 2)};
`;

    fs.writeFileSync(targetFile, content, 'utf-8');
    const tacticalCount = lines.filter(l => l.category !== 'Main Line').length;
    const pct = ((tacticalCount / lines.length) * 100).toFixed(1);
    console.log(`Applied -> ${config.file} (${lines.length} lines: ${tacticalCount} tactical = ${pct}%)`);
  }

  console.log('All 27 subcourse files successfully updated!');
}

run();
