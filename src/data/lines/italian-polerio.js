/* ============================================================
   TWO KNIGHTS – POLERIO 5...Na5 COUNTER (PGN TREE)
   ============================================================ */

export const polerioCounterLine = {
  id: 'polerio-counter',
  courseId: 'italian-game',
  name: 'Polerio Main Line Counter',
  shortName: 'Polerio Counter',
  category: 'Prophylactic Defense',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 exd3 12. Nxd3',
  fullAnnotation: 'Black avoids Fried Liver with 5…Na5. White keeps extra pawn and solidifies central outpost.',
  previewFEN: 'r2qk2r/p4pp1/2pb1n1p/n7/8/3N4/PPP1BPPP/RNBQK2R b KQkq - 0 12',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Knight development.",
    4:  "3. Bc4 — Italian Bishop aiming at f7.",
    6:  "4. Ng5 — Aggressive knight assault.",
    8:  "5. exd5 — Win pawn on d5.",
    10: "6. Bb5+ — Check! Intermezzo forcing c6.",
    12: "7. dxc6 — Maintain pawn advantage.",
    14: "8. Be2 — Solid bishop retreat denying tactical tricks.",
    16: "9. Nf3 — Preserve solid structure.",
    18: "10. Ne5 — Dominating central outpost eyeing d7 and f7.",
    20: "11. d4 — Counter-strike opening diagonal for bishop.",
    22: "12. Nxd3 — Recapture retaining solid extra pawn!"
  }
};
