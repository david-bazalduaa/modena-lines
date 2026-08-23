/* ============================================================
   GIUOCO PIANO & CENTER ATTACK REPERTOIRE (5 MASTER LINES)
   ============================================================ */

export const giuocoPianoLine = {
  id: 'giuoco-piano-main',
  courseId: 'italian-game',
  subCourseId: 'italian-giuoco-piano',
  name: 'Giuoco Piano – Center Break (7. Bd2)',
  shortName: 'Center Break',
  category: 'Main Line',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Nce7 11. O-O O-O 12. Rfe1 c6 13. a4 Qb6 14. Qa3',
  fullAnnotation: 'White sacrifices pawn symmetry for active piece activity and pressure on the e-file.',
  previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/3p4/2BP4/1Q3N2/PP1N1PPP/R3R1K1 b kq - 1 10',
  annotations: {
    0:  "1. e4 — King's pawn opening. Controls d5 and opens diagonals.",
    2:  "2. Nf3 — Develop knight toward center, pressuring e5.",
    4:  "3. Bc4 — Italian Bishop active on the a2-g8 diagonal.",
    6:  "4. c3 — Prepare classical d4 central pawn thrust.",
    8:  "5. d4 — Central strike challenging Black's e5 pawn.",
    10: "6. cxd4 — Reclaim central duo with d4 and e4.",
    12: "7. Bd2 — Interpose check and offer dark-squared bishop trade.",
    14: "8. Nbxd2 — Harmonious knight recapture maintaining d4 defense.",
    16: "9. exd5 — Open e-file for long-term rook pressure.",
    18: "10. Qb3 — Aggressive queen deployment targeting b7 and d5.",
    20: "11. O-O — Kingside castling connecting rooks.",
    22: "12. Rfe1 — Seize the open e-file with maximum rook activity.",
    24: "13. a4 — Queenside expansion clamping down on b5.",
    26: "14. Qa3 — Maintain relentless pin pressure on the e-file!"
  }
};

export const giuocoMoellerLine = {
  id: 'giuoco-piano-moeller',
  courseId: 'italian-game',
  subCourseId: 'italian-giuoco-piano',
  name: 'Giuoco Piano – Moeller Attack (7. Nc3)',
  shortName: 'Moeller Attack',
  category: 'Sharp Gambit',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 h6 14. Qe2',
  fullAnnotation: 'The romantic Moeller Attack. White surrenders a pawn for immense tactical initiative and a trapped black king.',
  previewFEN: 'r1bqk2r/ppp1npp1/3p3p/3P2N1/2B1R3/8/PP2QPPP/R5K1 b kq - 1 14',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Knight development attacking e5.",
    4:  "3. Bc4 — Italian Bishop aiming at f7.",
    6:  "4. c3 — Prepare pawn center duo.",
    8:  "5. d4 — Central thrust.",
    10: "6. cxd4 — Center recapture.",
    12: "7. Nc3 — Moeller Knight sacrifice! Allow Nxe4 for rapid development.",
    14: "8. O-O — Castle into safety while Black spends tempos on captures.",
    16: "9. d5 — Push d-pawn to drive away the c6 knight defender.",
    18: "10. Re1 — Pin the e4 knight against the uncastled Black king.",
    20: "11. Rxe4 — Regain material and establish dominance on the e-file.",
    22: "12. Bg5 — Eliminate Black's dark-squared bishop defender.",
    24: "13. Nxg5 — Knight jumps forward with lethal kingside threats.",
    26: "14. Qe2 — Double heavy pieces on the e-file with overwhelming attack!"
  }
};

