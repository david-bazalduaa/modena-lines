/* ============================================================
   GIUOCO PIANO – MAIN LINE CENTER ATTACK (PGN TREE)
   ============================================================ */

export const giuocoPianoLine = {
  id: 'giuoco-piano',
  courseId: 'italian-game',
  name: 'Giuoco Piano – Center Attack',
  shortName: 'Giuoco Piano',
  category: 'Main Line',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Nce7 11. O-O O-O 12. Rfe1 c6',
  fullAnnotation: 'Deep central battle where White sacrifices a pawn structure edge for active piece play and pressure along the e-file.',
  previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/3p4/2BP4/1Q3N2/PP1N1PPP/R3R1K1 b kq - 1 10',
  annotations: {
    0:  "1. e4 — King's pawn opening. Controls d5 and opens diagonals for bishop and queen.",
    2:  "2. Nf3 — Develop knight toward c3/f3, attacking e5 pawn.",
    4:  "3. Bc4 — Italian Bishop targeting vulnerable f7 square.",
    6:  "4. c3 — Prepare central d4 thrust to build classical pawn center duo.",
    8:  "5. d4 — Central strike! Open position for piece activity.",
    10: "6. cxd4 — Reclaim center duo d4/e4.",
    12: "7. Bd2 — Offer dark-squared bishop trade.",
    14: "8. Nbxd2 — Harmonious knight development.",
    16: "9. exd5 — Opening e-file for rook pressure.",
    18: "10. Qb3 — Aggressive queen deployment eyeing b7 and d5.",
    20: "11. O-O — Kingside castling into safety.",
    22: "12. Rfe1 — Seize e-file with maximum rook activity!"
  }
};
