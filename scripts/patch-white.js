import fs from 'fs';

let content = fs.readFileSync('scripts/curated-white-repertoires.js', 'utf8');

// 1. Fix italian-punish-f5-counter
const oldF5 = `    id: 'italian-punish-f5-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Reckless 4...f5? Counter Refuted',
    shortName: 'Two Knights 4...f5 Refuted',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 f5 5. d3 d5 6. exd5 Nxd5 7. O-O f4 8. Ne4 Be7 9. Nbc3 Be6 10. g3 O-O 11. gxf4 exf4 12. Kh1 Qd7 13. Rg1',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 f5 5. d3 d5 6. exd5 Nxd5 7. O-O f4 8. Ne4 Be7 9. Nbc3 Be6 10. g3 O-O 11. gxf4 exf4 12. Kh1 Qd7 13. Rg1',
    fullAnnotation: 'Black tries a hyper-aggressive flank strike with 4...f5?. White solidifies with 5. d3 and rips open the g-file for a decisive attack.',
    previewFEN: 'r4rk1/pppqb1pp/2n1b3/3n4/2B1Np2/2NP4/PPP2P1P/R1BQ1RK1 b - - 3 13',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Target f7.",
      6: "4. Ng5 — Attack f7.",
      7: "Opponent Mistake: 4...f5?! weakens the king fatally along the h5-e8 and a2-g8 diagonals.",
      8: "5. d3 — Solidify e4 and guard against f4.",
      10: "6. exd5 — Central liquidation.",
      12: "7. O-O — Castle with huge lead in safety.",
      14: "8. Ne4 — Outpost knight on central square.",
      16: "9. Nbc3 — Pile up pressure on d5.",
      18: "10. g3 — Challenge Black's advanced pawn.",
      20: "11. gxf4 — Open g-file for king hunt.",
      22: "12. Kh1 — Clear g1 square for rook.",
      24: "13. Rg1 — Dominate the open g-file against Black's king (+4.0 advantage)."
    }`;

const newF5 = `    id: 'italian-punish-f5-counter',
    courseId: 'italian-game',
    subCourseId: 'italian-two-knights',
    name: 'Two Knights – Passive 4...d6 and ...Bg4 Pin Refuted',
    shortName: '4...d6 and ...Bg4 Refuted',
    category: 'Center Breakthrough',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 d6 5. c3 Bg4 6. Nbd2 Be7 7. h3 Bh5 8. Nf1 O-O 9. Ng3 Bg6 10. Nh4 d5 11. exd5 Nxd5 12. Nxg6 hxg6 13. h4',
    fullAnnotation: 'Black plays a passive ...d6 setup with an early ...Bg4 pin. White reroutes the knight via f1 to g3/h4 and launches a crushing h-file attack.',
    previewFEN: 'r2q1rk1/ppp1bpp1/2n3p1/3np3/2B4P/2PP2N1/PP3PP1/R1BQK2R b KQ - 0 13',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid foundation.",
      8: "5. c3 — Prepare center expansion.",
      10: "6. Nbd2 — Classical knight tour.",
      12: "7. h3 — Kick bishop.",
      14: "8. Nf1 — Knight heads for g3.",
      16: "9. Ng3 — Bishop harassed.",
      18: "10. Nh4! — Tactical Motif: Seize f5 and g6 squares.",
      20: "11. exd5 — Eliminate center pawn.",
      22: "12. Nxg6 — Ruin Black pawn cover.",
      24: "13. h4! — Unleash the h-file storm! (+3.5 advantage)."
    }`;

content = content.replace(oldF5, newF5);

