/* ============================================================
   THE EVANS GAMBIT REPERTOIRE (5 MASTER LINES)
   ============================================================ */

export const evansGambitLine = {
  id: 'evans-compromised',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – Compromised Defense (7...dxc3)',
  shortName: 'Compromised Defense',
  category: 'Tactical Gambit',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Rad1 b5 13. Bd3 Qh5',
  fullAnnotation: 'The ultimate gambit test. White gives two pawns to completely dominate central development.',
  previewFEN: 'r1b2rk1/p1ppnppp/2n5/1p5q/8/BBNQ4/P4PPP/3R1RK1 w - - 0 14',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5 pawn.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. b4! — The Evans Gambit! Sacrificing a wing pawn to gain central tempos.",
    8:  "5. c3 — Gain tempo on the bishop to prepare d4.",
    10: "6. d4 — Central blast breaking Black's position.",
    12: "7. O-O — Castle into safety, inviting Black to grab more pawns.",
    14: "8. Qb3 — Double battery against f7 and b7.",
    16: "9. e5 — Thrust e-pawn forward driving the queen into awkward squares.",
    18: "10. Nxc3 — Regain development lead with rapid piece deployment.",
    20: "11. Ba3 — Control the lethal a3-f8 diagonal, preventing Black from castling easily.",
    22: "12. Rad1 — Centralize rook on the semi-open d-file.",
    24: "13. Bd3 — Retreat bishop with direct attack on the black queen!"
  }
};

export const evansLaskerLine = {
  id: 'evans-lasker',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – Lasker Defense (6...d6)',
  shortName: 'Lasker Defense',
  category: 'Positional Gambit',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qb3 Qd7 8. dxe5 Bb6 9. Nbd2 Na5 10. Qc2 Nxc4 11. Nxc4 d5 12. Nxb6 axb6 13. O-O',
  fullAnnotation: 'Black attempts to return the pawn with 6...d6. White retains space and superior pawn mobility.',
  previewFEN: 'r1b1k1nr/1ppq1ppp/1p6/3pp3/2B1P3/2P5/P1Q2PPP/R1B2RK1 b kq - 1 13',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5 pawn.",
    4:  "3. Bc4 — Italian Bishop aiming at f7.",
    6:  "4. b4 — The Evans Gambit wing sacrifice.",
    8:  "5. c3 — Prepare d4 central thrust.",
    10: "6. d4 — Strike in the center.",
    12: "7. Qb3 — Immediate pressure on f7 forcing defensive queen placement.",
    14: "8. dxe5 — Open central files and create active piece play.",
    16: "9. Nbd2 — Develop knight to c4 to challenge Black's bishops.",
    18: "10. Qc2 — Safeguard queen while maintaining central coordination.",
    20: "11. Nxc4 — Recapture knight with active central placement.",
    22: "12. Nxb6 — Eliminate the powerful dark-squared bishop.",
    24: "13. O-O — Complete development with superior pawn mobility!"
  }
};

export const evansBe7Line = {
  id: 'evans-be7',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – 5...Be7 Defense',
  shortName: '5...Be7 Defense',
  category: 'Black Sideline',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 Na5 7. Be2 exd4 8. Qxd4 Nf6 9. e5 Nc6 10. Qa4 Nd5 11. Qg4 g6 12. Qe4',
  fullAnnotation: 'Black retreats the bishop modestly with 5...Be7. White aggressively targets Black\'s uncoordinated knights and kingside.',
  previewFEN: 'r1bqk2r/ppppb2p/2n3p1/3nP3/4Q3/2P5/P3BPPP/RNB1K2R b KQkq - 2 12',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7 square.",
    6:  "4. b4 — The Evans Gambit.",
    8:  "5. c3 — Kick bishop to e7.",
    10: "6. d4 — Strike in the center.",
    12: "7. Be2 — Preserve the bishop pair against 6...Na5.",
    14: "8. Qxd4 — Centralize queen with devastating central authority.",
    16: "9. e5 — Thrust forward attacking the f6 knight.",
    18: "10. Qa4 — Queen pivots to a4 pinning Black's knight.",
    20: "11. Qg4 — Rapid kingside switch punishing Black's weak dark squares.",
    22: "12. Qe4 — Reposition queen to dominate the center and trap the d5 knight!"
  }
};

export const evansBc5Line = {
  id: 'evans-bc5',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – Stone-Ware Defense (5...Bc5)',
  shortName: 'Stone-Ware Defense',
  category: 'Sharp Mainline',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Bb5 Bd7 11. e5',
  fullAnnotation: 'The classic Stone-Ware retreat. White builds a massive d4/e4 pawn center and bursts through with 11. e5.',
  previewFEN: 'r2qk1nr/pppb1ppp/1bnp4/1B2P3/3PP3/2N2N2/P4PPP/R1BQ1RK1 b kq - 0 11',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7.",
    6:  "4. b4 — The Evans Gambit.",
    8:  "5. c3 — Gain tempo on c5 bishop.",
    10: "6. d4 — Center clash.",
    12: "7. O-O — Castle into king safety.",
    14: "8. cxd4 — Establish formidable center pawn duo.",
    16: "9. Nc3 — Rapid knight development.",
    18: "10. Bb5 — Pin c6 knight to open central tactics.",
    20: "11. e5! — Central breakthrough tearing open Black's defense!"
  }
};

export const evansDeclinedLine = {
  id: 'evans-declined',
  courseId: 'italian-game',
  subCourseId: 'italian-evans-gambit',
  name: 'Evans Gambit – Declined Variation (4...Bb6)',
  shortName: 'Evans Declined',
  category: 'Positional Space',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3 Nf6 7. Nd5 Nxd5 8. exd5 Nd4 9. a5 Ba7 10. d6 cxd6 11. Nxd4 Bxd4 12. c3',
  fullAnnotation: 'When Black declines the gambit, White immediately seizes queen-side space with a4-a5 and d6 wedges.',
  previewFEN: 'r1bqk2r/bp1p1ppp/p2p4/P3p3/1P1b4/2P5/3P1PPP/R1BQK2R b KQkq - 0 12',
  annotations: {
    0:  "1. e4 — Classical king's pawn.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7 square.",
    6:  "4. b4 — Offer the Evans wing pawn.",
    8:  "5. a4 — Black declines; White aggressively advances the a-pawn to trap the bishop.",
    10: "6. Nc3 — Develop knight to c3 preparing Nd5 outpost.",
    12: "7. Nd5 — Central knight outpost dominating the board.",
    14: "8. exd5 — Recapture opening the e-file for tactical pressure.",
    16: "9. a5 — Drive the bishop back to the passive a7 square.",
    18: "10. d6 — Pawn wedge disrupting Black's pawn structure!",
    20: "11. Nxd4 — Trade active knights.",
    22: "12. c3 — Kick Black's bishop and solidify queenside dominance!"
  }
};
