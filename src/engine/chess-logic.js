/* ============================================================
   CHESS LOGIC & PGN PARSER ENGINE
   ============================================================ */

export function parsePGN(pgn) {
  return pgn
    .split(/\s+/)
    .filter(token => token !== '' && !/^\d+\.$/.test(token));
}

export function normalizeMoves(rawMoves) {
  const tempGame = new Chess();
  const normalized = [];
  for (let i = 0; i < rawMoves.length; i++) {
    const res = tempGame.move(rawMoves[i], { sloppy: true });
    if (res) {
      normalized.push({
        san: res.san,
        from: res.from,
        to: res.to,
        piece: res.piece,
        color: res.color,
        fen: tempGame.fen()
      });
    } else {
      console.error('Invalid move token in repertoire:', rawMoves[i]);
      break;
    }
  }
  return normalized;
}

export function processLineData(rawLine) {
  const rawMoves = parsePGN(rawLine.pgn);
  const normMoves = normalizeMoves(rawMoves);
  return {
    ...rawLine,
    moves: normMoves,
    totalHalfMoves: normMoves.length
  };
}
