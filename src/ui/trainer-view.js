/* ============================================================
   TRAINER VIEW (DIRECT COURSE BOARD & UNIFIED MOVE ENGINE)
   ============================================================ */

import { APP_CONFIG } from '../config/settings.js';
import {
  createChessgroundBoard,
  calculateLegalDests,
  clearAmbiguityHints,
  highlightAmbiguityHintSquare
} from '../engine/board-renderer.js';
import { processLineData, isAmbiguousWhiteBranch, isAmbiguousBranch } from '../engine/chess-logic.js';
import {
  resolvePlayerColor,
  evaluatePositionZeroTurnState,
  computeInitialGroundTurnConfig
} from '../engine/game-loop.js';
import { getCourseById } from '../data/courses.js';
import { userProgress } from '../storage/user-progress.js';
import { renderModeDeck } from './mode-selector.js';
import { DrillDeckController } from '../engine/drill-controller.js';

/**
 * Strips all emoji characters from a string for crisp, pure text rendering.
 */
export function stripEmojis(str) {
  if (!str) return '';
  return str.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}]/gu, '').trim();
}

export class TrainerView {
  constructor() {
    this.currentCourse = null;
    this.currentSubCourse = null;
    this.currentLine = null;
    this.moveIndex = 0;
    this.game = new Chess();
    this.board = null;
    this.toastTimer = null;
    
    // Blind streak game mode state
    this.isBlindStreak = false;
    this.currentMode = 'learn'; // 'learn' | 'practice' | 'drill' | 'arena'
    this.streakScore = 0;
    this.blindPool = [];

    // Active CPU turn and glide animation guard
    this.isBlackAnimating = false;
    this.opponentMoveTimeout = null;

    // Multi-Premove Ordered Queue State Engine
    this.premoveQueue = []; // Ordered array of { from, to, promo }

    // Auto-advance 2-second progression loop state
    this.autoAdvanceTimer = null;
    this.autoAdvanceInterval = null;
    this.autoAdvanceSecondsRemaining = 0;
    this.isAutoAdvancing = false;
    this.lineQueue = [];
    this.completedInLoop = new Set();
    this.currentAttemptRegistered = false;
    this.sessionAttempts = 0;
    this.drillDeckController = new DrillDeckController();

    // Unified move execution alias
    this.attemptMove = this.handleUserMove.bind(this);
  }

  /**
   * Registers an attempt for the active line and updates session metrics telemetry.
   * Prevents duplicate attempt inflation during the same line run unless forced.
   * @param {boolean} force
   */
  registerLineAttempt(force = false) {
    if (!this.currentLine || !this.currentLine.id) return;
    if (this.currentAttemptRegistered && !force) return;

    this.currentAttemptRegistered = true;
    this.sessionAttempts = (this.sessionAttempts || 0) + 1;
    userProgress.recordAttempt(this.currentLine.id);
  }

  /**
   * Determines active player color ('white' | 'black') based on current repertoire line/course.
   */
  getPlayerColor() {
    return resolvePlayerColor(this.currentLine, this.currentSubCourse, this.currentCourse);
  }


  /**
   * Returns all lines in the active Sub-Course marked as completed/mastered in Learn Mode.
   */
  getLearnedLines() {
    const activePool = this.currentSubCourse || this.currentCourse;
    if (!activePool || !activePool.lines) return [];
    return activePool.lines.filter(line => {
      if (line.mastered === true || line.completedInLearn === true) return true;
      return userProgress.isLineCompleted(line);
    });
  }

  /**
   * Returns active pool of lines for current training mode.
   * Strictly filters to learned lines when in Practice Mode.
   */
  getActivePoolLines() {
    if (this.currentMode === 'practice') {
      return this.getLearnedLines();
    }
    const activePool = this.currentSubCourse || this.currentCourse;
    return activePool && activePool.lines ? activePool.lines : [];
  }

  /**
   * Initializes the non-repeating line progression queue for the active mode's line pool.
   */
  initLineQueue() {
    const poolLines = this.getActivePoolLines();
    if (!poolLines || poolLines.length === 0) {
      this.lineQueue = [];
      return;
    }

    // Build array of uncompleted line indices in the active pool loop
    this.lineQueue = [];
    poolLines.forEach((line, index) => {
      if (!this.completedInLoop.has(line.id)) {
        this.lineQueue.push(index);
      }
    });

    // If all lines have been completed in this loop, reset loop memory to allow a new loop
    if (this.lineQueue.length === 0) {
      this.completedInLoop.clear();
      this.lineQueue = poolLines.map((_, index) => index);
    }
  }

  /**
   * Retrieves the next available line index in strictly linear sequential order (0 -> 1 -> 2 -> 3...).
   * Advances deterministically to currentLineIndex + 1 without erratic back-tracking or rogue resets.
   * @returns {number} Next sequential line index, or -1 when all lines in the pool are completed.
   */
  getNextLineIndexFromQueue() {
    const poolLines = this.getActivePoolLines();
    if (!poolLines || poolLines.length === 0) {
      return -1;
    }

    // Check if all lines in the active pool have been completed in this session
    if (this.completedInLoop.size >= poolLines.length) {
      return -1;
    }

    // Current line index within the active pool
    const currentIdx = poolLines.findIndex(l => l.id === this.currentLine?.id);

    // 1. Strict linear progression: next immediate sequential line
    const candidateIdx = currentIdx >= 0 ? currentIdx + 1 : 0;

    // Advance to next sequential line if within bounds and not already completed
    if (candidateIdx < poolLines.length && !this.completedInLoop.has(poolLines[candidateIdx].id)) {
      this.lineQueue = this.lineQueue.filter(idx => idx !== candidateIdx);
      return candidateIdx;
    }

    // 2. Check forward sequentially for any remaining uncompleted line
    if (candidateIdx < poolLines.length) {
      for (let i = candidateIdx; i < poolLines.length; i++) {
        if (!this.completedInLoop.has(poolLines[i].id)) {
          this.lineQueue = this.lineQueue.filter(idx => idx !== i);
          return i;
        }
      }
    }

    // 3. Loop back to check if any earlier skipped lines remain
    for (let i = 0; i < poolLines.length; i++) {
      if (!this.completedInLoop.has(poolLines[i].id)) {
        this.lineQueue = this.lineQueue.filter(idx => idx !== i);
        return i;
      }
    }

    // All lines in the active pool have been completed
    return -1;
  }

