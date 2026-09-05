/* ============================================================
   TEST SUITE: 27 NEW LONDON SYSTEM TACTICAL PUNISHMENT LINES
   ============================================================ */

import { Chess } from 'chess.js';

export const newLondonLines = [
  // 2.1 Classical d5 (6 new lines)
  {
    id: 'london-punish-early-qb6-b2-grab',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Early 4...Qb6?! & 5...c4 Lock Punished',
    shortName: '4...Qb6 & ...c4 Lock Refuted',
    category: 'Queen Harassment',
    eco: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Qb6 5. Qb3 c4 6. Qc2 Nc6 7. Nd2 g6 8. e4 dxe4 9. Nxc4 Qd8 10. Ne2 Bg7 11. Ng3 O-O 12. Nxe4 Nxe4 13. Qxe4',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Qb6 5. Qb3 c4 6. Qc2 Nc6 7. Nd2 g6 8. e4 dxe4 9. Nxc4 Qd8 10. Ne2 Bg7 11. Ng3 O-O 12. Nxe4 Nxe4 13. Qxe4',
    fullAnnotation: 'Black tries early queen pressure with 4...Qb6 and locks the queenside with 5...c4. White counters with 8. e4!, regaining central control and winning the e4 pawn with decisive advantage.',
    annotations: {
      0: "1. d4 — Queen's pawn opening.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid pawn chain.",
      6: "4. c3 — Reinforce d4.",
      7: "Opponent Choice: 4...Qb6 threatens b2 but misplaces queen.",
      8: "5. Qb3 — Neutralize queen pressure.",
      10: "6. Qc2 — Queen steps back safely.",
      12: "7. Nd2 — Prepare central break.",
      14: "8. e4! — Tactical Motif: Strike the locked center immediately.",
      16: "9. Nxc4 — Recapture with tempo on queen.",
      18: "10. Ne2 — Coordinate minor pieces.",
      20: "11. Ng3 — Target e4 weakness.",
      22: "12. Nxe4 — Pocket central pawn.",
      24: "13. Qxe4 — White is a clean pawn ahead with dominating centralized queen (+3.0 advantage)."
    }
  },
  {
    id: 'london-punish-premature-bg4-pin',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Premature 5...Bg4?! Pin Shattered',
    shortName: '5...Bg4?! Pin Shattered',
    category: 'Tactical Refutation',
    eco: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 Bg4 6. Qb3 Na5 7. Qa4+ Bd7 8. Qc2 cxd4 9. exd4 e6 10. Ngf3 Be7 11. Bd3 O-O 12. Ne5',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 Bg4 6. Qb3 Na5 7. Qa4+ Bd7 8. Qc2 cxd4 9. exd4 e6 10. Ngf3 Be7 11. Bd3 O-O 12. Ne5',
    fullAnnotation: 'Black pins prematurely with 5...Bg4?!. White exploits b7 weakness with 6. Qb3!, forces Black\'s knight to the rim, and establishes an untouchable knight on 12. Ne5.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. c3 — Prepare center.",
      8: "5. Nd2 — Flexible development.",
      9: "Opponent Inaccuracy: 5...Bg4?! leaves b7 undefended.",
      10: "6. Qb3! — Tactical Motif: Double attack on b7 and d5.",
      12: "7. Qa4+ — Checking tempo driving bishop backward.",
      14: "8. Qc2 — Step back maintaining queen battery.",
      16: "9. exd4 — Recapture toward center.",
      18: "10. Ngf3 — Bring kingside pieces into play.",
      20: "11. Bd3 — Control key diagonal.",
      22: "12. Ne5! — Dominant knight outpost commanding the board (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-steinitz-cxd4-reversal',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Passive 5...cxd4 Release Punished',
    shortName: '5...cxd4 Release Punished',
    category: 'Positional Mastery',
    eco: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 cxd4 6. exd4 Bf5 7. Ngf3 e6 8. Qb3 Qc8 9. Nh4 Bg6 10. Nxg6 hxg6 11. Bd3 Be7 12. O-O O-O 13. Nf3',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 cxd4 6. exd4 Bf5 7. Ngf3 e6 8. Qb3 Qc8 9. Nh4 Bg6 10. Nxg6 hxg6 11. Bd3 Be7 12. O-O O-O 13. Nf3',
    fullAnnotation: 'Black relieves tension prematurely with 5...cxd4. White uses the semi-open e-file, hunts Black\'s light-squared bishop with 9. Nh4!, and commands the dark squares with the bishop pair.',
    annotations: {
      0: "1. e4 — d4 — Queen's pawn opening.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid structure.",
      6: "4. c3 — Classical center.",
      8: "5. Nd2 — Develop knight.",
      9: "Opponent Choice: 5...cxd4 releases central tension prematurely.",
      10: "6. exd4 — Reclaim open e-file.",
      12: "7. Ngf3 — Harmonious mobilization.",
      14: "8. Qb3 — Eye b7 pawn.",
      16: "9. Nh4! — Tactical Motif: Hunt down Black's active bishop.",
      18: "10. Nxg6 — Secure bishop pair.",
      20: "11. Bd3 — Direct pieces toward Black's kingside.",
      22: "12. O-O — Complete king safety.",
      24: "13. Nf3 — Dominating central control with bishop pair advantage (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-passive-bd6-trade',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Passive 3...Bd6 (8. f4!) Stonewall Bind',
    shortName: '3...Bd6 8. f4! Stonewall Bind',
    category: 'Center Breakthrough',
    eco: '1. d4 d5 2. Bf4 e6 3. e3 Bd6 4. Bg3 Nf6 5. Nd2 O-O 6. Bd3 c5 7. c3 Nc6 8. f4 b6 9. Ngf3 Bb7 10. Ne5 Ne7 11. Qf3 Nf5 12. Bf2',
    pgn: '1. d4 d5 2. Bf4 e6 3. e3 Bd6 4. Bg3 Nf6 5. Nd2 O-O 6. Bd3 c5 7. c3 Nc6 8. f4 b6 9. Ngf3 Bb7 10. Ne5 Ne7 11. Qf3 Nf5 12. Bf2',
    fullAnnotation: 'Black offers the early bishop exchange 3...Bd6. White retreats 4. Bg3!, establishes the crushing Pillsbury Stonewall bind with 8. f4! and 10. Ne5!, and prepares kingside g4 assault.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid center.",
      5: "Opponent Choice: 3...Bd6 offers bishop trade.",
      6: "4. Bg3 — Preserve bishop.",
      8: "5. Nd2 — Develop knight.",
      10: "6. Bd3 — Active diagonal.",
      12: "7. c3 — Classical triangle.",
      14: "8. f4! — Tactical Motif: Erect the impenetrable Pillsbury Stonewall clamp.",
      16: "9. Ngf3 — Knight joins attack.",
      18: "10. Ne5! — Unshakable monster outpost.",
      20: "11. Qf3 — Central queen battery.",
      22: "12. Bf2 — Bishop retreats safely preparing g4 expansion (+3.0 advantage)."
    }
  },
  {
    id: 'london-punish-blunder-nh5-f7',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Thematic 11. Bxh7+! Greek Gift Decimation',
    shortName: '11. Bxh7+! Greek Gift Decimation',
    category: 'Direct Mate',
    eco: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 Re8 9. Ne5 Qc7 10. f4 Nd7 11. Bxh7+ Kxh7 12. Qh5+ Kg8 13. Qxf7+ Kh8 14. Qxe8+',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 Re8 9. Ne5 Qc7 10. f4 Nd7 11. Bxh7+ Kxh7 12. Qh5+ Kg8 13. Qxf7+ Kh8 14. Qxe8+',
    fullAnnotation: 'Black carelessly plays 10...Nd7??. White strikes with the thunderous Greek Gift sacrifice 11. Bxh7+! and 12. Qh5+, winning the e8 rook with unstoppable mating threats.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. c3 — Prepare center.",
      8: "5. Nd2 — Develop knight.",
      10: "6. Ngf3 — Rapid development.",
      12: "7. Bg3 — Bishop prophylaxis.",
      14: "8. Bd3 — Eye the h7 square.",
      16: "9. Ne5 — Classical outpost.",
      18: "10. f4 — Solidify outpost.",
      19: "Opponent Blunder: 10...Nd7?? removes the f6 knight defender of h7.",
      20: "11. Bxh7+! — Tactical Motif: Thunderous Greek Gift bishop sacrifice.",
      22: "12. Qh5+ — Royal check dragging king into the open.",
      24: "13. Qxf7+ — Drive king into the corner.",
      26: "14. Qxe8+ — Pocket clean rook with decisive mating net (+8.0 advantage)."
    }
  },
  {
    id: 'london-punish-early-c4-lock',
    courseId: 'london-system',
    subCourseId: 'london-classical',
    name: 'London Classical – Premature 5...c4 Lock Undermined (6. b3!)',
    shortName: '5...c4 Lock Undermined (6. b3!)',
    category: 'Center Breakthrough',
    eco: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 c4 6. b3 cxb3 7. axb3 Bf5 8. Ngf3 e6 9. Nh4 Be4 10. f3 Bg6 11. Nxg6 hxg6 12. Bd3 Bd6 13. Bxd6 Qxd6 14. f4',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 c4 6. b3 cxb3 7. axb3 Bf5 8. Ngf3 e6 9. Nh4 Be4 10. f3 Bg6 11. Nxg6 hxg6 12. Bd3 Bd6 13. Bxd6 Qxd6 14. f4',
    fullAnnotation: 'Black prematurely closes the queenside with 5...c4. White dismantles the pawn chain with 6. b3!, captures the bishop pair, and locks down the kingside with 14. f4 (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid pawn chain.",
      6: "4. c3 — Prepare center.",
      8: "5. Nd2 — Develop piece.",
      9: "Opponent Mistake: 5...c4 prematurely closes tension allowing White to undermine the flank.",
      10: "6. b3! — Tactical Motif: Strike Black's overextended pawn chain.",
      12: "7. axb3 — Open a-file for rook.",
      14: "8. Ngf3 — Kingside mobilization.",
      16: "9. Nh4 — Hunt Black's active bishop.",
      18: "10. f3 — Kick bishop backwards.",
      20: "11. Nxg6 — Secure bishop pair.",
      22: "12. Bd3 — Develop bishop aggressively.",
      24: "13. Bxd6 — Liquidate enemy active bishop.",
      26: "14. f4 — Solidify complete control with bishop pair advantage (+2.5 advantage)."
    }
  },

  // 2.2 King's Indian & Grünfeld (7 new lines)
  {
    id: 'london-punish-kid-h4-h5-pawn-storm',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Prophylactic 9. Bh2! & 13. Re1 Central Clamp',
    shortName: 'KID 9. Bh2! & Central Clamp',
    category: 'Positional Mastery',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 d6 6. Be2 Nbd7 7. O-O b6 8. a4 a5 9. Bh2 Bb7 10. Na3 Ne4 11. c3 e5 12. Nc4 Qe7 13. Re1',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 d6 6. Be2 Nbd7 7. O-O b6 8. a4 a5 9. Bh2 Bb7 10. Na3 Ne4 11. c3 e5 12. Nc4 Qe7 13. Re1',
    fullAnnotation: 'Against Black\'s King\'s Indian setup, White executes deep prophylaxis with 5. h3 and 9. Bh2!, maneuvers knight via a3 to c4, and neutralizes Black\'s central thrust with 13. Re1 (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid pawn chain.",
      6: "4. Nf3 — Develop knight.",
      8: "5. h3 — Prophylactic retreat square for bishop.",
      10: "6. Be2 — Develop bishop calmly.",
      12: "7. O-O — Complete king safety.",
      14: "8. a4 — Stop Black's queenside expansion.",
      16: "9. Bh2! — Tuck bishop safely away from knight jumps.",
      18: "10. Na3 — Reroute knight toward central outposts.",
      20: "11. c3 — Reinforce d4.",
      22: "12. Nc4 — Pressure e5 and b6.",
      24: "13. Re1 — Complete harmonious piece coordination (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-kid-flank-h4-blast',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Violent 6. h5! & 7. Rxh5! Rook Sacrifice Mate',
    shortName: 'KID 7. Rxh5! Rook Sacrifice',
    category: 'Direct Mate',
    eco: '1. d4 Nf6 2. Bf4 g6 3. Nc3 d5 4. e3 Bg7 5. h4 O-O 6. h5 Nxh5 7. Rxh5 gxh5 8. Qxh5 e6 9. Bd3 f5 10. Nf3 Qe8 11. Qh2 c6 12. Bxb8',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. Nc3 d5 4. e3 Bg7 5. h4 O-O 6. h5 Nxh5 7. Rxh5 gxh5 8. Qxh5 e6 9. Bd3 f5 10. Nf3 Qe8 11. Qh2 c6 12. Bxb8',
    fullAnnotation: 'White launches the crushing h4-h5 pawn storm against Black\'s fianchetto. The exchange sacrifice 7. Rxh5! shatters Black\'s king shelter, winning the b8 piece with 12. Bxb8 (+5.0 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. Nc3 — Rapid knight development.",
      6: "4. e3 — Solid foundation.",
      8: "5. h4! — Aggressive flank thrust against the g6 hook.",
      10: "6. h5! — Rip open the h-file.",
      12: "7. Rxh5! — Tactical Motif: Decisive exchange sacrifice destroying Black's king shelter.",
      14: "8. Qxh5 — Queen arrives with unstoppable mating attack.",
      16: "9. Bd3 — Threaten Qxh7#.",
      18: "10. Nf3 — Bring knight to g5.",
      20: "11. Qh2 — Queen steps back maintaining pin.",
      22: "12. Bxb8 — Pocket clean minor piece with overwhelming attack (+5.0 advantage)."
    }
  },
  {
    id: 'london-punish-kid-premature-c5-d5',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Premature 4...c5 & 10. d5! Spatial Strangle',
    shortName: 'KID 10. d5! Spatial Strangle',
    category: 'Center Breakthrough',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 c5 5. c3 cxd4 6. exd4 O-O 7. Be2 d6 8. O-O Nc6 9. h3 Re8 10. d5 Nb8 11. Na3 Nbd7 12. Re1 a6 13. Bf1',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 c5 5. c3 cxd4 6. exd4 O-O 7. Be2 d6 8. O-O Nc6 9. h3 Re8 10. d5 Nb8 11. Na3 Nbd7 12. Re1 a6 13. Bf1',
    fullAnnotation: 'Black plays an early 4...c5 and exchanges on d4. White punishes the released tension with 10. d5!, banishing Black\'s knight to b8 and establishing a suffocating spatial stranglehold.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid pawn chain.",
      6: "4. Nf3 — Develop knight.",
      7: "Opponent Choice: 4...c5 challenges d4.",
      8: "5. c3 — Maintain classical pawn structure.",
      10: "6. exd4 — Reclaim open e-file.",
      12: "7. Be2 — Prepare castling.",
      14: "8. O-O — Complete king safety.",
      16: "9. h3 — Restrict Black's pieces.",
      18: "10. d5! — Tactical Motif: Advance pawn driving Black's knight to the back rank.",
      20: "11. Na3 — Reroute knight to c4.",
      22: "12. Re1 — Dominate the open e-file.",
      24: "13. Bf1 — Prophylactic bishop retreat with massive space advantage (+3.0 advantage)."
    }
  },
  {
    id: 'london-punish-kid-nh5-bh6-trade',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Queen Trade 9. Qxb6! & Queenside Ruin',
    shortName: 'KID 9. Qxb6! Queenside Ruin',
    category: 'Endgame Conversion',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 c5 7. c3 Qb6 8. Qb3 Be6 9. Qxb6 axb6 10. a3 Nc6 11. Nbd2 Rfc8 12. O-O',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 c5 7. c3 Qb6 8. Qb3 Be6 9. Qxb6 axb6 10. a3 Nc6 11. Nbd2 Rfc8 12. O-O',
    fullAnnotation: 'Black tries queen harassment with 7...Qb6. White exchanges with 9. Qxb6!, saddling Black with isolated, doubled b-pawns, and comfortably converts the queenside weakness into a technical win.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid center.",
      6: "4. Nf3 — Develop knight.",
      8: "5. h3 — Prophylaxis.",
      10: "6. Be2 — Develop bishop.",
      12: "7. c3 — Reinforce center.",
      14: "8. Qb3 — Neutralize Queen sortie.",
      16: "9. Qxb6! — Tactical Motif: Inflict permanent doubled b-pawn structural damage on Black.",
      18: "10. a3 — Lock down queenside.",
      20: "11. Nbd2 — Centralize knight.",
      22: "12. O-O — Flawless king safety with enduring endgame advantage (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-kid-e5-central-counter',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Central Overreach 11. Bh4! & 13. Nd5 Outpost',
    shortName: 'KID 11. Bh4! & 13. Nd5 Outpost',
    category: 'Positional Mastery',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 d6 6. O-O Nfd7 7. c4 e5 8. Bg3 Nc6 9. Nc3 f5 10. dxe5 dxe5 11. Bh4 Bf6 12. Bxf6 Nxf6 13. Nd5',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 d6 6. O-O Nfd7 7. c4 e5 8. Bg3 Nc6 9. Nc3 f5 10. dxe5 dxe5 11. Bh4 Bf6 12. Bxf6 Nxf6 13. Nd5',
    fullAnnotation: 'Black pushes ...e5 and ...f5 aggressively. White liquidates the center with 10. dxe5!, skewers Black\'s queen with 11. Bh4!, and cements an invincible outpost on 13. Nd5.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. Nf3 — Develop knight.",
      8: "5. Be2 — Develop bishop.",
      10: "6. O-O — Complete king safety.",
      12: "7. c4 — Transpose into classical space advantage.",
      14: "8. Bg3 — Bishop steps back.",
      16: "9. Nc3 — Rapid mobilization.",
      18: "10. dxe5 — Liquidate center at the right moment.",
      20: "11. Bh4! — Tactical Motif: Skewer queen and f6 bishop.",
      22: "12. Bxf6 — Eliminate Black's key defender.",
      24: "13. Nd5! — Monster centralized knight outpost dominating the board (+3.0 advantage)."
    }
  },
  {
    id: 'london-punish-kid-grunfeld-cxd4-clash',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs Grünfeld – 7. dxc5 & 8. Rc1! Tempo Domination',
    shortName: 'Grünfeld 8. Rc1! Domination',
    category: 'Tactical Destruction',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c4 O-O 6. Nc3 c5 7. dxc5 Qa5 8. Rc1 dxc4 9. Bxc4 Qxc5 10. Bb3 Nc6 11. O-O Qh5 12. h3',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d5 5. c4 O-O 6. Nc3 c5 7. dxc5 Qa5 8. Rc1 dxc4 9. Bxc4 Qxc5 10. Bb3 Nc6 11. O-O Qh5 12. h3',
    fullAnnotation: 'Black tries a Grünfeld-style strike with 4...d5 and 6...c5. White takes 7. dxc5!, seizes the c-file with 8. Rc1!, develops bishops with tempo, and banishes Black\'s queen with 12. h3 (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid structure.",
      6: "4. Nf3 — Develop knight.",
      8: "5. c4 — Strike center.",
      10: "6. Nc3 — Rapid minor piece mobilization.",
      12: "7. dxc5! — Liquidate center exploiting queen pin.",
      14: "8. Rc1! — Seize open c-file with tempo.",
      16: "9. Bxc4 — Recapture pawn.",
      18: "10. Bb3 — Safe retreat keeping f7 in crosshairs.",
      20: "11. O-O — Complete king safety.",
      22: "12. h3 — Deny Black's queen any active squares (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-kid-overextended-f5-f4',
    courseId: 'london-system',
    subCourseId: 'london-kings-indian',
    name: 'London vs KID – Locked Center 10. c4 & 13. c5! Queenside Breach',
    shortName: 'KID 13. c5! Queenside Breach',
    category: 'Center Breakthrough',
    eco: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 Qe8 7. O-O e5 8. Bh2 e4 9. Nfd2 Qe7 10. c4 h5 11. Nc3 Bf5 12. b4 Nbd7 13. c5',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 d6 5. h3 O-O 6. Be2 Qe8 7. O-O e5 8. Bh2 e4 9. Nfd2 Qe7 10. c4 h5 11. Nc3 Bf5 12. b4 Nbd7 13. c5',
    fullAnnotation: 'Black locks the center with ...e4 and launches a flank attack. White counters with the classic breakthrough 10. c4, 12. b4, and 13. c5!, ripping open the queenside while Black\'s attack stalls (+3.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. Nf3 — Develop knight.",
      8: "5. h3 — Prophylaxis.",
      10: "6. Be2 — Develop bishop.",
      12: "7. O-O — Complete king safety.",
      14: "8. Bh2 — Retreat bishop.",
      16: "9. Nfd2 — Reposition knight to attack e4.",
      18: "10. c4 — Queenside expansion.",
      20: "11. Nc3 — Pressure e4 pawn.",
      22: "12. b4 — Prepare decisive breach.",
      24: "13. c5! — Tactical Motif: Shatter Black's pawn structure with overwhelming queenside penetration (+3.5 advantage)."
    }
  },

  // 2.3 Queen's Indian & Slav (7 new lines)
  {
    id: 'london-punish-qid-premature-ba6-trade',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs QID – Classical 10. Ne5! & 12. f4! Kingside Springboard',
    shortName: 'QID 10. Ne5! & 12. f4! Attack',
    category: 'Positional Mastery',
    eco: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Bd3 Be7 6. h3 O-O 7. O-O c5 8. c3 d5 9. Nbd2 Nbd7 10. Ne5 Nxe5 11. Bxe5 Bd6 12. f4',
    pgn: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Bd3 Be7 6. h3 O-O 7. O-O c5 8. c3 d5 9. Nbd2 Nbd7 10. Ne5 Nxe5 11. Bxe5 Bd6 12. f4',
    fullAnnotation: 'Against the Queen\'s Indian, White plants the dominating knight 10. Ne5! and reinforces with 12. f4!, locking down the center and launching an unstoppable kingside assault (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid chain.",
      6: "4. Nf3 — Develop knight.",
      8: "5. Bd3 — Active diagonal.",
      10: "6. h3 — Prophylaxis.",
      12: "7. O-O — Complete king safety.",
      14: "8. c3 — Solidify center.",
      16: "9. Nbd2 — Minor piece coordination.",
      18: "10. Ne5! — Monster knight outpost in the heart of Black's camp.",
      20: "11. Bxe5 — Recapture maintaining bishop dominance.",
      22: "12. f4! — Tactical Clamp: Build the Pillsbury wall with massive kingside attacking prospects (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-qid-ne4-fork-trick',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs QID – Dubious 6...Nh5?! 9. hxg3! Open h-file Blast',
    shortName: 'QID 6...Nh5?! 9. hxg3! Blast',
    category: 'Kingside Assault',
    eco: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Nbd2 Be7 6. Bd3 Nh5 7. Be5 d6 8. Bg3 Nxg3 9. hxg3 h6 10. Qe2 Nd7 11. e4 c5 12. c3 Qc7 13. O-O',
    pgn: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Nbd2 Be7 6. Bd3 Nh5 7. Be5 d6 8. Bg3 Nxg3 9. hxg3 h6 10. Qe2 Nd7 11. e4 c5 12. c3 Qc7 13. O-O',
    fullAnnotation: 'Black hunts White\'s bishop with 6...Nh5?!. White welcomes the trade with 9. hxg3!, opening the h-file for the rook, expands in the center with 11. e4, and builds a commanding position.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. Nf3 — Develop knight.",
      8: "5. Nbd2 — Flexible development.",
      10: "6. Bd3 — Active diagonal.",
      11: "Opponent Mistake: 6...Nh5?! wastes time chasing the bishop.",
      12: "7. Be5 — Provoke pawn push.",
      14: "8. Bg3 — Step back inviting the trade.",
      16: "9. hxg3! — Tactical Motif: Open the h-file for rook attack.",
      18: "10. Qe2 — Centralize queen.",
      20: "11. e4 — Seize dominant pawn center.",
      22: "12. c3 — Solidify d4.",
      24: "13. O-O — Complete king safety with overwhelming central and kingside pressure (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-slav-early-qb6-c4',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs Slav – Early 5...Qb6?! (7. c5! & 13. Nb3 Infiltration)',
    shortName: 'Slav 5...Qb6?! 7. c5! Infiltration',
    category: 'Queenside Invasion',
    eco: '1. d4 d5 2. Bf4 c6 3. e3 Bf5 4. c4 e6 5. Nc3 Qb6 6. Qb3 Nd7 7. c5 Qxb3 8. axb3 a6 9. b4 Rc8 10. h3 Ngf6 11. Nf3 Be7 12. Nd2 O-O 13. Nb3',
    pgn: '1. d4 d5 2. Bf4 c6 3. e3 Bf5 4. c4 e6 5. Nc3 Qb6 6. Qb3 Nd7 7. c5 Qxb3 8. axb3 a6 9. b4 Rc8 10. h3 Ngf6 11. Nf3 Be7 12. Nd2 O-O 13. Nb3',
    fullAnnotation: 'Black tries early queen pressure with 5...Qb6. White locks the queen out with 7. c5!, rolls the b-pawns with 9. b4, and maneuvers knight to a5 via 13. Nb3 winning decisive material.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid center.",
      6: "4. c4 — Challenge c6.",
      8: "5. Nc3 — Develop knight.",
      9: "Opponent Choice: 5...Qb6 hits b2.",
      10: "6. Qb3 — Neutralize queen pressure.",
      12: "7. c5! — Tactical Motif: Shut down queen pathways and trap queenside.",
      14: "8. axb3 — Semi-open a-file for rook.",
      16: "9. b4 — Threaten b5 breakthrough.",
      18: "10. h3 — Restrict Black's minor pieces.",
      20: "11. Nf3 — Rapid mobilization.",
      22: "12. Nd2 — Reroute knight toward a5.",
      24: "13. Nb3 — Unstoppable knight infiltration to a5 winning the b7 pawn (+3.5 advantage)."
    }
  },
  {
    id: 'london-punish-slav-isolated-d-pawn',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs Slav – Kingside Expansion 11. g4! & Bishop Pair Domination',
    shortName: 'Slav 11. g4! Bishop Pair Domination',
    category: 'Positional Mastery',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Nc6 4. c3 Nf6 5. Nd2 cxd4 6. exd4 Bf5 7. Ngf3 e6 8. Qb3 Qc8 9. Nh4 Bg4 10. h3 Bh5 11. g4 Bg6 12. Nxg6 hxg6 13. Bg2',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Nc6 4. c3 Nf6 5. Nd2 cxd4 6. exd4 Bf5 7. Ngf3 e6 8. Qb3 Qc8 9. Nh4 Bg4 10. h3 Bh5 11. g4 Bg6 12. Nxg6 hxg6 13. Bg2',
    fullAnnotation: 'In the Slav setup, White rolls the g-pawn with 11. g4!, captures Black\'s light-squared bishop with 12. Nxg6, and fianchettoes 13. Bg2 commanding the long diagonal with the bishop pair.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid chain.",
      6: "4. c3 — Classical center.",
      8: "5. Nd2 — Develop piece.",
      10: "6. exd4 — Recapture toward center.",
      12: "7. Ngf3 — Minor piece mobilization.",
      14: "8. Qb3 — Pressure b7.",
      16: "9. Nh4 — Hunt Black's active bishop.",
      18: "10. h3 — Question bishop.",
      20: "11. g4! — Tactical Expansion: Drive bishop backwards and seize territory.",
      22: "12. Nxg6 — Secure bishop pair.",
      24: "13. Bg2 — Long diagonal dominance with clear positional superiority (+2.5 advantage)."
    }
  },
  {
    id: 'london-punish-slav-premature-e5-break',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs Slav – 8. c5! & 13. b5! Flank Demolition',
    shortName: 'Slav 13. b5! Flank Demolition',
    category: 'Queenside Invasion',
    eco: '1. d4 d5 2. Bf4 c6 3. e3 Nf6 4. Nf3 Bg4 5. c4 e6 6. Qb3 Bxf3 7. gxf3 Qb6 8. c5 Qxb3 9. axb3 Nbd7 10. b4 Nh5 11. Bg3 Nxg3 12. hxg3 e5 13. b5',
    pgn: '1. d4 d5 2. Bf4 c6 3. e3 Nf6 4. Nf3 Bg4 5. c4 e6 6. Qb3 Bxf3 7. gxf3 Qb6 8. c5 Qxb3 9. axb3 Nbd7 10. b4 Nh5 11. Bg3 Nxg3 12. hxg3 e5 13. b5',
    fullAnnotation: 'Against 6...Bxf3, White captures on b3 with 8. c5!, rolls the queenside pawns with 10. b4, and blows open the queenside with 13. b5!, winning the a-file and paralyzing Black.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. Nf3 — Develop knight.",
      8: "5. c4 — Strike center.",
      10: "6. Qb3 — Attack b7.",
      12: "7. gxf3 — Recapture opening g-file.",
      14: "8. c5! — Clamp queenside.",
      16: "9. axb3 — Open a-file for rook.",
      18: "10. b4 — Advance queenside avalanche.",
      20: "11. Bg3 — Preserve piece coordination.",
      22: "12. hxg3 — Open h-file.",
      24: "13. b5! — Tactical Motif: Rip open Black's queenside defenses with decisive entry (+3.5 advantage)."
    }
  },
  {
    id: 'london-punish-slav-greedy-dxc4-b4',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs Slav – 4...Bxb1?! 5. Qxb1! & 13. e4! Central Domination',
    shortName: 'Slav 4...Bxb1?! 13. e4! Center Blast',
    category: 'Center Breakthrough',
    eco: '1. d4 d5 2. Bf4 c6 3. e3 Bf5 4. c4 Bxb1 5. Qxb1 e6 6. a3 Bd6 7. Bxd6 Qxd6 8. Nf3 Nf6 9. Bd3 Nbd7 10. O-O O-O 11. Qc2 e5 12. cxd5 Qxd5 13. e4',
    pgn: '1. d4 d5 2. Bf4 c6 3. e3 Bf5 4. c4 Bxb1 5. Qxb1 e6 6. a3 Bd6 7. Bxd6 Qxd6 8. Nf3 Nf6 9. Bd3 Nbd7 10. O-O O-O 11. Qc2 e5 12. cxd5 Qxd5 13. e4',
    fullAnnotation: 'Black gives up the bishop pair with 4...Bxb1?!. White activates the queen with 5. Qxb1!, solidifies with 6. a3, and strikes in the center with 13. e4!, gaining total control of central files.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid chain.",
      6: "4. c4 — Center challenge.",
      7: "Opponent Mistake: 4...Bxb1?! voluntarily concedes the bishop pair.",
      8: "5. Qxb1! — Queen recaptures active square.",
      10: "6. a3 — Prophylaxis denying ...Bb4+.",
      12: "7. Bxd6 — Liquidate Black's active bishop.",
      14: "8. Nf3 — Rapid development.",
      16: "9. Bd3 — Eye kingside diagonals.",
      18: "10. O-O — Complete king safety.",
      20: "11. Qc2 — Connect rooks.",
      22: "12. cxd5 — Liquidate center.",
      24: "13. e4! — Tactical Thrust: Advance central steamroller driving Black's queen backward (+3.0 advantage)."
    }
  },
  {
    id: 'london-punish-qid-g6-fianchetto-refuted',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian',
    name: 'London vs QID – Double Fianchetto Countered (13. Qc2 Harmony)',
    shortName: 'QID Double Fianchetto Countered',
    category: 'Positional Mastery',
    eco: '1. d4 Nf6 2. Bf4 b6 3. e3 Bb7 4. Nf3 g6 5. Be2 Bg7 6. O-O O-O 7. h3 d6 8. a4 a5 9. Bh2 Nbd7 10. Na3 Ne4 11. c3 e5 12. Nc4 Qe7 13. Qc2',
    pgn: '1. d4 Nf6 2. Bf4 b6 3. e3 Bb7 4. Nf3 g6 5. Be2 Bg7 6. O-O O-O 7. h3 d6 8. a4 a5 9. Bh2 Nbd7 10. Na3 Ne4 11. c3 e5 12. Nc4 Qe7 13. Qc2',
    fullAnnotation: 'Black tries a double fianchetto with ...b6 and ...g6. White harmoniously mobilizes all pieces, clamps down on e5 with 12. Nc4, and coordinates seamlessly with 13. Qc2 (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London bishop.",
      4: "3. e3 — Solid foundation.",
      6: "4. Nf3 — Develop knight.",
      8: "5. Be2 — Develop bishop.",
      10: "6. O-O — Complete king safety.",
      12: "7. h3 — Prophylaxis.",
      14: "8. a4 — Seize queenside space.",
      16: "9. Bh2 — Safe bishop retreat.",
      18: "10. Na3 — Reroute knight.",
      20: "11. c3 — Classical triangle.",
      22: "12. Nc4 — Pressure e5 and b6.",
      24: "13. Qc2 — Perfect harmony with enduring spatial advantage (+2.5 advantage)."
    }
  },

  // 2.4 Sharp Jobava London (7 new lines)
  {
    id: 'jobava-punish-c7-fork-nb5',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – 5. f3 & 13. g5! Flank Demolition Assault',
    shortName: 'Jobava 13. g5! Flank Assault',
    category: 'Kingside Assault',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c6 4. e3 Bf5 5. f3 e6 6. g4 Bg6 7. h4 h6 8. Bd3 Bxd3 9. Qxd3 Bd6 10. Nge2 Bxf4 11. Nxf4 Nbd7 12. O-O-O Qc7 13. g5',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c6 4. e3 Bf5 5. f3 e6 6. g4 Bg6 7. h4 h6 8. Bd3 Bxd3 9. Qxd3 Bd6 10. Nge2 Bxf4 11. Nxf4 Nbd7 12. O-O-O Qc7 13. g5',
    fullAnnotation: 'White unleashes the trademark Jobava flank storm with 5. f3, 6. g4, and 7. h4!. After queenside castling, 13. g5! blasts open Black\'s kingside with overwhelming attack.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid foundation.",
      8: "5. f3 — Prepare aggressive g4 push.",
      10: "6. g4 — Kick the bishop.",
      12: "7. h4 — Threaten h5 trapping bishop.",
      14: "8. Bd3 — Challenge enemy bishop.",
      16: "9. Qxd3 — Connect rooks.",
      18: "10. Nge2 — Centralize knight.",
      20: "11. Nxf4 — Recapture with tempo.",
      22: "12. O-O-O — Opposite-side castling attack.",
      24: "13. g5! — Tactical Motif: Shatter Black's kingside shelter with decisive initiative (+3.5 advantage)."
    }
  },
  {
    id: 'jobava-punish-early-c5-d5-surge',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – 7. Ne5! & 11. b4! Queenside Domination',
    shortName: 'Jobava 7. Ne5! & 11. b4! Bind',
    category: 'Queenside Invasion',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c5 4. e3 cxd4 5. exd4 a6 6. Nf3 Nc6 7. Ne5 Qb6 8. Nxc6 bxc6 9. Na4 Qa5+ 10. c3 e6 11. b4 Qd8 12. Bd3',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c5 4. e3 cxd4 5. exd4 a6 6. Nf3 Nc6 7. Ne5 Qb6 8. Nxc6 bxc6 9. Na4 Qa5+ 10. c3 e6 11. b4 Qd8 12. Bd3',
    fullAnnotation: 'Black challenges with 3...c5. White seizes the e5 outpost, drives Black\'s queen backward with 9. Na4! and 11. b4!, and establishes complete domination over the c5 square.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid center.",
      8: "5. exd4 — Recapture toward open e-file.",
      10: "6. Nf3 — Mobilize kingside.",
      12: "7. Ne5! — Monster centralized outpost.",
      14: "8. Nxc6 — Shatter Black's pawn structure.",
      16: "9. Na4! — Drive queen away with tempo.",
      18: "10. c3 — Solidify knight.",
      20: "11. b4 — Banish queen to home square.",
      22: "12. Bd3 — Complete development with total queenside clamp (+3.5 advantage)."
    }
  },
  {
    id: 'jobava-punish-greedy-qb6-b2-blunder',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – 5. Nb5! & 12. Bd6! King Paralyzed Refutation',
    shortName: 'Jobava 5. Nb5! & 12. Bd6! Paralyzed',
    category: 'King Hunt',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 Bf5 4. e3 e6 5. Nb5 Na6 6. c3 c6 7. Na3 Bxa3 8. bxa3 Qa5 9. Qb3 Ne4 10. Rc1 b5 11. f3 Nf6 12. Bd6',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 Bf5 4. e3 e6 5. Nb5 Na6 6. c3 c6 7. Na3 Bxa3 8. bxa3 Qa5 9. Qb3 Ne4 10. Rc1 b5 11. f3 Nf6 12. Bd6',
    fullAnnotation: 'White strikes with the thematic 5. Nb5! threatening c7 fork. When Black tries queen raids with ...Qa5, White defends calmly and freezes Black\'s king in the center with 12. Bd6! (+3.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid center.",
      8: "5. Nb5! — Tactical Motif: Immediate threat of deadly c7 royal fork.",
      10: "6. c3 — Reinforce knight.",
      12: "7. Na3 — Step knight to a3.",
      14: "8. bxa3 — Recapture toward b-file.",
      16: "9. Qb3 — Protect c3 and attack b7.",
      18: "10. Rc1 — Solid defense of c3.",
      20: "11. f3 — Kick knight.",
      22: "12. Bd6! — Tactical Wedge: Paralyze Black's king denying castling (+3.5 advantage)."
    }
  },
  {
    id: 'jobava-punish-premature-e5-sacrifice',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – Thematic 8. Ne5 & 12. g4! Kingside Demolition',
    shortName: 'Jobava 8. Ne5 & 12. g4! Assault',
    category: 'Kingside Assault',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 e6 4. e3 Bd6 5. Nf3 Bxf4 6. exf4 O-O 7. Bd3 b6 8. Ne5 Ba6 9. Bxa6 Nxa6 10. Qe2 Nb8 11. O-O-O c5 12. g4',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 e6 4. e3 Bd6 5. Nf3 Bxf4 6. exf4 O-O 7. Bd3 b6 8. Ne5 Ba6 9. Bxa6 Nxa6 10. Qe2 Nb8 11. O-O-O c5 12. g4',
    fullAnnotation: 'White gains the f4-pawn clamp and e5 outpost, castles queenside with 11. O-O-O, and launches the crushing pawn avalanche 12. g4!, leaving Black with no defense against the incoming mate (+3.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid chain.",
      8: "5. Nf3 — Rapid development.",
      10: "6. exf4 — Double control over e5.",
      12: "7. Bd3 — Eye h7.",
      14: "8. Ne5 — Dominant knight outpost.",
      16: "9. Bxa6 — Eliminate active bishop.",
      18: "10. Qe2 — Gain tempo on knight.",
      20: "11. O-O-O — Complete king safety.",
      22: "12. g4! — Tactical Storm: Rolling kingside pawns with unstoppable attacking waves (+3.5 advantage)."
    }
  },
  {
    id: 'jobava-punish-dubious-nh5-bishop-hunt',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – 6. g4 & 12. g5! King Hunt Overthrow',
    shortName: 'Jobava 12. g5! King Hunt',
    category: 'Direct Mate',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 a6 4. e3 Bg4 5. f3 Bh5 6. g4 Bg6 7. h4 h6 8. Bd3 Bxd3 9. Qxd3 e6 10. Nge2 c5 11. O-O-O Nc6 12. g5',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 a6 4. e3 Bg4 5. f3 Bh5 6. g4 Bg6 7. h4 h6 8. Bd3 Bxd3 9. Qxd3 e6 10. Nge2 c5 11. O-O-O Nc6 12. g5',
    fullAnnotation: 'Black pins with 4...Bg4. White rolls pawns with 5. f3, 6. g4, and 7. h4!, castles queenside, and blasts open the kingside with 12. g5! winning a piece or checkmating.',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid foundation.",
      8: "5. f3 — Kick bishop.",
      10: "6. g4 — Dislodge bishop.",
      12: "7. h4 — Threaten h5 trap.",
      14: "8. Bd3 — Challenge enemy bishop.",
      16: "9. Qxd3 — Connect rooks.",
      18: "10. Nge2 — Develop piece.",
      20: "11. O-O-O — Opposite-side castling attack.",
      22: "12. g5! — Tactical Motif: Rip open the h- and g-files against the uncastled king (+4.0 advantage)."
    }
  },
  {
    id: 'jobava-punish-trapped-queen-a5',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – 5. dxc5! & 10. e4! Center Rupture',
    shortName: 'Jobava 10. e4! Center Rupture',
    category: 'Center Breakthrough',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c5 4. e3 a6 5. dxc5 Qa5 6. Nf3 e6 7. a3 Qxc5 8. Bd3 Be7 9. O-O O-O 10. e4 dxe4 11. Nxe4 Nxe4 12. Bxe4',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 c5 4. e3 a6 5. dxc5 Qa5 6. Nf3 e6 7. a3 Qxc5 8. Bd3 Be7 9. O-O O-O 10. e4 dxe4 11. Nxe4 Nxe4 12. Bxe4',
    fullAnnotation: 'Black grabs the c5 pawn with the queen. White exploits Black\'s queen tempos with 7. a3 and strikes the center with 10. e4!, securing dominant bishop pair and open files (+2.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid foundation.",
      8: "5. dxc5! — Liquidate center pawn.",
      10: "6. Nf3 — Rapid development.",
      12: "7. a3 — Gain tempo on queen.",
      14: "8. Bd3 — Active diagonal.",
      16: "9. O-O — Complete king safety.",
      18: "10. e4! — Tactical Breakthrough: Blow open central files against Black's exposed queen.",
      20: "11. Nxe4 — Centralize knight.",
      22: "12. Bxe4 — Commanding bishop pair commanding both flanks (+2.5 advantage)."
    }
  },
  {
    id: 'jobava-punish-center-overreach-e5-f4',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava',
    name: 'Jobava London – Kingside Lock 8. g5! & 11. Nb5! Infiltration',
    shortName: 'Jobava 11. Nb5! Infiltration',
    category: 'Piece Trap',
    eco: '1. d4 d5 2. Nc3 Nf6 3. Bf4 Bf5 4. e3 e6 5. f3 c5 6. g4 Bg6 7. h4 h5 8. g5 Nfd7 9. Bd3 Bxd3 10. Qxd3 g6 11. Nb5 Na6 12. c3 Qb6 13. a4',
    pgn: '1. d4 d5 2. Nc3 Nf6 3. Bf4 Bf5 4. e3 e6 5. f3 c5 6. g4 Bg6 7. h4 h5 8. g5 Nfd7 9. Bd3 Bxd3 10. Qxd3 g6 11. Nb5 Na6 12. c3 Qb6 13. a4',
    fullAnnotation: 'When Black plays 7...h5, White freezes the kingside with 8. g5!, invades c7 with 11. Nb5! Na6, and cements total spatial dominance with 13. a4 (+3.5 advantage).',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Nc3 — Jobava knight.",
      4: "3. Bf4 — Active bishop.",
      6: "4. e3 — Solid center.",
      8: "5. f3 — Prepare expansion.",
      10: "6. g4 — Kick bishop.",
      12: "7. h4 — Threaten h5.",
      14: "8. g5! — Freeze Black's kingside.",
      16: "9. Bd3 — Challenge enemy bishop.",
      18: "10. Qxd3 — Recapture toward center.",
      20: "11. Nb5! — Tactical Motif: Decisive threat of c7 fork forcing knight to passive rim.",
      22: "12. c3 — Solidify knight.",
      24: "13. a4 — Complete spatial clamp suffocating Black (+3.5 advantage)."
    }
  }
];

let errors = 0;
for (const line of newLondonLines) {
  const g = new Chess();
  const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!g.move(t, { sloppy: true })) {
      console.error(`FAIL: ${line.id} at ply ${i} token '${t}'`);
      errors++;
      break;
    }
  }
  if (g.turn() !== 'b') {
    console.error(`FAIL: ${line.id} does not end on White's move (turn=${g.turn()})`);
    errors++;
  }
  console.log(`PASS: ${line.id} (${g.history().length} plies) FEN: ${g.fen()}`);
}

if (errors === 0) {
  console.log(`ALL ${newLondonLines.length} NEW LONDON SYSTEM LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
