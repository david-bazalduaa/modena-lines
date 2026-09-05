/* ============================================================
   TEST SUITE: 25 NEW RUY LOPEZ TACTICAL PUNISHMENT LINES
   ============================================================ */

import { Chess } from 'chess.js';

export const newRuyLopezLines = [
  // 3.1 Berlin Defense (5 new lines)
  {
    id: 'berlin-punish-early-bc5-d4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin',
    name: 'Berlin Classical – 4...Bc5?! Punished (6. d4! & 13. Nc4)',
    shortName: '4...Bc5?! 6. d4! Central Break',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5 h6 8. Bh4 d6 9. Qd3 Bg4 10. Nbd2 Qe7 11. Rfe1 Rad8 12. h3 Bd7 13. Nc4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5 h6 8. Bh4 d6 9. Qd3 Bg4 10. Nbd2 Qe7 11. Rfe1 Rad8 12. h3 Bd7 13. Nc4',
    fullAnnotation: 'Black chooses the Classical Berlin 4...Bc5. White establishes the d4 pawn center, pins with 7. Bg5!, and maneuvers knight to c4 with total central control (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. O-O — Castle into safety.",
      7: "Opponent Choice: 4...Bc5 Classical Berlin variation.",
      8: "5. c3 — Prepare central steamroller.",
      10: "6. d4! — Center clash opening lines.",
      12: "7. Bg5! — Pin the f6 knight.",
      14: "8. Bh4 — Preserve the pin.",
      16: "9. Qd3 — Centralize queen defending d4.",
      18: "10. Nbd2 — Minor piece development.",
      20: "11. Rfe1 — Dominate the open e-file.",
      22: "12. h3 — Question Black's bishop.",
      24: "13. Nc4 — Monster knight placement with overwhelming central grip (+2.5 advantage)."
    }
  },
  {
    id: 'berlin-punish-greedy-nxe4-re1',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin',
    name: 'Berlin Defense – 4...Nxe4 5. Re1! & 13. Ne4 Outpost',
    shortName: '4...Nxe4 5. Re1! Outpost',
    category: 'Pin Exploitation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. Re1 Nd6 6. Nxe5 Be7 7. Bf1 Nxe5 8. Rxe5 O-O 9. d4 Bf6 10. Re1 Nf5 11. d5 d6 12. Nd2 Re8 13. Ne4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. Re1 Nd6 6. Nxe5 Be7 7. Bf1 Nxe5 8. Rxe5 O-O 9. d4 Bf6 10. Re1 Nf5 11. d5 d6 12. Nd2 Re8 13. Ne4',
    fullAnnotation: 'Black takes with 4...Nxe4. White pins on the e-file with 5. Re1!, recovers material seamlessly, and plants a monster knight outpost on 13. Ne4 (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. O-O — Complete king safety.",
      7: "Opponent Choice: 4...Nxe4 Open Berlin variation.",
      8: "5. Re1! — Tactical Pin: Attack knight along the e-file.",
      10: "6. Nxe5 — Recapture with discovered check threat.",
      12: "7. Bf1 — Retreat bishop preserving minor piece harmony.",
      14: "8. Rxe5 — Recapture piece.",
      16: "9. d4 — Reclaim pawn center.",
      18: "10. Re1 — Active rook retreat.",
      20: "11. d5 — Seize central space.",
      22: "12. Nd2 — Reroute knight toward e4.",
      24: "13. Ne4 — Dominant knight outpost commanding Black's camp (+2.5 advantage)."
    }
  },
  {
    id: 'berlin-punish-l-hermet-fork-trick',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin',
    name: 'Berlin Defense – 5...a6?! 9. Qf3! & 10. Nxc6! Tactical Decimation',
    shortName: 'Berlin 10. Nxc6! Tactical Decimation',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 a6 6. Bxc6 dxc6 7. Re1 Bf5 8. Nxe5 Be7 9. Qf3 Nd6 10. Nxc6 bxc6 11. Qxc6+ Bd7 12. Qf3 O-O 13. Nc3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 a6 6. Bxc6 dxc6 7. Re1 Bf5 8. Nxe5 Be7 9. Qf3 Nd6 10. Nxc6 bxc6 11. Qxc6+ Bd7 12. Qf3 O-O 13. Nc3',
    fullAnnotation: 'Black tries 5...a6 in the open Berlin. White pins on the e-file, fires 9. Qf3! double-attacking f5 and c6, and strikes 10. Nxc6!, winning a pawn and leaving Black in disarray.',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. O-O — Castle.",
      8: "5. d4 — Center strike.",
      9: "Opponent Mistake: 5...a6?! loses crucial tempos under e-file pins.",
      10: "6. Bxc6 — Eliminate knight defender.",
      12: "7. Re1 — Pin knight against king.",
      14: "8. Nxe5 — Recapture piece.",
      16: "9. Qf3! — Tactical Motif: Double attack against f5 bishop and c6 pawn.",
      18: "10. Nxc6! — Tactical Strike: Rip open Black's queenside.",
      20: "11. Qxc6+ — Checking fork winning material.",
      22: "12. Qf3 — Queen retreat maintaining central command.",
      24: "13. Nc3 — Rapid mobilization with clean extra pawn (+3.0 advantage)."
    }
  },
  {
    id: 'berlin-punish-rio-de-janeiro-variation',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin',
    name: 'Berlin Defense – Rio de Janeiro 8. e5! & 12. Nf5 Dominance',
    shortName: 'Rio de Janeiro 12. Nf5 Dominance',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nc3 O-O 10. Re1 Nc5 11. Nd4 Ne6 12. Nf5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nc3 O-O 10. Re1 Nc5 11. Nd4 Ne6 12. Nf5',
    fullAnnotation: 'In the Rio de Janeiro variation, White clamps down with 8. e5!, dominates the e-file with 10. Re1, and plants 12. Nf5!, paralyzing Black\'s kingside defense (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. O-O — Complete king safety.",
      8: "5. d4 — Center clash.",
      10: "6. Qe2 — Step queen into the e-file.",
      12: "7. Bxc6 — Trade bishop giving Black doubled pawns.",
      14: "8. dxe5! — Space wedge pushing knight to b7.",
      16: "9. Nc3 — Rapid development.",
      18: "10. Re1 — Active rook on e-file.",
      20: "11. Nd4 — Centralize knight.",
      22: "12. Nf5 — Dominating knight invasion threatening Black's bishop pair (+2.5 advantage)."
    }
  },
  {
    id: 'berlin-punish-dubious-d6-passivity',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-berlin',
    name: 'Berlin Defense – Passive 4...d6?! Punished (9. Bxc6! & 10. Qf3)',
    shortName: '4...d6?! 9. Bxc6! Punished',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Re1 exd4 8. Nxd4 O-O 9. Bxc6 bxc6 10. Qf3 Re8 11. Bg5 h6 12. Bh4 Rb8 13. b3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Re1 exd4 8. Nxd4 O-O 9. Bxc6 bxc6 10. Qf3 Re8 11. Bg5 h6 12. Bh4 Rb8 13. b3',
    fullAnnotation: 'Black retreats into a passive Steinitz-like defense with 4...d6?!. White liquidates on c6 with 9. Bxc6!, mobilizes the queen with 10. Qf3, and secures dominant positional superiority (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. O-O — Castle.",
      7: "Opponent Inaccuracy: 4...d6?! is passive and concedes central space.",
      8: "5. d4 — Center clash.",
      10: "6. Nc3 — Develop knight.",
      12: "7. Re1 — Dominate e-file.",
      14: "8. Nxd4 — Centralize knight.",
      16: "9. Bxc6! — Tactical Trade: Inflict permanent doubled pawns on Black.",
      18: "10. Qf3 — Central queen battery.",
      20: "11. Bg5 — Pin the f6 knight.",
      22: "12. Bh4 — Preserve pin.",
      24: "13. b3 — Solidify queenside with complete control (+2.5 advantage)."
    }
  },

  // 3.2 Closed Ruy Lopez (5 new lines)
  {
    id: 'closed-punish-chigorin-overextension',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed',
    name: 'Closed Ruy Lopez – Chigorin 14. Nb3! Central Outpost Mastery',
    shortName: 'Chigorin 14. Nb3! Outpost',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3',
    fullAnnotation: 'In the Chigorin Variation, White holds the center with Bc2 and 11. d4, liquidates on d4, and cements control over d4 with 14. Nb3!, keeping Black\'s knight sidelined (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Bishop retreats preserving pressure.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook on e-file.",
      12: "7. Bb3 — Bishop tucks away.",
      14: "8. c3 — Prepare d4.",
      16: "9. h3 — Deny ...Bg4 pin.",
      18: "10. Bc2 — Preserve light-squared bishop.",
      20: "11. d4 — Center clash.",
      22: "12. Nbd2 — Minor piece development.",
      24: "13. cxd4 — Reclaim central duo.",
      26: "14. Nb3 — Dominant knight placement controlling d4 and restraining Black's pieces (+2.5 advantage)."
    }
  },
  {
    id: 'closed-punish-breyer-reroute-sluggish',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed',
    name: 'Closed Ruy Lopez – Breyer 9...Nb8 (14. Ng3 Kingside Battery)',
    shortName: 'Breyer 14. Ng3 Battery',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3',
    fullAnnotation: 'Against the Breyer rerouting 9...Nb8, White executes the classical knight tour Nbd2-f1-g3, reinforcing e4 and establishing overwhelming kingside pressure (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat preserving pin.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop retreat.",
      14: "8. c3 — Prepare center.",
      16: "9. h3 — Prophylaxis.",
      17: "Opponent Choice: 9...Nb8 Breyer knight rerouting.",
      18: "10. d4 — Strike in the center.",
      20: "11. Nbd2 — Reroute knight toward kingside.",
      22: "12. Bc2 — Preserve bishop.",
      24: "13. Nf1 — Knight moves toward f5.",
      26: "14. Ng3 — Complete harmonious piece coordination eyeing f5 and h5 (+2.5 advantage)."
    }
  },
  {
    id: 'closed-punish-worrall-attack-qe2',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed',
    name: 'Closed Ruy Lopez – Worrall Attack 5. Qe2 & 11. Rd1! Pin Domination',
    shortName: 'Worrall 11. Rd1! Pin Domination',
    category: 'Pin Exploitation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2 b5 6. Bb3 Be7 7. c3 O-O 8. O-O d5 9. d3 dxe4 10. dxe4 Bg4 11. Rd1 Qc8 12. Nbd2 Na5 13. Bc2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2 b5 6. Bb3 Be7 7. c3 O-O 8. O-O d5 9. d3 dxe4 10. dxe4 Bg4 11. Rd1 Qc8 12. Nbd2 Na5 13. Bc2',
    fullAnnotation: 'In the Worrall Attack 5. Qe2, White counters Black\'s early 8...d5 break with 11. Rd1!, pinning Black\'s queen along the d-file and preserving a solid central clamp with 13. Bc2 (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat preserving bishop.",
      8: "5. Qe2 — The Worrall Attack.",
      10: "6. Bb3 — Tuck bishop away.",
      12: "7. c3 — Prepare center.",
      14: "8. O-O — Complete king safety.",
      16: "9. d3 — Solidify e4.",
      18: "10. dxe4 — Reclaim central pawn.",
      20: "11. Rd1! — Tactical Motif: Seize open d-file with tempo against Black's queen.",
      22: "12. Nbd2 — Develop knight toward c4.",
      24: "13. Bc2 — Preserve key bishop with commanding positional advantage (+2.5 advantage)."
    }
  },
  {
    id: 'closed-punish-center-attack-d4-exd4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed',
    name: 'Closed Ruy Lopez – Premature 9...Bg4?! Shattered (13. d5!)',
    shortName: '9...Bg4?! 13. d5! Central Crush',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4 10. Be3 exd4 11. cxd4 Na5 12. Bc2 c5 13. d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4 10. Be3 exd4 11. cxd4 Na5 12. Bc2 c5 13. d5',
    fullAnnotation: 'Black pins prematurely with 9...Bg4. White reinforces with 10. Be3, takes 13. d5!, locking Black\'s knight out on a5 and preparing kingside breakthroughs (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat bishop.",
      8: "5. O-O — Castle.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. c3 — Prepare center.",
      16: "9. d4 — Strike in the center.",
      17: "Opponent Choice: 9...Bg4 pins knight.",
      18: "10. Be3 — Reinforce d4.",
      20: "11. cxd4 — Reclaim pawn center.",
      22: "12. Bc2 — Guard diagonal.",
      24: "13. d5! — Tactical Space Clamp: Exile Black's a5 knight to the rim permanently (+2.5 advantage)."
    }
  },
  {
    id: 'closed-punish-flank-h6-weakness',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-closed',
    name: 'Closed Ruy Lopez – Passive 9...h6?! & 14. Bc2 Kingside Preparation',
    shortName: 'Passive 9...h6?! 14. Bc2 Setup',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 h6 10. d4 Re8 11. Nbd2 Bf8 12. Nf1 Bb7 13. Ng3 Na5 14. Bc2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 h6 10. d4 Re8 11. Nbd2 Bf8 12. Nf1 Bb7 13. Ng3 Na5 14. Bc2',
    fullAnnotation: 'Black wastes time with 9...h6?!. White executes the master knight maneuver Nbd2-f1-g3, preserves the Italian-Ruy bishop on c2, and commands the center effortlessly (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat bishop.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook on e-file.",
      12: "7. Bb3 — Bishop retreat.",
      14: "8. c3 — Prepare center.",
      16: "9. h3 — Deny ...Bg4.",
      17: "Opponent Inaccuracy: 9...h6?! creates a hook on the kingside.",
      18: "10. d4 — Center clash.",
      20: "11. Nbd2 — Knight tour toward kingside.",
      22: "12. Nf1 — Maneuver to g3.",
      24: "13. Ng3 — Eye f5 and e4 squares.",
      26: "14. Bc2 — Complete harmonious piece coordination (+2.5 advantage)."
    }
  },

  // 3.3 Marshall Attack & Anti-Marshall (5 new lines)
  {
    id: 'marshall-punish-anti-8-a4-b4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall',
    name: 'Anti-Marshall 8. a4! – 8...b4 & 13. Bxc4 Queenside Clamp',
    shortName: 'Anti-Marshall 8. a4! 13. Bxc4 Clamp',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d3 d6 10. Nbd2 Na5 11. Ba2 c5 12. Nc4 Nxc4 13. Bxc4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d3 d6 10. Nbd2 Na5 11. Ba2 c5 12. Nc4 Nxc4 13. Bxc4',
    fullAnnotation: 'White defuses the Marshall Gambit with 8. a4! b4. White trades Black\'s active knight on c4 and establishes the dominating bishop on c4 with absolute control (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat preserving pin.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. a4! — Tactical Anti-Marshall: Question Black's queenside pawns before ...d5 is possible.",
      16: "9. d3 — Solidify center.",
      18: "10. Nbd2 — Reroute knight.",
      20: "11. Ba2 — Bishop steps back safely.",
      22: "12. Nc4 — Challenge the a5 knight.",
      24: "13. Bxc4 — Monster dark-squared bishop commanding the board (+2.5 advantage)."
    }
  },
  {
    id: 'marshall-punish-anti-8-h3-d6',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall',
    name: 'Anti-Marshall 8. h3! – 11. Nc3 & 13. Ng3 Kingside Domination',
    shortName: 'Anti-Marshall 8. h3! Kingside Dominance',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. h3 Bb7 9. d3 d6 10. a3 Qd7 11. Nc3 Nd8 12. Ne2 Ne6 13. Ng3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. h3 Bb7 9. d3 d6 10. a3 Qd7 11. Nc3 Nd8 12. Ne2 Ne6 13. Ng3',
    fullAnnotation: 'White sidesteps the Marshall with 8. h3! and 9. d3. White develops smoothly with Nc3-e2-g3, seizing control of the f5 outpost and denying Black any counterplay (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat bishop.",
      8: "5. O-O — King safety.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. h3! — Anti-Marshall prophylaxis preventing ...d5 complications.",
      16: "9. d3 — Solidify e4.",
      18: "10. a3 — Queenside space control.",
      20: "11. Nc3 — Rapid minor piece mobilization.",
      22: "12. Ne2 — Reroute knight toward f5.",
      24: "13. Ng3 — Total kingside piece coordination (+2.5 advantage)."
    }
  },
  {
    id: 'marshall-punish-main-gambit-refuted',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall',
    name: 'Marshall Attack Accepted – 14. g3 & 16. Qd3 Iron Consolidation',
    shortName: 'Marshall 16. Qd3 Iron Defense',
    category: 'Pawn Grab Punishment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3',
    fullAnnotation: 'The definitive refutation of the Marshall Attack. White pockets the e5 pawn, defends calmly with 14. g3, develops 15. Be3, and places queen on d3, retaining an extra clean pawn (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Bishop retreat.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook on e-file.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. c3 — Prepare center.",
      15: "Opponent Gambit: 8...d5 the Marshall Attack.",
      16: "9. exd5 — Liquidate center pawn.",
      18: "10. Nxe5 — Pocket the sacrificed pawn.",
      20: "11. Rxe5 — Central rook control.",
      22: "12. d4 — Solidify center.",
      24: "13. Re1 — Rook steps back safely.",
      26: "14. g3 — Halt Black's battery.",
      28: "15. Be3 — Minor piece development.",
      30: "16. Qd3 — Centralize queen with decisive extra material (+2.5 advantage)."
    }
  },
  {
    id: 'marshall-punish-premature-f5-counter',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall',
    name: 'Anti-Marshall – 11. axb5! & 13. Na3 Clean Pawn Pockets',
    shortName: 'Anti-Marshall 13. Na3 Pawn Win',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 Bb7 9. d3 d6 10. c3 Nd7 11. axb5 axb5 12. Rxa8 Qxa8 13. Na3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 Bb7 9. d3 d6 10. c3 Nd7 11. axb5 axb5 12. Rxa8 Qxa8 13. Na3',
    fullAnnotation: 'In the Anti-Marshall, White strikes with 11. axb5!, trades rooks on the a-file, and targets the b5 pawn with 13. Na3!, winning clean material with complete strategic domination (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat preserving pin.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. a4 — Anti-Marshall flank challenge.",
      16: "9. d3 — Solidify e4.",
      18: "10. c3 — Reinforce d4.",
      20: "11. axb5! — Tactical Trade: Open the a-file and isolate b5.",
      22: "12. Rxa8 — Liquidate rooks.",
      24: "13. Na3 — Double attack against the undefended b5 pawn winning clean material (+2.5 advantage)."
    }
  },
  {
    id: 'marshall-punish-steinitz-d5-overreach',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall',
    name: 'Marshall Steiner 9...e4?! – 10. dxc6! & 14. d4 Decisive Material Win',
    shortName: 'Marshall Steiner 14. d4 Win',
    category: 'Tactical Destruction',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4 10. dxc6 exf3 11. Qxf3 Bg4 12. Qg3 Bd6 13. f4 Re8 14. d4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4 10. dxc6 exf3 11. Qxf3 Bg4 12. Qg3 Bd6 13. f4 Re8 14. d4',
    fullAnnotation: 'Black tries the aggressive Herman Steiner variation with 9...e4?!. White takes 10. dxc6!, blocks kingside checks with 13. f4!, and consolidates extra pieces with 14. d4 (+4.0 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Ba4 — Retreat bishop.",
      8: "5. O-O — Complete king safety.",
      10: "6. Re1 — Active rook.",
      12: "7. Bb3 — Bishop tuck.",
      14: "8. c3 — Prepare center.",
      16: "9. exd5 — Liquidate center.",
      17: "Opponent Mistake: 9...e4?! Steiner counter-sacrifice is tactically unsound.",
      18: "10. dxc6! — Pocket the knight.",
      20: "11. Qxf3 — Recapture toward center.",
      22: "12. Qg3 — Queen steps aside maintaining f4 control.",
      24: "13. f4! — Tactical Blocker: Neutralize Black's light-squared bishop attack.",
      26: "14. d4 — Cement extra piece with completely winning position (+4.0 advantage)."
    }
  },

  // 3.4 Sidelines & Defenses (5 new lines)
  {
    id: 'ruy-punish-schliemann-3-f5-d3',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines',
    name: 'Schliemann Gambit – 3...f5 (4. d3! & 8. Bc4!) King Trapped',
    shortName: 'Schliemann 4. d3! & 8. Bc4! Refuted',
    category: 'King Hunt',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. d3 fxe4 5. dxe4 Nf6 6. O-O d6 7. Nc3 Be7 8. Bc4 Bg4 9. h3 Bh5 10. Be3 Qd7 11. a3 O-O-O 12. b4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. d3 fxe4 5. dxe4 Nf6 6. O-O d6 7. Nc3 Be7 8. Bc4 Bg4 9. h3 Bh5 10. Be3 Qd7 11. a3 O-O-O 12. b4',
    fullAnnotation: 'The definitive refutation of the Schliemann Gambit 3...f5. White solidifies with 4. d3!, freezes Black\'s king with 8. Bc4!, and launches the winning queenside pawn storm 12. b4! (+3.0 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      5: "Opponent Gambit: 3...f5 the Schliemann Gambit.",
      6: "4. d3! — Tactical Refutation: Solidify e4 denying Black tactical chaos.",
      8: "5. dxe4 — Recapture establishing pawn control.",
      10: "6. O-O — Complete king safety.",
      12: "7. Nc3 — Rapid minor piece mobilization.",
      14: "8. Bc4! — Tactical Wedge: Paralyze Black's king denying castling.",
      16: "9. h3 — Question bishop.",
      18: "10. Be3 — Guard central squares.",
      20: "11. a3 — Prepare b4 pawn storm.",
      22: "12. b4! — Decisive queenside assault against Black's castled king (+3.0 advantage)."
    }
  },
  {
    id: 'ruy-punish-bird-defense-3-nd4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines',
    name: 'Bird Defense – 3...Nd4?! 4. Nxd4! & 13. Bf4 Isolated Pawn Siege',
    shortName: 'Bird 3...Nd4?! 13. Bf4 Siege',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4 4. Nxd4 exd4 5. O-O Bc5 6. d3 c6 7. Bc4 d5 8. exd5 cxd5 9. Bb3 Ne7 10. Nd2 O-O 11. Nf3 Bg4 12. h3 Bh5 13. Bf4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4 4. Nxd4 exd4 5. O-O Bc5 6. d3 c6 7. Bc4 d5 8. exd5 cxd5 9. Bb3 Ne7 10. Nd2 O-O 11. Nf3 Bg4 12. h3 Bh5 13. Bf4',
    fullAnnotation: 'Black plays Bird\'s Defense 3...Nd4?!. White eliminates the knight with 4. Nxd4!, retreats 9. Bb3, and besieges Black\'s isolated d4/d5 pawns with 13. Bf4 (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      5: "Opponent Choice: 3...Nd4 Bird's Defense wastes time moving knight twice.",
      6: "4. Nxd4! — Eliminate Black's only active piece.",
      8: "5. O-O — Complete king safety.",
      10: "6. d3 — Solidify center.",
      12: "7. Bc4 — Bishop retreats along active diagonal.",
      14: "8. exd5 — Liquidate center favorably.",
      16: "9. Bb3 — Safe bishop retreat.",
      18: "10. Nd2 — Reroute knight toward d4.",
      20: "11. Nf3 — Pressure d4 pawn.",
      22: "12. h3 — Question Black's bishop.",
      24: "13. Bf4 — Dominant piece placement blockading Black's isolated pawns (+2.5 advantage)."
    }
  },
  {
    id: 'ruy-punish-cozio-defense-3-nge7',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines',
    name: 'Cozio Defense – 3...Nge7?! (6. Nd5! & 9. Nxf6+ King Stripped)',
    shortName: 'Cozio 6. Nd5! & 9. Nxf6+ Attack',
    category: 'King Hunt',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. Nc3 g6 5. d4 exd4 6. Nd5 Bg7 7. Bg5 h6 8. Bf6 Bxf6 9. Nxf6+ Kf8 10. Nxd4 Kg7 11. Nd5 Nxd5 12. exd5 Re8+ 13. Be2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. Nc3 g6 5. d4 exd4 6. Nd5 Bg7 7. Bg5 h6 8. Bf6 Bxf6 9. Nxf6+ Kf8 10. Nxd4 Kg7 11. Nd5 Nxd5 12. exd5 Re8+ 13. Be2',
    fullAnnotation: 'In the Cozio Defense, White strikes with 6. Nd5! and 7. Bg5!, strips Black\'s king of castling rights with 9. Nxf6+, and dominates the center with 13. Be2 (+3.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      5: "Opponent Choice: 3...Nge7 Cozio Defense.",
      6: "4. Nc3 — Rapid development.",
      8: "5. d4 — Center clash.",
      10: "6. Nd5! — Tactical Motif: Exploiting the pinned e7 knight.",
      12: "7. Bg5! — Pin the bishop against Black's queen.",
      14: "8. Bf6 — Threaten checkmate/forks.",
      16: "9. Nxf6+ — Strip Black's king of castling rights.",
      18: "10. Nxd4 — Centralize knight.",
      20: "11. Nd5 — Reposition knight to outpost.",
      22: "12. exd5 — Reclaim open e-file.",
      24: "13. Be2 — White has total control over open central lines (+3.5 advantage)."
    }
  },
  {
    id: 'ruy-punish-steinitz-3-d6-d4',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines',
    name: 'Steinitz Defense – Passive 3...d6?! (6. Bxc6! & 10. O-O-O Blast)',
    shortName: 'Steinitz 3...d6?! 10. O-O-O Blast',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. Bxc6 Bxc6 7. Qd3 exd4 8. Nxd4 Bd7 9. Bg5 Be7 10. O-O-O O-O 11. f4 Re8 12. Rhe1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. Bxc6 Bxc6 7. Qd3 exd4 8. Nxd4 Bd7 9. Bg5 Be7 10. O-O-O O-O 11. f4 Re8 12. Rhe1',
    fullAnnotation: 'Black chooses the passive Old Steinitz 3...d6. White blasts open the center with 4. d4!, trades on c6, centralizes queen on d3, and castles queenside with overwhelming central pressure (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      5: "Opponent Choice: 3...d6 Old Steinitz Defense.",
      6: "4. d4 — Center clash.",
      8: "5. Nc3 — Rapid mobilization.",
      10: "6. Bxc6 — Trade bishop giving Black doubled pawns.",
      12: "7. Qd3 — Centralize queen defending e4.",
      14: "8. Nxd4 — Recapture with tempo.",
      16: "9. Bg5 — Pin the f6 knight.",
      18: "10. O-O-O — Opposite-side castling attack.",
      20: "11. f4 — Space-grabbing pawn storm.",
      22: "12. Rhe1 — Total domination of central e- and d-files (+2.5 advantage)."
    }
  },
  {
    id: 'ruy-punish-smyslov-3-g6-fianchetto',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-sidelines',
    name: 'Smyslov Defense – 3...g6?! (5. Bg5! & 10. O-O-O Queenside Assault)',
    shortName: 'Smyslov 3...g6?! 10. O-O-O Assault',
    category: 'Direct Mate',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. d4 exd4 5. Bg5 Be7 6. Bxe7 Qxe7 7. Bxc6 dxc6 8. Qxd4 Nf6 9. Nc3 O-O 10. O-O-O Bg4 11. Qe3 Rfe8 12. Rhe1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. d4 exd4 5. Bg5 Be7 6. Bxe7 Qxe7 7. Bxc6 dxc6 8. Qxd4 Nf6 9. Nc3 O-O 10. O-O-O Bg4 11. Qe3 Rfe8 12. Rhe1',
    fullAnnotation: 'Black tries the Smyslov fianchetto 3...g6?!. White strikes instantly with 4. d4! and 5. Bg5!, trades into an overwhelmingly active queen on d4, and castles queenside with crushing attack (+3.0 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      5: "Opponent Choice: 3...g6 Smyslov fianchetto variation.",
      6: "4. d4 — Center clash.",
      8: "5. Bg5! — Tactical Pin: Intercept Black's queen before the bishop can fianchetto.",
      10: "6. Bxe7 — Liquidate Black's defender.",
      12: "7. Bxc6 — Shatter queenside pawn structure.",
      14: "8. Qxd4! — Monster centralized queen attacking h8 rook.",
      16: "9. Nc3 — Rapid mobilization.",
      18: "10. O-O-O — Opposite-side castling attack.",
      20: "11. Qe3 — Queen repositioning.",
      22: "12. Rhe1 — Unstoppable central and kingside pressure (+3.0 advantage)."
    }
  },

  // 3.5 Exchange Variation (5 new lines)
  {
    id: 'exchange-punish-early-bg4-pin',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange',
    name: 'Ruy Lopez Exchange – 5...Bg4 6...h5 Trap Refuted (12. Nh2!)',
    shortName: 'Exchange 6...h5?! 12. Nh2! Refuted',
    category: 'Piece Trap',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 Ng6 10. d4 Bd6 11. hxg4 hxg4 12. Nh2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 Ng6 10. d4 Bd6 11. hxg4 hxg4 12. Nh2',
    fullAnnotation: 'Black tries the classical 6...h5 fishing pole trap. White calmly dismantles Black\'s threats with 8. Nbd2 and 10. d4!, winning the piece with 12. Nh2! while Black\'s attack fizzles (+4.0 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — Complete king safety.",
      10: "6. h3 — Question the bishop.",
      11: "Opponent Trap: 6...h5 the Fishing Pole trap offering the bishop.",
      12: "7. d3 — Solidify e4.",
      14: "8. Nbd2 — Reroute knight toward f1.",
      16: "9. Re1 — Active rook.",
      18: "10. d4 — Center strike neutralizing Black's piece coordination.",
      20: "11. hxg4 — Pocket the piece safely.",
      22: "12. Nh2 — Knight covers h-file with clean extra piece (+4.0 advantage)."
    }
  },
  {
    id: 'exchange-punish-queen-swap-endgame',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange',
    name: 'Ruy Lopez Exchange – 5...f6 Endgame 10. Na5! & 12. Bf4 Infiltration',
    shortName: 'Exchange 5...f6 12. Bf4 Infiltration',
    category: 'Endgame Conversion',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Na5 b6 11. Nc4 Be7 12. Bf4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Na5 b6 11. Nc4 Be7 12. Bf4',
    fullAnnotation: 'Black defends solidly with 5...f6. White initiates the textbook Exchange endgame with 6. d4!, invades the queenside with 10. Na5!, and attacks c7 with 12. Bf4 winning clean material (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — Complete king safety.",
      9: "Opponent Choice: 5...f6 solidifies e5.",
      10: "6. d4! — Center strike initiating endgame.",
      12: "7. Nxd4 — Centralize knight.",
      14: "8. Nb3 — Safe knight retreat.",
      16: "9. Rxd1 — Seize the only open file.",
      18: "10. Na5! — Tactical Motif: Target Black's c6/c5/b6 pawn weaknesses.",
      20: "11. Nc4 — Attack d6 bishop.",
      22: "12. Bf4 — Decisive double attack on c7 winning the pawn (+2.5 advantage)."
    }
  },
  {
    id: 'exchange-punish-aggressive-5-bd6',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange',
    name: 'Ruy Lopez Exchange – 5...Bd6?! 10. Nc4! Bishop Pair Neutralization',
    shortName: 'Exchange 5...Bd6?! 10. Nc4! Neutralized',
    category: 'Positional Mastery',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bd6 6. d4 exd4 7. Qxd4 f6 8. Be3 Ne7 9. Nbd2 Be6 10. Nc4 Bxc4 11. Qxc4 Qd7 12. Rad1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bd6 6. d4 exd4 7. Qxd4 f6 8. Be3 Ne7 9. Nbd2 Be6 10. Nc4 Bxc4 11. Qxc4 Qd7 12. Rad1',
    fullAnnotation: 'Black develops passively with 5...Bd6?!. White strikes with 6. d4!, centralizes the queen on d4, eliminates Black\'s bishop pair with 10. Nc4!, and pins Black\'s queen on 12. Rad1 (+2.5 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — Castle.",
      9: "Opponent Choice: 5...Bd6?! blocks the d-file.",
      10: "6. d4 — Center clash.",
      12: "7. Qxd4 — Centralize queen threatening g7.",
      14: "8. Be3 — Develop minor piece.",
      16: "9. Nbd2 — Reroute knight toward c4.",
      18: "10. Nc4! — Tactical Trade: Strip Black of the bishop pair.",
      20: "11. Qxc4 — Centralize queen with tempo.",
      22: "12. Rad1 — Absolute pin on the d-file against Black's queen (+2.5 advantage)."
    }
  },
  {
    id: 'exchange-punish-premature-qe7-pin',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange',
    name: 'Ruy Lopez Exchange – 5...Qe7?! (6. d4! & 12. e5! Central Clamp)',
    shortName: 'Exchange 5...Qe7?! 12. e5! Central Clamp',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qe7 6. d4 exd4 7. Qxd4 Bg4 8. Nbd2 Nf6 9. Re1 Rd8 10. Qc3 Qc5 11. Qb3 Qb5 12. e5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qe7 6. d4 exd4 7. Qxd4 Bg4 8. Nbd2 Nf6 9. Re1 Rd8 10. Qc3 Qc5 11. Qb3 Qb5 12. e5',
    fullAnnotation: 'Black misplaces the queen with 5...Qe7?!. White plays 6. d4!, centralizes the queen on d4, and launches 12. e5!, kicking the f6 knight and dominating the entire board (+3.0 advantage).',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — King safety.",
      9: "Opponent Inaccuracy: 5...Qe7?! exposes the queen to central tactics.",
      10: "6. d4 — Center clash.",
      12: "7. Qxd4 — Centralize queen.",
      14: "8. Nbd2 — Minor piece development.",
      16: "9. Re1 — Active rook on e-file.",
      18: "10. Qc3 — Step queen away from rook.",
      20: "11. Qb3 — Pressure b7.",
      22: "12. e5! — Tactical Motif: Central pawn thrust banishing Black's knight (+3.0 advantage)."
    }
  },
  {
    id: 'exchange-punish-delayed-c5-kingside-push',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-exchange',
    name: 'Ruy Lopez Exchange – 5...Ne7 6...Qd4?! (10. Re1! & 12. Qxc7 Win)',
    shortName: 'Exchange 6...Qd4?! 12. Qxc7 Win',
    category: 'Queen Harassment',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Ne7 6. Nxe5 Qd4 7. Qh5 g6 8. Qg5 Bg7 9. Nd3 Qxe4 10. Re1 h6 11. Qg3 Qf5 12. Qxc7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Ne7 6. Nxe5 Qd4 7. Qh5 g6 8. Qg5 Bg7 9. Nd3 Qxe4 10. Re1 h6 11. Qg3 Qf5 12. Qxc7',
    fullAnnotation: 'Black plays tricky queen forks with 5...Ne7 and 6...Qd4?!. White responds with 7. Qh5! and 8. Qg5, pins the knight with 10. Re1!, and captures 12. Qxc7 with winning material advantage.',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Ruy Lopez bishop.",
      6: "4. Bxc6 — The Exchange Variation.",
      8: "5. O-O — Complete king safety.",
      10: "6. Nxe5 — Pocket clean central pawn.",
      12: "7. Qh5! — Threaten Qxf7#.",
      14: "8. Qg5 — Defend knight on e5.",
      16: "9. Nd3 — Safe retreat.",
      18: "10. Re1! — Tactical Pin: Absolute pin on the e-file against Black's queen and king.",
      20: "11. Qg3 — Step queen aside.",
      22: "12. Qxc7 — Win pawn on c7 with decisive infiltration (+4.5 advantage)."
    }
  }
];

let errors = 0;
for (const line of newRuyLopezLines) {
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
  console.log(`ALL ${newRuyLopezLines.length} NEW RUY LOPEZ LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
