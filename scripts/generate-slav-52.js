import { Chess } from 'chess.js';
import fs from 'fs';
import { buildBlackLine } from './builder-utils.js';

export const slavRaw = [
  // =========================================================================
  // SUBMODULE 1: Classical Slav Exploitation (4...dxc4 / 5. a4 Bf5) - 13 Lines
  // =========================================================================
  {
    id: 'slav-classical-anchor-mainline',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 / 12...Nd5 Anchor',
    shortName: 'Classical Slav Anchor',
    category: 'Anchor Mainline',
    eco: 'D18 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Nbd7 10. e4 Bg6 11. Bd3 Bh5 12. e5 Nd5',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Nbd7 10. e4 Bg6 11. Bd3 Bh5 12. e5 Nd5',
    fullAnnotation: 'The bedrock of the Classical Slav Defense: Black develops the bishop to f5 outside the pawn chain before playing ...e6, castles smoothly, pins White\'s knight with 11...Bh5, and establishes 12...Nd5 firmly in the center.',
    annotations: {
      7: "4... dxc4 — Surrender center temporarily to activate the bishop.",
      9: "5... Bf5 — The key move: develop outside the pawn chain.",
      13: "7... Bb4 — Pin the knight and contest e4.",
      21: "11... Bh5 — Pin the knight on f3 to undermine White's e4 center.",
      23: "12... Nd5 — Anchor the knight into the central outpost."
    }
  },
  {
    id: 'slav-classical-anchor-ne5-mainline',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Open – 6. Ne5 Nbd7 7. Nxc4 Qc7 / 12...Rd8 Mainline',
    shortName: 'Classical 6. Ne5 Anchor',
    category: 'Anchor Mainline',
    eco: 'D17 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 f6 12. O-O Rd8',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 f6 12. O-O Rd8',
    fullAnnotation: 'White plays 6. Ne5 to regain c4 quickly. Black counters with 6...Nbd7 and 7...Qc7, strikes with 8...e5!, neutralizes White\'s pin with 10...Nfd7 and 11...f6, and seizes the open d-file with 12...Rd8.',
    annotations: {
      11: "6... Nbd7 — Challenge White's centralized knight immediately.",
      13: "7... Qc7 — Prepare central break ...e5.",
      15: "8... e5! — Central counter-strike.",
      21: "11... f6 — Reinforce e5 outpost.",
      23: "12... Rd8 — Rook seizes the open d-file with pressure against White's queen."
    }
  },
  {
    id: 'slav-classical-anchor-steinitz-setup',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 8...Nbd7 9. Nh4 Bg6 10. Nxg6 hxg6 / 12...O-O-O Setup',
    shortName: 'Classical Steinitz Anchor',
    category: 'Anchor Mainline',
    eco: 'D19 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Nh4 Bg6 10. Nxg6 hxg6 11. h3 Qc7 12. Qe2 O-O-O',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Nh4 Bg6 10. Nxg6 hxg6 11. h3 Qc7 12. Qe2 O-O-O',
    fullAnnotation: 'When White hunts the bishop with 9. Nh4, Black opens the h-file with 10...hxg6!, organizes queenside castling with 11...Qc7 and 12...O-O-O, and prepares a kingside battery down the semi-open h-file.',
    annotations: {
      17: "9... Bg6 — Retreat maintaining the diagonal.",
      19: "10... hxg6! — Open the h-file for the black rook.",
      21: "11... Qc7 — Eye the h2 square and prepare long castling.",
      23: "12... O-O-O — King safely tucked away with aggressive intentions."
    }
  },
  {
    id: 'slav-classical-punish-e4-b5-skewer',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 5. e4?! b5! 6. e5 Nd5 / 12...Be7 Queenside Shell',
    shortName: 'Classical 5. e4?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7 11. Qh5 g6 12. Qg4 Be7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7 11. Qh5 g6 12. Qg4 Be7',
    fullAnnotation: 'White plays 5. e4?! without preparing a4. Black clings to the c4 pawn with 5...b5!, plants the knight on d5, coordinates with 10...Bb7, and parries White\'s cheap Qh5 attack with 11...g6 and 12...Be7 with a winning queenside pawn majority.',
    annotations: {
      9: "5... b5! — Protect the extra c4 pawn since White omitted 5. a4.",
      11: "6... Nd5 — Central blockade.",
      19: "10... Bb7 — Monster bishop on the long diagonal.",
      21: "11... g6 — Blunt White's queen attack.",
      23: "12... Be7 — Black is a solid pawn up with superior pawn structure."
    }
  },
  {
    id: 'slav-classical-punish-ne5-f6-trap',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 6. Ne5 e6 7. f3 c5! / 12...Rxd8 Queenless Ruin',
    shortName: 'Classical 7...c5! Counter-Strike',
    category: 'Tactical Punishment',
    eco: 'D17 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 c5 8. e4 cxd4 9. exf5 Nc6 10. Nxc6 bxc6 11. Bxc4 dxc3 12. Qxd8+ Rxd8',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 c5 8. e4 cxd4 9. exf5 Nc6 10. Nxc6 bxc6 11. Bxc4 dxc3 12. Qxd8+ Rxd8',
    fullAnnotation: 'White attempts 7. f3 to dominate the center with e4. Black counters viciously with 7...c5! and 8...cxd4!, eliminates White\'s queenside knight, and trades into an endgame with 12...Rxd8 where White has lost all initiative.',
    annotations: {
      13: "7... c5! — Tactical Motif: Immediate Central Counter-Blow shattering White's pawn plans.",
      15: "8... cxd4! — Win material or create chaos in White's center.",
      17: "9... Nc6 — Develop and challenge the overextended knight.",
      23: "12... Rxd8 — Rook activates with check threat."
    }
  },
  {
    id: 'slav-classical-punish-bg5-ne4-fork',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 6. Bg5 Nbd7 7. e3 Qa5 / 12...Rab8 Iron Grip',
    shortName: 'Classical 7...Qa5 Pin Punishment',
    category: 'Tactical Punishment',
    eco: 'D17 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Bg5 Nbd7 7. e3 Qa5 8. Bxf6 Nxf6 9. Bxc4 e6 10. O-O Bb4 11. Qb3 O-O 12. Ne5 Rab8',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Bg5 Nbd7 7. e3 Qa5 8. Bxf6 Nxf6 9. Bxc4 e6 10. O-O Bb4 11. Qb3 O-O 12. Ne5 Rab8',
    fullAnnotation: 'White tries 6. Bg5. Black pins the knight on c3 with 7...Qa5!, completes development with 10...Bb4 and 11...O-O, and defends the b7 pawn with 12...Rab8 leaving White\'s queenside under severe pressure.',
    annotations: {
      13: "7... Qa5! — Pin White's c3 knight with tempo.",
      19: "10... Bb4 — Piling up on the pinned c3 knight.",
      23: "12... Rab8 — Protect b7 and consolidate harmonious advantage."
    }
  },
  {
    id: 'slav-classical-punish-greedy-bxc3-break',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 5. e3 b5 6. a4 b4! / 12...Nbd7 C-Pawn Blockade',
    shortName: 'Classical 6...b4! Pawn Kick',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3 b5 6. a4 b4 7. Na2 e6 8. Bxc4 Be7 9. O-O O-O 10. Bd2 a5 11. Nc1 c5 12. Nb3 Nbd7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3 b5 6. a4 b4 7. Na2 e6 8. Bxc4 Be7 9. O-O O-O 10. Bd2 a5 11. Nc1 c5 12. Nb3 Nbd7',
    fullAnnotation: 'When White plays 6. a4 to undermine Black\'s chain, Black thrusts 6...b4!, evicting the c3 knight to the edge. Black supports the chain with 10...a5, breaks open the center with 11...c5, and achieves complete strategic dominance.',
    annotations: {
      11: "6... b4! — Evict White's knight to the rim on a2.",
      19: "10... a5! — Secure the b4 pawn permanently.",
      21: "11... c5! — Thematic central liquidation.",
      23: "12... Nbd7 — Perfect coordination with pressure on White's d4 pawn."
    }
  },
  {
    id: 'slav-classical-punish-early-g3-e5-thrust',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 5. g3 b5 6. Bg2 Bb7 / 12...O-O Solid Fortress',
    shortName: 'Classical 5. g3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. g3 b5 6. Bg2 Bb7 7. O-O e6 8. e4 Nbd7 9. e5 Nd5 10. Ng5 Be7 11. Qh5 g6 12. Qg4 O-O',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. g3 b5 6. Bg2 Bb7 7. O-O e6 8. e4 Nbd7 9. e5 Nd5 10. Ng5 Be7 11. Qh5 g6 12. Qg4 O-O',
    fullAnnotation: 'White fianchettoes too slowly with 5. g3. Black grabs the pawn with 5...b5!, sets up the fortress on b7 and d5, calmly parries White\'s queen rush, and castles safely with 12...O-O holding the extra pawn.',
    annotations: {
      9: "5... b5! — Cling to the gambit pawn.",
      11: "6... Bb7 — Oppose White's g2 bishop.",
      17: "9... Nd5 — Unshakeable blockade on the dark squares.",
      23: "12... O-O — Complete development with pawn advantage."
    }
  },
  {
    id: 'slav-classical-punish-premature-qe2-e5',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 9. Qe2 Bg4 10. Rd1 Nbd7 / 12...Bxf3 Bishop Elimination',
    shortName: 'Classical 9...Bg4 Pin Punishment',
    category: 'Tactical Punishment',
    eco: 'D19 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Bg4 10. Rd1 Nbd7 11. e4 e5 12. dxe5 Bxf3',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Bg4 10. Rd1 Nbd7 11. e4 e5 12. dxe5 Bxf3',
    fullAnnotation: 'White prepares e4 with 9. Qe2. Black pins the knight with 9...Bg4!, strikes the center with 11...e5!, and eliminates the defender with 12...Bxf3!, shattering White\'s kingside structure.',
    annotations: {
      17: "9... Bg4! — Pin White's knight to parry e4.",
      21: "11... e5! — Tactical Motif: Counter-Strike against White's center.",
      23: "12... Bxf3! — Ruin White's pawn shelter on the kingside."
    }
  },
  {
    id: 'slav-classical-punish-nh4-hxg6-rook',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 6. Nh4 Bc8 7. e3 e5! / 12...Be6 Dynamic Equality',
    shortName: 'Classical 6. Nh4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D17 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Nh4 Bc8 7. e3 e5 8. Bxc4 exd4 9. exd4 Be7 10. O-O O-O 11. Re1 Nd5 12. Nf3 Be6',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Nh4 Bc8 7. e3 e5 8. Bxc4 exd4 9. exd4 Be7 10. O-O O-O 11. Re1 Nd5 12. Nf3 Be6',
    fullAnnotation: 'White misplaces the knight with the greedy 6. Nh4?!. Black simply retreats 6...Bc8!, blows open the center with 7...e5!, gives White an isolated d-pawn, and develops harmoniously with 12...Be6.',
    annotations: {
      11: "6... Bc8! — Humble retreat leaving White's h4 knight completely stranded.",
      13: "7... e5! — Central explosion exploiting White's lack of development.",
      21: "11... Nd5 — Blockade the isolated d4 pawn.",
      23: "12... Be6 — Coordinate pieces with full strategic advantage."
    }
  },
  {
    id: 'slav-classical-punish-b3-cxb3-pass',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 5. b3?! cxb3 6. axb3 Bf5 / 12...Nbd7 Queenside Sweep',
    shortName: 'Classical 5. b3?! Weakness Exploited',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. b3 cxb3 6. axb3 Bf5 7. e3 e6 8. Bd3 Bxd3 9. Qxd3 Bb4 10. O-O O-O 11. Ba3 Bxa3 12. Rxa3 Nbd7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. b3 cxb3 6. axb3 Bf5 7. e3 e6 8. Bd3 Bxd3 9. Qxd3 Bb4 10. O-O O-O 11. Ba3 Bxa3 12. Rxa3 Nbd7',
    fullAnnotation: 'White offers 5. b3?! to recover the pawn. Black accepts with 5...cxb3, trades off bishops, and develops seamlessly with 12...Nbd7, leaving White with weak b- and d-pawns and zero compensation.',
    annotations: {
      9: "5... cxb3 — Free pawn capture.",
      15: "8... Bxd3 — Eliminate White's attacking bishop.",
      23: "12... Nbd7 — Black has a pristine pawn structure and flawless king safety."
    }
  },
  {
    id: 'slav-classical-punish-qc2-na6-infiltration',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – 6. Qc2 e6 7. e4 Bg6 / 12...e5 Center Demolition',
    shortName: 'Classical 6. Qc2 Inaccuracy Punished',
    category: 'Tactical Punishment',
    eco: 'D17 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Qc2 e6 7. e4 Bg6 8. Bxc4 Bb4 9. Bd3 Bh5 10. Be3 Bxf3 11. gxf3 Nbd7 12. Ke2 e5',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Qc2 e6 7. e4 Bg6 8. Bxc4 Bb4 9. Bd3 Bh5 10. Be3 Bxf3 11. gxf3 Nbd7 12. Ke2 e5',
    fullAnnotation: 'White pushes e4 without proper prophylaxis. Black pins the knight, trades with 10...Bxf3 ruining White\'s kingside, forces White\'s king to e2, and detonates the center with 12...e5!.',
    annotations: {
      17: "9... Bh5! — Pin the knight guarding d4.",
      19: "10... Bxf3! — Ruin White's king pawns.",
      23: "12... e5! — Tactical Motif: Central Rupture against White's uncastled king."
    }
  },
  {
    id: 'slav-classical-punish-d5-cxd5-center-domination',
    courseId: 'slav-defense',
    subCourseId: 'slav-classical-exploitation',
    name: 'Classical Slav – Dubious 5. d5?! cxd5 6. e4 e6 / 12...O-O Clean Up',
    shortName: 'Classical 5. d5?! Blunder Punished',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. d5 cxd5 6. e4 e6 7. Bg5 Be7 8. Bxf6 Bxf6 9. exd5 exd5 10. Qxd5 Bxc3+ 11. bxc3 Qxd5 12. Be2 O-O',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. d5 cxd5 6. e4 e6 7. Bg5 Be7 8. Bxf6 Bxf6 9. exd5 exd5 10. Qxd5 Bxc3+ 11. bxc3 Qxd5 12. Be2 O-O',
    fullAnnotation: 'White blunders with 5. d5?!. Black collects the center with 5...cxd5!, drops the intermediate check 10...Bxc3+ winning White\'s queen for free, and castles with 12...O-O with an insurmountable material lead.',
    annotations: {
      9: "5... cxd5 — Accept White's reckless gift.",
      19: "10... Bxc3+! — Tactical Motif: Zwischenzug check with decisive deflection.",
      21: "11... Qxd5 — Win White's queen!",
      23: "12... O-O — Black is completely winning with a queen for a minor piece."
    }
  },

  // =========================================================================
  // SUBMODULE 2: Semi-Slav & Meran Traps (4...e6 / 5. e3 Nbd7) - 13 Lines
  // =========================================================================
  {
    id: 'slav-meran-anchor-8-bd3-mainline',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Meran Variation – 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 / 12...axb5 Anchor',
    shortName: 'Meran Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'D47 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5',
    fullAnnotation: 'The classical Meran Variation: Black strikes back on the queenside with 7...b5, expands with 8...a6 and 9...c5, counter-sacrifices with 10...cxd4 and 11...Nxe5, and wins back the piece with 12...axb5.',
    annotations: {
      7: "4... e6 — The Semi-Slav triangle.",
      11: "6... dxc4 — Concede center to expand on the flank.",
      13: "7... b5 — Kick the bishop.",
      17: "9... c5! — Explosive queenside rupture.",
      21: "11... Nxe5! — Tactical blow eliminating White's key central pawn.",
      23: "12... axb5 — Recover material with equal, razor-sharp game."
    }
  },
  {
    id: 'slav-botvinnik-anchor-wild-complex',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Botvinnik System – 5. Bg5 dxc4 6. e4 b5 7. e5 h6 / 12...c5 Counter-Fire',
    shortName: 'Botvinnik System Anchor',
    category: 'Anchor Mainline',
    eco: 'D44 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. exf6 Bb7 12. g3 c5',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. exf6 Bb7 12. g3 c5',
    fullAnnotation: 'Mikhail Botvinnik\'s ferocious weapon: Black accepts the piece pin with 7...h6 and 8...g5!, places the bishop on b7, and strikes in the center with 12...c5!, activating the entire army along the long diagonal.',
    annotations: {
      9: "5. Bg5 — The critical pin.",
      11: "6... b5 — Hang on to c4.",
      15: "8... g5! — Break the pin with supreme tactical bravery.",
      21: "11... Bb7 — Fiery diagonal battery.",
      23: "12... c5! — Tactical Motif: Central Counter-Strike hitting White's rook on h1."
    }
  },
  {
    id: 'slav-meran-punish-8-bb3-b4-fork',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Meran – 8. Bb3 b4! 9. Ne2 Ba6 / 12...O-O Queenside Lockdown',
    shortName: 'Meran 8. Bb3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D47 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bb3 b4 9. Ne2 Ba6 10. O-O c5 11. Re1 Be7 12. Nf4 O-O',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bb3 b4 9. Ne2 Ba6 10. O-O c5 11. Re1 Be7 12. Nf4 O-O',
    fullAnnotation: 'White retreats the bishop passively with 8. Bb3?!. Black immediately pushes 8...b4!, pins the knight with 9...Ba6!, breaks in the center with 10...c5, and castles with 12...O-O holding complete queenside initiative.',
    annotations: {
      15: "8... b4! — Dislodge the Nc3 defender.",
      17: "9... Ba6! — Pin on the e2 knight preventing easy development.",
      19: "10... c5 — Central explosion.",
      23: "12... O-O — Complete development with an unshakeable clamp."
    }
  },
  {
    id: 'slav-meran-punish-9-d5-cxd5-refutation',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Meran – 9. d5?! exd5 10. O-O Be7 / 12...bxc3 Piece Gain',
    shortName: 'Meran 9. d5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D47 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. d5 exd5 10. O-O Be7 11. e4 b4 12. e5 bxc3',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. d5 exd5 10. O-O Be7 11. e4 b4 12. e5 bxc3',
    fullAnnotation: 'White lashes out prematurely with 9. d5?!. Black collects the pawn with 9...exd5, kicks White\'s pieces with 11...b4!, and wins the piece outright on c3 with 12...bxc3.',
    annotations: {
      17: "9... exd5 — Calm recapture with center command.",
      21: "11... b4! — Deflect White's knight.",
      23: "12... bxc3 — Black wins a full piece with overwhelming position."
    }
  },
  {
    id: 'slav-botvinnik-punish-exf6-qxf6',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Botvinnik – 9. Bg3 Nd5 10. Be2 Bb4 / 12...Bxc3 Rook Pillage',
    shortName: 'Botvinnik 10...Bb4 Pin',
    category: 'Tactical Punishment',
    eco: 'D44 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Bg3 Nd5 10. Be2 Bb4 11. Rc1 Qa5 12. O-O Bxc3',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Bg3 Nd5 10. Be2 Bb4 11. Rc1 Qa5 12. O-O Bxc3',
    fullAnnotation: 'White refuses to sacrifice on g5 and retreats 9. Bg3. Black locks down d5, pins the knight with 10...Bb4, doubles the pressure with 11...Qa5, and demolishes White\'s queenside with 12...Bxc3.',
    annotations: {
      17: "9... Nd5 — Blockade e5.",
      19: "10... Bb4! — Lethal pin on the c3 knight.",
      21: "11... Qa5 — Triple battery on c3.",
      23: "12... Bxc3 — Win material and destroy White's flank."
    }
  },
  {
    id: 'slav-moscow-punish-bxf6-qxf6',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Moscow Variation – 5...h6 6. Bxf6 Qxf6 7. e3 Nd7 / 12...e5 Equality',
    shortName: 'Moscow Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'D43 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bxf6 Qxf6 7. e3 Nd7 8. Bd3 dxc4 9. Bxc4 g6 10. O-O Bg7 11. Qe2 O-O 12. e4 e5',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bxf6 Qxf6 7. e3 Nd7 8. Bd3 dxc4 9. Bxc4 g6 10. O-O Bg7 11. Qe2 O-O 12. e4 e5',
    fullAnnotation: 'The solid Moscow Variation: Black puts the question to the bishop with 5...h6, takes with the queen gaining the bishop pair, fianchettoes with 9...g6 and 10...Bg7, and equalizes fully with 12...e5.',
    annotations: {
      9: "5... h6 — Force White to declare their intentions.",
      11: "6... Qxf6 — Bishop pair secured.",
      17: "9... g6 — Prepare harmonious fianchetto.",
      23: "12... e5! — Central break securing absolute equality."
    }
  },
  {
    id: 'slav-anti-meran-punish-qc2-bd6',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Anti-Meran – 6. Qc2 Bd6 7. b3 O-O / 12...Nxe4 Liquidated Center',
    shortName: 'Anti-Meran 6. Qc2 Punished',
    category: 'Tactical Punishment',
    eco: 'D45 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. b3 O-O 8. Be2 b6 9. O-O Bb7 10. Bb2 Qe7 11. e4 dxe4 12. Nxe4 Nxe4',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. b3 O-O 8. Be2 b6 9. O-O Bb7 10. Bb2 Qe7 11. e4 dxe4 12. Nxe4 Nxe4',
    fullAnnotation: 'White tries to sidestep the Meran with 6. Qc2. Black sets up the harmonized ...Bd6, ...b6, and ...Bb7 structure, liquidates White\'s central break with 11...dxe4 and 12...Nxe4, leaving White with zero advantage.',
    annotations: {
      11: "6... Bd6 — Active diagonal post.",
      17: "9... Bb7 — Long diagonal dominance.",
      21: "11... dxe4 — Neutralize White's pawn thrust.",
      23: "12... Nxe4 — Trade off pieces into an easy, comfortable game."
    }
  },
  {
    id: 'slav-noteboom-punish-greedy-b4',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Noteboom Variation – 4...dxc4 5. e3 b5 6. a4 Bb4! / 12...Nf6 Steamroller',
    shortName: 'Noteboom Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'D31 1. d4 d5 2. c4 c6 3. Nc3 e6 4. Nf3 dxc4 5. e3 b5 6. a4 Bb4 7. Bd2 a5 8. axb5 Bxc3 9. Bxc3 cxb5 10. b3 Bb7 11. bxc4 b4 12. Bb2 Nf6',
    pgn: '1. d4 d5 2. c4 c6 3. Nc3 e6 4. Nf3 dxc4 5. e3 b5 6. a4 Bb4 7. Bd2 a5 8. axb5 Bxc3 9. Bxc3 cxb5 10. b3 Bb7 11. bxc4 b4 12. Bb2 Nf6',
    fullAnnotation: 'The legendary Noteboom Variation: Black creates connected passed pawns on the queenside with ...a5 and ...b4, blunts White\'s bishop with 10...Bb7, and prepares the unstoppable queenside march.',
    annotations: {
      7: "4... dxc4 — Grab the pawn in Noteboom fashion.",
      11: "6... Bb4! — Pin and defend.",
      13: "7... a5! — Secure the pawn duo.",
      21: "11... b4! — Connected outside passed pawns formed.",
      23: "12... Nf6 — Superior endgame winning prospects for Black."
    }
  },
  {
    id: 'slav-meran-punish-e5-nxe5-tactic',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Meran – 8...Bb7 9. O-O a6 10. e4 c5 11. d5 c4 / 12...Qc7 Fortress',
    shortName: 'Meran 11...c4! Advance',
    category: 'Tactical Punishment',
    eco: 'D47 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. O-O a6 10. e4 c5 11. d5 c4 12. Bc2 Qc7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. O-O a6 10. e4 c5 11. d5 c4 12. Bc2 Qc7',
    fullAnnotation: 'When White pushes 11. d5, Black traps White\'s light-squared bishop behind enemy lines with 11...c4! and develops the queen to c7, taking complete ownership of the queenside.',
    annotations: {
      15: "8... Bb7 — Fianchetto the bishop.",
      21: "11... c4! — Tactical Motif: Spatial Encirclement locking White's bishop on c2.",
      23: "12... Qc7 — Connect rooks with overwhelming queenside pressure."
    }
  },
  {
    id: 'slav-semi-punish-early-ne5-nxe5',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Semi-Slav – 5. Ne5?! Nbd7 6. f4 Bb4 / 12...Bd7 Iron Parity',
    shortName: 'Semi-Slav 5. Ne5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D43 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Ne5 Nbd7 6. f4 Bb4 7. Bd2 Bxc3 8. Bxc3 Ne4 9. g3 Nxe5 10. fxe5 O-O 11. Bg2 f5 12. O-O Bd7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Ne5 Nbd7 6. f4 Bb4 7. Bd2 Bxc3 8. Bxc3 Ne4 9. g3 Nxe5 10. fxe5 O-O 11. Bg2 f5 12. O-O Bd7',
    fullAnnotation: 'White plays the Stonewall-like 5. Ne5?! and 6. f4. Black pins the knight with 6...Bb4, plants the knight on e4, locks the kingside with 11...f5!, and develops 12...Bd7 with a solid, unassailable position.',
    annotations: {
      9: "5. Ne5?! — Premature knight hop.",
      11: "6... Bb4! — Pin and undermine c3.",
      15: "8... Ne4! — Dominant knight outpost.",
      21: "11... f5! — Lock the e4 outpost forever.",
      23: "12... Bd7 — Complete harmony."
    }
  },
  {
    id: 'slav-semi-punish-g4-unsound-assault',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Semi-Slav – 5. g4?! Nxg4 6. Rg1 Nf6 / 12...Qg6 Queen Dominance',
    shortName: 'Semi-Slav 5. g4?! Blunder Punished',
    category: 'Tactical Punishment',
    eco: 'D43 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. g4 Nxg4 6. Rg1 Nf6 7. Bg5 Nbd7 8. e4 dxe4 9. Nxe4 Qa5+ 10. Bd2 Qf5 11. Ng3 Qg4 12. h3 Qg6',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. g4 Nxg4 6. Rg1 Nf6 7. Bg5 Nbd7 8. e4 dxe4 9. Nxe4 Qa5+ 10. Bd2 Qf5 11. Ng3 Qg4 12. h3 Qg6',
    fullAnnotation: 'White lashes out with the reckless 5. g4?! pawn push. Black snacks on the pawn with 5...Nxg4, delivers check with 9...Qa5+, and maneuvers the queen to g6 with a clean extra pawn and exposed White king.',
    annotations: {
      9: "5... Nxg4! — Snatch the free flank pawn.",
      17: "9... Qa5+! — Check picking up key initiative.",
      19: "10... Qf5 — Target White's undefended e4 knight.",
      23: "12... Qg6 — Retain the extra pawn with safe king."
    }
  },
  {
    id: 'slav-semi-punish-early-qb3-c5-counter',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Semi-Slav – 5. Qb3 dxc4 6. Qxc4 b5 / 12...Nd7 Development Lead',
    shortName: 'Semi-Slav 5. Qb3 Punished',
    category: 'Tactical Punishment',
    eco: 'D43 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Qb3 dxc4 6. Qxc4 b5 7. Qd3 b4 8. Ne4 Ba6 9. Nxf6+ Qxf6 10. Qc2 Qg6 11. Qxg6 hxg6 12. Bf4 Nd7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Qb3 dxc4 6. Qxc4 b5 7. Qd3 b4 8. Ne4 Ba6 9. Nxf6+ Qxf6 10. Qc2 Qg6 11. Qxg6 hxg6 12. Bf4 Nd7',
    fullAnnotation: 'White loses time with 5. Qb3. Black kicks White\'s queen with 6...b5, develops the bishop with tempo 8...Ba6, trades queens with 10...Qg6, and mobilizes 12...Nd7 with huge development advantage.',
    annotations: {
      11: "6... b5! — Queen kicked with gain of tempo.",
      15: "8... Ba6! — Skewer the queen and develop.",
      19: "10... Qg6! — Force queen liquidation.",
      23: "12... Nd7 — Complete development."
    }
  },
  {
    id: 'slav-marshall-punish-e4-b5-gambit',
    courseId: 'slav-defense',
    subCourseId: 'slav-semi-meran-traps',
    name: 'Marshall Gambit – 4. e4 dxe4 5. Nxe4 Bb4+ / 12...Rd8 Discovered Pin',
    shortName: 'Marshall Gambit Refuted',
    category: 'Tactical Punishment',
    eco: 'D31 1. d4 d5 2. c4 c6 3. Nc3 e6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2 Qxd4 7. Bxb4 Qxe4+ 8. Be2 Na6 9. Ba5 b6 10. Bc3 Nf6 11. Nf3 Bb7 12. O-O Rd8',
    pgn: '1. d4 d5 2. c4 c6 3. Nc3 e6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2 Qxd4 7. Bxb4 Qxe4+ 8. Be2 Na6 9. Ba5 b6 10. Bc3 Nf6 11. Nf3 Bb7 12. O-O Rd8',
    fullAnnotation: 'White offers the Marshall Gambit with 4. e4. Black accepts with 4...dxe4 and 6...Qxd4!, parries White\'s cheap back-rank trick with 9...b6!, and seizes the d-file with 12...Rd8 holding an extra pawn and dominating center.',
    annotations: {
      9: "5... Bb4+! — Check exposing White's uncoordinated pieces.",
      11: "6... Qxd4! — Snatch the central pawn with double attack.",
      17: "9... b6! — Defend against White's cheap Qd8 mate threat.",
      23: "12... Rd8! — Tactical Motif: Skewer / File Domination kicking White's queen."
    }
  },

  // =========================================================================
  // SUBMODULE 3: Exchange Slav Oversights (3. cxd5 cxd5) - 13 Lines
  // =========================================================================
  {
    id: 'slav-exchange-anchor-symmetrical-mainline',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 / 12...Rfc8 Symmetry Broke',
    shortName: 'Exchange Slav Anchor',
    category: 'Anchor Mainline',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bd3 Bxd3 9. Qxd3 Bd6 10. Bxd6 Qxd6 11. O-O O-O 12. Rfc1 Rfc8',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bd3 Bxd3 9. Qxd3 Bd6 10. Bxd6 Qxd6 11. O-O O-O 12. Rfc1 Rfc8',
    fullAnnotation: 'The classical handling of the Exchange Slav: Black matches White\'s development piece for piece, exchanges both pairs of bishops to eliminate any attacking chances, and contests the c-file with 12...Rfc8.',
    annotations: {
      5: "3... cxd5 — Symmetrical recapture.",
      11: "6... Bf5 — Develop bishop before playing ...e6.",
      15: "8... Bxd3 — Eliminate White's dangerous bishop.",
      19: "10... Qxd6 — Recapture with central queen command.",
      23: "12... Rfc8 — Total equality on the open c-file."
    }
  },
  {
    id: 'slav-exchange-anchor-a6-preventive-mainline',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 6. Bf4 a6 7. e3 Bg4 / 12...Nd7 Minority Strangle',
    shortName: 'Exchange 6...a6 Mainline Anchor',
    category: 'Anchor Mainline',
    eco: 'D14 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 a6 7. e3 Bg4 8. Be2 e6 9. O-O Bd6 10. Bxd6 Qxd6 11. Rc1 O-O 12. Na4 Nd7',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 a6 7. e3 Bg4 8. Be2 e6 9. O-O Bd6 10. Bxd6 Qxd6 11. Rc1 O-O 12. Na4 Nd7',
    fullAnnotation: 'Black plays 6...a6 to permanently prevent Nb5 and Bb5 pins, pins White\'s knight with 7...Bg4, and clamps the b5 and c5 squares with 12...Nd7 denying White any queenside progress.',
    annotations: {
      11: "6... a6! — Prophylaxis against White's Bb5/Nb5 ideas.",
      13: "7... Bg4 — Active pin on the f3 knight.",
      23: "12... Nd7 — Iron control over c5."
    }
  },
  {
    id: 'slav-exchange-anchor-nh4-bg6-solid',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 8. Nh4 Bg6 9. Nxg6 hxg6 / 12...O-O Castled Harmony',
    shortName: 'Exchange 8. Nh4 Bg6 Anchor',
    category: 'Anchor Mainline',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Nh4 Bg6 9. Nxg6 hxg6 10. Bd3 Bd6 11. Bxd6 Qxd6 12. h3 O-O',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Nh4 Bg6 9. Nxg6 hxg6 10. Bd3 Bd6 11. Bxd6 Qxd6 12. h3 O-O',
    fullAnnotation: 'When White wastes moves hunting the bishop with 8. Nh4, Black opens the h-file with 9...hxg6, trades bishops on d6, and secures perfect king safety with 12...O-O.',
    annotations: {
      15: "8... Bg6 — Retreat to the safety pocket.",
      17: "9... hxg6! — Thematic open h-file.",
      23: "12... O-O — Solid position with zero weaknesses."
    }
  },
  {
    id: 'slav-exchange-punish-qb3-na5-counter',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 7. Qb3 Na5! 8. Qa4+ Bd7 / 12...e6 Queenside Trap',
    shortName: 'Exchange 7. Qb3?! Repelled',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qb3 Na5 8. Qa4+ Bd7 9. Bb5 Nc6 10. Nf3 a6 11. Bxc6 Bxc6 12. Qb3 e6',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qb3 Na5 8. Qa4+ Bd7 9. Bb5 Nc6 10. Nf3 a6 11. Bxc6 Bxc6 12. Qb3 e6',
    fullAnnotation: 'White tries the premature 7. Qb3 attacking b7. Black hits back with 7...Na5!, pushes White\'s queen around, wins the bishop pair with 11...Bxc6, and locks down the center with 12...e6.',
    annotations: {
      13: "7... Na5! — Tactical Motif: Counter-Attack hitting White's queen with tempo.",
      15: "8... Bd7 — Block check and force queen retreat.",
      21: "11... Bxc6 — Bishop dominates the long diagonal.",
      23: "12... e6 — Flawless harmonious setup."
    }
  },
  {
    id: 'slav-exchange-punish-ne5-nxe5-pin',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 7. Ne5 Qb6! 8. Nxc6 bxc6 / 12...c5 Central Blast',
    shortName: 'Exchange 7. Ne5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. Ne5 Qb6 8. Nxc6 bxc6 9. Qd2 e6 10. e3 Bb4 11. f3 O-O 12. Be2 c5',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. Ne5 Qb6 8. Nxc6 bxc6 9. Qd2 e6 10. e3 Bb4 11. f3 O-O 12. Be2 c5',
    fullAnnotation: 'White rushes with 7. Ne5. Black counters by attacking b2 and d4 with 7...Qb6!, pins the knight with 10...Bb4, castles safely, and detonates White\'s center with 12...c5! with a crushing initiative.',
    annotations: {
      13: "7... Qb6! — Double attack on b2 and d4.",
      19: "10... Bb4! — Lethal pin on c3.",
      23: "12... c5! — Tactical Motif: Central Rupture against White's passive setup."
    }
  },
  {
    id: 'slav-exchange-punish-early-bb5-bd7',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 7. Bb5 e6 8. Ne5 Rc8 / 12...bxc6 Queenside Bulwark',
    shortName: 'Exchange 7. Bb5?! Neutralized',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bb5 Rc8 9. Ne5 Qb6 10. Qa4 Be7 11. O-O O-O 12. Bxc6 bxc6',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bb5 Rc8 9. Ne5 Qb6 10. Qa4 Be7 11. O-O O-O 12. Bxc6 bxc6',
    fullAnnotation: 'White attempts a pin with 8. Bb5 and 9. Ne5. Black defends calmly with 8...Rc8 and 9...Qb6!, castles, and captures 12...bxc6 with a rock-solid pawn structure and the bishop pair.',
    annotations: {
      15: "8... Rc8 — Solid defense of the c6 knight.",
      17: "9... Qb6 — Counter-attack against b2.",
      23: "12... bxc6 — Clean pawn structure and strong central presence."
    }
  },
  {
    id: 'slav-exchange-punish-rc1-rc8-c-file',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 8. Rc1 Bd6 9. Bxd6 Qxd6 / 12...a6 C-File Parity',
    shortName: 'Exchange 8. Rc1 C-File Contested',
    category: 'Tactical Punishment',
    eco: 'D14 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Nf3 e6 8. Rc1 Bd6 9. Bxd6 Qxd6 10. Be2 O-O 11. O-O Rfc8 12. a3 a6',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Nf3 e6 8. Rc1 Bd6 9. Bxd6 Qxd6 10. Be2 O-O 11. O-O Rfc8 12. a3 a6',
    fullAnnotation: 'White tries to seize the c-file with 8. Rc1. Black trades bishops with 8...Bd6 and 9...Qxd6, castles, and matches White on the c-file with 11...Rfc8 and 12...a6 neutralizing all threats.',
    annotations: {
      15: "8... Bd6 — Challenge White's dark-squared bishop.",
      21: "11... Rfc8 — Control the c-file.",
      23: "12... a6 — Restrict White's knight from invading b5."
    }
  },
  {
    id: 'slav-exchange-punish-premature-h3-e5',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – Passive 7. h3?! e6 8. e3 Bd6 / 12...Rfc8 Free Play',
    shortName: 'Exchange 7. h3?! Punished',
    category: 'Tactical Punishment',
    eco: 'D14 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. h3 e6 8. e3 Bd6 9. Bxd6 Qxd6 10. Bd3 Bxd3 11. Qxd3 O-O 12. O-O Rfc8',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. h3 e6 8. e3 Bd6 9. Bxd6 Qxd6 10. Bd3 Bxd3 11. Qxd3 O-O 12. O-O Rfc8',
    fullAnnotation: 'White wastes time with 7. h3?!. Black completes development with speed, exchanges both sets of bishops, and seizes the open c-file with 12...Rfc8 with easy equality.',
    annotations: {
      12: "Inaccuracy: 7. h3?! is a passive tempo loss in a symmetrical structure.",
      19: "10... Bxd3 — Liquidate into a flawless middlegame.",
      23: "12... Rfc8 — Control the open c-file."
    }
  },
  {
    id: 'slav-exchange-punish-bg5-ne4-trade',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 6. Bg5 Ne4! 7. Bf4 Nxc3 / 12...Bd7 Bishop Pair',
    shortName: 'Exchange 6. Bg5?! Punished',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bg5 Ne4 7. Bf4 Nxc3 8. bxc3 e6 9. e3 Bd6 10. Bxd6 Qxd6 11. Bd3 O-O 12. O-O Bd7',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bg5 Ne4 7. Bf4 Nxc3 8. bxc3 e6 9. e3 Bd6 10. Bxd6 Qxd6 11. Bd3 O-O 12. O-O Bd7',
    fullAnnotation: 'White plays 6. Bg5 hoping for a cheap pin. Black punishes White with 6...Ne4!, ruins White\'s queenside pawns with 7...Nxc3!, and develops 12...Bd7 with a winning queenside endgame structure.',
    annotations: {
      11: "6... Ne4! — Tactical Motif: Fork and outpost hitting Bg5 and Nc3.",
      13: "7... Nxc3! — Create weak doubled c-pawns for White.",
      23: "12... Bd7 — Black targets White's backward c-pawns."
    }
  },
  {
    id: 'slav-exchange-punish-f3-e5-central-smash',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – Dubious 7. f3?! Bf5 8. Bd3 / 12...Rc8 Dominant File',
    shortName: 'Exchange 7. f3?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D14 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 a6 7. f3 Bf5 8. Bd3 Bxd3 9. Qxd3 e6 10. Nge2 Be7 11. O-O O-O 12. Rad1 Rc8',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 a6 7. f3 Bf5 8. Bd3 Bxd3 9. Qxd3 e6 10. Nge2 Be7 11. O-O O-O 12. Rad1 Rc8',
    fullAnnotation: 'White weakens the kingside with 7. f3?!. Black develops smoothly with 7...Bf5, trades bishops on d3, and seizes the c-file with 12...Rc8 while White\'s king is weakened.',
    annotations: {
      12: "Mistake: 7. f3?! weakens White's e3 pawn and light squares.",
      17: "9... e6 — Solid central wall.",
      23: "12... Rc8 — Dominate the open c-file."
    }
  },
  {
    id: 'slav-exchange-punish-na4-nc4-domination',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 8. Bb5 Nd7 9. O-O Be7 / 12...Rxc6 Queenside Domination',
    shortName: 'Exchange 8...Nd7 Lockdown',
    category: 'Tactical Punishment',
    eco: 'D14 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bb5 Nd7 9. O-O Be7 10. Rc1 O-O 11. Na4 Rc8 12. Bxc6 Rxc6',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Bb5 Nd7 9. O-O Be7 10. Rc1 O-O 11. Na4 Rc8 12. Bxc6 Rxc6',
    fullAnnotation: 'White tries 8. Bb5 and 11. Na4 targeting c5. Black parries with 8...Nd7!, develops smoothly, and recaptures on c6 with the rook (12...Rxc6) retaining full control of the c-file.',
    annotations: {
      15: "8... Nd7! — Parries White's Ne5 threats immediately.",
      21: "11... Rc8 — Contest the c-file.",
      23: "12... Rxc6 — Active rook controlling the open file."
    }
  },
  {
    id: 'slav-exchange-punish-greedy-qxb7-rb8',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – Greedy 11. Nb5?! Rc8 12. Nxa7 Rc4 / Decisive Counter',
    shortName: 'Exchange Poisoned Pawn Refuted',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qb3 Na5 8. Bb5+ Bd7 9. Qa4 e6 10. Bxd7+ Nxd7 11. Nb5 Rc8 12. Nxa7 Rc4',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qb3 Na5 8. Bb5+ Bd7 9. Qa4 e6 10. Bxd7+ Nxd7 11. Nb5 Rc8 12. Nxa7 Rc4',
    fullAnnotation: 'White grabs flank pawns with 11. Nb5 and 12. Nxa7. Black cuts off White\'s queen with 12...Rc4!, trapping White\'s greedy forces and creating an irresistible attack.',
    annotations: {
      13: "7... Na5! — Hit White's queen.",
      21: "11... Rc8 — Seize the open c-file.",
      23: "12... Rc4! — Tactical Motif: Trapping the Queen while dominating the board."
    }
  },
  {
    id: 'slav-exchange-punish-qa4-a6-parry',
    courseId: 'slav-defense',
    subCourseId: 'slav-exchange-oversights',
    name: 'Exchange Slav – 7. Qa4 e6 8. Nf3 Nd7 / 12...Rc8 Smooth Equality',
    shortName: 'Exchange 7. Qa4?! Neutralized',
    category: 'Tactical Punishment',
    eco: 'D13 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qa4 e6 8. Nf3 Nd7 9. Be2 Be7 10. O-O O-O 11. Rfc1 a6 12. Qd1 Rc8',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Qa4 e6 8. Nf3 Nd7 9. Be2 Be7 10. O-O O-O 11. Rfc1 a6 12. Qd1 Rc8',
    fullAnnotation: 'White plays 7. Qa4 looking for pins. Black blunts it with 7...e6 and 8...Nd7, forces White\'s queen to retreat with 11...a6 and 12. Qd1, and claims the c-file with 12...Rc8.',
    annotations: {
      13: "7... e6 — Solid defense.",
      15: "8... Nd7 — Break the pin on c6.",
      21: "11... a6 — Restrict White's pieces.",
      23: "12... Rc8 — Total equality on the open file."
    }
  },

  // =========================================================================
  // SUBMODULE 4: Gambit Refutations & Chameleon 4...a6 (13 Lines)
  // =========================================================================
  {
    id: 'slav-chameleon-anchor-chebanenko-setup',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Chebanenko Slav – 4...a6 5. e3 b5 6. b3 Bg4 / 12...Re8 Mainline Anchor',
    shortName: 'Chebanenko 4...a6 Anchor',
    category: 'Anchor Mainline',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 b5 6. b3 Bg4 7. Be2 e6 8. O-O Nbd7 9. Bb2 Bd6 10. h3 Bh5 11. Rc1 O-O 12. Re1 Re8',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 b5 6. b3 Bg4 7. Be2 e6 8. O-O Nbd7 9. Bb2 Bd6 10. h3 Bh5 11. Rc1 O-O 12. Re1 Re8',
    fullAnnotation: 'The Chebanenko Chameleon Slav: 4...a6 prepares queenside expansion with ...b5 without commiting the center. Black pins White with 6...Bg4, develops flexibly, and commands the center with 12...Re8.',
    annotations: {
      7: "4... a6 — The flexible Chameleon move.",
      9: "5... b5! — Seize queenside space.",
      11: "6... Bg4 — Pin White's knight.",
      23: "12... Re8 — Harmonious central tension."
    }
  },
  {
    id: 'slav-geller-gambit-anchor-acceptance',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Geller Gambit – 5. e4 b5 6. e5 Nd5 / 12...Be7 Extra Pawn Anchor',
    shortName: 'Geller Gambit Anchor',
    category: 'Anchor Mainline',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7 11. Qh5 g6 12. Qg4 Be7',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7 11. Qh5 g6 12. Qg4 Be7',
    fullAnnotation: 'Efim Geller\'s ambitious gambit 5. e4. Black takes the pawn, defends with 5...b5!, blockades on d5, places the bishop on the long diagonal 10...Bb7, and neutralizes White with 12...Be7 retaining the extra pawn.',
    annotations: {
      7: "4... dxc4 — Accept the pawn.",
      9: "5... b5! — Protect the gambit pawn.",
      19: "10... Bb7 — Control the long diagonal.",
      23: "12... Be7 — Solidify the kingside holding the extra pawn."
    }
  },
  {
    id: 'slav-winawer-punish-exd5-cxd5-win',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Winawer Counter-Gambit – 3. Nc3 e5! 4. dxe5 d4 / 12...Be7 Domination',
    shortName: 'Winawer Counter-Gambit Punished',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. Nc3 e5 4. dxe5 d4 5. Ne4 Qa5+ 6. Bd2 Qxe5 7. Ng3 Nf6 8. Nf3 Qd6 9. Qc2 c5 10. e3 Nc6 11. exd4 cxd4 12. Bd3 Be7',
    pgn: '1. d4 d5 2. c4 c6 3. Nc3 e5 4. dxe5 d4 5. Ne4 Qa5+ 6. Bd2 Qxe5 7. Ng3 Nf6 8. Nf3 Qd6 9. Qc2 c5 10. e3 Nc6 11. exd4 cxd4 12. Bd3 Be7',
    fullAnnotation: 'Black unleashes the Winawer Counter-Gambit 3...e5!. After 4. dxe5 d4!, White\'s knight is kicked, Black recovers the pawn with 6...Qxe5, creates a dangerous passed d4 pawn, and achieves a commanding position.',
    annotations: {
      5: "3... e5! — Tactical Motif: Immediate Center Counter-Gambit.",
      7: "4... d4! — Wedge pawn dislodging White's knight.",
      11: "6... Qxe5 — Central queen dominance.",
      23: "12... Be7 — Safe development with superior central pawn."
    }
  },
  {
    id: 'slav-chameleon-punish-cxd5-axb5',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Chebanenko – 5. c5 Bf5 6. Bf4 Nbd7 / 12...Bf6 Dark Square Supremacy',
    shortName: 'Chebanenko 5. c5 Lock Refuted',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. c5 Bf5 6. Bf4 Nbd7 7. e3 e6 8. Be2 Be7 9. O-O O-O 10. h3 Ne4 11. Nxe4 Bxe4 12. b4 Bf6',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. c5 Bf5 6. Bf4 Nbd7 7. e3 e6 8. Be2 Be7 9. O-O O-O 10. h3 Ne4 11. Nxe4 Bxe4 12. b4 Bf6',
    fullAnnotation: 'White prematurely locks the queenside with 5. c5. Black develops the bishop to f5, plants the knight on e4, and plays 12...Bf6! preparing the thematic ...e5 central breakthrough.',
    annotations: {
      9: "5. c5 — White surrenders central pressure.",
      11: "5... Bf5 — Active bishop outside the chain.",
      19: "10... Ne4 — Dominant knight outpost.",
      23: "12... Bf6! — Prepare ...e5 breaking open White's center."
    }
  },
  {
    id: 'slav-chameleon-punish-ne5-nxe5-bishop-pair',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Chebanenko – 5. e3 b5 6. cxd5 cxd5 7. Ne5 e6 / 12...Ne4 Counter-Blow',
    shortName: 'Chebanenko 7. Ne5?! Punished',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 b5 6. cxd5 cxd5 7. Ne5 e6 8. Bd3 Bb7 9. O-O Be7 10. f4 O-O 11. Bd2 Nbd7 12. Be1 Ne4',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 b5 6. cxd5 cxd5 7. Ne5 e6 8. Bd3 Bb7 9. O-O Be7 10. f4 O-O 11. Bd2 Nbd7 12. Be1 Ne4',
    fullAnnotation: 'White tries to establish a Stonewall knight on e5. Black castles comfortably, coordinates with 8...Bb7 and 11...Nbd7, and plants their own monster knight on 12...Ne4 with total equality and attacking chances.',
    annotations: {
      15: "8... Bb7 — Long diagonal fortress.",
      19: "10... O-O — Complete king safety.",
      23: "12... Ne4! — Tactical Motif: Equalizing Central Outpost."
    }
  },
  {
    id: 'slav-deviations-punish-3-e3-bf5',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 3. e3 – Passive Setup Refuted / 12...Nd7 Queenside Clamp',
    shortName: 'Slav 3. e3?! Passive Refutation',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. e3 Nf6 4. Nc3 Bf5 5. cxd5 cxd5 6. Qb3 Bc8 7. Nf3 e6 8. Bd3 Nc6 9. O-O Be7 10. Bd2 O-O 11. Rfc1 a6 12. Na4 Nd7',
    pgn: '1. d4 d5 2. c4 c6 3. e3 Nf6 4. Nc3 Bf5 5. cxd5 cxd5 6. Qb3 Bc8 7. Nf3 e6 8. Bd3 Nc6 9. O-O Be7 10. Bd2 O-O 11. Rfc1 a6 12. Na4 Nd7',
    fullAnnotation: 'White plays the meek 3. e3, locking in the dark-squared bishop. Black develops 4...Bf5, retreats calmly when attacked, and establishes complete queenside control with 11...a6 and 12...Nd7.',
    annotations: {
      5: "3. e3 — Passive move blocking White's c1 bishop.",
      7: "4... Bf5 — Black's bishop escapes outside the pawn chain.",
      23: "12... Nd7 — Iron clamp on c5."
    }
  },
  {
    id: 'slav-deviations-punish-3-nc3-dxc4',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 3. Nc3 dxc4 4. e3 b5 / 12...c5 Central Liquidation',
    shortName: 'Slav 3. Nc3 dxc4! Punished',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. Nc3 dxc4 4. e3 b5 5. a4 b4 6. Na2 Nf6 7. Bxc4 e6 8. Nf3 Be7 9. O-O O-O 10. Bd2 a5 11. Nc1 Nbd7 12. Nb3 c5',
    pgn: '1. d4 d5 2. c4 c6 3. Nc3 dxc4 4. e3 b5 5. a4 b4 6. Na2 Nf6 7. Bxc4 e6 8. Nf3 Be7 9. O-O O-O 10. Bd2 a5 11. Nc1 Nbd7 12. Nb3 c5',
    fullAnnotation: 'White plays 3. Nc3 without Nf3. Black grabs the c4 pawn, expands with 4...b5 and 5...b4!, defends with 10...a5, and explodes the center with 12...c5 seizing total initiative.',
    annotations: {
      7: "4... b5 — Defend the c4 pawn.",
      9: "5... b4! — Evict White's knight.",
      21: "11... Nbd7 — Harmonious development.",
      23: "12... c5! — Tactical Motif: Queenside Break opening the center."
    }
  },
  {
    id: 'slav-deviations-punish-4-qb3-dxc4',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 4. Qb3?! – Premature Queen Attack / 12...axb6 Open A-File',
    shortName: 'Slav 4. Qb3?! Queen Trade',
    category: 'Tactical Punishment',
    eco: 'D11 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Qb3 dxc4 5. Qxc4 Bf5 6. g3 e6 7. Bg2 Nbd7 8. O-O Be7 9. Nc3 O-O 10. Re1 Ne4 11. Qb3 Qb6 12. Qxb6 axb6',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Qb3 dxc4 5. Qxc4 Bf5 6. g3 e6 7. Bg2 Nbd7 8. O-O Be7 9. Nc3 O-O 10. Re1 Ne4 11. Qb3 Qb6 12. Qxb6 axb6',
    fullAnnotation: 'White tries 4. Qb3?! to stop ...Bf5. Black takes on c4 with tempo, plays 5...Bf5 anyway, forces a queen trade with 11...Qb6, and opens the a-file with 12...axb6 holding a superior endgame.',
    annotations: {
      8: "Inaccuracy: 4. Qb3?! wastes queen moves in the opening.",
      9: "4... dxc4 — Snatch tempo.",
      11: "5... Bf5 — Develop the bishop unhindered.",
      23: "12... axb6 — Open a-file for the rook with effortless equality."
    }
  },
  {
    id: 'slav-deviations-punish-3-f3-e5-counter',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 3. f3?! e5! – Central Counter-Strike / 12...Ke7 King Activation',
    shortName: 'Slav 3. f3?! Refuted',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. f3 e5 4. dxe5 Qh4+ 5. g3 Qxc4 6. e4 Bb4+ 7. Bd2 Qd4 8. Bxb4 Qxb4+ 9. Qd2 Qxd2+ 10. Nxd2 dxe4 11. Nxe4 Be6 12. Nd6+ Ke7',
    pgn: '1. d4 d5 2. c4 c6 3. f3 e5 4. dxe5 Qh4+ 5. g3 Qxc4 6. e4 Bb4+ 7. Bd2 Qd4 8. Bxb4 Qxb4+ 9. Qd2 Qxd2+ 10. Nxd2 dxe4 11. Nxe4 Be6 12. Nd6+ Ke7',
    fullAnnotation: 'White plays 3. f3?! attempting to build a pawn center. Black detonates the center with 3...e5!, forks king and c4 pawn with 4...Qh4+!, forces queen trades, and activates the king with 12...Ke7 with a winning endgame.',
    annotations: {
      5: "Blunder: 3. f3?! weakens the e1-h4 diagonal fatally.",
      7: "3... e5! — Tactical Motif: Central Counter-Strike.",
      9: "4... Qh4+! — Check picking off the c4 pawn.",
      23: "12... Ke7 — King participates actively in the winning endgame."
    }
  },
  {
    id: 'slav-deviations-punish-3-bf4-dxc4',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 3. Bf4?! – Early Bishop Deviations / 12...Bb4 Skewer Win',
    shortName: 'Slav 3. Bf4?! Punished',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. Bf4 dxc4 4. e3 Be6 5. Nf3 Nf6 6. Nc3 g6 7. Ng5 Bd5 8. e4 h6 9. exd5 hxg5 10. Bxg5 cxd5 11. Bxf6 exf6 12. Qf3 Bb4',
    pgn: '1. d4 d5 2. c4 c6 3. Bf4 dxc4 4. e3 Be6 5. Nf3 Nf6 6. Nc3 g6 7. Ng5 Bd5 8. e4 h6 9. exd5 hxg5 10. Bxg5 cxd5 11. Bxf6 exf6 12. Qf3 Bb4',
    fullAnnotation: 'White plays the inaccurate 3. Bf4?!. Black grabs the c4 pawn, defends with 4...Be6, kicks the knight with 8...h6!, and pins the knight with 12...Bb4 maintaining the extra pawn.',
    annotations: {
      7: "3... dxc4 — Grab the pawn.",
      9: "4... Be6 — Solid defense of the c4 pawn.",
      17: "8... h6! — Repel White's aggressive knight.",
      23: "12... Bb4! — Tactical Motif: Pin on c3 knight safeguarding d5."
    }
  },
  {
    id: 'slav-deviations-punish-early-g4-unsound',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 4. g4?! – Unsound Flank Thrust / 12...O-O Clean Superiority',
    shortName: 'Slav 4. g4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'D15 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. g4 Bxg4 5. Ne5 Bf5 6. cxd5 cxd5 7. Nc3 Nc6 8. e3 e6 9. Bb5 Rc8 10. Qa4 Qb6 11. Bd2 Bd6 12. f4 O-O',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. g4 Bxg4 5. Ne5 Bf5 6. cxd5 cxd5 7. Nc3 Nc6 8. e3 e6 9. Bb5 Rc8 10. Qa4 Qb6 11. Bd2 Bd6 12. f4 O-O',
    fullAnnotation: 'White blunders with 4. g4?!. Black simply takes the pawn with 4...Bxg4, develops with 6...cxd5 and 7...Nc6, reinforces c6 with 9...Rc8 and 10...Qb6, and castles with 12...O-O holding a decisive pawn advantage.',
    annotations: {
      7: "Blunder: 4. g4?! simply gives away a pawn for zero compensation.",
      8: "4... Bxg4! — Free pawn.",
      21: "10... Qb6 — Counter-pressure on b2 and d4.",
      23: "12... O-O — Complete development with pawn up."
    }
  },
  {
    id: 'slav-deviations-punish-3-cd5-cd5-4-bg5',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 4. Bg5?! – Dubious Pin Refuted / 12...Nf5 Dark Square Hunt',
    shortName: 'Slav 4. Bg5?! Punished',
    category: 'Tactical Punishment',
    eco: 'D10 1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Bg5 Nc6 5. Nc3 h6 6. Bh4 g5 7. Bg3 Bg7 8. e3 Bf5 9. Bd3 Bxd3 10. Qxd3 e6 11. Nge2 Nge7 12. O-O Nf5',
    pgn: '1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Bg5 Nc6 5. Nc3 h6 6. Bh4 g5 7. Bg3 Bg7 8. e3 Bf5 9. Bd3 Bxd3 10. Qxd3 e6 11. Nge2 Nge7 12. O-O Nf5',
    fullAnnotation: 'White plays 4. Bg5?! prematurely in the exchange structure. Black kicks the bishop with 5...h6 and 6...g5!, develops the pieces harmoniously, and hunts down the g3 bishop with 12...Nf5.',
    annotations: {
      11: "5... h6 — Force bishop back.",
      13: "6... g5! — Repel the bishop.",
      19: "9... Bxd3 — Trade bishops.",
      23: "12... Nf5! — Target White's isolated bishop on g3."
    }
  },
  {
    id: 'slav-deviations-punish-4-e3-b5-counter',
    courseId: 'slav-defense',
    subCourseId: 'slav-gambit-refutations',
    name: 'Slav 4. e3 a6 5. Bd3 Bg4 / 12...dxe4 Central Demolition',
    shortName: 'Slav 5. Bd3 Pin Exploitation',
    category: 'Tactical Punishment',
    eco: 'D11 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 a6 5. Bd3 Bg4 6. Nbd2 e6 7. Qc2 Nbd7 8. b3 Bd6 9. Bb2 Bh5 10. O-O Bg6 11. Bxg6 hxg6 12. e4 dxe4',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 a6 5. Bd3 Bg4 6. Nbd2 e6 7. Qc2 Nbd7 8. b3 Bd6 9. Bb2 Bh5 10. O-O Bg6 11. Bxg6 hxg6 12. e4 dxe4',
    fullAnnotation: 'White plays 4. e3 and 5. Bd3. Black pins the knight with 5...Bg4, opens the h-file with 11...hxg6, and neutralizes White\'s central break with 12...dxe4 with an active, harmonious position.',
    annotations: {
      9: "5... Bg4 — Thematic pin on the f3 knight.",
      21: "11... hxg6! — Open the h-file for the black rook.",
      23: "12... dxe4 — Liquidate White's center into complete equality."
    }
  }
];

console.log(`Total Slav Defense lines to compile: ${slavRaw.length}`);
const processed = slavRaw.map(buildBlackLine);

const outPath = 'src/data/lines/slav-defense.js';
const code = `// Slav Defense Repertoire (1. d4 d5 2. c4 c6)
// Autogenerated and validated for Modena Lines. Strictly Black perspective.

export const slavDefenseLines = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync(outPath, code, 'utf-8');
console.log(`Successfully written ${outPath} (${processed.length} lines)`);
