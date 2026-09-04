import { Chess } from 'chess.js';

const lines = [
  // Najdorf (4)
  ['sicilian-punish-najdorf-6-bc4-b5', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5 8. Bg5 Be7 9. Qf3 Qc7 10. O-O-O Nbd7 11. Rhe1 Bb7 12. Qg3 b4 13. Na4 Nxe4 14. Rxe4 Bxg5+ 15. Qxg5 Bxe4 16. Qxg7 Ke7'],
  ['sicilian-punish-najdorf-adams-attack-h4', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3 e5 7. Nde2 h5 8. Bg5 Be6 9. Bxf6 Qxf6 10. Nd5 Qd8 11. Nec3 Nd7 12. Bc4 Rc8 13. Bb3 g6 14. Qe2 Bh6 15. Rd1 O-O 16. O-O Nc5 17. Kh1 Qh4'],
  ['sicilian-punish-najdorf-english-overreach', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 h5 9. Qd2 Nbd7 10. O-O-O Be7 11. Kb1 Rc8 12. Nd5 Bxd5 13. exd5 Nb6 14. Qa5 Nc4 15. Qxd8+ Bxd8 16. Bf2 Bb6 17. Bxb6 Nxb6'],
  ['sicilian-punish-najdorf-6-f4-e5', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 e5 7. Nf3 Nbd7 8. a4 Be7 9. Bd3 O-O 10. O-O exf4 11. Bxf4 Qb6+ 12. Kh1 Qxb2 13. Qd2 Qb6 14. a5 Qc7 15. Nd4 Ne5 16. Bg5 Be6'],
  // Dragon (3)
  ['sicilian-punish-dragon-yugoslav-premature-h5', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8 11. Bb3 Ne5 12. h4 h5 13. Bg5 Rc5 14. Kb1 b5 15. g4 hxg4 16. h5 Nxh5 17. Nd5 Re8 18. f4 Nc4'],
  ['sicilian-punish-dragon-levenfish-rebuttal', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 Nc6 7. Nxc6 bxc6 8. e5 Nd7 9. exd6 exd6 10. Be3 Be7 11. Qd2 O-O 12. O-O-O d5 13. g4 Nf6 14. h3 Bb4 15. Bd4 Ne4 16. Qe3 Re8'],
  ['sicilian-punish-dragon-classical-9-f4', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. Be3 O-O 8. O-O Nc6 9. f4 Qb6 10. Qd3 Ng4 11. Bxg4 Bxd4 12. Bxd4 Qxd4+ 13. Qxd4 Nxd4 14. Bxc8 Rfxc8 15. Rf2 Rc4 16. Rd1 Rac8'],
  // Sveshnikov (3)
  ['sicilian-punish-sveshnikov-greedy-a4', '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 b5 10. Nd5 f5 11. Bd3 Be6 12. O-O Bxd5 13. exd5 Ne7 14. c3 Bg7 15. Qh5 e4 16. Be2 O-O 17. Nc2 Qc8'],
  ['sicilian-punish-sveshnikov-chelyabinsk-f4', '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5 Be7 10. Bxf6 Bxf6 11. c3 Bg5 12. Nc2 Rb8 13. a4 bxa4 14. Ncb4 Nxb4 15. cxb4 O-O 16. Rxa4 a5'],
  ['sicilian-punish-sveshnikov-early-c4-trap', '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 f5 10. exf5 Bxf5 11. Nc4 Rc8 12. Ne3 Be6 13. Bd3 d5 14. Qh5 e4 15. Be2 Bg7 16. O-O Ne7'],
  // Anti-Sicilian (4)
  ['sicilian-punish-anti-bowdler-bc4', '1. e4 c5 2. Bc4 e6 3. Nc3 a6 4. a4 Nc6 5. Nf3 Nf6 6. O-O d5 7. exd5 exd5 8. Be2 d4 9. Nb1 Bd6 10. d3 h6 11. Nbd2 O-O 12. Nc4 Bc7 13. Bd2 Be6 14. b3 Re8 15. Re1 Bd5'],
  ['sicilian-punish-anti-smith-morra-declined', '1. e4 c5 2. d4 cxd4 3. c3 d5 4. exd5 Qxd5 5. cxd4 Nc6 6. Nf3 Bg4 7. Be2 e6 8. Nc3 Qa5 9. O-O Nf6 10. Be3 Be7 11. Qb3 Qb4 12. Qxb4 Bxb4 13. h3 Bh5 14. g4 Bg6 15. Ne5 O-O 16. Bf3 Rac8'],
  ['sicilian-punish-anti-grand-prix-attack', '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. f5 Nge7 7. fxe6 dxe6 8. d3 O-O 9. O-O Na5 10. Bb3 Nxb3 11. axb3 Nc6 12. Be3 b6 13. Qd2 Nd4 14. Bh6 Bxh6 15. Qxh6 Nxf3+ 16. Rxf3 Qd4+ 17. Kh1 Qg7'],
  ['sicilian-punish-anti-alapin-c3-blunder', '1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. O-O Nc6 8. Be3 cxd4 9. cxd4 Be7 10. Nc3 Qd6 11. Qb3 O-O 12. Rfd1 Qb4 13. Qxb4 Nxb4 14. Rac1 Nbd5 15. Nxd5 Nxd5 16. h3 Bh5']
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
  console.log(`ALL 14 SICILIAN LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
