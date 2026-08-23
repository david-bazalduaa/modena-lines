/* ============================================================
   TWO KNIGHTS DEFENSE REPERTOIRE (5 MASTER LINES)
   ============================================================ */

export const friedLiverLine = {
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
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Italian Bishop active on the a2-g8 diagonal.",
    6:  "4. Ng5! — Aggressive knight leap assaulting vulnerable f7 square.",
    8:  "5. exd5 — Open d-file against Black's king.",
    10: "6. Nxf7!! — The Fried Liver Sacrifice! Drag King into center crossfire.",
    12: "7. Qf3+ — Check! Queen enters attack with tempo.",
    14: "8. Nc3 — Pressure pinned d5 defender.",
    16: "9. d4 — Rip open central files to expose the exposed king.",
    18: "10. Bg5 — Pin knight on e7, adding fourth attacker on d5.",
    20: "11. Bxe7 — Eliminate key defender.",
    22: "12. O-O-O — Queenside castling unleashing d-file rook directly into the pin.",
    24: "13. Qe4 — Centralized queen dominates with devastating tactical threats.",
    26: "14. Kb1 — Step king out of check; Black cannot survive the pins!"
  }
};

export const polerioCounterLine = {
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
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Develop and attack e5.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. Ng5 — Attack f7 in Two Knights Defense.",
    8:  "5. exd5 — Open d-file.",
    10: "6. Bb5+ — Check! Force Black to give a pawn with c6.",
    12: "7. dxc6 — Pocket the gambit pawn.",
    14: "8. Be2 — Solid retreat securing the king.",
    16: "9. Nf3 — Knight steps back, maintaining defensive control.",
    18: "10. Ne5 — Secure advanced knight outpost on e5.",
    20: "11. d4 — Solidify center and support knight on e5.",
    22: "12. Nxd3 — En passant recapture, maintaining healthy pawn structure.",
    24: "13. b3 — Prepare fianchetto development for the dark-squared bishop.",
    26: "14. Bb2 — Powerful diagonal bishop pressure aiming at Black's kingside!"
  }
};

export const fritzCounterLine = {
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
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Italian Bishop aiming at f7.",
    6:  "4. Ng5 — Attack f7 in Two Knights Defense.",
    8:  "5. exd5 — Capture central pawn.",
    10: "6. c3 — Kick the aggressive d4 knight.",
    12: "7. Bf1 — Precise bishop retreat preserving defensive coordination.",
    14: "8. Ne4 — Knight returns to central square dominating Black's knights.",
    16: "9. Bxb5+ — Cash in the b5 pawn with check!",
    18: "10. Bxd7+ — Trade bishop to eliminate Black's active pieces.",
    20: "11. O-O — Castle into complete safety.",
    22: "12. d3 — Solidify central pawns with a healthy extra pawn advantage!"
  }
};

export const ulvestadLine = {
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
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7.",
    6:  "4. Ng5 — Two Knights Attack.",
    8:  "5. exd5 — Central capture.",
    10: "6. Bf1 — Prophylactic retreat denying Black's tactical fork tricks.",
    12: "7. c3 — Attack Black's centralized knight.",
    14: "8. Ne4 — Central knight repositioning.",
    16: "9. Bxb5+ — Check and win the loose flank pawn.",
    18: "10. Bxd7+ — Simplify into a winning positional endgame.",
    20: "11. d3 — Anchor the central pawn chain.",
    22: "12. O-O — Kingside safety with decisive pawn superiority!"
  }
};

export const traxlerRefutationLine = {
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
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. Ng5 — Attack f7 in Two Knights Defense.",
    8:  "5. Bxf7+! — Clean refutation of Traxler Counter-Attack, depriving Black of castling rights.",
    10: "6. Bd5 — Safe retreat maintaining pressure on the center.",
    12: "7. O-O — Castle into complete safety.",
    14: "8. c3 — Prepare central d4 pawn break.",
    16: "9. Qe1 — Step queen out of the Bg4 pin while connecting rooks.",
    18: "10. d4 — Center break opening lines against Black's uncoordinated army.",
    20: "11. Bxc6 — Trade bishop to shatter Black's queenside pawn structure.",
    22: "12. e5! — Powerful central pawn fork crushing Black's defenses!"
  }
};
