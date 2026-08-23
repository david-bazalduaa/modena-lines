/* ============================================================
   MODERN PIANISSIMO (d3 SYSTEMS) REPERTOIRE LINES
   ============================================================ */

export const pianissimoSuperGMLine = {
  id: 'pianissimo-super-gm',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Modern Pianissimo – Super-GM Mainline (6. O-O)',
  shortName: 'Super-GM Mainline',
  category: 'Positional Quiet',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Re1 O-O 9. h3 h6 10. Nbd2 Re8 11. Nf1 Be6 12. Ng3 d5 13. exd5 Bxd5',
  fullAnnotation: 'Favored by Carlsen and Giri. White maneuvers the knight to f5 for a subtle kingside assault.',
  previewFEN: 'r2qr1k1/bpp2pp1/p1n2n1p/3bp3/8/1BPP1NNP/PP3PP1/R1BQR1K1 w - - 0 14',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5 pawn.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. c3 — Prepare central pawn flexibility.",
    8:  "5. d3 — Solid Pianissimo setup keeping the center stable.",
    10: "6. O-O — Castle into kingside safety.",
    12: "7. Bb3 — Prophylactic bishop retreat anticipating Black's a6/b5 expansion.",
    14: "8. Re1 — Support central e4 pawn and prepare knight transfer.",
    16: "9. h3 — Deny Black the Bg4 pin.",
    18: "10. Nbd2 — Knight begins standard Italian journey toward g3/f5.",
    20: "11. Nf1 — Maneuvering knight to the kingside outpost.",
    22: "12. Ng3 — Knight achieves ideal kingside attacking post.",
    24: "13. exd5 — Liquidate center at the optimal moment to maximize piece coordination!"
  }
};

export const pianissimoNc3Line = {
  id: 'pianissimo-nc3',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Modern Pianissimo – Four Knights Setup (5. Nc3)',
  shortName: 'Four Knights Setup',
  category: 'Positional Outpost',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 h6 7. Bxf6 Qxf6 8. Nd5 Qd8 9. c3 a6 10. d4 Ba7 11. dxe5 dxe5 12. O-O',
  fullAnnotation: 'White trades on f6 to lock down the d5 outpost for the knight.',
  previewFEN: 'r1bq1rk1/bpp2pp1/p1n4p/3Np3/2B1P3/2P5/PP3PPP/R2Q1RK1 b - - 2 12',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Develop knight toward center.",
    4:  "3. Bc4 — Italian Bishop on c4.",
    6:  "4. d3 — Quiet Pianissimo system.",
    8:  "5. Nc3 — Rapid Four Knights development.",
    10: "6. Bg5 — Pin knight on f6 to exert central pressure.",
    12: "7. Bxf6 — Exchange bishop to weaken Black's kingside coordination.",
    14: "8. Nd5! — Seize dominating d5 outpost with tempo against the queen.",
    16: "9. c3 — Prepare d4 central expansion.",
    18: "10. d4 — Direct strike in the center.",
    20: "11. dxe5 — Open d-file for heavy piece infiltration.",
    22: "12. O-O — Complete development with an unassailable d5 knight outpost!"
  }
};
