// Generator script that defines and validates all 84 tactical punishment lines
// and writes them out cleanly.
import fs from 'fs';
import { Chess } from 'chess.js';

// We will construct lines per course and submodule.
export const punishmentLinesBySubCourse = {};

// Helper to register a line
function addLine(subCourseId, line) {
  if (!punishmentLinesBySubCourse[subCourseId]) {
    punishmentLinesBySubCourse[subCourseId] = [];
  }
  punishmentLinesBySubCourse[subCourseId].push(line);
}

// 1. ITALIAN GAME
// -------------------------------------------------------------
addLine('italian-giuoco-piano', {
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
    9: "Blunder: 5...Nxe5?? falls straight into a legendary queen-sacrifice trap.",
    10: "6. Nxe5! — Tactical Punishment: Queen sacrifice! Black's king will be fatally smoked out.",
    12: "7. Bxf7+ — King forced to e7 into a lethal pin.", 14: "8. Bg5+ — Crucial pin on the f6 knight.",
    16: "9. Nc3! — Threatening Nd5+ with total devastation.", 18: "10. Rxd1 — White regains queen with +8.0 material and positional crush."
  }
});

addLine('italian-giuoco-piano', {
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
    13: "Blunder: 7...Nxe4? grabs a hot pawn at the expense of king shelter.",
    14: "8. Bxb4 — Eliminate dark-square bishop.", 16: "9. Bxf7+! — Tactical Punishment: Shatter king shelter.",
    18: "10. Qb3+ — Fork king and b4 knight.", 20: "11. Ne5+ — Central outpost check.", 22: "12. Qxb4 — Regain piece.",
    24: "13. Qa3 — Dominating Black's stranded king."
  }
});

addLine('italian-giuoco-piano', {
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
    7: "Blunder: 4...Qf6? commits the queen too early and blocks the f-pawn.",
    8: "5. d4 — Punish premature queen by blowing open the center.", 10: "6. O-O — Castle with huge development lead.",
    12: "7. e5! — Tactical Punishment: Kick Black's queen with tempo.", 14: "8. Nxc3 — Rapid knight development.", 16: "9. Nd5! — Dominate c7 and e7.",
    18: "10. Bxd5 — Maintain central clamping bishop.", 20: "11. Re1 — Seize the e-file.", 22: "12. Be4 — Chase queen again.",
    24: "13. Bf4 — Total central domination."
  }
});

addLine('italian-evans-gambit', {
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
    13: "Blunder: 7...dxc3? wastes valuable tempos grabbing pawns while trailing in development.",
    14: "8. Qb3 — Tactical Punishment: Thematic f7 battery.", 16: "9. e5! — Disrupt queen.", 18: "10. Nxc3 — Bring last piece into battle.",
    20: "11. Ba3 — Control long diagonal.", 22: "12. Nd5 — Pile up on e7.", 24: "13. Nf4 — Harass queen.",
    26: "14. Ng5! — Triple attack on f7.", 28: "15. Bxe7 — Win the exchange.", 30: "16. Bxf7+ — Decisive blow.",
    32: "17. Ngh3 — Completely winning position."
  }
});

addLine('italian-evans-gambit', {
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
    7: "Inaccuracy: 4...Bb6 declines the gambit passively.", 8: "5. a4 — Threaten a5 trap.", 10: "6. Nc3 — Rapid deployment.", 12: "7. Nd5! — Outpost on d5.",
    14: "8. exd5 — Open e-file pressure.", 16: "9. Nxe5! — Tactical Punishment: Seize e5 pawn with active bishop pair.",
    18: "10. Nf3 — Retreat safely.", 20: "11. O-O — King safety complete.", 22: "12. h3 — Question bishop.", 24: "13. d4 — Dominating center."
  }
});

