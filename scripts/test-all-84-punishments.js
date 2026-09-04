import { Chess } from 'chess.js';

export const all84Lines = [
  // ============================================================
  // 1. ITALIAN GAME (13 lines across 4 submodules)
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
  },

  // ============================================================
  // 2. LONDON SYSTEM (12 lines across 4 submodules)
  // ============================================================
  // Classical Symmetrical (3 lines)
  {
    id: 'london-punish-symmetrical-trade',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Symmetrical 4...Bxb1? Trade Refutation',
    shortName: '4...Bxb1? Trade Punished',
    category: 'Bishop Pair Mastery',
    eco: '1. d4 d5 2. Bf4 Bf5 3. e3 e6 4. c4 Bxb1 5. Qxb1 Bb4+ 6. Kd1',
    pgn: '1. d4 d5 2. Bf4 Bf5 3. e3 e6 4. c4 Bxb1 5. Qxb1 Bb4+ 6. Kd1 Nf6 7. a3 Bd6 8. Bg5 dxc4 9. Bxc4 O-O 10. Nf3 c5 11. Ke2 cxd4 12. Rd1',
    fullAnnotation: 'Black trades the light-square bishop with 4...Bxb1? giving White the bishop pair, dominant center, and a rapid rook battery on d1.',
    previewFEN: 'rn1q1rk1/pp3ppp/3bpn2/6B1/2Bp4/P3PN2/1P2KPPP/RQ1R4 b - - 1 12',
    annotations: {
      0: "1. d4 — Queen's pawn opening.", 2: "2. Bf4 — The London Bishop.", 4: "3. e3 — Solidifying granite pawn pyramid.",
      6: "4. c4 — Central challenge.", 8: "5. Qxb1 — Queen recaptures with open b-file.", 10: "6. Kd1 — King steps safely away.",
      12: "7. a3 — Kick bishop.", 14: "8. Bg5! — Strong pin on f6.", 16: "9. Bxc4 — Recapture with central control.",
      18: "10. Nf3 — Develop knight.", 20: "11. Ke2 — King safely centralized.", 22: "12. Rd1! — White seizes the d-file with total initiative."
    }
  },
  {
    id: 'london-punish-early-c5-cxd4',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Premature 3...c5 & 4...cxd4 Exchange Punished',
    shortName: 'Early 3...c5 Punished',
    category: 'Central Dominance',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 cxd4 4. exd4 Nc6 5. c3 e6 6. Bd3 Bd6',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 cxd4 4. exd4 Nc6 5. c3 e6 6. Bd3 Bd6 7. Bxd6 Qxd6 8. f4 Nge7 9. Nf3 O-O 10. O-O f6 11. Nbd2 Bd7 12. Qe1 Rae8 13. Qh4',
    fullAnnotation: 'Black plays premature ...cxd4, resolving central tension and handing White the Pillsbury Stonewall attack with f4 and Qh4.',
    previewFEN: '4rrk1/pp1bn1pp/2nqpp2/3p4/3P1P1Q/2PB1N2/PP1N2PP/R4RK1 b - - 7 13',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid pyramid.", 6: "4. exd4 — Symmetrical pawn structure favors White.",
      8: "5. c3 — Solidify d4.", 10: "6. Bd3 — Aim at h7.", 12: "7. Bxd6 — Eliminate defender.", 14: "8. f4! — Pillsbury clamp on e5.",
      16: "9. Nf3 — Outpost control.", 18: "10. O-O — Castle safely.", 20: "11. Nbd2 — Connect rooks.", 22: "12. Qe1 — Queen swing.",
      24: "13. Qh4! — Direct checkmate threat on h7!"
    }
  },
  {
    id: 'london-punish-c6-qb6',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Passive 2...c6 / 3...Qb6 Flank Raid Punished',
    shortName: 'Slav 3...Qb6 Punished',
    category: 'Queenside Clamp',
    eco: '1. d4 d5 2. Bf4 c6 3. e3 Qb6 4. Qc1 Bf5 5. c4 e6 6. Nc3 Nd7 7. Nf3 Ngf6 8. h3 h6 9. Be2 Be7 10. O-O O-O 11. c5',
    pgn: '1. d4 d5 2. Bf4 c6 3. e3 Qb6 4. Qc1 Bf5 5. c4 e6 6. Nc3 Nd7 7. Nf3 Ngf6 8. h3 h6 9. Be2 Be7 10. O-O O-O 11. c5 Qd8 12. b4',
    fullAnnotation: 'Black tries a Slav-style queen raid with 3...Qb6. White calmly shields b2 with 4. Qc1 and clamps the queenside with c5! and b4.',
    previewFEN: 'r2q1rk1/pp1nbpp1/2p1pn1p/2Pp1b2/1P1P1B2/2N1PN1P/P3BPP1/R1Q2RK1 b - - 0 12',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Granite wall.", 6: "4. Qc1 — Solid b2 defense.",
      8: "5. c4 — Central challenge.", 10: "6. Nc3 — Rapid queenside deployment.", 12: "7. Nf3 — Natural knight post.",
      14: "8. h3 — Escape square for bishop.", 16: "9. Be2 — Prepare castling.", 18: "10. O-O — Kingside safety.",
      20: "11. c5! — Queenside clamp kicks queen back to d8.", 22: "12. b4 — Total queenside stranglehold."
    }
  },

  // King's Indian & Grünfeld (3 lines)
  {
    id: 'london-punish-kings-indian-raid',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian-grunfeld',
    name: 'London System – KID 6...c5 / 7...Qb6 Raid Punished',
    shortName: 'KID ...Qb6 Raid Punished',
    category: 'Pawn Structure Ruin',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 d6 6. Be2 c5 7. c3 Qb6 8. Qb3',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 d6 6. Be2 c5 7. c3 Qb6 8. Qb3 Be6 9. Qxb6 axb6 10. a3 Nc6 11. Nbd2 Na5 12. O-O Nb3 13. Nxb3 Bxb3 14. Nd2 Ba4 15. Bf3',
    fullAnnotation: 'Black initiates an overaggressive queen sortie in the King\'s Indian. White trades queens on b6, isolating and crippling Black\'s b-pawns.',
    previewFEN: 'r4rk1/1p2ppbp/1p1p1np1/2p5/b2P1B2/P1P1PB1P/1P1N1PP1/R4RK1 b - - 3 15',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. Nf3 — King's Indian defense.",
      8: "5. h3 — Luft for bishop.", 10: "6. Be2 — Harmonious development.", 12: "7. c3 — Solidify d4.",
      14: "8. Qb3! — Offer queen trade on White's terms.", 16: "9. Qxb6 — Shatter Black's queenside pawns.",
      18: "10. a3 — Prevent ...b5 expansion.", 20: "11. Nbd2 — Connect rooks.", 22: "12. O-O — Safeguard king.",
      24: "13. Nxb3 — Eliminate active knight.", 26: "14. Nd2 — Harass bishop.", 28: "15. Bf3 — Target weak b7 pawn."
    }
  },
  {
    id: 'london-punish-kid-premature-e5',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian-grunfeld',
    name: 'London System – KID Premature 7...e5? Break Punished',
    shortName: 'KID Premature ...e5 Punished',
    category: 'Tactical Destruction',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. c3 O-O 6. Nbd2 Qe8 7. h3 e5',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. c3 O-O 6. Nbd2 Qe8 7. h3 e5 8. dxe5 dxe5 9. Bh2 Nc6 10. Bb5 Nd7 11. Nc4 f6 12. Qd5+ Kh8 13. Bxc6 bxc6 14. Qxc6',
    fullAnnotation: 'Black rushes the ...e5 break without adequate preparation. White captures on e5 and exploits the pinned c6 knight to win a clean pawn.',
    previewFEN: 'r1b1qr1k/p1pn2bp/2Q2pp1/4p3/2N5/2P1PN1P/PP3PPB/R3K2R b KQ - 0 14',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid setup.", 6: "4. Nf3 — Development.",
      8: "5. c3 — Reinforce d4.", 10: "6. Nbd2 — Reroute option.", 12: "7. h3 — Prophylaxis.",
      14: "8. dxe5! — Expose Black's e5 overextension.", 16: "9. Bh2 — Safe bishop retreat.", 18: "10. Bb5 — Pin c6 knight.",
      20: "11. Nc4 — Pile on e5.", 22: "12. Qd5+ — Double attack on king and c6.", 24: "13. Bxc6 — Eliminate knight.",
      26: "14. Qxc6 — White nets a pawn and controls the board."
    }
  },
  {
    id: 'london-punish-grunfeld-cxd4',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian-grunfeld',
    name: 'London System – Grünfeld 4...c5 / 10...Nh5? Blunder Punished',
    shortName: 'Grünfeld 10...Nh5? Punished',
    category: 'Kingside Destruction',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c3 c5 6. Nbd2 cxd4 7. exd4 O-O 8. Bd3 Nc6 9. O-O Nh5 10. Be3 f5 11. Bg5 h6 12. Bh4 g5 13. Nxg5',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c3 c5 6. Nbd2 cxd4 7. exd4 O-O 8. Bd3 Nc6 9. O-O Nh5 10. Be3 f5 11. Bg5 h6 12. Bh4 g5 13. Nxg5 hxg5 14. Qxh5 gxh4 15. Nf3 e6 16. Ng5 Rf6 17. Rae1',
    fullAnnotation: 'Black plays an unsound kingside overextension with 10...f5 and 12...g5?. White uncorks 13. Nxg5! sacrificing a knight to rip open Black\'s shattered king defenses with decisive mating threats on h7.',
    previewFEN: 'r1bq2k1/pp4b1/2n1pr2/3p1pNQ/3P3p/2PB4/PP3PPP/4RRK1 b - - 3 17',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. Nf3 — Development.",
      8: "5. c3 — Reinforce center.", 10: "6. Nbd2 — Standard setup.", 12: "7. exd4 — Maintain central clamp.",
      14: "8. Bd3 — Aim directly at h7.", 16: "9. O-O — Castle safely.", 18: "10. Be3 — Bishop retreats flexibly.",
      20: "11. Bg5 — Pin the queen.", 22: "12. Bh4 — Prophylactic retreat.",
      24: "13. Nxg5! — Tactical Punishment: Knight sacrifice demolishes Black's overextended pawns!",
      26: "14. Qxh5 — Regain material and penetrate with queen.", 28: "15. Nf3 — Re-route attacker with tempo.",
      30: "16. Ng5 — Threatening Qh7+ and mate.", 32: "17. Rae1 — Bring final rook to the assault."
    }
  },

  // Queen's Indian & Benoni (3 lines)
  {
    id: 'london-punish-benoni-raid',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London System – Benoni Premature 3...b5 Overextension Punished',
    shortName: 'Benoni 3...b5 Refuted',
    category: 'Queenside Domination',
    eco: '1. d4 Nf6 2. Bf4 c5 3. d5 b5 4. c4 bxc4 5. Nc3 d6 6. e4 g6 7. Bxc4 Bg7',
    pgn: '1. d4 Nf6 2. Bf4 c5 3. d5 b5 4. c4 bxc4 5. Nc3 d6 6. e4 g6 7. Bxc4 Bg7 8. Nf3 O-O 9. O-O Ba6 10. Nd2 Bxc4 11. Nxc4 Nbd7 12. Re1 Nb6 13. Na5',
    fullAnnotation: 'Black tries an early Benoni wing expansion with 3...b5. White controls the c4 square and establishes a crippling knight outpost on a5/c6.',
    previewFEN: 'r2q1rk1/p3ppbp/1n1p1np1/N1pP4/4PB2/2N5/PP3PPP/R2QR1K1 b - - 4 13',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. d5 — Seize central space.", 6: "4. c4! — Strike at b5 pawn.",
      8: "5. Nc3 — Rapid development.", 10: "6. e4 — Build strong center.", 12: "7. Bxc4 — Recapture pawn.",
      14: "8. Nf3 — Complete development.", 16: "9. O-O — Castle securely.", 18: "10. Nd2 — Prepare knight maneuver.",
      20: "11. Nxc4 — Recapture on c4.", 22: "12. Re1 — Seize the e-file.", 24: "13. Na5! — Dominating outpost on c6 incoming!"
    }
  },
  {
    id: 'london-punish-qid-ne4',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London System – QID Premature 7...Ne4? Leap Punished',
    shortName: 'QID 7...Ne4? Punished',
    category: 'Queen Harassment',
    eco: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. c3 Be7 6. Nbd2 O-O 7. Bd3 Ne4',
    pgn: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. c3 Be7 6. Nbd2 O-O 7. Bd3 Ne4 8. Nxe4 Bxe4 9. Nd2 Bb7 10. e4 d6 11. Bb5 c6 12. Bd3 Nd7 13. Qg4',
    fullAnnotation: 'Black leaps prematurely with 7...Ne4 in the Queen\'s Indian. White trades, gains tempo on the bishop, and launches a crushing Qg4 assault.',
    previewFEN: 'r2q1rk1/pb1nbppp/1p1pp3/8/3PPBQ1/2PB4/PP1N1PPP/R3K2R b KQ - 3 13',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Granite wall.", 6: "4. Nf3 — Develop knight.",
      8: "5. c3 — Solidify d4.", 10: "6. Nbd2 — Reroute option.", 12: "7. Bd3 — Aim at h7.",
      14: "8. Nxe4! — Eliminate premature knight.", 16: "9. Nd2 — Kick bishop with tempo.", 18: "10. e4 — Occupy center.",
      20: "11. Bb5+ — Force c6 weakening.", 22: "12. Bd3 — Retreat safely.", 24: "13. Qg4! — Triple threat on g7 and h6."
    }
  },
  {
    id: 'london-punish-dutch-defense',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London System – Dutch 1...f5 Setup Dismantled by 8. g4!',
    shortName: 'Dutch 1...f5 Dismantled',
    category: 'Kingside Breakthrough',
    eco: '1. d4 f5 2. Bf4 Nf6 3. e3 e6 4. Nf3 b6 5. h3 Bb7 6. Nbd2 Be7 7. Bd3 O-O 8. g4',
    pgn: '1. d4 f5 2. Bf4 Nf6 3. e3 e6 4. Nf3 b6 5. h3 Bb7 6. Nbd2 Be7 7. Bd3 O-O 8. g4 Ne4 9. gxf5 exf5 10. Rg1 d6 11. Qe2 Nd7 12. O-O-O',
    fullAnnotation: 'Black plays a Dutch setup against the London. White uncorks the aggressive 8. g4! breakthrough, opening the g-file for a decisive attack.',
    previewFEN: 'r2q1rk1/pbpnb1pp/1p1p4/5p2/3PnB2/3BPN1P/PPPNQP2/2KR2R1 b - - 3 12',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid pawn structure.", 6: "4. Nf3 — Natural knight post.",
      8: "5. h3 — Escape square.", 10: "6. Nbd2 — Queenside piece out.", 12: "7. Bd3 — Center bishop battery.",
      14: "8. g4! — Tactical Punishment: Blast open the g-file against the Dutch pawn.", 16: "9. gxf5 — Open lines.",
      18: "10. Rg1 — Seize the open g-file.", 20: "11. Qe2 — Prepare queenside castling.",
      22: "12. O-O-O — Opposite-side castling gives White an overwhelming mating attack."
    }
  },

  // Sharp Steinitz & Jobava (3 lines)
  {
    id: 'london-punish-b2-grab',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London System – Poisoned b2 Pawn / Queen Trap Refutation',
    shortName: 'Poisoned b2 Queen Trap',
    category: 'Queen Trap',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4 e6 13. exd5 exd5 14. Re2+ Kd8 15. Nf3',
    fullAnnotation: 'Black greedily snatches the b2 pawn with 4...Qxb2?. White traps the queen with 5. Nb5! and 7. Rc1, leaving Black hopelessly behind in development.',
    previewFEN: 'r2k1bnr/pp3ppp/n1b5/3p4/2pP1B2/P1N2N2/4RPPP/4KB1R b K - 3 15',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.",
      6: "4. Nc3 — Aggressive knight deployment.", 8: "5. Nb5! — Threaten Nc7+ fork.", 10: "6. a3! — Restrict queen escape.",
      12: "7. Rc1 — Trap queen.", 14: "8. Rb1 — Kick queen.", 16: "9. Qxc2 — Queen trade forced.",
      18: "10. Rb2 — Kick bishop.", 20: "11. Nc3 — Centralize knight.", 22: "12. e4! — Central breakthrough.",
      24: "13. exd5 — Open e-file.", 26: "14. Re2+ — King driven to d8.", 28: "15. Nf3 — White has total piece coordination and an extra piece."
    }
  },
  {
    id: 'london-punish-jobava-break',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London System – Jobava 4...c5 / 11. e6! Dark-Square Rupture',
    shortName: 'Jobava 11. e6! Rupture',
    category: 'Mating Attack',
    eco: '1. d4 Nf6 2. Bf4 c5 3. d5 Qb6 4. Nc3 Qxb2 5. Bd2 Qb6 6. e4 d6 7. f4 g6 8. e5 dxe5 9. fxe5 Nfd7 10. Rb1 Qd8 11. e6',
    pgn: '1. d4 Nf6 2. Bf4 c5 3. d5 Qb6 4. Nc3 Qxb2 5. Bd2 Qb6 6. e4 d6 7. f4 g6 8. e5 dxe5 9. fxe5 Nfd7 10. Rb1 Qd8 11. e6 fxe6 12. dxe6 Nf6 13. Bb5+ Nc6 14. Bxc6+ bxc6 15. Qe2',
    fullAnnotation: 'In the Jobava London, Black tries 3...c5 and 4...Qb6. White uncorks the devastating 11. e6! pawn sacrifice, destroying Black\'s king shelter.',
    previewFEN: 'r1bqkb1r/p3p2p/2p1Pnp1/2p5/8/2N5/P1PBQ1PP/1R2K1NR b Kkq - 1 15',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. d5 — Seize space.", 6: "4. Nc3 — Jobava knight.",
      8: "5. Bd2 — Protect knight.", 10: "6. e4 — Control center.", 12: "7. f4 — Thematic pawn roller.",
      14: "8. e5! — Disrupt knight.", 16: "9. fxe5 — Massive center.", 18: "10. Rb1 — Kick queen back to d8.",
      20: "11. e6! — Tactical Punishment: Rupture dark squares!", 22: "12. dxe6 — Pawn wedge on e6.",
      24: "13. Bb5+ — Force piece block.", 26: "14. Bxc6+ — Ruin pawn structure.", 28: "15. Qe2 — Dominating dark-square stranglehold."
    }
  },
  {
    id: 'london-punish-steinitz-qxb2',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London System – Steinitz 7...Qxb2? Knight Sacrifice Refuted',
    shortName: 'Steinitz 7...Qxb2 Refuted',
    category: 'Rook Sacrifice Refutation',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 cxd4 4. exd4 Qb6 5. Nc3 e6 6. Nf3 Qxb2 7. Nb5 Bb4+ 8. Nd2 Na6 9. Rb1',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 cxd4 4. exd4 Qb6 5. Nc3 e6 6. Nf3 Qxb2 7. Nb5 Bb4+ 8. Nd2 Na6 9. Rb1 Qxa2 10. Rxb4 Nxb4 11. Nc7+ Kd8 12. Nxa8 Nxc2+ 13. Ke2 Nxd4+ 14. Ke1',
    fullAnnotation: 'Black plays Steinitz\'s greedy 6...Qxb2?. White traps the queen on the b-file and captures the corner rook with a winning advantage.',
    previewFEN: 'N1bk1bnr/pp3ppp/4p3/3p4/3n1B2/8/q1PN1PPP/3QKB1R b - - 1 14',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. exd4 — Center control.",
      8: "5. Nc3 — Rapid knight deployment.", 10: "6. Nf3 — Complete development.", 12: "7. Nb5! — Double threat on c7.",
      14: "8. Nd2 — Safe block.", 16: "9. Rb1 — Attack queen.", 18: "10. Rxb4! — Tactical exchange sacrifice.",
      20: "11. Nc7+ — Decisive fork.", 22: "12. Nxa8 — Pocket corner rook.", 24: "13. Ke2 — Step out of check.",
      26: "14. Ke1 — White emerges with an extra rook and complete safety."
    }
  }
];

console.log(`Validating ${all84Lines.length} lines across Italian Game & London System...`);
for (const line of all84Lines) {
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
console.log('Italian & London lines validated 100%!');