// 2. Fix italian-punish-pianissimo-f5
const oldPianoF5 = `    id: 'italian-punish-pianissimo-f5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Italian Pianissimo – Reckless 6...f5? Dismantled',
    shortName: 'Early 6...f5 Dismantled',
    category: 'King Hunt',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. Bb3 f5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. Bb3 f5 7. exf5 Bxf5 8. d4 exd4 9. cxd4 Bb4+ 10. Nc3 Qe7+ 11. Be3 O-O-O 12. O-O Bxc3 13. bxc3',
    fullAnnotation: 'Black prematurely thrusts 6...f5? in the quiet Pianissimo. White strikes back in the center with 8. d4! opening files against Black\\'s uncastled king.',
    previewFEN: '2kr3r/ppp1q1pp/2np1n2/5b2/3P4/1BP1BN2/P4PPP/R2Q1RK1 b - - 0 13',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Target f7.",
      6: "4. d3 — Pianissimo.",
      8: "5. c3 — Prepare d4.",
      10: "6. Bb3 — Prophylactic retreat.",
      11: "Opponent Mistake: 6...f5?! severely weakens king diagonals before castling.",
      12: "7. exf5 — Open e-file lines.",
      14: "8. d4! — Tactical Motif: Center strike punishing premature flank pawn pushes.",
      16: "9. cxd4 — Control dominant center.",
      18: "10. Nc3 — Rapid minor piece development.",
      20: "11. Be3 — Neutralize check.",
      22: "12. O-O — Complete king safety.",
      24: "13. bxc3 — Solid central pawn fortress with overwhelming positional advantage."
    }`;

const newPianoF5 = `    id: 'italian-punish-pianissimo-f5',
    courseId: 'italian-game',
    subCourseId: 'italian-pianissimo',
    name: 'Pianissimo – Dubious Early 4...f5? Counter-Strike Refuted',
    shortName: 'Early 4...f5? Refuted',
    category: 'Central Collapse',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Bxg8 Rxg8 6. exf5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Bxg8 Rxg8 6. exf5 d6 7. d4 exd4 8. O-O Bxf5 9. Re1+ Kf8 10. Nxd4 Nxd4 11. Qxd4 Qf6 12. Qd5 c6 13. Qb3',
    fullAnnotation: 'Black tries to break the quiet Pianissimo with premature 4...f5?. White eliminates the knight with 5. Bxg8! and tears open the e-file.',
    previewFEN: 'r4kr1/pp4pp/2pp1q2/2bQ1b2/8/1Q6/PPP2PPP/RNB1R1K1 b - - 1 13',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bc4 — Italian Bishop.",
      6: "4. d3 — Solid move.",
      8: "5. Bxg8! — Tactical Motif: Eliminate key defender of f5.",
      10: "6. exf5 — Pocket extra pawn.",
      12: "7. d4! — Blast center open.",
      14: "8. O-O — Castle with huge lead in development.",
      16: "9. Re1+ — Pin and drive Black king to f8.",
      18: "10. Nxd4 — Central capture.",
      20: "11. Qxd4 — Central queen dominance.",
      22: "12. Qd5 — Threaten mate on f7.",
      24: "13. Qb3 — Dominating attack (+4.0 advantage)."
    }`;

content = content.replace(oldPianoF5, newPianoF5);

// 3. Fix london-punish-qid-ne4
const oldQid = `    id: 'london-punish-qid-ne4',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London vs QID – Dubious 7...Ne4? Punished (11. Qb3!)',
    shortName: 'QID 7...Ne4? Punished',
    category: 'Development Punishment',
    eco: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Bd3 Be7 6. Nbd2 O-O 7. c3 Ne4 8. Nxe4 Bxe4 9. Bxe4 dxe4 10. Nd2 f5 11. Qb3 Qd7 12. g4 Kh8 13. gxf5 exf5 14. O-O-O',
    pgn: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Bd3 Be7 6. Nbd2 O-O 7. c3 Ne4 8. Nxe4 Bxe4 9. Bxe4 dxe4 10. Nd2 f5 11. Qb3 Qd7 12. g4 Kh8 13. gxf5 exf5 14. O-O-O',
    fullAnnotation: 'Black prematurely leaps into e4 with 7...Ne4?. White eliminates the knight, wins the e4 pawn, and targets the weak e6 pawn with 11. Qb3! with a crushing advantage.',
    previewFEN: 'rn3r1k/p1pqb1pp/1p6/5p2/3PpP2/1QP1P3/PP1N1P1P/2KR3R b - - 1 14',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London Bishop.",
      4: "3. e3 — Solid center.",
      6: "4. Nf3 — Rapid deployment.",
      8: "5. Bd3 — Dominant diagonal.",
      10: "6. Nbd2 — Prepare center.",
      12: "7. c3 — Granite base.",
      13: "Opponent Mistake: 7...Ne4? misplaces the knight into an unfavorable trade.",
      14: "8. Nxe4 — Eliminate knight.",
      16: "9. Bxe4 — Win the bishop pair.",
      18: "10. Nd2 — Double attack on e4 pawn.",
      20: "11. Qb3! — Tactical Motif: Double attack (fork) on e6 and b7.",
      22: "12. g4! — Blow open Black's f5 defense.",
      24: "13. gxf5 — Open lines toward king.",
      26: "14. O-O-O — Overwhelming central dominance (+4.0 advantage)."
    }`;