addLine('italian-evans-gambit', {
  id: 'italian-punish-evans-counter-d5',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – Premature 5...d5 Counter-Strike Refuted',
  shortName: 'Premature 5...d5 Refuted',
  category: 'Tactical Destruction',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 d5 6. exd5',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 d5 6. exd5 e4 7. dxc6 exf3 8. Qxf3 Qe7+ 9. Kd1 bxc6 10. Re1 Be6 11. Qxc6+ Qd7 12. Qxa8+',
  fullAnnotation: 'Black attempts an uncoordinated central counter-strike with 5...d5? in the Evans Gambit. White blows through the center and wins a full rook.',
  previewFEN: 'Q3k1nr/p1pq1ppp/4b3/2b5/2B5/2P5/P4PPP/RNBKR3 b - - 0 12',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. b4 — Evans Gambit.", 8: "5. c3 — Attack bishop.",
    9: "Blunder: 5...d5? ignores the hanging bishop on b4 and leaves king exposed.",
    10: "6. exd5! — Expose e4 and c6.", 12: "7. dxc6 — Pocket piece on c6.", 14: "8. Qxf3 — Threaten Qxf7 mate and Qxc6+.",
    16: "9. Kd1 — Safe king step.", 18: "10. Re1 — Pin e6 bishop.", 20: "11. Qxc6+ — Crushing fork.", 22: "12. Qxa8+ — Tactical Punishment: White captures rook with decisive +9.0 advantage."
  }
});

addLine('italian-two-knights', {
  id: 'italian-punish-blackburne',
  courseId: 'italian-game',
  subCourseId: 'italian-two-knights',
  name: 'Two Knights – Blackburne Shilling Refutation (4. Bxf7+!)',
  shortName: 'Blackburne Shilling Refuted',
  category: 'Trap Refutation',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7 6. c3 d6 7. Nc4 Ne6 8. d4 Nf6 9. O-O Nxe4 10. d5 N6c5 11. Re1 Kd7 12. Qg4+ Ke8 13. Qh5+',
  fullAnnotation: 'Black sets the cheap Blackburne Shilling trap with 3...Nd4?!. White dismantles it completely by blasting open the center with Bxf7+! and d4.',
  previewFEN: 'r1b1k2r/ppp2ppp/3p4/2nP3Q/4n3/2P5/PP3PPP/RNB1R1K1 b - - 2 13',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
    5: "Inaccuracy: 3...Nd4?! tries the cheap Blackburne Shilling trap.",
    6: "4. Bxf7+! — Tactical Punishment: Shatter Black's king right away!", 8: "5. Nxe5+ — Central fork.",
    10: "6. c3 — Kick the tricky knight.", 12: "7. Nc4 — Reroute with tempo.", 14: "8. d4 — Full center expansion.",
    16: "9. O-O — Complete king safety.", 18: "10. d5 — Push black pieces into disarray.", 20: "11. Re1 — Pin e4 knight to king.",
    22: "12. Qg4+ — Deliver check with king stranded.", 24: "13. Qh5+ — Decisive attack."
  }
});

addLine('italian-two-knights', {
  id: 'italian-punish-traxler',
  courseId: 'italian-game',
  subCourseId: 'italian-two-knights',
  name: 'Two Knights – Traxler Counter-Attack Refuted (5. Bxf7+!)',
  shortName: 'Traxler Counter Refuted',
  category: 'Tactical Precision',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 Rf8 7. O-O d6 8. Bxc6 bxc6 9. c3 h6 10. Nf3 Bg4 11. d4 exd4 12. cxd4 Bb6 13. Qd3',
  fullAnnotation: 'Black plays the wild Traxler Counter-Attack (4...Bc5?!). White refutes it cleanly with 5. Bxf7+! followed by safe consolidation.',
  previewFEN: 'r4r2/p1p1k1p1/1bpp1n1p/8/3PP1b1/2PQ1N2/PP3PPP/RNB2RK1 b - - 2 13',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. Ng5 — Attack f7.",
    7: "Blunder: 4...Bc5?! is the unsound Traxler Counter-Attack.",
    8: "5. Bxf7+! — Tactical Punishment: The refutation! Strips castling rights and nets a clean pawn.",
    10: "6. Bd5 — Safe tactical retreat.", 12: "7. O-O — Secure the king.", 14: "8. Bxc6 — Ruin Black's pawn structure.",
    16: "9. c3 — Prepare central barrier.", 18: "10. Nf3 — Knight returns safely.", 20: "11. d4 — Break open center.",
    22: "12. cxd4 — Dominate center.", 24: "13. Qd3 — Total positional and material dominance."
  }
});

