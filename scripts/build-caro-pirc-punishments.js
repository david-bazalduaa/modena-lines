// Master builder for Caro-Kann (15) and Pirc Defense (15) = 30 lines
export const caroAndPircLines = [
  // =========================================================================
  // 5. CARO-KANN DEFENSE (15 lines)
  // =========================================================================
  // Classical (3)
  {
    id: 'caro-kann-punish-classical-greedy-h5',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-classical',
    name: 'Caro-Kann Classical – 6. h4 h6 7. h5 / 17...Qe4! Central Dominance',
    shortName: 'Classical 17...Qe4 Dominance',
    category: 'Positional Masterclass',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. h5 Bh7 8. Nf3 Nd7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 13. Kb1 O-O 14. Ne4 Nxe4 15. Qxe4 Nf6 16. Qe2 Qd5 17. Ne5 Qe4',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. h5 Bh7 8. Nf3 Nd7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 13. Kb1 O-O 14. Ne4 Nxe4 15. Qxe4 Nf6 16. Qe2 Qd5 17. Ne5 Qe4',
    fullAnnotation: 'White overextends on the kingside with h4-h5 in the Classical Caro-Kann. Black executes the thematic queen central centralization 16...Qd5 and 17...Qe4!, neutralizing White\'s pressure.',
    annotations: {
      1: "1...c6 — The solid Caro-Kann Defense.", 3: "2...d5 — Challenge the center immediately.",
      5: "3...dxe4 — Liquidate center pawn.", 7: "4...Bf5 — Develop the light-squared bishop outside the pawn chain!",
      9: "5...Bg6 — Retreat safely.", 11: "6...h6! — Create an essential escape bunker on h7.",
      13: "7...Bh7 — Bishop tucks into the h7 fortress.", 15: "8...Nd7 — Prevent Ne5.",
      17: "9...Bxd3 — Trade light-squared bishops.", 19: "10...e6 — Complete pawn chain.",
      21: "11...Ngf6 — Develop knight.", 23: "12...Be7 — Prepare castling.",
      25: "13...O-O — King safe.", 27: "14...Nxe4 — Trade knights.",
      29: "15...Nf6 — Kick queen with tempo.", 31: "16...Qd5! — Monster central queen.",
      33: "17...Qe4! — Tactical Punishment: Infiltrate e4, force queen trade, and secure endgame advantage."
    }
  },
  {
    id: 'caro-kann-punish-classical-ne5-sacrifice',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-classical',
    name: 'Caro-Kann Classical – 7. Bc4 e6 / 13...b5! Queenside Avalanche',
    shortName: 'Classical 13...b5! Avalanche',
    category: 'Pawn Storm Counter',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nf3 Nd7 7. Bc4 e6 8. O-O Ngf6 9. Re1 Be7 10. Qe2 O-O 11. c3 Nd5 12. Ne5 Nxe5 13. dxe5 b5 14. Bb3 a5 15. a4 Qb6 16. axb5 cxb5',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nf3 Nd7 7. Bc4 e6 8. O-O Ngf6 9. Re1 Be7 10. Qe2 O-O 11. c3 Nd5 12. Ne5 Nxe5 13. dxe5 b5 14. Bb3 a5 15. a4 Qb6 16. axb5 cxb5',
    fullAnnotation: 'White plays a quiet Classical setup. Black seizes queenside space with 13...b5! and 14...a5!, dismantling White\'s bishop on b3 and dominating the b-file.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...dxe4 — Open d-file.",
      7: "4...Bf5 — Active bishop.", 9: "5...Bg6 — Safe diagonal.", 11: "6...Nd7 — Control e5.",
      13: "7...e6 — Solid triangle.", 15: "8...Ngf6 — Natural development.", 17: "9...Be7 — Prepare castling.",
      19: "10...O-O — Castle securely.", 21: "11...Nd5 — Central knight outpost.",
      23: "12...Nxe5 — Eliminate White's attacker.",
      25: "13...b5! — Tactical Punishment: Queenside expansion pushes White's bishop backwards.",
      27: "14...a5 — Threaten a4 trapping the bishop.", 29: "15...Qb6 — Pressure along the a7-g1 diagonal.",
      31: "16...cxb5 — Black controls the queenside and b-file with complete initiative."
    }
  },
  {
    id: 'caro-kann-punish-classical-f4-overreach',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-classical',
    name: 'Caro-Kann Classical – 6. f4?! Kingside Overreach Refuted',
    shortName: 'Classical 6. f4?! Refuted',
    category: 'Center Demolition',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. f4 e6 7. Nf3 Bd6 8. Bd3 Ne7 9. O-O O-O 10. Ne5 Bxd3 11. Qxd3 c5 12. dxc5 Bxc5+ 13. Be3 Qxd3 14. Nxd3 Bxe3+ 15. Kh1 Nbc6 16. Rf3 Bb6',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. f4 e6 7. Nf3 Bd6 8. Bd3 Ne7 9. O-O O-O 10. Ne5 Bxd3 11. Qxd3 c5 12. dxc5 Bxc5+ 13. Be3 Qxd3 14. Nxd3 Bxe3+ 15. Kh1 Nbc6 16. Rf3 Bb6',
    fullAnnotation: 'White plays the premature 6. f4?! in the Classical Caro-Kann. Black breaks in the center with 11...c5! and wins a clean piece with 13...Qxd3 and 14...Bxe3+.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Strike center.", 5: "3...dxe4 — Liquidate center.",
      7: "4...Bf5 — Active bishop.", 9: "5...Bg6 — Bishop retreats.",
      10: "Inaccuracy: 6. f4?! weakens the e1-h4 and g1-a7 diagonals.",
      11: "6...e6! — Blunt the f4 pawn.", 13: "7...Bd6 — Aim at White's weakened kingside.",
      15: "8...Ne7 — Flexible development.", 17: "9...O-O — Castle into safety.",
      19: "10...Bxd3 — Trade bishops.", 21: "11...c5! — Strike at White's overextended center.",
      23: "12...Bxc5+ — Check with tempo.", 25: "13...Qxd3 — Trade queens.",
      27: "14...Bxe3+! — Tactical Punishment: Win White's bishop with check!",
      29: "15...Nbc6 — Bring knight into play.", 31: "16...Bb6 — Black is a full piece up with an easy win."
    }
  },

  // Advance (3)
  {
    id: 'caro-kann-punish-advance-greedy-g4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-advance',
    name: 'Caro-Kann Advance – 4. g4?! Overextension Dismantled',
    shortName: 'Advance 4. g4?! Dismantled',
    category: 'Flank Overextension',
    eco: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4 Bd7 5. h3 c5 6. c3 Nc6 7. Nf3 e6 8. Be3 Qb6 9. Qd2 Rc8 10. Be2 cxd4 11. cxd4 Na5 12. O-O Nc4 13. Bxc4 Rxc4 14. Nc3 Bb4 15. Rac1 Ne7 16. a3 Bxc3 17. Rxc3 Rxc3 18. Qxc3 O-O',
    pgn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4 Bd7 5. h3 c5 6. c3 Nc6 7. Nf3 e6 8. Be3 Qb6 9. Qd2 Rc8 10. Be2 cxd4 11. cxd4 Na5 12. O-O Nc4 13. Bxc4 Rxc4 14. Nc3 Bb4 15. Rac1 Ne7 16. a3 Bxc3 17. Rxc3 Rxc3 18. Qxc3 O-O',
    fullAnnotation: 'White tries the reckless Bayonet-style 4. g4?!. Black retreats 4...Bd7, destroys White\'s center with ...c5, and conquers the c-file with total positional control.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Challenge center.", 5: "3...Bf5 — Advance variation.",
      6: "Blunder: 4. g4?! wildly weakens White's kingside without development.",
      7: "4...Bd7! — Calm retreat preserving the bishop.", 9: "5...c5! — Immediate central counter-attack.",
      11: "6...Nc6 — Pressure d4.", 13: "7...e6 — Solid foundation.",
      15: "8...Qb6 — Target weak b2 pawn.", 17: "9...Rc8 — Put rook on c-file.",
      19: "10...cxd4 — Open c-file lines.",
      21: "11...Na5! — Tactical Punishment: Eye the catastrophic c4 outpost.",
      23: "12...Nc4 — Dominate c4.", 25: "13...Rxc4 — Rook infiltrates the 4th rank.",
      27: "14...Bb4 — Pin c3 knight.", 29: "15...Ne7 — Knight development.",
      31: "16...Bxc3 — Trade pieces.", 33: "17...Rxc3 — Double rooks.",
      35: "18...O-O — Black has complete spatial superiority and safer king."
    }
  },
  {
    id: 'caro-kann-punish-advance-short-system-overreach',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-advance',
    name: 'Caro-Kann Advance – Short System 8. O-O / 8...Qxb2! Poisoned Pawn Refutation',
    shortName: 'Advance 8...Qxb2 Refuted',
    category: 'Poisoned Pawn Refutation',
    eco: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3 Qb6 7. Nc3 Nc6 8. O-O Qxb2 9. Qe1 cxd4 10. Bxd4 Nxd4 11. Nxd4 Bb4 12. Ndb5 Ba5 13. Rb1 Qxc2 14. Rc1 Qb2 15. Nd6+ Kf8 16. Nxf5 exf5',
    pgn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3 Qb6 7. Nc3 Nc6 8. O-O Qxb2 9. Qe1 cxd4 10. Bxd4 Nxd4 11. Nxd4 Bb4 12. Ndb5 Ba5 13. Rb1 Qxc2 14. Rc1 Qb2 15. Nd6+ Kf8 16. Nxf5 exf5',
    fullAnnotation: 'In the Short System, White tries an unsound sacrifice on b2. Black accepts with 8...Qxb2!, pins the c3 knight with 11...Bb4!, and emerges with an extra pawn and two bishops.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central clash.", 5: "3...Bf5 — Advance Caro-Kann.",
      7: "4...e6 — Solid base.", 9: "5...c5 — Strike at d4.", 11: "6...Qb6 — Pressure b2 and d4.",
      13: "7...Nc6 — Develop knight.",
      15: "8...Qxb2! — Tactical Punishment: Grab the key queenside pawn.",
      17: "9...cxd4 — Open c-file.", 19: "10...Nxd4 — Eliminate d4 bishop.",
      21: "11...Bb4! — Absolute pin on c3 knight.", 23: "12...Ba5 — Bishop retreat maintaining pin.",
      25: "13...Qxc2 — Queen wins second pawn.", 27: "14...Qb2 — Queen retreats safely.",
      29: "15...Kf8 — Calm king step.", 31: "16...exf5 — Black is two clean pawns up with winning advantage."
    }
  },
  {
    id: 'caro-kann-punish-advance-tal-h4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-advance',
    name: 'Caro-Kann Advance – Tal 4. h4 / 12...Nxe5! Central Counter-Rupture',
    shortName: 'Tal 4. h4 Countered',
    category: 'Central Rip',
    eco: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4 h5 5. Bd3 Bxd3 6. Qxd3 e6 7. Bg5 Qb6 8. Nd2 c5 9. c4 Qa6 10. Ngf3 Nc6 11. O-O cxd4 12. Nxd4 Nxe5 13. Qe2 Nxc4 14. Nxc4 Qxc4 15. Qe3 Bc5 16. Rfd1 Ne7',
    pgn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4 h5 5. Bd3 Bxd3 6. Qxd3 e6 7. Bg5 Qb6 8. Nd2 c5 9. c4 Qa6 10. Ngf3 Nc6 11. O-O cxd4 12. Nxd4 Nxe5 13. Qe2 Nxc4 14. Nxc4 Qxc4 15. Qe3 Bc5 16. Rfd1 Ne7',
    fullAnnotation: 'White attempts the aggressive Tal Variation with 4. h4. Black neutralizes the flank attack with 4...h5!, opens the center with ...c5, and captures the e5 pawn with 12...Nxe5!.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...Bf5 — Advance variation.",
      7: "4...h5! — Positional clamp stopping White's g4 ideas.",
      9: "5...Bxd3 — Trade light-squared bishops.", 11: "6...e6 — Solid pawn chain.",
      13: "7...Qb6 — Double attack on b2 and d4.", 15: "8...c5 — Thematic central break.",
      17: "9...Qa6 — Pin c4 pawn.", 19: "10...Nc6 — Develop knight.",
      21: "11...cxd4 — Open c-file.",
      23: "12...Nxe5! — Tactical Punishment: Win central e5 pawn with tempo on White's queen!",
      25: "13...Nxc4 — Eliminate defender.", 27: "14...Qxc4 — Recapture queen.",
      29: "15...Bc5 — Pin d4 knight to queen.", 31: "16...Ne7 — Black is two pawns up and completely consolidated."
    }
  },

  // Modern (3)
  {
    id: 'caro-kann-punish-modern-f4-assault',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-modern-korchnoi',
    name: 'Caro-Kann Modern – 4...Nf6 / 8...Re8+ & 13...h4! Kingside Counter',
    shortName: 'Modern 13...h4! Kingside Strike',
    category: 'Counter-Attack',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. c3 Bd6 7. Bd3 O-O 8. Qc2 Re8+ 9. Ne2 h5 10. Be3 Nd7 11. O-O-O b5 12. Kb1 Nb6 13. Ng3 h4 14. Ne4 Nd5 15. Nxd6 Qxd6 16. Bd2 Be6',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. c3 Bd6 7. Bd3 O-O 8. Qc2 Re8+ 9. Ne2 h5 10. Be3 Nd7 11. O-O-O b5 12. Kb1 Nb6 13. Ng3 h4 14. Ne4 Nd5 15. Nxd6 Qxd6 16. Bd2 Be6',
    fullAnnotation: 'In the Modern Caro-Kann (4...Nf6 5. Nxf6+ exf6), White castles queenside into Black\'s advancing pawn storm. Black counters with 11...b5! and 14...Nd5, controlling the game.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central clash.", 5: "3...dxe4 — Open lines.",
      7: "4...Nf6 — The Modern Tartakower/Korchnoi line.", 9: "5...exf6 — Thematic asymmetrical pawn structure with rapid piece play.",
      11: "6...Bd6 — Ideal bishop placement.", 13: "7...O-O — Safe king.",
      15: "8...Re8+ — Check seizing open e-file.", 17: "9...h5! — Flank clamp on White's kingside.",
      19: "10...Nd7 — Reroute knight towards b6/d5.",
      21: "11...b5! — Tactical Punishment: Launch crushing queenside attack against White's king!",
      23: "12...Nb6 — Knight targets c4 and d5.", 25: "13...h4 — Chase the g3 knight.",
      27: "14...Nd5 — Monster central knight outpost.", 29: "15...Qxd6 — Recapture queen.",
      31: "16...Be6 — Black's bishops and rooks coordinate for a winning assault."
    }
  },
  {
    id: 'caro-kann-punish-modern-early-g4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-modern-korchnoi',
    name: 'Caro-Kann Modern – 7. Qh5?! Early Queen Attack Refuted',
    shortName: 'Modern 7. Qh5?! Refuted',
    category: 'Queen Harassment',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4 Bd6 7. Qh5 O-O 8. Ne2 Nd7 9. O-O Nb6 10. Bd3 g6 11. Qh6 Re8 12. c4 Bf8 13. Qh4 f5 14. Bg5 Be7 15. Bxe7 Qxe7 16. Qxe7 Rxe7',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4 Bd6 7. Qh5 O-O 8. Ne2 Nd7 9. O-O Nb6 10. Bd3 g6 11. Qh6 Re8 12. c4 Bf8 13. Qh4 f5 14. Bg5 Be7 15. Bxe7 Qxe7 16. Qxe7 Rxe7',
    fullAnnotation: 'White attempts a simplistic Scholar\'s-style attack with 7. Qh5?!. Black repels the queen easily, forces favorable trades, and enters an endgame with total dominance.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...dxe4 — Open lines.",
      7: "4...Nf6 — Modern line.", 9: "5...exf6 — Rapid piece mobilization.", 11: "6...Bd6 — Guard f7.",
      12: "Inaccuracy: 7. Qh5?! makes a premature queen sortie easily parried by Black.",
      13: "7...O-O — Castle into safety.", 15: "8...Nd7 — Flexible knight development.",
      17: "9...Nb6 — Kick the c4 bishop with tempo.", 19: "10...g6 — Blunt White's queen and bishop battery.",
      21: "11...Re8 — Seize the e-file.", 23: "12...Bf8 — Trap queen pathways.",
      25: "13...f5 — Lock down kingside.", 27: "14...Be7 — Trade bishops.",
      29: "15...Qxe7 — Queen recapture.",
      31: "16...Rxe7 — Tactical Punishment: Liquidate into a dominant endgame with active rooks."
    }
  },
  {
    id: 'caro-kann-punish-modern-h4-flank',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-modern-korchnoi',
    name: 'Caro-Kann Modern – 11. Rfe1 / 16...cxd5 & 17...Bxd5 Center Seizure',
    shortName: 'Modern 17...Bxd5 Seizure',
    category: 'Central Break',
    eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Nf3 Bd6 7. Be2 O-O 8. O-O Re8 9. Be3 Nd7 10. Qd2 Nf8 11. Rfe1 Ng6 12. Rad1 Bg4 13. h3 Be6 14. c4 Qd7 15. Bf1 Rad8 16. d5 cxd5 17. cxd5 Bxd5',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Nf3 Bd6 7. Be2 O-O 8. O-O Re8 9. Be3 Nd7 10. Qd2 Nf8 11. Rfe1 Ng6 12. Rad1 Bg4 13. h3 Be6 14. c4 Qd7 15. Bf1 Rad8 16. d5 cxd5 17. cxd5 Bxd5',
    fullAnnotation: 'White plays 16. d5? trying to break through in the center. Black liquidates with 16...cxd5 and executes the pin-refutation 17...Bxd5! (18. Qxd5?? Bxh2+! wins the queen).',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...dxe4 — Open lines.",
      7: "4...Nf6 — Modern setup.", 9: "5...exf6 — Rapid piece deployment.", 11: "6...Bd6 — Ideal bishop post.",
      13: "7...O-O — Castle.", 15: "8...Re8 — Seize e-file.", 17: "9...Nd7 — Knight maneuver.",
      19: "10...Nf8 — Standard knight reroute to g6.", 21: "11...Ng6 — Outpost on g6.",
      23: "12...Bg4 — Pin f3 knight.", 25: "13...Be6 — Bishop steps back.",
      27: "14...Qd7 — Connect rooks.", 29: "15...Rad8 — Centralize rooks.",
      30: "Blunder: 16. d5? walks into a deadly discovered pin.",
      31: "16...cxd5 — Open d-file.",
      33: "17...Bxd5! — Tactical Punishment: Win clean pawn! If 18. Qxd5 Bxh2+! wins White's queen."
    }
  },

  // Two Knights / Fantasy (3)
  {
    id: 'caro-kann-punish-fantasy-3-f3-dxe4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-two-knights-fantasy',
    name: 'Caro-Kann Fantasy – 3. f3 / 11...Qh4+! King Hunt Dismantling',
    shortName: 'Fantasy 11...Qh4+! Hunt',
    category: 'King Hunt Refutation',
    eco: '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 Bg4 6. Bc4 Nd7 7. c3 Ngf6 8. Qb3 Bh5 9. Qxb7 Nxe4 10. Qxc6 Bxf3 11. gxf3 Qh4+ 12. Ke2 Qf2+ 13. Kd1 Qxf3+ 14. Kc2 Qg2+ 15. Bd2 Rd8 16. Re1 f5',
    pgn: '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 Bg4 6. Bc4 Nd7 7. c3 Ngf6 8. Qb3 Bh5 9. Qxb7 Nxe4 10. Qxc6 Bxf3 11. gxf3 Qh4+ 12. Ke2 Qf2+ 13. Kd1 Qxf3+ 14. Kc2 Qg2+ 15. Bd2 Rd8 16. Re1 f5',
    fullAnnotation: 'White plays the aggressive Fantasy Variation (3. f3). Black blows open the e1-h4 diagonal and launches a devastating king hunt with 11...Qh4+! and 12...Qf2+.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central clash.",
      4: "Gambit: 3. f3 is the sharp Fantasy Variation.",
      5: "3...dxe4! — Blast open the center.", 7: "4...e5! — Strike at White's weakened king diagonals.",
      9: "5...Bg4 — Pin f3 knight.", 11: "6...Nd7 — Overprotect e5.", 13: "7...Ngf6 — Develop piece.",
      15: "8...Bh5 — Safe retreat maintaining pin.", 17: "9...Nxe4 — Grab e4 pawn.",
      19: "10...Bxf3 — Shatter White's kingside shelter.",
      21: "11...Qh4+! — Tactical Punishment: Deliver the crushing diagonal check!",
      23: "12...Qf2+ — Penetrate into the king's lair.", 25: "13...Qxf3+ — Fork king and h1 rook.",
      27: "14...Qg2+ — Continued assault.", 29: "15...Rd8 — Protect the corner rook.",
      31: "16...f5 — White's king is stranded in the center and facing unavoidable collapse."
    }
  },
  {
    id: 'caro-kann-punish-two-knights-early-d4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-two-knights-fantasy',
    name: 'Caro-Kann Two Knights – 3...Bg4 / 16...e5! Central Counter-Strike',
    shortName: 'Two Knights 16...e5! Strike',
    category: 'Center Breakthrough',
    eco: '1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3 5. Qxf3 e6 6. d4 dxe4 7. Qxe4 Nf6 8. Qd3 Nbd7 9. Be2 Qc7 10. O-O Be7 11. Bg5 O-O 12. Bh4 Rad8 13. Bg3 Bd6 14. Bxd6 Qxd6 15. Rad1 Rfe8 16. Bf3 e5',
    pgn: '1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3 5. Qxf3 e6 6. d4 dxe4 7. Qxe4 Nf6 8. Qd3 Nbd7 9. Be2 Qc7 10. O-O Be7 11. Bg5 O-O 12. Bh4 Rad8 13. Bg3 Bd6 14. Bxd6 Qxd6 15. Rad1 Rfe8 16. Bf3 e5',
    fullAnnotation: 'In the Two Knights Caro-Kann, Black develops harmoniously and blasts open White\'s center with the thematic 16...e5!, seizing the initiative completely.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central clash.", 5: "3...Bg4 — The Two Knights pin.",
      7: "4...Bxf3 — Trade bishop for knight.", 9: "5...e6 — Solid French-style structure.",
      11: "6...dxe4 — Open d-file.", 13: "7...Nf6 — Develop knight with tempo on White's queen.",
      15: "8...Nbd7 — Harmonious development.", 17: "9...Qc7 — Control key central squares.",
      19: "10...Be7 — Prepare castling.", 21: "11...O-O — Castle into safety.",
      23: "12...Rad8 — Rook to d-file opposite White's queen.", 25: "13...Bd6 — Offer trade of dark-square bishops.",
      27: "14...Qxd6 — Queen central recapture.", 29: "15...Rfe8 — Coordinate rooks on central files.",
      31: "16...e5! — Tactical Punishment: Blast open the center and shatter White's pawn structure."
    }
  },
  {
    id: 'caro-kann-punish-two-knights-bc4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-two-knights-fantasy',
    name: 'Caro-Kann Two Knights – 4. Nxe4 Nf6 / 8...Qxc2! Queen Raid Punished',
    shortName: 'Two Knights 8...Qxc2! Raid',
    category: 'Tactical Refutation',
    eco: '1. e4 c6 2. Nc3 d5 3. Nf3 dxe4 4. Nxe4 Nf6 5. Qe2 Nxe4 6. Qxe4 Qd5 7. Qf4 Qf5 8. Qe3 Qxc2 9. Bd3 Qa4 10. O-O Nd7 11. b3 Qa5 12. Bb2 e6 13. Rfe1 Be7 14. Bxg7 Rg8 15. Bc3 Qh5 16. Ne5 Nxe5 17. Bxe5 Bd7',
    pgn: '1. e4 c6 2. Nc3 d5 3. Nf3 dxe4 4. Nxe4 Nf6 5. Qe2 Nxe4 6. Qxe4 Qd5 7. Qf4 Qf5 8. Qe3 Qxc2 9. Bd3 Qa4 10. O-O Nd7 11. b3 Qa5 12. Bb2 e6 13. Rfe1 Be7 14. Bxg7 Rg8 15. Bc3 Qh5 16. Ne5 Nxe5 17. Bxe5 Bd7',
    fullAnnotation: 'White plays the tricky 5. Qe2. Black trades knights, captures the c2 pawn with 8...Qxc2!, and mounts an unstoppable kingside counter-attack with ...Qh5 and ...Rg8.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Strike center.", 5: "3...dxe4 — Open lines.",
      7: "4...Nf6 — Challenge e4 knight.", 9: "5...Nxe4 — Trade knights.",
      11: "6...Qd5 — Centralize queen with tempo.", 13: "7...Qf5 — Offer queen exchange.",
      14: "Inaccuracy: 8. Qe3? leaves the c2 pawn completely undefended.",
      15: "8...Qxc2! — Tactical Punishment: Pocket the c2 pawn.",
      17: "9...Qa4 — Safe queen retreat.", 19: "10...Nd7 — Develop knight.",
      21: "11...Qa5 — Keep queen active.", 23: "12...e6 — Solid base.",
      25: "13...Be7 — Prepare kingside activity.", 27: "14...Rg8! — Seize open g-file.",
      29: "15...Qh5 — Queen joins the g-file attack.", 31: "16...Nxe5 — Trade active knight.",
      33: "17...Bd7 — Black holds an extra pawn and an active attack on White's king."
    }
  },

  // Panov (3)
  {
    id: 'caro-kann-punish-panov-early-qb3',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-panov-attack',
    name: 'Caro-Kann Panov – 8. c5 O-O / 17...Qa1+! Queenside Decimation',
    shortName: 'Panov 17...Qa1+! Decimation',
    category: 'Tactical Pin',
    eco: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Nf3 Be7 8. c5 O-O 9. Bb5 Ne4 10. Bxe7 Nxe7 11. Rc1 b6 12. b4 a5 13. a3 axb4 14. axb4 bxc5 15. bxc5 Qa5 16. Qd3 Nxc3 17. Rxc3 Qa1+',
    pgn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Nf3 Be7 8. c5 O-O 9. Bb5 Ne4 10. Bxe7 Nxe7 11. Rc1 b6 12. b4 a5 13. a3 axb4 14. axb4 bxc5 15. bxc5 Qa5 16. Qd3 Nxc3 17. Rxc3 Qa1+',
    fullAnnotation: 'In the Panov Attack, White closes the queenside with 8. c5. Black undermines White\'s chain with ...b6 and ...a5, and explodes with 17...Qa1+! winning the c3 rook.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...cxd5 — Symmetrical exchange.",
      7: "4...Nf6 — Attack d4.", 9: "5...Nc6 — Pressure center.", 11: "6...e6 — Solid foundation.",
      13: "7...Be7 — Neutralize Bg5 pin.",
      14: "Inaccuracy: 8. c5? releases central tension prematurely.",
      15: "8...O-O — Castle into safety.", 17: "9...Ne4 — Occupy central outpost.",
      19: "10...Nxe7 — Recapture knight.", 21: "11...b6! — Strike at the base of White's pawn chain.",
      23: "12...a5! — Undermine queenside structure.", 25: "13...axb4 — Open a-file.",
      27: "14...bxc5 — Destroy c5 outpost.", 29: "15...Qa5! — Absolute pin on the c3 knight.",
      31: "16...Nxc3 — Eliminate defender.",
      33: "17...Qa1+! — Tactical Punishment: Skewer king and h1 rook; White loses decisive material."
    }
  },
  {
    id: 'caro-kann-punish-panov-isolated-d4',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-panov-attack',
    name: 'Caro-Kann Panov – Isolated Queen\'s Pawn Blockade / 15...Nd5 Domination',
    shortName: 'Panov IQP Blockaded',
    category: 'Positional Masterclass',
    eco: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Be7 7. cxd5 Nxd5 8. Bd3 Nc6 9. O-O O-O 10. Re1 Nf6 11. a3 b6 12. Bc2 Bb7 13. Qd3 Rc8 14. Bg5 g6 15. Rad1 Nd5 16. Bh6 Re8',
    pgn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Be7 7. cxd5 Nxd5 8. Bd3 Nc6 9. O-O O-O 10. Re1 Nf6 11. a3 b6 12. Bc2 Bb7 13. Qd3 Rc8 14. Bg5 g6 15. Rad1 Nd5 16. Bh6 Re8',
    fullAnnotation: 'Black demonstrates the textbook method against the Panov Isolated Queen\'s Pawn (IQP). Black establishes a permanent blockade on d5 and neutralizes White\'s mating threats.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central clash.", 5: "3...cxd5 — Open c-file.",
      7: "4...Nf6 — Develop knight.", 9: "5...e6 — Solid base.", 11: "6...Be7 — Prepare castling.",
      13: "7...Nxd5 — Capture with knight blockading d4.", 15: "8...Nc6 — Develop piece.",
      17: "9...O-O — Castle into safety.", 19: "10...Nf6 — Maintain vigilance over e4/g4.",
      21: "11...b6 — Prepare bishop fianchetto.", 23: "12...Bb7 — Sniper on the long diagonal.",
      25: "13...Rc8 — Put rook on c-file.", 27: "14...g6! — Nullify White's Qh7 mate battery.",
      29: "15...Nd5! — Tactical Punishment: Re-establish the iron blockade on d5.",
      31: "16...Re8 — Calm rook step; White's isolated d4 pawn is a permanent losing liability."
    }
  },
  {
    id: 'caro-kann-punish-panov-greedy-cxd5',
    courseId: 'caro-kann',
    subCourseId: 'caro-kann-panov-attack',
    name: 'Caro-Kann Panov – 8. Qb3 / 10...Nxd4! Queen Fork Refutation',
    shortName: 'Panov 10...Nxd4! Refutation',
    category: 'Tactical Destruction',
    eco: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4 7. cxd5 Nxd5 8. Qb3 Bxf3 9. gxf3 e6 10. Qxb7 Nxd4 11. Bb5+ Nxb5 12. Qc6+ Ke7 13. Qxb5 Qd7 14. Nxd5+ Qxd5 15. Qxd5 exd5 16. Be3 Ke6',
    pgn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4 7. cxd5 Nxd5 8. Qb3 Bxf3 9. gxf3 e6 10. Qxb7 Nxd4 11. Bb5+ Nxb5 12. Qc6+ Ke7 13. Qxb5 Qd7 14. Nxd5+ Qxd5 15. Qxd5 exd5 16. Be3 Ke6',
    fullAnnotation: 'White plays the greedy 8. Qb3 and 10. Qxb7? in the Panov. Black uncorks 10...Nxd4! threatening Nc2+ and enters a winning endgame where White\'s kingside pawns are wrecked.',
    annotations: {
      1: "1...c6 — Caro-Kann Defense.", 3: "2...d5 — Central strike.", 5: "3...cxd5 — Open c-file.",
      7: "4...Nf6 — Attack center.", 9: "5...Nc6 — Pressure d4.", 11: "6...Bg4 — Pin f3 knight.",
      13: "7...Nxd5 — Capture with knight.", 15: "8...Bxf3! — Shatter White's kingside pawn structure.",
      17: "9...e6 — Solidify center.",
      18: "Blunder: 10. Qxb7? grabs a poisoned pawn while neglecting king safety.",
      19: "10...Nxd4! — Tactical Punishment: Deadly threat of Nc2+ fork!",
      21: "11...Nxb5 — Remove checking bishop.", 23: "12...Ke7 — Safe king step.",
      25: "13...Qd7 — Force queen trade.", 27: "14...Qxd5 — Central queen dominance.",
      29: "15...exd5 — Solid central pawn.", 31: "16...Ke6 — Active king dominates White's shattered pawns."
    }
  },

  // =========================================================================
  // 6. PIRC DEFENSE (15 lines)
  // =========================================================================
  // Classical (3)
  {
    id: 'pirc-punish-classical-premature-e5',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-classical-system',
    name: 'Pirc Classical – Premature 8. e5? / 11...Ng4! Piece Grab Punished',
    shortName: 'Classical 8. e5? Refuted',
    category: 'Pawn Grab Punishment',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Bg4 7. Be3 Nc6 8. e5 dxe5 9. Nxe5 Bxe2 10. Nxe2 Nxe5 11. dxe5 Ng4 12. Bf4 Nxe5 13. c3 c6 14. Qb3 Qb6 15. Rfd1 Rfd8 16. Nd4 Qxb3 17. axb3 a6',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Bg4 7. Be3 Nc6 8. e5 dxe5 9. Nxe5 Bxe2 10. Nxe2 Nxe5 11. dxe5 Ng4 12. Bf4 Nxe5 13. c3 c6 14. Qb3 Qb6 15. Rfd1 Rfd8 16. Nd4 Qxb3 17. axb3 a6',
    fullAnnotation: 'White pushes 8. e5? prematurely in the Classical Pirc. Black trades on e5 and captures the overextended e5 pawn with 11...Ng4! and 12...Nxe5, netting a clean pawn and an easy endgame.',
    annotations: {
      1: "1...d6 — The dynamic Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Prepare king fianchetto.",
      7: "4...Bg7 — The legendary Pirc bishop.", 9: "5...O-O — Castle into safety.",
      11: "6...Bg4 — Pin the f3 knight.", 13: "7...Nc6 — Central pressure on d4 and e5.",
      14: "Blunder: 8. e5? overextends the center prematurely.",
      15: "8...dxe5 — Open d-file.", 17: "9...Bxe2 — Trade off bishops.", 19: "10...Nxe5 — Trade knights.",
      21: "11...Ng4! — Tactical Punishment: Double attack on e5 pawn and e3 bishop.",
      23: "12...Nxe5 — Pocket the clean extra pawn.", 25: "13...c6 — Solidify queen's flank.",
      27: "14...Qb6 — Trade queens.", 29: "15...Rfd8 — Seize d-file.",
      31: "16...Qxb3 — Force queen exchange.", 33: "17...a6 — Black enters a winning endgame with an extra pawn."
    }
  },
  {
    id: 'pirc-punish-classical-h3-overreach',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-classical-system',
    name: 'Pirc Classical – 9. e5?! Nd5 / 17...Ne4! Dark Square Domination',
    shortName: 'Classical 17...Ne4! Outpost',
    category: 'Positional Outpost',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O c6 7. h3 Qc7 8. Bf4 Nbd7 9. e5 Nd5 10. Nxd5 cxd5 11. exd6 exd6 12. c3 Nf6 13. Qb3 Re8 14. Rfe1 Bd7 15. Bd3 Bc6 16. Qb4 Bf8 17. a4 Ne4',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O c6 7. h3 Qc7 8. Bf4 Nbd7 9. e5 Nd5 10. Nxd5 cxd5 11. exd6 exd6 12. c3 Nf6 13. Qb3 Re8 14. Rfe1 Bd7 15. Bd3 Bc6 16. Qb4 Bf8 17. a4 Ne4',
    fullAnnotation: 'White plays an uncoordinated e5 break in the Classical Pirc. Black posts a monster knight on d5, secures the e-file, and lands 17...Ne4! with complete dark-square dominance.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto setup.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle.", 11: "6...c6 — Prepare ...Qc7.",
      13: "7...Qc7 — Control e5.", 15: "8...Nbd7 — Prepare center defense.",
      16: "Inaccuracy: 9. e5?! allows Black's knight to establish a dream outpost on d5.",
      17: "9...Nd5! — Monster knight on d5.", 19: "10...cxd5 — Recapture toward the center.",
      21: "11...exd6 — Control e5.", 23: "12...Nf6 — Knight returns to active square.",
      25: "13...Re8 — Seize the open e-file.", 27: "14...Bd7 — Develop bishop.",
      29: "15...Bc6 — Anchor the d5 pawn.", 31: "16...Bf8 — Safeguard the d6 pawn.",
      33: "17...Ne4! — Tactical Punishment: Dominating central knight outpost paralyzes White."
    }
  },
  {
    id: 'pirc-punish-classical-be3-d5-trap',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-classical-system',
    name: 'Pirc Classical – 8. a3 Bb7 / 17...Bxe4! Pin Explosion',
    shortName: 'Classical 17...Bxe4! Explosion',
    category: 'Pin Exploitation',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. Be3 a6 7. Qd2 b5 8. a3 Bb7 9. d5 c6 10. dxc6 Nxc6 11. Bh6 Rc8 12. Bxg7 Kxg7 13. O-O Na5 14. Bd3 Nc4 15. Bxc4 Rxc4 16. Rfe1 Nxe4 17. Nxe4 Bxe4',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. Be3 a6 7. Qd2 b5 8. a3 Bb7 9. d5 c6 10. dxc6 Nxc6 11. Bh6 Rc8 12. Bxg7 Kxg7 13. O-O Na5 14. Bd3 Nc4 15. Bxc4 Rxc4 16. Rfe1 Nxe4 17. Nxe4 Bxe4',
    fullAnnotation: 'White misplays the move order with 9. d5. Black counter-attacks on the queenside, trades off the defender of e4, and wins the e4 pawn with 17...Bxe4! with double threats.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto setup.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle.", 11: "6...a6 — Prepare ...b5 expansion.",
      13: "7...b5 — Queenside wing strike.", 15: "8...Bb7 — Target e4 pawn.",
      16: "Inaccuracy: 9. d5? weakens the e4 pawn critically.",
      17: "9...c6 — Strike at d5 pawn base.", 19: "10...Nxc6 — Bring knight to active square.",
      21: "11...Rc8 — Put rook on c-file.", 23: "12...Kxg7 — Recapture king safely.",
      25: "13...Na5 — Eye the c4 outpost.", 27: "14...Nc4 — Attack b2 and d2.",
      29: "15...Rxc4 — Rook actively placed on 4th rank.", 31: "16...Nxe4 — Eliminate e4 defender.",
      33: "17...Bxe4! — Tactical Punishment: Win the central e4 pawn with a double threat on c2 and f3."
    }
  },

  // Austrian (3)
  {
    id: 'pirc-punish-austrian-reckless-e5',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-austrian-attack',
    name: 'Pirc Austrian – 6. e5 Nfd7 / 17...Ng4! Tactical Mating Net',
    shortName: 'Austrian 17...Ng4! Net',
    category: 'King Attack',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. Bc4 c5 8. e6 fxe6 9. Bxe6+ Kh8 10. d5 Nf6 11. Ng5 Qe8 12. O-O Na6 13. Qe2 Nc7 14. f5 gxf5 15. Rxf5 Bxe6 16. Nxe6 Nxe6 17. Qxe6 Ng4',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. Bc4 c5 8. e6 fxe6 9. Bxe6+ Kh8 10. d5 Nf6 11. Ng5 Qe8 12. O-O Na6 13. Qe2 Nc7 14. f5 gxf5 15. Rxf5 Bxe6 16. Nxe6 Nxe6 17. Qxe6 Ng4',
    fullAnnotation: 'In the savage Austrian Attack, White pushes e5-e6. Black side-steps the checks, eliminates White\'s attacking pieces, and uncorks 17...Ng4! threatening Bd4+ and mate on f2.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Dragon bishop setup.",
      7: "4...Bg7 — Sniper bishop.", 9: "5...O-O — Castle securely.",
      10: "Attack: 6. e5 is the sharp Austrian Attack thrust.",
      11: "6...Nfd7 — Reroute knight safely.", 13: "7...c5! — Thematic central counter-strike.",
      15: "8...fxe6 — Recapture opening f-file.", 17: "9...Kh8! — Calm king step out of check.",
      19: "10...Nf6 — Blockade d5.", 21: "11...Qe8 — Protect f7 square.",
      23: "12...Na6 — Knight joins fight via c7.", 25: "13...Nc7 — Double attack on e6 bishop.",
      27: "14...gxf5 — Open g-file lines.", 29: "15...Bxe6 — Eliminate dangerous bishop.",
      31: "16...Nxe6 — Recapture with knight.",
      33: "17...Ng4! — Tactical Punishment: Threaten Bd4+ and devastating mating threats on f2 and h2!"
    }
  },
  {
    id: 'pirc-punish-austrian-greedy-f5',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-austrian-attack',
    name: 'Pirc Austrian – 7. e5 dxe5 / 17...Nxe5! Central Counter-Rupture',
    shortName: 'Austrian 17...Nxe5! Rupture',
    category: 'Center Demolition',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Nc6 7. e5 dxe5 8. fxe5 Nh5 9. Be3 Bg4 10. Be2 f6 11. exf6 Nxf6 12. O-O Nd5 13. Nxd5 Qxd5 14. c3 Kh8 15. Qd2 e5 16. dxe5 Qxd2 17. Bxd2 Nxe5',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Nc6 7. e5 dxe5 8. fxe5 Nh5 9. Be3 Bg4 10. Be2 f6 11. exf6 Nxf6 12. O-O Nd5 13. Nxd5 Qxd5 14. c3 Kh8 15. Qd2 e5 16. dxe5 Qxd2 17. Bxd2 Nxe5',
    fullAnnotation: 'White launches an overextended Austrian pawn roller. Black targets d4 with 9...Bg4, strikes in the center with 15...e5!, and regains material with an overwhelming position.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle.", 11: "6...Nc6 — Target d4.",
      13: "7...dxe5 — Open center.", 15: "8...Nh5 — Target f4 and d4.",
      17: "9...Bg4 — Pin the f3 knight.", 19: "10...f6! — Undermine White's e5 pawn base.",
      21: "11...Nxf6 — Recapture toward center.", 23: "12...Nd5 — Dominate central d5 square.",
      25: "13...Qxd5 — Central queen dominance.", 27: "14...Kh8 — Prophylaxis.",
      29: "15...e5! — Tactical Punishment: Central blast shatters White's pawn chain!",
      31: "16...Qxd2 — Trade queens.", 33: "17...Nxe5 — Black is a piece ahead in activity with the superior endgame."
    }
  },
  {
    id: 'pirc-punish-austrian-overextended-center',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-austrian-attack',
    name: 'Pirc Austrian – 6. Be3 b6 / 15...Bxf4! Bishop Sacrifice Refutation',
    shortName: 'Austrian 15...Bxf4! Refutation',
    category: 'Tactical Destruction',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be3 b6 7. e5 Ng4 8. Bg1 c5 9. h3 Nh6 10. d5 Bb7 11. Qd2 Nd7 12. O-O-O dxe5 13. fxe5 Nf5 14. Bh2 Bh6 15. Bf4 Bxf4 16. Qxf4 Qb8',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be3 b6 7. e5 Ng4 8. Bg1 c5 9. h3 Nh6 10. d5 Bb7 11. Qd2 Nd7 12. O-O-O dxe5 13. fxe5 Nf5 14. Bh2 Bh6 15. Bf4 Bxf4 16. Qxf4 Qb8',
    fullAnnotation: 'White tries to push Black off the board with 7. e5 and 8. Bg1. Black pins White\'s queen with 14...Bh6!, trades bishops, and piles up on the pinned e5 pawn with 16...Qb8!.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle.", 11: "6...b6 — Queenside fianchetto.",
      13: "7...Ng4 — Attack e3 bishop.", 15: "8...c5! — Strike at White's d4 center.",
      17: "9...Nh6 — Knight retreats safely.", 19: "10...Bb7 — Pressure e4 and d5.",
      21: "11...Nd7 — Coordinate knights.", 23: "12...dxe5 — Liquidate center.",
      25: "13...Nf5 — Powerful knight outpost on f5.",
      27: "14...Bh6! — Tactical Punishment: Pin White's queen along the c1-h6 diagonal!",
      29: "15...Bxf4 — Eliminate bishop.",
      31: "16...Qb8! — Triple attack on the pinned e5 pawn; White's center collapses."
    }
  },

  // 150 Attack (3)
  {
    id: 'pirc-punish-150-premature-bh6',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-150-attack',
    name: 'Pirc 150 Attack – 7. Bh6?! / 10...b4! & 16...Qb6 Counter-Attack',
    shortName: '150 Attack 10...b4! Counter',
    category: 'Queenside Counter-Attack',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. Bh6 Bxh6 8. Qxh6 Qa5 9. Qd2 Rb8 10. Nge2 b4 11. Nd1 c5 12. Ne3 Ba6 13. d5 O-O 14. Ng3 Bxf1 15. Kxf1 Ne5 16. Kf2 Qb6',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. Bh6 Bxh6 8. Qxh6 Qa5 9. Qd2 Rb8 10. Nge2 b4 11. Nd1 c5 12. Ne3 Ba6 13. d5 O-O 14. Ng3 Bxf1 15. Kxf1 Ne5 16. Kf2 Qb6',
    fullAnnotation: 'White tries the crude 150 Attack with 7. Bh6?!. Black ignores White\'s toothless queen, rolls the queenside with ...b4 and ...c5, and traps White in complete passivity.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...c6 — Thematic 150 Attack counter.", 9: "5...b5 — Queenside wing assault.",
      11: "6...Nbd7 — Flexible knight development.",
      12: "Inaccuracy: 7. Bh6?! trades bishops but wastes queen tempos.",
      13: "7...Bxh6 — Trade dark-squared bishops.", 15: "8...Qa5 — Pin c3 knight.",
      17: "9...Rb8 — Put rook on b-file.",
      19: "10...b4! — Tactical Punishment: Kick White's knight away from center control.",
      21: "11...c5 — Strike at d4 pawn.", 23: "12...Ba6 — Trade light-squared bishops.",
      25: "13...O-O — Castle into safety.", 27: "14...Bxf1 — Eliminate knight.",
      29: "15...Ne5 — Central knight outpost.",
      31: "16...Qb6 — Dominating the a7-g1 diagonal with decisive initiative."
    }
  },
  {
    id: 'pirc-punish-150-h4-h5-blunder',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-150-attack',
    name: 'Pirc 150 Attack – 11. O-O-O / 11...b4! & 16...Re8 Decisive Counter',
    shortName: '150 Attack 11...b4! Strike',
    category: 'Opposite-Side Castling Attack',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. h3 Bg7 8. Nf3 e5 9. Bh6 O-O 10. Bxg7 Kxg7 11. O-O-O b4 12. Ne2 a5 13. g4 exd4 14. Nexd4 Qb6 15. Qf4 Ne5 16. Be2 Re8',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. h3 Bg7 8. Nf3 e5 9. Bh6 O-O 10. Bxg7 Kxg7 11. O-O-O b4 12. Ne2 a5 13. g4 exd4 14. Nexd4 Qb6 15. Qf4 Ne5 16. Be2 Re8',
    fullAnnotation: 'White castles queenside in the 150 Attack (11. O-O-O). Black\'s queenside avalanche arrives first with 11...b4! and 12...a5, completely shattering White\'s position.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...c6 — Solid base.", 9: "5...b5 — Queenside counter-attack.", 11: "6...Nbd7 — Develop knight.",
      13: "7...Bg7 — The sniper bishop.", 15: "8...e5 — Strike center.", 17: "9...O-O — Castle securely.",
      19: "10...Kxg7 — King recaptures safely.",
      20: "Inaccuracy: 11. O-O-O? castles directly into Black's open firing lines.",
      21: "11...b4! — Tactical Punishment: Blast open the b-file against White's castled king!",
      23: "12...a5 — Continue pawn avalanche.", 25: "13...exd4 — Liquidate center.",
      27: "14...Qb6 — Coordinate queen on b-file.", 29: "15...Ne5 — Central knight pressure.",
      31: "16...Re8 — Seize the e-file; White's king is under an irresistible siege."
    }
  },
  {
    id: 'pirc-punish-150-g4-flank-assault',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-150-attack',
    name: 'Pirc 150 Attack – 7. g4 Nb6 / 11...Nc4! Piece Infiltration',
    shortName: '150 Attack 11...Nc4! Infiltration',
    category: 'Knight Infiltration',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. g4 Nb6 8. Bd3 h5 9. g5 Nfd7 10. f4 Bg7 11. Nf3 Nc4 12. Bxc4 bxc4 13. O-O-O Rb8 14. e5 d5 15. Nh4 e6 16. Rdf1 Qb6',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. g4 Nb6 8. Bd3 h5 9. g5 Nfd7 10. f4 Bg7 11. Nf3 Nc4 12. Bxc4 bxc4 13. O-O-O Rb8 14. e5 d5 15. Nh4 e6 16. Rdf1 Qb6',
    fullAnnotation: 'White launches a wild g4-f4 assault. Black halts White with 8...h5!, plants a monster knight on c4, and blows open the b-file against White\'s king with 13...Rb8 and 16...Qb6.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Dragon setup.",
      7: "4...c6 — Prepare ...b5.", 9: "5...b5 — Queenside wing strike.", 11: "6...Nbd7 — Develop knight.",
      13: "7...Nb6 — Aim at the c4 weakness.",
      15: "8...h5! — Prophylactic strike disrupting White's pawn chain.",
      17: "9...Nfd7 — Reroute knight.", 19: "10...Bg7 — Fianchetto sniper bishop.",
      21: "11...Nc4! — Tactical Punishment: Squeeze White's king and bishop on c4!",
      23: "12...bxc4 — Open b-file.", 25: "13...Rb8 — Heavy artillery on b-file.",
      27: "14...d5 — Lock central pawns.", 29: "15...e6 — Granite pawn wall blunts White's knight.",
      31: "16...Qb6 — White's b2 pawn and king are facing an unavoidable mating attack."
    }
  },

  // Fianchetto (3)
  {
    id: 'pirc-punish-fianchetto-early-e4-e5',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-fianchetto-system',
    name: 'Pirc Fianchetto – 6. Nge2 e5 / 17...Qxd4+! Endgame Squeeze',
    shortName: 'Fianchetto 17...Qxd4+! Squeeze',
    category: 'Endgame Conversion',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 e5 7. h3 Nc6 8. Be3 exd4 9. Nxd4 Bd7 10. O-O Re8 11. Re1 Nxd4 12. Bxd4 Bc6 13. Qd3 Nd7 14. Bxg7 Kxg7 15. Rad1 Qf6 16. f4 Nc5 17. Qd4 Qxd4+ 18. Rxd4 a5',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 e5 7. h3 Nc6 8. Be3 exd4 9. Nxd4 Bd7 10. O-O Re8 11. Re1 Nxd4 12. Bxd4 Bc6 13. Qd3 Nd7 14. Bxg7 Kxg7 15. Rad1 Qf6 16. f4 Nc5 17. Qd4 Qxd4+ 18. Rxd4 a5',
    fullAnnotation: 'Against the Fianchetto Pirc, Black liquidates the center with 8...exd4, trades dark-squared bishops, and forces an endgame with 17...Qxd4+!, holding a fortress and queen-side superiority.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle into safety.",
      11: "6...e5! — Classical central strike.", 13: "7...Nc6 — Pressure d4.",
      15: "8...exd4 — Liquidate center.", 17: "9...Bd7 — Develop bishop.",
      19: "10...Re8 — Seize the e-file.", 21: "11...Nxd4 — Trade knights.",
      23: "12...Bc6 — Put bishop on the central long diagonal.",
      25: "13...Nd7 — Reroute knight to c5.", 27: "14...Kxg7 — King recaptures safely.",
      29: "15...Qf6 — Active queen centralization.", 31: "16...Nc5 — Attack e4 pawn.",
      33: "17...Qxd4+! — Tactical Punishment: Force queen trade into an advantageous endgame.",
      35: "18...a5 — Complete control of the queenside with an effortless draw or win."
    }
  },
  {
    id: 'pirc-punish-fianchetto-passive-f4',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-fianchetto-system',
    name: 'Pirc Fianchetto – 13. f3 / 14...Bc4! Skewer & 17...Qb6 Counter',
    shortName: 'Fianchetto 14...Bc4! Skewer',
    category: 'Skewer Tactics',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c6 7. a4 a5 8. O-O Na6 9. h3 e5 10. Be3 exd4 11. Bxd4 Re8 12. Qd2 Nc5 13. f3 Be6 14. Rad1 Bc4 15. Rfe1 Nfd7 16. Bxg7 Kxg7 17. Qxd6 Qb6',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c6 7. a4 a5 8. O-O Na6 9. h3 e5 10. Be3 exd4 11. Bxd4 Re8 12. Qd2 Nc5 13. f3 Be6 14. Rad1 Bc4 15. Rfe1 Nfd7 16. Bxg7 Kxg7 17. Qxd6 Qb6',
    fullAnnotation: 'In the Fianchetto Pirc, Black activates the light-squared bishop with 14...Bc4! and counter-attacks with 17...Qb6!, discovering a lethal discovered check with the c5 knight.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — Sniper bishop.", 9: "5...O-O — Castle.", 11: "6...c6 — Solid base.",
      13: "7...a5 — Block White's a4 push.", 15: "8...Na6 — Knight develops flexibly.",
      17: "9...e5 — Strike at d4.", 19: "10...exd4 — Liquidate center.",
      21: "11...Re8 — Seize e-file.", 23: "12...Nc5 — Attack e4 pawn.",
      25: "13...Be6 — Complete piece development.",
      27: "14...Bc4! — Tactical Punishment: Skewer White's d2 queen and e1 rook!",
      29: "15...Nfd7 — Reposition knight.", 31: "16...Kxg7 — King recaptures.",
      33: "17...Qb6! — Deadly discovered check threat on White's king; Black completely dominates."
    }
  },
  {
    id: 'pirc-punish-fianchetto-queenside-break',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-fianchetto-system',
    name: 'Pirc Fianchetto – 7...c5 / 13...b4! Queenside Destruction',
    shortName: 'Fianchetto 13...b4! Break',
    category: 'Queenside Breakthrough',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 Nbd7 7. O-O c5 8. h3 a6 9. a4 Rb8 10. Be3 b5 11. axb5 axb5 12. dxc5 dxc5 13. f4 b4 14. Nd5 Bb7 15. Nxf6+ Bxf6 16. c3 Qc7',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 Nbd7 7. O-O c5 8. h3 a6 9. a4 Rb8 10. Be3 b5 11. axb5 axb5 12. dxc5 dxc5 13. f4 b4 14. Nd5 Bb7 15. Nxf6+ Bxf6 16. c3 Qc7',
    fullAnnotation: 'Black counter-attacks with 7...c5 and 10...b5! against the Fianchetto system. The 13...b4! push dislodges White\'s c3 knight and dominates the board.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — Sniper bishop.", 9: "5...O-O — Castle.", 11: "6...Nbd7 — Flexible knight.",
      13: "7...c5! — Sicilian-style center counter-blow.", 15: "8...a6 — Prepare ...b5.",
      17: "9...Rb8 — Put rook on b-file.", 19: "10...b5! — Launch queenside counter-attack.",
      21: "11...axb5 — Recapture toward the center.", 23: "12...dxc5 — Open d-file.",
      25: "13...b4! — Tactical Punishment: Dislodge the c3 defender of e4.",
      27: "14...Bb7 — Pressure e4 pawn.", 29: "15...Bxf6 — Preserve dark-squared bishop.",
      31: "16...Qc7 — Connect rooks; Black holds total queenside dominance."
    }
  },

  // Sidelines (3)
  {
    id: 'pirc-punish-sidelines-early-bc4',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-aggressive-sidelines',
    name: 'Pirc Sidelines – 2. Bc4?! / 14...Qa5! & 16...Bxe5 Queenside Annihilation',
    shortName: 'Sidelines 2. Bc4?! Annihilated',
    category: 'Center & Wing Domination',
    eco: '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. Re1 c5 7. c3 Nc6 8. Bb3 b5 9. a4 b4 10. h3 Rb8 11. Nbd2 bxc3 12. bxc3 Ba6 13. Bc2 Nd7 14. Ra3 Qa5 15. c4 Nde5 16. Nxe5 Bxe5',
    pgn: '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. Re1 c5 7. c3 Nc6 8. Bb3 b5 9. a4 b4 10. h3 Rb8 11. Nbd2 bxc3 12. bxc3 Ba6 13. Bc2 Nd7 14. Ra3 Qa5 15. c4 Nde5 16. Nxe5 Bxe5',
    fullAnnotation: 'White plays the toothless 2. Bc4?! sideline. Black seizes queenside space with ...b5, undermines c3, and dominates the dark squares with 14...Qa5! and 16...Bxe5.',
    annotations: {
      1: "1...d6 — Pirc Defense.",
      2: "Inaccuracy: 2. Bc4?! is an uninspired sideline easily countered by Black.",
      3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto setup.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...O-O — Castle.", 11: "6...c5 — Strike at d4.",
      13: "7...Nc6 — Develop knight.", 15: "8...b5! — Queenside expansion.",
      17: "9...b4 — Push pawn wedge.", 19: "10...Rb8 — Put rook on b-file.",
      21: "11...bxc3 — Rip open b-file.", 23: "12...Ba6 — Target weak d3 pawn.",
      25: "13...Nd7 — Unmask the bishop.",
      27: "14...Qa5! — Tactical Punishment: Pin and pressure the weak c3 pawn.",
      29: "15...Nde5 — Knight joins attack.", 31: "16...Bxe5 — Total dominance on the long diagonal."
    }
  },
  {
    id: 'pirc-punish-sidelines-kholmov-be3-f3',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-aggressive-sidelines',
    name: 'Pirc Sidelines – Kholmov 4. Bg5 / 6...g5! & 14...Kb8 Counter-Pin',
    shortName: 'Kholmov 4. Bg5 Refuted',
    category: 'Queenside King Walk',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5 Bg7 5. Qd2 h6 6. Bf4 g5 7. Bg3 Nh5 8. Nge2 Nc6 9. O-O-O Nxg3 10. hxg3 e6 11. f4 Bd7 12. Kb1 Qe7 13. e5 O-O-O 14. Qe3 Kb8 15. Ne4 gxf4 16. gxf4 dxe5 17. fxe5 Bc8',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5 Bg7 5. Qd2 h6 6. Bf4 g5 7. Bg3 Nh5 8. Nge2 Nc6 9. O-O-O Nxg3 10. hxg3 e6 11. f4 Bd7 12. Kb1 Qe7 13. e5 O-O-O 14. Qe3 Kb8 15. Ne4 gxf4 16. gxf4 dxe5 17. fxe5 Bc8',
    fullAnnotation: 'White plays the aggressive Kholmov System (4. Bg5). Black traps the bishop with 6...g5! and 7...Nh5!, captures the bishop pair, and coordinates a winning counter-attack.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...h6 — Question bishop.",
      11: "6...g5! — Chase bishop backwards.",
      13: "7...Nh5! — Hunt down White's dark-squared bishop.",
      15: "8...Nc6 — Pressure d4.", 17: "9...Nxg3 — Secure the bishop pair.",
      19: "10...e6 — Solid center.", 21: "11...Bd7 — Prepare queenside castling.",
      23: "12...Qe7 — Connect rooks.", 25: "13...O-O-O — Castle into safety.",
      27: "14...Kb8 — Thematic king tuck on the semi-open file.",
      29: "15...gxf4 — Trade pawns.", 31: "16...dxe5 — Liquidate center.",
      33: "17...Bc8 — Tactical Punishment: Bishop coordinates with d-file rook to pin down White's entire army."
    }
  },
  {
    id: 'pirc-punish-sidelines-overaggressive-g4',
    courseId: 'pirc-defense',
    subCourseId: 'pirc-aggressive-sidelines',
    name: 'Pirc Sidelines – Overaggressive 6. g4?! / 11...h5! Flank Dismantling',
    shortName: 'Sidelines 6. g4?! Dismantled',
    category: 'Flank Overextension',
    eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f3 c6 5. Be3 b5 6. g4 h6 7. Qd2 Nbd7 8. Nge2 Nb6 9. Ng3 b4 10. Nd1 a5 11. h4 h5 12. g5 Nfd7 13. f4 Bg7 14. Bd3 c5 15. c3 Ba6 16. Bxa6 Rxa6 17. Qe2 Ra8',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f3 c6 5. Be3 b5 6. g4 h6 7. Qd2 Nbd7 8. Nge2 Nb6 9. Ng3 b4 10. Nd1 a5 11. h4 h5 12. g5 Nfd7 13. f4 Bg7 14. Bd3 c5 15. c3 Ba6 16. Bxa6 Rxa6 17. Qe2 Ra8',
    fullAnnotation: 'White launches a wild early kingside assault with 6. g4?!. Black halts it dead with 11...h5!, rolls queenside pawns with 9...b4 and 10...a5, and completely outplays White.',
    annotations: {
      1: "1...d6 — Pirc Defense.", 3: "2...Nf6 — Attack e4.", 5: "3...g6 — Fianchetto.",
      7: "4...c6 — Flexible setup.", 9: "5...b5 — Queenside wing strike.",
      10: "Inaccuracy: 6. g4?! overextends before completing development.",
      11: "6...h6 — Prophylaxis.", 13: "7...Nbd7 — Develop knight.",
      15: "8...Nb6 — Aim at c4.", 17: "9...b4 — Kick c3 knight.",
      19: "10...a5 — Reinforce b4 pawn.",
      21: "11...h5! — Tactical Punishment: Lock up and shatter White's kingside pawn structure.",
      23: "12...Nfd7 — Reroute knight.", 25: "13...Bg7 — Fianchetto sniper bishop.",
      27: "14...c5 — Strike at d4.", 29: "15...Ba6 — Trade off White's only good bishop.",
      31: "16...Rxa6 — Rook active on 6th rank.", 33: "17...Ra8 — Black has completely dominated the board."
    }
  }
];

console.log(`Loaded ${caroAndPircLines.length} Caro-Kann and Pirc candidate lines...`);