const newQid = `    id: 'london-punish-qid-ne4',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London System – QID Premature 7...Ne4? Leap Punished',
    shortName: 'QID 7...Ne4? Punished',
    category: 'Queen Harassment',
    eco: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. c3 Be7 6. Nbd2 O-O 7. Bd3 Ne4',
    pgn: '1. d4 Nf6 2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. c3 Be7 6. Nbd2 O-O 7. Bd3 Ne4 8. Nxe4 Bxe4 9. Nd2 Bb7 10. e4 d6 11. Bb5 c6 12. Bd3 Nd7 13. Qg4',
    fullAnnotation: 'Black leaps prematurely with 7...Ne4 in the Queen\\'s Indian. White trades, gains tempo on the bishop, and launches a crushing Qg4 assault.',
    previewFEN: 'r2q1rk1/pb1nbppp/1p1pp3/8/3PPBQ1/2PB4/PP1N1PPP/R3K2R b KQ - 3 13',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London Bishop.",
      4: "3. e3 — Granite wall.",
      6: "4. Nf3 — Develop knight.",
      8: "5. c3 — Solidify d4.",
      10: "6. Nbd2 — Reroute option.",
      12: "7. Bd3 — Aim at h7.",
      13: "Opponent Mistake: 7...Ne4?! leaps into center without support.",
      14: "8. Nxe4! — Eliminate premature knight.",
      16: "9. Nd2 — Kick bishop with tempo.",
      18: "10. e4 — Occupy center.",
      20: "11. Bb5 — Force c6 weakening.",
      22: "12. Bd3 — Retreat safely.",
      24: "13. Qg4! — Triple threat on g7 and h6 (+3.5 advantage)."
    }`;

content = content.replace(oldQid, newQid);

// 4. Fix london-punish-benoni-early-qxb2
const oldBenoni = `    id: 'london-punish-benoni-early-qxb2',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London vs Benoni – Greedy 4...Qb6 5. Nc3 Qxb2? Trapped',
    shortName: 'Benoni 4...Qxb2 Trapped',
    category: 'Tactical Refutation',
    eco: '1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4 d6 13. d5 Bd7 14. Bxc4',
    pgn: '1. d4 Nf6 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4 d6 13. d5 Bd7 14. Bxc4',
    fullAnnotation: 'Black greedily captures the poisoned b2 pawn with 4...Qxb2?. White traps the queen with 5. Nb5! and 6. a3!, winning decisive material and ruining Black\\'s development.',
    previewFEN: 'r3kb1r/pp1bpppp/n2p1n2/3P4/2B1PB2/2N5/1R3PPP/4K1NR b Kkq - 0 14',
    annotations: {
      0: "1. d4 — Queen's pawn.",
      2: "2. Bf4 — London Bishop.",
      4: "3. e3 — Solid center.",
      5: "Opponent Mistake: 3...Qb6 4. Nc3 Qxb2? grabs the poisoned pawn.",
      6: "4. Nc3! — Set up the deadly queen trap.",
      8: "5. Nb5! — Threaten c7 fork while surrounding the queen.",
      10: "6. a3! — Tactical Motif: Cut off all escape squares for Black's queen.",
      12: "7. Rc1 — Guard c2.",
      14: "8. Rb1 — Trap Black's queen, forcing its exchange.",
      16: "9. Qxc2 — Liquidate queen for minor pieces.",
      18: "10. Rb2 — Regain tempo.",
      20: "11. Nc3 — Consolidate.",
      22: "12. e4 — Classical center blast.",
      24: "13. d5 — Drive bishop back.",
      26: "14. Bxc4 — White has completely won (+5.0 advantage)."
    }`;

