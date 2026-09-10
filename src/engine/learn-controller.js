/* ============================================================
   LEARN QUEUE CONTROLLER (UNLEARNED LINE PRIORITIZATION & QUEUE)
   ============================================================ */

/**
 * Controller managing line selection and linear acquisition in Learn Mode.
 * Strictly prioritizes unlearned / uncompleted lines so learners discover new
 * material immediately rather than re-playing already-mastered variations.
 * Provides clean fallback review handling when a module is 100% completed.
 */
export class LearnQueueController {
  constructor() {
    this.activePoolLines = [];
    this.allMasteredFallback = false;
  }

  /**
   * Evaluates if a given repertoire line is considered mastered or completed.
   * Checks explicit line metadata and user progress persistence.
   * @param {Object} line
   * @param {Object} userProgress
   * @returns {boolean}
   */
  isLineMastered(line, userProgress) {
    if (!line) return false;
    if (line.mastered === true || line.completedInLearn === true) return true;
    if (userProgress && typeof userProgress.isLineCompleted === 'function') {
      return Boolean(userProgress.isLineCompleted(line));
    }
    return false;
  }

  /**
   * Returns all unlearned / uncompleted lines in the provided pool.
   * @param {Object[]} lines
   * @param {Object} userProgress
   * @returns {Object[]}
   */
  getUnlearnedLines(lines = [], userProgress = null) {
    if (!Array.isArray(lines)) return [];
    return lines.filter(line => !this.isLineMastered(line, userProgress));
  }

  /**
   * Returns all mastered / completed lines in the provided pool.
   * @param {Object[]} lines
   * @param {Object} userProgress
   * @returns {Object[]}
   */
  getMasteredLines(lines = [], userProgress = null) {
    if (!Array.isArray(lines)) return [];
    return lines.filter(line => this.isLineMastered(line, userProgress));
  }

  /**
   * Determines if all lines in the sub-course pool are already mastered.
   * @param {Object[]} lines
   * @param {Object} userProgress
   * @returns {boolean}
   */
  isModuleFullyMastered(lines = [], userProgress = null) {
    if (!Array.isArray(lines) || lines.length === 0) return false;
    return lines.every(line => this.isLineMastered(line, userProgress));
  }

  /**
   * Finds the index of the first unlearned line in the provided line list.
   * If all lines in the module are already completed, returns index 0 with
   * allMastered = true to allow a graceful review pass.
   *
   * @param {Object[]} lines
   * @param {Object} userProgress
   * @returns {{ index: number, allMastered: boolean, unlearnedCount: number, totalCount: number }}
   */
  findFirstUnlearnedLineIndex(lines = [], userProgress = null) {
    if (!Array.isArray(lines) || lines.length === 0) {
      return { index: -1, allMastered: false, unlearnedCount: 0, totalCount: 0 };
    }

    const totalCount = lines.length;
    const firstUnlearnedIndex = lines.findIndex(line => !this.isLineMastered(line, userProgress));

    if (firstUnlearnedIndex === -1) {
      // All lines are mastered: fallback to line 0 in review mode
      this.allMasteredFallback = true;
      return {
        index: 0,
        allMastered: true,
        unlearnedCount: 0,
        totalCount
      };
    }

    this.allMasteredFallback = false;
    const unlearnedCount = lines.filter(line => !this.isLineMastered(line, userProgress)).length;
    return {
      index: firstUnlearnedIndex,
      allMastered: false,
      unlearnedCount,
      totalCount
    };
  }

  /**
   * Retrieves the next unlearned line index in strictly linear forward order.
   * Advances from currentIdx + 1 forward, then wraps around to check earlier lines.
   * Excludes lines completed in the current training session loop.
   *
   * @param {Object[]} lines - Full sub-course lines list
   * @param {string|null} currentLineId - ID of currently active line
   * @param {Object} userProgress - User progress storage manager
   * @param {Set<string>} completedInSession - Line IDs completed in this active loop
   * @returns {number} Next unlearned line index, or -1 if all lines are mastered / completed
   */
  getNextUnlearnedLineIndex(lines = [], currentLineId = null, userProgress = null, completedInSession = new Set()) {
    if (!Array.isArray(lines) || lines.length === 0) {
      return -1;
    }

    const currentIdx = lines.findIndex(l => l && l.id === currentLineId);
    const startIdx = currentIdx >= 0 ? currentIdx + 1 : 0;

    // 1. Forward search from currentIdx + 1 to end of lines array
    for (let i = startIdx; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const alreadyDone = this.isLineMastered(line, userProgress) || completedInSession.has(line.id);
      if (!alreadyDone) {
        return i;
      }
    }

    // 2. Wrap-around search from index 0 to startIdx - 1
    for (let i = 0; i < startIdx && i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const alreadyDone = this.isLineMastered(line, userProgress) || completedInSession.has(line.id);
      if (!alreadyDone) {
        return i;
      }
    }

    // No pending unlearned lines remain
    return -1;
  }
}