export const giuocoSolidLine = {
  id: 'giuoco-piano-solid',
  courseId: 'italian-game',
  subCourseId: 'italian-giuoco-piano',
  name: 'Giuoco Piano – Solid Central Setup (8. Nbxd2)',
  shortName: 'Solid Setup',
  category: 'Main Line',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. O-O O-O 11. h3 Bf5 12. Re1 Nb6 13. Bb3',
  fullAnnotation: 'Solid central structure setup favoring open diagonals for White\'s light-squared bishop.',
  previewFEN: 'r2q1rk1/ppp2ppp/1nn5/5b2/3P4/1B3N1P/PP1N1PP1/R2QR1K1 b - - 6 13',
  annotations: {
    0:  "1. e4 — Classical king's pawn stake.",
    2:  "2. Nf3 — Attack e5 pawn.",
    4:  "3. Bc4 — Bishop to c4 targeting f7.",
    6:  "4. c3 — Prepare d4.",
    8:  "5. d4 — Center clash.",
    10: "6. cxd4 — Secure center duo.",
    12: "7. Bd2 — Offer bishop exchange.",
    14: "8. Nbxd2 — Knight develops toward center.",
    16: "9. exd5 — Liquidate center to open lines.",
    18: "10. O-O — Castle into safety.",
    20: "11. h3 — Prevent annoying Bg4 pins.",
    22: "12. Re1 — Active rook control on the e-file.",
    24: "13. Bb3 — Preserve the Italian Bishop on the critical a2-g8 diagonal!"
  }
};

export const giuocoQe7Line = {
  id: 'giuoco-piano-qe7',
  courseId: 'italian-game',
  subCourseId: 'italian-giuoco-piano',
  name: 'Giuoco Piano – Black 4...Qe7 Sideline',
  shortName: '4...Qe7 Defense',
  category: 'Black Sideline',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. O-O d6 7. h3 Nf6 8. Re1 O-O 9. a4 a6 10. Na3 h6 11. Nc2',
  fullAnnotation: 'Black overprotects e5 with 4...Qe7. White builds a massive central presence and reroutes the knight via Na3-c2-e3.',
  previewFEN: 'r1b2rk1/1pp1qpp1/pbnp1n1p/4p3/P1BPP3/2P2N1P/1PN2PP1/R1BQR1K1 b - - 2 11',
  annotations: {
    0:  "1. e4 — Classical king's pawn opening.",
    2:  "2. Nf3 — Developing knight with attack on e5.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. c3 — Prepare central d4 pawn advance.",
    8:  "5. d4 — Strike in the center with classical pawn duo.",
    10: "6. O-O — Castle into complete king safety.",
    12: "7. h3 — Prophylactic move denying Bg4 pins.",
    14: "8. Re1 — Centralize rook supporting e4.",
    16: "9. a4 — Seize queenside space and restrict Black's b6 bishop.",
    18: "10. Na3 — Reroute knight toward c2 and e3.",
    20: "11. Nc2 — Knight achieves optimal flexibility for central maneuvering!"
  }
};

export const giuocoD6Line = {
  id: 'giuoco-piano-d6',
  courseId: 'italian-game',
  subCourseId: 'italian-giuoco-piano',
  name: 'Giuoco Piano – Black 4...d6 Sideline',
  shortName: '4...d6 Defense',
  category: 'Solid Setup',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 d6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 d6 5. d4 exd4 6. cxd4 Bb6 7. Nc3 Nf6 8. h3 O-O 9. O-O h6 10. Be3 Re8 11. Bd3',
  fullAnnotation: 'Black plays a solid 4...d6 structure. White seizes full central control with d4 and guards e4 smoothly with Bd3.',
  previewFEN: 'r1bqr1k1/ppp2pp1/1bnp1n1p/8/3PP3/2NBBN1P/PP3PP1/R2Q1RK1 b - - 4 11',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7 square.",
    6:  "4. c3 — Prepare central strike.",
    8:  "5. d4 — Center clash.",
    10: "6. cxd4 — Secure ideal central pawn duo d4 and e4.",
    12: "7. Nc3 — Natural knight development developing piece harmony.",
    14: "8. h3 — Deny Black the Bg4 pin.",
    16: "9. O-O — Kingside castling into safety.",
    18: "10. Be3 — Reinforce d4 pawn center.",
    20: "11. Bd3 — Retreat bishop to solidly defend e4 and dominate the board!"
  }
};
