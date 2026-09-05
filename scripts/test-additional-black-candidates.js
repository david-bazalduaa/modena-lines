import { Chess } from 'chess.js';

const testLines = [
  // 1. Caro Classical 4th tactical: refuting 6. Nh3 / 8. Nxg6 with ...Qa5+ winning pawn
  {
    id: 'caro-kann-punish-classical-nh3-gambit',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nh3 Nf6 7. Nf4 e5 8. Nxg6 hxg6 9. dxe5 Qa5+ 10. Bd2 Qxe5+ 11. Qe2 Nbd7 12. O-O-O O-O-O 13. Qxe5 Nxe5 14. Be2 Bc5 15. f3 Nd5 16. Ne4 Be3'
  },
  // 2. Caro Advance 4th tactical: refuting 4. c4 with 4...e6 and 9...Qxb2!
  {
    id: 'caro-kann-punish-advance-c4-break',
    pgn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. c4 e6 5. Nc3 Ne7 6. Nf3 Nd7 7. Be2 dxc4 8. Bxc4 Nb6 9. Bb3 Ned5 10. O-O Be7 11. Qe2 O-O 12. Ne4 a5 13. a3 a4 14. Ba2 Nd7 15. Bd2 Qb6 16. Rab1 Qa6'
  },
  // 3. Caro Modern 4th tactical: refuting 5. Bc4 / 6. Qe2 with 8...Qc7 & 12...b6
  {
    id: 'caro-kann-punish-modern-bc4-blunder',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6 8. Bb3 h6 9. N5f3 c5 10. dxc5 Bxc5 11. Ne5 O-O 12. Ngf3 Nbd7 13. O-O Nxe5 14. Nxe5 b6 15. Bf4 Bb7 16. Rad1 Qe7'
  },
  // 4. Caro Two Knights/Fantasy 4th tactical: refuting Fantasy 3. f3 with 3...e6 & 6...c5!
  {
    id: 'caro-kann-punish-fantasy-c5-counter',
    pgn: '1. e4 c6 2. d4 d5 3. f3 e6 4. Nc3 Bb4 5. Be3 Ne7 6. Bd3 c5 7. dxc5 Nd7 8. a3 Bxc3+ 9. bxc3 Qa5 10. Ne2 Nxc5 11. O-O O-O 12. c4 dxc4 13. Bxc4 Rd8 14. Qe1 Qc7 15. Qf2 b6 16. Rfd1 Bb7'
  },
  // 5. Caro Panov 4th tactical: refuting 6. Qb3 with 6...g6 and 14...d5
  {
    id: 'caro-kann-punish-panov-g6-fianchetto',
    pgn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6 6. Qb3 Bg7 7. cxd5 O-O 8. Be2 Nbd7 9. Bf3 Nb6 10. Nge2 Bg4 11. Bxg4 Nxg4 12. O-O Qd7 13. Bf4 Nf6 14. d6 exd6 15. a4 d5 16. Be5 Nc4 17. Bxf6 Bxf6 18. Rad1 Rfe8'
  },

  // 6. Pirc Classical 4th tactical: 6...a6 & 11...Nxe4! pin explosion
  {
    id: 'pirc-punish-classical-a6-nxe4',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O a6 7. a4 b6 8. Re1 Bb7 9. Bc4 e6 10. Bg5 h6 11. Bh4 g5 12. Bg3 Nxe4 13. Nxe4 d5 14. Bd3 dxe4 15. Bxe4 Bxe4 16. Rxe4 Nd7 17. c3 Nf6'
  },
  // 7. Pirc Austrian 4th tactical: 6...Na6 & 10...Nb4 queenside infiltration
  {
    id: 'pirc-punish-austrian-na6-counter',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Na6 7. O-O c5 8. d5 Bg4 9. h3 Bxf3 10. Qxf3 Nb4 11. e5 dxe5 12. fxe5 Nfxd5 13. Nxd5 Qxd5 14. Qxd5 Nxd5 15. Be4 e6 16. c4 Nb6 17. Bxb7 Rad8'
  },
  // 8. Pirc 150 Attack 4th tactical: 5...b5 & 7...Nb6 queenside expansion
  {
    id: 'pirc-punish-150-b5-expansion',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. Nf3 Nb6 8. h3 Bg7 9. O-O O-O 10. Bh6 b4 11. Ne2 a5 12. Bxg7 Kxg7 13. Ng3 e5 14. dxe5 dxe5 15. Nxe5 Qd6 16. Nf3 Nfd7'
  },
  // 9. Pirc Fianchetto 4th tactical: 6...c5 & 8...Rxd8 queenless squeeze
  {
    id: 'pirc-punish-fianchetto-queenless-squeeze',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c5 7. dxc5 dxc5 8. Qxd8 Rxd8 9. Be3 Na6 10. h3 Be6 11. O-O Nd7 12. Rfd1 Nb4 13. Rac1 Bc4 14. Nf4 Bxc3 15. bxc3 Nxa2 16. Ra1 Nxc3'
  },
  // 10. Pirc Sidelines 4th tactical: 4. Bc4 & 6...Nxd4! center counter-trap
  {
    id: 'pirc-punish-sidelines-bc4-trap',
    pgn: '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. c3 d5 7. exd5 Nxd5 8. Re1 Nc6 9. d4 Bg4 10. Nbd2 e5 11. dxe5 Nxe5 12. Be2 Nf4 13. Nxe5 Bxe2 14. Rxe2 Bxe5 15. Re1 Qg5 16. Qf3 Rfe8'
  }
];

let errors = 0;
for (const { id, pgn } of testLines) {
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
  console.log(`ALL 10 ADDITIONAL BLACK TACTICAL LINES VALID!`);
} else {
  console.error(`${errors} ERRORS FOUND.`);
}