const newBenoni = `    id: 'london-benoni-e6-push',
    courseId: 'london-system',
    subCourseId: 'london-queens-indian-benoni',
    name: 'London System – Modern Benoni Center Sacrifice Refutation',
    shortName: 'Modern Benoni Refutation',
    category: 'Tactical Refutation',
    eco: '1. d4 c5 2. d5 e6 3. Nc3 exd5 4. Nxd5 d6 5. e4 Nf6 6. Nf3 Be7 7. Bc4 O-O 8. O-O',
    pgn: '1. d4 c5 2. d5 e6 3. Nc3 exd5 4. Nxd5 d6 5. e4 Nf6 6. Nf3 Be7 7. Bc4 O-O 8. O-O Nxe4 9. Re1 Bf5 10. Bd3 Nxf2 11. Kxf2 Bxd3 12. Qxd3 Nc6 13. Bf4',
    fullAnnotation: 'When Black greedily grabs the e4 pawn with 8...Nxe4 in Benoni territory, White unleashes 9. Re1 and 10. Bd3!, winning a piece for Black’s knight and consolidating total dominance.',
    previewFEN: 'r2q1rk1/pp2bppp/2np4/3N4/5B2/3Q1N2/PPP2KPP/R3R3 b - - 2 13',
    annotations: {
      0: "1. d4 — Queen's pawn opening.",
      2: "2. d5 — Seize spatial dominance.",
      4: "3. Nc3 — Rapid knight development.",
      6: "4. Nxd5 — Centralized knight.",
      8: "5. e4 — Erect the full classical center.",
      10: "6. Nf3 — King's knight develops.",
      12: "7. Bc4 — Aiming at f7.",
      14: "8. O-O — Complete king safety.",
      15: "Opponent Mistake: 8...Nxe4? grabs central pawn overlooking the e-file pin.",
      16: "9. Re1! — Tactical Motif: Absolute pin of the greedy e4 knight down open e-file.",
      18: "10. Bd3 — Overload Black's defense of e4.",
      20: "11. Kxf2 — King actively recaptures.",
      22: "12. Qxd3 — Recapture with winning material superiority.",
      24: "13. Bf4 — Target the backward d6 pawn with total positional mastery! (+4.5 advantage)."
    }`;

content = content.replace(oldBenoni, newBenoni);

// 5. Fix london-punish-steinitz-qxb2
const oldSteinitz = `    id: 'london-punish-steinitz-qxb2',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London Steinitz – Greedy 7...Qxb2? Refuted (13. Qd4!)',
    shortName: 'Steinitz 7...Qxb2 Refuted',
    category: 'Tactical Refutation',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nb5 Na6 6. a4 Bd7 7. a5 Qd8 8. Nf3 Nf6 9. Nd6+ Bxd6 10. Bxd6 Ne4 11. dxc5 Naxc5 12. Bxc5 Nxc5 13. Qd4 Rc8 14. Qxg7',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nb5 Na6 6. a5 Qd8 7. Nf3 Nf6 8. Nd6+ Bxd6 9. Bxd6 Ne4 10. dxc5 Naxc5 11. Bxc5 Nxc5 12. Qd4 Rc8 13. Qxg7',`;

const newSteinitz = `    id: 'london-punish-steinitz-qxb2',
    courseId: 'london-system',
    subCourseId: 'london-sharp-jobava-steinitz',
    name: 'London Steinitz – Greedy 7...Qxb2? Refuted (13. Qd4!)',
    shortName: 'Steinitz 7...Qxb2 Refuted',
    category: 'Tactical Refutation',
    eco: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nb5 Na6 6. a4 Bd7 7. a5 Qd8 8. Nf3 Nf6 9. Nd6+ Bxd6 10. Bxd6 Ne4 11. dxc5 Naxc5 12. Bxc5 Nxc5 13. Qd4 Rc8 14. Qxg7',
    pgn: '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 e6 5. Nb5 Na6 6. a4 Bd7 7. a5 Qd8 8. Nf3 Nf6 9. Nd6+ Bxd6 10. Bxd6 Ne4 11. dxc5 Naxc5 12. Bxc5 Nxc5 13. Qd4 Rc8 14. Qxg7',`;

content = content.replace(oldSteinitz, newSteinitz);

