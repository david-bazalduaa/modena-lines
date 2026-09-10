/* ============================================================
   MASTER COURSES REGISTRY & 3-LEVEL SUB-COURSE MODULES
   Tournament-Ready Opening Repertoires (Italian, London, Pirc,
   Ruy Lopez, Sicilian Defense, Caro-Kann Defense)
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

import { ruyLopezBerlinLines } from './lines/ruy-lopez-berlin.js';
import { ruyLopezClosedLines } from './lines/ruy-lopez-closed.js';
import { ruyLopezMarshallLines } from './lines/ruy-lopez-marshall.js';
import { ruyLopezSidelinesLines } from './lines/ruy-lopez-sidelines.js';
import { ruyLopezExchangeLines } from './lines/ruy-lopez-exchange.js';

import { sicilianNajdorfLines } from './lines/sicilian-najdorf.js';
import { sicilianDragonLines } from './lines/sicilian-dragon.js';
import { sicilianSveshnikovLines } from './lines/sicilian-sveshnikov.js';
import { sicilianAntiLines } from './lines/sicilian-anti.js';

import { caroKannClassicalLines } from './lines/caro-kann-classical.js';
import { caroKannAdvanceLines } from './lines/caro-kann-advance.js';
import { caroKannModernLines } from './lines/caro-kann-modern.js';
import { caroKannTwoKnightsLines } from './lines/caro-kann-two-knights.js';
import { caroKannPanovLines } from './lines/caro-kann-panov.js';
import { alienGambitLines } from './lines/alien-gambit.js';

import { queensGambitLines } from './lines/queens-gambit.js';
import { openSicilianLines } from './lines/open-sicilian.js';
import { englishOpeningLines } from './lines/english-opening.js';
import { scotchGameLines } from './lines/scotch-game.js';
import { catalanOpeningLines } from './lines/catalan-opening.js';

import { frenchDefenseLines } from './lines/french-defense.js';
import { kingsIndianDefenseLines } from './lines/kings-indian-defense.js';
import { nimzoIndianDefenseLines } from './lines/nimzo-indian-defense.js';
import { slavDefenseLines } from './lines/slav-defense.js';
import { scandinavianDefenseLines } from './lines/scandinavian-defense.js';
import { grunfeldDefenseLines } from './lines/grunfeld-defense.js';

export const COURSES = [
  {
    id: 'italian-game',
    title: 'Italian Game Master Repertoire',
    subtitle: 'Classic 1. e4 e5 2. Nf3 Nc6 3. Bc4 (52 Tactical Master Lines - 85% Punishments)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Master classical initiative with sharp gambits, tactical sacrifices, and decisive blunder refutations.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    subCourses: [
      {
        id: 'italian-giuoco-piano',
        courseId: 'italian-game',
        title: 'Italian Game – Giuoco Piano & Center Attack',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 (13 Lines - 85% Blunder Punishments)',
        category: 'Main Line',
        description: 'Classical center strike fighting for central dominance with c3 and d4, punishing passive play.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        lines: giuocoPianoLines
      },
      {
        id: 'italian-evans-gambit',
        courseId: 'italian-game',
        title: 'Italian Game – The Evans Gambit',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 (13 Lines - 85% Blunder Punishments)',
        category: 'Tactical Gambit',
        description: 'Sacrifice the b-pawn for blistering development, rapid castling, and attack on f7.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4',
        lines: evansGambitLines
      },
      {
        id: 'italian-two-knights',
        courseId: 'italian-game',
        title: 'Italian Game – Two Knights Defense',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 (13 Lines - 85% Blunder Punishments)',
        category: 'Sharp Attack',
        description: 'Enter hyper-aggressive tactical waters against 3... Nf6 with Fried Liver, Polerio, Fritz, Ulvestad & Traxler lines.',
        previewFEN: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        lines: twoKnightsLines
      },
      {
        id: 'italian-pianissimo',
        courseId: 'italian-game',
        title: 'Italian Game – Modern Pianissimo',
        subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 (13 Lines - 85% Blunder Punishments)',
        category: 'Positional Quiet',
        description: 'Deep positional maneuvering with d3, c3, and decisive kingside pawn storm refutations.',
        previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
        lines: pianissimoLines
      }
    ]
  },
  {
    id: 'london-system',
    title: 'London System Master Repertoire',
    subtitle: '1. d4 & 2. Bf4 Universal Repertoire (52 Tactical Master Lines - 81% Punishments)',
    category: '1. d4 Openings',
    side: 'white',
    description: 'Master the premier solid yet aggressive opening with the thematic Bf4 bishop, granite center, and king-hunt attacks.',
    previewFEN: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3',
    subCourses: [
      {
        id: 'london-classical-symmetrical',
        courseId: 'london-system',
        title: 'London System – Classic Setups vs 1...d5',
        subtitle: 'Symmetrical Lines & Tactical Refutations (13 Lines - 85% Punishments)',
        category: 'Main Line',
        description: 'Command the classical symmetrical landscape against 1...d5 with the granite pawn pyramid, Pillsbury f4 attack, and thematic bishop retreats.',
        previewFEN: 'r2q1rk1/pb2bppp/1p1npn2/2ppN3/3P1PP1/2PBPN2/PP1N1B1P/R3K2R w KQ - 1 14',
        lines: londonClassicalLines
      },
      {
        id: 'london-kings-indian-grunfeld',
        courseId: 'london-system',
        title: 'London System – vs King\'s Indian & Grünfeld',
        subtitle: 'Aggressive 5. h4 & Flank Decimations (13 Lines - 85% Punishments)',
        category: 'Sharp Positional',
        description: 'Dismantle Black\'s kingside fianchetto setups (...Nf6 and ...g6) using aggressive h4 pawn thrusts and classical space-squeezing clamps.',
        previewFEN: 'r4rk1/pp2ppb1/2n2np1/q2p1b2/N2P1B2/P1P2N2/1P2BPP1/R2QK2R b KQ - 0 13',
        lines: londonKingsIndianLines
      },
      {
        id: 'london-queens-indian-benoni',
        courseId: 'london-system',
        title: 'London System – vs Queen\'s Indian & Benoni',
        subtitle: 'Dynamic Counters, Dutch & Wing Dismantling (13 Lines - 85% Punishments)',
        category: 'Space Advantage',
        description: 'Counter Black\'s flank strategies (...b6, ...c5, Dutch 1...f5 formations) with dominating central wedges and rapid queenside piece deployment.',
        previewFEN: 'r4rk1/pb1qb1pp/1p2pp2/2pp4/3PnB2/2PBPN1P/PP2QPP1/R4RK1 b - - 1 13',
        lines: londonQueensIndianLines
      },
      {
        id: 'london-sharp-jobava-steinitz',
        courseId: 'london-system',
        title: 'London System – Sharp Steinitz & Jobava Lines',
        subtitle: 'Steinitz 4. Nc3, b2 Traps & Jobava Attacks (13 Lines - 85% Punishments)',
        category: 'Tactical Firefight',
        description: 'Unleash razor-sharp tactical refutations against 3...Qb6, conquer the poisoned b2 pawn, and execute Jobava London opposite-castling avalanches.',
        previewFEN: 'r2r2k1/ppn2ppB/4pb2/1PqpN3/8/2P1P3/1P3PPP/R2QK2R b KQ - 0 15',
        lines: londonSharpJobavaLines
      }
    ]
  },
  {
    id: 'ruy-lopez',
    title: 'Ruy Lopez Spanish Master Repertoire',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 (50 Tactical Master Lines - 80% Punishments)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Master the definitive Spanish opening with the legendary Berlin Wall endgame, Closed Spanish systems, Marshall refutations, and sharp sidelines.',
    previewFEN: 'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4',
    subCourses: [
      {
        id: 'ruy-lopez-berlin-open',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Berlin Defense & Open Spanish',
        subtitle: 'Berlin Wall Endgame & Open Spanish Traps (10 Lines - 80% Punishments)',
        category: 'Classical Battle',
        description: 'Command the Berlin Wall endgame with 8. Qxd8+ and 13. Ng5, maneuver through the Anti-Berlin 4. d3 clamp, and dismantle the Open Spanish with 11. Bc2 and 13. Re1.',
        previewFEN: 'r3k2r/ppp1bpp1/2p1b3/4P1Np/5B2/2N4P/PPP2PP1/3R1RK1 b - - 5 13',
        lines: ruyLopezBerlinLines
      },
      {
        id: 'ruy-lopez-closed-mainlines',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Closed Spanish & Elite Systems',
        subtitle: 'Chigorin, Breyer & Zaitsev Refutations (10 Lines - 80% Punishments)',
        category: 'Positional Mastery',
        description: 'Master the deepest strategic concepts in chess: navigate the Breyer knight rerouting, outplay the Chigorin, probe the Zaitsev with 12. a4!, and squeeze the Karpov 9...Be6 system.',
        previewFEN: 'r2qr1k1/1bpnbppp/p2p1n2/1p2p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 6 13',
        lines: ruyLopezClosedLines
      },
      {
        id: 'ruy-lopez-marshall-anti',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Marshall Attack & Anti-Marshall Systems',
        subtitle: 'Marshall Gambit Tamed & Flank Strikes (10 Lines - 80% Punishments)',
        category: 'Sharp Theoretical Duel',
        description: 'Defend and consolidate against Frank Marshall\'s legendary 8...d5 sacrifice with 14. g3 and 15. Be3, or sidestep the attack entirely with modern 8. a4, 8. h3, and central 8. d4 strikes.',
        previewFEN: 'r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP1B1Pq/PP3P1P/RN1QR1K1 b - - 2 15',
        lines: ruyLopezMarshallLines
      },
      {
        id: 'ruy-lopez-sidelines-gambits',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Sidelines & Sharp Counter-Gambits',
        subtitle: 'Schliemann, Cozio & Bird Refutations (10 Lines - 80% Punishments)',
        category: 'Tactical Refutation',
        description: 'Crush sharp Black counter-gambits: refute the aggressive Schliemann 3...f5 with 4. Nc3!, neutralize Classical 3...Bc5, and overpower the Cozio, Bird\'s, and Modern Steinitz defenses.',
        previewFEN: 'r1b1kb1r/pp4pp/2p2n2/4N3/2BPp3/6Pq/PPP1Q2P/R1B1K2R b KQkq - 2 13',
        lines: ruyLopezSidelinesLines
      },
      {
        id: 'ruy-lopez-exchange-modern',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Exchange Variation & Modern Systems',
        subtitle: 'Exchange Mastery & Fischer-Style Crushes (10 Lines - 80% Punishments)',
        category: 'Endgame Precision',
        description: 'Deploy Bobby Fischer\'s feared Exchange Variation to ruin Black\'s pawn structure, punish the 5...Bg4 pin, and utilize the modern Worrall Attack and 5. d4 Center Attack.',
        previewFEN: '3k1bnr/1pp3pp/p3bp2/2p1P3/4PB2/1NN5/PPP2PPP/3R2K1 b - - 1 13',
        lines: ruyLopezExchangeLines
      }
    ]
  },
  {
    id: 'alien-gambit',
    title: 'The Alien Gambit Master Repertoire',
    subtitle: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Ng5 h6 6. Nxf7!? (12 Tactical Master Lines - 92% Punishments)',
    category: '1. e4 Gambits',
    side: 'white',
    description: 'A hyper-aggressive sacrificial weapon blasting open Black\'s king on f7 with rapid piece coordination, royal pins, queen sacrifices, and inescapable mating nets.',
    previewFEN: 'rnbq1b1r/pp2pkp1/2p2n1p/8/3P4/8/PPP2PPP/R1BQKBNR w KQ - 0 7',
    subCourses: [
      {
        id: 'alien-gambit-tactics',
        courseId: 'alien-gambit',
        title: 'The Alien Gambit – King Hunts & Forced Mates',
        subtitle: '6. Nxf7!? Sacrificial Firestorm (12 Lines - 92% Tactical Punishments)',
        category: 'Tactical Gambit',
        description: 'Blast open Black\'s king with 6. Nxf7!?, following up with rapid piece coordination, royal pins, queen sacrifices, and inescapable mating nets.',
        previewFEN: 'rnbq1b1r/pp2pkp1/2p2n1p/8/3P4/8/PPP2PPP/R1BQKBNR w KQ - 0 7',
        lines: alienGambitLines
      }
    ]
  },
  {
    id: 'queens-gambit',
    title: "Queen's Gambit Master Repertoire",
    subtitle: '1. d4 d5 2. c4 Classical Dominance & Blunder Refutations (52 Master Lines - 81% Punishments)',
    category: '1. d4 Openings',
    side: 'white',
    description: 'Master classical central control with d4 and c4, punishing greedy pawn clings, Albin Counter-Gambit tricks, and premature ...Bf5 adventures.',
    previewFEN: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
    subCourses: [
      {
        id: 'queens-gambit-classical',
        courseId: 'queens-gambit',
        title: "Queen's Gambit – Classical Anchor Mainlines",
        subtitle: 'Classical QGD, Slav & Exchange Systems (10 Lines - 100% Solid Control)',
        category: 'Main Line',
        description: 'Establish classical central dominance with Nc3, Bg5, and Rc1, suffocating Black\'s counterplay.',
        previewFEN: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
        lines: queensGambitLines.filter(l => l.subCourseId === 'queens-gambit-classical')
      },
      {
        id: 'queens-gambit-tactics',
        courseId: 'queens-gambit',
        title: "Queen's Gambit – Tactical Punishments & Traps",
        subtitle: 'QGA b5 Greed, Albin Refutations & Tarrasch Pins (42 Lines - 100% Punishments)',
        category: 'Tactical Refutation',
        description: 'Decisive tactical executions against greedy pawn clings, counter-gambits, premature ...Bf5 setups, and Tarrasch overreaches.',
        previewFEN: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
        lines: queensGambitLines.filter(l => l.subCourseId === 'queens-gambit-tactics')
      }
    ]
  },
  {
    id: 'open-sicilian',
    title: 'Open Sicilian Master Repertoire',
    subtitle: '1. e4 c5 2. Nf3 & 3. d4 Kingside Attacks & Trap Refutations (52 Master Lines - 81% Punishments)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Crush the Sicilian from White\'s perspective with the English Attack, Richter-Rauzer, and thematic tactical refutations against premature queen checks, central overreaches, and uncastled kings.',
    previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
    subCourses: [
      {
        id: 'open-sicilian-mainline',
        courseId: 'open-sicilian',
        title: 'Open Sicilian – Anchor Systems (Najdorf & Richter-Rauzer)',
        subtitle: 'English Attack & Classical Richter-Rauzer (10 Lines - 100% Strategic Mastery)',
        category: 'Main Line',
        description: 'The premier attacking setups against Najdorf and Classical structures, combining rapid castling with devastating kingside pawn storms.',
        previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
        lines: openSicilianLines.filter(l => l.subCourseId === 'open-sicilian-mainline')
      },
      {
        id: 'open-sicilian-tactics',
        courseId: 'open-sicilian',
        title: 'Open Sicilian – Tactical Punishments & King Hunts',
        subtitle: 'Early Queen Blunders, e5-Holes & Poisoned Pawn Traps (42 Lines - 100% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish early ...Qa5+ checks, premature ...e5 d5-hole pushes, Kalashnikov smothered mate traps, and Dragon Ng4 blunders.',
        previewFEN: 'rnbqkbnr/pp1ppppp/8/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
        lines: openSicilianLines.filter(l => l.subCourseId === 'open-sicilian-tactics')
      }
    ]
  },
  {
    id: 'english-opening',
    title: 'English Opening Master Repertoire',
    subtitle: '1. c4 Flank Mastery & Tactical Punishments (52 Master Lines - 81% Punishments)',
    category: '1. c4 Openings',
    side: 'white',
    description: 'Control the center from the flank with the hypermodern English Opening, punishing overextended Reversed Sicilians, Wing Gambits, and dubious Dutch setups.',
    previewFEN: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1',
    subCourses: [
      {
        id: 'english-symmetrical',
        courseId: 'english-opening',
        title: 'English Opening – Anchor Systems (Symmetrical & Reversed)',
        subtitle: 'Four Knights & Reversed Sicilian Anchor Setups (10 Lines - 100% Solid Control)',
        category: 'Main Line',
        description: 'Harmonious piece coordination with g3, Bg2, and queenside expansion controlling the key central files.',
        previewFEN: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1',
        lines: englishOpeningLines.filter(l => l.subCourseId === 'english-symmetrical')
      },
      {
        id: 'english-tactics',
        courseId: 'english-opening',
        title: 'English Opening – Tactical Punishments & Gambit Refutations',
        subtitle: 'd4-Forks, Wing Gambits & Anglo-Dutch Sacrifices (42 Lines - 100% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish overextended Reversed Sicilians with d4-forks and Rd1 pins, shatter Wing Gambits, and execute crushing kingside attacks against Dutch structures.',
        previewFEN: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1',
        lines: englishOpeningLines.filter(l => l.subCourseId === 'english-tactics')
      }
    ]
  },
  {
    id: 'scotch-game',
    title: 'Scotch Game Master Repertoire',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. d4 Open Combat (52 Master Lines - 81% Punishments)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Blown open on move 3! Take the fight directly to Black with the dynamic Scotch Game, refuting Steinitz Queen Raids, Mieses mistakes, and dubious early exchanges.',
    previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
    subCourses: [
      {
        id: 'scotch-classical',
        courseId: 'scotch-game',
        title: 'Scotch Game – Anchor Systems (Classical & Mieses)',
        subtitle: '4...Bc5 & 4...Nf6 Mieses Mainlines (10 Lines - 100% Solid Authority)',
        category: 'Main Line',
        description: 'Anchor variations establishing broad central command with c3, Be3, and active piece harmonization.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
        lines: scotchGameLines.filter(l => l.subCourseId === 'scotch-classical')
      },
      {
        id: 'scotch-tactics',
        courseId: 'scotch-game',
        title: 'Scotch Game – Tactical Punishments & King Hunts',
        subtitle: 'Steinitz 4...Qh4 Queen Traps & Gambit Blasts (42 Lines - 100% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish Steinitz 4...Qh4?! queen expeditions, Mieses 8...Nb6 passivity, premature 4...Nxd4 trades, and unleash the Scotch Gambit 6. Bxf7+! king hunt.',
        previewFEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
        lines: scotchGameLines.filter(l => l.subCourseId === 'scotch-tactics')
      }
    ]
  },
  {
    id: 'catalan-opening',
    title: 'Catalan Opening Master Repertoire',
    subtitle: '1. d4 Nf6 2. c4 e6 3. g3 Long Diagonal Domination (52 Master Lines - 81% Punishments)',
    category: '1. d4 Openings',
    side: 'white',
    description: 'The ultimate positional and tactical weapon favored by world champions. Weaponize the g2 sniper bishop to dominate the board, punishing greedy c4 clinging and premature checks.',
    previewFEN: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3',
    subCourses: [
      {
        id: 'catalan-open',
        courseId: 'catalan-opening',
        title: 'Catalan Opening – Anchor Systems (Open & Closed Classical)',
        subtitle: 'Classical Open Catalan Recovery & Closed Catalan Squeeze (10 Lines - 100% Mastery)',
        category: 'Main Line',
        description: 'Classical center recovery with Qe2, Rd1, and e4, or the Closed Catalan e5 space strangle.',
        previewFEN: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3',
        lines: catalanOpeningLines.filter(l => l.subCourseId === 'catalan-open')
      },
      {
        id: 'catalan-tactics',
        courseId: 'catalan-opening',
        title: 'Catalan Opening – Tactical Punishments & Diagonal Refutations',
        subtitle: 'Long Diagonal Traps, c4 Cling Blasts & Bogo Checks (42 Lines - 100% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish Black clinging desperately to c4 with 10. Nxf7! sacrificial blasts, exploit ...b6 blunders with 13. Nd6! octopus binds, and refute premature ...Bb4+ checks.',
        previewFEN: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3',
        lines: catalanOpeningLines.filter(l => l.subCourseId === 'catalan-tactics')
      }
    ]
  },
  {
    id: 'sicilian-defense',
    title: 'Sicilian Defense Master Repertoire',
    subtitle: '1. e4 c5 Dynamic Asymmetric Mastery (52 Tactical Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Crush White\'s initiative with the ultimate counter-attacking weapon: Najdorf, Dragon, Scheveningen, Sveshnikov, and comprehensive Anti-Sicilian systems.',
    previewFEN: 'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 4',
    subCourses: [
      {
        id: 'sicilian-najdorf',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Najdorf Variation',
        subtitle: 'English Attack, Adams 6. h3 & Wayward Queen Refuted (14 Lines - 86% Punishments)',
        category: 'Sharp Grandmaster Battle',
        description: 'Master the king of chess openings: conquer the English Attack with 12...b4 and 15...a4, grab the Poisoned Pawn with 8...Qxb2!, and neutralize Fischer-Sozin and 6. Bg5 lines.',
        previewFEN: 'r2qnrk1/3nbppp/3pb3/4pPP1/pp2P3/1N2B3/PPPQN2P/2KR1B1R w - - 0 16',
        lines: sicilianNajdorfLines
      },
      {
        id: 'sicilian-dragon-scheveningen',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Dragon & Scheveningen Variations',
        subtitle: 'Yugoslav Exchange Sacs & Classical 9. f4 Refuted (13 Lines - 77% Punishments)',
        category: 'Dynamic Drag Race',
        description: 'Unleash ferocious Yugoslav Attack exchange sacrifices, detonate the center with 9...d5!, and employ the classic Scheveningen small center fortress.',
        previewFEN: '4r1k1/pp1bppb1/3p1np1/7p/2r1P2P/2N1BP2/PPPQN2P/1K1R3R w - - 4 16',
        lines: sicilianDragonLines
      },
      {
        id: 'sicilian-sveshnikov-classical',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Sveshnikov & Classical Systems',
        subtitle: 'Sveshnikov Mainline & Kalashnikov Refutations (13 Lines - 77% Punishments)',
        category: 'Hyper-Dynamic Imbalance',
        description: 'Wield Vladimir Kramnik and Magnus Carlsen\'s favorite Sveshnikov with 13...f4 and 15...a5, deploy the Kalashnikov 5...e5, and dismantle White\'s unsound sacrifices.',
        previewFEN: 'r2q1rk1/5pbp/2npb3/p2Np2Q/1pP1Pp2/3B4/PPN2PPP/R4RK1 w - - 0 16',
        lines: sicilianSveshnikovLines
      },
      {
        id: 'sicilian-anti-systems',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Anti-Sicilian Repertoires',
        subtitle: 'Bowdler, Grand Prix, Smith-Morra & Alapin Refuted (12 Lines - 83% Punishments)',
        category: 'Anti-System Mastery',
        description: 'Completely neutralize all White sideline weapons: dominate the Alapin with 2...d5, shatter the Grand Prix Attack, and decline the Smith-Morra with crushing central superiority.',
        previewFEN: '2r2rk1/1bqnbppp/pp2pn2/8/2P5/1NN1BP1P/PP2B1P1/2RR2K1 w - - 3 16',
        lines: sicilianAntiLines
      }
    ]
  },
  {
    id: 'caro-kann',
    title: 'Caro-Kann Defense Master Repertoire',
    subtitle: '1. e4 c6 The Impenetrable Fortress (58 Tactical Master Lines - 83% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Build an invincible defensive wall against 1. e4: Capablanca Classical 4...Bf5, Nigel Short Advance counters, Korchnoi 4...Nf6, Two Knights & Fantasy, and Panov mastery.',
    previewFEN: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'caro-kann-classical',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Classical / Capablanca Variation',
        subtitle: 'Classical Mainline & 6. f4/Nh3 Refutations (12 Lines - 83% Punishments)',
        category: 'Rock-Solid Masterpiece',
        description: 'Master Capablanca\'s immortal system with 4...Bf5 outside the pawn chain, neutralize White overextensions, and punish dubious knight maneuvers.',
        previewFEN: 'r2q1rk1/pp2bpp1/2p1pn1p/7P/3PQ3/5N2/PPPB1PP1/1K1R3R w - - 1 16',
        lines: caroKannClassicalLines
      },
      {
        id: 'caro-kann-advance',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Advance Variation',
        subtitle: 'Short System, 4. g4?! Overreach & Tal 4. h4 Shattered (12 Lines - 83% Punishments)',
        category: 'Sharp Dynamic Counter',
        description: 'Demolish the Advance Variation: snatch the b2 pawn with 8...Qxb2! in the Short System, freeze Bayonet 4. g4, and counter Tal with 12...Nxe5!.',
        previewFEN: 'r4k1r/pp3ppp/3Np3/b2pPb2/8/2N5/Pq2BPPP/2R1QRK1 w - - 4 16',
        lines: caroKannAdvanceLines
      },
      {
        id: 'caro-kann-modern-korchnoi',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Modern, Korchnoi & Steinitz Systems',
        subtitle: 'Korchnoi 4...Nf6 & Early Queen/Flank Attacks Dismantled (10 Lines - 80% Punishments)',
        category: 'Positional Masterpiece',
        description: 'Employ the Korchnoi 4...Nf6 (5...exf6) system with rapid piece activity, punish early queen sorties, and seize the center with discovered pins.',
        previewFEN: '2kr3r/pbq2pp1/1p1bpn1p/2p5/2PP4/3B1N2/PP1BQPPP/1K1R3R w - - 0 16',
        lines: caroKannModernLines
      },
      {
        id: 'caro-kann-two-knights-fantasy',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Two Knights & Fantasy Variations',
        subtitle: 'Two Knights 3...Bg4 & Fantasy 3. f3 Dismantling (12 Lines - 83% Punishments)',
        category: 'Sharp Firefight & Precision',
        description: 'Pin and liquidate in the Two Knights with 3...Bg4, grab undefended pawns with 8...Qxc2!, and demolish the Fantasy Variation (3. f3) with 11...Qh4+! and 6...c5!.',
        previewFEN: 'r4rk1/1p2bppp/p3pn2/3p4/3P4/2PBB2P/PP3PP1/3R1RK1 w - - 0 16',
        lines: caroKannTwoKnightsLines
      },
      {
        id: 'caro-kann-panov-attack',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Panov-Botvinnik Attack & Accelerated Systems',
        subtitle: 'IQP Blockade, 17...Qa1+! Decimation & 5...g6 Fianchetto (12 Lines - 83% Punishments)',
        category: 'Blockade & Counter-Attack',
        description: 'Master Isolated Queen\'s Pawn strategy against the Panov 4. c4: establish an iron d5 blockade, undermine queenside pawns, and refute greedy pawn grabs with 10...Nxd4!.',
        previewFEN: 'r2qr1k1/pp1bnp1p/4pbpB/3n4/3PB3/P1N2N2/1PQ2PPP/3R1RK1 w - - 6 16',
        lines: caroKannPanovLines
      }
    ]
  },
  {
    id: 'pirc-defense',
    title: 'Pirc Defense Dynamic Counter-Attack',
    subtitle: '1. e4 d6 2. d4 Nf6 Hypermodern Repertoire (50 Tactical Master Lines - 80% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Shatter White\'s central ambitions with asymmetric counter-attacks, dragon fianchettoes, and razor-sharp queenside strikes.',
    previewFEN: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4',
    subCourses: [
      {
        id: 'pirc-classical-system',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – The Classical System',
        subtitle: 'Classical Mainline & Premature 8. e5? Refuted (10 Lines - 80% Punishments)',
        category: 'Main Line',
        description: 'Neutralize White\'s classical setup with timely pins (...Bg4), central ruptures, and piece grabs against overextended centers.',
        previewFEN: 'r2q1rn1/pppbnpkp/3p2p1/3Pp3/4P3/2N2N1P/PPPQBPP1/3R1RK1 w - - 3 14',
        lines: pircClassicalLines
      },
      {
        id: 'pirc-austrian-attack',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – The Austrian Attack (4. f4)',
        subtitle: 'Austrian Mainline & 17...Ng4! Mating Nets (10 Lines - 80% Punishments)',
        category: 'Sharp Battle',
        description: 'Tame White\'s ferocious three-pawn steamroller with dynamic counter-attacks, queen pins, and devastating mating nets.',
        previewFEN: '3r1rk1/ppp1ppbp/6p1/4n3/2q1B3/2P2P2/PP4QP/R1B2RK1 b - - 1 15',
        lines: pircAustrianLines
      },
      {
        id: 'pirc-150-attack',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – 150 Attack & Argentine Variations',
        subtitle: '150 Mainline & Opposite Castling Crushes (10 Lines - 80% Punishments)',
        category: 'Opposite Castling',
        description: 'Win the opposite-side castling drag race against White\'s Be3/Qd2 battery using queenside pawn avalanches (...b5, ...b4) and bishop hunts.',
        previewFEN: '2kr3r/p1q1pp1p/1n1p1npQ/2p5/1p1PP3/5P2/PPP1N1PP/1KN2R1R w - - 0 15',
        lines: pirc150AttackLines
      },
      {
        id: 'pirc-fianchetto-system',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – Fianchetto Systems (4. g3)',
        subtitle: 'Fianchetto Mainline & Queenless Middlegame Squeezes (10 Lines - 80% Punishments)',
        category: 'Positional Equality',
        description: 'Dismantle White\'s 4. g3 fianchetto through central liquidation, skewer tactics on c4, and pawn conquest in queenless endgames.',
        previewFEN: 'r2qr3/pppn1pkp/2bp2p1/8/4P3/2NQ2PP/PPP2P2/3RR1K1 b - - 1 15',
        lines: pircFianchettoLines
      },
      {
        id: 'pirc-aggressive-sidelines',
        courseId: 'pirc-defense',
        title: 'Pirc Defense – Aggressive Sidelines (Bc4, Bg5, h4)',
        subtitle: 'Kholmov System, 2. Bc4?! & Early g4 Refutations (10 Lines - 80% Punishments)',
        category: 'Sharp Refutation',
        description: 'Punish aggressive sideline attempts including toothless 2. Bc4 with 6...d5!, the Kholmov 4. Bg5 bishop trap with 6...g5!, and reckless 6. g4 flank attacks.',
        previewFEN: 'r1bqk1r1/pp5p/2p1pp1B/3p4/2P1N3/1B6/PP2NPPP/2KRR3 b q - 0 15',
        lines: pircSidelinesLines
      }
    ]
  },
  {
    id: 'french-defense',
    title: 'French Defense Master Repertoire',
    subtitle: '1. e4 e6 Dynamic Counter-Attack & Central Warfare (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'A formidable counter-attacking repertoire against 1. e4: punish White\'s overextended pawn chains, shatter Tarrasch & Winawer structures, exploit the Rubinstein & Burn, and destroy early deviations.',
    previewFEN: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'french-advance-overreach',
        courseId: 'french-defense',
        title: 'French Defense – Advance Variation & Overreach',
        subtitle: 'Classical 5...Qb6 & 8...Nf5 d4-Pressure (13 Lines - 85% Punishments)',
        category: 'Central Siege',
        description: 'Besiege White\'s d4-e5 pawn wedge in the Advance with ...c5, ...Qb6, and ...Nf5, counter central thrusts, and punish premature flank overextensions.',
        previewFEN: 'r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5',
        lines: frenchDefenseLines.filter(l => l.subCourseId === 'french-advance-overreach')
      },
      {
        id: 'french-winawer-tactics',
        courseId: 'french-defense',
        title: 'French Defense – Winawer Variation & Tactics',
        subtitle: 'Winawer 3...Bb4 & Queenside Demolition (13 Lines - 85% Punishments)',
        category: 'Sharp Counter-Attack',
        description: 'Pin and demolish White\'s queenside in the Winawer with ...Bxc3+ and ...Qa5, exploit damaged pawn structures, and punish early queen excursions.',
        previewFEN: 'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4',
        lines: frenchDefenseLines.filter(l => l.subCourseId === 'french-winawer-tactics')
      },
      {
        id: 'french-classical-steinitz',
        courseId: 'french-defense',
        title: 'French Defense – Classical & Steinitz Systems',
        subtitle: 'Classical Steinitz 4...Nfd7 & Burn 4...dxe4 Outposts (13 Lines - 85% Punishments)',
        category: 'Positional Precision',
        description: 'Neutralize White\'s classical initiative: dismantle the Steinitz 4. e5 with rapid counter-strikes, and master the Burn 4...dxe4 liquidation.',
        previewFEN: 'rnbqkb1r/ppp2ppp/4pn2/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5',
        lines: frenchDefenseLines.filter(l => l.subCourseId === 'french-classical-steinitz')
      },
      {
        id: 'french-tarrasch-exchange',
        courseId: 'french-defense',
        title: 'French Defense – Tarrasch & Exchange Systems',
        subtitle: 'Tarrasch 3. Nd2 c5 & Exchange Refutations (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Pummel passive Exchange setups, exploit Tarrasch 3. Nd2 pawn isolations with ...c5, and dismantle unsound early flank gambits.',
        previewFEN: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        lines: frenchDefenseLines.filter(l => l.subCourseId === 'french-tarrasch-exchange')
      }
    ]
  },
  {
    id: 'kings-indian-defense',
    title: 'King\'s Indian Defense Master Repertoire',
    subtitle: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 Hypermodern Kingside Firestorm (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Unleash the ultimate weapon of Bobby Fischer and Garry Kasparov: launch devastating kingside mating attacks in the Mar del Plata, demolish the Sämisch and Four Pawns, and crush all white deviations.',
    previewFEN: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQ - 2 5',
    subCourses: [
      {
        id: 'kid-classical-avalanche',
        courseId: 'kings-indian-defense',
        title: 'King\'s Indian – Classical Avalanche (9. Ne1 / 9. b4)',
        subtitle: '9. Ne1 / 9. b4 Mainlines & ...f5 Kingside Breakthroughs (13 Lines - 85% Punishments)',
        category: 'Kingside Attack',
        description: 'Execute the thematic ...f5-...f4 pawn storm, sacrifice on g3/h3, and weave unstoppable mating nets against White\'s king.',
        previewFEN: 'r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N1BP2/PP2B1PP/R2QK1NR w KQ - 0 9',
        lines: kingsIndianDefenseLines.filter(l => l.subCourseId === 'kid-classical-avalanche')
      },
      {
        id: 'kid-samisch-blunders',
        courseId: 'kings-indian-defense',
        title: 'King\'s Indian – Sämisch Variation Blunders',
        subtitle: 'Sämisch 5. f3 & Byrne ...c5 Pawn Counter-Strikes (13 Lines - 85% Punishments)',
        category: 'Pawn Storm Combat',
        description: 'Tame White\'s massive pawn centers with Byrne ...c5 sacrifices, central ruptures (...e5), and relentless piece activity on the dark squares.',
        previewFEN: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQ - 0 5',
        lines: kingsIndianDefenseLines.filter(l => l.subCourseId === 'kid-samisch-blunders')
      },
      {
        id: 'kid-averbakh-four-pawns',
        courseId: 'kings-indian-defense',
        title: 'King\'s Indian – Averbakh & Four Pawns Attack',
        subtitle: 'Four Pawns 5. f4 & Averbakh 5. Be2 / 6. Bg5 Neutralized (13 Lines - 85% Punishments)',
        category: 'Positional Equality',
        description: 'Counter White\'s positional setups with energetic queenside counterplay (...c5, ...b5), central liquidation, and dark-square outpost domination.',
        previewFEN: 'r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ - 4 6',
        lines: kingsIndianDefenseLines.filter(l => l.subCourseId === 'kid-averbakh-four-pawns')
      },
      {
        id: 'kid-fianchetto-sidelines',
        courseId: 'kings-indian-defense',
        title: 'King\'s Indian – Fianchetto & Sideline Refutations',
        subtitle: '4. h4?! Harry, 3. g3 Fianchetto & Rare Deviations Refuted (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Dismantle amateur White flank thrusts, punish premature early queen adventures, and exploit overextended kingside pawn pushes.',
        previewFEN: 'rnbqk2r/ppp1ppbp/3p1np1/8/2PP3P/2N5/PP2PPP1/R1BQKBNR b KQkq - 0 4',
        lines: kingsIndianDefenseLines.filter(l => l.subCourseId === 'kid-fianchetto-sidelines')
      }
    ]
  },
  {
    id: 'nimzo-indian-defense',
    title: 'Nimzo-Indian Defense Master Repertoire',
    subtitle: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 Absolute Structural Mastery (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Aron Nimzowitsch\'s hypermodern masterpiece: pin the c3 knight, ruin White\'s pawn structure with doubled c-pawns, blockade weaknesses, and crush Rubinstein, Classical, and Sämisch lines.',
    previewFEN: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4',
    subCourses: [
      {
        id: 'nimzo-rubinstein-classical',
        courseId: 'nimzo-indian-defense',
        title: 'Nimzo-Indian – Rubinstein & Classical Systems',
        subtitle: 'Rubinstein 4. e3 & Classical 4. Qc2 Masterlines (13 Lines - 85% Punishments)',
        category: 'Main Line',
        description: 'Neutralize White\'s main weapons: dismantle 4. e3 with Hübner dark-square clamps, and refute 4. Qc2 with rapid piece development and queenside expansion.',
        previewFEN: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4',
        lines: nimzoIndianDefenseLines.filter(l => l.subCourseId === 'nimzo-rubinstein-classical')
      },
      {
        id: 'nimzo-samisch-blunders',
        courseId: 'nimzo-indian-defense',
        title: 'Nimzo-Indian – Sämisch Variation & C4 Siege',
        subtitle: 'Sämisch 4. a3 Bxc3+ & Capablanca 8...b6 Siege (13 Lines - 85% Punishments)',
        category: 'Blockade & Siege',
        description: 'Inflict doubled isolated c-pawns on White with ...Bxc3+, then deploy Capablanca\'s immortal ...Ba6 and ...Na5 siege to round up the c4 pawn.',
        previewFEN: 'rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq - 0 5',
        lines: nimzoIndianDefenseLines.filter(l => l.subCourseId === 'nimzo-samisch-blunders')
      },
      {
        id: 'nimzo-leningrad-bg5',
        courseId: 'nimzo-indian-defense',
        title: 'Nimzo-Indian – Leningrad Variation (4. Bg5)',
        subtitle: 'Leningrad 4. Bg5 & 5...h6 / 6...g5 Punishments (13 Lines - 85% Punishments)',
        category: 'Sharp Counter-Attack',
        description: 'Shatter White\'s pin with ...h6 and ...g5, invade with ...Ne4, and punish overextended White setups with tactical queen forks.',
        previewFEN: 'rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4',
        lines: nimzoIndianDefenseLines.filter(l => l.subCourseId === 'nimzo-leningrad-bg5')
      },
      {
        id: 'nimzo-check-fork-oversights',
        courseId: 'nimzo-indian-defense',
        title: 'Nimzo-Indian – Check & Fork Oversights',
        subtitle: 'Kasparov 4. Nf3, 4. f3 & Premature 4. Qb3 Refuted (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish White\'s sideline attempts: exploit 4. f3 with central counter-gambits (...c5, ...d5), neutralize 4. Nf3, and punish premature queen outings.',
        previewFEN: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4',
        lines: nimzoIndianDefenseLines.filter(l => l.subCourseId === 'nimzo-check-fork-oversights')
      }
    ]
  },
  {
    id: 'slav-defense',
    title: 'Slav Defense Master Repertoire',
    subtitle: '1. d4 d5 2. c4 c6 Rock-Solid Fortress & Dynamic Counterplay (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'The premier championship defense to 1. d4: develop the bishop outside the pawn chain to f5 in the Classical, wield the explosive Meran Variation, master the Exchange, and dismantle all gambits.',
    previewFEN: 'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    subCourses: [
      {
        id: 'slav-classical-exploitation',
        courseId: 'slav-defense',
        title: 'Slav Defense – Classical 5. a4 Bf5 Exploitation',
        subtitle: 'Classical 4...dxc4 / 5...Bf5 & 6. Ne5 Punishments (13 Lines - 85% Punishments)',
        category: 'Main Line',
        description: 'Activate the light-squared bishop outside the pawn chain before playing ...e6, coordinate piece pressure against White\'s center, and punish overambitious attacks.',
        previewFEN: 'rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1P3/1P3PPP/R1BQKBNR w KQkq - 1 6',
        lines: slavDefenseLines.filter(l => l.subCourseId === 'slav-classical-exploitation')
      },
      {
        id: 'slav-semi-meran-traps',
        courseId: 'slav-defense',
        title: 'Slav Defense – Semi-Slav & Meran Variations',
        subtitle: 'Meran 8. Bd3 a6 & Botvinnik Tactical Firestorms (13 Lines - 85% Punishments)',
        category: 'Dynamic Counter-Fire',
        description: 'Unleash the ferocious Meran counter-strike with ...b5 and ...c5, master Botvinnik pin-breaking lines, and punish Anti-Meran deviations.',
        previewFEN: 'r1bqkb1r/pp1n1ppp/2p1pn2/1B1p4/2PP4/2N1PN2/PP3PPP/R1BQK2R b KQkq - 1 6',
        lines: slavDefenseLines.filter(l => l.subCourseId === 'slav-semi-meran-traps')
      },
      {
        id: 'slav-exchange-oversights',
        courseId: 'slav-defense',
        title: 'Slav Defense – Exchange Variation Oversights',
        subtitle: 'Symmetrical 3. cxd5 cxd5 & 6...a6 Strangle (13 Lines - 85% Punishments)',
        category: 'Positional Equality',
        description: 'Break symmetry cleanly: prevent White\'s Nb5/Bb5 threats with 6...a6, contest the open c-file, and punish overeager early queen sorties.',
        previewFEN: 'r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 6',
        lines: slavDefenseLines.filter(l => l.subCourseId === 'slav-exchange-oversights')
      },
      {
        id: 'slav-gambit-refutations',
        courseId: 'slav-defense',
        title: 'Slav Defense – Gambit Refutations & Chameleon 4...a6',
        subtitle: 'Chebanenko 4...a6, Winawer 3...e5! & 3. f3?! Refutations (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Employ the flexible Chebanenko 4...a6, detonate White\'s center with the Winawer Counter-Gambit 3...e5!, and punish dubious flank moves.',
        previewFEN: 'rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5',
        lines: slavDefenseLines.filter(l => l.subCourseId === 'slav-gambit-refutations')
      }
    ]
  },
  {
    id: 'scandinavian-defense',
    title: 'Scandinavian Defense Master Repertoire',
    subtitle: '1. e4 d5 Central Challenge & Rapid Piece Mobilization (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Challenge White\'s central pawn on move 1! Master the Mieses-Kotrč 3...Qa5, the hypermodern 2...Nf6 Modern Variation, punish amateur White blunder systems, and wield razor-sharp Icelandic & Portuguese gambits.',
    previewFEN: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2',
    subCourses: [
      {
        id: 'scandi-mieses-kotrc',
        courseId: 'scandinavian-defense',
        title: 'Scandinavian – Mieses-Kotrč 3...Qa5 Variation',
        subtitle: 'Classical 4. d4 Nf6 & White Overextension Refutations (13 Lines - 85% Punishments)',
        category: 'Main Line',
        description: 'Coordinate queen safety on a5, build an iron pawn barrier with ...c6, and exploit White\'s greedy flank advances and premature sacrifices.',
        previewFEN: 'rnb1kbnr/ppp1pppp/2q5/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4',
        lines: scandinavianDefenseLines.filter(l => l.subCourseId === 'scandi-mieses-kotrc')
      },
      {
        id: 'scandi-modern-variation',
        courseId: 'scandinavian-defense',
        title: 'Scandinavian – Modern 2...Nf6 Variation',
        subtitle: 'Modern 3. d4 Nxd5 & Panov-Style Counter-Strikes (13 Lines - 85% Punishments)',
        category: 'Hypermodern Dynamic',
        description: 'Delay queen recapture with 2...Nf6, employ Alekhine-style knight hops to b6, fianchetto on the long diagonal, and break White\'s center with ...e5.',
        previewFEN: 'rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3',
        lines: scandinavianDefenseLines.filter(l => l.subCourseId === 'scandi-modern-variation')
      },
      {
        id: 'scandi-early-white-blunders',
        courseId: 'scandinavian-defense',
        title: 'Scandinavian – Early White Blunders & Deviations',
        subtitle: 'Wayward Queen 3. Qh5?!, 3. Qf3?! & 2. e5?! Refutations (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Punish amateur White deviations: refute 2. e5 with ...c5 and ...Bf5, counter Wayward Queen raids, and exploit 3. d4?! e5! central explosions.',
        previewFEN: 'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2',
        lines: scandinavianDefenseLines.filter(l => l.subCourseId === 'scandi-early-white-blunders')
      },
      {
        id: 'scandi-portuguese-icelandic',
        courseId: 'scandinavian-defense',
        title: 'Scandinavian – Portuguese & Icelandic Gambits',
        subtitle: 'Icelandic 3. c4 e6! & Portuguese 3. d4 Bg4! Attacks (13 Lines - 85% Punishments)',
        category: 'Gambit Counter-Attack',
        description: 'Wield hyper-aggressive gambit systems: sacrifice pawns for lightning development, unseat White\'s king, and launch decisive mating attacks down the open e-file.',
        previewFEN: 'rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 3',
        lines: scandinavianDefenseLines.filter(l => l.subCourseId === 'scandi-portuguese-icelandic')
      }
    ]
  },
  {
    id: 'grunfeld-defense',
    title: 'Grünfeld Defense Master Repertoire',
    subtitle: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 Dynamic Piece Play & Central Demolition (52 Master Lines - 81% Punishments)',
    category: 'Black Defenses',
    side: 'black',
    description: 'The preferred weapon of Garry Kasparov, Peter Svidler, and MVL: allow White a massive pawn center only to blow it up with ...c5, ...Bg7, and lethal tactical counter-attacks.',
    previewFEN: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4',
    subCourses: [
      {
        id: 'grunfeld-exchange-demolition',
        courseId: 'grunfeld-defense',
        title: 'Grünfeld – Exchange Variation Demolition',
        subtitle: 'Classical 7. Bc4 c5 & Modern 8. Rb1 Mainlines (13 Lines - 85% Punishments)',
        category: 'Main Line Demolition',
        description: 'Chip away at White\'s central pride with ...c5, ...Nc6, and ...Bg4, undermine overextensions with ...e6, and exploit rook traps along the long diagonal.',
        previewFEN: 'r1bqk2r/ppp1ppbp/2n3p1/2P5/2BP4/2P1BN2/P4PPP/R2QK2R b KQkq - 0 10',
        lines: grunfeldDefenseLines.filter(l => l.subCourseId === 'grunfeld-exchange-demolition')
      },
      {
        id: 'grunfeld-russian-system',
        courseId: 'grunfeld-defense',
        title: 'Grünfeld – Russian System & 5. Qb3 Mastery',
        subtitle: 'Prins 7...a6 8. Be2 b5 & Hungarian 7...Bg4 Attacks (13 Lines - 85% Punishments)',
        category: 'Dynamic Drag Race',
        description: 'Neutralize White\'s queen pressure: launch queenside expansions with 7...a6 and 8...b5!, deploy the Hungarian 7...Bg4 pin, and break the center with ...c5.',
        previewFEN: 'r1bq1rk1/ppp1ppbp/2n2np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R w KQ - 4 6',
        lines: grunfeldDefenseLines.filter(l => l.subCourseId === 'grunfeld-russian-system')
      },
      {
        id: 'grunfeld-seirawan-modern',
        courseId: 'grunfeld-defense',
        title: 'Grünfeld – Seirawan 4. Bf4 & Taimanov 4. Bg5',
        subtitle: 'Seirawan 5...c5 / 6...Qa5 & Taimanov 4...Ne4! Punishments (13 Lines - 85% Punishments)',
        category: 'Sharp Piece Combat',
        description: 'Exploit White\'s early bishop development: pin the knight in the Seirawan with 6...Qa5!, strike with 4...Ne4! in the Taimanov, and win the bishop pair.',
        previewFEN: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq - 1 4',
        lines: grunfeldDefenseLines.filter(l => l.subCourseId === 'grunfeld-seirawan-modern')
      },
      {
        id: 'grunfeld-unsound-flank',
        courseId: 'grunfeld-defense',
        title: 'Grünfeld – Unsound Flank Attacks & Deviations',
        subtitle: 'Early 4. h4?! Harry, Anti-Grünfeld 3. f3?! & Fianchetto 3. g3 (13 Lines - 85% Punishments)',
        category: 'Tactical Refutation',
        description: 'Refute amateur flank thrusts like 4. h4?!, dismantle Anti-Grünfeld 3. f3 walls with ...f5 breaks, and outplay White in quiet 4. e3 and 3. g3 setups.',
        previewFEN: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP3P/2N5/PP2PPP1/R1BQKBNR b KQkq h3 0 4',
        lines: grunfeldDefenseLines.filter(l => l.subCourseId === 'grunfeld-unsound-flank')
      }
    ]
  }
];

// Ensure all subcourses explicitly inherit side property from parent course
COURSES.forEach(course => {
  if (course.subCourses && Array.isArray(course.subCourses)) {
    course.subCourses.forEach(sub => {
      if (!sub.side && course.side) {
        sub.side = course.side;
      }
    });
  }
});

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


