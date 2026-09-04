/* ============================================================
   DRILL DECK CONTROLLER (NON-REPEATING FISHER-YATES CYCLE)
   ============================================================ */

/**
 * Modern Fisher-Yates (Knuth) unbiased in-place shuffle algorithm.
 * Produces an equitable permutation of the input array.
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function fisherYatesShuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Controller managing the round-robin randomized deck queue for Drill Mode.
 * Cycles through every eligible mastered line without repetition.
 * Seamlessly initiates fresh shuffled decks for subsequent rounds.
 */
export class DrillDeckController {
  constructor() {
    this.drillMasteredDeck = [];
    this.currentRound = 1;
    this.roundTotalLines = 0;
    this.currentRoundIndex = 0;
    this.isFallbackMode = false;
    this.activePoolLines = [];
    this.lastServedLineId = null;
  }

  /**
   * Evaluates if a given repertoire line is considered mastered.
   * Checks explicit line metadata and user progress persistence.
   * @param {Object} line
   * @param {Object} userProgress
   * @returns {boolean}
   */
  isMastered(line, userProgress) {
    if (!line) return false;
    if (line.mastered === true || line.completedInLearn === true) return true;
    if (userProgress && typeof userProgress.isLineCompleted === 'function') {
      return Boolean(userProgress.isLineCompleted(line));
    }
    return false;
  }

  /**
   * Filters the pool for mastered lines.
   * @param {Object[]} lines
   * @param {Object} userProgress
   * @returns {Object[]}
   */
  getMasteredLines(lines = [], userProgress = null) {
    if (!Array.isArray(lines)) return [];
    return lines.filter(line => this.isMastered(line, userProgress));
  }

  /**
   * Initializes or re-initializes the drill deck for an active sub-module or course pool.
   * @param {Object} subCourse
   * @param {Object} userProgress
   * @returns {{ line: Object, round: number, index: number, total: number, isFallback: boolean }}
   */
  startDeck(subCourse, userProgress) {
    this.activePoolLines = subCourse && Array.isArray(subCourse.lines) ? subCourse.lines : [];
    this.currentRound = 1;
    this.currentRoundIndex = 0;
    this.lastServedLineId = null;

    return this.buildNewRoundDeck(userProgress);
  }

  /**
   * Builds and shuffles a fresh deck for the current round.
   * Handles graceful fallback if 0 mastered lines are available.
   * @param {Object} userProgress
   */
  buildNewRoundDeck(userProgress) {
    const mastered = this.getMasteredLines(this.activePoolLines, userProgress);

    if (mastered.length > 0) {
      this.isFallbackMode = false;
      this.drillMasteredDeck = fisherYatesShuffle(mastered);
    } else {
      // Graceful fallback: shuffle all lines in the sub-course for exploration
      this.isFallbackMode = true;
      this.drillMasteredDeck = fisherYatesShuffle(this.activePoolLines);
    }

    // Avoid immediate repeat of the previous round's last line if multiple lines exist
    if (
      this.drillMasteredDeck.length > 1 &&
      this.lastServedLineId &&
      this.drillMasteredDeck[0].id === this.lastServedLineId
    ) {
      // Swap first item with last item to guarantee immediate variety across rounds
      const lastIdx = this.drillMasteredDeck.length - 1;
      [this.drillMasteredDeck[0], this.drillMasteredDeck[lastIdx]] = [
        this.drillMasteredDeck[lastIdx],
        this.drillMasteredDeck[0]
      ];
    }

    this.roundTotalLines = this.drillMasteredDeck.length;
    this.currentRoundIndex = 0;
  }

  /**
   * Pops and returns the next line from the non-repeating deck queue.
   * If the deck has been exhausted, seamlessly starts the next round with a fresh shuffle.
   * @param {Object} subCourse
   * @param {Object} userProgress
   * @returns {{ line: Object, round: number, index: number, total: number, isFallback: boolean, isNewRound: boolean } | null}
   */
  popNextLine(subCourse, userProgress) {
    if (subCourse && Array.isArray(subCourse.lines)) {
      this.activePoolLines = subCourse.lines;
    }

    let isNewRound = false;

    // Deck exhausted: initiate fresh round with newly mastered lines incorporated
    if (!this.drillMasteredDeck || this.drillMasteredDeck.length === 0) {
      this.currentRound++;
      this.buildNewRoundDeck(userProgress);
      isNewRound = true;
    }

    if (this.drillMasteredDeck.length === 0) {
      return null;
    }

    const nextLine = this.drillMasteredDeck.shift();
    this.currentRoundIndex++;
    this.lastServedLineId = nextLine ? nextLine.id : null;

    return {
      line: nextLine,
      round: this.currentRound,
      index: this.currentRoundIndex,
      total: this.roundTotalLines,
      isFallback: this.isFallbackMode,
      isNewRound
    };
  }

  /**
   * Returns current telemetry and progress metadata for UI deck widgets.
   * @returns {{ round: number, index: number, total: number, label: string, isFallback: boolean }}
   */
  getProgressInfo() {
    const roundStr = `Round ${this.currentRound}`;
    const lineStr = `Line ${this.currentRoundIndex} / ${this.roundTotalLines}`;
    const modeDesc = this.isFallbackMode ? ' (Exploration)' : '';

    return {
      round: this.currentRound,
      index: this.currentRoundIndex,
      total: this.roundTotalLines,
      label: `${roundStr}: ${lineStr}${modeDesc}`,
      isFallback: this.isFallbackMode
    };
  }

  /**
   * Resets deck state and round telemetry back to initial values.
   */
  reset() {
    this.drillMasteredDeck = [];
    this.currentRound = 1;
    this.roundTotalLines = 0;
    this.currentRoundIndex = 0;
    this.isFallbackMode = false;
    this.activePoolLines = [];
    this.lastServedLineId = null;
  }
}
