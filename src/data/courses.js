/* ============================================================
   MASTER COURSES REGISTRY & LINE AGGREGATION
   ============================================================ */

import { giuocoPianoLine } from './lines/italian-giuoco.js';
import { evansGambitLine } from './lines/italian-evans.js';
import { friedLiverLine } from './lines/italian-fried-liver.js';
import { polerioCounterLine } from './lines/italian-polerio.js';
import { giuocoPianissimoLine } from './lines/italian-pianissimo.js';

export const COURSES = [
  {
    id: 'italian-game',
    title: 'Italian Game Master Repertoire',
    subtitle: 'Classic 1. e4 e5 2. Nf3 Nc6 3. Bc4 Openings',
    category: '1. e4 Openings',
    description: 'Master White\u2019s classical initiative with sharp gambits, tactical sacrifices, and strategic maneuvering.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    lines: [
      giuocoPianoLine,
      evansGambitLine,
      friedLiverLine,
      polerioCounterLine,
      giuocoPianissimoLine
    ]
  },
  {
    id: 'sicilian-defense',
    title: 'Sicilian Defense Openings',
    subtitle: '1. e4 c5 Dynamic Counter-Attacks',
    category: '1. e4 Counter',
    description: 'Crush the Sicilian with aggressive Open Sicilian & Grand Prix Attack lines.',
    previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    lines: []
  },
  {
    id: 'ruy-lopez',
    title: 'Ruy Lopez Spanish Game',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Classical Battle',
    category: '1. e4 Openings',
    description: 'Master the Spanish Torture with long-term strategic positional pressure.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    lines: []
  }
];

export function getAllLines() {
  const lines = [];
  COURSES.forEach(course => {
    course.lines.forEach(line => {
      lines.push(line);
    });
  });
  return lines;
}
