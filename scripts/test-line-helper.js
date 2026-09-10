import { Chess } from 'chess.js';

export function testLine(line) {
  const tokens = line.pgn.split(/\s+/).filter(t => t !== '' && !/^\d+\.$/.test(t));
  const game = new Chess();

  for (let p = 0; p < tokens.length; p++) {
    const token = tokens[p];
    const res = game.move(token, { sloppy: true });
    if (!res) {
      throw new Error(`[${line.id}] Illegal move '${token}' at ply ${p} in PGN: ${line.pgn}`);
    }
  }

  const plyCount = tokens.length;
  if (plyCount < 16) {
    throw new Error(`[${line.id}] Ply depth too short (${plyCount} < 16)`);
  }

  if (game.turn() !== 'b') {
    throw new Error(`[${line.id}] White line does not conclude on White's move (turn=${game.turn()}, plies=${plyCount})`);
  }

  // Calculate previewFEN at ply 8 or 10 or 12
  const previewGame = new Chess();
  const previewPly = Math.min(10, plyCount - 1);
  for (let p = 0; p < previewPly; p++) {
    previewGame.move(tokens[p], { sloppy: true });
  }

  return {
    id: line.id,
    plies: plyCount,
    finalFEN: game.fen(),
    previewFEN: previewGame.fen(),
    tokens
  };
}
