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
 * Detects if the current position represents an ambiguous White branching point.
 * Returns true ONLY IF the active sub-course contains 2 or more distinct candidate moves for White
 * following the exact same prior move sequence played by Black and White.
 *
 * @param {Object} currentLine - Active line object being trained.
 * @param {number} moveIndex - Current half-move index (must be White's turn: 0, 2, 4...).
 * @param {Array<Object>} subCourseLines - All lines in the active Sub-Course repertoire.
 * @param {Array<string>} moveHistory - Array of SAN move strings played so far in the game.
 * @returns {boolean} True if White faces an ambiguous branching point requiring a visual hint.
 */
export function isAmbiguousWhiteBranch(currentLine, moveIndex, subCourseLines, moveHistory) {
  if (!currentLine || !subCourseLines || subCourseLines.length <= 1) return false;
  if (moveIndex % 2 !== 0) return false; // Only active when it is White's turn

  const prevMoveCount = moveHistory ? moveHistory.length : moveIndex;
  const candidateWhiteMoves = new Set();

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
      candidateWhiteMoves.add(line.moves[moveIndex].san);
    }
  }

  return candidateWhiteMoves.size >= 2;
}
