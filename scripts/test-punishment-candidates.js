import { Chess } from 'chess.js';

const lines = [
  // 1. Italian - Blackburne Shilling Punishment
  ['italian-punish-blackburne', '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Bxf7+ Ke7 6. O-O Qxe5 7. Bxg8 Rxg8 8. c3 Nc6 9. d4'],
  
  // 2. Italian - Early ...d6 / Lucchini Pin Punishment
  ['italian-punish-d6-pin', '1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 Bg4 5. dxe5 Nxe5 6. Nxe5 Bxd1 7. Bxf7+ Ke7 8. Bg5+ Nf6 9. Nc3 dxe5 10. Rxd1'],
  
  // 3. London - Poisoned b2 Queen Trap
  ['london-punish-b2-grab', '1. d4 d5 2. Bf4 c5 3. e3 Qb6 4. Nc3 Qxb2 5. Nb5 Na6 6. a3 Bf5 7. Rc1 c4 8. Rb1 Qxc2 9. Qxc2 Bxc2 10. Rb2 Ba4 11. Nc3 Bc6 12. e4'],
  
  // 4. London - Jobava Overextension Refutation
  ['london-punish-jobava-break', '1. d4 Nf6 2. Bf4 c5 3. d5 Qb6 4. Nc3 Qxb2 5. Bd2 Qb6 6. e4 d6 7. f4 g6 8. e5 dxe5 9. fxe5 Nfd7 10. Rb1 Qd8 11. e6 fxe6 12. dxe6 Nf6 13. Bb5+ Nc6 14. Bxc6+ bxc6 15. Qe2'],

  // 5. Ruy Lopez - Noah\'s Ark Trap Refutation
  ['ruy-lopez-punish-noahs-ark', '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. d4 b5 6. Bb3 Nxd4 7. Nxd4 exd4 8. c3 dxc3 9. Qd5 Be6 10. Qc6+ Bd7 11. Qxc3'],

  // 6. Ruy Lopez - Schliemann Gambit Refutation
  ['ruy-lopez-punish-schliemann', '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Qh5+ g6 8. Nxg6 Nf6 9. Qe5+ Be7 10. Nxh8'],

  // 7. Sicilian - Bowdler Attack Overextension
  ['sicilian-punish-bowdler', '1. e4 c5 2. Bc4 e6 3. f4 d5 4. exd5 exd5 5. Bb5+ Nc6 6. Nf3 Bd6 7. d4 Ne7 8. O-O O-O 9. c3 Bg4 10. Be3 Nf5 11. Qd2 Nxe3 12. Qxe3 Qb6 13. Bxc6 bxc6 14. b3 Rfe8 15. Qd2 Bxf3 16. Rxf3 cxd4 17. cxd4 Re4'],

  // 8. Sicilian - Wayward Queen Attack Refutation
  ['sicilian-punish-wayward-queen', '1. e4 c5 2. Qh5 Nf6 3. Qxc5 Nc6 4. Qe3 e5 5. Nf3 b6 6. Bc4 Bc5 7. Qe2 O-O 8. O-O d5 9. exd5 Nxd5 10. d3 Bg4 11. Qe4 Bxf3 12. Qxf3 Ndb4 13. Na3 Nd4 14. Qd1 Nd5'],

  // 9. Caro-Kann - Advance g4/h4 Overextension
  ['caro-punish-advance-g4', '1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4 Bg6 5. h4 h5 6. g5 e6 7. Bd3 Bxd3 8. Qxd3 g6 9. Ne2 c5 10. c3 Nc6 11. Be3 Qb6 12. b3 cxd4 13. cxd4 Nge7 14. Ng3 Nb4 15. Qd2 Rc8 16. Nc3 Qa6'],

  // 10. Caro-Kann - Fantasy 3. f3 Smash
  ['caro-punish-fantasy-smash', '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 exd4 6. Bc4 Be6 7. Bxe6 fxe6 8. O-O Nf6 9. Ng5 e5 10. c3 Bc5 11. Kh1 Qe7 12. Qb3 Bb6 13. cxd4 Bxd4 14. Ne6 Na6 15. Bg5 Nc5 16. Nxg7+ Qxg7 17. Bxf6 Nxb3 18. Bxg7 Rg8 19. axb3 Rxg7'],

  // 11. Pirc - Austrian Attack 7. h4 Overextension
  ['pirc-punish-austrian-h4', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. h4 c5 8. h5 cxd4 9. Qxd4 dxe5 10. Qf2 e4 11. Nxe4 Nf6 12. Nxf6+ exf6 13. hxg6 Re8+ 14. Be2 hxg6 15. O-O Nc6 16. c3 Bf5 17. Be3 Qe7 18. Bc5 Qxe2'],

  // 12. Pirc - Bc4 Overextension Queen Sack Refutation
  ['pirc-punish-bc4-overextension', '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bc4 Bg7 5. Qe2 Nc6 6. e5 Nxd4 7. exf6 Nxe2 8. fxg7 Rg8 9. Ngxe2 Rxg7 10. Bh6 Rg8 11. O-O-O c6 12. Rhe1 d5 13. Bb3 e6']
];

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
console.log('\nAll 12 candidate punishment lines validated 100% in chess.js!');
