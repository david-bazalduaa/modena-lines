/* ============================================================
   MASTER COURSES REGISTRY & 3-LEVEL SUB-COURSE MODULES
   ============================================================ */

import { giuocoPianoLine, giuocoMoellerLine, giuocoSolidLine } from './lines/italian-giuoco.js';
import { evansGambitLine, evansLaskerLine, evansDeclinedLine } from './lines/italian-evans.js';
import { friedLiverLine } from './lines/italian-fried-liver.js';
import { polerioCounterLine } from './lines/italian-polerio.js';
import { traxlerRefutationLine } from './lines/italian-traxler.js';
import { pianissimoSuperGMLine, pianissimoNc3Line } from './lines/italian-pianissimo.js';

export const COURSES = [
  {
    id: 'italian-game',
    title: 'Italian Game Master Repertoire',
    subtitle: 'Classic 1. e4 e5 2. Nf3 Nc6 3. Bc4 Openings',
    category: '1. e4 Openings',
    description: 'Master White\'s classical initiative with sharp gambits, tactical sacrifices, and strategic maneuvering.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    subCourses: [
      {
        id: 'italian-giuoco-piano',
        courseId: 'italian-game',
        title: 'Italian Game – Giuoco Piano & Center Attack',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3',
        category: 'Main Line',
        description: 'Classical center strike fighting for central dominance with c3 and d4.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        lines: [giuocoPianoLine, giuocoMoellerLine, giuocoSolidLine]
      },
      {
        id: 'italian-evans-gambit',
        courseId: 'italian-game',
        title: 'Italian Game – The Evans Gambit',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4',
        category: 'Tactical Gambit',
        description: 'Sacrifice the b-pawn for blistering development, rapid castling, and attack on f7.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4',
        lines: [evansGambitLine, evansLaskerLine, evansDeclinedLine]
      },
      {
        id: 'italian-two-knights',
        courseId: 'italian-game',
        title: 'Italian Game – Two Knights Defense',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5',
        category: 'Sharp Attack',
        description: 'Enter hyper-aggressive tactical waters against 3... Nf6 with Ng5, Fried Liver, Polerio & Traxler lines.',
        previewFEN: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        lines: [friedLiverLine, polerioCounterLine, traxlerRefutationLine]
      },
      {
        id: 'italian-pianissimo',
        courseId: 'italian-game',
        title: 'Italian Game – Modern Pianissimo',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3',
        category: 'Positional Quiet',
        description: 'Deep positional maneuvering favored by modern elite grandmasters with d3, c3, and Nbd2.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
        lines: [pianissimoSuperGMLine, pianissimoNc3Line]
      }
    ]
  },
  {
    id: 'sicilian-defense',
    title: 'Sicilian Defense Openings',
    subtitle: '1. e4 c5 Dynamic Counter-Attacks',
    category: '1. e4 Counter',
    description: 'Crush the Sicilian with aggressive Open Sicilian & Grand Prix Attack lines.',
    previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'sicilian-open',
        courseId: 'sicilian-defense',
        title: 'Open Sicilian – Main Repertoire',
        subtitle: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4',
        category: 'Open Lines',
        description: 'Seize central control and tactical dynamism against Black\'s asymmetric defense.',
        previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        lines: []
      }
    ]
  },
  {
    id: 'ruy-lopez',
    title: 'Ruy Lopez Spanish Game',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Classical Battle',
    category: '1. e4 Openings',
    description: 'Master the Spanish Torture with long-term strategic positional pressure.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    subCourses: [
      {
        id: 'ruy-lopez-morphy',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Morphy Defense & Closed Lines',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6',
        category: 'Main Line',
        description: 'Build strategic pawn structures and long-term bishop pressure along the a4-e8 diagonal.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        lines: []
      }
    ]
  }
];

/**
 * Returns a flat array of all repertoire lines across all courses and sub-courses.
 */
export function getAllLines() {
  const lines = [];
  COURSES.forEach(course => {
    if (course.subCourses && course.subCourses.length > 0) {
      course.subCourses.forEach(sub => {
        if (sub.lines && Array.isArray(sub.lines)) {
          sub.lines.forEach(line => lines.push(line));
        }
      });
    } else if (course.lines && Array.isArray(course.lines)) {
      course.lines.forEach(line => lines.push(line));
    }
  });
  return lines;
}

/**
 * Finds a main course by its unique ID.
 */
export function getCourseById(courseId) {
  return COURSES.find(c => c.id === courseId) || null;
}

/**
 * Finds a sub-course by its unique ID across all registered courses.
 */
export function getSubCourseById(subCourseId) {
  for (const course of COURSES) {
    if (course.subCourses) {
      const match = course.subCourses.find(s => s.id === subCourseId);
      if (match) return match;
    }
  }
  return null;
}
