// Master builder for Black Tactical Punishment Lines (Sicilian 14, Caro-Kann 15, Pirc 15 = 44 lines)
export const blackLines = [
  // =========================================================================
  // 4. SICILIAN DEFENSE (14 lines)
  // =========================================================================
  // Najdorf (4)
  {
    id: 'sicilian-punish-najdorf-6-bc4-b5',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-najdorf',
    name: 'Sicilian Najdorf – 6. Bc4 Fischer Attack / 13...Nxe4! Counter-Strike',
    shortName: 'Najdorf 13...Nxe4! Strike',
    category: 'Counter-Attack',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5 8. Bg5 Be7 9. Qf3 Qc7 10. O-O-O Nbd7 11. Rhe1 Bb7 12. Qg3 b4 13. Na4 Nxe4',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5 8. Bg5 Be7 9. Qf3 Qc7 10. O-O-O Nbd7 11. Rhe1 Bb7 12. Qg3 b4 13. Na4 Nxe4 14. Rxe4 Bxg5+ 15. Qxg5 Bxe4 16. Qxg7 Ke7',
    fullAnnotation: 'White overextends in the Fischer-Sozin Attack with 12. Qg3. Black unleashes 13...Nxe4! winning an exchange and dominating the dark squares.',
    annotations: {
      1: "1...c5 — The sharp Sicilian Defense.", 3: "2...d6 — Prepare king knight development.",
      5: "3...cxd4 — Trade wing pawn for White's d4 center pawn.", 7: "4...Nf6 — Attack e4.",
      9: "5...a6 — The trademark Najdorf move, denying b5 to White's pieces.",
      11: "6...e6 — Build the small center and blunt the c4 bishop.",
      13: "7...b5 — Queenside counter-expansion.", 15: "8...Be7 — Develop and neutralize the Bg5 pin.",
      17: "9...Qc7 — Control c5 and e5 squares.", 19: "10...Nbd7 — Eye the c5 outpost.",
      21: "11...Bb7 — Place the sniper on the long diagonal.",
      22: "Inaccuracy: 12. Qg3? walks into a thematic central tactical blow.",
      23: "12...b4 — Kick the knight away from e4 defense.",
      25: "13...Nxe4! — Tactical Punishment: The classic central explosion wins the exchange!",
      27: "14...Bxg5+ — Bishop check with tempo.", 29: "15...Bxe4 — Capture the rook on e4.",
      31: "16...Ke7 — Safe king centralization; Black holds a decisive material and positional lead."
    }
  },
  {
    id: 'sicilian-punish-najdorf-adams-attack-h4',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-najdorf',
    name: 'Sicilian Najdorf – Adams Attack 6. h3 / 17...Qh4 Counter-Assault',
    shortName: 'Adams Attack Countered',
    category: 'Kingside Counter-Attack',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3 e5 7. Nde2 h5 8. Bg5 Be6 9. Bxf6 Qxf6 10. Nd5 Qd8 11. Nec3 Nd7 12. Bc4 Rc8 13. Bb3 g6 14. Qe2 Bh6 15. Rd1 O-O 16. O-O Nc5 17. Kh1 Qh4',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3 e5 7. Nde2 h5 8. Bg5 Be6 9. Bxf6 Qxf6 10. Nd5 Qd8 11. Nec3 Nd7 12. Bc4 Rc8 13. Bb3 g6 14. Qe2 Bh6 15. Rd1 O-O 16. O-O Nc5 17. Kh1 Qh4',
    fullAnnotation: 'White tries the flank Adams Attack (6. h3). Black clamps down with 7...h5!, activates the dark-squared bishop, and launches a crushing counter-attack with 17...Qh4.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Control e5.", 5: "3...cxd4 — Symmetrical exchange.",
      7: "4...Nf6 — Attack e4.", 9: "5...a6 — Najdorf setup.",
      11: "6...e5! — Strike in the center.", 13: "7...h5! — Prophylaxis! Prevent White's g4 thrust completely.",
      15: "8...Be6 — Develop bishop.", 17: "9...Qxf6 — Queen recapture maintaining active diagonals.",
      19: "10...Qd8 — Step out of knight fork.", 21: "11...Nd7 — Eye c5 and b6.",
      23: "12...Rc8 — Active semi-open c-file.", 25: "13...g6 — Prepare powerful bishop fianchetto on h6.",
      27: "14...Bh6 — Dominating the c1-h6 diagonal.", 29: "15...O-O — Castle into safety.",
      31: "16...Nc5 — Eliminate White's key bishop.",
      33: "17...Qh4! — Tactical Punishment: Coordinate queen and bishop for a deadly kingside assault."
    }
  },
  {
    id: 'sicilian-punish-najdorf-english-overreach',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-najdorf',
    name: 'Sicilian Najdorf – English Attack 8. f3 h5 / 13...Nb6 Queenside Clamp',
    shortName: 'English Attack Neutralized',
    category: 'Positional Masterclass',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 h5 9. Qd2 Nbd7 10. O-O-O Be7 11. Kb1 Rc8 12. Nd5 Bxd5 13. exd5 Nb6 14. Qa5 Nc4 15. Qxd8+ Bxd8 16. Bf2 Bb6 17. Bxb6 Nxb6',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 h5 9. Qd2 Nbd7 10. O-O-O Be7 11. Kb1 Rc8 12. Nd5 Bxd5 13. exd5 Nb6 14. Qa5 Nc4 15. Qxd8+ Bxd8 16. Bf2 Bb6 17. Bxb6 Nxb6',
    fullAnnotation: 'Against the dreaded English Attack, Black uses the modern 8...h5 clamp, trades on d5, and wins the d5 pawn with 17...Nxb6, obtaining complete strategic dominance.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Prepare development.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...a6 — Najdorf.", 11: "6...e5 — Kick the knight.",
      13: "7...Be6 — Natural development.", 15: "8...h5! — Positional clamp stopping g4.",
      17: "9...Nbd7 — Standard development.", 19: "10...Be7 — Prepare castling.",
      21: "11...Rc8 — Put rook on open c-file.", 23: "12...Bxd5! — Eliminate intrusive knight.",
      25: "13...Nb6! — Double attack on the isolated d5 pawn.",
      27: "14...Nc4 — Jump to c4 with tempo on White's queen.",
      29: "15...Bxd8 — Recapture queen.", 31: "16...Bb6 — Force bishop exchange.",
      33: "17...Nxb6! — Tactical Punishment: Win the d5 pawn and dominate the endgame."
    }
  },
  {
    id: 'sicilian-punish-najdorf-6-f4-e5',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-najdorf',
    name: 'Sicilian Najdorf – 6. f4 / 11...Qb6+! Queenside Poisoned Pawn Refutation',
    shortName: 'Najdorf 11...Qb6+ Strike',
    category: 'Queen Fork Tactics',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 e5 7. Nf3 Nbd7 8. a4 Be7 9. Bd3 O-O 10. O-O exf4 11. Bxf4 Qb6+ 12. Kh1 Qxb2 13. Qd2 Qb6 14. a5 Qc7 15. Nd4 Ne5 16. Bg5 Be6',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 e5 7. Nf3 Nbd7 8. a4 Be7 9. Bd3 O-O 10. O-O exf4 11. Bxf4 Qb6+ 12. Kh1 Qxb2 13. Qd2 Qb6 14. a5 Qc7 15. Nd4 Ne5 16. Bg5 Be6',
    fullAnnotation: 'White plays the aggressive 6. f4. Black liquidates the center with 10...exf4 and uncorks the double attack 11...Qb6+!, winning the b2 pawn with total safety.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Prepare development.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...a6 — Najdorf.",
      11: "6...e5! — Strike in the center.", 13: "7...Nbd7 — Overprotect e5.",
      15: "8...Be7 — Develop bishop.", 17: "9...O-O — Castle securely.",
      19: "10...exf4! — Open diagonal for queen.",
      20: "Inaccuracy: 11. Bxf4? leaves b2 completely unguarded.",
      21: "11...Qb6+! — Tactical Punishment: Fork king and undefended b2 pawn!",
      23: "12...Qxb2 — Pocket clean pawn.", 25: "13...Qb6 — Queen retreats to safety.",
      27: "14...Qc7 — Reposition queen on semi-open file.", 29: "15...Ne5 — Central outpost on e5.",
      31: "16...Be6 — Black is a clean pawn up with superior piece coordination."
    }
  },

  // Dragon (3)
  {
    id: 'sicilian-punish-dragon-yugoslav-premature-h5',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-dragon-scheveningen',
    name: 'Sicilian Dragon – Yugoslav Attack / 17...Re8 & 18...Nc4 Destruction',
    shortName: 'Dragon Yugoslav Refutation',
    category: 'Kingside Destruction',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8 11. Bb3 Ne5 12. h4 h5 13. Bg5 Rc5 14. Kb1 b5 15. g4 hxg4 16. h5 Nxh5 17. Nd5 Re8 18. f4 Nc4',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8 11. Bb3 Ne5 12. h4 h5 13. Bg5 Rc5 14. Kb1 b5 15. g4 hxg4 16. h5 Nxh5 17. Nd5 Re8 18. f4 Nc4',
    fullAnnotation: 'In the savage Yugoslav Attack, White tries a reckless kingside storm. Black uses the classic Dragon rook lift 13...Rc5! and counter-attacks on c4 to crush White.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Prepare dragon fianchetto.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...g6 — The fiery Dragon Variation!", 11: "6...Bg7 — The legendary Dragon Bishop.",
      13: "7...O-O — Castle into safety.", 15: "8...Nc6 — Central pressure.", 17: "9...Bd7 — Connect heavy pieces.",
      19: "10...Rc8 — Rook seizes the c-file.", 21: "11...Ne5 — Eye the c4 outpost.",
      23: "12...h5! — Masterclass prophylaxis slowing down White's h-file attack.",
      25: "13...Rc5! — The famous Dragon Rook Lift!", 27: "14...b5 — Launch queenside counter-attack.",
      29: "15...hxg4 — Win pawn.", 31: "16...Nxh5 — Capture piece.",
      33: "17...Re8 — Defend e7.",
      35: "18...Nc4! — Tactical Punishment: Monster fork and blockade completely dismantles White's assault."
    }
  },
  {
    id: 'sicilian-punish-dragon-levenfish-rebuttal',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-dragon-scheveningen',
    name: 'Sicilian Dragon – Levenfish 6. f4 / 15...Ne4! Central Explosion',
    shortName: 'Levenfish 15...Ne4! Explosion',
    category: 'Tactical Destruction',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 Nc6 7. Nxc6 bxc6 8. e5 Nd7 9. exd6 exd6 10. Be3 Be7 11. Qd2 O-O 12. O-O-O d5 13. g4 Nf6 14. h3 Bb4 15. Bd4 Ne4 16. Qe3 Re8',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 Nc6 7. Nxc6 bxc6 8. e5 Nd7 9. exd6 exd6 10. Be3 Be7 11. Qd2 O-O 12. O-O-O d5 13. g4 Nf6 14. h3 Bb4 15. Bd4 Ne4 16. Qe3 Re8',
    fullAnnotation: 'White tries the aggressive Levenfish Attack with 6. f4. Black deflects White\'s premature e5 push and seizes the initiative with 15...Ne4! and 16...Re8.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Prepare dragon.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...g6 — Dragon setup.",
      11: "6...Nc6! — Challenge White's center.", 13: "7...bxc6 — Recapture towards the center.",
      15: "8...Nd7 — Reroute knight safely.", 17: "9...exd6 — Open e-file lines.",
      19: "10...Be7 — Develop with tempo.", 21: "11...O-O — Castle into safety.",
      23: "12...d5! — Establish central pawn fortress.", 25: "13...Nf6 — Attack g4 pawn.",
      27: "14...Bb4 — Pin the c3 knight.",
      28: "Blunder: 15. Bd4? walks into a devastating discovered pin.",
      29: "15...Ne4! — Tactical Punishment: Occupy dominant central outpost.",
      31: "16...Re8 — Total domination along the central e-file."
    }
  },
  {
    id: 'sicilian-punish-dragon-classical-9-f4',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-dragon-scheveningen',
    name: 'Sicilian Dragon – Classical 9. f4? / 9...Qb6! Double Threat',
    shortName: 'Dragon Classical 9. f4 Refuted',
    category: 'Double Attack',
    eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. Be3 O-O 8. O-O Nc6 9. f4 Qb6 10. Qd3 Ng4 11. Bxg4 Bxd4 12. Bxd4 Qxd4+ 13. Qxd4 Nxd4 14. Bxc8 Rfxc8 15. Rf2 Rc4 16. Rd1 Rac8',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. Be3 O-O 8. O-O Nc6 9. f4 Qb6 10. Qd3 Ng4 11. Bxg4 Bxd4 12. Bxd4 Qxd4+ 13. Qxd4 Nxd4 14. Bxc8 Rfxc8 15. Rf2 Rc4 16. Rd1 Rac8',
    fullAnnotation: 'White plays 9. f4? in the Classical Dragon. Black strikes immediately with 9...Qb6! and 10...Ng4!, trading into a winning endgame where c2 collapses.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d6 — Prepare dragon.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...g6 — Dragon setup.", 11: "6...Bg7 — The Dragon bishop.",
      13: "7...O-O — Castle.", 15: "8...Nc6 — Central pressure.",
      16: "Blunder: 9. f4? weakens the e3 bishop and b2 pawn.",
      17: "9...Qb6! — Tactical Punishment: Double attack on d4 and b2!",
      19: "10...Ng4! — Deadly discovered attack on Be3.", 21: "11...Bxd4 — Capture bishop with check threat.",
      23: "12...Qxd4+ — Force queen trade.", 25: "13...Nxd4 — Monster knight on d4.",
      27: "14...Rfxc8 — Recapture bishop.", 29: "15...Rc4 — Pressure e4 pawn.",
      31: "16...Rac8 — Double on the c-file; White's c2 pawn is doomed."
    }
  },

  // Sveshnikov (3)
  {
    id: 'sicilian-punish-sveshnikov-greedy-a4',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-sveshnikov-classical',
    name: 'Sicilian Sveshnikov – 9. Na3 b5 / 15...e4! Pawn Roller Breakthrough',
    shortName: 'Sveshnikov 15...e4! Breakthrough',
    category: 'Central Pawn Roller',
    eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 b5 10. Nd5 f5 11. Bd3 Be6 12. O-O Bxd5 13. exd5 Ne7 14. c3 Bg7 15. Qh5 e4 16. Be2 O-O 17. Nc2 Qc8',
    pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 b5 10. Nd5 f5 11. Bd3 Be6 12. O-O Bxd5 13. exd5 Ne7 14. c3 Bg7 15. Qh5 e4 16. Be2 O-O 17. Nc2 Qc8',
    fullAnnotation: 'In the Sveshnikov, White overcommits with 15. Qh5. Black rolls the center with 15...e4! blunting White\'s light-squared bishop and securing a winning position.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...Nc6 — Challenge d4.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...e5! — The aggressive Sveshnikov signature!",
      11: "6...d6 — Guard e5.", 13: "7...a6 — Kick knight.", 15: "8...gxf6 — Recapture towards center.",
      17: "9...b5! — Threaten b4 fork.", 19: "10...f5 — Strike at White's center.",
      21: "11...Be6 — Develop bishop.", 23: "12...Bxd5! — Eliminate monster knight.",
      25: "13...Ne7 — Reroute knight.", 27: "14...Bg7 — Fianchetto bishop.",
      28: "Inaccuracy: 15. Qh5? overextends the queen.",
      29: "15...e4! — Tactical Punishment: Central pawn fork blunts the d3 bishop!",
      31: "16...O-O — King safe.", 33: "17...Qc8 — Coordinate queen and rooks for complete domination."
    }
  },
  {
    id: 'sicilian-punish-sveshnikov-chelyabinsk-f4',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-sveshnikov-classical',
    name: 'Sicilian Sveshnikov – 9. Nd5 Be7 / 13...bxa4! Queenside Rupture',
    shortName: 'Sveshnikov 13...bxa4! Rupture',
    category: 'Queenside Destruction',
    eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5 Be7 10. Bxf6 Bxf6 11. c3 Bg5 12. Nc2 Rb8 13. a4 bxa4 14. Ncb4 Nxb4 15. cxb4 O-O 16. Rxa4 a5',
    pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5 Be7 10. Bxf6 Bxf6 11. c3 Bg5 12. Nc2 Rb8 13. a4 bxa4 14. Ncb4 Nxb4 15. cxb4 O-O 16. Rxa4 a5',
    fullAnnotation: 'White attempts to undermine Black\'s queenside with 13. a4. Black opens the b-file, trades knights, and counter-strikes with 16...a5! breaking White\'s blockade.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...Nc6 — Challenge center.", 5: "3...cxd4 — Open c-file.",
      7: "4...Nf6 — Attack e4.", 9: "5...e5 — Sveshnikov.", 11: "6...d6 — Solidify e5.",
      13: "7...a6 — Kick knight.", 15: "8...b5 — Threaten b4.", 17: "9...Be7 — Develop bishop.",
      19: "10...Bxf6 — Preserve bishop pair.", 21: "11...Bg5! — Reposition bishop on ideal diagonal.",
      23: "12...Rb8 — Rook to semi-open b-file.",
      24: "Inaccuracy: 13. a4? opens lines prematurely for Black.",
      25: "13...bxa4! — Shatter queenside pawn structure.", 27: "14...Nxb4 — Eliminate active knight.",
      29: "15...O-O — Castle into safety.",
      31: "16...a5! — Tactical Punishment: Blast open the a-file and liberate the a8/b8 pieces."
    }
  },
  {
    id: 'sicilian-punish-sveshnikov-early-c4-trap',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-sveshnikov-classical',
    name: 'Sicilian Sveshnikov – 10. exf5 Bxf5 / 13...d5! Central Explosion',
    shortName: 'Sveshnikov 13...d5! Strike',
    category: 'Center Demolition',
    eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 f5 10. exf5 Bxf5 11. Nc4 Rc8 12. Ne3 Be6 13. Bd3 d5 14. Qh5 e4 15. Be2 Bg7 16. O-O Ne7',
    pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 f5 10. exf5 Bxf5 11. Nc4 Rc8 12. Ne3 Be6 13. Bd3 d5 14. Qh5 e4 15. Be2 Bg7 16. O-O Ne7',
    fullAnnotation: 'White delays development in the Sveshnikov. Black seizes the entire center with 13...d5! and 14...e4!, suffocating White\'s minor pieces.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...Nc6 — Challenge center.", 5: "3...cxd4 — Symmetrical trade.",
      7: "4...Nf6 — Attack e4.", 9: "5...e5 — Sveshnikov.", 11: "6...d6 — Support e5.",
      13: "7...a6 — Kick knight.", 15: "8...gxf6 — Recapture.", 17: "9...f5 — Strike center.",
      19: "10...Bxf5 — Recapture bishop actively.", 21: "11...Rc8 — Active rook on c-file.",
      23: "12...Be6 — Retreat bishop safely.",
      25: "13...d5! — Tactical Punishment: Classical central breakthrough!",
      27: "14...e4! — Advance pawn roller kicking the d3 bishop.",
      29: "15...Bg7 — Develop sniper bishop.", 31: "16...Ne7 — Solidify the center with a winning initiative."
    }
  },

  // Anti-Sicilian (4)
  {
    id: 'sicilian-punish-anti-bowdler-bc4',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-anti-systems',
    name: 'Anti-Sicilian – Bowdler Attack 2. Bc4?! Punished by ...d5!',
    shortName: 'Bowdler 2. Bc4 Refuted',
    category: 'Center Domination',
    eco: '1. e4 c5 2. Bc4 e6 3. Nc3 a6 4. a4 Nc6 5. Nf3 Nf6 6. O-O d5 7. exd5 exd5 8. Be2 d4 9. Nb1 Bd6 10. d3 h6 11. Nbd2 O-O 12. Nc4 Bc7 13. Bd2 Be6 14. b3 Re8 15. Re1 Bd5',
    pgn: '1. e4 c5 2. Bc4 e6 3. Nc3 a6 4. a4 Nc6 5. Nf3 Nf6 6. O-O d5 7. exd5 exd5 8. Be2 d4 9. Nb1 Bd6 10. d3 h6 11. Nbd2 O-O 12. Nc4 Bc7 13. Bd2 Be6 14. b3 Re8 15. Re1 Bd5',
    fullAnnotation: 'White plays the amateur Bowdler Attack (2. Bc4?!). Black builds the classical center with ...e6 and ...d5, driving White\'s pieces into retreat.',
    annotations: {
      1: "1...c5 — Sicilian Defense.",
      2: "Inaccuracy: 2. Bc4?! bites on granite after ...e6.",
      3: "2...e6! — Blunt the bishop immediately.", 5: "3...a6 — Prepare ...b5 expansion.",
      7: "4...Nc6 — Natural development.", 9: "5...Nf6 — Prepare center break.",
      11: "6...d5! — Tactical Punishment: Strike center and kick the c4 bishop.",
      13: "7...exd5 — Recapture dominating the center.", 15: "8...d4! — Drive knight back to the first rank.",
      17: "9...Bd6 — Ideal diagonal for bishop.", 19: "10...h6 — Prophylaxis.",
      21: "11...O-O — Castle into safety.", 23: "12...Bc7 — Preserve bishop on active diagonal.",
      25: "13...Be6 — Complete piece development.", 27: "14...Re8 — Seize the open e-file.",
      29: "15...Bd5 — Black has complete spatial and strategic domination."
    }
  },
  {
    id: 'sicilian-punish-anti-smith-morra-declined',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-anti-systems',
    name: 'Anti-Sicilian – Smith-Morra Declined 3...d5! Refutation',
    shortName: 'Smith-Morra Declined Refuted',
    category: 'Gambit Refutation',
    eco: '1. e4 c5 2. d4 cxd4 3. c3 d5 4. exd5 Qxd5 5. cxd4 Nc6 6. Nf3 Bg4 7. Be2 e6 8. Nc3 Qa5 9. O-O Nf6 10. Be3 Be7 11. Qb3 Qb4 12. Qxb4 Bxb4 13. h3 Bh5 14. g4 Bg6 15. Ne5 O-O 16. Bf3 Rac8',
    pgn: '1. e4 c5 2. d4 cxd4 3. c3 d5 4. exd5 Qxd5 5. cxd4 Nc6 6. Nf3 Bg4 7. Be2 e6 8. Nc3 Qa5 9. O-O Nf6 10. Be3 Be7 11. Qb3 Qb4 12. Qxb4 Bxb4 13. h3 Bh5 14. g4 Bg6 15. Ne5 O-O 16. Bf3 Rac8',
    fullAnnotation: 'Against the Smith-Morra Gambit (3. c3), Black declines with 3...d5!, liquidating White\'s gambit hopes and targeting the isolated d4 pawn.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...cxd4 — Open c-file.",
      4: "Gambit: 3. c3 is the aggressive Smith-Morra Gambit.",
      5: "3...d5! — Tactical Punishment: Refute the gambit cleanly in the center!",
      7: "4...Qxd5 — Central queen dominance.", 9: "5...Nc6 — Attack isolated d4 pawn.",
      11: "6...Bg4 — Pin f3 knight.", 13: "7...e6 — Solidify pawn structure.",
      15: "8...Qa5 — Safe retreat with pressure.", 17: "9...Nf6 — Complete kingside development.",
      19: "10...Be7 — Prepare castling.", 21: "11...Qb4! — Force queen exchange.",
      23: "12...Bxb4 — Recapture with tempo on c3.", 25: "13...Bh5 — Bishop retreats safely.",
      27: "14...Bg6 — Secure diagonal outpost.", 29: "15...O-O — Castle into safety.",
      31: "16...Rac8 — White is saddled with an isolated d4 pawn and exposed kingside."
    }
  },
  {
    id: 'sicilian-punish-anti-grand-prix-attack',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-anti-systems',
    name: 'Anti-Sicilian – Grand Prix 2. Nc3 & 3. f4 Dismantled by 9...Na5!',
    shortName: 'Grand Prix Dismantled',
    category: 'Mating Defense',
    eco: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. f5 Nge7 7. fxe6 dxe6 8. d3 O-O 9. O-O Na5 10. Bb3 Nxb3 11. axb3 Nc6 12. Be3 b6 13. Qd2 Nd4 14. Bh6 Bxh6 15. Qxh6 Nxf3+ 16. Rxf3 Qd4+ 17. Kh1 Qg7',
    pgn: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. f5 Nge7 7. fxe6 dxe6 8. d3 O-O 9. O-O Na5 10. Bb3 Nxb3 11. axb3 Nc6 12. Be3 b6 13. Qd2 Nd4 14. Bh6 Bxh6 15. Qxh6 Nxf3+ 16. Rxf3 Qd4+ 17. Kh1 Qg7',
    fullAnnotation: 'White tries the romantic Grand Prix Attack (2. Nc3, 3. f4). Black neutralizes the dangerous c4 bishop with 9...Na5! and locks down the kingside with 17...Qg7.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...Nc6 — Control d4.", 5: "3...g6 — Fianchetto setup.",
      7: "4...Bg7 — The sniper bishop.", 9: "5...e6 — Neutralize f4 and prepare ...d5.",
      11: "6...Nge7 — Flexible knight development.", 13: "7...dxe6 — Recapture opening d-file.",
      15: "8...O-O — Castle securely.",
      17: "9...Na5! — Tactical Punishment: Eliminate White's key attacking piece, the Bc4!",
      19: "10...Nxb3 — Trade off bishop.", 21: "11...Nc6 — Knight re-enters center.",
      23: "12...b6 — Solidify queenside.", 25: "13...Nd4 — Establish monster outpost.",
      27: "14...Bxh6 — Trade dark-square bishops.", 29: "15...Nxf3+ — Remove White's attacking knight.",
      31: "16...Qd4+ — Central check with tempo.", 33: "17...Qg7 — Lock down the kingside; White's attack has completely evaporated."
    }
  },
  {
    id: 'sicilian-punish-anti-alapin-c3-blunder',
    courseId: 'sicilian-defense',
    subCourseId: 'sicilian-anti-systems',
    name: 'Anti-Sicilian – Alapin 2. c3 / 11...Qb4! Queen Trade into Endgame Dominance',
    shortName: 'Alapin 11...Qb4! Endgame',
    category: 'Endgame Conversion',
    eco: '1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. O-O Nc6 8. Be3 cxd4 9. cxd4 Be7 10. Nc3 Qd6 11. Qb3 O-O 12. Rfd1 Qb4 13. Qxb4 Nxb4 14. Rac1 Nbd5 15. Nxd5 Nxd5 16. h3 Bh5',
    pgn: '1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. O-O Nc6 8. Be3 cxd4 9. cxd4 Be7 10. Nc3 Qd6 11. Qb3 O-O 12. Rfd1 Qb4 13. Qxb4 Nxb4 14. Rac1 Nbd5 15. Nxd5 Nxd5 16. h3 Bh5',
    fullAnnotation: 'Against the Alapin 2. c3, Black strikes in the center with 2...d5!, forces favorable queen trades with 12...Qb4!, and saddles White with a chronically weak isolated queen\'s pawn on d4.',
    annotations: {
      1: "1...c5 — Sicilian Defense.", 3: "2...d5! — Strike in the center immediately.",
      5: "3...Qxd5 — Central queen dominance.", 7: "4...Nf6 — Develop knight.",
      9: "5...Bg4 — Pin f3 knight.", 11: "6...e6 — Solid foundation.",
      13: "7...Nc6 — Pressure d4.", 15: "8...cxd4 — Liquidate center leaving White with isolated d4 pawn.",
      17: "9...Be7 — Prepare castling.", 19: "10...Qd6 — Maintain control.",
      21: "11...O-O — Castle into safety.",
      23: "12...Qb4! — Tactical Punishment: Force queen trade into an advantageous endgame!",
      25: "13...Nxb4 — Knight activates with tempo.", 27: "14...Nbd5 — Blockade the isolated d4 pawn.",
      29: "15...Nxd5 — Recapture with monster knight on d5.", 31: "16...Bh5 — Bishop maintains pressure on White's camp."
    }
  }
];

console.log(`Loaded ${blackLines.length} Sicilian candidate lines...`);