  /**
   * Cancels any active 2-second auto-advance timers and resets state.
   */
  cancelAutoAdvance() {
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
      this.autoAdvanceTimer = null;
    }
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = null;
    }
    this.isAutoAdvancing = false;
    this.autoAdvanceSecondsRemaining = 0;
  }

  /**
   * Starts 2-second auto-advance countdown upon completing an opening line in Learn or Practice mode.
   */
  triggerAutoAdvance() {
    this.cancelAutoAdvance();
    this.isAutoAdvancing = true;
    this.autoAdvanceSecondsRemaining = 2;

    const updateCountdownText = () => {
      const msg = `Line Completed! Next line loading in ${this.autoAdvanceSecondsRemaining}s...`;
      $('#commentary-text').html(`<strong>${msg}</strong>`);
      this.showToast(msg, 'success');
    };

    updateCountdownText();

    this.autoAdvanceInterval = setInterval(() => {
      this.autoAdvanceSecondsRemaining -= 1;
      if (this.autoAdvanceSecondsRemaining > 0) {
        updateCountdownText();
      }
    }, 1000);

    this.autoAdvanceTimer = setTimeout(() => {
      this.cancelAutoAdvance();

      const poolLines = this.getActivePoolLines();
      const nextIndex = this.getNextLineIndexFromQueue();
      if (nextIndex >= 0 && poolLines && poolLines[nextIndex]) {
        const nextLine = poolLines[nextIndex];
        
        // Synchronize variation dropdown UI selection
        $('#variation-select').val(nextIndex);

        // Load new line starting position with clean state reset
        this.loadLine(nextLine, this.currentMode);
        this.showToast(`Auto-advanced to: ${stripEmojis(nextLine.name)}`, 'success');
      } else {
        // Pool loop completed!
        this.completedInLoop.clear();
        this.initLineQueue();
        const finishMsg = this.currentMode === 'practice'
          ? "Practice Session Completed! You have practiced all your unlocked repertoire lines."
          : "Sub-Course Module Mastered! You have completed all repertoire lines in this module.";
        $('#commentary-text').html(`<strong>${finishMsg}</strong>`);
        this.showToast(this.currentMode === 'practice' ? "Practice Session Completed!" : "Sub-Course Module Mastered!", 'success');
      }
    }, 2000);
  }

  /**
   * Evaluates if White faces an ambiguous branching point and conditionally applies pulsing visual hints.
    * Runs universally across ALL training modes (Learn, Practice, Drill, Arena) when true ambiguity exists.
   */
  checkAndApplyAmbiguityHint() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;
    if (this.game.turn() !== 'w') return;

    const activePool = this.currentSubCourse || this.currentCourse;
    const subCourseLines = activePool ? (activePool.lines || []) : [];
    const moveHistory = this.game.history();

    const isAmbiguous = isAmbiguousBranch(
      this.currentLine,
      this.moveIndex,
      subCourseLines,
      moveHistory,
      this.getPlayerColor()
    );

    if (isAmbiguous) {
      const expected = this.currentLine.moves[this.moveIndex];
      if (expected && this.board && typeof this.board.highlightAmbiguity === 'function') {
        this.board.highlightAmbiguity(expected.from, expected.to);
      }
    }
  }

  /**
   * Multi-Premove Management Engine: queues, clears, and renders ordered premove chains.
   * Premoves are visualized via distinct red square highlights across the chain.
   */
  queuePremove(from, to, promo = 'q') {
    this.premoveQueue = [{ from, to, promo: promo || 'q' }];
    if (this.board && typeof this.board.setPremove === 'function') {
      this.board.setPremove(from, to);
    }
  }

  renderPremoveHighlights() {
    if (!this.board) return;
    if (this.premoveQueue.length > 0 && typeof this.board.highlightPremove === 'function') {
      const move = this.premoveQueue[0];
      if (move && move.from) {
        this.board.highlightPremove(move.from, move.to);
      }
    }
  }

  clearPremove() {
    this.premoveQueue = [];
    if (this.board && typeof this.board.clearPremove === 'function') {
      this.board.clearPremove();
    }
  }

  hasPremoveQueued() {
    return Boolean(
      (this.premoveQueue && this.premoveQueue.length > 0) ||
      (this.board && typeof this.board.hasPremove === 'function' && this.board.hasPremove())
    );
  }

  /**
   * Synchronizes Chessground state (turn, movable colors, and legal destination moves)
   * directly with the underlying chess.js game state and player perspective.
   */
  syncBoardState() {
    if (!this.board) return;
    const playerColor = this.getPlayerColor();
    const isUserTurn = (this.game.turn() === playerColor[0]) && !this.isBlackAnimating;
    const dests = isUserTurn ? calculateLegalDests(this.game) : new Map();
    const activeTurnColor = this.game.turn() === 'w' ? 'white' : 'black';
    if (typeof this.board.syncTurnAndDests === 'function') {
      this.board.syncTurnAndDests(activeTurnColor, dests, playerColor);
    } else {
      this.board.setTurn(activeTurnColor, playerColor);
      this.board.setDests(dests, playerColor);
    }
  }

  /**
   * Dispatches move events triggered natively by Chessground.
   * Maps tap-to-move and drag-and-drop actions directly into the repertoire game loop.
   */
  handleBoardMove(orig, dest, metadata) {
    const playerColor = this.getPlayerColor();
    const isOpponentTurn = (this.game.turn() !== playerColor[0]) || this.isBlackAnimating;
    if (isOpponentTurn) {
      this.queuePremove(orig, dest);
      return;
    }
    this.clearPremove();
    this.handleUserMove(orig, dest);
  }

  /**
   * Safely mounts and configures the Chessground board instance.
   * If the board is already mounted and active in the DOM, reconfigures it in place
   * to eliminate teardown flickers and asynchronous race conditions.
   *
   * @param {string} [fenPosition='start']
   * @param {Function} [onReady=null]
   */
  rebindBoard(fenPosition = 'start', onReady = null) {
    // Explicitly hide catalog/dashboard views so the study view board mounts immediately
    $('#dashboard-view, #subcourse-view').addClass('hidden').removeClass('active');
    $('#study-view').removeClass('hidden').addClass('active');

    const boardEl = document.getElementById('board');
    const playerColor = this.getPlayerColor();
    const initialFen = fenPosition || 'start';

    // If board instance already exists and is properly mounted in the DOM, reuse it directly
    if (this.board && boardEl && boardEl.querySelector('.cg-wrap')) {
      this.board.setFen(initialFen);
      this.board.setOrientation(playerColor);
      this.board.setLastMove(null, null);
      this.board.clearCustomHighlights();
      this.syncBoardState();
      this.initControls();
      if (typeof onReady === 'function') {
        onReady();
      }
      return;
    }

    if (boardEl) {
      boardEl.innerHTML = '';
    }

    if (this.board && typeof this.board.destroy === 'function') {
      try { this.board.destroy(); } catch (e) {}
    }
    this.board = null;

    let attempts = 0;
    const mountBoard = () => {
      const boardWrapper = document.getElementById('board-wrapper');
      const targetBoardEl = document.getElementById('board');

      // Ensure layout dimensions are non-zero before initializing Chessground instance
      if ((!boardWrapper || boardWrapper.clientWidth === 0 || !targetBoardEl) && attempts < 20) {
        attempts++;
        requestAnimationFrame(mountBoard);
        return;
      }

      const isUserTurn = (this.game.turn() === playerColor[0]) && !this.isBlackAnimating;

      this.board = createChessgroundBoard('#board', {
        fen: initialFen,
        orientation: playerColor,
        turnColor: this.game.turn() === 'w' ? 'white' : 'black',
        movableColor: playerColor,
        dests: isUserTurn ? calculateLegalDests(this.game) : new Map(),
        animationDuration: APP_CONFIG.blackMoveSpeed || 300,
        onMove: (orig, dest, metadata) => {
          this.handleBoardMove(orig, dest, metadata);
        },
        onPremoveSet: (orig, dest) => {
          this.queuePremove(orig, dest);
        },
        onPremoveUnset: () => {
          this.clearPremove();
        }
      });

      requestAnimationFrame(() => {
        if (this.board && typeof this.board.resize === 'function') {
          this.board.resize();
        }
      });

      this.bindResizeObserver();

      if (typeof onReady === 'function') {
        onReady();
      }
    };

    requestAnimationFrame(mountBoard);
    this.initControls();
  }


  bindResizeObserver() {
    if (this._resizeObserverBound) return;
    this._resizeObserverBound = true;

    if (typeof window !== 'undefined' && window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.board && typeof this.board.resize === 'function') {
          requestAnimationFrame(() => {
            if (this.board && typeof this.board.resize === 'function') {
              this.board.resize();
            }
          });
        }
      });
      const boardWrapper = document.getElementById('board-wrapper');
      if (boardWrapper) {
        this.resizeObserver.observe(boardWrapper);
      }
    }

    if (typeof window !== 'undefined') {
      $(window).on('resize orientationchange', () => {
        if (this.board && typeof this.board.resize === 'function') {
          this.board.resize();
        }
      });
    }
  }


  initControls() {
    $('#btn-start, #btn-reset, #btn-action-reset, #btn-desktop-reset').off('click').on('click', () => this.resetDrill());
    $('#btn-hint, #btn-action-hint, #btn-desktop-hint').off('click').on('click', () => this.requestHint());
    $('#btn-flip, #btn-action-flip, #btn-desktop-flip').off('click').on('click', () => {
      if (this.board) this.board.flip();
    });

    $('#btn-action-mode').off('click').on('click', (e) => {
      e.stopPropagation();
      this.openModePopover();
    });

    $('#mode-popover-close').off('click').on('click', () => {
      this.closeModePopover();
    });

    // Close mode popover when clicking overlay backdrop outside the card
    $('#mode-popover-overlay').off('click').on('click', (e) => {
      if ($(e.target).is('#mode-popover-overlay')) {
        this.closeModePopover();
      }
    });

    // Close popover on Esc key
    $(document).off('keydown.modePopover').on('keydown.modePopover', (e) => {
      if (e.key === 'Escape' && !$('#mode-popover-overlay').hasClass('hidden')) {
        this.closeModePopover();
      }
    });

    $('#btn-prev').off('click').on('click', () => this.stepPrev());
    $('#btn-next').off('click').on('click', () => this.stepNext());
  }

  openModePopover() {
    const activePool = this.currentSubCourse || this.currentCourse;
    renderModeDeck('mode-popover-deck-container', activePool, userProgress, (selectedMode) => {
      this.selectMode(selectedMode);
    }, this.currentMode, true);
    $('#mode-popover-overlay').removeClass('hidden');
  }

  closeModePopover() {
    $('#mode-popover-overlay').addClass('hidden');
  }

  /**
   * Unified training mode switcher for both desktop mode deck and mobile popover modal.
   */
  selectMode(selectedMode) {
    const activePool = this.currentSubCourse || this.currentCourse;
    this.cancelAutoAdvance();
    this.currentMode = selectedMode;
    this.completedInLoop.clear();
    this.closeModePopover();

    const modeLabels = {
      learn: 'Learn',
      practice: 'Practice',
      drill: 'Drill',
      arena: 'Arena'
    };
    $('#bottom-mode-label').text(modeLabels[selectedMode] || 'Mode');
    $('#coach-mode-badge').text(modeLabels[selectedMode] || 'Active');

    if (selectedMode === 'drill' || selectedMode === 'arena') {
      this.startBlindStreak(activePool, selectedMode);
    } else if (selectedMode === 'practice') {
      this.isBlindStreak = false;
      const learned = this.getLearnedLines();
      this.initLineQueue();
      this.renderVariationDropdown();

      if (learned.length === 0) {
        this.renderPracticeEmptyState();
      } else {
        const lineToLoad = learned.find(l => l.id === this.currentLine?.id) || learned[0];
        this.loadLine(lineToLoad, 'practice');
      }
    } else {
      // Learn mode
      this.isBlindStreak = false;
      this.initLineQueue();
      this.renderVariationDropdown();
      const subLines = (activePool && activePool.lines) ? activePool.lines : [];
      const lineToLoad = subLines.find(l => l.id === this.currentLine?.id) || (subLines[0] || null);
      if (lineToLoad) {
        this.loadLine(lineToLoad, 'learn');
      } else {
        this.resetDrill();
      }
    }

    this.renderModeDeckPanel();
  }

  /**
   * Cleans up active training session timers, streaks, and premoves upon route exit.
   */
  teardownActiveSession() {
    this.cancelAutoAdvance();
    if (this.opponentMoveTimeout) {
      clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = null;
    }
    this.isBlackAnimating = false;
    this.clearPremove();
    this.isBlindStreak = false;
    this.streakScore = 0;
    this.currentMode = 'learn';
    this.completedInLoop.clear();
    this.drillDeckController.reset();
    this.closeModePopover();
    $('#board').css('pointer-events', '');
  }

  /**
   * Loads a Sub-Course module into the trainer view with isolated line pools.
   * Deterministically resets the training mode to default 'learn' on every sub-module entry.
   */
  loadSubCourse(subCourse, lineIndex = 0, parentCourse = null) {
    this.cancelAutoAdvance();
    if (this.opponentMoveTimeout) {
      clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = null;
    }
    this.isBlackAnimating = false;
    this.clearPremove();

    // Deterministically enforce reset to default 'learn' mode upon entering any sub-module
    this.isBlindStreak = false;
    this.streakScore = 0;
    this.currentMode = 'learn';
    this.completedInLoop.clear();
    this.drillDeckController.reset();
    this.currentSubCourse = subCourse;
    this.currentCourse = parentCourse || (subCourse ? getCourseById(subCourse.courseId) : null);

    if (!subCourse || !subCourse.lines || subCourse.lines.length === 0) return;
    this.initLineQueue();

    // Synchronize UI labels for default Learn mode
    $('#bottom-mode-label').text('Learn');
    $('#coach-mode-badge').text('Active Recall');

    this.renderVariationDropdown();
    this.renderModeDeckPanel();

    this.loadLine(subCourse.lines[lineIndex], 'learn');
  }


  loadCourse(course, lineIndex = 0) {
    if (course && course.subCourses && course.subCourses.length > 0) {
      this.loadSubCourse(course.subCourses[0], lineIndex, course);
      return;
    }
    this.loadSubCourse(course, lineIndex, course);
  }

  renderVariationDropdown() {
    const $select = $('#variation-select');
    if (!$select.length) return;

    const poolLines = this.getActivePoolLines();
    $select.empty();

    if (this.currentMode === 'practice' && poolLines.length === 0) {
      $select.append('<option value="" disabled selected>No learned lines unlocked</option>');
      return;
    }

    poolLines.forEach((line, index) => {
      const isCompleted = userProgress.isLineCompleted(line);
      const cleanName = stripEmojis(line.name);
      const label = `${cleanName} ${isCompleted ? '(Mastered)' : ''}`;
      $select.append(`<option value="${index}">${label}</option>`);
    });

    if (this.currentLine) {
      const currentIdx = poolLines.findIndex(l => l.id === this.currentLine.id);
      if (currentIdx >= 0) {
        $select.val(currentIdx);
      }
    }

    $select.off('change').on('change', (e) => {
      const idx = parseInt($(e.target).val(), 10);
      const currentActiveLines = this.getActivePoolLines();
      if (!isNaN(idx) && currentActiveLines[idx]) {
        this.loadLine(currentActiveLines[idx], this.currentMode);
      }
    });
  }

  renderModeDeckPanel() {
    const activePool = this.currentSubCourse || this.currentCourse;
    renderModeDeck('trainer-mode-deck-container', activePool, userProgress, (selectedMode) => {
      this.selectMode(selectedMode);
    }, this.currentMode);

    renderModeDeck('mode-popover-deck-container', activePool, userProgress, (selectedMode) => {
      this.selectMode(selectedMode);
    }, this.currentMode, true);

    const modeLabels = {
      learn: 'Learn',
      practice: 'Practice',
      drill: 'Drill',
      arena: 'Arena'
    };
    $('#bottom-mode-label').text(modeLabels[this.currentMode] || 'Mode');
    $('#coach-mode-badge').text(modeLabels[this.currentMode] || 'Active');
  }

  /**
   * Displays clean empty state card inside Practice Mode when 0 lines are learned.
   */
  renderPracticeEmptyState() {
    this.cancelAutoAdvance();
    this.isBlindStreak = false;
    this.currentLine = null;
    this.rebindBoard('start');

    $('#active-line-category').text('PRACTICE MODE');
    $('#active-line-title').text('No Learned Lines Available');
    $('#line-name').text('No Learned Lines Yet');
    $('#line-eco').text('Practice Mode Locked');
    $('#line-description').text('Practice Mode is dedicated to perfecting lines you have already discovered in Learn Mode.');

    $('#turn-indicator').html('<span class="turn-dot white"></span><span>Complete lines in Learn Mode to unlock Practice!</span>');

    const emptyStateHtml = `
      <div class="empty-state-card practice-empty-state">
        <span class="empty-state-icon">📖</span>
        <h4>No Learned Lines Yet</h4>
        <p>Complete lines in Learn Mode to unlock them for Practice!</p>
        <button id="btn-switch-to-learn" class="card-action-btn primary" style="width: auto; padding: 0.5rem 1.2rem; margin-top: 0.4rem;">
          Switch to Learn Mode &rarr;
        </button>
      </div>
    `;
    $('#commentary-text').html(emptyStateHtml);

    $('#btn-switch-to-learn').off('click').on('click', () => {
      this.currentMode = 'learn';
      this.renderModeDeckPanel();
      this.renderVariationDropdown();
      const activePool = this.currentSubCourse || this.currentCourse;
      const subLines = (activePool && activePool.lines) ? activePool.lines : [];
      if (subLines.length > 0) {
        this.loadLine(subLines[0], 'learn');
      }
    });

    $('#progress-label').text('Lines Mastered: 0 / 0');
    $('#progress-percent').text('0% Mastered');
    $('#progress-bar').css('width', '0%');

    $('#stat-lines').text('0/0');
    $('#stat-accuracy').text('100%');
    $('#stat-attempts').text('0');

    $('#move-history').html('<span class="empty-history">Practice mode requires at least one completed line in Learn Mode.</span>');
    $('#line-step-tree').html('<p class="card-body-text" style="font-style: italic;">No learned variations in this sub-course yet.</p>');
    $('#btn-prev').prop('disabled', true);
    $('#btn-next').prop('disabled', true);
  }

  /**
   * Universal training session initializer for all modes (Learn, Practice, Drill, Arena).
   * Robustly manages player perspective, board orientation, move 0 turn handshake,
   * and automated CPU opening move execution for Black defense repertoires.
   */
  initTrainingSession(targetLine = null, options = {}) {
    this.cancelAutoAdvance();
    if (this.opponentMoveTimeout) {
      clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = null;
    }
    this.isBlackAnimating = false;
    this.clearPremove();
    $('#board').css('pointer-events', '');

    if (targetLine) {
      this.currentLine = processLineData(targetLine);
      if (this.currentLine && this.currentLine.courseId && !this.currentCourse) {
        this.currentCourse = getCourseById(this.currentLine.courseId);
      }
    }

    if (!this.currentLine) return;

    const playerColor = this.getPlayerColor();
    this.game.reset();
    this.moveIndex = 0;

    const onBoardReady = () => {
      if (this.board) {
        this.board.setFen('start');
        this.board.setOrientation(playerColor);
        this.board.setLastMove(null, null);
        this.board.clearCustomHighlights();
      }
      this.clearHighlights();

      this.currentAttemptRegistered = false;
      if (this.currentLine) {
        this.registerLineAttempt();
      }

      this.updateUI();

      if (options.isBlind) {
        const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
        this.showToast(`Blind Streak Active! Current Streak: ${this.streakScore} ${lineUnit}`, 'success');
      } else {
        this.showToast(`Drill started: ${stripEmojis(this.currentLine.name || 'Opening Line')}`, 'success');
      }

      // Turn Handshake at Position 0:
      // When training Black defenses (playerColor === 'black'), position 0 is White's turn ('w').
      // The board locks Black's input and immediately triggers the CPU to execute White's first move!
      const turnState = evaluatePositionZeroTurnState(playerColor, this.game);

      if (turnState.shouldTriggerOpponentFirstMove && this.currentLine.moves && this.currentLine.moves.length > 0) {
        this.isBlackAnimating = true;
        // Lock player input: movable color is black, but dests is empty Map and turnColor is white
        this.syncBoardState();

        this.opponentMoveTimeout = setTimeout(() => {
          this.opponentMoveTimeout = null;
          this.playOpponentMove();
        }, APP_CONFIG.blackDelayMs || 300);
      } else {
        this.isBlackAnimating = false;
        this.syncBoardState();
      }
    };

    if (!this.board || !document.querySelector('#board .cg-wrap')) {
      this.rebindBoard('start', onBoardReady);
    } else {
      onBoardReady();
    }
  }

  /**
   * Starts a drill for the specified line or current line in the active pool.
   */
  startDrill(targetLine = null) {
    if (this.isBlindStreak) {
      this.pickNextBlindLine();
      return;
    }
    const lineToStart = targetLine || this.currentLine;
    this.initTrainingSession(lineToStart, { isBlind: false });
  }

  loadLine(rawLine, mode = 'learn') {
    this.cancelAutoAdvance();
    this.isBlindStreak = false;
    this.currentMode = mode;

    if (!rawLine) {
      if (mode === 'practice' && this.getLearnedLines().length === 0) {
        this.renderPracticeEmptyState();
      }
      return;
    }

    this.initTrainingSession(rawLine, { isBlind: false });
  }

  /**
   * Starts Blind Streak mode exclusively isolated to the active sub-course line pool.
   * In Drill Mode, utilizes the Fisher-Yates round-robin deck cycle for mastered lines.
   */
  startBlindStreak(subCourse, mode) {
    this.cancelAutoAdvance();
    this.isBlindStreak = true;
    this.currentMode = mode;
    this.streakScore = 0;

    const activePool = subCourse || this.currentSubCourse || this.currentCourse;
    if (subCourse) {
      this.currentSubCourse = subCourse;
      if (subCourse.courseId && !this.currentCourse) {
        this.currentCourse = getCourseById(subCourse.courseId);
      }
    }

    if (mode === 'drill') {
      this.drillDeckController.startDeck(activePool, userProgress);
      const progressInfo = this.drillDeckController.getProgressInfo();
      if (progressInfo.isFallback) {
        this.showToast('Exploration Mode: No mastered lines yet. Shuffling all sub-course lines!', 'warning');
      } else {
        this.showToast(`Drill Mode Started • Round 1 (${progressInfo.total} Mastered Lines)`, 'success');
      }
    } else {
      const lines = activePool ? (activePool.lines || []) : [];
      this.blindPool = lines;
      if (this.blindPool.length === 0) {
        alert('No lines available for this mode in this sub-course yet!');
        this.isBlindStreak = false;
        this.currentMode = 'learn';
        this.renderModeDeckPanel();
        this.resetDrill();
        return;
      }
    }

    this.pickNextBlindLine();
  }

  pickNextBlindLine() {
    this.cancelAutoAdvance();
    this.currentAttemptRegistered = false;

    const activePool = this.currentSubCourse || this.currentCourse;

    if (this.currentMode === 'drill') {
      const drillItem = this.drillDeckController.popNextLine(activePool, userProgress);
      if (!drillItem || !drillItem.line) {
        this.showToast('No lines available for Drill Mode!', 'error');
        this.isBlindStreak = false;
        this.currentMode = 'learn';
        this.renderModeDeckPanel();
        this.resetDrill();
        return;
      }

      if (drillItem.isNewRound) {
        this.showToast(`Round ${drillItem.round} Started! Fresh Mastered Line Shuffle.`, 'success');
      }

      this.initTrainingSession(drillItem.line, { isBlind: true });
      return;
    }

    // Arena Mode or generic blind mode
    if (!this.blindPool || this.blindPool.length === 0) {
      const lines = activePool ? (activePool.lines || []) : [];
      this.blindPool = lines;
    }

    if (!this.blindPool || this.blindPool.length === 0) {
      alert('No lines available for this mode in this sub-course yet!');
      this.isBlindStreak = false;
      this.currentMode = 'learn';
      this.renderModeDeckPanel();
      this.resetDrill();
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.blindPool.length);
    const rawLine = this.blindPool[randomIndex];
    this.initTrainingSession(rawLine, { isBlind: true });
  }

  resetDrill() {
    this.currentAttemptRegistered = false;
    if (this.isBlindStreak) {
      this.streakScore = 0;
      if (this.currentMode === 'drill') {
        const activePool = this.currentSubCourse || this.currentCourse;
        this.drillDeckController.startDeck(activePool, userProgress);
      }
      this.pickNextBlindLine();
      return;
    }
    this.initTrainingSession(this.currentLine, { isBlind: false });
  }

  /**
   * STRICT MOVE EXECUTION & FAILURE PENALTY ENGINE
   * Validates user move strictly against the target repertoire line.
   * If incorrect, registers failure penalty immediately and reverts board position.
   */
  handleUserMove(fromSquare, toSquare, promoPiece = 'q', isPremove = false) {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return null;

    if (this.board) {
      this.board.clearCustomHighlights();
    }

    // Ensure active attempt is captured upon user move submission
    if (!this.currentAttemptRegistered && this.currentLine) {
      this.registerLineAttempt();
    }

    const currentMoveIndex = this.moveIndex;
    const expected = this.currentLine.moves[currentMoveIndex];

    // 1. Verify move validity in chess.js
    let testMove = null;
    try {
      testMove = this.game.move({
        from: fromSquare,
        to: toSquare,
        promotion: promoPiece || 'q'
      });
    } catch (e) {
      testMove = null;
    }

    if (!testMove) {
      if (this.board) this.board.setFen(this.game.fen());
      this.showToast('Illegal move!', 'error');
      this.triggerErrorShake();
      this.clearHighlights();
      this.syncBoardState();
      return null;
    }

    // 2. Strict validation against expected repertoire move for the active line
    if (testMove.san !== expected.san) {
      // Revert incorrect move on chess board
      this.game.undo();
      if (this.board) {
        this.board.setFen(this.game.fen());
        this.board.highlightHint(expected.from, expected.to);
      }
      this.triggerErrorShake();
      this.clearHighlights();

      // Ensure attempt was captured before recording mistake penalty
      if (!this.currentAttemptRegistered && this.currentLine) {
        this.registerLineAttempt();
      }

      // Record mistake penalty in progress metrics
      userProgress.recordMistake(this.currentLine.id);

      // In blind streak modes (Drill/Arena), immediately reset streak and terminate the run
      if (this.isBlindStreak) {
        this.streakScore = 0;
        this.updateUI();
        this.onBlindStreakEnd();
        return null;
      }

      // In standard modes, show failure notification and require manual retry
      this.showToast(`Incorrect move! Expected ${expected.san}. Try again!`, 'error');
      this.syncBoardState();
      return null;
    }

    // 3. Move is correct: advance index and update board
    this.moveIndex++;

    if (this.board) {
      if (isPremove) {
        // Premove was waiting in queue: execute hardware-accelerated piece glide onto target
        this.board.move(testMove.from, testMove.to);
      }
      // Resync FEN only on special moves (castling, promotion, en-passant) to avoid DOM teardown flicker
      if (testMove.flags && (testMove.flags.includes('k') || testMove.flags.includes('q') || testMove.flags.includes('p') || testMove.flags.includes('e'))) {
        this.board.setFen(this.game.fen());
      }
    }
    this.triggerSuccessGlow();
    requestAnimationFrame(() => this.updateUI());

    if (this.moveIndex >= this.currentLine.moves.length) {
      this.isBlackAnimating = false;
      this.clearPremove();
      this.syncBoardState();
      $('#board').css('pointer-events', '');
      this.onLineComplete();
      return testMove;
    }

    const playerColor = this.getPlayerColor();
    if (this.game.turn() !== playerColor[0]) {
      this.isBlackAnimating = true;
      this.syncBoardState();
      if (this.opponentMoveTimeout) clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = setTimeout(() => {
        this.opponentMoveTimeout = null;
        this.playOpponentMove();
      }, APP_CONFIG.blackDelayMs || 300);
    }
    return testMove;
  }

  /**
   * Alias for executing the automated opponent response move across any repertoire side.
   */
  playOpponentMove() {
    this.playBlackResponse();
  }

  /**
   * Executes opponent response with a smooth, hardware-accelerated piece glide.
   * Handover to player and premove execution occurs instantaneously (0ms) upon animation completion
   * without intermediate board redraws or synchronous thread blocking.
   */
  playBlackResponse() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) {
      this.isBlackAnimating = false;
      this.clearPremove();
      this.syncBoardState();
      return;
    }

    this.isBlackAnimating = true;

    const oppMoveData = this.currentLine.moves[this.moveIndex];
    this.game.move(oppMoveData.san);
    this.moveIndex++;

    const playerColor = this.getPlayerColor();
    const oppName = playerColor === 'white' ? 'Black' : 'White';
    const oppDot = playerColor === 'white' ? 'black' : 'white';
    $('#turn-indicator').html(`<span class="turn-dot ${oppDot}"></span><span>${oppName} Responding...</span>`);

    // Hardware-accelerated piece glide with Chessground
    if (this.board) {
      this.board.move(oppMoveData.from, oppMoveData.to);
    }

    // Precalculate legal move destinations in parallel during piece animation
    // only if no premove is currently queued
    let precomputedDests = null;
    if (!this.hasPremoveQueued()) {
      precomputedDests = calculateLegalDests(this.game);
    }

    const onComplete = () => {
      // 1. Resync FEN only if a multi-piece special move occurred (castling or promotion)
      if (this.board && (oppMoveData.san.includes('O-O') || oppMoveData.san.includes('='))) {
        this.board.setFen(this.game.fen());
      }

      // Handover CPU animation lock
      this.isBlackAnimating = false;

      // 2. ZERO-LATENCY PREMOVE EXECUTION (0ms Handshake)
      // Check immediately for queued premove to bypass intermediate DOM redraws & dest calculations
      if (this.hasPremoveQueued()) {
        const nextPremove = (this.premoveQueue && this.premoveQueue.length > 0)
          ? this.premoveQueue.shift()
          : (this.board && this.board.getPremove() ? { from: this.board.getPremove()[0], to: this.board.getPremove()[1] } : null);

        this.clearPremove();

        if (nextPremove && this.currentLine && this.moveIndex < this.currentLine.moves.length) {
          const executed = this.handleUserMove(nextPremove.from, nextPremove.to, nextPremove.promo || 'q', true);
          if (executed) {
            // Premove successfully executed! handleUserMove has seamlessly transitioned state
            // and queued the next opponent response or completed the line.
            return;
          }
        }
      }

      // 3. If NO premove was queued (or premove was invalid):
      // Hand control back to the user by synchronizing turn and legal dests in a single batch
      const activeTurn = this.game.turn() === 'w' ? 'white' : 'black';
      const dests = precomputedDests || calculateLegalDests(this.game);
      if (this.board && typeof this.board.syncTurnAndDests === 'function') {
        this.board.syncTurnAndDests(activeTurn, dests, playerColor);
      } else {
        this.syncBoardState();
      }

      // 4. Asynchronously refresh peripheral UI decks (commentary, move tree) outside frame budget
      requestAnimationFrame(() => this.updateUI());

      if (this.moveIndex >= this.currentLine.moves.length) {
        this.isBlackAnimating = false;
        this.clearPremove();
        this.syncBoardState();
        this.onLineComplete();
        return;
      }

      if (this.game.turn() !== playerColor[0]) {
        this.isBlackAnimating = true;
        this.syncBoardState();
        if (this.opponentMoveTimeout) clearTimeout(this.opponentMoveTimeout);
        this.opponentMoveTimeout = setTimeout(() => {
          this.opponentMoveTimeout = null;
          this.playOpponentMove();
        }, APP_CONFIG.blackDelayMs || 300);
      }
    };

    if (this.board && typeof this.board.onAnimationComplete === 'function') {
      this.board.onAnimationComplete(onComplete, (APP_CONFIG.blackMoveSpeed || 400) + 120);
    } else {
      setTimeout(onComplete, APP_CONFIG.blackMoveSpeed || 400);
    }
  }


  requestHint() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;
    const expected = this.currentLine.moves[this.moveIndex];
    this.clearHighlights();

    if (this.board) {
      this.board.highlightHint(expected.from, expected.to);
    }

    if (!this.isBlindStreak) {
      this.showToast(`Hint: Play ${expected.piece.toUpperCase()} to ${expected.to} (${expected.san})`, 'success');
    } else {
      this.showToast(`Hint: Target square is ${expected.to}`, 'success');
    }
  }

  onLineComplete() {
    this.isBlackAnimating = false;
    $('#board').css('pointer-events', '');

    // Ensure attempt was registered for completed line
    if (!this.currentAttemptRegistered && this.currentLine) {
      this.registerLineAttempt();
    }

    if (this.isBlindStreak) {
      this.streakScore++;
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      if (this.currentMode === 'drill') {
        const info = this.drillDeckController.getProgressInfo();
        this.showToast(`Line Cleared! Round ${info.round} (${info.index}/${info.total})`, 'success');
      } else {
        this.showToast(`Line Cleared! Continuing Survival Streak (${this.streakScore} ${lineUnit})!`, 'success');
      }
      this.updateUI();
      setTimeout(() => {
        this.pickNextBlindLine();
      }, 1000);
      return;
    }

    userProgress.markCompleted(this.currentLine.id, this.currentLine.totalHalfMoves / 2);
    if (this.currentLine) {
      this.completedInLoop.add(this.currentLine.id);
    }

    // Immediately trigger reactive header update
    if (window.appInstance && typeof window.appInstance.updateHeaderMetrics === 'function') {
      window.appInstance.updateHeaderMetrics();
    }

    this.renderVariationDropdown();
    this.renderModeDeckPanel();
    this.triggerSuccessGlow();
    this.updateUI();

    // Auto-advance in Learn and Practice modes
    if (this.currentMode === 'learn' || this.currentMode === 'practice') {
      this.triggerAutoAdvance();
    } else {
      this.showToast(`Line Mastered! 100% Complete!`, 'success');
    }
  }

  onBlindStreakEnd() {
    const finalScore = this.streakScore;
    this.streakScore = 0;
    this.updateUI();
    this.triggerErrorShake();
    const lineUnit = finalScore === 1 ? 'Line' : 'Lines';
    this.showToast(`Streak Ended! Final Score: ${finalScore} ${lineUnit}. Resetting to 0.`, 'error');

    setTimeout(() => {
      if (confirm(`Streak Ended!\nFinal Survival Score: ${finalScore} ${lineUnit} Completed.\n\nYour streak has been reset to 0. Would you like to start a new streak run?`)) {
        this.streakScore = 0;
        this.pickNextBlindLine();
      } else {
        this.currentMode = 'learn';
        this.renderModeDeckPanel();
        this.renderVariationDropdown();
        const activePool = this.currentSubCourse || this.currentCourse;
        const subLines = (activePool && activePool.lines) ? activePool.lines : [];
        if (subLines.length > 0) {
          this.loadLine(subLines[0], 'learn');
        }
      }
    }, 400);
  }

  stepPrev() {
    this.cancelAutoAdvance();
    if (this.opponentMoveTimeout) {
      clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = null;
    }
    if (this.moveIndex > 0) {
      this.moveIndex--;
      if (this.game.history().length > 0) this.game.undo();
      if (this.board) {
        this.board.position(this.game.fen());
        this.board.setLastMove(null, null);
      }
      this.syncBoardState();
      this.updateUI();
    }
  }

  stepNext() {
    this.cancelAutoAdvance();
    if (this.opponentMoveTimeout) {
      clearTimeout(this.opponentMoveTimeout);
      this.opponentMoveTimeout = null;
    }
    if (this.currentLine && this.moveIndex < this.currentLine.moves.length) {
      const nextM = this.currentLine.moves[this.moveIndex];
      this.game.move(nextM.san);
      this.moveIndex++;
      if (this.board) {
        this.board.position(this.game.fen());
        this.board.setLastMove(nextM.from, nextM.to);
      }
      this.syncBoardState();
      this.updateUI();
    }
  }

  updateUI() {
    if (!this.currentLine) {
      if (this.currentMode === 'practice' && this.getLearnedLines().length === 0) {
        this.renderPracticeEmptyState();
      }
      return;
    }

    const subTitle = this.currentSubCourse ? stripEmojis(this.currentSubCourse.category || this.currentSubCourse.title) : 'Main Line';
    const activePool = this.currentSubCourse || this.currentCourse;
    const subCourseLines = activePool ? (activePool.lines || []) : [];
    const playerColor = this.getPlayerColor();

    if (this.isBlindStreak) {
      if (this.currentMode === 'drill') {
        const progressInfo = this.drillDeckController.getProgressInfo();
        $('#active-line-category').text(`DRILL MODE • ${progressInfo.label}`);
        $('#active-line-title').text(
          progressInfo.isFallback
            ? 'Exploration Round (0 Mastered Lines)'
            : 'Mastered Deck Shuffle'
        );
      } else {
        $('#active-line-category').text('ARENA MODE');
        $('#active-line-title').text('Master Survival Challenge');
      }
      $('#line-name').text('??? Hidden Line');
      $('#line-eco').text('Blind Recall Test');
      const sideLabel = playerColor === 'black' ? "Black's defense" : "White's repertoire";
      $('#line-description').text(`Identify and execute the correct ${sideLabel} moves without knowing the line name beforehand!`);
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      $('#stat-lines').text(`${this.streakScore} ${lineUnit}`);
    } else {
      if (this.currentMode === 'learn') {
        $('#active-line-category').text(subTitle);
        $('#active-line-title').text(stripEmojis(this.currentLine ? this.currentLine.name : 'Discover New Lines'));
        
        let subCompletedCount = 0;
        subCourseLines.forEach(l => {
          if (userProgress.isLineCompleted(l)) subCompletedCount++;
        });
        $('#stat-lines').text(`${subCompletedCount}/${subCourseLines.length}`);
      } else if (this.currentMode === 'practice') {
        $('#active-line-category').text('PRACTICE MODE');
        $('#active-line-title').text(stripEmojis(this.currentLine ? this.currentLine.name : 'Perfect Learned Lines'));
        
        const learnedLines = this.getLearnedLines();
        const completedLearnedCount = this.completedInLoop.size;
        const totalLearnedCount = learnedLines.length;
        $('#stat-lines').text(`${completedLearnedCount}/${totalLearnedCount}`);
      } else {
        $('#active-line-category').text(subTitle);
        $('#active-line-title').text(stripEmojis(this.currentLine.name));
      }
      $('#line-name').text(stripEmojis(this.currentLine.name));
      $('#line-eco').text(stripEmojis(this.currentLine.eco));
      $('#line-description').text(stripEmojis(this.currentLine.fullAnnotation));
    }

    // Reactive Session Stats Card (#stats-card: Accuracy, Completed, Attempts)
    const currentLineStat = this.currentLine ? userProgress.getLineStat(this.currentLine.id) : null;
    const currentLineAttempts = currentLineStat ? (currentLineStat.attempts || 0) : 0;
    const subAttempts = userProgress.getSubCourseAttempts(subCourseLines);
    const displayAttempts = subAttempts > 0 ? subAttempts : (this.sessionAttempts || currentLineAttempts);
    const $statAttempts = $('#stat-attempts');
    $statAttempts.text(displayAttempts);
    if (typeof $statAttempts.attr === 'function') {
      $statAttempts.attr('title', `Sub-Course Attempts: ${subAttempts} (This variation: ${currentLineAttempts})`);
    }

    const subAccuracy = userProgress.getSubCourseAccuracy(subCourseLines);
    const lineAccuracy = currentLineStat && currentLineStat.accuracy !== undefined ? currentLineStat.accuracy : 100;
    const displayAccuracy = subAccuracy !== undefined ? subAccuracy : lineAccuracy;
    const $statAcc = $('#stat-accuracy');
    $statAcc.text(`${displayAccuracy}%`);
    if (typeof $statAcc.attr === 'function') {
      $statAcc.attr('title', `Sub-Course Avg: ${subAccuracy}% (This variation: ${lineAccuracy}%)`);
    }

    // Calculate line-based progress metrics across the active Sub-Course session
    if (this.isBlindStreak) {
      if (this.currentMode === 'drill') {
        const progressInfo = this.drillDeckController.getProgressInfo();
        const deckPercent = progressInfo.total > 0
          ? Math.round((progressInfo.index / progressInfo.total) * 100)
          : 0;
        $('#progress-label').text(`Deck Progress: Line ${progressInfo.index} / ${progressInfo.total} (Round ${progressInfo.round})`);
        $('#progress-percent').text(`${deckPercent}% Deck Complete`);
        $('#progress-bar').css('width', `${deckPercent}%`);
      } else {
        const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
        $('#progress-label').text(`Survival Streak: ${this.streakScore} ${lineUnit}`);
        $('#progress-percent').text(`${this.streakScore} ${lineUnit} Streak`);
        const streakPercent = Math.min(100, this.streakScore * 20);
        $('#progress-bar').css('width', `${streakPercent}%`);
      }
    } else if (this.currentMode === 'practice') {
      const learnedLines = this.getLearnedLines();
      const completedPracticeLines = this.completedInLoop.size;
      const totalLearnedLines = learnedLines.length;
      const practicePercent = totalLearnedLines > 0 ? Math.round((completedPracticeLines / totalLearnedLines) * 100) : 0;

      $('#progress-label').text(`Lines Mastered: ${completedPracticeLines} / ${totalLearnedLines}`);
      $('#progress-percent').text(`${practicePercent}% Mastered`);
      $('#progress-bar').css('width', `${practicePercent}%`);
    } else {
      // Learn mode / standard mode
      let completedLines = 0;
      subCourseLines.forEach(l => {
        if (userProgress.isLineCompleted(l)) completedLines++;
      });
      const totalSubCourseLines = subCourseLines.length;
      const progressPercent = totalSubCourseLines > 0 ? Math.round((completedLines / totalSubCourseLines) * 100) : 0;

      $('#progress-label').text(`Lines Mastered: ${completedLines} / ${totalSubCourseLines}`);
      $('#progress-percent').text(`${progressPercent}% Mastered`);
      $('#progress-bar').css('width', `${progressPercent}%`);
    }

    const isPlayerTurn = this.game.turn() === playerColor[0];

    if (isPlayerTurn) {
      const dot = playerColor === 'white' ? 'white' : 'black';
      const capName = playerColor === 'white' ? 'White' : 'Black';
      $('#turn-indicator').html(`<span class="turn-dot ${dot}"></span><span>Your Turn: ${capName}</span>`);
      // Evaluate and trigger on-board ambiguity hint across all training modes
      this.checkAndApplyAmbiguityHint();
    } else {
      const oppDot = playerColor === 'white' ? 'black' : 'white';
      const oppName = playerColor === 'white' ? 'Black' : 'White';
      $('#turn-indicator').html(`<span class="turn-dot ${oppDot}"></span><span>${oppName} Responding...</span>`);
      clearAmbiguityHints('#board');
    }

    let commentary = '';
    if (this.isAutoAdvancing) {
      commentary = `Line Completed! Next line loading in ${this.autoAdvanceSecondsRemaining}s...`;
    } else if (this.isBlindStreak) {
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      const sideLabel = playerColor === 'black' ? "Black's defense" : "White's repertoire";
      if (this.currentMode === 'drill') {
        const progressInfo = this.drillDeckController.getProgressInfo();
        if (progressInfo.isFallback) {
          commentary = `Drilling in <strong>Exploration Mode</strong> (no mastered lines yet). Master lines in Learn Mode to unlock advanced randomized recall!`;
        } else {
          commentary = `Round ${progressInfo.round} • Line ${progressInfo.index} of ${progressInfo.total} (Non-repeating shuffle). Complete ${sideLabel} move without mistakes!`;
        }
      } else {
        commentary = `Survival Streak: <strong>${this.streakScore} ${lineUnit}</strong>. Complete ${sideLabel} line without mistakes!`;
      }
    } else {
      commentary = this.currentLine.annotations[this.moveIndex] || this.currentLine.annotations[this.moveIndex - 1] || this.currentLine.fullAnnotation;
      if (this.moveIndex >= this.currentLine.totalHalfMoves) {
        commentary = "Line Complete! You've mastered all moves in this repertoire variation.";
      }
    }
    $('#commentary-text').html(stripEmojis(commentary));


    this.renderMoveHistory();
    this.renderStepTree();

    const modeLabels = {
      learn: 'Active Recall',
      practice: 'Practice',
      drill: 'Drill Streak',
      arena: 'Arena Survival'
    };
    $('#coach-mode-badge').text(modeLabels[this.currentMode] || 'Active Recall');
    const bottomLabels = {
      learn: 'Learn',
      practice: 'Practice',
      drill: 'Drill',
      arena: 'Arena'
    };
    $('#bottom-mode-label').text(bottomLabels[this.currentMode] || 'Mode');

    $('#btn-prev').prop('disabled', this.moveIndex <= 0);
    $('#btn-next').prop('disabled', this.moveIndex >= this.currentLine.totalHalfMoves);
  }

  renderMoveHistory() {
    const $history = $('#move-history');
    $history.empty();

    if (this.moveIndex === 0) {
      $history.html('<span class="empty-history">No moves played yet. Start drilling!</span>');
      return;
    }

    let html = '';
    for (let i = 0; i < this.moveIndex; i += 2) {
      const moveNum = Math.floor(i / 2) + 1;
      const wMove = this.currentLine.moves[i] ? this.currentLine.moves[i].san : '';
      const bMove = (i + 1 < this.moveIndex && this.currentLine.moves[i + 1]) ? this.currentLine.moves[i + 1].san : '';

      html += `
        <div class="history-pair">
          <span class="move-num">${moveNum}.</span>
          <span class="move-ply ${i === this.moveIndex - 1 ? 'active' : ''}">${wMove}</span>
          ${bMove ? `<span class="move-ply ${i + 1 === this.moveIndex - 1 ? 'active' : ''}">${bMove}</span>` : ''}
        </div>
      `;
    }
    $history.html(html);
  }

  renderStepTree() {
    const $tree = $('#line-step-tree');
    if (!$tree.length || !this.currentLine) return;
    $tree.empty();

    if (this.isBlindStreak) {
      $tree.html('<p class="card-body-text" style="font-style: italic;">Full sequence tree hidden in Blind Streak mode.</p>');
      return;
    }

    let html = '';
    for (let i = 0; i < this.currentLine.moves.length; i += 2) {
      const stepIdx = Math.floor(i / 2) + 1;
      const wSan = this.currentLine.moves[i] ? this.currentLine.moves[i].san : '';
      const bSan = this.currentLine.moves[i + 1] ? this.currentLine.moves[i + 1].san : '';

      const isCompleted = i + 1 < this.moveIndex;
      const isCurrent = i === this.moveIndex || i + 1 === this.moveIndex;

      let rowClass = 'tree-step-row';
      if (isCompleted) rowClass += ' completed';
      if (isCurrent) rowClass += ' current';

      const statusSymbol = isCompleted ? 'OK' : (isCurrent ? 'NOW' : 'NEXT');

      html += `
        <div class="${rowClass}">
          <span class="tree-step-idx">${stepIdx}.</span>
          <span class="tree-step-moves">${wSan} ${bSan}</span>
          <span class="tree-step-status">${statusSymbol}</span>
        </div>
      `;
    }
    $tree.html(html);
  }

  clearHighlights() {
    if (this.board && typeof this.board.clearCustomHighlights === 'function') {
      this.board.clearCustomHighlights();
      if (!this.hasPremoveQueued() && typeof this.board.clearPremove === 'function') {
        this.board.clearPremove();
      }
    }
  }

  highlightSquares(from, to) {
    if (this.board && typeof this.board.setLastMove === 'function') {
      this.board.setLastMove(from, to);
    }
  }

  triggerSuccessGlow() {
    const $glow = $('#board-glow');
    $glow.removeClass('error').addClass('active correct');
    setTimeout(() => $glow.removeClass('active correct'), 700);
  }

  triggerErrorShake() {
    const $glow = $('#board-glow');
    const $wrapper = $('#board-wrapper');

    $glow.removeClass('correct').addClass('active error');
    $wrapper.addClass('neumorphic-shake');

    setTimeout(() => {
      $glow.removeClass('active error');
      $wrapper.removeClass('neumorphic-shake');
    }, 600);
  }

  showToast(message, type) {
    const $toast = $('#status-toast');
    const cleanMsg = stripEmojis(message);
    $('#toast-message').text(cleanMsg);
    $toast.removeClass('hidden success error').addClass(type || 'success');
    $('#toast-icon').addClass('hidden').empty();

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => $toast.addClass('hidden'), APP_CONFIG.toastDurationMs);
  }
}
