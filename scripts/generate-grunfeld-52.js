import { Chess } from 'chess.js';
import fs from 'fs';
import { buildBlackLine } from './builder-utils.js';

export const grunfeldRaw = [
  // =========================================================================
  // SUBMODULE 1: Exchange Variation Demolition (13 Lines)
  // =========================================================================
  {
    id: 'grunfeld-exchange-anchor-classical-bc4',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Classical Exchange – 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O / 12...cxd4 Anchor',
    shortName: 'Classical Exchange Anchor',
    category: 'Anchor Mainline',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bd3 cxd4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bd3 cxd4',
    fullAnnotation: 'The eternal Classical Exchange battleground: White builds a giant pawn center, but Black chips away at d4 with ...c5, ...Nc6, and ...Bg4, attacks White\'s bishop with 11...Na5, and liquidates the center with 12...cxd4.',
    annotations: {
      7: "4... Nxd5 — The hallmark of the Grünfeld Defense.",
      11: "6... Bg7 — Sniper bishop on the long diagonal targeting d4.",
      13: "7... c5! — Immediate counter-strike against White's center.",
      21: "11... Na5! — Tactical Motif: Counter-Attack hitting the prized c4 bishop.",
      23: "12... cxd4 — Break open White's center with tremendous dynamic pressure."
    }
  },
  {
    id: 'grunfeld-exchange-anchor-modern-rb1',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Modern Exchange – 7. Nf3 c5 8. Rb1 O-O / 12...e6 Mainline Anchor',
    shortName: 'Modern Exchange 8. Rb1 Anchor',
    category: 'Anchor Mainline',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 Nc6 10. d5 Ne5 11. Nxe5 Bxe5 12. Qd2 e6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 Nc6 10. d5 Ne5 11. Nxe5 Bxe5 12. Qd2 e6',
    fullAnnotation: 'Boris Gelfand and Vladimir Kramnik\'s Modern Exchange with 8. Rb1: Black castles safely, trades knights on e5 activating the monster bishop, and undermines White\'s d5 pawn with 12...e6! with equal play.',
    annotations: {
      13: "7... c5 — Attack the d4 base.",
      17: "9... Nc6 — Piling pressure on d4.",
      21: "11... Bxe5 — The g7 bishop blossoms into a monster.",
      23: "12... e6! — Tactical Motif: Central Rupture against the d5 pawn."
    }
  },
  {
    id: 'grunfeld-exchange-anchor-7-nf3-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange Variation – 8. Be3 Qa5 9. Qd2 O-O / 12...Qxd2+ Equal Ending',
    shortName: 'Exchange 8. Be3 Qa5 Anchor',
    category: 'Anchor Mainline',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be3 Qa5 9. Qd2 O-O 10. Rc1 Rd8 11. d5 e6 12. c4 Qxd2+',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be3 Qa5 9. Qd2 O-O 10. Rc1 Rd8 11. d5 e6 12. c4 Qxd2+',
    fullAnnotation: 'Black pins the c3 pawn with 8...Qa5, castles, applies d-file pressure with 10...Rd8, breaks with 11...e6, and trades queens into a completely balanced and active endgame.',
    annotations: {
      15: "8... Qa5! — Pin on the c3 pawn.",
      19: "10... Rd8 — Rook adds devastating d-file pressure.",
      21: "11... e6 — Break down the d5 bastion.",
      23: "12... Qxd2+ — Liquidate into a harmonious endgame."
    }
  },
  {
    id: 'grunfeld-exchange-punish-d5-e6-wedge',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – Premature 9. d5?! Ne5 10. Bb3 c4! / 12...e6 Center Blast',
    shortName: 'Exchange 9. d5?! Punished',
    category: 'Tactical Punishment',
    eco: 'D86 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. d5 Ne5 10. Bb3 O-O 11. O-O c4 12. Bc2 e6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. d5 Ne5 10. Bb3 O-O 11. O-O c4 12. Bc2 e6',
    fullAnnotation: 'White advances prematurely with 9. d5?!. Black jumps the knight to e5, clamps the queenside with 11...c4!, and blows open the center with 12...e6! demolishing White\'s center.',
    annotations: {
      17: "9... Ne5! — Target White's pride on c4.",
      21: "11... c4! — Tactical Motif: Clamp restricting White's light-squared bishop.",
      23: "12... e6! — Shatter White's d5 pawn."
    }
  },
  {
    id: 'grunfeld-exchange-punish-greedy-f4-break',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – Overextended 11. f4?! cxd4 / 12...Bxe2 Bishop Decimation',
    shortName: 'Exchange 11. f4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D86 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f4 cxd4 12. cxd4 Bxe2',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f4 cxd4 12. cxd4 Bxe2',
    fullAnnotation: 'White overextends fatally with 11. f4?!. Black opens the center with 11...cxd4! and eliminates White\'s defender with 12...Bxe2 winning the d4 pawn and destroying White\'s center.',
    annotations: {
      20: "Mistake: 11. f4?! drops control of the central dark squares.",
      21: "11... cxd4! — Blow open lines against the uncoordinated center.",
      23: "12... Bxe2! — Tactical Motif: Removal of the Guard winning the d4 pawn."
    }
  },
  {
    id: 'grunfeld-exchange-punish-premature-qa4-check',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – 7. Qa4+?! Bd7 8. Qb3 c5 / 12...Bg4 Iron Pin',
    shortName: 'Exchange 7. Qa4+?! Punished',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Qa4+ Bd7 8. Qb3 c5 9. Nf3 O-O 10. Be2 Nc6 11. Be3 cxd4 12. cxd4 Bg4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Qa4+ Bd7 8. Qb3 c5 9. Nf3 O-O 10. Be2 Nc6 11. Be3 cxd4 12. cxd4 Bg4',
    fullAnnotation: 'White checks prematurely with 7. Qa4+?!. Black blocks with 7...Bd7, attacks d4 with ...c5 and ...Nc6, and pins the knight with 12...Bg4! winning the d4 pawn.',
    annotations: {
      13: "Inaccuracy: 7. Qa4+?! wastes queen time.",
      14: "7... Bd7 — Block check developing with tempo.",
      15: "8... c5! — Immediate central strike.",
      23: "12... Bg4! — Tactical Motif: Pin undermining White's d4 pawn."
    }
  },
  {
    id: 'grunfeld-exchange-punish-rb1-bxa7-trap',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Modern Exchange – 10...Qa5+ 11. Bd2 Qxa2 / 12...Bg4 Queenside Looting',
    shortName: 'Modern Exchange 11...Qxa2! Refutation',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 cxd4 10. cxd4 Qa5+ 11. Bd2 Qxa2 12. O-O Bg4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 cxd4 10. cxd4 Qa5+ 11. Bd2 Qxa2 12. O-O Bg4',
    fullAnnotation: 'Black drops the intermediate check 10...Qa5+!, snatches the a2 pawn with 11...Qxa2!, and pins White\'s knight with 12...Bg4 maintaining the extra pawn and superior position.',
    annotations: {
      19: "10... Qa5+! — Intermediate check.",
      21: "11... Qxa2! — Free outside passed pawn.",
      23: "12... Bg4! — Pin White's d4 defender."
    }
  },
  {
    id: 'grunfeld-exchange-punish-h3-cxd4-pin',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – 10. h3?! cxd4 11. cxd4 Qa5+ / 12...Qa3 Queen Infiltration',
    shortName: 'Exchange 10. h3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D86 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. h3 cxd4 11. cxd4 Qa5+ 12. Bd2 Qa3',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. h3 cxd4 11. cxd4 Qa5+ 12. Bd2 Qa3',
    fullAnnotation: 'White plays 10. h3?! to prevent ...Bg4. Black detonates with 10...cxd4, delivers the check 11...Qa5+, and invades White\'s queenside with 12...Qa3 with overwhelming initiative.',
    annotations: {
      18: "Inaccuracy: 10. h3?! ignores central development.",
      19: "10... cxd4 — Open the c-file.",
      21: "11... Qa5+! — Fork king and c3/d4.",
      23: "12... Qa3 — Infiltrate the queenside."
    }
  },
  {
    id: 'grunfeld-exchange-punish-be2-cxd4-demolition',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – Passive 10. Be2 O-O / 12...Bxf3 Removal of Guard',
    shortName: 'Exchange 10. Be2?! Demolished',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Be3 c5 8. Qd2 Qa5 9. Nf3 Nc6 10. Be2 O-O 11. O-O Bg4 12. Rfd1 Bxf3',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Be3 c5 8. Qd2 Qa5 9. Nf3 Nc6 10. Be2 O-O 11. O-O Bg4 12. Rfd1 Bxf3',
    fullAnnotation: 'White plays passively with 10. Be2. Black piles up on d4, pins the f3 knight with 11...Bg4, and eliminates it with 12...Bxf3 winning the d4 pawn by force.',
    annotations: {
      17: "9... Nc6 — Triple attack on d4.",
      21: "11... Bg4 — The decisive pin.",
      23: "12... Bxf3! — Tactical Motif: Removal of the Guard collapsing d4."
    }
  },
  {
    id: 'grunfeld-exchange-punish-e5-f6-counter',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – 10. e5?! Bg4 11. Be3 cxd4 / 12...Qd5 Central Domination',
    shortName: 'Exchange 10. e5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be2 O-O 9. O-O Nc6 10. e5 Bg4 11. Be3 cxd4 12. cxd4 Qd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be2 O-O 9. O-O Nc6 10. e5 Bg4 11. Be3 cxd4 12. cxd4 Qd5',
    fullAnnotation: 'White overextends with 10. e5?!. Black pins the knight with 10...Bg4, liquidates on d4, and blockades the isolated d4 pawn with the queen on 12...Qd5 holding a crushing positional grip.',
    annotations: {
      19: "Mistake: 10. e5?! permanently weakens the d4 pawn.",
      20: "10... Bg4! — Pin the d4 defender.",
      23: "12... Qd5! — Tactical Motif: Blockade dominating the board."
    }
  },
  {
    id: 'grunfeld-exchange-punish-ne2-bxa1-trap',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Classical Exchange – Desperate 12. Bxf7+?! Rxf7 / Piece Ahead Win',
    shortName: 'Exchange 12. Bxf7+?! Sacrifice Refuted',
    category: 'Tactical Punishment',
    eco: 'D86 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f3 Na5 12. Bxf7+ Rxf7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f3 Na5 12. Bxf7+ Rxf7',
    fullAnnotation: 'White lashes out with the desperate 12. Bxf7+?! sacrifice. Black recaptures with 12...Rxf7, keeping a clean piece advantage and dominating the open files.',
    annotations: {
      21: "11... Na5! — Hit White's bishop.",
      22: "Blunder: 12. Bxf7+?! gives away a bishop for nothing.",
      23: "12... Rxf7! — Black is a full piece ahead."
    }
  },
  {
    id: 'grunfeld-exchange-punish-ba3-qa5-skewer',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Exchange – 7. Ba3?! c5 8. Nf3 O-O / 12...e5 Central Demolition',
    shortName: 'Exchange 7. Ba3?! Skewered',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Ba3 c5 8. Nf3 O-O 9. Be2 Qa5 10. Bb2 cxd4 11. Nxd4 Rd8 12. O-O e5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Ba3 c5 8. Nf3 O-O 9. Be2 Qa5 10. Bb2 cxd4 11. Nxd4 Rd8 12. O-O e5',
    fullAnnotation: 'White misplaces the bishop on 7. Ba3?!. Black skewers it with 9...Qa5, pins the knight with 11...Rd8, and wins it with 12...e5! winning a full minor piece.',
    annotations: {
      13: "Inaccuracy: 7. Ba3?! misplaces the bishop.",
      17: "9... Qa5! — Tactical Motif: Double Attack hitting Ba3 and c3.",
      21: "11... Rd8 — Absolute pin on the d-file.",
      23: "12... e5! — Tactical Motif: Skewer / Fork winning the pinned d4 knight."
    }
  },
  {
    id: 'grunfeld-exchange-punish-qd2-bg4-skewer',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-exchange-demolition',
    name: 'Classical Exchange – 10. Qd2?! cxd4 11. cxd4 Bg4 / 12...Na5 Outpost',
    shortName: 'Classical 10. Qd2?! Inaccuracy Refuted',
    category: 'Tactical Punishment',
    eco: 'D86 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. Qd2 cxd4 11. cxd4 Bg4 12. f3 Na5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. Qd2 cxd4 11. cxd4 Bg4 12. f3 Na5',
    fullAnnotation: 'White walks into Black\'s textbook pin with 10. Qd2?!. Black liquidates with 10...cxd4, pins with 11...Bg4, and attacks the bishop with 12...Na5 dominating the board.',
    annotations: {
      18: "Inaccuracy: 10. Qd2?! allows Black's tactical sequence.",
      19: "10... cxd4 — Open the c-file.",
      21: "11... Bg4 — Pin White's e2 knight.",
      23: "12... Na5! — Hit White's c4 bishop with decisive counter-attack."
    }
  },

  // =========================================================================
  // SUBMODULE 2: Russian System & 5. Qb3 Exploitation (13 Lines)
  // =========================================================================
  {
    id: 'grunfeld-russian-anchor-7-a6-prins',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian System – Prins 7...a6 8. Be2 b5 9. Qb3 Bb7 / 12...c5 Mainline Anchor',
    shortName: 'Russian System Prins Anchor',
    category: 'Anchor Mainline',
    eco: 'D97 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. Be2 b5 9. Qb3 Bb7 10. e5 Nd5 11. O-O Nxc3 12. bxc3 c5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. Be2 b5 9. Qb3 Bb7 10. e5 Nd5 11. O-O Nxc3 12. bxc3 c5',
    fullAnnotation: 'Lodewijk Prins\'s dynamic system: Black plays 7...a6 and 8...b5 kicking White\'s queen, sets up the long diagonal battery with 9...Bb7, blockades on d5, and breaks with 12...c5.',
    annotations: {
      9: "5. Qb3 — The Russian System.",
      11: "6... O-O — King safely tucked away.",
      15: "8... b5! — Kick White's queen.",
      17: "9... Bb7 — Pressure e4.",
      23: "12... c5! — Tactical Motif: Queenside Break opening the center."
    }
  },
  {
    id: 'grunfeld-russian-anchor-7-bg4-hungarian',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian System – Hungarian 7...Bg4 8. Be3 Nfd7 / 12...e5 Anchor',
    shortName: 'Russian Hungarian 7...Bg4 Anchor',
    category: 'Anchor Mainline',
    eco: 'D98 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Be2 Nb6 10. Qd3 Nc6 11. Rd1 Bxf3 12. Bxf3 e5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Be2 Nb6 10. Qd3 Nc6 11. Rd1 Bxf3 12. Bxf3 e5',
    fullAnnotation: 'The sharp Hungarian Variation: Black pins with 7...Bg4, reroutes the knight via 8...Nfd7 to b6, eliminates the f3 knight, and detonates the center with 12...e5! equalizing fully.',
    annotations: {
      13: "7... Bg4 — Active pin.",
      15: "8... Nfd7 — Prepare knight repositioning.",
      17: "9... Nb6 — Kick White's queen with tempo.",
      23: "12... e5! — Central breakthrough."
    }
  },
  {
    id: 'grunfeld-russian-anchor-7-na6-modern',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian System – Modern 7...Na6 8. Be2 c5 9. d5 e6 / 12...Bf5 Active Play',
    shortName: 'Russian 7...Na6 Modern Anchor',
    category: 'Anchor Mainline',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6 8. Be2 c5 9. d5 e6 10. O-O exd5 11. exd5 Re8 12. Be3 Bf5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6 8. Be2 c5 9. d5 e6 10. O-O exd5 11. exd5 Re8 12. Be3 Bf5',
    fullAnnotation: 'Black develops the knight to a6, strikes in the center with 8...c5, opens the e-file with 11...Re8, and develops 12...Bf5 with active, aggressive piece coordination.',
    annotations: {
      13: "7... Na6 — The flexible modern knight route.",
      15: "8... c5! — Immediate flank counter-attack.",
      21: "11... Re8 — Seize the open e-file.",
      23: "12... Bf5 — Active diagonal deployment."
    }
  },
  {
    id: 'grunfeld-russian-punish-8-e5-nd5-outpost',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – Premature 8. e5?! b5! 9. Qb3 Nfd7 / 12...Bxe5 Centered Bishop',
    shortName: 'Russian 8. e5?! Punished',
    category: 'Tactical Punishment',
    eco: 'D97 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. e5 b5 9. Qb3 Nfd7 10. Be3 c5 11. dxc5 Nxe5 12. Nxe5 Bxe5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. e5 b5 9. Qb3 Nfd7 10. Be3 c5 11. dxc5 Nxe5 12. Nxe5 Bxe5',
    fullAnnotation: 'White pushes 8. e5?! prematurely. Black hits back with 8...b5! kicking the queen, detonates the center with 10...c5!, and plants the monster bishop on 12...Bxe5 holding a superior position.',
    annotations: {
      14: "Inaccuracy: 8. e5?! overextends White's center.",
      15: "8... b5! — Queen kicked with gain of tempo.",
      19: "10... c5! — Shatter White's d4 pawn.",
      23: "12... Bxe5 — Dominant bishop in the center."
    }
  },
  {
    id: 'grunfeld-russian-punish-bf4-c5-demolition',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 7. Bf4 c6 8. e4 b5 9. Qb3 Qa5 / 12...b4 Fork Ruin',
    shortName: 'Russian 7. Bf4?! Punished',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. Bf4 c6 8. e4 b5 9. Qb3 Qa5 10. Bd3 Bg4 11. Ne5 Be6 12. Qc2 b4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. Bf4 c6 8. e4 b5 9. Qb3 Qa5 10. Bd3 Bg4 11. Ne5 Be6 12. Qc2 b4',
    fullAnnotation: 'White sets up 7. Bf4. Black expands with 8...b5 and 9...Qa5!, pins White\'s knight, harasses the queen with 11...Be6, and pushes 12...b4! winning the c3 knight.',
    annotations: {
      15: "8... b5! — Queenside expansion.",
      17: "9... Qa5 — Pin the c3 knight.",
      21: "11... Be6 — Hit White's queen.",
      23: "12... b4! — Tactical Motif: Pawn Fork / Dislodgement winning material."
    }
  },
  {
    id: 'grunfeld-russian-punish-early-bg5-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 7. Bg5 a6 8. e4 b5 9. Qb3 Bb7 / 12...c5 Central Explosion',
    shortName: 'Russian 7. Bg5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. Bg5 a6 8. e4 b5 9. Qb3 Bb7 10. e5 Nd5 11. Be2 Nxc3 12. bxc3 c5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. Bg5 a6 8. e4 b5 9. Qb3 Bb7 10. e5 Nd5 11. Be2 Nxc3 12. bxc3 c5',
    fullAnnotation: 'White tries 7. Bg5. Black expands on the flank with ...b5, sets up 9...Bb7 targeting e4, eliminates the knight, and blows open the center with 12...c5! with decisive initiative.',
    annotations: {
      15: "8... b5! — Drive the queen back.",
      17: "9... Bb7 — Pressure e4.",
      23: "12... c5! — Tactical Motif: Central Rupture against White's center."
    }
  },
  {
    id: 'grunfeld-russian-punish-qd3-e5-thrust',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 8. Qd3?! Na6 9. Be2 Nb4! / 12...Na6 Safe Initiative',
    shortName: 'Russian 8. Qd3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6 8. Qd3 Na6 9. Be2 Nb4 10. Qd1 c5 11. d5 e6 12. a3 Na6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6 8. Qd3 Na6 9. Be2 Nb4 10. Qd1 c5 11. d5 e6 12. a3 Na6',
    fullAnnotation: 'White retreats 8. Qd3?!. Black invades with 8...Na6 and 9...Nb4!, strikes with 10...c5!, and breaks White\'s center with 11...e6 holding complete control.',
    annotations: {
      14: "Inaccuracy: 8. Qd3?! allows Black's knight to invade.",
      17: "9... Nb4! — Tempo attack on White's queen.",
      19: "10... c5! — Shatter the center.",
      23: "12... Na6 — Black has total dynamic initiative."
    }
  },
  {
    id: 'grunfeld-russian-punish-premature-h3-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 8. h3?! b5 9. Qb3 Bb7 / 12...c5 Central Destruction',
    shortName: 'Russian 8. h3?! Inaccuracy Punished',
    category: 'Tactical Punishment',
    eco: 'D97 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. h3 b5 9. Qb3 Bb7 10. e5 Nd5 11. Be2 Nxc3 12. bxc3 c5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. h3 b5 9. Qb3 Bb7 10. e5 Nd5 11. Be2 Nxc3 12. bxc3 c5',
    fullAnnotation: 'White loses a critical tempo with 8. h3?!. Black launches the queenside storm with 8...b5!, mobilizes 9...Bb7, and shatters the center with 12...c5! with unstoppable momentum.',
    annotations: {
      14: "Inaccuracy: 8. h3?! ignores development.",
      15: "8... b5! — Kick queen.",
      17: "9... Bb7 — Pressure e4.",
      23: "12... c5! — Tactical Motif: Central Rupture."
    }
  },
  {
    id: 'grunfeld-russian-punish-d5-nb4-skewer',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 8. e5?! Nd7 9. Be2 c5 / 12...cxd4 Central Destruction',
    shortName: 'Russian 10...Nb6 Attack',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6 8. e5 Nd7 9. Be2 c5 10. e6 Nb6 11. exf7+ Rxf7 12. Qb3 cxd4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6 8. e5 Nd7 9. Be2 c5 10. e6 Nb6 11. exf7+ Rxf7 12. Qb3 cxd4',
    fullAnnotation: 'White gambits with 10. e6. Black attacks White\'s queen with 10...Nb6!, recaptures with 11...Rxf7, and takes the central pawn with 12...cxd4 winning by force.',
    annotations: {
      17: "9... c5! — Challenge the e5 pawn base.",
      19: "10... Nb6! — Hit White's queen.",
      23: "12... cxd4! — Win the center with decisive attack."
    }
  },
  {
    id: 'grunfeld-russian-punish-greedy-b5-trap',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – Greedy 9. Qxc7?! Qxc7 10. Bxc7 / 12...Bxd5 Endgame Clamp',
    shortName: 'Russian 9. Qxc7?! Pawn Grab Refuted',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. Bf4 b5 9. Qxc7 Qxc7 10. Bxc7 Bb7 11. e5 Nd5 12. Nxd5 Bxd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. Bf4 b5 9. Qxc7 Qxc7 10. Bxc7 Bb7 11. e5 Nd5 12. Nxd5 Bxd5',
    fullAnnotation: 'White gets greedy with 9. Qxc7?!. Black trades queens, hits e4 with 10...Bb7, and plants the monster bishop on 12...Bxd5 dominating the dark squares and queenside.',
    annotations: {
      17: "9... Qxc7 — Force queen trade.",
      19: "10... Bb7 — Monster bishop targeting e4.",
      23: "12... Bxd5 — Complete dominance on the long diagonal."
    }
  },
  {
    id: 'grunfeld-russian-punish-8-a4-bb7-long-diagonal',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – Flank 8. a4?! Bg4 9. Be2 Nc6 / 12...Nd4 Infiltration',
    shortName: 'Russian 8. a4?! Inaccuracy Punished',
    category: 'Tactical Punishment',
    eco: 'D97 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. a4 Bg4 9. Be2 Nc6 10. Be3 Bxf3 11. Bxf3 e5 12. d5 Nd4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6 8. a4 Bg4 9. Be2 Nc6 10. Be3 Bxf3 11. Bxf3 e5 12. d5 Nd4',
    fullAnnotation: 'White plays 8. a4?! to stop ...b5. Black pins with 8...Bg4, strikes the center with 11...e5!, and plants the unstoppable 12...Nd4! knight fork threat with decisive attack.',
    annotations: {
      14: "Inaccuracy: 8. a4?! weakens the b4 square.",
      15: "8... Bg4 — Pin White's knight.",
      21: "11... e5! — Central counter-blow.",
      23: "12... Nd4! — Tactical Motif: Central Outpost with fork threat on c2."
    }
  },
  {
    id: 'grunfeld-russian-punish-qa4-c5-counter',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 8. Qa4?! b5! 9. Qc2 b4 / 12...Nbd7 Queenside Command',
    shortName: 'Russian 8. Qa4?! Punished',
    category: 'Tactical Punishment',
    eco: 'D96 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6 8. Qa4 b5 9. Qc2 b4 10. Na4 Bg4 11. Be3 Bxf3 12. gxf3 Nbd7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6 8. Qa4 b5 9. Qc2 b4 10. Na4 Bg4 11. Be3 Bxf3 12. gxf3 Nbd7',
    fullAnnotation: 'White wastes moves with 8. Qa4?!. Black kicks the queen with 8...b5!, dislodges the c3 knight with 9...b4!, ruins White\'s pawns with 11...Bxf3, and develops 12...Nbd7 with a winning queenside.',
    annotations: {
      15: "8... b5! — Queen attacked with tempo.",
      17: "9... b4! — Evict the knight to the rim.",
      21: "11... Bxf3! — Shatter White's kingside pawns.",
      23: "12... Nbd7 — Complete harmony."
    }
  },
  {
    id: 'grunfeld-russian-punish-be3-na6-flank',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-russian-system',
    name: 'Russian – 10...Nb6! 11. Qc5 Qd6 / 12...cxd6 Liquidated Equality',
    shortName: 'Russian 11...Qd6 Trade',
    category: 'Tactical Punishment',
    eco: 'D98 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Rd1 Nc6 10. Be2 Nb6 11. Qc5 Qd6 12. Qxd6 cxd6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Rd1 Nc6 10. Be2 Nb6 11. Qc5 Qd6 12. Qxd6 cxd6',
    fullAnnotation: 'Black harasses White\'s queen with 10...Nb6, offers 11...Qd6, trades queens, and recaptures with 12...cxd6 enjoying open c-file control and great piece harmony.',
    annotations: {
      19: "10... Nb6! — Kick White's queen.",
      21: "11... Qd6 — Challenge White's queen.",
      23: "12... cxd6 — Control the open c-file with total equality."
    }
  },

  // =========================================================================
  // SUBMODULE 3: Seirawan 4. Bf4 & Taimanov 4. Bg5 (13 Lines)
  // =========================================================================
  {
    id: 'grunfeld-seirawan-anchor-4-bf4-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan System – 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 / 12...Bf5 Anchor',
    shortName: 'Seirawan 4. Bf4 Anchor',
    category: 'Anchor Mainline',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. Rc1 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 11. O-O Qa5 12. h3 Bf5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. Rc1 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 11. O-O Qa5 12. h3 Bf5',
    fullAnnotation: 'Yasser Seirawan\'s favorite 4. Bf4 system: Black strikes the center with 5...c5!, pins with 6...Qa5, recovers the pawn with 9...Qxc5, and develops 12...Bf5 with full piece coordination.',
    annotations: {
      7: "4. Bf4 — Develop bishop outside before e3.",
      9: "5... c5! — Immediate counter-strike.",
      11: "6... Qa5! — Pin on the c3 knight.",
      17: "9... Qxc5 — Recover the gambit pawn.",
      23: "12... Bf5 — Harmonious bishop development."
    }
  },
  {
    id: 'grunfeld-taimanov-anchor-4-bg5-ne4',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Taimanov Variation – 4. Bg5 Ne4! 5. Bh4 Nxc3 / 12...Bd5 Anchor',
    shortName: 'Taimanov 4. Bg5 Anchor',
    category: 'Anchor Mainline',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bh4 Nxc3 6. bxc3 dxc4 7. e3 Be6 8. Nf3 Bg7 9. Be2 O-O 10. O-O c5 11. Rb1 b6 12. Ng5 Bd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bh4 Nxc3 6. bxc3 dxc4 7. e3 Be6 8. Nf3 Bg7 9. Be2 O-O 10. O-O c5 11. Rb1 b6 12. Ng5 Bd5',
    fullAnnotation: 'Mark Taimanov\'s pin with 4. Bg5: Black counter-strikes immediately with 4...Ne4!, ruins White\'s structure with 5...Nxc3!, defends c4 with 7...Be6, and plants the bishop on 12...Bd5.',
    annotations: {
      7: "4... Ne4! — Tactical Motif: Immediate Outpost attacking the pinned Bg5.",
      9: "5... Nxc3! — Ruin White's queenside pawn structure.",
      13: "7... Be6 — Solidify the extra c4 pawn.",
      23: "12... Bd5 — Iron dark-square blockade."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-cxd5-qxd5-central-domination',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – 6. cxd5?! Nxd5 7. Bxb8 Nxc3 / 12...Qc7 Pressure',
    shortName: 'Seirawan 6. cxd5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. cxd5 Nxd5 7. Bxb8 Nxc3 8. bxc3 Rxb8 9. Qa4+ Bd7 10. Qxa7 cxd4 11. exd4 O-O 12. Nf3 Qc7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. cxd5 Nxd5 7. Bxb8 Nxc3 8. bxc3 Rxb8 9. Qa4+ Bd7 10. Qxa7 cxd4 11. exd4 O-O 12. Nf3 Qc7',
    fullAnnotation: 'White plays 6. cxd5?! and grabs a pawn with 10. Qxa7. Black castles, opens the c-file with 10...cxd4, and skewers White\'s queen and c3 pawn with 12...Qc7 with crushing compensation.',
    annotations: {
      11: "6... Nxd5 — Recapture with central knight.",
      13: "7... Nxc3! — Shatter White's queenside.",
      21: "11... O-O — King safety with rook on the open file.",
      23: "12... Qc7! — Tactical Motif: Battery targeting the weak c3 pawn."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-4-bf4-nh5-bishop-hunt',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – 7...Qa5 8. Nd2 Qxc5 9. Nb3 Qb4 / 12...Bg4 Pinning White',
    shortName: 'Seirawan 9. Nb3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Nf3 c5 7. dxc5 Qa5 8. Nd2 Qxc5 9. Nb3 Qb4 10. a3 Qb6 11. cxd5 Rd8 12. Bc4 Bg4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Nf3 c5 7. dxc5 Qa5 8. Nd2 Qxc5 9. Nb3 Qb4 10. a3 Qb6 11. cxd5 Rd8 12. Bc4 Bg4',
    fullAnnotation: 'White tries 8. Nd2 and 9. Nb3. Black retreats the queen safely to b6, exerts crushing d-file pressure with 11...Rd8, and pins White\'s queen with 12...Bg4.',
    annotations: {
      13: "7... Qa5! — Pin on the c3 knight.",
      17: "9... Qb4 — Threaten White's knight.",
      21: "11... Rd8 — Rook pins the d5 pawn.",
      23: "12... Bg4! — Skewer the queen with rapid development."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-early-h3-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – Passive 6. h3?! c5! / 12...Bf5 Harmonious Equality',
    shortName: 'Seirawan 6. h3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. h3 c5 7. dxc5 Qa5 8. Rc1 dxc4 9. Bxc4 Qxc5 10. Bb3 Nc6 11. Nf3 Qa5 12. O-O Bf5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. h3 c5 7. dxc5 Qa5 8. Rc1 dxc4 9. Bxc4 Qxc5 10. Bb3 Nc6 11. Nf3 Qa5 12. O-O Bf5',
    fullAnnotation: 'White loses time with 6. h3?!. Black blasts open the center with 6...c5!, pins the knight with 7...Qa5, recovers the pawn, and achieves easy equality with 12...Bf5.',
    annotations: {
      11: "Inaccuracy: 6. h3?! is too slow.",
      12: "6... c5! — Immediate central strike.",
      17: "9... Qxc5 — Regain the pawn.",
      23: "12... Bf5 — Harmonious development."
    }
  },
  {
    id: 'grunfeld-taimanov-punish-4-bg5-c6-solid',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Taimanov – 9. Qb1 b6 10. Ng5 Bd5 / 12...hxg5 Piece Dislodged',
    shortName: 'Taimanov 9. Qb1?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bf4 Nxc3 6. bxc3 dxc4 7. e3 Be6 8. Nf3 Bg7 9. Qb1 b6 10. Ng5 Bd5 11. e4 h6 12. exd5 hxg5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bf4 Nxc3 6. bxc3 dxc4 7. e3 Be6 8. Nf3 Bg7 9. Qb1 b6 10. Ng5 Bd5 11. e4 h6 12. exd5 hxg5',
    fullAnnotation: 'White tries to trap Black\'s bishop with 10. Ng5 and 11. e4. Black counters with 11...h6!, takes White\'s dark-squared bishop with 12...hxg5, and keeps a winning material lead.',
    annotations: {
      17: "9... b6 — Solidify c4.",
      21: "11... h6! — Tactical Motif: Counter-Attack kicking the g5 knight.",
      23: "12... hxg5 — Black wins a piece with dominant pawns."
    }
  },
  {
    id: 'grunfeld-taimanov-punish-5-nxe4-dxe4',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Taimanov – 5. Nxe4 dxe4 6. Qd2 Bg7 / 12...h6 Dislodging Bg5',
    shortName: 'Taimanov 5. Nxe4?! Trade Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Nxe4 dxe4 6. Qd2 Bg7 7. e3 c5 8. d5 O-O 9. Ne2 Nd7 10. Nc3 f5 11. Be2 Ne5 12. O-O h6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Nxe4 dxe4 6. Qd2 Bg7 7. e3 c5 8. d5 O-O 9. Ne2 Nd7 10. Nc3 f5 11. Be2 Ne5 12. O-O h6',
    fullAnnotation: 'White concedes the center with 5. Nxe4?!. Black gains a wedge on e4, strikes with 7...c5!, locks down the kingside with 10...f5, and repels White\'s bishop with 12...h6 holding a space advantage.',
    annotations: {
      9: "5... dxe4 — Central wedge pawn.",
      13: "7... c5! — Attack d4.",
      19: "10... f5! — Cement the e4 pawn.",
      23: "12... h6 — Dislodge White's bishop with clear superiority."
    }
  },
  {
    id: 'grunfeld-taimanov-punish-cxd5-nxg5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Taimanov – Blunder 5. cxd5?! Nxg5 6. h4 Ne4 / 12...cxd4 Clean Up',
    shortName: 'Taimanov 5. cxd5?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. cxd5 Nxg5 6. h4 Ne4 7. Nxe4 Qxd5 8. Nc3 Qa5 9. e3 Bg7 10. Nf3 c5 11. Be2 O-O 12. O-O cxd4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. cxd5 Nxg5 6. h4 Ne4 7. Nxe4 Qxd5 8. Nc3 Qa5 9. e3 Bg7 10. Nf3 c5 11. Be2 O-O 12. O-O cxd4',
    fullAnnotation: 'White blunders with 5. cxd5?! dropping the bishop pair. Black captures 5...Nxg5, centralizes the queen on d5, and rips open the center with 12...cxd4 holding the bishop pair and a winning game.',
    annotations: {
      9: "Blunder: 5. cxd5?? surrenders the dark-squared bishop.",
      10: "5... Nxg5! — Win the bishop pair.",
      13: "7... Qxd5 — Central queen dominance.",
      23: "12... cxd4 — Break open White's center."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-rc1-dxc4-rook-pin',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – 7. Qd2?! dxc4 8. Bxc4 O-O / 12...Rfd8 Deadly D-File',
    shortName: 'Seirawan 7. Qd2?! Punished',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. Qd2 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 11. O-O Bg4 12. Nd4 Rfd8',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. Qd2 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 11. O-O Bg4 12. Nd4 Rfd8',
    fullAnnotation: 'White plays 7. Qd2?! stepping into pins. Black castles, pins the f3 knight with 11...Bg4, and piles up on the d4 knight with 12...Rfd8 leaving White completely paralyzed.',
    annotations: {
      13: "7... dxc4 — Recover pawn with tempo.",
      21: "11... Bg4 — Pin White's knight.",
      23: "12... Rfd8! — Tactical Motif: Absolute Pin down the d-file against White's queen."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-greedy-bxa7-trap',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – Greedy 7. cxd5?! Nxd5 8. Qxd5? Bxc3+! / 12...Bg7 Clean Piece Up',
    shortName: 'Seirawan 8. Qxd5? Queen Blunder',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. cxd5 Nxd5 8. Qxd5 Bxc3+ 9. Ke2 Bxb2 10. Rd1 O-O 11. Nf3 Nc6 12. Qb3 Bg7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. cxd5 Nxd5 8. Qxd5 Bxc3+ 9. Ke2 Bxb2 10. Rd1 O-O 11. Nf3 Nc6 12. Qb3 Bg7',
    fullAnnotation: 'White blunders with 8. Qxd5?. Black drops the crushing 8...Bxc3+! check, forces White\'s king to e2, picks off b2, and retreats the bishop to g7 a full piece and pawn ahead.',
    annotations: {
      15: "Blunder: 8. Qxd5?? loses by force.",
      16: "8... Bxc3+! — Tactical Motif: Discovered Attack and check winning material.",
      17: "9... Bxb2 — Snatch the b2 rook pawn.",
      23: "12... Bg7 — Black is winning with overwhelming material advantage."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-qa4-bd7-dislodged',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – 6. Qa4+?! Bd7 7. Qb3 cxd4 / 12...Be6 Tempo Domination',
    shortName: 'Seirawan 6. Qa4+?! Punished',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. Qa4+ Bd7 7. Qb3 cxd4 8. exd4 Nc6 9. Nf3 dxc4 10. Qxc4 O-O 11. Be2 Rc8 12. O-O Be6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. Qa4+ Bd7 7. Qb3 cxd4 8. exd4 Nc6 9. Nf3 dxc4 10. Qxc4 O-O 11. Be2 Rc8 12. O-O Be6',
    fullAnnotation: 'White plays 6. Qa4+?!. Black develops with tempo 6...Bd7, shatters White\'s center with 7...cxd4, seizes the c-file with 11...Rc8, and hits White\'s queen with 12...Be6.',
    annotations: {
      11: "Inaccuracy: 6. Qa4+?! helps Black develop.",
      12: "6... Bd7 — Hit White's queen.",
      21: "11... Rc8 — Seize the open c-file.",
      23: "12... Be6 — Hit White's queen again with unstoppable development."
    }
  },
  {
    id: 'grunfeld-seirawan-punish-d5-b5-counter',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Seirawan – Greedy 8. Bxc7?! Na6! / 9...Qxg2! Poisoned Flank Decimation',
    shortName: 'Seirawan 8. Bxc7?! Blunder Punished',
    category: 'Tactical Punishment',
    eco: 'D82 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. cxd5 Nxd5 7. Nxd5 Qxd5 8. Bxc7 Na6 9. Bxa6 Qxg2 10. Qf3 Qxf3 11. Nxf3 bxa6 12. Ke2 Bb7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. cxd5 Nxd5 7. Nxd5 Qxd5 8. Bxc7 Na6 9. Bxa6 Qxg2 10. Qf3 Qxf3 11. Nxf3 bxa6 12. Ke2 Bb7',
    fullAnnotation: 'White greedily grabs pawns with 8. Bxc7?!. Black unleashes the devastating 9...Qxg2! counter-strike, trades queens, and dominates the long diagonal with 12...Bb7 holding the bishop pair.',
    annotations: {
      15: "8... Na6! — Develop knight with tempo hitting White's greedy bishop.",
      17: "9... Qxg2! — Tactical Motif: Poisoned Pawn Counter-Strike attacking h1 and f3.",
      21: "11... bxa6 — Liquidate into a winning bishop-pair endgame.",
      23: "12... Bb7 — Iron pin down the long diagonal."
    }
  },
  {
    id: 'grunfeld-taimanov-punish-h4-h6-rebuttal',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-seirawan-modern',
    name: 'Taimanov – 7. e4 b5 8. a4 c6 / 12...Nb6 Queenside Blockade',
    shortName: 'Taimanov 7. e4?! b5! Counter',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bh4 Nxc3 6. bxc3 dxc4 7. e4 b5 8. a4 c6 9. Nf3 Bg7 10. Be2 O-O 11. O-O Nd7 12. Qc2 Nb6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bh4 Nxc3 6. bxc3 dxc4 7. e4 b5 8. a4 c6 9. Nf3 Bg7 10. Be2 O-O 11. O-O Nd7 12. Qc2 Nb6',
    fullAnnotation: 'Black protects the c4 pawn with 7...b5! and 8...c6, castles smoothly, and mobilizes 12...Nb6 cementing a permanent queenside pawn majority.',
    annotations: {
      13: "7... b5! — Hold the extra pawn.",
      15: "8... c6 — Fortify the chain.",
      23: "12... Nb6 — Iron blockade winning on the queenside."
    }
  },

  // =========================================================================
  // SUBMODULE 4: Unsound Flank Attacks & Deviations (13 Lines)
  // =========================================================================
  {
    id: 'grunfeld-flank-anchor-4-e3-c5',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Quiet 4. e3 – 4...Bg7 5. Nf3 O-O 6. Be2 c5 / 12...Qxb6 Active Queenside',
    shortName: 'Grünfeld 4. e3 Anchor',
    category: 'Anchor Mainline',
    eco: 'D94 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. e3 Bg7 5. Nf3 O-O 6. Be2 c5 7. O-O cxd4 8. exd4 Nc6 9. h3 Be6 10. c5 Ne4 11. Bf4 b6 12. cxb6 Qxb6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. e3 Bg7 5. Nf3 O-O 6. Be2 c5 7. O-O cxd4 8. exd4 Nc6 9. h3 Be6 10. c5 Ne4 11. Bf4 b6 12. cxb6 Qxb6',
    fullAnnotation: 'White adopts the quiet 4. e3. Black strikes in the center with 6...c5, installs the monster 10...Ne4 knight, undermines White\'s chain with 11...b6, and activates the queen with 12...Qxb6 with a superior position.',
    annotations: {
      7: "4. e3 — Passive variation.",
      11: "6... c5! — Immediate central strike.",
      19: "10... Ne4 — Dominant knight outpost.",
      23: "12... Qxb6 — Active queen exerting double pressure on b2 and d4."
    }
  },
  {
    id: 'grunfeld-flank-anchor-3-g3-fianchetto',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Fianchetto Variation – 3. g3 d5 4. Bg2 Bg7 / 12...Rad8 C-Pawn Liquidation',
    shortName: 'Grünfeld Fianchetto Anchor',
    category: 'Anchor Mainline',
    eco: 'D78 1. d4 Nf6 2. c4 g6 3. g3 d5 4. Bg2 Bg7 5. Nf3 O-O 6. O-O dxc4 7. Na3 c3 8. bxc3 c5 9. e3 Nc6 10. Qe2 Bf5 11. Rd1 Qa5 12. Bb2 Rad8',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 d5 4. Bg2 Bg7 5. Nf3 O-O 6. O-O dxc4 7. Na3 c3 8. bxc3 c5 9. e3 Nc6 10. Qe2 Bf5 11. Rd1 Qa5 12. Bb2 Rad8',
    fullAnnotation: 'White plays 3. g3. Black grabs the c4 pawn, ruins White\'s structure with 7...c3!, strikes with 8...c5, coordinates with ...Bf5 and ...Qa5, and controls the d-file with 12...Rad8.',
    annotations: {
      11: "6... dxc4 — Concede center to disrupt White.",
      13: "7... c3! — Tactical Motif: Pawn Wedge ruining White's queenside structure.",
      21: "11... Qa5 — Pressure on c3 and a2.",
      23: "12... Rad8 — Harmonious central control."
    }
  },
  {
    id: 'grunfeld-flank-punish-early-h4-assault',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Harry Pawn – 4. h4?! Bg7 5. h5 Nxh5 / 12...Nbxd5 Decisive Domination',
    shortName: 'Unsound 4. h4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. h4 Bg7 5. h5 Nxh5 6. cxd5 c6 7. e4 cxd5 8. exd5 Nf6 9. Bc4 Nbd7 10. Bh6 Bxh6 11. Rxh6 Nb6 12. Bb3 Nbxd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. h4 Bg7 5. h5 Nxh5 6. cxd5 c6 7. e4 cxd5 8. exd5 Nf6 9. Bc4 Nbd7 10. Bh6 Bxh6 11. Rxh6 Nb6 12. Bb3 Nbxd5',
    fullAnnotation: 'White plays the amateur flank attack 4. h4?!. Black defends calmly with 5...Nxh5, rounds up White\'s isolated d5 pawn with 9...Nbd7 and 12...Nbxd5, leaving White with a stranded rook on h6.',
    annotations: {
      7: "Blunder: 4. h4?! is a premature wing pawn push.",
      9: "5... Nxh5 — Snatch the free pawn.",
      21: "11... Nb6 — Hit White's bishop.",
      23: "12... Nbxd5 — Black wins back the center with an extra pawn."
    }
  },
  {
    id: 'grunfeld-flank-punish-early-f3-d5-center',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Anti-Grünfeld – 3. f3?! d5 4. cxd5 Nxd5 5. e4 Nb6 / 12...Qxd5 Dominance',
    shortName: 'Anti-Grünfeld 3. f3?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D70 1. d4 Nf6 2. c4 g6 3. f3 d5 4. cxd5 Nxd5 5. e4 Nb6 6. Nc3 Bg7 7. Be3 O-O 8. Qd2 Nc6 9. O-O-O f5 10. e5 Nb4 11. Nh3 N4d5 12. Nxd5 Qxd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. f3 d5 4. cxd5 Nxd5 5. e4 Nb6 6. Nc3 Bg7 7. Be3 O-O 8. Qd2 Nc6 9. O-O-O f5 10. e5 Nb4 11. Nh3 N4d5 12. Nxd5 Qxd5',
    fullAnnotation: 'White tries 3. f3?! to build a wall. Black counter-attacks in the center with 8...Nc6 and 9...f5!, invades with 10...Nb4, and forks a2 and c4 with 12...Qxd5 with a winning attack against White\'s king.',
    annotations: {
      5: "Inaccuracy: 3. f3?! weakens White's king.",
      17: "9... f5! — Tactical Motif: Counter-Strike against White's pawn chain.",
      19: "10... Nb4! — Target the weak a2 and c2 squares.",
      23: "12... Qxd5! — Double attack threatening a2."
    }
  },
  {
    id: 'grunfeld-flank-punish-5-qa4-check-blunder',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Queen Blunder – 5. Qa4+?! Bd7 6. Qb3 Nb6 / 12...e5 Central Demolition',
    shortName: 'Grünfeld 5. Qa4+?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Qa4+ Bd7 6. Qb3 Nb6 7. Nf3 Bg7 8. e4 O-O 9. Be2 Bg4 10. Be3 Bxf3 11. Bxf3 Bxd4 12. Rd1 e5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Qa4+ Bd7 6. Qb3 Nb6 7. Nf3 Bg7 8. e4 O-O 9. Be2 Bg4 10. Be3 Bxf3 11. Bxf3 Bxd4 12. Rd1 e5',
    fullAnnotation: 'White wastes time with 5. Qa4+?!. Black develops with tempo 5...Bd7, castles, eliminates the f3 knight with 10...Bxf3, wins the d4 pawn with 11...Bxd4, and cements the center with 12...e5.',
    annotations: {
      9: "Mistake: 5. Qa4+?! loses time.",
      10: "5... Bd7 — Hit the queen.",
      21: "11... Bxd4! — Tactical Motif: Removal of Guard winning the central pawn.",
      23: "12... e5! — Iron central fortress holding the extra pawn."
    }
  },
  {
    id: 'grunfeld-flank-punish-4-cd5-nd5-5-na4',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Knight Deviation – 5. Na4?! Bg7 6. e4 Nb6 / 12...Qa5+ Fork Check',
    shortName: 'Grünfeld 5. Na4?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Na4 Bg7 6. e4 Nb6 7. Be3 O-O 8. Nf3 Nxa4 9. Qxa4 c5 10. Rd1 Bd7 11. Qc2 cxd4 12. Bxd4 Qa5+',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Na4 Bg7 6. e4 Nb6 7. Be3 O-O 8. Nf3 Nxa4 9. Qxa4 c5 10. Rd1 Bd7 11. Qc2 cxd4 12. Bxd4 Qa5+',
    fullAnnotation: 'White misplaces the knight to the rim with 5. Na4?!. Black trades it off, strikes the center with 9...c5, and delivers the crushing 12...Qa5+ fork winning material.',
    annotations: {
      9: "Inaccuracy: 5. Na4?! places the knight on the rim.",
      17: "9... c5! — Attack White's center.",
      23: "12... Qa5+! — Tactical Motif: Double Attack fork on king and d4."
    }
  },
  {
    id: 'grunfeld-flank-punish-3-cd5-qxd5-blunder',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Passive 5. Bd2 – 5...Bg7 6. e4 Nb6 / 12...Nbc4 Fork Pressure',
    shortName: 'Grünfeld 5. Bd2?! Inaccuracy Punished',
    category: 'Tactical Punishment',
    eco: 'D85 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Bd2 Bg7 6. e4 Nb6 7. Be3 O-O 8. Nf3 Bg4 9. Be2 Nc6 10. d5 Bxf3 11. Bxf3 Ne5 12. Be2 Nbc4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Bd2 Bg7 6. e4 Nb6 7. Be3 O-O 8. Nf3 Bg4 9. Be2 Nc6 10. d5 Bxf3 11. Bxf3 Ne5 12. Be2 Nbc4',
    fullAnnotation: 'White plays the passive 5. Bd2. Black targets d4 with 6...Nb6 and 9...Nc6, pins and eliminates the f3 defender with 10...Bxf3, and drops 12...Nbc4! forking White\'s bishop and b2 pawn.',
    annotations: {
      9: "Inaccuracy: 5. Bd2 is too passive.",
      16: "8... Bg4 — Pin the d4 defender.",
      20: "10... Bxf3! — Remove the guard.",
      23: "12... Nbc4! — Tactical Motif: Fork attacking Be3 and b2."
    }
  },
  {
    id: 'grunfeld-flank-punish-early-b4-wing-thrust',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Wing Thrust – 4. b4?! Bg7 5. e3 O-O / 12...Nb4 Infiltration',
    shortName: 'Grünfeld 4. b4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. b4 Bg7 5. e3 O-O 6. Nf3 a5 7. b5 c5 8. bxc6 Nxc6 9. Ba3 Bg4 10. Be2 dxc4 11. Bxc4 Rc8 12. Be2 Nb4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. b4 Bg7 5. e3 O-O 6. Nf3 a5 7. b5 c5 8. bxc6 Nxc6 9. Ba3 Bg4 10. Be2 dxc4 11. Bxc4 Rc8 12. Be2 Nb4',
    fullAnnotation: 'White attempts 4. b4?! on the flank. Black counters with 6...a5! and 7...c5!, seizes the open c-file with 11...Rc8, and invades with 12...Nb4 with overwhelming pressure.',
    annotations: {
      7: "Inaccuracy: 4. b4?! weakens White's queenside light squares.",
      11: "6... a5! — Undermine the b4 pawn.",
      21: "11... Rc8 — Seize the open c-file.",
      23: "12... Nb4! — Target the weakened c2 square."
    }
  },
  {
    id: 'grunfeld-flank-punish-4-qb3-c6-solid',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Premature Queen – 4. Qb3?! c6 5. Nf3 Bg7 / 12...Qc7 Dynamic Control',
    shortName: 'Grünfeld 4. Qb3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Qb3 c6 5. Nf3 Bg7 6. Bf4 dxc4 7. Qxc4 O-O 8. e4 b5 9. Qb3 Qa5 10. Bd2 b4 11. Na4 Nxe4 12. Bxb4 Qc7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Qb3 c6 5. Nf3 Bg7 6. Bf4 dxc4 7. Qxc4 O-O 8. e4 b5 9. Qb3 Qa5 10. Bd2 b4 11. Na4 Nxe4 12. Bxb4 Qc7',
    fullAnnotation: 'White plays 4. Qb3?! too soon. Black solidifies with 4...c6, expands with 8...b5!, pins the knight with 9...Qa5, and wins the e4 pawn with 11...Nxe4 enjoying full superiority.',
    annotations: {
      7: "Inaccuracy: 4. Qb3?! allows Black an easy setup.",
      15: "8... b5! — Kick White's queen.",
      21: "11... Nxe4! — Snatch the central e4 pawn.",
      23: "12... Qc7 — Connect rooks with an extra pawn."
    }
  },
  {
    id: 'grunfeld-flank-punish-3-f3-e5-counter',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Anti-Grünfeld – 8. f4?! Nc6 9. d5 Na5 / 12...Bxe5 Monster Bishop',
    shortName: 'Anti-Grünfeld 8. f4?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D70 1. d4 Nf6 2. c4 g6 3. f3 d5 4. cxd5 Nxd5 5. e4 Nb6 6. Be3 Bg7 7. Nc3 O-O 8. f4 Nc6 9. d5 Na5 10. Bd4 e5 11. fxe5 c5 12. Bxc5 Bxe5',
    pgn: '1. d4 Nf6 2. c4 g6 3. f3 d5 4. cxd5 Nxd5 5. e4 Nb6 6. Be3 Bg7 7. Nc3 O-O 8. f4 Nc6 9. d5 Na5 10. Bd4 e5 11. fxe5 c5 12. Bxc5 Bxe5',
    fullAnnotation: 'White overextends with 8. f4?!. Black strikes the center with 10...e5!, sacrifices the exchange for total domination, and plants the monster bishop on 12...Bxe5 with an unstoppable attack.',
    annotations: {
      15: "Mistake: 8. f4?! fatally weakens the dark squares.",
      19: "10... e5! — Tactical Motif: Central Rupture against White's king.",
      23: "12... Bxe5! — Bishop dominates the dark squares with check threats."
    }
  },
  {
    id: 'grunfeld-flank-punish-4-g3-dc4-5-qa4',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Fianchetto – 5. Qa4+?! Nbd7 6. Qxc4 Bg7 / 12...e5 Central Command',
    shortName: 'Fianchetto 5. Qa4+?! Punished',
    category: 'Tactical Punishment',
    eco: 'D71 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. g3 dxc4 5. Qa4+ Nbd7 6. Qxc4 Bg7 7. Bg2 O-O 8. Nf3 Nb6 9. Qd3 c5 10. O-O cxd4 11. Qxd4 Qxd4 12. Nxd4 e5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. g3 dxc4 5. Qa4+ Nbd7 6. Qxc4 Bg7 7. Bg2 O-O 8. Nf3 Nb6 9. Qd3 c5 10. O-O cxd4 11. Qxd4 Qxd4 12. Nxd4 e5',
    fullAnnotation: 'White checks with 5. Qa4+?!. Black develops smoothly, hits White\'s queen with 8...Nb6, breaks open the center with 9...c5, trades queens, and seizes space with 12...e5! commanding the game.',
    annotations: {
      9: "Inaccuracy: 5. Qa4+?! helps Black develop.",
      15: "8... Nb6! — Kick the queen.",
      17: "9... c5! — Shatter the center.",
      23: "12... e5! — Kick White's knight and seize central space."
    }
  },
  {
    id: 'grunfeld-flank-punish-4-bg5-c5-demolition',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Flank 4. Bg5 dxc4 5. e3 Bg7 / 12...Ne5 Knight Monster',
    shortName: 'Grünfeld 4. Bg5 dxc4 Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 dxc4 5. e3 Bg7 6. Bxc4 O-O 7. Nf3 c5 8. O-O cxd4 9. exd4 Bg4 10. Be2 Nc6 11. d5 Bxf3 12. Bxf3 Ne5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 dxc4 5. e3 Bg7 6. Bxc4 O-O 7. Nf3 c5 8. O-O cxd4 9. exd4 Bg4 10. Be2 Nc6 11. d5 Bxf3 12. Bxf3 Ne5',
    fullAnnotation: 'White plays 4. Bg5 and leaves an isolated d4 pawn. Black pins the f3 knight with 9...Bg4, eliminates it, and plants the monster 12...Ne5 knight commanding the board.',
    annotations: {
      7: "4... dxc4 — Grab the flank pawn.",
      17: "9... Bg4 — Pin White's d4 defender.",
      21: "11... Bxf3 — Remove the guard.",
      23: "12... Ne5! — Dominant knight outpost targeting c4 and d3."
    }
  },
  {
    id: 'grunfeld-flank-punish-early-nh3-passive',
    courseId: 'grunfeld-defense',
    subCourseId: 'grunfeld-unsound-flank',
    name: 'Knight to Rim – 4. Nh3?! Bg7 5. cxd5 Nxd5 / 12...e4 Pawn Fork Threat',
    shortName: 'Grünfeld 4. Nh3?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D80 1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nh3 Bg7 5. cxd5 Nxd5 6. g3 O-O 7. Bg2 Nxc3 8. bxc3 c5 9. e3 Nc6 10. O-O cxd4 11. cxd4 e5 12. d5 e4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nh3 Bg7 5. cxd5 Nxd5 6. g3 O-O 7. Bg2 Nxc3 8. bxc3 c5 9. e3 Nc6 10. O-O cxd4 11. cxd4 e5 12. d5 e4',
    fullAnnotation: 'White places the knight on the rim with 4. Nh3?!. Black shatters White\'s center with 8...c5 and 11...e5!, and drops 12...e4! discovering an attack on the a1 rook and winning material.',
    annotations: {
      7: "Blunder: 4. Nh3?! is misplaced on the rim.",
      15: "8... c5! — Demolish White's pawn center.",
      21: "11... e5! — Central counter-strike.",
      23: "12... e4! — Tactical Motif: Discovered Attack threatening White's a1 rook."
    }
  }
];

console.log(`Total Grünfeld Defense lines to compile: ${grunfeldRaw.length}`);
const processed = grunfeldRaw.map(buildBlackLine);

const outPath = 'src/data/lines/grunfeld-defense.js';
const code = `// Grünfeld Defense Repertoire (1. d4 Nf6 2. c4 g6 3. Nc3 d5)
// Autogenerated and validated for Modena Lines. Strictly Black perspective.

export const grunfeldDefenseLines = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync(outPath, code, 'utf-8');
console.log(`Successfully written ${outPath} (${processed.length} lines)`);
