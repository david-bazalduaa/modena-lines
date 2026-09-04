import { Chess } from 'chess.js';

const lines = [
  // Classical (3)
  ['caro-kann-punish-classical-greedy-h5', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. h5 Bh7 8. Nf3 Nd7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 13. Kb1 O-O 14. Ne4 Nxe4 15. Qxe4 Nf6 16. Qe2 Qd5 17. Ne5 Qe4'],
  ['caro-kann-punish-classical-ne5-sacrifice', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nf3 Nd7 7. Bc4 e6 8. O-O Ngf6 9. Re1 Be7 10. Qe2 O-O 11. c3 Nd5 12. Ne5 Nxe5 13. dxe5 b5 14. Bb3 a5 15. a4 Qb6 16. axb5 cxb5'],
  ['caro-kann-punish-classical-f4-overreach', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. f4 e6 7. Nf3 Bd6 8. Bd3 Ne7 9. O-O O-O 10. Ne5 Bxd3 11. Qxd3 c5 12. dxc5 Bxc5+ 13. Be3 Qxd3 14. Nxd3 Bxe3+ 15. Kh1 Nbc6 16. Rf3 Bb6'],
  // Advance (3)
  ['caro-kann-punish-advance-greedy-g4', '1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4 Bd7 5. h3 c5 6. c3 Nc6 7. Nf3 e6 8. Be3 Qb6 9. Qd2 Rc8 10. Be2 cxd4 11. cxd4 Na5 12. O-O Nc4 13. Bxc4 Rxc4 14. Nc3 Bb4 15. Rac1 Ne7 16. a3 Bxc3 17. Rxc3 Rxc3 18. Qxc3 O-O'],
  ['caro-kann-punish-advance-short-system-overreach', '1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3 Qb6 7. Nc3 Nc6 8. O-O Qxb2 9. Qe1 cxd4 10. Bxd4 Nxd4 11. Nxd4 Bb4 12. Ndb5 Ba5 13. Rb1 Qxc2 14. Rc1 Qb2 15. Nd6+ Kf8 16. Nxf5 exf5'],
  ['caro-kann-punish-advance-tal-h4', '1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4 h5 5. Bd3 Bxd3 6. Qxd3 e6 7. Bg5 Qb6 8. Nd2 c5 9. c4 Qa6 10. Ngf3 Nc6 11. O-O cxd4 12. Nxd4 Nxe5 13. Qe2 Nxc4 14. Nxc4 Qxc4 15. Qe3 Bc5 16. Rfd1 Ne7'],
  // Modern (3)
  ['caro-kann-punish-modern-f4-assault', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. c3 Bd6 7. Bd3 O-O 8. Qc2 Re8+ 9. Ne2 h5 10. Be3 Nd7 11. O-O-O b5 12. Kb1 Nb6 13. Ng3 h4 14. Ne4 Nd5 15. Nxd6 Qxd6 16. Bd2 Be6'],
  ['caro-kann-punish-modern-early-g4', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4 Bd6 7. Qh5 O-O 8. Ne2 Nd7 9. O-O Nb6 10. Bd3 g6 11. Qh6 Re8 12. c4 Bf8 13. Qh4 f5 14. Bg5 Be7 15. Bxe7 Qxe7 16. Qxe7 Rxe7'],
  ['caro-kann-punish-modern-h4-flank', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Nf3 Bd6 7. Be2 O-O 8. O-O Re8 9. Be3 Nd7 10. Qd2 Nf8 11. Rfe1 Ng6 12. Rad1 Bg4 13. h3 Be6 14. c4 Qd7 15. Bf1 Rad8 16. d5 cxd5 17. cxd5 Bxd5'],
  // Two Knights / Fantasy (3)
  ['caro-kann-punish-fantasy-3-f3-dxe4', '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 Bg4 6. Bc4 Nd7 7. c3 Ngf6 8. Qb3 Bh5 9. Qxb7 Nxe4 10. Qxc6 Bxf3 11. gxf3 Qh4+ 12. Ke2 Qf2+ 13. Kd1 Qxf3+ 14. Kc2 Qg2+ 15. Bd2 Rd8 16. Re1 f5'],
  ['caro-kann-punish-two-knights-early-d4', '1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3 5. Qxf3 e6 6. d4 dxe4 7. Qxe4 Nf6 8. Qd3 Nbd7 9. Be2 Qc7 10. O-O Be7 11. Bg5 O-O 12. Bh4 Rad8 13. Bg3 Bd6 14. Bxd6 Qxd6 15. Rad1 Rfe8 16. Bf3 e5'],
  ['caro-kann-punish-two-knights-bc4', '1. e4 c6 2. Nc3 d5 3. Nf3 dxe4 4. Nxe4 Nf6 5. Qe2 Nxe4 6. Qxe4 Qd5 7. Qf4 Qf5 8. Qe3 Qxc2 9. Bd3 Qa4 10. O-O Nd7 11. b3 Qa5 12. Bb2 e6 13. Rfe1 Be7 14. Bxg7 Rg8 15. Bc3 Qh5 16. Ne5 Nxe5 17. Bxe5 Bd7'],
  // Panov (3)
  ['caro-kann-punish-panov-early-qb3', '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Nf3 Be7 8. c5 O-O 9. Bb5 Ne4 10. Bxe7 Nxe7 11. Rc1 b6 12. b4 a5 13. a3 axb4 14. axb4 bxc5 15. bxc5 Qa5 16. Qd3 Nxc3 17. Rxc3 Qa1+'],
  ['caro-kann-punish-panov-isolated-d4', '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Be7 7. cxd5 Nxd5 8. Bd3 Nc6 9. O-O O-O 10. Re1 Nf6 11. a3 b6 12. Bc2 Bb7 13. Qd3 Rc8 14. Bg5 g6 15. Rad1 Nd5 16. Bh6 Re8'],
  ['caro-kann-punish-panov-greedy-cxd5', '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4 7. cxd5 Nxd5 8. Qb3 Bxf3 9. gxf3 e6 10. Qxb7 Nxd4 11. Bb5+ Nxb5 12. Qc6+ Ke7 13. Qxb5 Qd7 14. Nxd5+ Qxd5 15. Qxd5 exd5 16. Be3 Ke6']
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
  if (g.turn() !== 'w') {
    console.error(`FAIL: ${id} does not end on Black's move (turn=${g.turn()})`);
    errors++;
  }
  console.log(`PASS: ${id} (${g.history().length} plies) FEN: ${g.fen()}`);
}

if (errors === 0) {
  console.log(`ALL 15 CARO-KANN LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
