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
    id: 'ruy-lopez',
    title: 'Ruy Lopez Spanish Master Repertoire',
    subtitle: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Classical Spanish Mastery (30 Master Lines)',
    category: '1. e4 Openings',
    side: 'white',
    description: 'Master the definitive Spanish opening with the legendary Berlin Wall endgame, Closed Spanish systems, Marshall refutations, and sharp sidelines.',
    previewFEN: 'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4',
    subCourses: [
      {
        id: 'ruy-lopez-berlin-open',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Berlin Defense & Open Spanish',
        subtitle: 'Berlin Wall Endgame, 4. d3 Clamp & Dilworth/Howell Attacks (6 Variations)',
        category: 'Classical Battle',
        description: 'Command the Berlin Wall endgame with 8. Qxd8+ and 13. Ng5, maneuver through the Anti-Berlin 4. d3 clamp, and dismantle the Open Spanish with 11. Bc2 and 13. Re1.',
        previewFEN: 'r3k2r/ppp1bpp1/2p1b3/4P1Np/5B2/2N4P/PPP2PP1/3R1RK1 b - - 5 13',
        lines: ruyLopezBerlinLines
      },
      {
        id: 'ruy-lopez-closed-mainlines',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Closed Spanish & Elite Systems',
        subtitle: 'Chigorin, Breyer Knight Tour, Zaitsev & Smyslov Fortress (6 Variations)',
        category: 'Positional Mastery',
        description: 'Master the deepest strategic concepts in chess: navigate the Breyer knight rerouting, outplay the Chigorin, probe the Zaitsev with 12. a4!, and squeeze the Karpov 9...Be6 system.',
        previewFEN: 'r2qr1k1/1bpnbppp/p2p1n2/1p2p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 6 13',
        lines: ruyLopezClosedLines
      },
      {
        id: 'ruy-lopez-marshall-anti',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Marshall Attack & Anti-Marshall Systems',
        subtitle: 'Accepted Mainline, 12. d3 Consolidation & 8. a4/h3/d4 Strikes (6 Variations)',
        category: 'Sharp Theoretical Duel',
        description: 'Defend and consolidate against Frank Marshall\'s legendary 8...d5 sacrifice with 14. g3 and 15. Be3, or sidestep the attack entirely with modern 8. a4, 8. h3, and central 8. d4 strikes.',
        previewFEN: 'r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP1B1Pq/PP3P1P/RN1QR1K1 b - - 2 15',
        lines: ruyLopezMarshallLines
      },
      {
        id: 'ruy-lopez-sidelines-gambits',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Sidelines & Sharp Counter-Gambits',
        subtitle: 'Schliemann Gambit Refutation, Classical, Cozio & Bird\'s (6 Variations)',
        category: 'Tactical Refutation',
        description: 'Crush sharp Black counter-gambits: refute the aggressive Schliemann 3...f5 with 4. Nc3!, neutralize Classical 3...Bc5, and overpower the Cozio, Bird\'s, and Modern Steinitz defenses.',
        previewFEN: 'r1b1kb1r/pp4pp/2p2n2/4N3/2BPp3/6Pq/PPP1Q2P/R1B1K2R b KQkq - 2 13',
        lines: ruyLopezSidelinesLines
      },
      {
        id: 'ruy-lopez-exchange-modern',
        courseId: 'ruy-lopez',
        title: 'Ruy Lopez – Exchange Variation & Modern Systems',
        subtitle: 'Fischer 5. O-O Endgame, Delayed Exchange, Worrall & 5. d4 (6 Variations)',
        category: 'Endgame Precision',
        description: 'Deploy Bobby Fischer\'s feared Exchange Variation to ruin Black\'s pawn structure, punish the 5...Bg4 pin, and utilize the modern Worrall Attack and 5. d4 Center Attack.',
        previewFEN: '3k1bnr/1pp3pp/p3bp2/2p1P3/4PB2/1NN5/PPP2PPP/3R2K1 b - - 1 13',
        lines: ruyLopezExchangeLines
      }
    ]
  },
  {
    id: 'sicilian-defense',
    title: 'Sicilian Defense Master Repertoire',
    subtitle: '1. e4 c5 Dynamic Asymmetric Mastery (29 Master Lines)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Crush White\'s initiative with the ultimate counter-attacking weapon: Najdorf, Dragon, Scheveningen, Sveshnikov, and comprehensive Anti-Sicilian systems.',
    previewFEN: 'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 4',
    subCourses: [
      {
        id: 'sicilian-najdorf',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Najdorf Variation',
        subtitle: 'English Attack, Adams 6. h3, Classical 6. Be2 & Poisoned Pawn (8 Variations)',
        category: 'Sharp Grandmaster Battle',
        description: 'Master the king of chess openings: conquer the English Attack with 12...b4 and 15...a4, grab the Poisoned Pawn with 8...Qxb2!, and neutralize Fischer-Sozin and 6. Bg5 lines.',
        previewFEN: 'r2qnrk1/3nbppp/3pb3/4pPP1/pp2P3/1N2B3/PPPQN2P/2KR1B1R w - - 0 16',
        lines: sicilianNajdorfLines
      },
      {
        id: 'sicilian-dragon-scheveningen',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Dragon & Scheveningen Variations',
        subtitle: 'Yugoslav Attack Exchange Sacs, Levenfish & Keres Attack (7 Variations)',
        category: 'Dynamic Drag Race',
        description: 'Unleash the ferocious Yugoslav Attack exchange sacrifices 14...Rxc4!, detonate the center with 9...d5!, and employ the classic Scheveningen small center fortress.',
        previewFEN: '4r1k1/pp1bppb1/3p1np1/7p/2r1P2P/2N1BP2/PPPQN2P/1K1R3R w - - 4 16',
        lines: sicilianDragonLines
      },
      {
        id: 'sicilian-sveshnikov-classical',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Sveshnikov & Classical Systems',
        subtitle: 'Sveshnikov 7. Bg5, Kalashnikov 5...e5 & Richter-Rauzer (7 Variations)',
        category: 'Hyper-Dynamic Imbalance',
        description: 'Wield Vladimir Kramnik and Magnus Carlsen\'s favorite Sveshnikov with 13...f4 and 15...a5, deploy the Kalashnikov 5...e5, and dismantle the Richter-Rauzer and Sozin attacks.',
        previewFEN: 'r2q1rk1/5pbp/2npb3/p2Np2Q/1pP1Pp2/3B4/PPN2PPP/R4RK1 w - - 0 16',
        lines: sicilianSveshnikovLines
      },
      {
        id: 'sicilian-anti-systems',
        courseId: 'sicilian-defense',
        title: 'Sicilian Defense – Anti-Sicilian Repertoires',
        subtitle: 'Alapin (2...d5 & 2...Nf6), Rossolimo, Moscow & Grand Prix (7 Variations)',
        category: 'Anti-System Mastery',
        description: 'Completely neutralize all White sideline weapons: dominate the Alapin with 2...d5 and 13...Qe2!, counter the Rossolimo with 3...g6 and 3...e6, and refute the Grand Prix with 15...d4! fork.',
        previewFEN: '2r2rk1/1bqnbppp/pp2pn2/8/2P5/1NN1BP1P/PP2B1P1/2RR2K1 w - - 3 16',
        lines: sicilianAntiLines
      }
    ]
  },
  {
    id: 'caro-kann',
    title: 'Caro-Kann Defense Master Repertoire',
    subtitle: '1. e4 c6 The Impenetrable Grandmaster Fortress (28 Master Lines)',
    category: 'Black Defenses',
    side: 'black',
    description: 'Build an invincible defensive wall against 1. e4: Capablanca Classical 4...Bf5, Nigel Short Advance counters, Karpov Steinitz 4...Nd7, and Panov-Botvinnik mastery.',
    previewFEN: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 2',
    subCourses: [
      {
        id: 'caro-kann-classical',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Classical / Capablanca Variation',
        subtitle: 'Mainline 4...Bf5, 8. Ne5 Challenge & Flohr/Tartakower (6 Variations)',
        category: 'Rock-Solid Masterpiece',
        description: 'Master Capablanca\'s immortal system with 4...Bf5 outside the pawn chain, neutralize the 8. Ne5 leap with 13...Nd5, and command Tartakower and Bronstein-Larsen lines.',
        previewFEN: 'r2q1rk1/pp2bpp1/2p1pn1p/7P/3PQ3/5N2/PPPB1PP1/1K1R3R w - - 1 16',
        lines: caroKannClassicalLines
      },
      {
        id: 'caro-kann-advance',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Advance Variation',
        subtitle: 'Short System b2 Raid, Bayonet 4. g4 & Shirov/Tal Counter (6 Variations)',
        category: 'Sharp Dynamic Counter',
        description: 'Demolish the Advance Variation: snatch the b2 pawn with 8...Qxb2! in the Short System, freeze the Bayonet 4. g4 with 5...h5, and counter Shirov/Tal with 12...Nxe5 and 15...Qxf6.',
        previewFEN: 'r4k1r/pp3ppp/3Np3/b2pPb2/8/2N5/Pq2BPPP/2R1QRK1 w - - 4 16',
        lines: caroKannAdvanceLines
      },
      {
        id: 'caro-kann-modern-korchnoi',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Modern, Korchnoi & Steinitz Systems',
        subtitle: 'Karpov 4...Nd7, Korchnoi 5...exf6 & Kasparov 5. Ng3 (6 Variations)',
        category: 'Positional Masterpiece',
        description: 'Employ Anatoly Karpov\'s 4...Nd7 system with synchronized castling and 15...c5 breaks, navigate Korchnoi\'s solid 5...exf6, and neutralize Kasparov\'s 5. Ng3 setup.',
        previewFEN: '2kr3r/pbq2pp1/1p1bpn1p/2p5/2PP4/3B1N2/PP1BQPPP/1K1R3R w - - 0 16',
        lines: caroKannModernLines
      },
      {
        id: 'caro-kann-two-knights-fantasy',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Two Knights & Fantasy Variations',
        subtitle: 'Two Knights 3...Bg4, 4...Ne4 Outpost & Fantasy 3. f3 Smash (5 Variations)',
        category: 'Sharp Firefight & Precision',
        description: 'Pin and liquidate in the Two Knights with 3...Bg4 and 13...Qd5, establish the sharp 4...Ne4 outpost, and blow open the Fantasy Variation (3. f3) with 4...e5! and 15...f5.',
        previewFEN: 'r4rk1/1p2bppp/p3pn2/3p4/3P4/2PBB2P/PP3PP1/3R1RK1 w - - 0 16',
        lines: caroKannTwoKnightsLines
      },
      {
        id: 'caro-kann-panov-attack',
        courseId: 'caro-kann',
        title: 'Caro-Kann – Panov-Botvinnik Attack & Accelerated Systems',
        subtitle: 'IQP Blockade, 5...g6 Fianchetto & Accelerated 2. c4 (5 Variations)',
        category: 'Blockade & Counter-Attack',
        description: 'Master Isolated Queen\'s Pawn strategy against the Panov 4. c4: establish the unshakeable d5 blockade with 11...Bf6 and 15...Nce7, employ the 5...g6 fianchetto, and exploit tactical pins.',
        previewFEN: 'r2qr1k1/pp1bnp1p/4pbpB/3n4/3PB3/P1N2N2/1PQ2PPP/3R1RK1 w - - 6 16',
        lines: caroKannPanovLines
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


