import { Chess } from 'chess.js';

const lines = [
  // Classical (3)
  ['pirc-punish-classical-premature-e5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Bg4 7. Be3 Nc6 8. e5 dxe5 9. Nxe5 Bxe2 10. Nxe2 Nxe5 11. dxe5 Ng4 12. Bf4 Nxe5 13. c3 c6 14. Qb3 Qb6 15. Rfd1 Rfd8 16. Nd4 Qxb3 17. axb3 a6'],
  ['pirc-punish-classical-h3-overreach', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O c6 7. h3 Qc7 8. Bf4 Nbd7 9. e5 Nd5 10. Nxd5 cxd5 11. exd6 exd6 12. c3 Nf6 13. Qb3 Re8 14. Rfe1 Bd7 15. Bd3 Bc6 16. Qb4 Bf8 17. a4 Ne4'],
  ['pirc-punish-classical-be3-d5-trap', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. Be3 a6 7. Qd2 b5 8. a3 Bb7 9. d5 c6 10. dxc6 Nxc6 11. Bh6 Rc8 12. Bxg7 Kxg7 13. O-O Na5 14. Bd3 Nc4 15. Bxc4 Rxc4 16. Rfe1 Nxe4 17. Nxe4 Bxe4'],
  // Austrian (3)
  ['pirc-punish-austrian-reckless-e5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. Bc4 c5 8. e6 fxe6 9. Bxe6+ Kh8 10. d5 Nf6 11. Ng5 Qe8 12. O-O Na6 13. Qe2 Nc7 14. f5 gxf5 15. Rxf5 Bxe6 16. Nxe6 Nxe6 17. Qxe6 Ng4'],
  ['pirc-punish-austrian-greedy-f5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Nc6 7. e5 dxe5 8. fxe5 Nh5 9. Be3 Bg4 10. Be2 f6 11. exf6 Nxf6 12. O-O Nd5 13. Nxd5 Qxd5 14. c3 Kh8 15. Qd2 e5 16. dxe5 Qxd2 17. Bxd2 Nxe5'],
  ['pirc-punish-austrian-overextended-center', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be3 b6 7. e5 Ng4 8. Bg1 c5 9. h3 Nh6 10. d5 Bb7 11. Qd2 Nd7 12. O-O-O dxe5 13. fxe5 Nf5 14. Bh2 Bh6 15. Bf4 Bxf4 16. Qxf4 Qb8'],
  // 150 Attack (3)
  ['pirc-punish-150-premature-bh6', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. Bh6 Bxh6 8. Qxh6 Qa5 9. Qd2 Rb8 10. Nge2 b4 11. Nd1 c5 12. Ne3 Ba6 13. d5 O-O 14. Ng3 Bxf1 15. Kxf1 Ne5 16. Kf2 Qb6'],
  ['pirc-punish-150-h4-h5-blunder', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. h3 Bg7 8. Nf3 e5 9. Bh6 O-O 10. Bxg7 Kxg7 11. O-O-O b4 12. Ne2 a5 13. g4 exd4 14. Nexd4 Qb6 15. Qf4 Ne5 16. Be2 Re8'],
  ['pirc-punish-150-g4-flank-assault', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. g4 Nb6 8. Bd3 h5 9. g5 Nfd7 10. f4 Bg7 11. Nf3 Nc4 12. Bxc4 bxc4 13. O-O-O Rb8 14. e5 d5 15. Nh4 e6 16. Rdf1 Qb6'],
  // Fianchetto (3)
  ['pirc-punish-fianchetto-early-e4-e5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 e5 7. h3 Nc6 8. Be3 exd4 9. Nxd4 Bd7 10. O-O Re8 11. Re1 Nxd4 12. Bxd4 Bc6 13. Qd3 Nd7 14. Bxg7 Kxg7 15. Rad1 Qf6 16. f4 Nc5 17. Qd4 Qxd4+ 18. Rxd4 a5'],
  ['pirc-punish-fianchetto-passive-f4', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c6 7. a4 a5 8. O-O Na6 9. h3 e5 10. Be3 exd4 11. Bxd4 Re8 12. Qd2 Nc5 13. f3 Be6 14. Rad1 Bc4 15. Rfe1 Nfd7 16. Bxg7 Kxg7 17. Qxd6 Qb6'],
  ['pirc-punish-fianchetto-queenside-break', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 Nbd7 7. O-O c5 8. h3 a6 9. a4 Rb8 10. Be3 b5 11. axb5 axb5 12. dxc5 dxc5 13. f4 b4 14. Nd5 Bb7 15. Nxf6+ Bxf6 16. c3 Qc7'],
  // Sidelines (3)
  ['pirc-punish-sidelines-early-bc4', '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. Re1 c5 7. c3 Nc6 8. Bb3 b5 9. a4 b4 10. h3 Rb8 11. Nbd2 bxc3 12. bxc3 Ba6 13. Bc2 Nd7 14. Ra3 Qa5 15. c4 Nde5 16. Nxe5 Bxe5'],
  ['pirc-punish-sidelines-kholmov-be3-f3', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5 Bg7 5. Qd2 h6 6. Bf4 g5 7. Bg3 Nh5 8. Nge2 Nc6 9. O-O-O Nxg3 10. hxg3 e6 11. f4 Bd7 12. Kb1 Qe7 13. e5 O-O-O 14. Qe3 Kb8 15. Ne4 gxf4 16. gxf4 dxe5 17. fxe5 Bc8'],
  ['pirc-punish-sidelines-overaggressive-g4', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f3 c6 5. Be3 b5 6. g4 h6 7. Qd2 Nbd7 8. Nge2 Nb6 9. Ng3 b4 10. Nd1 a5 11. h4 h5 12. g5 Nfd7 13. f4 Bg7 14. Bd3 c5 15. c3 Ba6 16. Bxa6 Rxa6 17. Qe2 Ra8']
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
  console.log(`ALL 15 PIRC LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
