/* ============================================================
   MODERN PIANISSIMO REPERTOIRE (25 MASTER LINES)
   ============================================================ */

export const pianissimoLines = [
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare central pawn flexibility.", 8: "5. d3 — Solid Pianissimo foundation.", 10: "6. O-O — Castle into safety.",
      12: "7. Bb3 — Prophylactic bishop retreat.", 14: "8. Re1 — Support e4 pawn.", 16: "9. h3 — Deny Bg4.",
      18: "10. Nbd2 — Standard Italian knight route.", 20: "11. Nf1 — Knight transfer.", 22: "12. Ng3 — Ideal attacking outpost.",
      24: "13. exd5 — Liquidate center to maximize piece harmony!"
    }
  },
  {
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
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid Pianissimo.", 8: "5. Nc3 — Four Knights development.", 10: "6. Bg5 — Pin f6 knight.",
      12: "7. Bxf6 — Weaken kingside.", 14: "8. Nd5! — Seize d5 outpost with tempo.", 16: "9. c3 — Prepare d4.",
      18: "10. d4 — Center break.", 20: "11. dxe5 — Open d-file.", 22: "12. O-O — Complete king safety!"
    }
  },
  {
    id: 'italian-hungarian',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Italian Game – Hungarian Defense (3...Be7)',
    shortName: 'Hungarian Defense',
    category: 'Solid Setup',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. dxe5 dxe5 6. Qxd8+ Bxd8 7. Nc3 Nf6 8. Bg5 O-O 9. O-O-O Bg4 10. Be2 h6 11. Be3',
    fullAnnotation: 'Black plays 3...Be7. White transitions into a dominating queenless endgame.',
    previewFEN: 'r2b1rk1/ppp2pp1/2n2n1p/4p3/2B1P3/2N1B3/PPP1BPPP/2KR3R b - - 3 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Central strike.", 8: "5. dxe5 — Trade central pawns.", 10: "6. Qxd8+ — Trade queens.",
      12: "7. Nc3 — Knight development.", 14: "8. Bg5 — Active pin.", 16: "9. O-O-O — Long castling.",
      18: "10. Be2 — Solid retreat.", 20: "11. Be3 — Control central outposts!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Solid foundation.", 8: "5. O-O — Early castling.", 10: "6. c3 — Prepare center.",
      12: "7. h3 — Deny Bg4 pin.", 14: "8. Bb3 — Bishop retreat.", 16: "9. Re1 — Rook reinforcement.",
      18: "10. Nbd2 — Knight maneuvering.", 20: "11. Bc2 — Preserve light-squared bishop!"
    }
  },
  {
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
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Quiet opening.", 8: "5. c3 — Support center.", 10: "6. Bb3 — Bishop retreat.",
      12: "7. Nbd2 — Knight maneuvering.", 14: "8. Bc2 — Aim at h7.", 16: "9. Qe2 — Guard e4.",
      18: "10. h3 — Support g4.", 20: "11. g4! — Direct kingside assault!"
    }
  },
  {
    id: 'pianissimo-8-h6-system',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 8...h6 Prophylactic Line',
    shortName: '8...h6 System',
    category: 'Positional Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. a4 Ba7 8. Re1 h6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. a4 Ba7 8. Re1 h6 9. Nbd2 O-O 10. Nf1 Be6 11. Bxe6 fxe6 12. Be3',
    fullAnnotation: 'White controls the queenside with a4 and trades dark-squared bishops to establish solid central authority.',
    previewFEN: 'r2q1rk1/bpp3p1/p1npP2p/4p3/P3P3/2PPBN2/1P3PPP/R2QRNK1 b - - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid Pianissimo.", 10: "6. O-O — Castle safely.",
      12: "7. a4 — Queenside control.", 14: "8. Re1 — Central rook.", 16: "9. Nbd2 — Knight route.",
      18: "10. Nf1 — Knight transfer.", 20: "11. Bxe6 — Trade bishops.", 22: "12. Be3 — Control long diagonal!"
    }
  },
  {
    id: 'pianissimo-7-oo-re1',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 7...O-O 8. Re1 Line',
    shortName: '7...O-O 8. Re1',
    category: 'Main Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 O-O 8. Re1 h6 9. Nbd2 Be6 10. Nf1 Re8 11. Ng3 Qd7 12. d4',
    fullAnnotation: 'White strikes centrally with 12. d4 after completing the standard knight transfer to g3.',
    previewFEN: 'r3r1k1/1ppq1pp1/p1npbn1p/2b1p3/3PP3/1BPP1NN1/PP3PPP/R1BQR1K1 b - - 0 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle safely.",
      12: "7. Bb3 — Prophylactic retreat.", 14: "8. Re1 — Support e4.", 16: "9. Nbd2 — Knight route.",
      18: "10. Nf1 — Knight transfer.", 20: "11. Ng3 — King outpost.", 22: "12. d4! — Central breakthrough!"
    }
  },
  {
    id: 'pianissimo-6-oo-a4',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 6...O-O 7. a4 Flank Space',
    shortName: '6...O-O 7. a4',
    category: 'Flank Expansion',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. a4 a5 8. Bg5 h6 9. Bh4 Be6 10. Nbd2 g5 11. Bg3',
    fullAnnotation: 'White pins Black\'s knight with 8. Bg5 and safely tucks the bishop to g3 against Black\'s pawn storm.',
    previewFEN: 'r2q1rk1/1pp2p2/2npbn1p/p1b1p1p1/P1B1P3/2PP1NBP/1P1N1PP1/R2Q1RK1 b - - 1 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle safely.",
      12: "7. a4 — Flank expansion.", 14: "8. Bg5 — Pin f6 knight.", 16: "9. Bh4 — Maintain pin.",
      18: "10. Nbd2 — Knight develops.", 20: "11. Bg3 — Solid bishop placement!"
    }
  },
  {
    id: 'pianissimo-5-a6-ba7',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – Early 5...a6 Setup',
    shortName: 'Early 5...a6 Setup',
    category: 'Positional Quiet',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 a6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 a6 6. O-O Ba7 7. Nbd2 d6 8. Bb3 O-O 9. h3 Be6 10. Bc2 d5 11. Re1',
    fullAnnotation: 'White coordinates with 8. Bb3 and 10. Bc2, preparing the central clash after Black plays ...d5.',
    previewFEN: 'r2q1rk1/bpp2ppp/p1n1bn2/3pp3/4P3/2PP1N1P/PPBN1PP1/R1BQR1K1 b - - 1 11',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid foundation.", 10: "6. O-O — Castle into safety.",
      12: "7. Nbd2 — Knight route.", 14: "8. Bb3 — Bishop retreat.", 16: "9. h3 — Deny Bg4.",
      18: "10. Bc2 — Aim at h7.", 20: "11. Re1 — Active central rook!"
    }
  },
  {
    id: 'pianissimo-5-d6-bb3',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 5...d6 6. Bb3 Line',
    shortName: '5...d6 6. Bb3',
    category: 'Positional Strategy',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 Nf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 Nf6 6. Bb3 O-O 7. O-O a5 8. Nbd2 Be6 9. Bc2 d5 10. Qe2 Re8 11. h3',
    fullAnnotation: 'White prepares harmonious central coordination with 9. Bc2, 10. Qe2, and 11. h3.',
    previewFEN: 'r2qr1k1/1pp2ppp/2n1bn2/p1bpp3/4P3/2PP1N1P/PPBNQPP1/R1B2RK1 b - - 1 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Solid center.", 8: "5. c3 — Prepare support.", 10: "6. Bb3 — Bishop retreat.",
      12: "7. O-O — Castle into safety.", 14: "8. Nbd2 — Knight maneuvering.", 16: "9. Bc2 — Aim at kingside.",
      18: "10. Qe2 — Guard e4.", 20: "11. h3 — Solid prophylaxis!"
    }
  },
  {
    id: 'pianissimo-four-knights-bg4',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – Four Knights 6...Bg4 Pin',
    shortName: 'Four Knights 6...Bg4',
    category: 'Sharp Pin',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 Bg4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 Bg4 7. Nd5 Nd4 8. c3 Nxf3+ 9. gxf3 Be6 10. Nxf6+ gxf6 11. Bxe6 fxe6 12. Be3',
    fullAnnotation: 'Double pin battle. White emerges with shattered black kingside pawns and healthy development.',
    previewFEN: 'r2qk2r/ppp4p/3ppp2/2b1p3/4P3/2PPBP2/PP3P1P/R2QK2R b KQkq - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Solid center.", 8: "5. Nc3 — Four Knights setup.", 10: "6. Bg5 — Pin f6 knight.",
      12: "7. Nd5 — Seize d5 outpost.", 14: "8. c3 — Kick d4 knight.", 16: "9. gxf3 — Recapture piece.",
      18: "10. Nxf6+ — Check forcing pawn capture.", 20: "11. Bxe6 — Trade bishops.", 22: "12. Be3 — Superior pawn structure advantage!"
    }
  },
  {
    id: 'pianissimo-four-knights-be6',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – Four Knights 6...Be6 Line',
    shortName: 'Four Knights 6...Be6',
    category: 'Positional Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 Be6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 Be6 7. Nd5 Bxd5 8. Bxd5 h6 9. Bh4 g5 10. Bg3 Nxd5 11. exd5 Ne7 12. c4',
    fullAnnotation: 'White controls the d5 point and reinforces with 12. c4, keeping Black\'s knight out of play.',
    previewFEN: 'r2qk2r/ppp1np2/3p3p/2bPp1p1/2P5/3P1NB1/PP3PPP/R2QK2R b KQkq - 0 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid center.", 8: "5. Nc3 — Knight development.", 10: "6. Bg5 — Pin f6.",
      12: "7. Nd5 — Occupy d5.", 14: "8. Bxd5 — Recapture bishop.", 16: "9. Bh4 — Maintain pin.",
      18: "10. Bg3 — Bishop retreat.", 20: "11. exd5 — Open e-file.", 22: "12. c4 — Solidify d5 pawn wedge!"
    }
  },
  {
    id: 'pianissimo-four-knights-na5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – Four Knights 7...Na5 Line',
    shortName: 'Four Knights 7...Na5',
    category: 'Positional Edge',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 h6 7. Bh4 Na5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 h6 7. Bh4 Na5 8. Bb3 Nxb3 9. axb3 c6 10. O-O g5 11. Bg3',
    fullAnnotation: 'Black hunts the bishop pair. White opens the a-file with 9. axb3 and retreats safely with 11. Bg3.',
    previewFEN: 'r1bqk2r/pp3p2/2pp1n1p/2b1p1p1/4P3/1PNP1NBP/1PP2PP1/R2Q1RK1 b kq - 1 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Solid center.", 8: "5. Nc3 — Knight development.", 10: "6. Bg5 — Pin f6.",
      12: "7. Bh4 — Maintain pin.", 14: "8. Bb3 — Bishop retreat.", 16: "9. axb3 — Open a-file.",
      18: "10. O-O — Castle into safety.", 20: "11. Bg3 — Solid positional structure!"
    }
  },
  {
    id: 'hungarian-4-nf6-line',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Italian Game – Hungarian 4...Nf6 Counter',
    shortName: 'Hungarian 4...Nf6',
    category: 'Sharp Counter',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. dxe5 Nxe5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. dxe5 Nxe5 6. Nxe5 dxe5 7. Qh5 g6 8. Qxe5 Nf6 9. Bh6 Rg8 10. Nc3',
    fullAnnotation: 'White attacks f7 with 7. Qh5! and pins Black\'s pieces with 9. Bh6.',
    previewFEN: 'r1bqk1r1/ppp1bp1p/5npB/4Q3/2B1P3/2N5/PPP2PPP/R3K2R b KQq - 2 10',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Strike center.", 8: "5. dxe5 — Central capture.", 10: "6. Nxe5 — Trade knights.",
      12: "7. Qh5! — Double attack on f7 and e5.", 14: "8. Qxe5 — Grab central pawn.", 16: "9. Bh6 — Paralyze Black's kingside.",
      18: "10. Nc3 — Rapid mobilization with decisive advantage!"
    }
  },
  {
    id: 'hungarian-nxd4-open',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Italian Game – Hungarian 4...exd4 5. Nxd4 Open Center',
    shortName: 'Hungarian 5. Nxd4',
    category: 'Open Center',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. Nxd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. Nxd4 Nf6 6. Nc3 O-O 7. O-O d6 8. Re1 Re8 9. h3 a6 10. a4 Bd7 11. Be3',
    fullAnnotation: 'White recaptures on d4 with 5. Nxd4, keeping active piece dominance across the center and controlling the d5 outpost.',
    previewFEN: 'r2qr1k1/1ppb1ppp/p1np1n2/8/P1BNP3/2N1B2P/1PP2PP1/R2QR1K1 b - - 2 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Center strike.", 8: "5. Nxd4 — Central knight recapture.", 10: "6. Nc3 — Rapid development.",
      12: "7. O-O — Castle into safety.", 14: "8. Re1 — Active central rook.", 16: "9. h3 — Deny Bg4.",
      18: "10. a4 — Queenside expansion.", 20: "11. Be3 — Total central authority!"
    }
  },
  {
    id: 'hungarian-4-oo-solid',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Italian Game – Hungarian 4. O-O Line',
    shortName: 'Hungarian 4. O-O',
    category: 'Solid Strategy',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 Bg4 8. Nbd2 d5 9. Bb3 dxe4 10. dxe4',
    fullAnnotation: 'White builds a solid center with 6. c3 and retains central superiority after 10. dxe4.',
    previewFEN: 'r2q1rk1/ppp1bppp/2n2n2/4p3/4P1b1/1BP2N2/PP1N1PPP/R1BQR1K1 b - - 0 10',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. O-O — Early castling.", 8: "5. d3 — Solid center.", 10: "6. c3 — Prepare center support.",
      12: "7. Re1 — Active rook.", 14: "8. Nbd2 — Knight maneuvering.", 16: "9. Bb3 — Bishop retreat.",
      18: "10. dxe4 — Central pawn control!"
    }
  },
  {
    id: 'pianissimo-two-knights-bc5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 3...Nf6 4. d3 Bc5 System',
    shortName: '4. d3 Bc5 System',
    category: 'Grandmaster Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d5 7. exd5 Nxd5 8. Re1 Bg4 9. Nbd2 Nb6 10. h3 Bh5 11. Bb5',
    fullAnnotation: 'Black strikes with 6...d5. White pins the c6 knight with 11. Bb5 and attacks the e5 pawn.',
    previewFEN: 'r2q1rk1/ppp2ppp/1nn5/1B2p2b/8/2PP1N1P/PP1N1PP1/R1BQR1K1 b - - 4 11',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Quiet Italian.", 8: "5. c3 — Prepare center.", 10: "6. O-O — Castle into safety.",
      12: "7. exd5 — Liquidate center.", 14: "8. Re1 — Attack e5.", 16: "9. Nbd2 — Knight develops.",
      18: "10. h3 — Ask bishop.", 20: "11. Bb5 — Pin knight to win e5 pawn!"
    }
  },
  {
    id: 'pianissimo-two-knights-d5-strike',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – Early 4...d5 Break Refutation',
    shortName: '4...d5 Break Refutation',
    category: 'Sharp Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d5 5. exd5 Nxd5 6. O-O Bg4 7. Re1 Be7 8. h3 Bh5 9. g4 Bg6 10. Nxe5 Nxe5 11. Rxe5',
    fullAnnotation: 'White refutes Black\'s premature 4...d5 with 8. h3 and 9. g4, winning the central e5 pawn.',
    previewFEN: 'r2qk2r/ppp1bppp/6b1/3nR3/2B3P1/3P3P/PPP2P2/RNBQ2K1 b kq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d3 — Solid foundation.", 8: "5. exd5 — Central capture.", 10: "6. O-O — Castle safely.",
      12: "7. Re1 — Pressure e5.", 14: "8. h3 — Attack bishop.", 16: "9. g4 — Break pin.",
      18: "10. Nxe5 — Capture central pawn.", 20: "11. Rxe5 — Healthy extra pawn and central domination!"
    }
  },
  {
    id: 'pianissimo-4-oo-ne7-route',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 4. O-O 9...Ne7 Route',
    shortName: '9...Ne7 Knight Route',
    category: 'Positional Strategy',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 a6 7. a4 Ba7 8. Nbd2 O-O 9. h3 Ne7 10. Re1 Ng6 11. Nf1',
    fullAnnotation: 'Classic knight maneuvering battle where White routes Nf1-g3 to meet Black\'s Ng6 transfer.',
    previewFEN: 'r1bq1rk1/bpp2ppp/p2p1nn1/4p3/P1B1P3/2PP1N1P/1P1N1PP1/R1BQR1K1 b - - 4 11',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. O-O — Castle safely.", 8: "5. d3 — Solid center.", 10: "6. c3 — Prepare center.",
      12: "7. a4 — Queenside space.", 14: "8. Nbd2 — Knight route.", 16: "9. h3 — Deny Bg4.",
      18: "10. Re1 — Central rook.", 20: "11. Nf1 — Knight achieves ideal flexible post!"
    }
  },
  {
    id: 'pianissimo-7-re1-h6',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 7. Re1 h6 8. Nbd2 Setup',
    shortName: '7. Re1 h6 Setup',
    category: 'Grandmaster Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Re1 h6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Re1 h6 8. Nbd2 O-O 9. Nf1 Be6 10. Bb3 d5 11. exd5 Bxd5 12. Ng3',
    fullAnnotation: 'White allows the ...d5 break and dominates the resulting open lines with 12. Ng3.',
    previewFEN: 'r2q1rk1/1pp2pp1/p1n2n1p/2bbp3/8/1BPP1NN1/PP3PPP/R1BQR1K1 b - - 2 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle into safety.",
      12: "7. Re1 — Active rook.", 14: "8. Nbd2 — Knight route.", 16: "9. Nf1 — Knight transfer.",
      18: "10. Bb3 — Bishop retreat.", 20: "11. exd5 — Liquidate center.", 22: "12. Ng3 — Active piece pressure!"
    }
  },
  {
    id: 'pianissimo-8-nbd2-ne7',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 8. Nbd2 Ne7 Central Clash',
    shortName: '8. Nbd2 Ne7 Clash',
    category: 'Positional Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 Ne7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 Ne7 9. Re1 Ng6 10. Nf1 O-O 11. Ng3 c6 12. d4',
    fullAnnotation: 'White strikes in the center with 12. d4, achieving complete central authority.',
    previewFEN: 'r1bq1rk1/bp3ppp/p1pp1nn1/4p3/3PP3/1BPP1NN1/PP3PPP/R1BQR1K1 b - - 0 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle safely.",
      12: "7. Bb3 — Bishop retreat.", 14: "8. Nbd2 — Knight route.", 16: "9. Re1 — Support e4.",
      18: "10. Nf1 — Knight transfer.", 20: "11. Ng3 — King outpost.", 22: "12. d4! — Dominant central strike!"
    }
  },
  {
    id: 'pianissimo-9-h3-re8',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 9. h3 Re8 Mainline',
    shortName: '9. h3 Re8 Mainline',
    category: 'Super-GM Standard',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Re1 O-O 9. h3 Re8',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Re1 O-O 9. h3 Re8 10. Nbd2 Be6 11. Nf1 h6 12. Ng3 d5 13. exd5',
    fullAnnotation: 'The elite grandmaster standard. White balances prophylaxis with piece activity.',
    previewFEN: 'r2qr1k1/bpp2pp1/p1n1bn1p/3bp3/8/1BPP1NNP/PP3PP1/R1BQR1K1 b - - 0 13',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid foundation.", 10: "6. O-O — Castle into safety.",
      12: "7. Bb3 — Bishop retreat.", 14: "8. Re1 — Central rook.", 16: "9. h3 — Deny Bg4.",
      18: "10. Nbd2 — Knight route.", 20: "11. Nf1 — Knight transfer.", 22: "12. Ng3 — Attacking post.",
      24: "13. exd5 — Liquidate center to maximize piece activity!"
    }
  },
  {
    id: 'pianissimo-10-a4-b6',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 10. a4 b6 Queenside Line',
    shortName: '10. a4 b6 Line',
    category: 'Queenside Battle',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 h6 10. a4 b6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 h6 10. a4 b6 11. Re1 Bb7 12. Nf1',
    fullAnnotation: 'Black fianchettoes the queen\'s bishop on b7. White centralizes with Re1 and Nf1-g3.',
    previewFEN: 'r2q1rk1/bbp2pp1/ppnp1n1p/4p3/P3P3/1BPP1N1P/1P1N1PP1/R1BQR1K1 w - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle safely.",
      12: "7. Bb3 — Bishop retreat.", 14: "8. Nbd2 — Knight route.", 16: "9. h3 — Deny Bg4.",
      18: "10. a4 — Queenside expansion.", 20: "11. Re1 — Active rook.", 22: "12. Nf1 — Complete piece coordination!"
    }
  },
  {
    id: 'pianissimo-5-oo-bg5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 5...O-O 6. Bg5 Pin Line',
    shortName: '5...O-O 6. Bg5',
    category: 'Positional Pin',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O O-O 6. Bg5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O O-O 6. Bg5 h6 7. Bh4 Be7 8. Nbd2 d6 9. c3 Nh7 10. Bxe7 Qxe7 11. Re1',
    fullAnnotation: 'White pins with 6. Bg5 and exchanges dark bishops to solidify long-term central control.',
    previewFEN: 'r1b2rk1/ppp1qppn/2np3p/4p3/2B1P3/2PP1N2/PP1N1PPP/R2QR1K1 b - - 1 11',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid center.", 8: "5. O-O — Castle into safety.", 10: "6. Bg5 — Pin f6 knight.",
      12: "7. Bh4 — Maintain pin.", 14: "8. Nbd2 — Knight develops.", 16: "9. c3 — Prepare center support.",
      18: "10. Bxe7 — Trade bishops.", 20: "11. Re1 — Central rook authority!"
    }
  },
  {
    id: 'pianissimo-6-h6-nbd2',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Modern Pianissimo – 6...h6 7. Nbd2 Setup',
    shortName: '6...h6 7. Nbd2',
    category: 'Positional Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O h6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O h6 7. Nbd2 a6 8. Bb3 Ba7 9. Re1 O-O 10. Nf1 Be6 11. Ng3 Qd7 12. d4',
    fullAnnotation: 'White breaks in the center with 12. d4, seizing maximum control across all critical squares.',
    previewFEN: 'r4rk1/bppq1pp1/p1npbn1p/4p3/3PP3/1BPP1NN1/PP3PPP/R1BQR1K1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d3 — Solid center.", 10: "6. O-O — Castle into safety.",
      12: "7. Nbd2 — Knight route.", 14: "8. Bb3 — Bishop retreat.", 16: "9. Re1 — Active rook.",
      18: "10. Nf1 — Knight transfer.", 20: "11. Ng3 — Attacking post.", 22: "12. d4! — Decisive central breakthrough!"
    }
  },

  // ============================================================
  // TACTICAL PUNISHMENT & BLUNDER REFUTATION LINES
  // ============================================================
  {
    id: "italian-punish-pianissimo-pin",
    courseId: "italian-game",
    subCourseId: "italian-pianissimo",
    name: "Giuoco Pianissimo – Premature ...Bg4 Pin Punished (9. h3 Bh5 10. g4!)",
    shortName: "Pianissimo ...Bg4 Punished",
    category: "Tactical Destruction",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Be6 10. Re1 Bxb3 11. axb3",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O a6 7. Bb3 Ba7 8. Nbd2 O-O 9. h3 Kh8 10. Re1 Nh5 11. Nf1 f5 12. exf5 Bxf5 13. g4 Nf4 14. Bxf4 exf4 15. gxf5 Rxf5 16. d4 Qf6 17. N1h2 Rf8 18. Re6 Qd8 19. Qe2 Nb8 20. Re1",
    fullAnnotation: "Black miscalculates with a premature f5 break and bishop pin in the Pianissimo. White dominates the open e-file with heavy artillery.",
    previewFEN: "1n1q1r1k/bpp3pp/p2pR3/5r2/3P1p2/1BP2N1P/PP2QP1N/4R1K1 b - - 8 20",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Quiet Italian.",
      8: "5. c3 — Reinforce center.",
      10: "6. O-O — Kingside safety.",
      12: "7. Bb3 — Bishop tucks away.",
      14: "8. Nbd2 — Reroute maneuver.",
      16: "9. h3 — Deny g4 square.",
      18: "10. Re1 — Seize e-file.",
      20: "11. Nf1 — Knight transfers to g3/e3.",
      21: "Inaccuracy: 11...f5?! exposes Black's king prematurely.",
      22: "12. exf5 — Open e-file lines.",
      24: "13. g4! — Tactical Punishment: Traps and dismantles the piece coordination.",
      26: "14. Bxf4 — Win piece.",
      28: "15. gxf5 — Win bishop.",
      30: "16. d4 — Anchor center.",
      32: "17. N1h2 — Coordinate defense.",
      34: "18. Re6! — Invasive rook outpost.",
      36: "19. Qe2 — Double on e-file.",
      38: "20. Re1 — Complete stranglehold."
    }
  },
  {
    id: "italian-punish-pianissimo-f5",
    courseId: "italian-game",
    subCourseId: "italian-pianissimo",
    name: "Giuoco Pianissimo – Overaggressive 6...f5? Dismantled",
    shortName: "Early 6...f5 Dismantled",
    category: "Center Punishment",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 d6 5. c3 f5 6. exf5 Bxf5 7. d4 exd4 8. O-O dxc3 9. Nxc3 Nge7 10. Re1 Qd7 11. Bg5 O-O-O 12. Bb5 Rde8 13. Bxe7",
    fullAnnotation: "Black lashes out with 5...f5? in the quiet Italian. White blasts open the center with 7. d4! and pins Black's king in the middle of the board.",
    previewFEN: "2k1r2r/pppqB1pp/2np4/1Bb2b2/8/2N2N2/PP3PPP/R2QR1K1 b - - 0 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Pianissimo.",
      7: "Blunder: 5...f5? fatally weakens the e8-h5 diagonal before castling.",
      8: "6. exf5 — Open up lines.",
      10: "7. d4! — Tactical Punishment: Blast open the center against uncastled king.",
      12: "8. O-O — King safety with massive lead in development.",
      14: "9. Nxc3 — Bring last piece out.",
      16: "10. Re1 — Pin e7 knight.",
      18: "11. Bg5 — Pile on the pinned piece.",
      20: "12. Bb5 — Dual pin on both knights.",
      22: "13. Bxe7 — Win piece and game."
    }
  },
  {
    id: "italian-punish-pianissimo-d5",
    courseId: "italian-game",
    subCourseId: "italian-pianissimo",
    name: "Giuoco Pianissimo – Premature ...d5 Break Refuted by 10. exd5",
    shortName: "Premature ...d5 Refuted",
    category: "Positional Punishment",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O O-O 7. Nbd2 a6 8. Bb3 Ba7 9. h3 d5 10. exd5 Nxd5 11. Re1 Re8 12. Ne4 h6 13. Bxh6 gxh6 14. Bxd5",
    fullAnnotation: "Black rushes the ...d5 central break in the Pianissimo. White exploits the tactical weakness of the d5 knight with 13. Bxh6! and 14. Bxd5.",
    previewFEN: "r1bqr1k1/bpp2p2/p1n4p/3Bp3/4N3/2PP1N1P/PP3PP1/R2QR1K1 b - - 0 14",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center.",
      10: "6. O-O — Castle.",
      12: "7. Nbd2 — Flexible knight.",
      14: "8. Bb3 — Retreat square.",
      16: "9. h3 — Prophylaxis.",
      17: "Inaccuracy: 9...d5?! opens the position prematurely before piece coordination is achieved.",
      18: "10. exd5 — Liquidate center.",
      20: "11. Re1 — Direct pressure on e5.",
      22: "12. Ne4 — Outpost on e4.",
      24: "13. Bxh6! — Tactical Punishment: Greek Gift motif demolishes king shelter.",
      26: "14. Bxd5 — White wins a clean pawn with overwhelming attack."
    }
  }
];

export const pianissimoSuperGMLine = pianissimoLines[0];
export const pianissimoNc3Line = pianissimoLines[1];
export const hungarianDefenseLine = pianissimoLines[2];
export const pianissimoProphylaxisLine = pianissimoLines[3];
export const pianissimoG4AttackLine = pianissimoLines[4];
