/* ============================================================
   MODERN PIANISSIMO & QUIET SYSTEMS REPERTOIRE (5 MASTER LINES)
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

export const hungarianDefenseLine = {
  id: 'italian-hungarian',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Italian Game – Hungarian Defense (3...Be7)',
  shortName: 'Hungarian Defense',
  category: 'Solid Setup',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. dxe5 dxe5 6. Qxd8+ Bxd8 7. Nc3 Nf6 8. Bg5 O-O 9. O-O-O Bg4 10. Be2 h6 11. Be3',
  fullAnnotation: 'Black avoids tactical lines with the passive 3...Be7. White immediately opens the center with 4. d4 and transitions into a dominating queenless endgame.',
  previewFEN: 'r2b1rk1/ppp2pp1/2n2n1p/4p3/2B1P3/2N1B3/PPP1BPPP/2KR3R b - - 3 11',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Italian Bishop aiming at f7.",
    6:  "4. d4 — Strike in the center against passive 3...Be7.",
    8:  "5. dxe5 — Liquidate central tension to force queen trade.",
    10: "6. Qxd8+ — Trade queens, depriving Black of defensive coordination.",
    12: "7. Nc3 — Rapid knight development.",
    14: "8. Bg5 — Active piece pressure on the f6 knight.",
    16: "9. O-O-O — Long castling activating the d-file rook directly.",
    18: "10. Be2 — Solid bishop retreat neutralizing Black's pin.",
    20: "11. Be3 — Control central outposts with pleasant positional dominance!"
  }
};

export const pianissimoProphylaxisLine = {
  id: 'pianissimo-prophylaxis',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Modern Pianissimo – 5. O-O & Prophylaxis',
  shortName: 'Prophylaxis Setup',
  category: 'Positional Strategy',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O d6 6. c3 O-O 7. h3 a6 8. Bb3 h6 9. Re1 Re8 10. Nbd2 Be6 11. Bc2 d5',
  fullAnnotation: 'Modern classical maneuvering. White carefully prepares the Bc2/d4 break while Black pushes ...d5.',
  previewFEN: 'r2qr1k1/1pp2pp1/p1n1bn1p/2bpp3/4P3/2PP1N1P/PPBN1PP1/R1BQR1K1 w - - 1 12',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Target f7.",
    6:  "4. d3 — Solid Pianissimo foundation.",
    8:  "5. O-O — Early castling for king safety.",
    10: "6. c3 — Prepare central pawn flexibility.",
    12: "7. h3 — Deny Black active pins on g4.",
    14: "8. Bb3 — Prophylactic bishop step back.",
    16: "9. Re1 — Central rook reinforcement.",
    18: "10. Nbd2 — Reroute knight toward the kingside.",
    20: "11. Bc2 — Preserve light-squared bishop aiming toward Black's kingside!"
  }
};

export const pianissimoG4AttackLine = {
  id: 'pianissimo-g4-attack',
  courseId: 'italian-game',
  subCourseId: 'italian-pianissimo',
  name: 'Modern Pianissimo – Kingside Thrust (g4 Attack)',
  shortName: 'Kingside Thrust',
  category: 'Aggressive Flank',
  eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3',
  pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 d6 6. Bb3 O-O 7. Nbd2 Be6 8. Bc2 d5 9. Qe2 Re8 10. h3 a5 11. g4',
  fullAnnotation: 'A sharp, aggressive attacking system favored by elite grandmasters. White keeps the king flexible and launches a kingside storm with 11. g4.',
  previewFEN: 'r2qr1k1/1pp2pp1/2n1bn1p/p1bpp3/4P1P1/2PP1N1P/PPBNQP2/R1B1K2R b KQ - 0 11',
  annotations: {
    0:  "1. e4 — King's pawn opening.",
    2:  "2. Nf3 — Attack e5.",
    4:  "3. Bc4 — Italian Bishop active on c4.",
    6:  "4. d3 — Quiet Pianissimo opening.",
    8:  "5. c3 — Prepare c3/d4 support.",
    10: "6. Bb3 — Bishop retreat.",
    12: "7. Nbd2 — Knight maneuvering.",
    14: "8. Bc2 — Reposition bishop aiming at h7.",
    16: "9. Qe2 — Queen reinforces central e4 square.",
    18: "10. h3 — Support g4 expansion.",
    20: "11. g4! — Aggressive kingside expansion initiating a direct assault on Black's king!"
  }
};
