/* ============================================================
   CHESS LOGIC & PGN PARSER ENGINE WITH AMBIGUITY EVALUATOR
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

/**
 * Detects if the current position represents an ambiguous branching point for the player.
 * Returns true ONLY IF the active sub-course contains 2 or more distinct candidate moves for the player
 * following the exact same prior move sequence played.
 *
 * @param {Object} currentLine - Active line object being trained.
 * @param {number} moveIndex - Current half-move index.
 * @param {Array<Object>} subCourseLines - All lines in the active Sub-Course repertoire.
 * @param {Array<string>} moveHistory - Array of SAN move strings played so far in the game.
 * @param {'white'|'black'} [playerColor='white'] - Player side being trained.
 * @returns {boolean} True if player faces an ambiguous branching point requiring a visual hint.
 */
export function isAmbiguousBranch(currentLine, moveIndex, subCourseLines, moveHistory, playerColor = 'white') {
  if (!currentLine || !subCourseLines || subCourseLines.length <= 1) return false;
  const isPlayerTurn = playerColor === 'black' ? (moveIndex % 2 === 1) : (moveIndex % 2 === 0);
  if (!isPlayerTurn) return false;

  const prevMoveCount = moveHistory ? moveHistory.length : moveIndex;
  const candidateMoves = new Set();

  for (const rawLine of subCourseLines) {
    const line = processLineData(rawLine);
    if (!line.moves || line.moves.length <= moveIndex) continue;

    // Verify if all prior moves match the played move history
    let matchesHistory = true;
    for (let m = 0; m < prevMoveCount; m++) {
      const expectedMove = moveHistory && moveHistory[m] 
        ? moveHistory[m] 
        : (currentLine.moves[m] ? currentLine.moves[m].san : null);
      if (!line.moves[m] || line.moves[m].san !== expectedMove) {
        matchesHistory = false;
        break;
      }
    }

    if (matchesHistory && line.moves[moveIndex]) {
      candidateMoves.add(line.moves[moveIndex].san);
    }
  }

  return candidateMoves.size >= 2;
}

export function isAmbiguousWhiteBranch(currentLine, moveIndex, subCourseLines, moveHistory) {
  return isAmbiguousBranch(currentLine, moveIndex, subCourseLines, moveHistory, 'white');
}
