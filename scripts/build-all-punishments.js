// Master builder for all 84 Tactical Punishment Lines
import fs from 'fs';
import { Chess } from 'chess.js';

export const allLines = [
  // =========================================================================
  // 1. ITALIAN GAME (13 lines)
  // =========================================================================
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
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop targeting f7.",
      6: "4. d4 — Direct strike at Black's center.", 8: "5. dxe5 — Opening d-file lines.",
      9: "Blunder: 5...Nxe5?? walks straight into a devastating queen sacrifice.",
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
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. c3 — Prepare central d4 pawn roller.",
      8: "5. d4 — Center break.", 10: "6. cxd4 — Establish classical pawn duo.", 12: "7. Bd2 — Neutralize check.",
      13: "Blunder: 7...Nxe4? grabs a hot pawn at the expense of king shelter.",
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
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. c3 — Central preparation.",
      7: "Blunder: 4...Qf6? commits the queen prematurely and blocks the f-pawn.",
      8: "5. d4 — Punish premature queen by blowing open the center.", 10: "6. O-O — Castle with huge development lead.",
      12: "7. e5! — Tactical Punishment: Kick Black's queen with tempo.", 14: "8. Nxc3 — Rapid knight development.", 16: "9. Nd5! — Dominate c7 and e7.",
      18: "10. Bxd5 — Maintain central clamping bishop.", 20: "11. Re1 — Seize the e-file.", 22: "12. Be4 — Chase queen again.",
      24: "13. Bf4 — Total central domination."
    }
  },
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
    annotations: {
      0: "1. e4 — Open game.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4! — The Evans Gambit.",
      8: "5. c3 — Gain tempo on bishop.", 10: "6. d4 — Blast open the center.", 12: "7. O-O — Safeguard king.",
      13: "Blunder: 7...dxc3? grabs pawns while drastically lagging behind in development.",
      14: "8. Qb3 — Tactical Punishment: Thematic f7 battery.", 16: "9. e5! — Disrupt queen.", 18: "10. Nxc3 — Bring last piece into battle.",
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
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4 — Evans Gambit.",
      7: "Inaccuracy: 4...Bb6 declines passively without challenging White.",
      8: "5. a4 — Threaten a5 trap.", 10: "6. Nc3 — Rapid deployment.", 12: "7. Nd5! — Outpost on d5.",
      14: "8. exd5 — Open e-file pressure.", 16: "9. Nxe5! — Tactical Punishment: Seize central e5 pawn.",
      18: "10. Nf3 — Safe retreat.", 20: "11. O-O — Complete development.", 22: "12. h3 — Question bishop.", 24: "13. d4 — Dominating center."
    }
  },
  {
    id: 'italian-punish-evans-counter-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Premature 5...d5 Counter-Strike Refuted',
    shortName: 'Premature 5...d5 Refuted',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 d5 6. exd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 d5 6. exd5 e4 7. dxc6 exf3 8. Qxf3 Qe7+ 9. Kd1 bxc6 10. Re1 Be6 11. Qxc6+ Qd7 12. Qxa8+',
    fullAnnotation: 'Black attempts an uncoordinated central counter-strike with 5...d5? in the Evans Gambit. White blows through the center and wins a full rook.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4 — Evans Gambit.", 8: "5. c3 — Attack bishop.",
      9: "Blunder: 5...d5? leaves the bishop on b4 en prise and king unprotected.",
      10: "6. exd5! — Expose e4 and c6.", 12: "7. dxc6 — Pocket piece on c6.", 14: "8. Qxf3 — Threaten Qxf7 mate and Qxc6+.",
      16: "9. Kd1 — Safe king step.", 18: "10. Re1 — Pin e6 bishop.", 20: "11. Qxc6+ — Crushing fork.",
      22: "12. Qxa8+ — Tactical Punishment: White captures corner rook with +9.0 advantage."
    }
  },
  {
    id: 'italian-punish-blackburne',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Blackburne Shilling Refutation (4. Bxf7+!)',
    shortName: 'Blackburne Shilling Refuted',
    category: 'Trap Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7 6. c3 d6 7. Nc4 Ne6 8. d4 Nf6 9. O-O Nxe4 10. d5 N6c5 11. Re1 Kd7 12. Qg4+ Ke8 13. Qh5+',
    fullAnnotation: 'Black sets the cheap Blackburne Shilling trap with 3...Nd4?!. White dismantles it completely by blasting open the center with Bxf7+! and d4.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      5: "Inaccuracy: 3...Nd4?! attempts the cheap Blackburne Shilling trap.",
      6: "4. Bxf7+! — Tactical Punishment: Strike Black's king immediately!", 8: "5. Nxe5+ — Central fork.",
      10: "6. c3 — Kick the tricky knight.", 12: "7. Nc4 — Reroute with tempo.", 14: "8. d4 — Full center expansion.",
      16: "9. O-O — Complete king safety.", 18: "10. d5 — Push black pieces into disarray.", 20: "11. Re1 — Pin e4 knight to king.",
      22: "12. Qg4+ — Deliver check with king stranded.", 24: "13. Qh5+ — Decisive attack."
    }
  },
  {
    id: 'italian-punish-traxler',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Traxler Counter-Attack Refuted (5. Bxf7+!)',
    shortName: 'Traxler Counter Refuted',
    category: 'Tactical Precision',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 Rf8 7. O-O d6 8. Bxc6 bxc6 9. c3 h6 10. Nf3 Bg4 11. d4 exd4 12. cxd4 Bb6 13. Qd3',
    fullAnnotation: 'Black plays the wild Traxler Counter-Attack (4...Bc5?!). White refutes it cleanly with 5. Bxf7+! followed by safe consolidation.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. Ng5 — Attack f7.",
      7: "Blunder: 4...Bc5?! is the unsound Traxler Counter-Attack.",
      8: "5. Bxf7+! — Tactical Punishment: Strip castling rights and win a clean pawn.",
      10: "6. Bd5 — Safe retreat.", 12: "7. O-O — King safety.", 14: "8. Bxc6 — Ruin pawn structure.",
      16: "9. c3 — Prepare center.", 18: "10. Nf3 — Knight retreats safely.", 20: "11. d4 — Break open center.",
      22: "12. cxd4 — Control center.", 24: "13. Qd3 — Total positional and material dominance."
    }
  },
  {
    id: 'italian-punish-fried-liver-ncb4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver 8...Ncb4? Knight Raid Crushed',
    shortName: 'Fried Liver 8...Ncb4 Crushed',
    category: 'Mating Attack',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. a3 Nxc2+ 10. Kd1 Nxa1 11. Nxd5 Kd6 12. d4 c6 13. dxe5+ Kd7 14. Qf7+ Be7 15. e6+ Kd6 16. Bf4+ Kc5 17. Be3+ Kd6 18. Qf4+ Kxe6 19. Qe4+ Kd7 20. Ke2',
    fullAnnotation: 'Black defends the Fried Liver greedily with 8...Ncb4? grabbing the c2 rook. White launches a relentless king hunt forcing mate.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. Ng5 — Target f7.",
      8: "5. exd5 — Open lines.", 10: "6. Nxf7! — The legendary Fried Liver sacrifice!", 12: "7. Qf3+ — Triple attack on pinned d5 knight.",
      14: "8. Nc3 — Pile fourth attacker on d5.",
      15: "Blunder: 8...Ncb4? counter-attacks c2 greedily while the king is in mortal danger.",
      16: "9. a3! — Kick knight.", 18: "10. Kd1 — Safe king step avoiding checks.", 20: "11. Nxd5 — Eliminate key defender.",
      22: "12. d4! — Blow open central highways.", 24: "13. dxe5+ — Discover check.", 26: "14. Qf7+ — Penetrate into black camp.",
      28: "15. e6+ — Tighten the noose.", 30: "16. Bf4+ — Bishop joins attack.", 32: "17. Be3+ — Drive king into mating net.",
      34: "18. Qf4+ — Continuous checks.", 36: "19. Qe4+ — Precision king hunt.", 38: "20. Ke2! — White connects rooks with an unavoidable mating attack."
    }
  },
  {
    id: 'italian-punish-f5-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Dubious 4...f5?! Counter-Gambit Dismantled',
    shortName: 'Two Knights 4...f5 Refuted',
    category: 'Center Domination',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5 11. exd5 Nxd5 12. Nxg6 hxg6 13. h4',
    fullAnnotation: 'Black tries a passive ...d6 setup with an early ...Bg4 pin. White reroutes the knight via f1 to g3/h4 and launches a crushing h-file attack.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center expansion.", 10: "6. Nbd2 — Classical knight tour.", 12: "7. h3 — Kick bishop.",
      14: "8. Nf1 — Knight heads for g3.", 16: "9. Ng3 — Bishop harassed.", 18: "10. Nh4! — Seize f5 and g6 squares.",
      19: "Inaccuracy: 10...d5 opens the center while kingside pieces are trapped.",
      20: "11. exd5 — Eliminate center pawn.", 22: "12. Nxg6 — Ruin Black pawn cover.", 24: "13. h4! — Unleash the h-file storm!"
    }
  },
  {
    id: 'italian-punish-pianissimo-pin',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Giuoco Pianissimo – Premature ...Bg4 Pin Punished (9. h3 Bh5 10. g4!)',
    shortName: 'Pianissimo ...Bg4 Punished',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Be6 10. Re1 Bxb3 11. axb3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Kh8 10. Re1 Nh5 11. Nf1 f5 12. exf5 Bxf5 13. g4 Nf4 14. Bxf4 exf4 15. gxf5 Rxf5 16. d4 Qf6 17. N1h2 Rf8 18. Re6 Qd8 19. Qe2 Nb8 20. Re1',
    fullAnnotation: 'Black miscalculates with a premature f5 break and bishop pin in the Pianissimo. White dominates the open e-file with heavy artillery.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Quiet Italian.",
      8: "5. c3 — Reinforce center.", 10: "6. O-O — Kingside safety.", 12: "7. Bb3 — Bishop tucks away.", 14: "8. Nbd2 — Reroute maneuver.",
      16: "9. h3 — Deny g4 square.", 18: "10. Re1 — Seize e-file.", 20: "11. Nf1 — Knight transfers to g3/e3.",
      21: "Inaccuracy: 11...f5?! exposes Black's king prematurely.",
      22: "12. exf5 — Open e-file lines.", 24: "13. g4! — Tactical Punishment: Traps and dismantles the piece coordination.",
      26: "14. Bxf4 — Win piece.", 28: "15. gxf5 — Win bishop.", 30: "16. d4 — Anchor center.",
      32: "17. N1h2 — Coordinate defense.", 34: "18. Re6! — Invasive rook outpost.", 36: "19. Qe2 — Double on e-file.",
      38: "20. Re1 — Complete stranglehold."
    }
  },
  {
    id: 'italian-punish-pianissimo-f5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Giuoco Pianissimo – Overaggressive 6...f5? Dismantled',
    shortName: 'Early 6...f5 Dismantled',
    category: 'Center Punishment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4 exd4 8. O-O dxc3 9. Nxc3 Nge7 10. Re1 Qd7 11. Bg5 O-O-O 12. Bb5 Rde8 13. Bxe7',
    fullAnnotation: 'Black lashes out with 5...f5? in the quiet Italian. White blasts open the center with 7. d4! and pins Black\'s king in the middle of the board.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Pianissimo.",
      7: "Blunder: 5...f5? fatally weakens the e8-h5 diagonal before castling.",
      8: "6. exf5 — Open up lines.", 10: "7. d4! — Tactical Punishment: Blast open the center against uncastled king.",
      12: "8. O-O — King safety with massive lead in development.", 14: "9. Nxc3 — Bring last piece out.",
      16: "10. Re1 — Pin e7 knight.", 18: "11. Bg5 — Pile on the pinned piece.", 20: "12. Bb5 — Dual pin on both knights.",
      22: "13. Bxe7 — Win piece and game."
    }
  },
  {
    id: 'italian-punish-pianissimo-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Giuoco Pianissimo – Premature ...d5 Break Refuted by 10. exd5',
    shortName: 'Premature ...d5 Refuted',
    category: 'Positional Punishment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5 Nxd5 11. Re1 Re8 12. Ne4 h6 13. Bxh6 gxh6 14. Bxd5',
    fullAnnotation: 'Black rushes the ...d5 central break in the Pianissimo. White exploits the tactical weakness of the d5 knight with 13. Bxh6! and 14. Bxd5.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center.", 10: "6. O-O — Castle.", 12: "7. Nbd2 — Flexible knight.", 14: "8. Bb3 — Retreat square.",
      16: "9. h3 — Prophylaxis.",
      17: "Inaccuracy: 9...d5?! opens the position prematurely before piece coordination is achieved.",
      18: "10. exd5 — Liquidate center.", 20: "11. Re1 — Direct pressure on e5.", 22: "12. Ne4 — Outpost on e4.",
      24: "13. Bxh6! — Tactical Punishment: Greek Gift motif demolishes king shelter.",
      26: "14. Bxd5 — White wins a clean pawn with overwhelming attack."
    }
  },

  // =========================================================================
  // 2. LONDON SYSTEM (12 lines)
  // =========================================================================
  {
    id: 'london-punish-symmetrical-trade',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Symmetrical 3...Bf5 / 7...Bxc1? Refuted',
    shortName: 'Symmetrical 7...Bxc1 Refuted',
    category: 'Development Advantage',
    eco: '1. d4 d5 2. Bf4 Bf5 3. e3 e6 4. Nf3 Bd6 5. c4 Nf6 6. Nc3 dxc4 7. Bxc4 Bxf4 8. exf4 O-O 9. O-O c6 10. Ne5 Nbd7 11. Qe2 Nd5 12. g3',
    pgn: '1. d4 d5 2. Bf4 Bf5 3. e3 e6 4. Nf3 Bd6 5. c4 Nf6 6. Nc3 dxc4 7. Bxc4 Bxf4 8. exf4 O-O 9. O-O c6 10. Ne5 Nbd7 11. Qe2 Nd5 12. g3',
    fullAnnotation: 'Black tries to copy White\'s setup with 2...Bf5 and trades prematurely on f4. White solidifies an iron grip on e5.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. Nf3 — Develop knight.",
      8: "5. c4 — Challenge center.", 10: "6. Nc3 — Rapid deployment.", 12: "7. Bxc4 — Active bishop recapture.",
      13: "Inaccuracy: 7...Bxf4?! cedes the bishop pair and opens the e-file for White.",
      14: "8. exf4 — Control central e5 square.", 16: "9. O-O — Castle securely.", 18: "10. Ne5! — Tactical Punishment: Unshakeable knight outpost.",
      20: "11. Qe2 — Connect rooks.", 22: "12. g3 — Solidify king and center."
    }
  },
  {
    id: 'london-punish-early-c5-cxd4',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Early 3...c5 / 4...Qb6 Overextension Punished',
    shortName: 'Early 4...Qb6 Punished',
    category: 'Pawn Trap',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nf3 a6 6. Rb1 Nc6 7. Be2 cxd4 8. exd4 Nf6 9. O-O Be7 10. Na4 Qa7 11. Bc7 Nd7 12. c4 dxc4 13. Bxc4',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nf3 a6 6. Rb1 Nc6 7. Be2 cxd4 8. exd4 Nf6 9. O-O Be7 10. Na4 Qa7 11. Bc7 Nd7 12. c4 dxc4 13. Bxc4',
    fullAnnotation: 'Black raids the queenside with 3...c5 and 4...Qb6. White defends comfortably and traps Black with 11. Bc7! dominating the board.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid triangle.",
      5: "Blunder: 3...c5 and 4...Qb6? targets b2 prematurely.",
      6: "4. Nc3! — Tactical Punishment: Threaten Nb5 with a deadly c7 fork!", 8: "5. Nf3 — Natural development.",
      10: "6. Rb1 — Defend b2 with tempo.", 12: "7. Be2 — Develop bishop.", 14: "8. exd4 — Maintain center clamp.",
      16: "9. O-O — Safeguard king.", 18: "10. Na4 — Kick queen.", 20: "11. Bc7! — Paralyze Black's queen.",
      22: "12. c4 — Central breakthrough.", 24: "13. Bxc4 — Decisive positional clamp."
    }
  },
  {
    id: 'london-punish-c6-qb6',
    courseId: 'london-system',
    subCourseId: 'london-classical-symmetrical',
    name: 'London System – Slav 4...Qb6? Queenside Attack Dismantled',
    shortName: 'Slav 4...Qb6 Dismantled',
    category: 'Positional Trap',
    eco: '1. d4 d5 2. Bf4 c6 3. e3 Qb6 4. Qc1 Bf5 5. Nf3 e6 6. Be2 Nf6 7. O-O Nbd7 8. c4 Be7 9. c5 Qd8 10. h3 O-O 11. Nbd2 b6 12. b4',
    pgn: '1. d4 d5 2. Bf4 c6 3. e3 Qb6 4. Qc1 Bf5 5. Nf3 e6 6. Be2 Nf6 7. O-O Nbd7 8. c4 Be7 9. c5 Qd8 10. h3 O-O 11. Nbd2 b6 12. b4',
    fullAnnotation: 'Black tries a Slav queen sortie with 3...Qb6. White plays 4. Qc1!, secures the queenside, and traps Black in a suffocating bind with c5 and b4.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.",
      5: "Inaccuracy: 3...Qb6?! leaves the queen misplaced.",
      6: "4. Qc1! — Masterclass prophylaxis defending b2.", 8: "5. Nf3 — Develop knight.", 10: "6. Be2 — Prepare castling.",
      12: "7. O-O — King safe.", 14: "8. c4 — Central expansion.", 16: "9. c5! — Tactical Punishment: Chase queen back into passivity.",
      18: "10. h3 — Prophylaxis.", 20: "11. Nbd2 — Connect rooks.", 22: "12. b4 — White controls the entire queenside."
    }
  },
  {
    id: 'london-punish-kings-indian-raid',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian-grunfeld',
    name: 'London System – KID 6...Nh5? Premature Bishop Hunt Punished',
    shortName: 'KID 6...Nh5? Hunt Punished',
    category: 'Bishop Preservation',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 Nh5 7. Bh2 f5 8. O-O Nd7 9. c4 e5 10. Nc3 e4 11. Nd2 Nhf6 12. b4 Qe7 13. c5 dxc5 14. bxc5 c6 15. Bd6',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 Nh5 7. Bh2 f5 8. O-O Nd7 9. c4 e5 10. Nc3 e4 11. Nd2 Nhf6 12. b4 Qe7 13. c5 dxc5 14. bxc5 c6 15. Bd6',
    fullAnnotation: 'Black hunts White\'s London bishop prematurely with 6...Nh5?!. White preserves the bishop on h2, dominates the queenside, and skewers Black with 15. Bd6! winning the exchange.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid pawn structure.", 6: "4. Nf3 — Develop knight.",
      8: "5. h3! — Crucial escape square for the London bishop.", 10: "6. Be2 — Ready to castle.",
      11: "Blunder: 6...Nh5?! wastes tempos chasing a bishop that easily tucks away.",
      12: "7. Bh2! — The bishop retreats safely to its ideal bunker.", 14: "8. O-O — Castle securely.", 16: "9. c4 — Queenside counter-strike.",
      18: "10. Nc3 — Rapid deployment.", 20: "11. Nd2 — Safe retreat while attacking e4.", 22: "12. b4 — Thematic queenside avalanche.",
      24: "13. c5! — Blast through Black's pawn chain.", 26: "14. bxc5 — Open b-file.",
      28: "15. Bd6! — Tactical Punishment: Skewer queen and rook, netting decisive material."
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
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid setup.", 6: "4. Nf3 — Development.",
      8: "5. c3 — Reinforce d4.", 10: "6. Nbd2 — Reroute option.", 12: "7. h3 — Prophylaxis.",
      13: "Blunder: 7...e5? opens the center prematurely while pieces remain uncoordinated.",
      14: "8. dxe5! — Expose Black's e5 overextension.", 16: "9. Bh2 — Safe bishop retreat.", 18: "10. Bb5 — Pin c6 knight.",
      20: "11. Nc4 — Pile on e5.", 22: "12. Qd5+ — Double attack on king and c6.", 24: "13. Bxc6 — Eliminate knight.",
      26: "14. Qxc6 — Tactical Punishment: White nets a pawn and controls the board."
    }
  },
  {
    id: 'london-punish-grunfeld-cxd4',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian-grunfeld',
    name: 'London System – Grünfeld 4...c5 / Kingside Overextension Punished',
    shortName: 'Grünfeld 13. Nxg5! Strike',
    category: 'Kingside Destruction',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c3 c5 6. Nbd2 cxd4 7. exd4 O-O 8. Bd3 Nc6 9. O-O Nh5 10. Be3 f5 11. Bg5 h6 12. Bh4 g5 13. Nxg5',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c3 c5 6. Nbd2 cxd4 7. exd4 O-O 8. Bd3 Nc6 9. O-O Nh5 10. Be3 f5 11. Bg5 h6 12. Bh4 g5 13. Nxg5 hxg5 14. Qxh5 gxh4 15. Nf3 e6 16. Ng5 Rf6 17. Rae1',
    fullAnnotation: 'Black plays an unsound kingside overextension with 10...f5 and 12...g5?. White uncorks 13. Nxg5! sacrificing a knight to rip open Black\'s shattered king defenses with decisive mating threats on h7.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. Nf3 — Development.",
      8: "5. c3 — Reinforce center.", 10: "6. Nbd2 — Standard setup.", 12: "7. exd4 — Maintain central clamp.",
      14: "8. Bd3 — Aim directly at h7.", 16: "9. O-O — Castle safely.", 18: "10. Be3 — Bishop retreats flexibly.",
      20: "11. Bg5 — Pin the queen.", 22: "12. Bh4 — Prophylactic retreat.",
      23: "Blunder: 12...g5? fatally overextends Black's kingside pawn barrier.",
      24: "13. Nxg5! — Tactical Punishment: Knight sacrifice demolishes Black's overextended pawns!",
      26: "14. Qxh5 — Regain material and penetrate with queen.", 28: "15. Nf3 — Re-route attacker with tempo.",
      30: "16. Ng5 — Threatening Qh7+ and mate.", 32: "17. Rae1 — Bring final rook to the assault."
    }
  },
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
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. d5 — Seize central space.",
      5: "Blunder: 3...b5?! overextends queenside pawns before developing pieces.",
      6: "4. c4! — Strike at b5 pawn.", 8: "5. Nc3 — Rapid development.", 10: "6. e4 — Build strong center.", 12: "7. Bxc4 — Recapture pawn.",
      14: "8. Nf3 — Complete development.", 16: "9. O-O — Castle securely.", 18: "10. Nd2 — Prepare knight maneuver.",
      20: "11. Nxc4 — Recapture on c4.", 22: "12. Re1 — Seize the e-file.", 24: "13. Na5! — Tactical Punishment: Dominating outpost on c6 incoming!"
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
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Granite wall.", 6: "4. Nf3 — Develop knight.",
      8: "5. c3 — Solidify d4.", 10: "6. Nbd2 — Reroute option.", 12: "7. Bd3 — Aim at h7.",
      13: "Blunder: 7...Ne4? leaps forward prematurely without supporting pieces.",
      14: "8. Nxe4! — Eliminate premature knight.", 16: "9. Nd2 — Kick bishop with tempo.", 18: "10. e4 — Occupy center.",
      20: "11. Bb5 — Provoke c6 weakening.", 22: "12. Bd3 — Safe retreat.", 24: "13. Qg4! — Tactical Punishment: Triple threat on g7 and h6."
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
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. Nf3 — Develop knight.",
      8: "5. h3 — Prophylaxis.", 10: "6. Nbd2 — Develop pieces.", 12: "7. Bd3 — Aim at king.",
      14: "8. g4! — Tactical Punishment: Blast open the g-file against the Dutch defense!",
      16: "9. gxf5 — Clear lines.", 18: "10. Rg1 — Seize the open g-file.", 20: "11. Qe2 — Connect rooks.",
      22: "12. O-O-O — Opposite-side castling gives White overwhelming attack."
    }
  },
  {
    id: 'london-punish-b2-grab',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London System – Greedy 4...Qxb2? Poisoned Pawn Punished',
    shortName: 'Jobava 4...Qxb2 Trapped',
    category: 'Queen Trap',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4 e6 13. exd5 exd5 14. Re2+ Kd8 15. Nf3',
    fullAnnotation: 'Black greedily snatches the b2 pawn with 4...Qxb2?. White traps the queen with 5. Nb5! and 7. Rc1, leaving Black hopelessly behind in development.',
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.",
      6: "4. Nc3 — Aggressive knight deployment.",
      7: "Blunder: 4...Qxb2? grabs the classic poisoned pawn while trailing in development.",
      8: "5. Nb5! — Tactical Punishment: Threaten devastating Nc7+ fork.", 10: "6. a3! — Restrict queen escape.",
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
    annotations: {
      0: "1. d4 — Queen's pawn.", 2: "2. Bf4 — London Bishop.", 4: "3. e3 — Solid base.", 6: "4. exd4 — Center control.",
      8: "5. Nc3 — Rapid knight deployment.", 10: "6. Nf3 — Complete development.",
      11: "Blunder: 6...Qxb2? falls for the queen trap.",
      12: "7. Nb5! — Tactical Punishment: Double threat on c7.", 14: "8. Nd2 — Safe block.", 16: "9. Rb1 — Attack queen.",
      18: "10. Rxb4! — Tactical exchange sacrifice.", 20: "11. Nc7+ — Decisive fork.", 22: "12. Nxa8 — Pocket corner rook.",
      24: "13. Ke2 — Step out of check.", 26: "14. Ke1 — White emerges with an extra rook and complete safety."
    }
  },

  // =========================================================================
  // 3. RUY LOPEZ (15 lines)
  // =========================================================================
  {
    id: 'ruy-lopez-punish-berlin-greedy-nc6',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin-open',
    name: 'Ruy Lopez – Berlin 5...Nd6 / 13. e6! Kingside Rip',
    shortName: 'Berlin 13. e6! Kingside Rip',
    category: 'Tactical Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Be6 10. Rd1+ Ke8 11. Ng5 Bc4 12. b3 Ba6 13. e6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Be6 10. Rd1+ Ke8 11. Ng5 Bc4 12. b3 Ba6 13. e6 fxe6 14. Nxe6 Bd6 15. Re1 Kd7 16. Bb2 Rae8 17. Ng5',
    fullAnnotation: 'Black tries to consolidate the Berlin endgame passively. White shatters Black\'s pawn shelter with 13. e6! and dominates the open files.',
    annotations: {
      0: "1. e4 — Open game.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez Bishop.", 6: "4. O-O — Castle into safety.",
      8: "5. d4 — Center break.", 10: "6. Bxc6 — Ruin Black's pawn structure.", 12: "7. dxe5 — Outpost on e5.",
      14: "8. Qxd8+ — Strip castling rights.", 16: "9. Nc3 — Rapid mobilization.", 18: "10. Rd1+ — Check driving king to e8.",
      20: "11. Ng5 — Attack e6 bishop.", 22: "12. b3 — Drive bishop away.",
      23: "Inaccuracy: 12...Ba6 leaves the bishop stranded on the queenside rim.",
      24: "13. e6! — Tactical Punishment: Rip open Black's e-file defenses!", 26: "14. Nxe6 — Re-establish dominant knight outpost.",
      28: "15. Re1 — Seize the e-file.", 30: "16. Bb2 — Coordinate heavy pieces.", 32: "17. Ng5 — Dominating position."
    }
  },
  {
    id: 'ruy-lopez-punish-berlin-early-d6',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin-open',
    name: 'Ruy Lopez – Berlin 4...d6 Passive Defense Punished',
    shortName: 'Berlin 4...d6 Punished',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bxc6 Bxc6 8. Qd3 exd4 9. Nxd4 Bd7 10. Bg5 O-O 11. Rae1 Re8 12. f4 h6 13. Bh4 Nh5 14. Bxe7 Qxe7 15. Nd5 Qd8 16. Qf3 Nf6 17. c4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bxc6 Bxc6 8. Qd3 exd4 9. Nxd4 Bd7 10. Bg5 O-O 11. Rae1 Re8 12. f4 h6 13. Bh4 Nh5 14. Bxe7 Qxe7 15. Nd5 Qd8 16. Qf3 Nf6 17. c4',
    fullAnnotation: 'Black chooses the passive 4...d6 Steinitz setup in the Berlin. White blasts open the center, posts a monster knight on d5, and controls the board.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. O-O — Castle.",
      7: "Inaccuracy: 4...d6?! is overly passive, locking the dark-squared bishop.",
      8: "5. d4 — Center break.", 10: "6. Nc3 — Rapid deployment.", 12: "7. Bxc6 — Trade off active piece.",
      14: "8. Qd3 — Defend e4.", 16: "9. Nxd4 — Central knight.", 18: "10. Bg5 — Pin knight.",
      20: "11. Rae1 — Centralize rooks.", 22: "12. f4! — Tactical Punishment: Launch Kingside pawn storm.",
      24: "13. Bh4 — Keep pressure.", 26: "14. Bxe7 — Trade bishops.", 28: "15. Nd5! — Irresistible knight outpost on d5.",
      30: "16. Qf3 — Attack f6.", 32: "17. c4 — Solidify central clamp."
    }
  },
  {
    id: 'ruy-lopez-punish-berlin-fishing-pole',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin-open',
    name: 'Ruy Lopez – Berlin 8...h6 Fishing Pole Trap Refuted',
    shortName: 'Berlin Fishing Pole Refuted',
    category: 'Trap Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5 h6 8. Bh4 d6 9. Qd3 Bg4 10. Nbd2 Qe7 11. Rfe1 Rad8 12. h3 Bh5 13. Bxc6 bxc6 14. Nc4 Bxf3 15. Qxf3 g5 16. Bg3 exd4 17. e5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5 h6 8. Bh4 d6 9. Qd3 Bg4 10. Nbd2 Qe7 11. Rfe1 Rad8 12. h3 Bh5 13. Bxc6 bxc6 14. Nc4 Bxf3 15. Qxf3 g5 16. Bg3 exd4 17. e5',
    fullAnnotation: 'Black tries to bait White with kingside fishing pole themes. White methodically dismantles Black\'s center with 17. e5! winning decisive material.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. O-O — Castle.",
      8: "5. c3 — Prepare d4.", 10: "6. d4 — Strike center.", 12: "7. Bg5 — Pin knight.",
      14: "8. Bh4 — Maintain pin.", 16: "9. Qd3 — Overprotect e4.", 18: "10. Nbd2 — Flexible development.",
      20: "11. Rfe1 — Control e-file.", 22: "12. h3 — Question bishop.", 24: "13. Bxc6 — Ruin pawn structure.",
      26: "14. Nc4 — Pressure e5 and b6.",
      27: "Blunder: 15...g5? dangerously exposes Black's own castled king.",
      28: "16. Bg3 — Bishop steps back safely.", 30: "17. e5! — Tactical Punishment: Central rip wins a piece on f6."
    }
  },
  {
    id: 'ruy-lopez-punish-closed-noahs-ark-reversed',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed-mainlines',
    name: 'Ruy Lopez – Closed 9...Na5 Noah\'s Ark Mistake Punished',
    shortName: 'Closed 9...Na5 Punished',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Bd7 14. Nf1 Rac8 15. Ne3 Rfe8 16. Bd2 Nc4 17. Nxc4 Qxc4 18. Bb3 Qc7 19. Ng5 Rf8 20. Rc1 Qb8 21. Rxc8 Qxc8 22. Bb4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Bd7 14. Nf1 Rac8 15. Ne3 Rfe8 16. Bd2 Nc4 17. Nxc4 Qxc4 18. Bb3 Qc7 19. Ng5 Rf8 20. Rc1 Qb8 21. Rxc8 Qxc8 22. Bb4',
    fullAnnotation: 'Black overextends queenside pieces in the Closed Ruy Lopez. White launches 19. Ng5! attacking f7, dominating c-file and diagonal.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Maintain pin.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Seize e-file.", 12: "7. Bb3 — Bishop retreat.", 14: "8. c3 — Prepare center.",
      16: "9. h3 — Prophylaxis.", 18: "10. Bc2 — Guard bishop.", 20: "11. d4 — Center clash.", 22: "12. Nbd2 — Knight maneuver.",
      24: "13. cxd4 — Symmetrical control.", 26: "14. Nf1 — Transfer to kingside.", 28: "15. Ne3 — Central post.",
      30: "16. Bd2 — Attack c4 knight.", 32: "17. Nxc4 — Eliminate knight.", 34: "18. Bb3 — Target f7.",
      36: "19. Ng5! — Tactical Punishment: Double attack on f7.", 38: "20. Rc1 — Control c-file.",
      40: "21. Rxc8 — Trade rooks.", 42: "22. Bb4 — Dominating bishop pair and pin on d6."
    }
  },
  {
    id: 'ruy-lopez-punish-closed-chigorin-mistake',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed-mainlines',
    name: 'Ruy Lopez – Chigorin 11...Nd7 Knight Misplacement Punished',
    shortName: 'Chigorin 11...Nd7 Punished',
    category: 'Positional Squeeze',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nd7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 Nb4 17. Bb1 Bb7 18. a3 Nc6 19. Bd3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nd7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 Nb4 17. Bb1 Bb7 18. a3 Nc6 19. Bd3',
    fullAnnotation: 'Black plays an uncoordinated Chigorin knight shuffle. White drives Black\'s knights back with tempo and targets the weak b5 pawn.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Control e-file.", 12: "7. Bb3 — Retreat.", 14: "8. c3 — Prepare center.",
      16: "9. h3 — Prophylaxis.", 18: "10. Bc2 — Guard bishop.", 20: "11. d4 — Center strike.",
      21: "Inaccuracy: 11...Nd7 misplaces the knight away from the center.",
      22: "12. Nbd2 — Reroute knight.", 24: "13. cxd4 — Control d4.", 26: "14. Nb3 — Guard d4.",
      28: "15. Be3 — Develop bishop.", 30: "16. Nbd2 — Retreat knight securely.", 32: "17. Bb1 — Preserve bishop.",
      34: "18. a3! — Kick black knight back to passivity.", 36: "19. Bd3 — Tactical Punishment: Double attack on b5 pawn."
    }
  },
  {
    id: 'ruy-lopez-punish-closed-early-b5-d5',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed-mainlines',
    name: 'Ruy Lopez – Pseudo-Marshall 8...d5? Blunder Punished',
    shortName: 'Pseudo-Marshall Refuted',
    category: 'Pawn Grab Punishment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3 Rae8 17. Nd2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3 Rae8 17. Nd2',
    fullAnnotation: 'Black plays a flawed Marshall Attack without understanding the move order. White captures the e5 pawn and consolidates a winning position.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Seize e-file.", 12: "7. Bb3 — Safe diagonal.", 14: "8. c3 — Prepare center.",
      15: "Blunder: 8...d5? falls into an inferior Marshall setup where White retains an extra pawn.",
      16: "9. exd5 — Liquidate center.", 18: "10. Nxe5! — Tactical Punishment: Pocket e5 pawn.",
      20: "11. Rxe5 — Rook controls e-file.", 22: "12. d4 — Classical central dominance.",
      24: "13. Re1 — Safe retreat.", 26: "14. g3 — Nullify queen check.", 28: "15. Be3 — Complete development.",
      30: "16. Qd3 — Queen controls f1-a6 diagonal.", 32: "17. Nd2 — White has an extra pawn and an unshakeable defense."
    }
  },
  {
    id: 'ruy-lopez-punish-marshall-premature-f5',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall-anti',
    name: 'Ruy Lopez – Marshall 9...e4 Overextension Dismantled',
    shortName: 'Marshall 9...e4 Dismantled',
    category: 'Material Domination',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4 10. dxc6 exf3 11. Qxf3 Bg4 12. Qg3 Re8 13. f3 Bd6 14. Qf2 Rxe1+ 15. Qxe1 Bf5 16. d4 Qe8 17. Qxe8+ Rxe8 18. Kf2 Bxh2 19. Bg5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4 10. dxc6 exf3 11. Qxf3 Bg4 12. Qg3 Re8 13. f3 Bd6 14. Qf2 Rxe1+ 15. Qxe1 Bf5 16. d4 Qe8 17. Qxe8+ Rxe8 18. Kf2 Bxh2 19. Bg5',
    fullAnnotation: 'Black tries the desperate 9...e4 pawn thrust in the Marshall. White collects the c6 knight, exchanges queens, and secures a decisive +3.5 endgame.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Seize e-file.", 12: "7. Bb3 — Safe diagonal.", 14: "8. c3 — Prepare center.",
      16: "9. exd5 — Pawn capture.",
      17: "Blunder: 9...e4? is an unsound gamble leaving the c6 knight hanging.",
      18: "10. dxc6! — Tactical Punishment: Win piece on c6.", 20: "11. Qxf3 — Reclaim f3 pawn.",
      22: "12. Qg3 — Queen steps out of attack.", 24: "13. f3 — Drive bishop away.", 26: "14. Qf2 — Solid block.",
      28: "15. Qxe1 — Recapture rook.", 30: "16. d4 — Solidify center.", 32: "17. Qxe8+ — Trade queens cleanly.",
      34: "18. Kf2 — Step up with king.", 36: "19. Bg5 — Decisive extra piece in endgame."
    }
  },
  {
    id: 'ruy-lopez-punish-marshall-qh3-refutation',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall-anti',
    name: 'Ruy Lopez – Marshall 14...Qh4 / 15...Nxf2? King Hunt Refuted',
    shortName: 'Marshall 15...Nxf2 Refuted',
    category: 'Mating Defense',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1 Ng4 14. h3 Qh4 15. Qf3 Nxf2 16. Re2 Nxh3+ 17. gxh3 Bxh3 18. Re4 Rae8 19. Bxf7+ Kh8 20. Rxe8 Rxe8 21. Bxe8',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1 Ng4 14. h3 Qh4 15. Qf3 Nxf2 16. Re2 Nxh3+ 17. gxh3 Bxh3 18. Re4 Rae8 19. Bxf7+ Kh8 20. Rxe8 Rxe8 21. Bxe8',
    fullAnnotation: 'Black uncorks the famous Marshall sacrifice 15...Nxf2?!. White defends with razor precision (18. Re4! and 19. Bxf7+!) and ends up a full queen and rook ahead.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Seize e-file.", 12: "7. Bb3 — Retreat.", 14: "8. c3 — Prepare center.",
      16: "9. exd5 — Liquidate center.", 18: "10. Nxe5 — Capture e5.", 20: "11. Rxe5 — Seize e-file.",
      22: "12. d4 — Center pawn.", 24: "13. Re1 — Safe retreat.", 26: "14. h3 — Question knight.",
      28: "15. Qf3 — Defend f2 with queen.",
      29: "Blunder: 15...Nxf2? sacrifices material on unsound mating hopes.",
      30: "16. Re2! — Cold-blooded defense.", 32: "17. gxh3 — Capture knight.",
      34: "18. Re4! — Tactical Punishment: Intercept and harass Black's queen.",
      36: "19. Bxf7+! — Decisive intermediate counter-check!", 38: "20. Rxe8 — Trade rooks.", 40: "21. Bxe8 — White wins with overwhelming material."
    }
  },
  {
    id: 'ruy-lopez-punish-marshall-8-a4-b4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall-anti',
    name: 'Ruy Lopez – Anti-Marshall 8. a4 b4 Overextension Refuted',
    shortName: 'Anti-Marshall 8. a4 Refuted',
    category: 'Outpost Domination',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d4 d6 10. dxe5 dxe5 11. Nbd2 Bg4 12. h3 Bh5 13. g4 Bg6 14. Qe2 Nd7 15. Bd5 Ndb8 16. Nc4 Bd6 17. Bg5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d4 d6 10. dxe5 dxe5 11. Nbd2 Bg4 12. h3 Bh5 13. g4 Bg6 14. Qe2 Nd7 15. Bd5 Ndb8 16. Nc4 Bd6 17. Bg5',
    fullAnnotation: 'In the Anti-Marshall 8. a4, Black pushes 8...b4 leaving the c6 knight pinned. White exploits this with 15. Bd5! and Nc4 dominating.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.", 10: "6. Re1 — Seize e-file.", 12: "7. Bb3 — Retreat.", 14: "8. a4! — Anti-Marshall wing strike.",
      15: "Inaccuracy: 8...b4 overextends Black's queenside structure.",
      16: "9. d4 — Center break.", 18: "10. dxe5 — Liquidate center.", 20: "11. Nbd2 — Knight maneuver.",
      22: "12. h3 — Challenge bishop.", 24: "13. g4 — Expand on kingside.", 26: "14. Qe2 — Centralize queen.",
      28: "15. Bd5! — Tactical Punishment: Deadly pin on c6 knight and a8 rook.", 30: "16. Nc4 — Triple attack on e5.",
      32: "17. Bg5 — White dominates every sector of the board."
    }
  },
  {
    id: 'ruy-lopez-punish-steinitz-trap',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines-gambits',
    name: 'Ruy Lopez – Old Steinitz 3...d6 Center Collapse Punished',
    shortName: 'Old Steinitz 3...d6 Punished',
    category: 'Center Demolition',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 exd4 8. Nxd4 O-O 9. Bxc6 bxc6 10. Qf3 Re8 11. e5 dxe5 12. Nxc6 Bxc6 13. Qxc6 Bd6 14. Bg5 h6 15. Bxf6 Qxf6 16. Ne4 Qe6 17. Rad1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 exd4 8. Nxd4 O-O 9. Bxc6 bxc6 10. Qf3 Re8 11. e5 dxe5 12. Nxc6 Bxc6 13. Qxc6 Bd6 14. Bg5 h6 15. Bxf6 Qxf6 16. Ne4 Qe6 17. Rad1',
    fullAnnotation: 'Black chooses the cramped Old Steinitz Defense (3...d6). White explodes the center with 11. e5! winning a pawn and paralyzing Black.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.",
      5: "Inaccuracy: 3...d6?! leads to a passive, cramped position.",
      6: "4. d4 — Immediate central strike.", 8: "5. Nc3 — Rapid deployment.", 10: "6. O-O — Castle securely.",
      12: "7. Re1 — Control e-file.", 14: "8. Nxd4 — Central knight.", 16: "9. Bxc6 — Ruin pawn structure.",
      18: "10. Qf3 — Double attack on c6 and f7.", 20: "11. e5! — Tactical Punishment: Central dynamite shatters Black.",
      22: "12. Nxc6 — Win c6 square.", 24: "13. Qxc6 — Queen infiltrates.", 26: "14. Bg5 — Pin knight.",
      28: "15. Bxf6 — Eliminate defender.", 30: "16. Ne4 — Central knight outpost.", 32: "17. Rad1 — Total positional crush."
    }
  },
  {
    id: 'ruy-lopez-punish-schliemann-gambit',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines-gambits',
    name: 'Ruy Lopez – Schliemann Gambit 3...f5 Refuted (4. Nc3!)',
    shortName: 'Schliemann 3...f5 Refuted',
    category: 'Gambit Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5 8. Qe2 Nf6 9. f4 Qxf4 10. d4 Qh4+ 11. g3 Qh3 12. Ne5+ c6 13. Bc4 Be6 14. Bg5 O-O-O 15. O-O-O Bd5 16. Rhf1 Qe6 17. Bxd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5 8. Qe2 Nf6 9. f4 Qxf4 10. d4 Qh4+ 11. g3 Qh3 12. Ne5+ c6 13. Bc4 Be6 14. Bg5 O-O-O 15. O-O-O Bd5 16. Rhf1 Qe6 17. Bxd5',
    fullAnnotation: 'Black plays the radical Schliemann Gambit (3...f5?!). White refutes it with 4. Nc3! and 6. Nxe5!, completely conquering the center.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.",
      5: "Blunder: 3...f5?! is an overaggressive gambit exposing Black's uncastled king.",
      6: "4. Nc3! — The most solid refutation.", 8: "5. Nxe4 — Recapture.",
      10: "6. Nxe5! — Tactical Punishment: Exploit the pinned c6 knight.", 12: "7. Nxc6 — Discover check threat.",
      14: "8. Qe2 — Pin e4 pawn.", 16: "9. f4 — Defend e4.", 18: "10. d4 — Center clash.",
      20: "11. g3 — Kick queen.", 22: "12. Ne5+ — Check!", 24: "13. Bc4 — Target f7.",
      26: "14. Bg5 — Pin f6 knight.", 28: "15. O-O-O — Castle into safety.", 30: "16. Rhf1 — Bring last rook into battle.",
      32: "17. Bxd5 — White is a clean piece and pawn up with absolute king safety."
    }
  },
  {
    id: 'ruy-lopez-punish-cozio-defense',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines-gambits',
    name: 'Ruy Lopez – Cozio 3...Nge7 / 8...Qh5? Queen Sorite Punished',
    shortName: 'Cozio 8...Qh5? Punished',
    category: 'Queen Harassment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. c3 d5 5. exd5 Qxd5 6. d4 exd4 7. cxd4 Bd7 8. Nc3 Qh5 9. d5 Ne5 10. Nxe5 Qxe5+ 11. Be3 O-O-O 12. O-O Nf5 13. Re1 Nxe3 14. Rxe3 Qf4 15. Bxd7+ Rxd7 16. Re8+ Rd8 17. Qe2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. c3 d5 5. exd5 Qxd5 6. d4 exd4 7. cxd4 Bd7 8. Nc3 Qh5 9. d5 Ne5 10. Nxe5 Qxe5+ 11. Be3 O-O-O 12. O-O Nf5 13. Re1 Nxe3 14. Rxe3 Qf4 15. Bxd7+ Rxd7 16. Re8+ Rd8 17. Qe2',
    fullAnnotation: 'Black tries the passive Cozio Defense with 3...Nge7 followed by an adventurous queen sortie. White pushes 9. d5! and invades on e8.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.",
      5: "Inaccuracy: 3...Nge7 blocks the f8 bishop.",
      6: "4. c3 — Prepare central d4 strike.", 8: "5. exd5 — Liquidate center.", 10: "6. d4 — Center clash.", 12: "7. cxd4 — Dominate center.",
      14: "8. Nc3 — Attack queen.", 16: "9. d5! — Tactical Punishment: Central push drives Black's knight into exile.",
      18: "10. Nxe5 — Eliminate defender.", 20: "11. Be3 — Develop with tempo.", 22: "12. O-O — Castle.",
      24: "13. Re1 — Seize e-file.", 26: "14. Rxe3 — Rook active on 3rd rank.", 28: "15. Bxd7+ — Eliminate bishop.",
      30: "16. Re8+! — Lethal back-rank penetration.", 32: "17. Qe2 — Double heavy pieces with decisive checkmating attack."
    }
  },
  {
    id: 'ruy-lopez-punish-exchange-early-bg4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange-modern',
    name: 'Ruy Lopez Exchange – 5...Bg4 / 6...h5 Fishing Pole Refuted',
    shortName: 'Exchange 5...Bg4 Refuted',
    category: 'Counter-Sacrifice Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 Ng6 10. d4 Bd6 11. hxg4 hxg4 12. Nh2 exd4 13. e5 Nxe5 14. Nxg4 Qh4 15. Kf1 Qh1+ 16. Ke2 Qxg2 17. Nxe5 Bxe5 18. Kd3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 Ng6 10. d4 Bd6 11. hxg4 hxg4 12. Nh2 exd4 13. e5 Nxe5 14. Nxg4 Qh4 15. Kf1 Qh1+ 16. Ke2 Qxg2 17. Nxe5 Bxe5 18. Kd3',
    fullAnnotation: 'Black tries the notorious 6...h5 fishing pole trap in the Exchange Ruy Lopez. White calmly takes the bishop, marches the king to d3, and wins a full piece.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — Castle into safety.", 10: "6. h3 — Challenge the bishop.",
      11: "Blunder: 6...h5?! attempts the infamous amateur trap, but it fails against accurate play.",
      12: "7. d3 — Solidify center.", 14: "8. Nbd2 — Guard against tricks.", 16: "9. Re1 — Rook to e-file.",
      18: "10. d4 — Center counter-strike.", 20: "11. hxg4! — Tactical Punishment: Accept sacrifice with cold precision.",
      22: "12. Nh2 — Knight blocks h-file.", 24: "13. e5! — Central break cuts off the black bishop.",
      26: "14. Nxg4 — Eliminate danger.", 28: "15. Kf1 — Step king out of check.", 30: "16. Ke2 — King escapes.",
      32: "17. Nxe5 — Pocket another piece.", 34: "18. Kd3! — King marches to absolute safety; White is a full piece up."
    }
  },
  {
    id: 'ruy-lopez-punish-exchange-endgame-f6',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange-modern',
    name: 'Ruy Lopez Exchange – Passive Endgame 12...f5? Dismantled',
    shortName: 'Exchange Endgame Punished',
    category: 'Endgame Domination',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd7 8. Be3 O-O-O 9. Nc3 Bd6 10. O-O-O Ne7 11. f3 Rhe8 12. Bf2 f5 13. Bh4 fxe4 14. Nxe4 Bf4+ 15. Kb1 h6 16. Rhe1 g5 17. Bg3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd7 8. Be3 O-O-O 9. Nc3 Bd6 10. O-O-O Ne7 11. f3 Rhe8 12. Bf2 f5 13. Bh4 fxe4 14. Nxe4 Bf4+ 15. Kb1 h6 16. Rhe1 g5 17. Bg3',
    fullAnnotation: 'In the Exchange endgame, Black weakens the e7 knight with 12...f5. White pins Black\'s pieces with 13. Bh4! and dominates the bishop pair.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Bxc6 — Exchange Variation.",
      8: "5. d4 — Center liquidation.", 10: "6. Qxd4 — Queen central trade.", 12: "7. Nxd4 — The famous 4 vs 3 kingside pawn majority.",
      14: "8. Be3 — Complete development.", 16: "9. Nc3 — Rapid queenside castling.", 18: "10. O-O-O — Castle queenside.",
      20: "11. f3 — Lock center.", 22: "12. Bf2 — Prophylactic bishop retreat.",
      23: "Inaccuracy: 12...f5?! opens up lethal pins along the h4-d8 diagonal.",
      24: "13. Bh4! — Tactical Punishment: Pin the e7 knight decisively.", 26: "14. Nxe4 — Dominate center.",
      28: "15. Kb1 — Calm king step.", 30: "16. Rhe1 — Seize the e-file.", 32: "17. Bg3 — White\'s kingside majority is unstoppable."
    }
  },
  {
    id: 'ruy-lopez-punish-exchange-greedy-c5',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange-modern',
    name: 'Ruy Lopez Exchange – Greedy 7...c5 / 10...b5 Overextension Punished',
    shortName: 'Exchange 7...c5 Punished',
    category: 'Knight Outpost Domination',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Na5 b5 11. Be3 c4 12. a4 Bd7 13. Nb7 Be7 14. axb5 Bxb5 15. Nc3 Bc6 16. Na5 Bd7 17. Nd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Na5 b5 11. Be3 c4 12. a4 Bd7 13. Nb7 Be7 14. axb5 Bxb5 15. Nc3 Bc6 16. Na5 Bd7 17. Nd5',
    fullAnnotation: 'Black overextends queenside pawns with 7...c5 and 10...b5. White infiltrates with 10. Na5! and 17. Nd5!, completely ripping apart Black\'s structure.',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bb5 — Ruy Lopez.", 6: "4. Bxc6 — Exchange Variation.",
      8: "5. O-O — King safe.", 10: "6. d4 — Center clash.", 12: "7. Nxd4 — Central knight.",
      13: "Inaccuracy: 7...c5?! permanently weakens the d5 and d6 squares.",
      14: "8. Nb3 — Re-route knight.", 16: "9. Rxd1 — Seize the d-file.", 18: "10. Na5! — Tactical Punishment: Infiltrate dark-square weaknesses.",
      20: "11. Be3 — Target c4.", 22: "12. a4 — Strike at b5 pawn.", 24: "13. Nb7 — Attack bishop.",
      26: "14. axb5 — Open a-file.", 28: "15. Nc3 — Rapid coordination.", 30: "16. Na5 — Retain pressure.",
      32: "17. Nd5! — Monster knight outpost on d5 threatens c7 fork and wins the game."
    }
  }
];

console.log(`Loaded ${allLines.length} candidate lines across Italian, London, Ruy Lopez...`);
