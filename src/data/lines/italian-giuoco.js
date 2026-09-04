/* ============================================================
   GIUOCO PIANO & CENTER ATTACK REPERTOIRE (25 MASTER LINES)
   ============================================================ */

export const giuocoPianoLines = [
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop active on c4.",
      6: "4. c3 — Prepare central d4 thrust.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Bd2 — Interpose check.", 14: "8. Nbxd2 — Knight develops toward center.", 16: "9. exd5 — Liquidate center.",
      18: "10. Qb3 — Pressure b7 and d5.", 20: "11. O-O — Kingside safety.", 22: "12. Rfe1 — Control e-file.",
      24: "13. a4 — Queenside expansion.", 26: "14. Qa3 — Relentless pressure along open e-file!"
    }
  },
  {
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
      0: "1. e4 — Classical stake.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Strike in the center.", 10: "6. cxd4 — Reclaim center.",
      12: "7. Nc3 — Moeller Knight sacrifice!", 14: "8. O-O — Castle into safety.", 16: "9. d5 — Push pawn driving knight away.",
      18: "10. Re1 — Pin knight on e4.", 20: "11. Rxe4 — Regain piece.", 22: "12. Bg5 — Trade dark-squared bishops.",
      24: "13. Nxg5 — Knight leaps forward.", 26: "14. Qe2 — Double heavy pieces on e-file!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Secure center duo.",
      12: "7. Bd2 — Offer bishop exchange.", 14: "8. Nbxd2 — Knight develops toward center.", 16: "9. exd5 — Liquidate center.",
      18: "10. O-O — Castle safely.", 20: "11. h3 — Deny Bg4 pin.", 22: "12. Re1 — Active rook on e-file.",
      24: "13. Bb3 — Preserve Italian Bishop on a2-g8 diagonal!"
    }
  },
  {
    id: 'giuoco-krakow-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Krakow Variation (8...Nxe4)',
    shortName: 'Krakow Variation',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Ke6 12. Qxb4 c5 13. Qa3',
    fullAnnotation: 'Black snatches on e4. White refutes it dynamically with 9. Bxf7+ and 10. Qb3+ winning back the piece with queen dominance.',
    previewFEN: 'r1bq3r/pp4pp/4k3/2ppN3/3nn3/Q7/PP1N1PPP/R3KB1R b - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center break.", 10: "6. cxd4 — Center capture.",
      12: "7. Bd2 — Interpose check.", 14: "8. Bxb4 — Trade bishops.", 16: "9. Bxf7+! — Expose Black's king.",
      18: "10. Qb3+ — Fork king and b4 knight.", 20: "11. Ne5+ — Knight check forcing king forward.", 22: "12. Qxb4 — Regain knight with dominating attack.",
      24: "13. Qa3 — Maintain decisive queen activity!"
    }
  },
  {
    id: 'giuoco-greco-gambit',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Greco Gambit (8...Nxc3)',
    shortName: 'Greco Gambit',
    category: 'Sharp Attack',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 Bxc3 10. Ba3 d5 11. Bb5 Bxa1 12. Re1+ Be6 13. Qa4',
    fullAnnotation: 'The classical Greco Gambit where White sacrifices both rooks for a devastating king hunt along the a3-f8 and e-files.',
    previewFEN: 'r2qk2r/ppp2ppp/2n1b3/1B1p4/Q7/B4N2/P4PPP/b3R1K1 b kq - 1 13',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Aiming at f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Strike in the center.", 10: "6. cxd4 — Reclaim center.",
      12: "7. Nc3 — Rapid development.", 14: "8. O-O — Castle into safety.", 16: "9. bxc3 — Open b-file.",
      18: "10. Ba3 — Deny Black castling rights.", 20: "11. Bb5 — Pin knight to c6.", 22: "12. Re1+ — Check forcing king commitment.",
      24: "13. Qa4 — Overwhelming mating battery!"
    }
  },
  {
    id: 'giuoco-piano-bb6-retreat',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Passive 6...Bb6 Retreat',
    shortName: '6...Bb6 Retreat',
    category: 'Punish Passive',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb6 7. d5 Ne7 8. e5 Ng4 9. d6 cxd6 10. exd6 Nxf2 11. Qe2 Nxh1 12. Bg5',
    fullAnnotation: 'Black passively retreats with 6...Bb6. White storms the center with 7. d5 and 8. e5 to trap Black\'s pieces.',
    previewFEN: 'r1bqk2r/pp1pnppp/1b1P4/6B1/2B5/5N2/PP2QnPP/RN2K2n b Qkq - 1 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare center thrust.", 8: "5. d4 — Strike center.", 10: "6. cxd4 — Secure center duo.",
      12: "7. d5 — Push d-pawn chasing the knight.", 14: "8. e5 — Aggressive pawn wedge.", 16: "9. d6 — Disrupt piece coordination.",
      18: "10. exd6 — Capture pawn.", 20: "11. Qe2 — Pin the e7 knight.", 22: "12. Bg5 — Decisive pin winning the game!"
    }
  },
  {
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
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop active on c4.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. O-O — Castle into safety.",
      12: "7. h3 — Deny Bg4 pins.", 14: "8. Re1 — Active rook support.", 16: "9. a4 — Queenside expansion.",
      18: "10. Na3 — Knight rerouting.", 20: "11. Nc2 — Harmonious piece placement!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Secure center duo.",
      12: "7. Nc3 — Knight development.", 14: "8. h3 — Deny Bg4.", 16: "9. O-O — Kingside castling.",
      18: "10. Be3 — Support d4.", 20: "11. Bd3 — Defend e4 with dominant central control!"
    }
  },
  {
    id: 'giuoco-piano-bb6-early',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Early 4...Bb6 Prophylaxis',
    shortName: '4...Bb6 Sideline',
    category: 'Black Sideline',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Bb6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Bb6 5. d4 Qe7 6. O-O d6 7. a4 a6 8. h3 Nf6 9. Re1 O-O 10. Na3',
    fullAnnotation: 'Black prematurely tucks the bishop to b6. White expands on both flanks with d4, a4, and Na3-c2.',
    previewFEN: 'r1b2rk1/1pp1qppp/pbnp1n2/4p3/P1BPP3/N1P2N1P/1P3PP1/R1BQR1K1 b - - 1 10',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center break.", 10: "6. O-O — Castle into safety.",
      12: "7. a4 — Clamp down on b5.", 14: "8. h3 — Deny Bg4.", 16: "9. Re1 — Central rook placement.",
      18: "10. Na3 — Knight maneuvers toward queenside flexibility!"
    }
  },
  {
    id: 'giuoco-piano-mainline-nce7',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Mainline 9...Nce7 Setup',
    shortName: '9...Nce7 Setup',
    category: 'Main Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nce7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nce7 10. Qb3 O-O 11. O-O Nexd5 12. Rfe1 c6 13. Ne5',
    fullAnnotation: 'Black routes the c6 knight to d5. White establishes a dominating knight outpost on e5.',
    previewFEN: 'r1bq1rk1/pp3ppp/2p2n2/3nN3/2BP4/1Q6/PP1N1PPP/R3R1K1 b - - 2 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Reclaim center.",
      12: "7. Bd2 — Interpose check.", 14: "8. Nbxd2 — Develop knight.", 16: "9. exd5 — Liquidate center.",
      18: "10. Qb3 — Pressure d5/b7.", 20: "11. O-O — Castle into safety.", 22: "12. Rfe1 — Control e-file.",
      24: "13. Ne5 — Dominating knight outpost on e5!"
    }
  },
  {
    id: 'giuoco-piano-mainline-be6',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Mainline 10...Be6 Counter',
    shortName: '10...Be6 Counter',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Be6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Be6 11. Qxb7 Ndb4 12. Bb5 Bd7 13. O-O Rb8 14. Rfe1+ Kf8 15. Bxc6',
    fullAnnotation: 'Black counter-attacks with 10...Be6. White wins a pawn with 11. Qxb7 and converts with dynamic tactics.',
    previewFEN: '1r1q1k1r/p1pb1ppp/2B5/8/1n1P4/5N2/PP1N1PPP/R3R1K1 b - - 0 15',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Bd2 — Interpose check.", 14: "8. Nbxd2 — Knight develops.", 16: "9. exd5 — Liquidate center.",
      18: "10. Qb3 — Aggressive queen deployment.", 20: "11. Qxb7 — Grab b7 pawn.", 22: "12. Bb5 — Pin d7 bishop.",
      24: "13. O-O — Kingside safety.", 26: "14. Rfe1+ — Interpose check.", 28: "15. Bxc6 — Decisive tactical simplification!"
    }
  },
  {
    id: 'giuoco-moeller-nxc3-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Moeller 8...Nxc3 Line',
    shortName: 'Moeller 8...Nxc3',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 d5 10. cxb4 dxc4 11. Re1+ Ne7 12. Qe2 Be6 13. Bg5',
    fullAnnotation: 'Black exchanges on c3. White seizes the e-file and binds Black with 13. Bg5.',
    previewFEN: 'r2qk2r/ppp1nppp/4b3/6B1/1PpP4/5N2/P3QPPP/R3R1K1 b kq - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Nc3 — Moeller Knight sacrifice.", 14: "8. O-O — Castle into safety.", 16: "9. bxc3 — Open b-file.",
      18: "10. cxb4 — Regain piece.", 20: "11. Re1+ — Check pinning the knight.", 22: "12. Qe2 — Double on e-file.",
      24: "13. Bg5 — Decisive pin on Black's knight!"
    }
  },
  {
    id: 'giuoco-moeller-ne5-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Moeller 9...Ne5 Line',
    shortName: 'Moeller 9...Ne5',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Ne5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Ne5 10. bxc3 Nxc4 11. Qd4 O-O 12. Qxe4 Nd6 13. Qd3',
    fullAnnotation: 'Black hops to e5. White regains material with Qd4 and maintains massive queen centralization.',
    previewFEN: 'r1bq1rk1/pppp1ppp/3n4/8/8/2PQ1N2/P4PPP/R1B2RK1 b - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center strike.", 10: "6. cxd4 — Center recapture.",
      12: "7. Nc3 — Moeller Knight sacrifice.", 14: "8. O-O — Castle into safety.", 16: "9. d5 — Push pawn.",
      18: "10. bxc3 — Recapture bishop.", 20: "11. Qd4 — Centralize queen double-attacking c4 and e4.", 22: "12. Qxe4 — Win back piece.",
      24: "13. Qd3 — Dominant queen placement aiming at Black's kingside!"
    }
  },
  {
    id: 'giuoco-moeller-10-o-o',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Moeller Kingside Sacrifice (14. Nxh7)',
    shortName: 'Moeller 14. Nxh7',
    category: 'Tactical Sacrifice',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 O-O 14. Nxh7',
    fullAnnotation: 'Black castles into the Moeller storm. White launches the Greek gift sacrifice 14. Nxh7 Kxh7 15. Qh5+ with a winning mating attack.',
    previewFEN: 'r1bq1rk1/ppp1nppN/3p4/3P4/2B1R3/8/PP3PPP/R2Q2K1 b - - 0 14',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Nc3 — Moeller Knight sacrifice.", 14: "8. O-O — Castle safely.", 16: "9. d5 — Push pawn.",
      18: "10. Re1 — Pin e4 knight.", 20: "11. Rxe4 — Regain piece.", 22: "12. Bg5 — Eliminate dark-squared bishop.",
      24: "13. Nxg5 — Knight enters attack.", 26: "14. Nxh7! — Decisive kingside sacrifice destroying Black's king!"
    }
  },
  {
    id: 'giuoco-moeller-11-f5',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Moeller 11...f5 Counter',
    shortName: 'Moeller 11...f5',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Ne5 10. bxc3 Nxc4 11. Qd4 f5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Ne5 10. bxc3 Nxc4 11. Qd4 f5 12. Qxc4 d6 13. Nd4 O-O 14. f3',
    fullAnnotation: 'Black fights back with 11...f5. White secures the c4 knight and controls the central squares with Nd4 and f3.',
    previewFEN: 'r1bq1rk1/ppp3pp/3p4/3P1p2/2QNn3/5P2/P4PPP/R1B2RK1 b - - 0 14',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Nc3 — Moeller Knight sacrifice.", 14: "8. O-O — Castle into safety.", 16: "9. d5 — Push pawn.",
      18: "10. bxc3 — Recapture bishop.", 20: "11. Qd4 — Centralize queen.", 22: "12. Qxc4 — Win back knight.",
      24: "13. Nd4 — Central knight outpost.", 26: "14. f3 — Kick the e4 knight with dominating central authority!"
    }
  },
  {
    id: 'giuoco-center-break-8-o-o',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Break 8...O-O Sideline',
    shortName: 'Center Break 8...O-O',
    category: 'Main Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 O-O',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 O-O 9. e5 Ne8 10. d5 Ne7 11. O-O d6 12. Ne4 dxe5 13. Nxe5',
    fullAnnotation: 'Black castles early instead of 8...d5. White advances with 9. e5 and 10. d5 seizing total space advantage.',
    previewFEN: 'r1bqnrk1/ppp1nppp/8/3PN3/2B1N3/8/PP3PPP/R2Q1RK1 b - - 0 13',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. cxd4 — Center recapture.",
      12: "7. Bd2 — Interpose check.", 14: "8. Nbxd2 — Knight develops.", 16: "9. e5 — Thrust e-pawn pushing knight back.",
      18: "10. d5 — Seize central space.", 20: "11. O-O — Castle into safety.", 22: "12. Ne4 — Central knight coordination.",
      24: "13. Nxe5 — Dominating knight outposts on e5 and e4!"
    }
  },
  {
    id: 'giuoco-hungarian-exd4',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Hungarian 4...exd4 Line',
    shortName: 'Hungarian 4...exd4',
    category: 'Hungarian Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. c3 d3 6. Qxd3 d6 7. Bf4 Nf6 8. Nbd2 O-O 9. O-O-O Nd7 10. Qe3',
    fullAnnotation: 'Black plays the Hungarian setup with 3...Be7. White takes the center and castles queenside with rapid piece play.',
    previewFEN: 'r1bq1rk1/pppnbppp/2np4/8/2B1PB2/2P1QN2/PP1N1PPP/2KR3R b - - 5 10',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. d4 — Central strike.", 8: "5. c3 — Gambit pawn.", 10: "6. Qxd3 — Queen recapture.",
      12: "7. Bf4 — Active bishop development.", 14: "8. Nbd2 — Harmonious development.", 16: "9. O-O-O — Queenside castling.",
      18: "10. Qe3 — Dominating center control!"
    }
  },
  {
    id: 'giuoco-hungarian-5-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Hungarian 5. d5 Clamping Line',
    shortName: 'Hungarian 5. d5',
    category: 'Positional Clamping',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 d6 5. d5 Nb8 6. Bd3 Nf6 7. c4 O-O 8. h3 a5 9. Nc3 Na6 10. Be3',
    fullAnnotation: 'White clamps down on space with 5. d5 and c4, restricting Black to a passive defensive posture.',
    previewFEN: 'r1bq1rk1/1pp1bppp/n2p1n2/p2Pp3/2P1P3/2NBBP1P/PP4P1/R2QK2R b KQ - 2 10',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. d4 — Center strike.", 8: "5. d5 — Push d-pawn kicking the knight.", 10: "6. Bd3 — Preserve bishop.",
      12: "7. c4 — Solidify d5 pawn wedge.", 14: "8. h3 — Deny Bg4.", 16: "9. Nc3 — Knight development.",
      18: "10. Be3 — Total positional space dominance!"
    }
  },
  {
    id: 'giuoco-center-attack-5-nxe4',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Attack 5...Nxe4 Refutation',
    shortName: '5...Nxe4 Refutation',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 Nxe4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 Nxe4 6. dxc5 Nxc5 7. Bxf7+ Kxf7 8. Qd5+ Ne6 9. Nxe5+ Nxe5 10. Qxe5 Re8 11. O-O',
    fullAnnotation: 'Black grabs prematurely with 5...Nxe4. White refutes with 7. Bxf7+! and 8. Qd5+ winning the piece back with a dominating center.',
    previewFEN: 'r1bqr3/pppp1kpp/4n3/4Q3/8/2P5/PP3PPP/RNB2RK1 b - - 2 11',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Strike center.", 10: "6. dxc5 — Capture loose bishop.",
      12: "7. Bxf7+! — Bishop sacrifice destroying king safety.", 14: "8. Qd5+ — Queen fork winning piece back.", 16: "9. Nxe5+ — Central knight recapture.",
      18: "10. Qxe5 — Queen recapture.", 20: "11. O-O — Complete development with clear advantage!"
    }
  },
  {
    id: 'giuoco-center-attack-6-e5-d5',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Attack 6. e5 d5 Mainline',
    shortName: '6. e5 d5 Mainline',
    category: 'Sharp Mainline',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb6 9. Nc3 O-O 10. Be3 Bg4 11. h3 Bh5 12. Qc2',
    fullAnnotation: 'The classical 6. e5 d5 counter. White pins with 7. Bb5 and builds heavy piece pressure with 12. Qc2.',
    previewFEN: 'r2q1rk1/ppp2ppp/1bn5/1B1pP2b/3Pn3/2N1BN1P/PPQ2PP1/R3K2R b KQ - 4 12',
    annotations: {
      0: "1. e4 — Classical opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. e5 — Advance e-pawn attacking knight.",
      12: "7. Bb5 — Pin knight to king.", 14: "8. cxd4 — Reclaim central duo.", 16: "9. Nc3 — Develop knight.",
      18: "10. Be3 — Solidify d4 pawn.", 20: "11. h3 — Ask bishop question.", 22: "12. Qc2 — Heavy central queen battery!"
    }
  },
  {
    id: 'giuoco-center-attack-6-e5-ne4',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Attack 6...Ne4 Line',
    shortName: '6...Ne4 Line',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 Ne4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 Ne4 7. Bd5 f5 8. cxd4 Bb4+ 9. Bd2 Bxd2+ 10. Nbxd2 Nxd2 11. Qxd2 d6 12. O-O',
    fullAnnotation: 'Black tries 6...Ne4. White traps the knight with 7. Bd5! and castle into safety with overwhelming space.',
    previewFEN: 'r1bqk2r/ppp3pp/2np4/3BPp2/3P4/5N2/PP1Q1PPP/R4RK1 b kq - 1 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Strike center.", 10: "6. e5 — Advance e-pawn.",
      12: "7. Bd5! — Attack overextended e4 knight.", 14: "8. cxd4 — Reclaim center.", 16: "9. Bd2 — Interpose check.",
      18: "10. Nbxd2 — Knight develops.", 20: "11. Qxd2 — Queen recapture.", 22: "12. O-O — Kingside safety with decisive space!"
    }
  },
  {
    id: 'giuoco-center-attack-bb4-trade',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Attack Bb4 Exchange Line',
    shortName: 'Bb4 Exchange Line',
    category: 'Positional Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb4+',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb4+ 9. Bd2 Nxd2 10. Nbxd2 O-O 11. O-O Bg4 12. Bxc6 bxc6 13. Qc2',
    fullAnnotation: 'White exchanges bishops and attacks Black\'s doubled c-pawns with 13. Qc2.',
    previewFEN: 'r2q1rk1/p1p2ppp/2p5/3pP3/1b1P2b1/5N2/PPQN1PPP/R4RK1 b - - 2 13',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Strike center.", 10: "6. e5 — Pawn thrust.",
      12: "7. Bb5 — Pin knight.", 14: "8. cxd4 — Reclaim center.", 16: "9. Bd2 — Interpose check.",
      18: "10. Nbxd2 — Knight recapture.", 20: "11. O-O — Castle safely.", 22: "12. Bxc6 — Shatter queenside pawn structure.",
      24: "13. Qc2 — Target weak c6 pawn!"
    }
  },
  {
    id: 'giuoco-center-attack-bb6-retreat',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Center Attack 8...Bb6 Solid Line',
    shortName: '8...Bb6 Solid Line',
    category: 'Positional Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb6 9. O-O O-O 10. Nc3 Bg4 11. Be3 f6 12. exf6 Rxf6 13. Be2',
    fullAnnotation: 'The grandmaster standard. White retreats 13. Be2 to neutralize Black\'s pin and safeguard the d4 pawn.',
    previewFEN: 'r2q2k1/ppp3pp/1bn2r2/3p4/3Pn1b1/2N1BN2/PP2BPPP/R2Q1RK1 b - - 1 13',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. e5 — Advance e-pawn.",
      12: "7. Bb5 — Pin knight.", 14: "8. cxd4 — Reclaim center.", 16: "9. O-O — Castle into safety.",
      18: "10. Nc3 — Knight development.", 20: "11. Be3 — Reinforce d4.", 22: "12. exf6 — Capture pawn.",
      24: "13. Be2 — Prophylactic retreat securing solid advantage!"
    }
  },
  {
    id: 'giuoco-piano-qf6-defense',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Black 4...Qf6 Sideline',
    shortName: '4...Qf6 Sideline',
    category: 'Black Sideline',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6 5. d4 exd4 6. O-O d6 7. Bg5 Qg6 8. cxd4 Nxd4 9. Nxd4 Qxg5 10. Nc3 Nf6 11. Ndb5 Bb6 12. a4',
    fullAnnotation: 'Black plays an early 4...Qf6. White breaks in the center and harasses Black\'s queen with Bg5, Nd4, and Ndb5.',
    previewFEN: 'r1b1k2r/ppp2ppp/1b1p1n2/1N4q1/P1B1P3/2N5/1P3PPP/R2Q1RK1 b kq - 0 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center clash.", 10: "6. O-O — Castle into safety.",
      12: "7. Bg5 — Attack Black's early queen.", 14: "8. cxd4 — Capture center pawn.", 16: "9. Nxd4 — Centralize knight.",
      18: "10. Nc3 — Rapid development.", 20: "11. Ndb5 — Threaten c7 fork.", 22: "12. a4 — Queenside expansion pushing Black backward!"
    }
  },
  {
    id: 'giuoco-piano-lucena-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-giuoco-piano',
    name: 'Giuoco Piano – Lucena Counter-Gambit (4...f5)',
    shortName: 'Lucena Counter (4...f5)',
    category: 'Sharp Counter',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 f5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 f5 5. d4 fxe4 6. Ng5 d5 7. dxc5 dxc4 8. Qxd8+ Nxd8 9. Nd2 Nf6 10. Ndxe4 Nxe4 11. Nxe4',
    fullAnnotation: 'Black tries the aggressive Lucena 4...f5. White strikes back with 5. d4, exchanges queens, and secures a healthy pawn structure edge.',
    previewFEN: 'r1bnk2r/ppp3pp/8/2P1p3/2p1N3/2P5/PP3PPP/R1B1K2R b KQkq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare d4.", 8: "5. d4 — Center strike.", 10: "6. Ng5 — Attack f7.",
      12: "7. dxc5 — Capture loose bishop.", 14: "8. Qxd8+ — Trade queens.", 16: "9. Nd2 — Knight develops.",
      18: "10. Ndxe4 — Capture e4 pawn.", 20: "11. Nxe4 — Solid positional superiority in the endgame!"
    }
  },

  // ============================================================
  // TACTICAL PUNISHMENT & BLUNDER REFUTATION LINES
  // ============================================================
  {
    id: "italian-punish-d6-pin",
    courseId: "italian-game",
    subCourseId: "italian-giuoco-piano",
    name: "Giuoco Piano – Early ...d6 Pin Blunder (5...Nxe5??)",
    shortName: "Lucchini Pin Blunder",
    category: "Tactical Refutation",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5 Bxd1 7. Bxf7+ Ke7 8. Bg5+ Nf6 9. Nc3 dxe5 10. Rxd1",
    fullAnnotation: "Black copies Legal's Mate blunder with 5...Nxe5??, walking into White's famous queen-sacrifice refutation.",
    previewFEN: "r2q1b1r/ppp1kBpp/5n2/4p1B1/4P3/2N5/PPP2PPP/3RK2R b K - 0 10",
    annotations: {
      0: "1. e4 — King's pawn opening.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop targeting f7.",
      6: "4. d4 — Direct strike at Black's center.",
      8: "5. dxe5 — Opening d-file lines.",
      9: "Blunder: 5...Nxe5?? walks straight into a devastating queen sacrifice.",
      10: "6. Nxe5! — Tactical Punishment: Queen sacrifice! Black's king will be fatally smoked out.",
      12: "7. Bxf7+ — King forced to e7 into a lethal pin.",
      14: "8. Bg5+ — Crucial pin on the f6 knight.",
      16: "9. Nc3! — Threatening Nd5+ with total devastation.",
      18: "10. Rxd1 — White regains queen with +8.0 material and positional crush."
    }
  },
  {
    id: "italian-punish-giuoco-greed",
    courseId: "italian-game",
    subCourseId: "italian-giuoco-piano",
    name: "Giuoco Piano – Central Pawn Greed Refutation (7...Nxe4?)",
    shortName: "Central Greed Punished",
    category: "King Hunt",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Ke6 12. Qxb4 c5 13. Qa3",
    fullAnnotation: "Black greedily captures the e4 pawn, neglecting king safety. White uncorks 9. Bxf7+! dragging Black's king into the center.",
    previewFEN: "r1bq3r/pp4pp/4k3/2ppN3/3Pn3/Q7/PP3PPP/RN2K2R b KQ - 1 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Prepare central d4 pawn roller.",
      8: "5. d4 — Center break.",
      10: "6. cxd4 — Establish classical pawn duo.",
      12: "7. Bd2 — Neutralize check.",
      13: "Blunder: 7...Nxe4? grabs a hot pawn at the expense of king shelter.",
      14: "8. Bxb4 — Eliminate dark-square bishop.",
      16: "9. Bxf7+! — Tactical Punishment: Shatter king shelter.",
      18: "10. Qb3+ — Fork king and b4 knight.",
      20: "11. Ne5+ — Central outpost check.",
      22: "12. Qxb4 — Regain piece.",
      24: "13. Qa3 — Dominating Black's stranded king."
    }
  },
  {
    id: "italian-punish-scholar-queen",
    courseId: "italian-game",
    subCourseId: "italian-giuoco-piano",
    name: "Giuoco Piano – Premature 4...Qf6? Scholar Queen Punished",
    shortName: "Early ...Qf6 Punished",
    category: "Development Punishment",
    eco: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qf6 5. d4 exd4 6. O-O dxc3 7. e5 Qg6 8. Nxc3 Nge7 9. Nd5 Nxd5 10. Bxd5 Be7 11. Re1 O-O 12. Be4 Qh5 13. Bf4",
    fullAnnotation: "Black brings out the queen prematurely on f6. White accelerates development with e5 and Nd5, driving Black's queen into passivity.",
    previewFEN: "r1b2rk1/ppppbppp/2n5/4P2q/4BB2/5N2/PP3PPP/R2QR1K1 b - - 6 13",
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. c3 — Central preparation.",
      7: "Blunder: 4...Qf6? commits the queen prematurely and blocks the f-pawn.",
      8: "5. d4 — Punish premature queen by blowing open the center.",
      10: "6. O-O — Castle with huge development lead.",
      12: "7. e5! — Tactical Punishment: Kick Black's queen with tempo.",
      14: "8. Nxc3 — Rapid knight development.",
      16: "9. Nd5! — Dominate c7 and e7.",
      18: "10. Bxd5 — Maintain central clamping bishop.",
      20: "11. Re1 — Seize the e-file.",
      22: "12. Be4 — Chase queen again.",
      24: "13. Bf4 — Total central domination."
    }
  }
];

// Named export aliases for individual line bindings
export const giuocoPianoLine = giuocoPianoLines[0];
export const giuocoMoellerLine = giuocoPianoLines[1];
export const giuocoSolidLine = giuocoPianoLines[2];
export const giuocoQe7Line = giuocoPianoLines[6];
export const giuocoD6Line = giuocoPianoLines[7];