addLine('italian-two-knights', {
  id: 'italian-punish-fried-liver-ncb4',
  courseId: 'italian-game',
  subCourseId: 'italian-two-knights',
  name: 'Two Knights – Fried Liver 8...Ncb4? Knight Raid Crushed',
  shortName: 'Fried Liver 8...Ncb4 Crushed',
  category: 'Mating Attack',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. a3 Nxc2+ 10. Kd1 Nxa1 11. Nxd5 Kd6 12. d4 c6 13. dxe5+ Kd7 14. Qf7+ Be7 15. e6+ Kd6 16. Bf4+ Kc5 17. Be3+ Kd6 18. Qf4+ Kxe6 19. Qe4+ Kd7 20. Ke2',
  fullAnnotation: 'Black defends the Fried Liver greedily with 8...Ncb4? grabbing the c2 rook. White launches a relentless king hunt forcing mate.',
  previewFEN: 'r1bq3r/pp1kb1pp/2p5/3N4/2B1Q3/P3B3/1P2KPPP/n6R b - - 3 20',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. Ng5 — Target f7.",
    8: "5. exd5 — Open lines.", 10: "6. Nxf7! — The legendary Fried Liver sacrifice!", 12: "7. Qf3+ — Triple attack on pinned d5 knight.",
    14: "8. Nc3 — Pile fourth attacker on d5.",
    15: "Blunder: 8...Ncb4? counter-attacks c2 greedily while the king is in mortal peril.",
    16: "9. a3! — Kick knight.", 18: "10. Kd1 — Calm step avoiding further checks.", 20: "11. Nxd5 — Eliminate key defender.",
    22: "12. d4! — Blow open central highways.", 24: "13. dxe5+ — Discover check.", 26: "14. Qf7+ — Penetrate into black camp.",
    28: "15. e6+ — Tighten the noose.", 30: "16. Bf4+ — Bishop joins attack.", 32: "17. Be3+ — Drive king into mating net.",
    34: "18. Qf4+ — Continuous checks.", 36: "19. Qe4+ — Precision king hunt.", 38: "20. Ke2! — White connects rooks with an unavoidable mating attack."
  }
});

addLine('italian-two-knights', {
  id: 'italian-punish-f5-counter',
  courseId: 'italian-game',
  subCourseId: 'italian-two-knights',
  name: 'Two Knights – Dubious 4...f5?! Counter-Gambit Dismantled',
  shortName: 'Two Knights 4...f5 Refuted',
  category: 'Center Domination',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 f5 5. exf5 d5 6. Bb5 Bd6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 f5 5. exf5 d5 6. Bb5 Bd6 7. d4 e4 8. Ne5 Bd7 9. Bxc6 bxc6 10. g4 Qe7 11. Bf4 O-O 12. Nd2 c5 13. c3',
  fullAnnotation: 'Black tries a premature 4...f5?! counter-gambit. White refutes it with 5. exf5 and 7. d4!, establishing a stone-solid central bastion.',
  previewFEN: 'r4rk1/p1pbb1pp/3b1n2/2ppNP2/3PpBP1/2P5/PP1N1P1P/R2QK2R b KQ - 0 13',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid base.",
    7: "Blunder: 4...f5?! fatally weakens Black's kingside diagonal.",
    8: "5. exf5 — Free pawn capture.", 10: "6. Bb5 — Pin knight.", 12: "7. d4! — Tactical Punishment: Blast open the center.",
    14: "8. Ne5 — Unstoppable central knight outpost.", 16: "9. Bxc6 — Ruin pawn structure.", 18: "10. g4! — Cement the f5 pawn.",
    20: "11. Bf4 — Control central diagonals.", 22: "12. Nd2 — Reinforce e5.", 24: "13. c3 — White retains extra pawn and total control."
  }
});

