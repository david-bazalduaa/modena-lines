/* ============================================================
   TWO KNIGHTS DEFENSE REPERTOIRE (25 MASTER LINES)
   ============================================================ */

export const twoKnightsLines = [
  {
    id: 'two-knights-fried-liver',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver Attack (6. Nxf7)',
    shortName: 'Fried Liver Attack',
    category: 'Tactical Sacrifice',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5 h6 11. Bxe7 Bxe7 12. O-O-O Rf8 13. Qe4 Bg5+ 14. Kb1',
    fullAnnotation: 'White sacrifices a piece on f7 to drag Black\'s king into the center under a relentless pin.',
    previewFEN: 'r1bq1r2/pp2b1p1/2p1k2p/3np1b1/2BPQ3/2N5/PPP2PPP/1K1R3R w - - 3 15',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5! — Assault f7 square.", 8: "5. exd5 — Open d-file.", 10: "6. Nxf7!! — Fried Liver Sacrifice!",
      12: "7. Qf3+ — Queen check with tempo.", 14: "8. Nc3 — Pressure pinned d5 knight.", 16: "9. d4 — Rip open center files.",
      18: "10. Bg5 — Pin e7 knight.", 20: "11. Bxe7 — Eliminate key defender.", 22: "12. O-O-O — Queenside castling direct on d-file.",
      24: "13. Qe4 — Devastating central queen threats.", 26: "14. Kb1 — Step king out of check; pins are decisive!"
    }
  },
  {
    id: 'two-knights-polerio',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio Defense (5...Na5)',
    shortName: 'Polerio Defense',
    category: 'Grandmaster Mainline',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 exd3 12. Nxd3 Qc7 13. b3 O-O 14. Bb2',
    fullAnnotation: 'The modern grandmaster defense. White keeps the extra pawn and prepares long diagonal pressure with Bb2.',
    previewFEN: 'r1b2rk1/p1q2pp1/2pb1n1p/n7/8/1P1N4/PBP1BPPP/RN1QK2R b KQ - 2 14',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Develop and attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Open d-file.", 10: "6. Bb5+ — Force c6.",
      12: "7. dxc6 — Pocket extra pawn.", 14: "8. Be2 — Solid retreat.", 16: "9. Nf3 — Knight steps back.",
      18: "10. Ne5 — Advanced knight outpost.", 20: "11. d4 — Solidify center.", 22: "12. Nxd3 — En passant capture.",
      24: "13. b3 — Prepare fianchetto.", 26: "14. Bb2 — Powerful long-diagonal bishop pressure!"
    }
  },
  {
    id: 'two-knights-fritz',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fritz Counter-Attack (5...Nd4)',
    shortName: 'Fritz Variation',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4 6. c3 b5 7. Bf1 Nxd5 8. Ne4 Ne6 9. Bxb5+ Bd7 10. Bxd7+ Qxd7 11. O-O Be7 12. d3 O-O',
    fullAnnotation: 'Black counter-attacks in the center with 5...Nd4. White solidly retreats with Bf1, maintains the extra pawn, and develops harmoniously.',
    previewFEN: 'r4rk1/p1pqbppp/4n3/3np3/4N3/2PP4/PP3PPP/RNBQ1RK1 w - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. exd5 — Central capture.", 10: "6. c3 — Kick d4 knight.",
      12: "7. Bf1 — Prophylactic retreat.", 14: "8. Ne4 — Central knight repositioning.", 16: "9. Bxb5+ — Cash in b5 pawn.",
      18: "10. Bxd7+ — Eliminate active bishop.", 20: "11. O-O — Castle safely.", 22: "12. d3 — Solid extra pawn advantage!"
    }
  },
  {
    id: 'two-knights-ulvestad',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Ulvestad Variation (5...b5)',
    shortName: 'Ulvestad Variation',
    category: 'Sharp Flank Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bf1 Nd4 7. c3 Nxd5 8. Ne4 Ne6 9. Bxb5+ Bd7 10. Bxd7+ Qxd7 11. d3 Be7 12. O-O',
    fullAnnotation: 'Black tries the flank thrust 5...b5. White cleanly neutralizes Black\'s tactical ambitions with Bf1 and central consolidation.',
    previewFEN: 'r3k2r/p1pqbppp/4n3/3np3/4N3/2PP4/PP3PPP/RNBQ1RK1 b kq - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. exd5 — Capture pawn.", 10: "6. Bf1 — Precise retreat.",
      12: "7. c3 — Attack knight.", 14: "8. Ne4 — Reposition knight.", 16: "9. Bxb5+ — Win b5 pawn.",
      18: "10. Bxd7+ — Simplify endgame.", 20: "11. d3 — Solidify center.", 22: "12. O-O — Complete development!"
    }
  },
  {
    id: 'two-knights-traxler',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Traxler Refutation (5. Bxf7+)',
    shortName: 'Traxler Refutation',
    category: 'Sharp Counter Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 Rf8 7. O-O d6 8. c3 Bg4 9. Qe1 Qe8 10. d4 exd4 11. Bxc6 bxc6 12. e5',
    fullAnnotation: 'White avoids the ultra-wild 5.Nxf7 and refutes the Traxler cleanly with 5.Bxf7+ and solid center control.',
    previewFEN: 'r3qr2/p1p1k1pp/2pb1n2/4P1N1/3p2b1/2P5/PP3PPP/RNB1QRK1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Attack f7.", 8: "5. Bxf7+! — Deprive Black of castling.", 10: "6. Bd5 — Safe retreat.",
      12: "7. O-O — Castle into safety.", 14: "8. c3 — Prepare d4.", 16: "9. Qe1 — Avoid pin.",
      18: "10. d4 — Center break.", 20: "11. Bxc6 — Shatter queenside pawns.", 22: "12. e5! — Decisive pawn fork!"
    }
  },
  {
    id: 'two-knights-traxler-nxf7',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Traxler 5. Nxf7 Wild Sacrifice',
    shortName: 'Traxler 5. Nxf7',
    category: 'Hyper Tactical',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7 Bxf2+ 6. Kxf2 Nxe4+ 7. Kg1 Qh4 8. g3 Nxg3 9. Nxh8 d5 10. hxg3 Qxg3+ 11. Kf1 Bh3+ 12. Rxh3 Qxh3+ 13. Kg1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7 Bxf2+ 6. Kxf2 Nxe4+ 7. Kg1 Qh4 8. g3 Nxg3 9. Nxh8 d5 10. hxg3 Qxg3+ 11. Kf1 Bh3+ 12. Rxh3 Qxh3+ 13. Kg1',
    fullAnnotation: 'The legendary Traxler sacrifice. White weathers the storm with king defense and converts the massive material lead.',
    previewFEN: 'r3k2N/ppp3pp/2n5/3pp3/2B5/7q/PPPP4/RNBQ2K1 b q - 2 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. Nxf7 — Accept challenge.", 10: "6. Kxf2 — King step up.",
      12: "7. Kg1 — Guard king.", 14: "8. g3 — Defend mate threat.", 16: "9. Nxh8 — Win rook material.",
      18: "10. hxg3 — Capture knight.", 20: "11. Kf1 — Step king away.", 22: "12. Rxh3 — Trade attacker.",
      24: "13. Kg1 — Safe king shelter with decisive material advantage!"
    }
  },
  {
    id: 'two-knights-polerio-8-bd3',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio 8. Bd3 Line',
    shortName: 'Polerio 8. Bd3',
    category: 'Positional Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Bd3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Bd3 Nd5 9. Nf3 Bd6 10. O-O O-O 11. Re1 f5 12. Nxe5',
    fullAnnotation: 'The solid 8. Bd3 retreat. White grabs the e5 pawn and controls the open e-file.',
    previewFEN: 'r1bq1rk1/p5pp/2pb4/n2nNp2/8/3B4/PPPP1PPP/RNBQR1K1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Open d-file.", 10: "6. Bb5+ — Force c6.",
      12: "7. dxc6 — Extra pawn.", 14: "8. Bd3 — Guard e4.", 16: "9. Nf3 — Knight retreat.",
      18: "10. O-O — Castle safely.", 20: "11. Re1 — Active rook.", 22: "12. Nxe5 — Cash in second central pawn!"
    }
  },
  {
    id: 'two-knights-polerio-8-qf3',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio 8. Qf3 Bogoljubov Line',
    shortName: 'Polerio 8. Qf3',
    category: 'Aggressive Pin',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 Rb8 9. Bd3 h6 10. Ne4 Nd5 11. Ng3 g6 12. O-O',
    fullAnnotation: 'Bogoljubov\'s 8. Qf3 pinning the rook on a8. White coordinates with Bd3 and Ne4/Ng3.',
    previewFEN: '1rbqkb1r/p4p2/2p3pp/n2np3/8/3B1NN1/PPPP1PPP/R1B2RK1 b k - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Bb5+ — Check.",
      12: "7. dxc6 — Win pawn.", 14: "8. Qf3 — Pin a8 rook!", 16: "9. Bd3 — Bishop retreat.",
      18: "10. Ne4 — Central knight placement.", 20: "11. Ng3 — Reposition knight.", 22: "12. O-O — Kingside safety!"
    }
  },
  {
    id: 'two-knights-polerio-9-nh3',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio 9. Nh3 Steinitz Line',
    shortName: 'Polerio 9. Nh3',
    category: 'Classic Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nh3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nh3 Bd6 10. d3 O-O 11. Nc3 c5 12. O-O',
    fullAnnotation: 'Steinitz\'s knight retreat to h3 keeping the f-pawn unblocked and securing d3 and Nc3 development.',
    previewFEN: 'r1bq1rk1/p4pp1/3b1n1p/n1p1p3/8/2NP3N/PPP1BPPP/R1BQ1RK1 b - - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. exd5 — Open d-file.", 10: "6. Bb5+ — Force c6.",
      12: "7. dxc6 — Extra pawn.", 14: "8. Be2 — Solid retreat.", 16: "9. Nh3 — Steinitz knight retreat.",
      18: "10. d3 — Solidify center.", 20: "11. Nc3 — Knight develops.", 22: "12. O-O — Healthy extra pawn advantage!"
    }
  },
  {
    id: 'two-knights-fried-liver-nb4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver 8...Nb4 Defense',
    shortName: 'Fried Liver 8...Nb4',
    category: 'Tactical Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6 11. d4 Nc7 12. Bf4',
    fullAnnotation: 'Black counter-attacks c2 with 8...Nb4. White guards c2 with 9. Qe4, kicks the knight with 10. a3, and strikes centrally with 11. d4.',
    previewFEN: 'r1bq1b1r/ppn3pp/2p1k3/3np3/2BPPB2/P1N5/1PP2PPP/R3K2R b KQ - 2 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Nxf7! — Fried Liver sacrifice.",
      12: "7. Qf3+ — Queen check.", 14: "8. Nc3 — Pressure d5.", 16: "9. Qe4 — Guard c2 and pin e5.",
      18: "10. a3 — Drive knight back.", 20: "11. d4 — Blast center open.", 22: "12. Bf4 — Total pin domination!"
    }
  },
  {
    id: 'two-knights-fried-liver-ncb4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver 8...Ncb4 9. O-O',
    shortName: 'Fried Liver 9. O-O',
    category: 'Aggressive Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. O-O c6 10. d4 Nxc2 11. dxe5 Nxa1 12. Rd1',
    fullAnnotation: 'White ignores the c2 fork, castles with 9. O-O, and unleashes the heavy pieces with 12. Rd1 for a forced mating attack.',
    previewFEN: 'r1bq1b1r/pp4pp/2p1k3/3nP3/2B5/2N2Q2/PPP2PPP/n1BR2K1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Nxf7! — Sacrifice knight.",
      12: "7. Qf3+ — Queen check.", 14: "8. Nc3 — Pin d5.", 16: "9. O-O! — Ignore fork and castle.",
      18: "10. d4 — Rip open center.", 20: "11. dxe5 — Expose black king.", 22: "12. Rd1 — Unstoppable mating attack!"
    }
  },
  {
    id: 'two-knights-lolli-attack',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Lolli Attack (6. d4)',
    shortName: 'Lolli Attack',
    category: 'Sharp Classic',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4 Bb4+ 7. c3 Be7 8. Nxf7 Kxf7 9. Qf3+ Ke6 10. Qe4 Bf6 11. O-O',
    fullAnnotation: 'The aggressive Lolli Attack. White breaks immediately with 6. d4 and sacrifices on f7 with crushing central control.',
    previewFEN: 'r1bq3r/ppp3pp/2n1kb2/3np3/2BPP3/2P5/PP3PPP/RNB2RK1 b - - 2 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. d4 — Lolli central strike!",
      12: "7. c3 — Interpose check.", 14: "8. Nxf7! — Knight sacrifice.", 16: "9. Qf3+ — Queen check.",
      18: "10. Qe4 — Pin d5 knight.", 20: "11. O-O — Complete king safety with decisive threats!"
    }
  },
  {
    id: 'two-knights-4-d4-e5',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – 4. d4 exd4 5. e5 Mainline',
    shortName: '4. d4 5. e5',
    category: 'Center Break',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 d5 6. Bb5 Ne4 7. Nxd4 Bd7 8. Bxc6 bxc6 9. O-O Bc5 10. Be3 Bb6 11. f3',
    fullAnnotation: 'White strikes centrally with 4. d4 and 5. e5, pinning on b5 and anchoring with 10. Be3 and 11. f3.',
    previewFEN: 'r2qk2r/p1pb1ppp/1bp5/3pP3/3Nn3/4BP2/PPP3PP/RN1Q1RK1 b kq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Strike center.", 8: "5. e5 — Thrust e-pawn.", 10: "6. Bb5 — Pin knight.",
      12: "7. Nxd4 — Centralize knight.", 14: "8. Bxc6 — Trade bishop.", 16: "9. O-O — Castle into safety.",
      18: "10. Be3 — Reinforce center.", 20: "11. f3 — Kick the e4 knight!"
    }
  },
  {
    id: 'two-knights-4-d4-o-o',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – 4. d4 exd4 5. O-O Scotch Gambit',
    shortName: 'Two Knights Scotch Gambit',
    category: 'Gambit System',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4 Be6 10. Bg5 h6 11. Bh4',
    fullAnnotation: 'White gambits on d4, pins the e4 knight with 6. Re1, and regains material with Nc3 and Bg5.',
    previewFEN: 'r3k2r/ppp2pp1/2n1b2p/q7/3pN2B/5N2/PPP2PPP/R2QR1K1 b kq - 3 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Center clash.", 8: "5. O-O — Castle safely.", 10: "6. Re1 — Pin e4 knight.",
      12: "7. Bxd5 — Regain piece.", 14: "8. Nc3 — Attack queen.", 16: "9. Nxe4 — Central knight recapture.",
      18: "10. Bg5 — Pin e7 square.", 20: "11. Bh4 — Dominating tactical pressure!"
    }
  },
  {
    id: 'two-knights-max-lange',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Max Lange Attack',
    shortName: 'Max Lange Attack',
    category: 'Hyper Tactical',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. Nce4',
    fullAnnotation: 'The fearsome Max Lange Attack. White rips open the e-file and launches Ng5/Nce4 with devastating tactical force.',
    previewFEN: 'r3k2r/ppp2ppp/2n1bP2/2b2qN1/2ppN3/8/PPP2PPP/R1BQR1K1 b kq - 5 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Center strike.", 8: "5. O-O — Castle into safety.", 10: "6. e5 — Advance pawn.",
      12: "7. exf6 — Capture knight.", 14: "8. Re1+ — Interpose check.", 16: "9. Ng5 — Attack e6 bishop.",
      18: "10. Nc3 — Knight development.", 20: "11. Nce4 — Overwhelming attacking power!"
    }
  },
  {
    id: 'two-knights-polerio-10-qc7-f4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio 10...Qc7 11. f4 Line',
    shortName: 'Polerio 11. f4',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qc7 11. f4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qc7 11. f4 exf3 12. Nxf3 Bd6 13. O-O',
    fullAnnotation: 'White anchors the e5 knight with 11. f4 and completes kingside development with 13. O-O.',
    previewFEN: 'r1b2rk1/p1q2pp1/2pb1n1p/n7/8/5N2/PPPPB1PP/RNBQ1RK1 b - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Bb5+ — Check.",
      12: "7. dxc6 — Extra pawn.", 14: "8. Be2 — Solid retreat.", 16: "9. Nf3 — Knight steps back.",
      18: "10. Ne5 — Knight outpost.", 20: "11. f4 — Anchor knight on e5.", 22: "12. Nxf3 — Recapture knight.",
      24: "13. O-O — Complete king safety with pawn advantage!"
    }
  },
  {
    id: 'two-knights-polerio-10-qd4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Polerio 10...Qd4 Line',
    shortName: 'Polerio 10...Qd4',
    category: 'Positional Defense',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qd4 11. f4 Bc5 12. Rf1 Qd6 13. c3',
    fullAnnotation: 'Black centralizes the queen with 10...Qd4. White shields with 11. f4 and 12. Rf1, then prepares b4 with 13. c3.',
    previewFEN: 'r1b1k2r/p4pp1/2pq1n1p/n1b1N3/4pP2/2P5/PP1PB1PP/RNBQ1R2 b kq - 0 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Bb5+ — Force c6.",
      12: "7. dxc6 — Extra pawn.", 14: "8. Be2 — Solid retreat.", 16: "9. Nf3 — Knight steps back.",
      18: "10. Ne5 — Advanced knight.", 20: "11. f4 — Anchor knight.", 22: "12. Rf1 — Guard f2.",
      24: "13. c3 — Prepare b4 trapping the a5 knight!"
    }
  },
  {
    id: 'two-knights-fritz-h4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fritz 8. h4 Line',
    shortName: 'Fritz 8. h4',
    category: 'Sharp Flank',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4 6. c3 b5 7. Bf1 Nxd5 8. h4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4 6. c3 b5 7. Bf1 Nxd5 8. h4 Ne6 9. Bxb5+ Bd7 10. Nxe6 fxe6 11. Bxd7+ Qxd7 12. Qh5+',
    fullAnnotation: 'White pushes 8. h4 and forks with 12. Qh5+, shattering Black\'s pawn structure and winning material.',
    previewFEN: 'r3kb1r/p1pq2p1/4p3/3np2Q/7P/2PP4/PP3PP1/RNB1K2R b KQkq - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. c3 — Kick knight.",
      12: "7. Bf1 — Precise retreat.", 14: "8. h4 — Sharp flank advance.", 16: "9. Bxb5+ — Check and win pawn.",
      18: "10. Nxe6 — Trade knight.", 20: "11. Bxd7+ — Simplify.", 22: "12. Qh5+ — Decisive queen fork!"
    }
  },
  {
    id: 'two-knights-ulvestad-6-nxd5',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Ulvestad 6...Nxd5 Line',
    shortName: 'Ulvestad 6...Nxd5',
    category: 'Positional Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bf1 Nxd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bf1 Nxd5 7. Bxb5 Bb7 8. d4 exd4 9. O-O Be7 10. Qxd4 O-O 11. Bxc6 Bxc6',
    fullAnnotation: 'White takes the b5 pawn with 7. Bxb5 and centralizes the queen with 10. Qxd4.',
    previewFEN: 'r2q1rk1/p1p1bppp/2b5/3n2N1/3Q4/8/PPP2PPP/RNB2RK1 w - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. exd5 — Capture pawn.", 10: "6. Bf1 — Prophylactic retreat.",
      12: "7. Bxb5 — Cash in b5 pawn.", 14: "8. d4 — Center clash.", 16: "9. O-O — Castle safely.",
      18: "10. Qxd4 — Centralize queen.", 20: "11. Bxc6 — Trade bishop with clean extra pawn!"
    }
  },
  {
    id: 'two-knights-ulvestad-qxd5',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Ulvestad 6. Bxb5 Qxd5 Line',
    shortName: 'Ulvestad 6. Bxb5',
    category: 'Sharp Queen Counter',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bxb5 Qxd5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bxb5 Qxd5 7. Bxc6+ Qxc6 8. O-O Bb7 9. Qf3 e4 10. Re1 Be7 11. Qh3',
    fullAnnotation: 'Black counter-attacks White\'s g2 pawn with 6...Qxd5. White trades with 7. Bxc6+ and shields with 9. Qf3 and 10. Re1.',
    previewFEN: 'r3k2r/pbp1bppp/2q5/6N1/4p3/7Q/PPPP1PPP/RNB1R1K1 b kq - 3 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. exd5 — Capture pawn.", 10: "6. Bxb5 — Cash in flank pawn.",
      12: "7. Bxc6+ — Capture knight with check.", 14: "8. O-O — Castle into safety.", 16: "9. Qf3 — Queen blocks g2 mate threat.",
      18: "10. Re1 — Active pin on e-file.", 20: "11. Qh3 — Defend and dominate!"
    }
  },
  {
    id: 'two-knights-4-d3-solid',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – 4. d3 Solid Setup',
    shortName: '4. d3 Solid Setup',
    category: 'Quiet Strategy',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. O-O d6 6. c3 a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 h6 10. Re1 Be6 11. Nf1',
    fullAnnotation: 'White avoids sharp lines with 4. d3, developing the classical Italian maneuvering knight via Nbd2-f1-g3.',
    previewFEN: 'r2q1rk1/bpp2pp1/p1npbn1p/4p3/4P3/1BPP1N1P/PP3PP1/R1BQRNK1 b - - 5 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Quiet Italian structure.", 8: "5. O-O — Castle into safety.", 10: "6. c3 — Prepare central support.",
      12: "7. Bb3 — Bishop retreat.", 14: "8. Nbd2 — Knight maneuvering.", 16: "9. h3 — Deny Bg4.",
      18: "10. Re1 — Active rook.", 20: "11. Nf1 — Knight reaches standard kingside assault outpost!"
    }
  },
  {
    id: 'two-knights-4-d4-ne4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – 4. d4 exd4 5. e5 Ne4 Line',
    shortName: '4. d4 5...Ne4',
    category: 'Center Break',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 Ne4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 Ne4 6. Qe2 Nc5 7. O-O Be7 8. Rd1 O-O 9. Nxd4 Nxd4 10. Rxd4 d6 11. Nc3',
    fullAnnotation: 'White pins the e4 knight with 6. Qe2, regains the d4 pawn, and dominates the center with 10. Rxd4 and 11. Nc3.',
    previewFEN: 'r1bq1rk1/ppp1bppp/3p4/2n1P3/2BR4/2N5/PPP1QPPP/R1B3K1 b - - 2 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Center clash.", 8: "5. e5 — Advance pawn.", 10: "6. Qe2 — Pin e4 knight.",
      12: "7. O-O — Castle safely.", 14: "8. Rd1 — Pressure d4.", 16: "9. Nxd4 — Central capture.",
      18: "10. Rxd4 — Dominating rook placement.", 20: "11. Nc3 — Rapid harmonious piece mobilization!"
    }
  },
  {
    id: 'two-knights-4-o-o-nxe4',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – 4. O-O Nxe4 Gambit',
    shortName: '4. O-O Nxe4 Gambit',
    category: 'Gambit Attack',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Nxe4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Nxe4 5. Nc3 Nxc3 6. dxc3 f6 7. Nh4 g6 8. f4 Qe7 9. f5 Qc5+ 10. Kh1 Qxc4 11. fxg6',
    fullAnnotation: 'White launches a hyper-aggressive attack with 7. Nh4 and 8. f4, opening files against Black\'s uncastled king.',
    previewFEN: 'r1b1kb1r/pppp3p/2n2pP1/8/2q4N/2P5/PPP3PP/R1BQ1R1K b kq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. O-O — Early castling gambit.", 8: "5. Nc3 — Develop knight.", 10: "6. dxc3 — Open d-file.",
      12: "7. Nh4 — Attack dark squares.", 14: "8. f4 — Blow open f-file.", 16: "9. f5 — Disrupt g6 pawn.",
      18: "10. Kh1 — Step king out of check.", 20: "11. fxg6 — Devastating kingside infiltration!"
    }
  },
  {
    id: 'two-knights-traxler-5-bd5-d6',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Traxler 6. Bd5 d6 Refutation',
    shortName: 'Traxler 6. Bd5 d6',
    category: 'Positional Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 d6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 d6 7. O-O Qe8 8. c3 Bg4 9. Nf3 Qh5 10. d3 Bxf3 11. Qxf3 Qxf3 12. gxf3',
    fullAnnotation: 'White cleanly defuses Black\'s attack with 9. Nf3 and forces a winning endgame by trading queens with 11. Qxf3.',
    previewFEN: 'r4r2/ppp1k1pp/2np1n2/2bBP3/4P3/2PP1P2/PP3P1P/RNB2RK1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Two Knights Attack.", 8: "5. Bxf7+! — Deprive castling.", 10: "6. Bd5 — Safe retreat.",
      12: "7. O-O — Castle into safety.", 14: "8. c3 — Prepare d4.", 16: "9. Nf3 — Block queen.",
      18: "10. d3 — Solidify center.", 20: "11. Qxf3 — Trade queens into winning endgame!", 22: "12. gxf3 — Extra piece superiority!"
    }
  },
  {
    id: 'two-knights-fried-liver-rhe1',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Fried Liver 13. Rhe1 Exchange Line',
    shortName: 'Fried Liver 13. Rhe1',
    category: 'Endgame Conversion',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5 h6 11. Bxe7 Bxe7 12. O-O-O Rf8 13. Rhe1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5 h6 11. Bxe7 Bxe7 12. O-O-O Rf8 13. Rhe1 Rxf3 14. Rxe5+ Kf7 15. gxf3',
    fullAnnotation: 'White doubles rooks on the e-file and converts the king hunt into a winning endgame.',
    previewFEN: 'r1bq4/pp2bkp1/2p4p/3nR3/2BP4/2N2P2/PPP2P1P/2KR4 b - - 0 15',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.", 8: "5. exd5 — Capture pawn.", 10: "6. Nxf7! — Fried Liver sacrifice.",
      12: "7. Qf3+ — Check.", 14: "8. Nc3 — Pressure d5.", 16: "9. d4 — Rip open center.",
      18: "10. Bg5 — Pin e7.", 20: "11. Bxe7 — Trade piece.", 22: "12. O-O-O — Long castling.",
      24: "13. Rhe1 — Double heavy pieces on e-file.", 26: "14. Rxe5+ — Recapture with check.", 28: "15. gxf3 — Decisive material and positional advantage!"
    }
  },

  // ============================================================
  // TACTICAL PUNISHMENT & BLUNDER REFUTATION LINES
  // ============================================================
  {
    id: "italian-punish-blackburne",
    courseId: "italian-game",
    subCourseId: "italian-two-knights",
    name: "Two Knights – Blackburne Shilling Refutation (4. Bxf7+!)",
    shortName: "Blackburne Shilling Refuted",
    category: "Trap Refutation",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Bxf7+ Kxf7 5. Nxe5+ Ke7 6. c3 d6 7. Nc4 Ne6 8. d4 Nf6 9. O-O Nxe4 10. d5 N6c5 11. Re1 Kd7 12. Qg4+ Ke8 13. Qh5+",
    fullAnnotation: "Black sets the cheap Blackburne Shilling trap with 3...Nd4?!. White dismantles it completely by blasting open the center with Bxf7+! and d4.",
    previewFEN: "r1bqkb1r/ppp3pp/3p4/2nP3Q/2N1n3/2P5/PP3PPP/RNB1R1K1 b - - 6 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      5: "Inaccuracy: 3...Nd4?! attempts the cheap Blackburne Shilling trap.",
      6: "4. Bxf7+! — Tactical Punishment: Strike Black's king immediately!",
      8: "5. Nxe5+ — Central fork.",
      10: "6. c3 — Kick the tricky knight.",
      12: "7. Nc4 — Reroute with tempo.",
      14: "8. d4 — Full center expansion.",
      16: "9. O-O — Complete king safety.",
      18: "10. d5 — Push black pieces into disarray.",
      20: "11. Re1 — Pin e4 knight to king.",
      22: "12. Qg4+ — Deliver check with king stranded.",
      24: "13. Qh5+ — Decisive attack."
    }
  },
  {
    id: "italian-punish-traxler",
    courseId: "italian-game",
    subCourseId: "italian-two-knights",
    name: "Two Knights – Traxler Counter-Attack Refuted (5. Bxf7+!)",
    shortName: "Traxler Counter Refuted",
    category: "Tactical Precision",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bd5 Rf8 7. O-O d6 8. Bxc6 bxc6 9. c3 h6 10. Nf3 Bg4 11. d4 exd4 12. cxd4 Bb6 13. Qd3",
    fullAnnotation: "Black plays the wild Traxler Counter-Attack (4...Bc5?!). White refutes it cleanly with 5. Bxf7+! followed by safe consolidation.",
    previewFEN: "r2q1r2/p1p1k1p1/1bpp1n1p/8/3PP1b1/3Q1N2/PP3PPP/RNB2RK1 b - - 2 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Attack f7.",
      7: "Blunder: 4...Bc5?! is the unsound Traxler Counter-Attack.",
      8: "5. Bxf7+! — Tactical Punishment: Strip castling rights and win a clean pawn.",
      10: "6. Bd5 — Safe retreat.",
      12: "7. O-O — King safety.",
      14: "8. Bxc6 — Ruin pawn structure.",
      16: "9. c3 — Prepare center.",
      18: "10. Nf3 — Knight retreats safely.",
      20: "11. d4 — Break open center.",
      22: "12. cxd4 — Control center.",
      24: "13. Qd3 — Total positional and material dominance."
    }
  },
  {
    id: "italian-punish-fried-liver-ncb4",
    courseId: "italian-game",
    subCourseId: "italian-two-knights",
    name: "Two Knights – Fried Liver 8...Ncb4? Knight Raid Crushed",
    shortName: "Fried Liver 8...Ncb4 Crushed",
    category: "Mating Attack",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. a3 Nxc2+ 10. Kd1 Nxa1 11. Nxd5 Kd6 12. d4 c6 13. dxe5+ Kd7 14. Qf7+ Be7 15. e6+ Kd6 16. Bf4+ Kc5 17. Be3+ Kd6 18. Qf4+ Kxe6 19. Qe4+ Kd7 20. Ke2",
    fullAnnotation: "Black defends the Fried Liver greedily with 8...Ncb4? grabbing the c2 rook. White launches a relentless king hunt forcing mate.",
    previewFEN: "r1bq3r/pp1kb1pp/2p5/3N4/2B1Q3/P3B3/1P2KPPP/n6R b - - 3 20",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. Ng5 — Target f7.",
      8: "5. exd5 — Open lines.",
      10: "6. Nxf7! — The legendary Fried Liver sacrifice!",
      12: "7. Qf3+ — Triple attack on pinned d5 knight.",
      14: "8. Nc3 — Pile fourth attacker on d5.",
      15: "Blunder: 8...Ncb4? counter-attacks c2 greedily while the king is in mortal danger.",
      16: "9. a3! — Kick knight.",
      18: "10. Kd1 — Safe king step avoiding checks.",
      20: "11. Nxd5 — Eliminate key defender.",
      22: "12. d4! — Blow open central highways.",
      24: "13. dxe5+ — Discover check.",
      26: "14. Qf7+ — Penetrate into black camp.",
      28: "15. e6+ — Tighten the noose.",
      30: "16. Bf4+ — Bishop joins attack.",
      32: "17. Be3+ — Drive king into mating net.",
      34: "18. Qf4+ — Continuous checks.",
      36: "19. Qe4+ — Precision king hunt.",
      38: "20. Ke2! — White connects rooks with an unavoidable mating attack."
    }
  },
  {
    id: "italian-punish-f5-counter",
    courseId: "italian-game",
    subCourseId: "italian-two-knights",
    name: "Two Knights – Dubious 4...f5?! Counter-Gambit Dismantled",
    shortName: "Two Knights 4...f5 Refuted",
    category: "Center Domination",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5 11. exd5 Nxd5 12. Nxg6 hxg6 13. h4",
    fullAnnotation: "Black tries a passive ...d6 setup with an early ...Bg4 pin. White reroutes the knight via f1 to g3/h4 and launches a crushing h-file attack.",
    previewFEN: "r2q1rk1/ppp1bpp1/2n3p1/3np3/2B4P/2PP2N1/PP3PP1/R1BQK2R b KQ - 0 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center expansion.",
      10: "6. Nbd2 — Classical knight tour.",
      12: "7. h3 — Kick bishop.",
      14: "8. Nf1 — Knight heads for g3.",
      16: "9. Ng3 — Bishop harassed.",
      18: "10. Nh4! — Seize f5 and g6 squares.",
      19: "Inaccuracy: 10...d5 opens the center while kingside pieces are trapped.",
      20: "11. exd5 — Eliminate center pawn.",
      22: "12. Nxg6 — Ruin Black pawn cover.",
      24: "13. h4! — Unleash the h-file storm!"
    }
  }
];

export const friedLiverLine = twoKnightsLines[0];
export const polerioCounterLine = twoKnightsLines[1];
export const fritzCounterLine = twoKnightsLines[2];
export const ulvestadLine = twoKnightsLines[3];
export const traxlerRefutationLine = twoKnightsLines[4];
