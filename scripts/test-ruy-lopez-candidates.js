import { Chess } from 'chess.js';

const lines = [
  // Berlin
  ['ruy-lopez-punish-berlin-greedy-nc6', '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Be6 10. Rd1+ Ke8 11. Ng5 Bc4 12. b3 Ba6 13. e6 fxe6 14. Nxe6 Bd6 15. Re1 Kd7 16. Bb2 Rae8 17. Ng5'],
  ['ruy-lopez-punish-berlin-early-d6', '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bxc6 Bxc6 8. Qd3 exd4 9. Nxd4 Bd7 10. Bg5 O-O 11. Rae1 Re8 12. f4 h6 13. Bh4 Nh5 14. Bxe7 Qxe7 15. Nd5 Qd8 16. Qf3 Nf6 17. c4'],
  ['ruy-lopez-punish-berlin-fishing-pole', '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5 h6 8. Bh4 d6 9. Qd3 Bg4 10. Nbd2 Qe7 11. Rfe1 Rad8 12. h3 Bh5 13. Bxc6 bxc6 14. Nc4 Bxf3 15. Qxf3 g5 16. Bg3 exd4 17. e5'],
  // Closed
  ['ruy-lopez-punish-closed-noahs-ark-reversed', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Bd7 14. Nf1 Rac8 15. Ne3 Rfe8 16. Bd2 Nc4 17. Nxc4 Qxc4 18. Bb3 Qc7 19. Ng5 Rf8 20. Rc1 Qb8 21. Rxc8 Qxc8 22. Bb4'],
  ['ruy-lopez-punish-closed-chigorin-mistake', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nd7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 Nb4 17. Bb1 Bb7 18. a3 Nc6 19. Bd3'],
  ['ruy-lopez-punish-closed-early-b5-d5', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3 Rae8 17. Nd2'],
  // Marshall
  ['ruy-lopez-punish-marshall-premature-f5', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4 10. dxc6 exf3 11. Qxf3 Bg4 12. Qg3 Re8 13. f3 Bd6 14. Qf2 Rxe1+ 15. Qxe1 Bf5 16. d4 Qe8 17. Qxe8+ Rxe8 18. Kf2 Bxh2 19. Bg5'],
  ['ruy-lopez-punish-marshall-qh3-refutation', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1 Ng4 14. h3 Qh4 15. Qf3 Nxf2 16. Re2 Nxh3+ 17. gxh3 Bxh3 18. Re4 Rae8 19. Bxf7+ Kh8 20. Rxe8 Rxe8 21. Bxe8'],
  ['ruy-lopez-punish-marshall-8-a4-b4', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d4 d6 10. dxe5 dxe5 11. Nbd2 Bg4 12. h3 Bh5 13. g4 Bg6 14. Qe2 Nd7 15. Bd5 Ndb8 16. Nc4 Bd6 17. Bg5'],
  // Sidelines
  ['ruy-lopez-punish-steinitz-trap', '1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 exd4 8. Nxd4 O-O 9. Bxc6 bxc6 10. Qf3 Re8 11. e5 dxe5 12. Nxc6 Bxc6 13. Qxc6 Bd6 14. Bg5 h6 15. Bxf6 Qxf6 16. Ne4 Qe6 17. Rad1'],
  ['ruy-lopez-punish-schliemann-gambit', '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5 8. Qe2 Nf6 9. f4 Qxf4 10. d4 Qh4+ 11. g3 Qh3 12. Ne5+ c6 13. Bc4 Be6 14. Bg5 O-O-O 15. O-O-O Bd5 16. Rhf1 Qe6 17. Bxd5'],
  ['ruy-lopez-punish-cozio-defense', '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. c3 d5 5. exd5 Qxd5 6. d4 exd4 7. cxd4 Bd7 8. Nc3 Qh5 9. d5 Ne5 10. Nxe5 Qxe5+ 11. Be3 O-O-O 12. O-O Nf5 13. Re1 Nxe3 14. Rxe3 Qf4 15. Bxd7+ Rxd7 16. Re8+ Rd8 17. Qe2'],
  // Exchange
  ['ruy-lopez-punish-exchange-early-bg4', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 Ng6 10. d4 Bd6 11. hxg4 hxg4 12. Nh2 exd4 13. e5 Nxe5 14. Nxg4 Qh4 15. Kf1 Qh1+ 16. Ke2 Qxg2 17. Nxe5 Bxe5 18. Kd3'],
  ['ruy-lopez-punish-exchange-endgame-f6', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd7 8. Be3 O-O-O 9. Nc3 Bd6 10. O-O-O Ne7 11. f3 Rhe8 12. Bf2 f5 13. Bh4 fxe4 14. Nxe4 Bf4+ 15. Kb1 h6 16. Rhe1 g5 17. Bg3'],
  ['ruy-lopez-punish-exchange-greedy-c5', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Na5 b5 11. Be3 c4 12. a4 Bd7 13. Nb7 Be7 14. axb5 Bxb5 15. Nc3 Bc6 16. Na5 Bd7 17. Nd5']
];

let errors = 0;
for (const [id, pgn] of lines) {
  const g = new Chess();
  const tokens = pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!g.move(t, { sloppy: true })) {
      console.error(`FAIL: ${id} at ply ${i} token '${t}'`);
      errors++;
      break;
    }
  }
  if (g.turn() !== 'b') {
    console.error(`FAIL: ${id} does not end on White's move (turn=${g.turn()})`);
    errors++;
  }
  console.log(`PASS: ${id} (${g.history().length} plies) FEN: ${g.fen()}`);
}

if (errors === 0) {
  console.log(`ALL 15 RUY LOPEZ LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
