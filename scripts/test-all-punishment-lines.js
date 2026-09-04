import { Chess } from 'chess.js';

const lines = [
  // Italian Game
  ['italian-punish-d6-pin', '1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5 Bxd1 7. Bxf7+ Ke7 8. Bg5+ Nf6 9. Nc3 dxe5 10. Rxd1'],
  ['italian-punish-giuoco-greed', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Ke6 12. Qxb4 c5 13. Qa3'],
  ['italian-punish-evans-greed', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Nd5 Re8 13. Nf4 Qf5 14. Ng5 Nxe5 15. Bxe7 Rxe7 16. Bxf7+ Kh8 17. Ngh3'],
  ['italian-punish-evans-declined', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3 Nf6 7. Nd5 Nxd5 8. exd5 Ne7 9. Nxe5 d6 10. Nf3 O-O 11. O-O Bg4 12. h3 Bh5 13. d4'],
  ['italian-punish-blackburne', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Bxf7+ Ke7 6. O-O Qxe5 7. Bxg8 Rxg8 8. c3 Nc6 9. d4 Qb5 10. d5 Ne5 11. Qh5 d6 12. Bg5+ Kd7 13. Qxh7'],
  ['italian-punish-traxler', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. Bb3 Rf8 7. d3 d6 8. Be3 h6 9. Nf3 Bxe3 10. fxe3 Qe8 11. Nc3 Qg6 12. Qe2 Bg4 13. O-O-O'],
  ['italian-punish-pianissimo-pin', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. c3 d6 6. O-O Bg4 7. h3 Bh5 8. Re1 O-O 9. Nbd2 a6 10. Bb3 Ba7 11. Nf1 h6 12. Ng3 Bg6 13. Nh4 Nxe4 14. Nxg6 Bxf2+ 15. Kh1 Nxg3+ 16. Kh2 Re8 17. Qf3 Bxe1 18. Bxf7+ Kh7 19. Bxe8 Qxe8 20. Nh4'],

  // London System
  ['london-punish-symmetrical-trade', '1. d4 d5 2. Bf4 Bf5 3. e3 e6 4. c4 Bxb1 5. Qxb1 Bb4+ 6. Kd1 Nf6 7. a3 Bd6 8. Bg5 dxc4 9. Bxc4 O-O 10. Nf3 c5 11. Ke2 cxd4 12. Rd1'],
  ['london-punish-kings-indian-raid', '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 d6 6. Be2 c5 7. c3 Qb6 8. Qb3 Be6 9. Qxb6 axb6 10. a3 Nc6 11. Nbd2 Na5 12. O-O Nb3 13. Nxb3 Bxb3 14. Nd2 Ba4 15. Bf3'],
  ['london-punish-benoni-raid', '1. d4 Nf6 2. Bf4 c5 3. d5 b5 4. c4 bxc4 5. Nc3 d6 6. e4 g6 7. Bxc4 Bg7 8. Nf3 O-O 9. O-O Ba6 10. Nd2 Bxc4 11. Nxc4 Nbd7 12. Re1 Nb6 13. Na5'],
  ['london-punish-b2-grab', '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4 e6 13. exd5 exd5 14. Re2+ Kd8 15. Nf3'],
  ['london-punish-jobava-break', '1. d4 Nf6 2. Bf4 c5 3. d5 Qb6 4. Nc3 Qxb2 5. Bd2 Qb6 6. e4 d6 7. f4 g6 8. e5 dxe5 9. fxe5 Nfd7 10. Rb1 Qd8 11. e6 fxe6 12. dxe6 Nf6 13. Bb5+ Nc6 14. Bxc6+ bxc6 15. Qe2'],

  // Ruy Lopez
  ['ruy-lopez-punish-berlin-bc5', '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. Nxe5 Nxe5 6. d4 a6 7. Be2 Bd6 8. f4 Nxe4 9. fxe5 Be7 10. Bd3 d5 11. exd6 Nxd6 12. Qh5 g6 13. Qh6'],
  ['ruy-lopez-punish-chigorin-center', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 exd4 13. cxd4 cxd4 14. Nxd4 Re8 15. Nf1 Bf8 16. Bg5 Nd7 17. Ne3'],
  ['ruy-lopez-punish-anti-marshall-pin', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d3 d6 10. a5 Bg4 11. c3 bxc3 12. bxc3 Rb8 13. Nbd2 d5 14. exd5 Nxd5 15. Qc2 Nf4 16. Nxe5 Nxe5 17. Rxe5 Nxd3 18. Rd5'],
  ['ruy-lopez-punish-schliemann', '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Qh5+ g6 8. Nxg6 Nf6 9. Qe5+ Be7 10. Nxh8 Bd7 11. Bxc6 Bxc6 12. Qe6 Bd5 13. Qf5'],
  ['ruy-lopez-punish-noahs-ark', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. d4 b5 6. Bb3 Nxd4 7. Nxd4 exd4 8. c3 dxc3 9. Qd5 Be6 10. Qc6+ Bd7 11. Qxc3 Nf6 12. O-O Be7 13. Re1'],
  ['ruy-lopez-punish-exchange-pin', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. c3 Qd3 8. hxg4 hxg4 9. Nxe5 Qd6 10. Nxg4 O-O-O 11. d4 f5 12. exf5 Nf6 13. g3'],

  // Sicilian Defense
  ['sicilian-punish-najdorf-bc4', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. f4 b5 8. Bb3 b4 9. Na4 Nxe4 10. O-O d5 11. f5 e5 12. Nf3 Bb7 13. Nxe5 Bd6 14. Bf4 O-O 15. Bxd5 Bc5+ 16. Nxc5 Qxd5'],
  ['sicilian-punish-dragon-g4', '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. g4 Be6 10. Nxe6 fxe6 11. O-O-O Ne5 12. Be2 Rc8 13. h4 Qa5 14. Kb1 Nc4 15. Bxc4 Rxc4 16. h5 Rfc8'],
  ['sicilian-punish-sveshnikov-bxbf6', '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Bxf6 gxf6 9. Na3 b5 10. Nd5 f5 11. Bd3 Be6 12. O-O Bg7 13. Qh5 f4 14. c4 b4 15. Nc2 a5'],
  ['sicilian-punish-bowdler', '1. e4 c5 2. Bc4 e6 3. f4 d5 4. exd5 exd5 5. Bb5+ Nc6 6. Nf3 Bd6 7. d4 Ne7 8. O-O O-O 9. c3 Bg4 10. Be3 Nf5 11. Qd2 Nxe3 12. Qxe3 Qb6 13. Bxc6 bxc6 14. b3 Rfe8 15. Qd2 Bxf3 16. Rxf3 cxd4 17. cxd4 Re4'],
  ['sicilian-punish-wayward-queen', '1. e4 c5 2. Qh5 Nf6 3. Qxc5 Nc6 4. Qe3 e5 5. Nf3 b6 6. Bc4 Bc5 7. Qe2 O-O 8. O-O d5 9. exd5 Nxd5 10. d3 Bg4 11. Qe4 Bxf3 12. Qxf3 Ndb4 13. Na3 Nd4 14. Qd1 Nd5'],

  // Caro-Kann Defense
  ['caro-punish-classical-ne5', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bf4 Qa5+ 12. Bd2 Bb4 13. c3 Be7 14. c4 Qc7 15. O-O-O Ngf6 16. Ne4 O-O'],
  ['caro-punish-advance-g4', '1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4 Bg6 5. h4 h5 6. g5 e6 7. Bd3 Bxd3 8. Qxd3 g6 9. Ne2 c5 10. c3 Nc6 11. Be3 Qb6 12. b3 cxd4 13. cxd4 Nge7 14. Ng3 Nb4 15. Qd2 Rc8 16. Nc3 Qa6'],
  ['caro-punish-modern-bxf7', '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Bxf7+ Kxf7 7. Ng5+ Kg8 8. Ne6 Qe8 9. Nc7 Qg6 10. Nxa8 Qxg2 11. Qf3 Qxf3 12. Nxf3 Nd5 13. c4 Nb4 14. Kd1 e5 15. dxe5 Nc5'],
  ['caro-punish-fantasy-smash', '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 exd4 6. Bc4 Be6 7. Bxe6 fxe6 8. O-O Nf6 9. Ng5 e5 10. c3 Bc5 11. Kh1 Qe7 12. Qb3 Bb6 13. cxd4 Bxd4 14. Ne6 Na6 15. Bg5 Nc5 16. Nxg7+ Qxg7 17. Bxf6 Nxb3 18. Bxg7 Rg8 19. axb3 Rxg7'],
  ['caro-punish-panov-qb3', '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Qb3 Nc6 6. Nf3 e6 7. Nc3 Be7 8. cxd5 exd5 9. Bd3 O-O 10. O-O Bg4 11. Be3 Bxf3 12. gxf3 Qd7 13. Rfe1 Qh3 14. Be2 Bd6 15. f4 Nxd4 16. Bxd4 Bxf4'],

  // Pirc Defense
  ['pirc-punish-classical-e5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. e5 dxe5 6. Nxe5 O-O 7. Bc4 Nfd7 8. f4 c5 9. Be3 cxd4 10. Bxd4 Nxe5 11. fxe5 Nc6 12. Nd5 e6 13. Bc5 exd5 14. Bxf8 Qh4+ 15. g3 Qe4+'],
  ['pirc-punish-austrian-h4', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. h4 c5 8. h5 cxd4 9. Qxd4 dxe5 10. Qf2 e4 11. Nxe4 Nf6 12. Nxf6+ exf6 13. hxg6 Re8+ 14. Be2 hxg6 15. O-O Nc6 16. c3 Bf5 17. Be3 Qe7 18. Bc5 Qxe2'],
  ['pirc-punish-150-g4', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. f3 c6 6. g4 h5 7. g5 Nfd7 8. f4 b5 9. a3 Nb6 10. Nf3 Bg4 11. Be2 Nc4 12. Bxc4 bxc4 13. h3 Bxf3 14. Qxf3 Nd7 15. f5 Rb8 16. Rb1 c5'],
  ['pirc-punish-fianchetto-c5', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 e5 7. O-O exd4 8. Nxd4 Re8 9. h3 c5 10. Nde2 Nc6 11. Be3 Be6 12. Qd2 Bc4 13. Rfe1 Bxe2 14. Rxe2 Nd4 15. Bxd4 cxd4 16. Qxd4 Nxe4'],
  ['pirc-punish-bc4-overextension', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bc4 Bg7 5. Qe2 Nc6 6. e5 Nxd4 7. exf6 Nxe2 8. fxg7 Rg8 9. Ngxe2 Rxg7 10. Bh6 Rg8 11. O-O-O c6 12. Rhe1 d5 13. Bb3 e6']
];

console.log(`Validating ${lines.length} candidate punishment lines...`);
for (const [id, pgn] of lines) {
  const game = new Chess();
  const tokens = pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
  for (const t of tokens) {
    const res = game.move(t, { sloppy: true });
    if (!res) {
      console.error(`FAIL: ${id} token '${t}' in history: ${game.history().join(' ')}`);
      process.exit(1);
    }
  }
  console.log(`PASS: ${id} (${game.history().length} ply) - final FEN: ${game.fen()}`);
}

console.log(`\nALL ${lines.length} CANDIDATE PUNISHMENT LINES VALIDATED 100% IN CHESS.JS!`);
