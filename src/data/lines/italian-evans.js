/* ============================================================
   THE EVANS GAMBIT REPERTOIRE (25 MASTER LINES)
   ============================================================ */

export const evansGambitLines = [
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop active on c4.",
      6: "4. b4! — The Evans Gambit wing sacrifice.", 8: "5. c3 — Gain tempo on the bishop.", 10: "6. d4 — Center blast.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Battery on f7/b7.", 16: "9. e5 — Thrust e-pawn forward.",
      18: "10. Nxc3 — Rapid development lead.", 20: "11. Ba3 — Dominate a3-f8 diagonal.", 22: "12. Rad1 — Centralize rook.",
      24: "13. Bd3 — Retreat bishop attacking queen!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Aiming at f7.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Prepare d4.", 10: "6. d4 — Center clash.",
      12: "7. Qb3 — Pressure on f7.", 14: "8. dxe5 — Open central files.", 16: "9. Nbd2 — Develop knight.",
      18: "10. Qc2 — Safeguard queen.", 20: "11. Nxc4 — Recapture knight.", 22: "12. Nxb6 — Eliminate dark-squared bishop.",
      24: "13. O-O — Complete development with pawn mobility!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — The Evans Gambit.", 8: "5. c3 — Kick bishop.", 10: "6. d4 — Center strike.",
      12: "7. Be2 — Preserve bishop pair.", 14: "8. Qxd4 — Centralize queen.", 16: "9. e5 — Attack f6 knight.",
      18: "10. Qa4 — Pin knight on c6.", 20: "11. Qg4 — Kingside dark-square attack.", 22: "12. Qe4 — Central dominance!"
    }
  },
  {
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
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — The Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle into safety.", 14: "8. cxd4 — Establish pawn duo.", 16: "9. Nc3 — Knight development.",
      18: "10. Bb5 — Pin knight.", 20: "11. e5! — Central breakthrough!"
    }
  },
  {
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
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Offer wing pawn.", 8: "5. a4 — Advance a-pawn to trap bishop.", 10: "6. Nc3 — Knight development.",
      12: "7. Nd5 — Knight outpost.", 14: "8. exd5 — Open e-file.", 16: "9. a5 — Push bishop to a7.",
      18: "10. d6 — Pawn wedge disrupting structure.", 20: "11. Nxd4 — Trade knights.", 22: "12. c3 — Kick bishop!"
    }
  },
  {
    id: 'evans-declined-d5-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Declined 4...d5 Counter-Gambit',
    shortName: 'Declined 4...d5',
    category: 'Counter Gambit',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5 5. exd5 Nxb4 6. O-O Nf6 7. Nxe5 O-O 8. d4 Be7 9. c4 c6 10. dxc6 Nxc6 11. Nxc6 bxc6',
    fullAnnotation: 'Black counters directly with 4...d5. White wins the center pawn with 5. exd5 and builds an unshakeable central pawn chain.',
    previewFEN: 'r1bq1rk1/p3bppp/2p2n2/8/2PP4/8/P4PPP/RNBQ1RK1 w - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. exd5 — Capture central pawn.", 10: "6. O-O — Castle into safety.",
      12: "7. Nxe5 — Regain material.", 14: "8. d4 — Center pawn support.", 16: "9. c4 — Solidify queenside majority.",
      18: "10. dxc6 — Open lines.", 20: "11. Nxc6 — Clean pawn structure advantage!"
    }
  },
  {
    id: 'evans-richardson-attack',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Richardson Attack',
    shortName: 'Richardson Attack',
    category: 'Tactical Master',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Nd5 Nxd5 13. Bxf8 Nf4 14. Nh4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Nd5 Nxd5 13. Bxf8 Nf4 14. Nh4',
    fullAnnotation: 'The sharp Richardson Attack. White wins the f8 rook and defends against Black\'s mate threat with 14. Nh4!',
    previewFEN: 'r1b2Bk1/pppp1ppp/2n3q1/4P3/2B2n1N/1Q6/P4PPP/R4RK1 b - - 1 14',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — The Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center strike.",
      12: "7. O-O — Castle safely.", 14: "8. Qb3 — Queen battery.", 16: "9. e5 — Thrust e-pawn.",
      18: "10. Nxc3 — Knight development.", 20: "11. Ba3 — Control diagonal.", 22: "12. Nd5 — Central knight assault.",
      24: "13. Bxf8 — Win exchange.", 26: "14. Nh4! — Defend g2 mate threat while attacking queen!"
    }
  },
  {
    id: 'evans-goering-attack',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Göring Attack (13. Rfe1)',
    shortName: 'Göring Attack',
    category: 'Positional Gambit',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Rad1 Re8 13. Rfe1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Rad1 Re8 13. Rfe1',
    fullAnnotation: 'Göring\'s setup with 12. Rad1 and 13. Rfe1 completely paralyzes Black\'s position and dominates all central avenues.',
    previewFEN: 'r1b1r1k1/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/3RR1K1 b - - 7 13',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Prepare d4.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Double battery.", 16: "9. e5 — Advance pawn.",
      18: "10. Nxc3 — Regain development.", 20: "11. Ba3 — Control diagonal.", 22: "12. Rad1 — Dominate d-file.",
      24: "13. Rfe1 — Total piece harmony and central clamp!"
    }
  },
  {
    id: 'evans-waller-attack',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Waller Attack (11...Bxc3)',
    shortName: 'Waller Attack',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 Bxc3 12. Qxc3 O-O 13. Rad1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 Bxc3 12. Qxc3 O-O 13. Rad1',
    fullAnnotation: 'Black trades on c3. White recaptures with the queen and exerts unstoppable diagonal and d-file pressure.',
    previewFEN: 'r1b2rk1/ppppnppp/2n3q1/4P3/2B5/B1Q2N2/P4PPP/3R1RK1 b - - 3 13',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle safely.", 14: "8. Qb3 — Queen battery.", 16: "9. e5 — Thrust e-pawn.",
      18: "10. Nxc3 — Knight develops.", 20: "11. Ba3 — Restrict Black.", 22: "12. Qxc3 — Queen centralizes.",
      24: "13. Rad1 — Maximum rook power on the d-file!"
    }
  },
  {
    id: 'evans-paulsen-defense',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Paulsen Defense (6...exd4)',
    shortName: 'Paulsen Defense',
    category: 'Classic Defense',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d6 8. Qb3 Qd7 9. cxd4 Bb6 10. Bb5 a6 11. Ba4 Kd8 12. d5',
    fullAnnotation: 'Paulsen\'s defense is met by 8. Qb3 and 10. Bb5 pinning the c6 knight to win decisive material with 12. d5.',
    previewFEN: 'r1bk2nr/1ppq1ppp/pbn5/1B1P4/B7/1Q3N2/P4PPP/RNB2RK1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center strike.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Pressure f7.", 16: "9. cxd4 — Reclaim center duo.",
      18: "10. Bb5 — Pin knight to king.", 20: "11. Ba4 — Maintain pin.", 22: "12. d5 — Decisive pawn fork winning piece!"
    }
  },
  {
    id: 'evans-sanders-alapin',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Sanders-Alapin Defense (7...Bd7)',
    shortName: 'Sanders-Alapin Line',
    category: 'Black Sideline',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Bd7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Bd7 8. Qb3 Qe7 9. cxd4 Bb6 10. Ba3 Qf6 11. e5',
    fullAnnotation: 'Black tries 7...Bd7. White pushes through with 10. Ba3 and 11. e5, blowing open Black\'s defensive lines.',
    previewFEN: 'r3k1nr/pppb1ppp/1bn2q2/4P3/3P4/B4N2/P4PPP/RN3RK1 b kq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Kick bishop.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Double battery.", 16: "9. cxd4 — Center recapture.",
      18: "10. Ba3 — Control diagonal.", 20: "11. e5! — Tearing open Black's defense!"
    }
  },
  {
    id: 'evans-normal-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Normal Variation (6...Nf6)',
    shortName: 'Normal Variation',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6 7. d4 O-O 8. dxe5 Nxe4 9. Bd5 Nxc3 10. Nxc3 Bxc3 11. Bg5 Qe8 12. Rc1',
    fullAnnotation: 'The classical Normal Variation. White sacrifices material for immense tactical pins on e8 and the open c-file.',
    previewFEN: 'r1b1qrk1/pppp1ppp/2n5/3BP1B1/8/2b2N2/P4PPP/2RQ1RK1 b - - 1 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — The Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. O-O — Castle into safety.",
      12: "7. d4 — Central strike.", 14: "8. dxe5 — Open center.", 16: "9. Bd5 — Central bishop dominance.",
      18: "10. Nxc3 — Knight recapture.", 20: "11. Bg5 — Pin the black queen.", 22: "12. Rc1 — Complete rook activation!"
    }
  },
  {
    id: 'evans-qa4-pin-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – 7. Qa4 Pin Line',
    shortName: '7. Qa4 Pin Line',
    category: 'Positional Trap',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qa4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qa4 exd4 8. Nxd4 Bd7 9. Nxc6 Bxc3+ 10. Nxc3 Bxc6 11. Qb3',
    fullAnnotation: 'White plays 7. Qa4 threatening d5 to trap the a5 bishop, forcing Black into defensive concessions.',
    previewFEN: 'r2qk1nr/ppp2ppp/2bp4/2b5/2B5/1QN5/P4PPP/R1B1K2R b KQkq - 1 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. Qa4 — Pin threatening d5!", 14: "8. Nxd4 — Knight development.", 16: "9. Nxc6 — Capture knight.",
      18: "10. Nxc3 — Recapture piece.", 20: "11. Qb3 — Devastating battery on f7!"
    }
  },
  {
    id: 'evans-lasker-bb6-solid',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Lasker 7...Bb6 Variation',
    shortName: 'Lasker 7...Bb6',
    category: 'Positional Gambit',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. O-O Bb6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. O-O Bb6 8. dxe5 dxe5 9. Qb3 Qf6 10. Bg5 Qg6 11. Nbd2 Nf6 12. Bd5',
    fullAnnotation: 'Black places the bishop on b6. White creates relentless pressure with 9. Qb3, 10. Bg5, and 12. Bd5.',
    previewFEN: 'r1b1k2r/ppp2ppp/1bn2nq1/3BP1B1/4P3/1QP2N2/P2N1PPP/R4RK1 b kq - 4 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Prepare d4.", 10: "6. d4 — Center strike.",
      12: "7. O-O — Castle into safety.", 14: "8. dxe5 — Open center.", 16: "9. Qb3 — Queen battery.",
      18: "10. Bg5 — Pin queen/knight.", 20: "11. Nbd2 — Develop knight.", 22: "12. Bd5 — Dominating bishop outpost!"
    }
  },
  {
    id: 'evans-lasker-bg4-pin',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Lasker 7...Bg4 Counter',
    shortName: 'Lasker 7...Bg4',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. O-O Bg4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. O-O Bg4 8. Qb3 Bxf3 9. Bxf7+ Kf8 10. Bxg8 Rxg8 11. gxf3 Bb6 12. d5',
    fullAnnotation: 'Black counter-pins with 7...Bg4. White strikes with 8. Qb3 Bxf3 9. Bxf7+! breaking Black\'s king.',
    previewFEN: 'r2q1kr1/ppp3pp/1bnp4/3PP3/8/1QP2P2/P4P1P/RNB2RK1 b - - 0 12',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle safely.", 14: "8. Qb3 — Queen battery.", 16: "9. Bxf7+! — Decisive check destroying castling.",
      18: "10. Bxg8 — Capture attacker.", 20: "11. gxf3 — Shatter structure.", 22: "12. d5 — Seize central space!"
    }
  },
  {
    id: 'evans-be7-na5-variation',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – 5...Be7 6...d6 Line',
    shortName: '5...Be7 6...d6',
    category: 'Solid Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 d6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 d6 7. Qb3 Na5 8. Bxf7+ Kf8 9. Qa4 Kxf7 10. Qxa5 exd4 11. cxd4',
    fullAnnotation: 'White punishes Black\'s passivity with 7. Qb3 and 8. Bxf7+!, winning back the material with dynamic initiative.',
    previewFEN: 'r1bq1bnr/ppp1pkpp/3p4/Q7/3PP3/5N2/P4PPP/RNB1K2R b KQ - 0 11',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Kick bishop.", 10: "6. d4 — Center clash.",
      12: "7. Qb3 — Pressure on f7.", 14: "8. Bxf7+! — Force king into open.", 16: "9. Qa4 — Queen fork.",
      18: "10. Qxa5 — Regain piece.", 20: "11. cxd4 — Establish commanding center!"
    }
  },
  {
    id: 'evans-be7-nf6-line',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – 5...Be7 6...Nf6 Line',
    shortName: '5...Be7 6...Nf6',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 Nf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 Nf6 7. dxe5 Ng4 8. Qd5 O-O 9. h3 Nh6 10. Bxh6 gxh6 11. Nbd2',
    fullAnnotation: 'Black counter-attacks on e4. White plays 8. Qd5 with an unstoppable f7 threat and shatters Black\'s kingside pawns.',
    previewFEN: 'r1bq1rk1/ppppb2p/2n4p/3QP3/2B1P3/2P2N1P/P2N1PP1/R3K2R b KQ - 1 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center strike.",
      12: "7. dxe5 — Open center.", 14: "8. Qd5 — Threaten mate on f7!", 16: "9. h3 — Trap the g4 knight.",
      18: "10. Bxh6 — Shatter kingside pawn shield.", 20: "11. Nbd2 — Complete development with total dominance!"
    }
  },
  {
    id: 'evans-bc5-nf6-line',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – 5...Bc5 7...Nf6 Line',
    shortName: '5...Bc5 7...Nf6',
    category: 'Tactical Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O Nf6',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O Nf6 8. cxd4 Bb6 9. e5 d5 10. exf6 dxc4 11. Re1+ Be6 12. d5',
    fullAnnotation: 'White bursts through the center with 9. e5 and 12. d5, winning Black\'s pinned pieces.',
    previewFEN: 'r2qk2r/ppp2ppp/1bn1bP2/3P4/2p5/5N2/P4PPP/RNBQR1K1 b kq - 0 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle safely.", 14: "8. cxd4 — Secure center.", 16: "9. e5 — Advance pawn.",
      18: "10. exf6 — Capture knight.", 20: "11. Re1+ — Interpose check.", 22: "12. d5 — Central pawn fork winning piece!"
    }
  },
  {
    id: 'evans-bc5-bb4-check',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – 5...Bc5 7...Bb4+ Check',
    shortName: '5...Bc5 7...Bb4+',
    category: 'Positional Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. cxd4 Bb4+',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. cxd4 Bb4+ 8. Bd2 Bxd2+ 9. Nbxd2 d6 10. Qb3 Nh6 11. O-O O-O 12. Qc3',
    fullAnnotation: 'White trades dark bishops and builds a commanding center with Qb3 and Qc3.',
    previewFEN: 'r1bq1rk1/ppp2ppp/2np3n/8/2BPP3/2Q2N2/P2N1PPP/R4RK1 b - - 2 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Prepare d4.", 10: "6. d4 — Center clash.",
      12: "7. cxd4 — Center recapture.", 14: "8. Bd2 — Interpose check.", 16: "9. Nbxd2 — Knight develops.",
      18: "10. Qb3 — Pressure f7.", 20: "11. O-O — Castle into safety.", 22: "12. Qc3 — Solid central queen placement!"
    }
  },
  {
    id: 'evans-declined-5-b5-line',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Declined 5. b5 Push',
    shortName: 'Declined 5. b5',
    category: 'Space Advantage',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Nd4 6. Nxd4 Bxd4 7. c3 Bb6 8. d4 exd4 9. cxd4 d6 10. O-O Nf6 11. Nc3 O-O 12. Bg5',
    fullAnnotation: 'White drives the knight with 5. b5 and pins the f6 defender with 12. Bg5.',
    previewFEN: 'r1bq1rk1/ppp2ppp/1b1p1n2/1P4B1/2BPP3/2N5/P4PPP/R2Q1RK1 b - - 2 12',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. b5 — Kick the c6 knight.", 10: "6. Nxd4 — Trade knights.",
      12: "7. c3 — Kick bishop.", 14: "8. d4 — Strike in the center.", 16: "9. cxd4 — Reclaim center duo.",
      18: "10. O-O — Castle into safety.", 20: "11. Nc3 — Knight development.", 22: "12. Bg5 — Lethal pin on f6 knight!"
    }
  },
  {
    id: 'evans-declined-5-bb2-line',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Declined 5. Bb2 Fianchetto',
    shortName: 'Declined 5. Bb2',
    category: 'Positional Fianchetto',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. Bb2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. Bb2 d6 6. b5 Nd4 7. Nxd4 exd4 8. O-O Nf6 9. d3 O-O 10. Nd2 c6 11. bxc6 bxc6 12. h3',
    fullAnnotation: 'White fianchettoes on b2, placing immense diagonal pressure against Black\'s e5 and d4 pawns.',
    previewFEN: 'r1bq1rk1/p4ppp/1bpp1n2/8/2BpP3/3P3P/PBPN1PP1/R2Q1RK1 b - - 0 12',
    annotations: {
      0: "1. e4 — Classical pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Wing gambit.", 8: "5. Bb2 — Fianchetto bishop pressure.", 10: "6. b5 — Kick knight.",
      12: "7. Nxd4 — Central capture.", 14: "8. O-O — Castle into safety.", 16: "9. d3 — Solid pawn chain.",
      18: "10. Nd2 — Knight develops.", 20: "11. bxc6 — Open b-file.", 22: "12. h3 — Solid prophylaxis!"
    }
  },
  {
    id: 'evans-declined-5-c3-line',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Declined 5. c3 Classical Setup',
    shortName: 'Declined 5. c3',
    category: 'Solid Setup',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. c3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. c3 Nf6 6. d3 d6 7. a4 a6 8. O-O O-O 9. Nbd2 Be6 10. Bb3 d5 11. Qe2',
    fullAnnotation: 'White transitions into a flexible d3/c3 Italian structure with superior queenside expansion.',
    previewFEN: 'r2q1rk1/1pp2ppp/pbn1bn2/3pp3/PP2P3/1BPP1N2/3NQPPP/R1B2RK1 b - - 1 11',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Prepare center support.", 10: "6. d3 — Solid center.",
      12: "7. a4 — Queenside expansion.", 14: "8. O-O — Castle safely.", 16: "9. Nbd2 — Knight maneuvering.",
      18: "10. Bb3 — Bishop retreat.", 20: "11. Qe2 — Central coordination!"
    }
  },
  {
    id: 'evans-declined-5-a5-flank',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Declined 5...a5 Counter-Flank',
    shortName: 'Declined 5...a5',
    category: 'Sharp Flank',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a5 6. b5 Nd4 7. Nxd4 Bxd4 8. c3 Bb6 9. d4 exd4 10. cxd4 d6 11. O-O',
    fullAnnotation: 'Black counters on the a-file. White secures the ideal pawn center with 8. c3 and 9. d4.',
    previewFEN: 'r1bqk1nr/1pp2ppp/1b1p4/pP6/P2PP3/8/5PPP/RNBQ1RK1 b kq - 0 11',
    annotations: {
      0: "1. e4 — King's pawn.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. a4 — Aggressive a-pawn.", 10: "6. b5 — Kick knight.",
      12: "7. Nxd4 — Trade knights.", 14: "8. c3 — Kick bishop.", 16: "9. d4 — Strike in the center.",
      18: "10. cxd4 — Reclaim center duo.", 20: "11. O-O — Complete king safety!"
    }
  },
  {
    id: 'evans-compromised-qh5',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Compromised 9...Qh5 Line',
    shortName: 'Compromised 9...Qh5',
    category: 'Sharp Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qh5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qh5 10. Nxc3 Nge7 11. Ba3 O-O 12. Nd5 Nxd5 13. Bxf8 Nf4 14. Ba3',
    fullAnnotation: 'Black queen moves to h5. White seizes the f8 rook with 13. Bxf8 and retreats safely with 14. Ba3.',
    previewFEN: 'r1b2k2/pppp1ppp/2n5/b3P2q/2B2n2/BQ3N2/P4PPP/R4RK1 b - - 1 14',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Target f7.",
      6: "4. b4 — Evans Gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Queen battery.", 16: "9. e5 — Thrust e-pawn.",
      18: "10. Nxc3 — Knight develops.", 20: "11. Ba3 — Control diagonal.", 22: "12. Nd5 — Knight attack.",
      24: "13. Bxf8 — Win rook exchange.", 26: "14. Ba3 — Bishop retreats maintaining positional dominance!"
    }
  },
  {
    id: 'evans-compromised-10-b5',
    courseId: 'italian-game',
    subCourseId: 'italian-evans-gambit',
    name: 'Evans Gambit – Compromised 10...b5 Counter',
    shortName: 'Compromised 10...b5',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 b5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 b5 11. Nxb5 Rb8 12. Qa4 a6 13. Nbd4',
    fullAnnotation: 'Black counter-sacrifices with 10...b5. White wins the b5 pawn with 11. Nxb5 and coordinates with 13. Nbd4.',
    previewFEN: '1rb1k1nr/2pp1ppp/p1n3q1/b3P3/Q2N4/2p2N2/P4PPP/R1B2RK1 b k - 1 13',
    annotations: {
      0: "1. e4 — King's pawn opening.", 2: "2. Nf3 — Attack e5.", 4: "3. Bc4 — Italian Bishop.",
      6: "4. b4 — Wing gambit.", 8: "5. c3 — Gain tempo.", 10: "6. d4 — Center clash.",
      12: "7. O-O — Castle into safety.", 14: "8. Qb3 — Battery on f7.", 16: "9. e5 — Advance pawn.",
      18: "10. Nxc3 — Knight development.", 20: "11. Nxb5 — Capture b5 pawn with tempo.", 22: "12. Qa4 — Queen pin on a-file.",
      24: "13. Nbd4 — Decisive knight centralization!"
    }
  }
];

export const evansGambitLine = evansGambitLines[0];
export const evansLaskerLine = evansGambitLines[1];
export const evansBe7Line = evansGambitLines[2];
export const evansBc5Line = evansGambitLines[3];
export const evansDeclinedLine = evansGambitLines[4];
