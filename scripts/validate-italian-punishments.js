import { Chess } from 'chess.js';

export const allPunishmentDefinitions = [
  // ============================================================
  // ITALIAN GAME (13 lines across 4 submodules)
  // ============================================================
  // Giuoco Piano (3 lines)
  {
    id: 'italian-punish-d6-pin',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Early ...d6 Pin Blunder (5...Nxe5??)',
    shortName: 'Lucchini Pin Blunder',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5 Bxd1 7. Bxf7+ Ke7 8. Bg5+ Nf6 9. Nc3 dxe5 10. Rxd1',
    fullAnnotation: 'Black copies Legal\'s Mate blunder with 5...Nxe5??, walking into White\'s famous queen-sacrifice refutation.',
    previewFEN: 'r2q1b1r/ppp1kBpp/5n2/4p1B1/4P3/2N5/PPP2PPP/3RK2R b K - 0 10',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop targeting f7.",
      6: "4. d4 — Direct strike at Black's center.", 8: "5. dxe5 — Opening d-file lines.",
      10: "6. Nxe5! — Tactical Punishment: Queen sacrifice! Black's king will be fatally smoked out.",
      12: "7. Bxf7+ — King forced to e7 into a lethal pin.", 14: "8. Bg5+ — Crucial pin on the f6 knight.",
      16: "9. Nc3! — Threatening Nd5+ with total devastation.", 18: "10. Rxd1 — White regains queen with +8.0 material and positional crush."
    }
  },
  {
    id: 'italian-punish-giuoco-greed',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Central Pawn Greed Refutation (7...Nxe4?)',
    shortName: 'Central Greed Punished',
    category: 'King Hunt',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Ke6 12. Qxb4 c5 13. Qa3',
    fullAnnotation: 'Black greedily captures the e4 pawn, neglecting king safety. White uncorks 9. Bxf7+! dragging Black\'s king into the center.',
    previewFEN: 'r1bq3r/pp4pp/4k3/2ppN3/3Pn3/Q7/PP3PPP/RN2K2R b KQ - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. c3 — Prepare central d4 pawn roller.",
      8: "5. d4 — Center break.", 10: "6. cxd4 — Establish classical pawn duo.", 12: "7. Bd2 — Neutralize check.",
      14: "8. Bxb4 — Eliminate dark-square bishop.", 16: "9. Bxf7+! — Tactical Punishment: Shatter king shelter.",
      18: "10. Qb3+ — Fork king and b4 knight.", 20: "11. Ne5+ — Central outpost check.", 22: "12. Qxb4 — Regain piece.",
      24: "13. Qa3 — Dominating Black's stranded king."
    }
  },
  {
    id: 'italian-punish-scholar-queen',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Premature 4...Qf6? Scholar Queen Punished',
    shortName: 'Early ...Qf6 Punished',
    category: 'Development Punishment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6 5. d4 exd4 6. O-O dxc3 7. e5 Qg6 8. Nxc3 Nge7 9. Nd5 Nxd5 10. Bxd5 Be7 11. Re1 O-O 12. Be4 Qh5 13. Bf4',
    fullAnnotation: 'Black brings out the queen prematurely on f6. White accelerates development with e5 and Nd5, driving Black\'s queen into passivity.',
    previewFEN: 'r1b2rk1/ppppbppp/2n5/4P2q/4BB2/5N2/PP3PPP/R2QR1K1 b - - 6 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. c3 — Central preparation.",
      8: "5. d4 — Punish premature queen by blowing open the center.", 10: "6. O-O — Castle with huge development lead.",
      12: "7. e5! — Kick Black's queen.", 14: "8. Nxc3 — Rapid knight development.", 16: "9. Nd5! — Dominate c7 and e7.",
      18: "10. Bxd5 — Maintain central clamping bishop.", 20: "11. Re1 — Seize the e-file.", 22: "12. Be4 — Chase queen again.",
      24: "13. Bf4 — Total central domination."
    }
  },

  // Evans Gambit (3 lines)
  {
    id: 'italian-punish-evans-greed',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Greedy 7...dxc3? Pawn Grabbing Punished',
    shortName: 'Evans Greed Refuted',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Nd5 Re8 13. Nf4 Qf5 14. Ng5 Nxe5 15. Bxe7 Rxe7 16. Bxf7+ Kh8 17. Ngh3',
    fullAnnotation: 'Black gobbles three pawns in the Evans Gambit while ignoring king safety. White develops overwhelming firepower on the f7 square.',
    previewFEN: 'r1b4k/pppprBpp/8/b3nq2/5N2/1Q5N/P4PPP/R4RK1 b - - 2 17',
    annotations: {
      0: "1. e4 — Open game.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4! — The Evans Gambit.",
      8: "5. c3 — Gain tempo on bishop.", 10: "6. d4 — Blast open the center.", 12: "7. O-O — Safeguard king.",
      14: "8. Qb3 — Thematic f7 battery.", 16: "9. e5! — Disrupt queen.", 18: "10. Nxc3 — Bring last piece into battle.",
      20: "11. Ba3 — Control long diagonal.", 22: "12. Nd5 — Pile up on e7.", 24: "13. Nf4 — Harass queen.",
      26: "14. Ng5! — Triple attack on f7.", 28: "15. Bxe7 — Win the exchange.", 30: "16. Bxf7+ — Decisive blow.",
      32: "17. Ngh3 — Completely winning position."
    }
  },
  {
    id: 'italian-punish-evans-declined',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Passive 4...Bb6 Declined Punished',
    shortName: 'Evans Declined Punished',
    category: 'Space Advantage',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3 Nf6 7. Nd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3 Nf6 7. Nd5 Nxd5 8. exd5 Ne7 9. Nxe5 d6 10. Nf3 O-O 11. O-O Bg4 12. h3 Bh5 13. d4',
    fullAnnotation: 'Declining the Evans Gambit with 4...Bb6 allows White to seize immense queenside and central space with a4 and Nd5.',
    previewFEN: 'r2q1rk1/1pp1nppp/pb1p4/3P3b/PPBP4/5N1P/2P2PP1/R1BQ1RK1 b - d3 0 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4 — Evans Gambit.",
      8: "5. a4 — Threaten a5 trap.", 10: "6. Nc3 — Rapid deployment.", 12: "7. Nd5! — Outpost on d5.",
      14: "8. exd5 — Dislodge c6 knight.", 16: "9. Nxe5 — Cash in extra central pawn.", 18: "10. Nf3 — Consolidate knight.",
      20: "11. O-O — Castle safely.", 22: "12. h3 — Question bishop.", 24: "13. d4 — Unstoppable central wedge."
    }
  },
  {
    id: 'italian-punish-evans-counter-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Unsound 4...d5? Counter-Gambit Punished',
    shortName: 'Evans 4...d5? Refuted',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5 5. exd5 e4 6. dxc6 exf3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5 5. exd5 e4 6. dxc6 exf3 7. Qxf3 Qe7+ 8. Kd1 Qf6 9. Re1+ Ne7 10. Qxf6 gxf6 11. bxc5 bxc6 12. Bb2',
    fullAnnotation: 'Black counters 4. b4 with premature 4...d5?. White captures with exd5 and dismantles Black\'s kingside with Qxf3 and Re1+.',
    previewFEN: 'r1b1k2r/p1p1np1p/2p2p2/2P5/2B5/8/PBPP1PPP/RN1KR3 b kq - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.", 6: "4. b4 — Evans Gambit.",
      8: "5. exd5 — Pocket central pawn.", 10: "6. dxc6! — Exploit Black's loose pieces.", 12: "7. Qxf3 — Threaten mate on f7.",
      14: "8. Kd1 — Step out of check.", 16: "9. Re1+ — Deadly pin on e7.", 18: "10. Qxf6 — Ruin Black pawn structure.",
      20: "11. bxc5 — Pocket another pawn.", 22: "12. Bb2 — Decisive piece up with dominant bishops."
    }
  },

  // Two Knights Defense (4 lines)
  {
    id: 'italian-punish-blackburne',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Blackburne Shilling Gambit Refutation',
    shortName: 'Blackburne Shilling Refuted',
    category: 'Trap Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Bxf7+ Ke7 6. O-O Qxe5 7. Bxg8',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Bxf7+ Ke7 6. O-O Qxe5 7. Bxg8 Rxg8 8. c3 Nc6 9. d4 Qb5 10. d5 Ne5 11. Qh5 d6 12. Bg5+ Kd7 13. Qxh7',
    fullAnnotation: 'Black plays the tricky 3...Nd4? trap. White accurately refutes it with 5. Bxf7+! and 8. c3!, winning Black\'s corner rook.',
    previewFEN: 'r1b2br1/pppk2pQ/3p4/1q1Pn1B1/4P3/2P5/PP3PPP/RN3RK1 b - - 0 13',
    annotations: {
      0: "1. e4 — Open game.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Nxe5! — Punish Nd4 blunder.", 8: "5. Bxf7+! — Accurate check; do not fall for 5. Nxf7?",
      10: "6. O-O! — Defend g2 pawn securely.", 12: "7. Bxg8 — Eliminate Black's defender.",
      14: "8. c3! — Kick Nd4 knight.", 16: "9. d4 — Build unstoppable classical pawn center.",
      18: "10. d5 — Restrict knight.", 20: "11. Qh5 — Double attack on e5 and h7.",
      22: "12. Bg5+ — Drive king to d7.", 24: "13. Qxh7 — Traps and wins the g8 rook!"
    }
  },
  {
    id: 'italian-punish-traxler',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Traxler Counter-Attack Refutation (5. Bxf7+!)',
    shortName: 'Traxler Refutation',
    category: 'Tactical Neutralization',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bb3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bb3 Rf8 7. d3 d6 8. Be3 h6 9. Nf3 Bxe3 10. fxe3 Qe8 11. Nc3 Qg6 12. Qe2 Bg4 13. O-O-O',
    fullAnnotation: 'Black plays the wild Traxler Counter-Attack 4...Bc5. White cleanly defuses it with 5. Bxf7+! and castles queenside with a healthy extra pawn.',
    previewFEN: 'r4r2/ppp1k1p1/2np1nqp/4p3/4P1b1/1BNPPN2/PPP1Q1PP/2KR3R b - - 6 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Two Knights setup.", 6: "4. Ng5 — Attack f7.",
      8: "5. Bxf7+! — Correct capture: keep the bishop and avoid 5. Nxf7 Bxf2+! chaos.", 10: "6. Bb3 — Retreat bishop safely.",
      12: "7. d3 — Bolster center.", 14: "8. Be3 — Neutralize Bc5.", 16: "9. Nf3 — Safe knight repositioning.",
      18: "10. fxe3 — Solid pawn structure.", 20: "11. Nc3 — Develop queenside knight.", 22: "12. Qe2 — Prepare castling.",
      24: "13. O-O-O — King in 100% safety; White is up a clean pawn with total control."
    }
  },
  {
    id: 'italian-punish-fried-liver-ncb4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver Greedy 8...Ncb4? Punished',
    shortName: 'Fried Liver 8...Ncb4 Refuted',
    category: 'King Hunt',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. a3 Nxc2+ 10. Kd1 Nxa1 11. Nxd5 Kd6 12. d4 c6 13. dxe5+ Kd7 14. Qf7+ Be7 15. e6+ Kd6 16. Bf4+ Kc5 17. Be3+ Kd6 18. Qf4+ Kxe6 19. Qe4+ Kd7 20. Ke2',
    fullAnnotation: 'In the Fried Liver, Black greedily hunts the c2 pawn with 8...Ncb4?. White ignores the corner rook and delivers a fatal king hunt.',
    previewFEN: 'r1bq3r/pp1kb1pp/2p5/3N4/2B1Q3/4B3/PPP1KPPP/n6R b - - 2 20',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.", 6: "4. Ng5 — Attack f7.",
      8: "5. exd5 — Open d-file.", 10: "6. Nxf7!! — The Fried Liver sacrifice!", 12: "7. Qf3+ — Force king out.",
      14: "8. Nc3 — Pile pressure on d5.", 16: "9. a3! — Kick Nc2; White's attack is faster than a corner rook.",
      18: "10. Kd1 — Safe step.", 20: "11. Nxd5 — Re-capture pinned knight.", 22: "12. d4 — Blast open all lines.",
      24: "13. dxe5+ — Check with tempo.", 26: "14. Qf7+ — Queen penetration.", 28: "15. e6+ — Squeeze king.",
      30: "16. Bf4+ — Deadly bishop cross-fire.", 32: "17. Be3+ — Relentless checks.", 34: "18. Qf4+ — King driven into mating net.",
      36: "19. Qe4+ — Precision king hunt.", 38: "20. Ke2 — Bringing h1 rook into the mating finish!"
    }
  },
  {
    id: 'italian-punish-f5-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Unsound 4...d6 / 5...Bg4 Pin Refutation',
    shortName: '4...d6 & ...Bg4 Refuted',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5 11. exd5 Nxd5 12. Nxg6 hxg6 13. h4',
    fullAnnotation: 'Black tries a passive ...d6 setup with an early ...Bg4 pin. White reroutes the knight via f1 to g3/h4 and launches a crushing h-file attack.',
    previewFEN: 'r2q1rk1/ppp1bpp1/2n3p1/3np3/2B4P/2PP2N1/PP3PP1/R1BQK2R b KQ - 0 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center expansion.", 10: "6. Nbd2 — Classical knight tour.", 12: "7. h3 — Kick bishop.",
      14: "8. Nf1 — Knight heads for g3.", 16: "9. Ng3 — Bishop harassed.", 18: "10. Nh4! — Seize f5 and g6 squares.",
      20: "11. exd5 — Eliminate center pawn.", 22: "12. Nxg6 — Ruin Black pawn cover.", 24: "13. h4! — Unleash the h-file storm!"
    }
  },

  // Pianissimo (3 lines)
  {
    id: 'italian-punish-pianissimo-pin',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Pianissimo – Premature ...Bg4 Pin (Canal Sacrifice Refutation)',
    shortName: 'Canal Sacrifice Refuted',
    category: 'Kingside Attack',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O Bg4 7. h3 Bh5 8. Re1 O-O 9. Nbd2 a6 10. Bb3 Ba7 11. Nf1 h6 12. Ng3 Bg6 13. Nh4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O Bg4 7. h3 Bh5 8. Re1 O-O 9. Nbd2 a6 10. Bb3 Ba7 11. Nf1 h6 12. Ng3 Bg6 13. Nh4 Nxe4 14. Nxg6 Bxf2+ 15. Kh1 Nxg3+ 16. Kh2 Re8 17. Qf3 Bxe1 18. Bxf7+ Kh7 19. Bxe8 Qxe8 20. Nh4',
    fullAnnotation: 'Black pins with 6...Bg4 and tries a speculative piece sacrifice on e4. White executes the Canal counter-refutation to trap Black\'s pieces.',
    previewFEN: 'r3q3/1pp3pk/p1np3p/4p3/7N/2PP1QnP/PP4PK/R1B1b3 b - - 1 20',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Pianissimo quiet center.",
      8: "5. c3 — Prepare d4.", 10: "6. O-O — Safeguard king.", 12: "7. h3 — Ask bishop.", 14: "8. Re1 — Support center.",
      16: "9. Nbd2 — Standard knight reroute.", 18: "10. Bb3 — Tuck bishop away.", 20: "11. Nf1 — Step 2 of knight tour.",
      22: "12. Ng3 — Harass light-square bishop.", 24: "13. Nh4! — Thematic double-knight outpost.",
      26: "14. Nxg6 — Cash in on pin.", 28: "15. Kh1 — Calm king step.", 30: "16. Kh2 — Protect king.",
      32: "17. Qf3! — Triple attack on f2, e1, and g3.", 34: "18. Bxf7+ — King driven back.",
      36: "19. Bxe8 — Win the queen for rook.", 38: "20. Nh4 — White emerges completely winning!"
    }
  },
  {
    id: 'italian-punish-pianissimo-f5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Pianissimo – Dubious Early 4...f5? Counter-Strike Refuted',
    shortName: 'Early 4...f5? Refuted',
    category: 'Central Collapse',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Bxg8 Rxg8 6. exf5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Bxg8 Rxg8 6. exf5 d6 7. d4 exd4 8. O-O Bxf5 9. Re1+ Kf8 10. Nxd4 Nxd4 11. Qxd4 Qf6 12. Qd5 c6 13. Qb3',
    fullAnnotation: 'Black tries to break the quiet Pianissimo with premature 4...f5?. White eliminates the knight with 5. Bxg8! and tears open the e-file.',
    previewFEN: 'r4kr1/pp4pp/2pp1q2/2bQ1b2/8/1Q6/PPP2PPP/RNB1R1K1 b - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid move.",
      8: "5. Bxg8! — Eliminate key defender of f5.", 10: "6. exf5 — Pocket extra pawn.", 12: "7. d4! — Blast center open.",
      14: "8. O-O — Castle with huge lead in development.", 16: "9. Re1+ — Pin and drive Black king to f8.",
      18: "10. Nxd4 — Central capture.", 20: "11. Qxd4 — Central queen dominance.", 22: "12. Qd5 — Threaten mate on f7.",
      24: "13. Qb3 — White has two rooks ready to infiltrate and Black\'s king is hopeless."
    }
  },
  {
    id: 'italian-punish-pianissimo-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Pianissimo – Passive 4...Be7 Setup Punished',
    shortName: 'Passive 4...Be7 Punished',
    category: 'Positional Squeeze',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d3 Nf6 5. c3 d6 6. d4 exd4 7. cxd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d3 Nf6 5. c3 d6 6. d4 exd4 7. cxd4 Nxe4 8. d5 Nb8 9. Nc3 Nxc3 10. bxc3 O-O 11. O-O Bg4 12. h3 Bh5 13. Bd3 Nd7 14. Qc2',
    fullAnnotation: 'Black plays a tame Hungarian/Pianissimo setup and snatches the e4 pawn. White dominates with 8. d5! and a powerful kingside battery.',
    previewFEN: 'r2q1rk1/pppnbppp/3p4/3P3b/8/2PB1N1P/P1Q2PP1/R1B2RK1 b - - 2 14',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.", 6: "4. d3 — Pianissimo.",
      8: "5. c3 — Prepare d4.", 10: "6. d4 — Center break.", 12: "7. cxd4 — Reclaim center.",
      14: "8. d5! — Dislodge knight back to b8.", 16: "9. Nc3 — Rapid development.", 18: "10. bxc3 — Solid pawn structure.",
      20: "11. O-O — Castle safely.", 22: "12. h3 — Challenge bishop.", 24: "13. Bd3 — Re-aim at h7.",
      26: "14. Qc2 — Devastating battery against h7!"
    }
  }
];

console.log(`Validating ${allPunishmentDefinitions.length} lines for Italian Game...`);
for (const line of allPunishmentDefinitions) {
  const game = new Chess();
  const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (const t of tokens) {
    const res = game.move(t, { sloppy: true });
    if (!res) {
      console.error(`FAIL: ${line.id} token '${t}'`);
      process.exit(1);
    }
  }
  console.log(`PASS: ${line.id} (${game.history().length} ply) - final FEN: ${game.fen()}`);
}
console.log('Italian Game lines validated 100%!');
