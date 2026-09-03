/* ============================================================
   MASTER COURSES REGISTRY & 3-LEVEL SUB-COURSE MODULES
   Tournament-Ready Opening Repertoires (Italian, London, Pirc)
   ============================================================ */

import { giuocoPianoLines } from './lines/italian-giuoco.js';
import { evansGambitLines } from './lines/italian-evans.js';
import { twoKnightsLines } from './lines/italian-two-knights.js';
import { pianissimoLines } from './lines/italian-pianissimo.js';

import { londonClassicalLines } from './lines/london-classical.js';
import { londonKingsIndianLines } from './lines/london-kings-indian.js';
import { londonQueensIndianLines } from './lines/london-queens-indian.js';
import { londonSharpJobavaLines } from './lines/london-sharp-jobava.js';

import { pircClassicalLines } from './lines/pirc-classical.js';
import { pircAustrianLines } from './lines/pirc-austrian.js';
import { pirc150AttackLines } from './lines/pirc-150-attack.js';
import { pircFianchettoLines } from './lines/pirc-fianchetto.js';
import { pircSidelinesLines } from './lines/pirc-sidelines.js';

export const COURSES = [
  {
    id: 'italian-game',
    title: 'Italian Game Master Repertoire',
    subtitle: 'Classic 1. e4 e5 2. Nf3 Nc6 3. Bc4 Openings (100 Master Lines)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Master classical initiative with sharp gambits, tactical sacrifices, and strategic maneuvering.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    subCourses: [
      {
        id: 'italian-giuoco-piano',
        courseId: 'italian-game',
        title: 'Italian Game – Giuoco Piano & Center Attack',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 (25 Variations)',
        category: 'Main Line',
        description: 'Classical center strike fighting for central dominance with c3 and d4.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        lines: giuocoPianoLines
      },
      {
        id: 'italian-evans-gambit',
        courseId: 'italian-game',
        title: 'Italian Game – The Evans Gambit',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 (25 Variations)',
        category: 'Tactical Gambit',
        description: 'Sacrifice the b-pawn for blistering development, rapid castling, and attack on f7.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4',
        lines: evansGambitLines
      },
      {
        id: 'italian-two-knights',
        courseId: 'italian-game',
        title: 'Italian Game – Two Knights Defense',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 (25 Variations)',
        category: 'Sharp Attack',
        description: 'Enter hyper-aggressive tactical waters against 3... Nf6 with Fried Liver, Polerio, Fritz, Ulvestad & Traxler lines.',
        previewFEN: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        lines: twoKnightsLines
      },
      {
        id: 'italian-pianissimo',
        courseId: 'italian-game',
        title: 'Italian Game – Modern Pianissimo',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 (25 Variations)',
        category: 'Positional Quiet',
        description: 'Deep positional maneuvering favored by modern elite grandmasters with d3, c3, and kingside pawn storms.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
        lines: pianissimoLines
      }
    ]
  },
  {
    id: 'london-system',
    title: 'London System Master Repertoire',
    subtitle: '1. d4 & 2. Bf4 Universal Repertoire (41 Master Lines)',
    category: '1. d4 Openings',
    side: 'white',
    description: 'Master the premier solid yet aggressive opening with the thematic Bf4 bishop, granite center, and king-hunt attacks.',
    previewFEN: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3',
    subCourses: [
      {
        id: 'london-classical-symmetrical',
        courseId: 'london-system',
        title: 'London System – Classic Setups vs 1...d5',
        subtitle: 'Symmetrical Lines, Lasker Counter & Semi-Slav (10 Variations)',
        category: 'Main Line',
        description: 'Command the classical symmetrical landscape against 1...d5 with the granite pawn pyramid, Pillsbury f4 attack, and thematic bishop retreats.',
        previewFEN: 'r2q1rk1/pb2bppp/1p1npn2/2ppN3/3P1PP1/2PBPN2/PP1N1B1P/R3K2R w KQ - 1 14',
        lines: londonClassicalLines
      },
      {
        id: 'london-kings-indian-grunfeld',
        courseId: 'london-system',
        title: 'London System – vs King\'s Indian & Grünfeld',
        subtitle: 'Caveman 5. h4, Classical Be2 & Central Clamps (10 Variations)',
        category: 'Sharp Positional',
        description: 'Dismantle Black\'s kingside fianchetto setups (...Nf6 and ...g6) using aggressive h4 pawn thrusts and classical space-squeezing clamps.',
        previewFEN: 'r4rk1/pp2ppb1/2n2np1/q2p1b2/N2P1B2/P1P2N2/1P2BPP1/R2QK2R b KQ - 0 13',
        lines: londonKingsIndianLines
      },
      {
        id: 'london-queens-indian-benoni',
        courseId: 'london-system',
        title: 'London System – vs Queen\'s Indian & Benoni',
        subtitle: 'Dynamic Counters, Dutch Defenses & QID Batteries (11 Variations)',
        category: 'Space Advantage',
        description: 'Counter Black\'s flank strategies (...b6, ...c5, Dutch 1...f5 formations) with dominating central wedges and rapid queenside piece deployment.',
        previewFEN: 'r4rk1/pb1qb1pp/1p2pp2/2pp4/3PnB2/2PBPN1P/PP2QPP1/R4RK1 b - - 1 13',
        lines: londonQueensIndianLines
      },
      {
        id: 'london-sharp-jobava-steinitz',
        courseId: 'london-system',
        title: 'London System – Sharp Steinitz & Jobava Lines',
        subtitle: 'Steinitz 4. Nc3, Poisoned Pawns & Jobava Attacks (10 Variations)',
        category: 'Tactical Firefight',
        description: 'Unleash razor-sharp tactical refutations against 3...Qb6, conquer the poisoned b2 pawn, and execute Jobava London opposite-castling avalanches.',
        previewFEN: 'r2r2k1/ppn2ppB/4pb2/1PqpN3/8/2P1P3/1P3PPP/R2QK2R b KQ - 0 15',
        lines: londonSharpJobavaLines
      }
    ]
  },
  {
    id: 'pirc-defense',
    title: 'Pirc Defense Dynamic Counter-Attack',
    subtitle: '1. e4 d6 2. d4 Nf6 Hypermodern Repertoire (43 Master Lines)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Shatter White\'s central ambitions with asymmetric counter-attacks, dragon fianchettoes, and razor-sharp queenside strikes.',
    previewFEN: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4',
    subCourses: [
      {
        id: 'pirc-classical-system',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – The Classical System',
        subtitle: '4. Nf3 & 5. Be2 Main Lines & Wing Strikes (9 Variations)',
        category: 'Main Line',
        description: 'Neutralize White\'s classical setup with timely pins (...Bg4), central ruptures (...e5), and double fianchetto wing counterplay.',
        previewFEN: 'r2q1rn1/pppbnpkp/3p2p1/3Pp3/4P3/2N2N1P/PPPQBPP1/3R1RK1 w - - 3 14',
        lines: pircClassicalLines
      },
      {
        id: 'pirc-austrian-attack',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – The Austrian Attack (4. f4)',
        subtitle: '6. Bd3 Nc6, 6...Na6 & Bayonet Counter-Gambits (9 Variations)',
        category: 'Sharp Battle',
        description: 'Tame White\'s ferocious three-pawn steamroller (f4/e4/d4) with dynamic piece sacrifices, Benko-style pawn breaks, and central counter-strikes.',
        previewFEN: '3r1rk1/ppp1ppbp/6p1/4n3/2q1B3/2P2P2/PP4QP/R1B2RK1 b - - 1 15',
        lines: pircAustrianLines
      },
      {
        id: 'pirc-150-attack',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – 150 Attack & Argentine Variations',
        subtitle: 'Be3/Qd2 Opposite Castling & Robert Byrne Defense (9 Variations)',
        category: 'Opposite Castling',
        description: 'Win the opposite-side castling drag race against White\'s Be3/Qd2 battery using queenside pawn storms (...b5, ...a5) and Byrne\'s b-file attack.',
        previewFEN: '2kr3r/p1q1pp1p/1n1p1npQ/2p5/1p1PP3/5P2/PPP1N1PP/1KN2R1R w - - 0 15',
        lines: pirc150AttackLines
      },
      {
        id: 'pirc-fianchetto-system',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – Fianchetto Systems (4. g3)',
        subtitle: 'Solid 5. Bg2 Setups, ...Nbd7 Maneuvers & Queenless Endgames (8 Variations)',
        category: 'Positional Equality',
        description: 'Dismantle White\'s hyper-solid 4. g3 fianchetto through central liquidation, masterfully simplified queenless middlegames, and knight outpost dominance.',
        previewFEN: 'r2qr3/pppn1pkp/2bp2p1/8/4P3/2NQ2PP/PPP2P2/3RR1K1 b - - 1 15',
        lines: pircFianchettoLines
      },
      {
        id: 'pirc-aggressive-sidelines',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – Aggressive Sidelines (Bc4, Bg5, h4)',
        subtitle: 'Kholmov Queen Trap, Bayonet System & Caveman Refutations (8 Variations)',
        category: 'Sharp Refutation',
        description: 'Punish aggressive sideline attempts including the tricky Kholmov 4. Bc4 with 6...Nxd4!, the Chinese 4. Bg5 bishop hunt, and caveman 4. h4 attacks.',
        previewFEN: 'r1bqk1r1/pp5p/2p1pp1B/3p4/2P1N3/1B6/PP2NPPP/2KRR3 b q - 0 15',
        lines: pircSidelinesLines
      }
    ]
  },
  {
    id: 'ruy-lopez',
    title: 'Ruy Lopez Spanish Game',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Classical Battle',
    category: '1. e4 Openings',
    side: 'white',
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
  },
  {
    id: 'sicilian-defense',
    title: 'Sicilian Defense Openings',
    subtitle: '1. e4 c5 Dynamic Counter-Attacks',
    category: 'Black Defenses',
    side: 'black',
    description: 'Crush White\'s initiative with aggressive Open Sicilian, Najdorf, and Dragon counter-attacks.',
    previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'sicilian-open',
        courseId: 'sicilian-defense',
        title: 'Open Sicilian – Main Repertoire',
        subtitle: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4',
        category: 'Open Lines',
        description: 'Seize central control and tactical dynamism against White\'s 1. e4 setup.',
        previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        lines: []
      }
    ]
  },
  {
    id: 'caro-kann',
    title: 'Caro-Kann Defense',
    subtitle: '1. e4 c6 Solid Counter-Attacking Weapon',
    category: 'Black Defenses',
    side: 'black',
    description: 'Build an ultra-solid, impenetrable defensive wall against 1. e4 favored by World Champions.',
    previewFEN: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'caro-kann-classical',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Classical & Advance Lines',
        subtitle: '1. e4 c6 2. d4 d5',
        category: 'Counter Defense',
        description: 'Neutralize White\'s center and build a resilient pawn structure with active counterplay.',
        previewFEN: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
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