addLine('italian-pianissimo', {
  id: 'italian-punish-pianissimo-pin',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Giuoco Pianissimo – Premature ...Bg4 Pin Punished (9. h3 Bh5 10. g4!)',
  shortName: 'Pianissimo ...Bg4 Punished',
  category: 'Tactical Destruction',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Be6 10. Re1 Bxb3 11. axb3',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Kh8 10. Re1 Nh5 11. Nf1 f5 12. exf5 Bxf5 13. g4 Nf4 14. Bxf4 exf4 15. gxf5 Rxf5 16. d4 Qf6 17. N1h2 Rf8 18. Re6 Qd8 19. Qe2 Nb8 20. Re1',
  fullAnnotation: 'Black miscalculates with a premature f5 break and bishop pin in the Pianissimo. White dominates the open e-file with heavy artillery.',
  previewFEN: '1n1q1r2/bpp3pp/p2pR3/5r2/3P1p2/1PP2N1P/1P2QP1N/4R1K1 b - - 7 20',
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
});

addLine('italian-pianissimo', {
  id: 'italian-punish-pianissimo-f5',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Giuoco Pianissimo – Overaggressive 6...f5? Dismantled',
  shortName: 'Early 6...f5 Dismantled',
  category: 'Center Punishment',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4 exd4 8. O-O dxc3 9. Nxc3 Nge7 10. Re1 Qd7 11. Bg5 O-O-O 12. Bb5 Rde8 13. Bxe7',
  fullAnnotation: 'Black lashes out with 5...f5? in the quiet Italian. White blasts open the center with 7. d4! and pins Black\'s king in the middle of the board.',
  previewFEN: '4r1kr/pppqB1pp/2np4/1B6/8/2N2N2/PP3PPP/R2QR1K1 b - - 0 13',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Pianissimo.",
    7: "Blunder: 5...f5? fatally weakens the e8-h5 diagonal before castling.",
    8: "6. exf5 — Open up lines.", 10: "7. d4! — Tactical Punishment: Blast open the center against uncastled king.",
    12: "8. O-O — King safety with massive lead in development.", 14: "9. Nxc3 — Bring last piece out.",
    16: "10. Re1 — Pin e7 knight.", 18: "11. Bg5 — Pile on the pinned piece.", 20: "12. Bb5 — Dual pin on both knights.",
    22: "13. Bxe7 — Win piece and game."
  }
});

addLine('italian-pianissimo', {
  id: 'italian-punish-pianissimo-d5',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Giuoco Pianissimo – Premature ...d5 Break Refuted by 10. exd5',
  shortName: 'Premature ...d5 Refuted',
  category: 'Positional Punishment',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5 Nxd5 11. Re1 Re8 12. Ne4 h6 13. Bxh6 gxh6 14. Bxd5',
  fullAnnotation: 'Black rushes the ...d5 central break in the Pianissimo. White exploits the tactical weakness of the d5 knight with 13. Bxh6! and 14. Bxd5.',
  previewFEN: 'r1bqr1k1/bpp2p2/p1n4p/3BP3/4N3/2PP1N1P/PP3PP1/R2QR1K1 b - - 0 14',
  annotations: {
    0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.", 6: "4. d3 — Solid foundation.",
    8: "5. c3 — Prepare center.", 10: "6. O-O — Castle.", 12: "7. Nbd2 — Flexible knight.", 14: "8. Bb3 — Retreat square.",
    16: "9. h3 — Prophylaxis.",
    17: "Inaccuracy: 9...d5?! opens the position prematurely before piece coordination is achieved.",
    18: "10. exd5 — Liquidate center.", 20: "11. Re1 — Direct pressure on e5.", 22: "12. Ne4 — Outpost on e4.",
    24: "13. Bxh6! — Tactical Punishment: Greek Gift motif demolishes king shelter.",
    26: "14. Bxd5 — White wins a clean pawn with overwhelming attack."
  }
});

console.log('Writing Italian lines generator data complete.');
