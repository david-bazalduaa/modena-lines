/* ============================================================
   TRAINING GAME LOOP & AUTOMATED TURN HANDSHAKE ENGINE
   Provides robust turn detection, player perspective resolution,
   and automated first-move triggers for opening repertoires.
   ============================================================ */

/**
 * Resolves active player color perspective ('white' | 'black')
 * for a repertoire line, subcourse, or parent course.
 *
 * @param {Object} [line] - Active line object
 * @param {Object} [subCourse] - Active sub-course object
 * @param {Object} [course] - Parent course object
 * @returns {'white' | 'black'} Resolved player side
 */
export function resolvePlayerColor(line, subCourse, course) {
  if (line && line.side) return line.side;
  if (subCourse && subCourse.side) return subCourse.side;
  if (course && course.side) return course.side;

  const courseId = line?.courseId || subCourse?.courseId;
  if (courseId) {
    const blackCourseIds = ['pirc-defense', 'sicilian-defense', 'caro-kann'];
    if (blackCourseIds.includes(courseId)) {
      return 'black';
    }
  }

  return 'white';
}

/**
 * Evaluates the turn handshake state at position 0 (start position).
 * Determines if the player waits for user input or if the engine
 * must trigger the opponent CPU's opening move.
 *
 * @param {'white' | 'black'} playerColor - Resolved player perspective
 * @param {Object} game - chess.js instance
 * @returns {{
 *   isUserTurn: boolean,
 *   shouldTriggerOpponentFirstMove: boolean,
 *   turnColor: 'white' | 'black',
 *   movableColor: 'white' | 'black'
 * }}
 */
export function evaluatePositionZeroTurnState(playerColor, game) {
  const currentTurn = game && typeof game.turn === 'function' ? game.turn() : 'w';
  const turnColor = currentTurn === 'w' ? 'white' : 'black';
  const isUserTurn = currentTurn === playerColor[0];

  return {
    isUserTurn,
    shouldTriggerOpponentFirstMove: playerColor === 'black' && currentTurn === 'w',
    turnColor,
    movableColor: playerColor
  };
}

/**
 * Computes Chessground configuration options for initial turn synchronization.
 * When student is Black and White moves first, turnColor is 'white' and movable.color is 'black',
 * with an empty destination map to guarantee input locking until White's move finishes.
 *
 * @param {'white' | 'black'} playerColor
 * @param {Map<string, string[]>} [legalDests]
 * @param {boolean} [isOpponentAnimating=false]
 * @returns {Object} Chessground state update payload
 */
export function computeInitialGroundTurnConfig(playerColor, legalDests, isOpponentAnimating = false) {
  if (playerColor === 'black') {
    return {
      orientation: 'black',
      turnColor: 'white',
      movable: {
        color: 'black',
        dests: (isOpponentAnimating || !legalDests) ? new Map() : legalDests,
        showDests: !isOpponentAnimating
      }
    };
  }

  return {
    orientation: 'white',
    turnColor: 'white',
    movable: {
      color: 'white',
      dests: legalDests || new Map(),
      showDests: true
    }
  };
}