// 6. Fix ruy-lopez-punish-marshall-qh3-refutation
const oldMarshall = `    id: 'ruy-lopez-punish-marshall-qh3-refutation',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall-anti',
    name: 'Ruy Lopez – Marshall 15...Nxf2? Sacrifice Refuted',
    shortName: 'Marshall 15...Nxf2 Refuted',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Nxf2 16. Bxf2 Bg4 17. Qd3 Rae8 18. Nd2',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Nxf2 16. Bxf2 Bg4 17. Qd3 Rae8 18. Nd2',
    fullAnnotation: 'Black tries a desperate piece sacrifice with 15...Nxf2? in the Marshall Attack. White takes the knight with 16. Bxf2! and calmly consolidates a full extra piece.',
    previewFEN: '4rrk1/5ppp/p1pb4/1p6/3P2b1/1BPQ2P1/PP1N1B1P/R3R1K1 b - - 1 18',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Spanish Bishop.",
      6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.",
      10: "6. Re1 — Seize e-file.",
      12: "7. Bb3 — Prophylaxis.",
      14: "8. c3 — Prepare d4.",
      16: "9. exd5 — Central liquidation.",
      18: "10. Nxe5 — Capture e5 pawn.",
      20: "11. Rxe5 — Retain material.",
      22: "12. d4 — Center support.",
      24: "13. Re1 — Retreat safely.",
      26: "14. g3 — Trap queen.",
      28: "15. Be3 — Consolidate.",
      29: "Opponent Blunder: 15...Nxf2? blunders a piece in desperation.",
      30: "16. Bxf2! — Capture the piece cleanly.",
      32: "17. Qd3 — Unpin queen.",
      34: "18. Nd2 — White is a full piece up with total victory (+5.0 advantage)."
    }`;

const newMarshall = `    id: 'ruy-lopez-punish-marshall-qh3-refutation',
    courseId: 'ruy-lopez',
    subCourseId: 'ruy-lopez-marshall-anti',
    name: 'Ruy Lopez – Marshall 15...Nxf2? Sacrifice Refuted',
    shortName: 'Marshall 15...Nxf2 Refuted',
    category: 'Tactical Refutation',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1 Ng4 14. h3 Qh4 15. Qf3 Nxf2 16. Re2 Nxh3+ 17. gxh3 Bxh3 18. Re4 Rae8 19. Bxf7+ Kh8 20. Rxe8 Rxe8 21. Bxe8',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1 Ng4 14. h3 Qh4 15. Qf3 Nxf2 16. Re2 Nxh3+ 17. gxh3 Bxh3 18. Re4 Rae8 19. Bxf7+ Kh8 20. Rxe8 Rxe8 21. Bxe8',
    fullAnnotation: 'Black tries a desperate tactical sacrifice with 15...Nxf2? in the Marshall Attack. White counter-attacks accurately with 18. Re4! and 19. Bxf7+!, winning decisive rook and piece material.',
    previewFEN: '4B2k/2p2ppp/p2b4/1p6/3PR2q/2P2Q1b/PP3P2/RNB3K1 b - - 0 21',
    annotations: {
      0: "1. e4 — King's pawn.",
      2: "2. Nf3 — Attack e5.",
      4: "3. Bb5 — Spanish Bishop.",
      6: "4. Ba4 — Retreat.",
      8: "5. O-O — Castle.",
      10: "6. Re1 — Seize e-file.",
      12: "7. Bb3 — Prophylaxis.",
      14: "8. c3 — Prepare d4.",
      16: "9. exd5 — Central liquidation.",
      18: "10. Nxe5 — Capture e5 pawn.",
      20: "11. Rxe5 — Retain material.",
      22: "12. d4 — Center support.",
      24: "13. Re1 — Retreat safely.",
      26: "14. h3 — Question knight.",
      28: "15. Qf3 — Challenge queen.",
      29: "Opponent Blunder: 15...Nxf2? blunders into White's counter-tactics.",
      30: "16. Re2 — Defend and pin.",
      32: "17. gxh3 — Win knight.",
      34: "18. Re4! — Tactical Motif: Skewer/deflection hitting queen.",
      36: "19. Bxf7+! — Tactical Motif: Decisive in-between check.",
      38: "20. Rxe8 — Trade rooks with decisive check.",
      40: "21. Bxe8 — White is a full rook and piece up (+8.0 win)."
    }`;

content = content.replace(oldMarshall, newMarshall);

fs.writeFileSync('scripts/curated-white-repertoires.js', content, 'utf8');
console.log('Patch complete!');
