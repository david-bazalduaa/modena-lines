/* ============================================================
   TRAINER VIEW (DIRECT COURSE BOARD & UNIFIED MOVE ENGINE)
   ============================================================ */

import { APP_CONFIG } from '../config/settings.js';
import {
  getPieceDataURI,
  initClickToMove,
  clearBoardHighlights,
  clearBoardHighlightsKeepState,
  clearAmbiguityHints,
  highlightAmbiguityHintSquare,
  highlightBoardSquare,
  highlightPremoveSquares,
  clearPremoveHighlights,
  setSelectedSquare,
  setMoveCooldown,
  isMoveCooldownActive,
  glidePieceOnBoard
} from '../engine/board-renderer.js';
import { processLineData, isAmbiguousWhiteBranch } from '../engine/chess-logic.js';
import { getCourseById } from '../data/courses.js';
import { userProgress } from '../storage/user-progress.js';
import { renderModeDeck } from './mode-selector.js';

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

    // Multi-Premove Ordered Queue State Engine
    this.premoveQueue = []; // Ordered array of { from, to, promo }

    // Auto-advance 2-second progression loop state
    this.autoAdvanceTimer = null;
    this.autoAdvanceInterval = null;
    this.autoAdvanceSecondsRemaining = 0;
    this.isAutoAdvancing = false;
    this.lineQueue = [];
    this.completedInLoop = new Set();

    // Unified move execution alias
    this.attemptMove = this.handleUserMove.bind(this);
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
   * Retrieves the next available line index from the active mode's non-repeating queue.
   */
  getNextLineIndexFromQueue() {
    const poolLines = this.getActivePoolLines();
    if (!poolLines || poolLines.length === 0) {
      return -1;
    }

    if (this.lineQueue.length === 0) {
      this.initLineQueue();
    }

    // Check if the whole active pool loop has been finished
    if (this.completedInLoop.size >= poolLines.length) {
      return -1;
    }

    // Current line index within the active pool
    const currentIdx = poolLines.findIndex(l => l.id === this.currentLine?.id);
    
    // Find next index in queue (avoiding immediate repeat if possible)
    let nextIndexPos = this.lineQueue.findIndex(idx => idx !== currentIdx);
    if (nextIndexPos === -1) nextIndexPos = 0;

    const [nextIndex] = this.lineQueue.splice(nextIndexPos, 1);
    return nextIndex !== undefined ? nextIndex : -1;
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
    clearAmbiguityHints('#board');

    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;
    if (this.game.turn() !== 'w') return;

    const activePool = this.currentSubCourse || this.currentCourse;
    const subCourseLines = activePool ? (activePool.lines || []) : [];
    const moveHistory = this.game.history();

    const isAmbiguous = isAmbiguousWhiteBranch(
      this.currentLine,
      this.moveIndex,
      subCourseLines,
      moveHistory
    );

    if (isAmbiguous) {
      const expected = this.currentLine.moves[this.moveIndex];
      if (expected) {
        highlightAmbiguityHintSquare(expected.from, expected.to, '#board');
      }
    }
  }

  /**
   * Multi-Premove Management Engine: queues, clears, and renders ordered premove chains.
   * Premoves are kept purely visual via red square highlights across the chain.
   */
  queuePremove(from, to, promo = 'q') {
    this.premoveQueue.push({ from, to, promo: promo || 'q' });
    this.renderPremoveHighlights();
  }

  renderPremoveHighlights() {
    clearBoardHighlightsKeepState('#board');
    highlightPremoveSquares(this.premoveQueue, null, '#board');
  }

  clearPremove() {
    this.premoveQueue = [];
    clearPremoveHighlights('#board');
  }

  hasPremoveQueued() {
    return Boolean(this.premoveQueue && this.premoveQueue.length > 0);
  }

  /**
   * Safely re-binds chessboard instance and binds unblocked click-to-move listener.
   */
  rebindBoard(fenPosition) {
    // Explicitly hide catalog/dashboard views so the study view board mounts immediately
    $('#dashboard-view, #subcourse-view').addClass('hidden').removeClass('active');
    $('#study-view').removeClass('hidden').addClass('active');

    const $boardContainer = $('#board');
    if ($boardContainer.length) {
      $boardContainer.empty();
    }

    if (this.board && typeof this.board.destroy === 'function') {
      try { this.board.destroy(); } catch (e) {}
    }
    this.board = null;

    let attempts = 0;
    const mountBoard = () => {
      const boardWrapper = document.getElementById('board-wrapper');
      const boardEl = document.getElementById('board');

      // Ensure layout dimensions are non-zero before initializing chessboard instance
      if ((!boardWrapper || boardWrapper.clientWidth === 0 || !boardEl) && attempts < 20) {
        attempts++;
        requestAnimationFrame(mountBoard);
        return;
      }

      const config = {
        position: fenPosition || 'start',
        draggable: true,
        orientation: APP_CONFIG.defaultOrientation,
        pieceTheme: getPieceDataURI,
        moveSpeed: APP_CONFIG.blackMoveSpeed || 400,
        snapbackSpeed: 50,
        snapSpeed: 25,
        onDragStart: this.onDragStart.bind(this),
        onDrop: this.onDrop.bind(this),
        onSnapEnd: this.onSnapEnd.bind(this)
      };

      this.board = Chessboard('board', config);

      // Unblock and bind native delegated click-to-move and premove handlers
      initClickToMove(
        '#board',
        () => this.game,
        (fromSq, toSq, isPremove) => {
          if (isPremove) {
            this.queuePremove(fromSq, toSq);
          } else {
            this.clearPremove();
            this.handleUserMove(fromSq, toSq);
          }
        },
        () => {
          this.clearPremove();
        }
      );

      requestAnimationFrame(() => {
        if (this.board && typeof this.board.resize === 'function') {
          this.board.resize();
        }
      });

      this.bindResizeObserver();
    };

    requestAnimationFrame(mountBoard);
    this.initControls();
  }

  bindResizeObserver() {
    if (this._resizeObserverBound) return;
    this._resizeObserverBound = true;

    if (window.ResizeObserver) {
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

    $(window).on('resize orientationchange', () => {
      if (this.board && typeof this.board.resize === 'function') {
        this.board.resize();
      }
    });
  }

  initControls() {
    $('#btn-start, #btn-reset, #btn-action-reset').off('click').on('click', () => this.resetDrill());
    $('#btn-hint, #btn-action-hint').off('click').on('click', () => this.requestHint());
    $('#btn-flip, #btn-action-flip').off('click').on('click', () => {
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
   * Loads a Sub-Course module into the trainer view with isolated line pools.
   */
  loadSubCourse(subCourse, lineIndex = 0, parentCourse = null) {
    this.cancelAutoAdvance();
    this.currentSubCourse = subCourse;
    this.currentCourse = parentCourse || (subCourse ? getCourseById(subCourse.courseId) : null);

    if (!subCourse || !subCourse.lines || subCourse.lines.length === 0) return;

    this.completedInLoop.clear();
    this.initLineQueue();

    this.renderVariationDropdown();
    this.renderModeDeckPanel();

    if (this.currentMode === 'practice') {
      const learned = this.getLearnedLines();
      if (learned.length === 0) {
        this.renderPracticeEmptyState();
        return;
      }
      const targetLine = learned[lineIndex] || learned[0];
      this.loadLine(targetLine, 'practice');
    } else {
      this.loadLine(subCourse.lines[lineIndex], this.currentMode);
    }
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

    this.currentLine = processLineData(rawLine);
    this.rebindBoard('start');
    this.resetDrill();
  }

  /**
   * Starts Blind Streak mode exclusively isolated to the active sub-course line pool.
   */
  startBlindStreak(subCourse, mode) {
    this.cancelAutoAdvance();
    this.isBlindStreak = true;
    this.currentMode = mode;
    this.streakScore = 0;

    const activePool = subCourse || this.currentSubCourse || this.currentCourse;
    const lines = activePool ? (activePool.lines || []) : [];

    if (mode === 'drill') {
      this.blindPool = lines.filter(line => userProgress.getLineStat(line.id).completed);
    } else {
      this.blindPool = lines;
    }

    if (this.blindPool.length === 0) {
      alert('No learned lines available for this mode in this sub-course yet!');
      this.isBlindStreak = false;
      this.currentMode = 'learn';
      this.renderModeDeckPanel();
      this.resetDrill();
      return;
    }

    this.pickNextBlindLine();
  }

  pickNextBlindLine() {
    this.cancelAutoAdvance();
    const randomIndex = Math.floor(Math.random() * this.blindPool.length);
    const rawLine = this.blindPool[randomIndex];
    this.currentLine = processLineData(rawLine);
    this.rebindBoard('start');

    this.game.reset();
    this.moveIndex = 0;
    this.clearHighlights();

    this.updateUI();
    const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
    this.showToast(`Blind Streak Active! Current Streak: ${this.streakScore} ${lineUnit}`, 'success');
  }

  resetDrill() {
    this.cancelAutoAdvance();
    this.isBlackAnimating = false;
    this.clearPremove();
    $('#board').css('pointer-events', '');

    if (this.isBlindStreak) {
      this.streakScore = 0;
      this.pickNextBlindLine();
      return;
    }

    this.game.reset();
    this.moveIndex = 0;
    if (this.board) this.board.position('start');
    this.clearHighlights();

    if (this.currentLine) {
      userProgress.recordAttempt(this.currentLine.id);
    }

    this.updateUI();
    this.showToast(`Drill started: ${stripEmojis(this.currentLine ? this.currentLine.name : 'Opening Line')}`, 'success');
  }

  onDragStart(source, piece) {
    if (this.game.game_over()) return false;
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return false;

    // Strict White piece filter: only White pieces can be dragged / premoved
    if (piece.search(/^w/) === -1) {
      return false;
    }

    // Immediately clear ambiguity hint upon user interaction
    clearAmbiguityHints('#board');

    // Instant source hiding: suppress static piece on source square to prevent ghosting during drag
    this.isUserDragging = true;
    this.activeDraggedSource = source;
    $(`#board .square-${source}, #board [data-square="${source}"]`).addClass('premove-dragging-source');

    // Unified Gesture Engine: dragstart automatically overrides prior click-selected square
    clearBoardHighlightsKeepState('#board');
    setSelectedSquare(source);
    highlightBoardSquare(source, 'selected', '#board');

    const legalMoves = this.game.moves({ square: source, verbose: true }) || [];
    legalMoves.forEach(m => highlightBoardSquare(m.to, 'destination', '#board'));

    return true;
  }

  onDrop(source, target) {
    // Release active drag state and remove source suppression
    this.isUserDragging = false;
    $(`#board .square-${source}, #board [data-square="${source}"]`).removeClass('premove-dragging-source');
    if (this.activeDraggedSource) {
      $(`#board .square-${this.activeDraggedSource}, #board [data-square="${this.activeDraggedSource}"]`).removeClass('premove-dragging-source');
      this.activeDraggedSource = null;
    }

    if (source === target) {
      // User tapped/clicked without dragging
      if (this.hasPremoveQueued()) {
        this.clearPremove();
      }
      return 'snapback';
    }

    // Check if it's currently Black's turn or CPU animation is in flight
    const isBlackTurn = this.game.turn() === 'b' || this.isBlackAnimating;

    if (isBlackTurn) {
      // Queue Premove with distinctive red square highlights and snap piece back cleanly
      this.queuePremove(source, target, 'q');
      return 'snapback';
    }

    // User actually dragged piece to a different square on White's turn: execute move immediately
    this.clearPremove();
    this.clearHighlights();
    setSelectedSquare(null);
    setMoveCooldown(120);
    const move = this.handleUserMove(source, target, 'q', true);
    if (!move) return 'snapback';
  }

  onSnapEnd() {
    this.isUserDragging = false;
    if (this.activeDraggedSource) {
      $(`#board .square-${this.activeDraggedSource}, #board [data-square="${this.activeDraggedSource}"]`).removeClass('premove-dragging-source');
      this.activeDraggedSource = null;
    }
    setSelectedSquare(null);

    if (this.board && this.game) {
      const currentPos = this.board.fen();
      const gamePos = this.game.fen();
      if (currentPos !== gamePos) {
        this.board.position(gamePos, false);
      }
    }
  }

  /**
   * STRICT MOVE EXECUTION & FAILURE PENALTY ENGINE
   * Validates user move strictly against the target line.
   * If incorrect, registers failure penalty immediately without auto-correction.
   * Enforces complete selection state and highlight reset upon move completion.
   */
  handleUserMove(fromSquare, toSquare, promoPiece = 'q', isDragDrop = false) {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return null;
    if (this.game.turn() !== 'w') return null;

    // Reset selection state and enforce input cooldown immediately
    setSelectedSquare(null);
    setMoveCooldown(120);

    // Clear ambiguity visual hints and all active selection classes immediately upon user move execution
    clearAmbiguityHints('#board');
    $('#board .square-55d63, #board [data-square]').removeClass(
      'highlight-selected-square highlight-dest-square highlight-selected highlight-target square-selected active-piece premove-dragging-source'
    );

    const currentMoveIndex = this.moveIndex;
    const expected = this.currentLine.moves[currentMoveIndex];

    // 1. Verify move validity in chess.js
    const testMove = this.game.move({
      from: fromSquare,
      to: toSquare,
      promotion: promoPiece || 'q'
    });

    if (!testMove) {
      setSelectedSquare(null);
      setMoveCooldown(120);
      this.showToast('Illegal move!', 'error');
      this.triggerErrorShake();
      this.clearHighlights();
      return null;
    }

    // 2. Strict validation against expected repertoire move for the active line
    if (testMove.san !== expected.san) {
      // Revert incorrect move on chess board
      this.game.undo();
      setSelectedSquare(null);
      setMoveCooldown(120);
      this.triggerErrorShake();
      this.clearHighlights();

      // Highlight expected move coordinates to assist manual retry
      $(`#board .square-${expected.from}`).addClass('highlight-hint-src');
      $(`#board .square-${expected.to}`).addClass('highlight-hint-dst');

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
      return null;
    }

    // 3. Move is correct: advance index, synchronously position board with no interim animation snapback
    this.moveIndex++;

    if (this.board) {
      this.board.position(this.game.fen(), false);
    }
    setSelectedSquare(null);
    setMoveCooldown(120);
    this.highlightSquares(testMove.from, testMove.to);
    this.triggerSuccessGlow();
    this.updateUI();

    if (this.moveIndex >= this.currentLine.moves.length) {
      this.isBlackAnimating = false;
      this.clearPremove();
      $('#board').css('pointer-events', '');
      this.onLineComplete();
      return testMove;
    }

    if (this.game.turn() === 'b') {
      this.isBlackAnimating = true;
      setTimeout(() => this.playBlackResponse(), APP_CONFIG.blackDelayMs || 300);
    }
    return testMove;
  }

  /**
   * Executes Black's opponent response with a clean, ghost-free 400ms piece glide and 300ms human pacing.
   * State synchronization and UI re-renders are scheduled strictly after the animation completes.
   */
  playBlackResponse() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) {
      this.isBlackAnimating = false;
      this.clearPremove();
      return;
    }

    this.isBlackAnimating = true;

    const blackMoveData = this.currentLine.moves[this.moveIndex];
    this.game.move(blackMoveData.san);
    this.moveIndex++;

    // Immediate lightweight state transition (preserve queued premove highlights if active)
    clearAmbiguityHints('#board');
    $('#turn-indicator').html('<span class="turn-dot black"></span><span>Black Responding...</span>');
    if (!this.hasPremoveQueued()) {
      this.highlightSquares(blackMoveData.from, blackMoveData.to);
    }

    const animationDuration = APP_CONFIG.blackMoveSpeed || 400;

    // Execute ghost-free hardware-accelerated piece glide across the board
    glidePieceOnBoard(
      this.board,
      blackMoveData.from,
      blackMoveData.to,
      this.game.fen(),
      animationDuration,
      () => {
        // Handshake callback strictly after piece settles at destination square
        if (this.game.turn() === 'w') {
          this.isBlackAnimating = false;
        }

        // ============================================================
        // MULTI-PREMOVE SEQUENTIAL EXECUTION HANDSHAKE (0ms Instant Delay)
        // ============================================================
        if (this.hasPremoveQueued()) {
          const nextPremove = this.premoveQueue.shift();

          if (this.currentLine && this.moveIndex < this.currentLine.moves.length) {
            const currentMoveIndex = this.moveIndex;
            const expected = this.currentLine.moves[currentMoveIndex];

            // 1. Verify move legality in chess.js
            let testMove = null;
            try {
              testMove = this.game.move({
                from: nextPremove.from,
                to: nextPremove.to,
                promotion: nextPremove.promo || 'q'
              });
            } catch (e) {
              testMove = null;
            }

            if (testMove) {
              if (testMove.san === expected.san) {
                // Correct premove: advance move index, update board directly to final position
                this.moveIndex++;
                if (this.board) {
                  this.board.position(this.game.fen(), false);
                }
                setSelectedSquare(null);
                setMoveCooldown(120);
                this.highlightSquares(testMove.from, testMove.to);
                this.renderPremoveHighlights(); // Re-render remaining queued premoves in the chain
                this.triggerSuccessGlow();
                this.updateUI();

                if (this.moveIndex >= this.currentLine.moves.length) {
                  this.isBlackAnimating = false;
                  this.clearPremove();
                  this.onLineComplete();
                  return true;
                }

                if (this.game.turn() === 'b') {
                  this.isBlackAnimating = true;
                  setTimeout(() => this.playBlackResponse(), APP_CONFIG.blackDelayMs || 300);
                }
                return true; // Signals finishGlide that board was positioned directly
              } else {
                // Incorrect move for the active line: revert move and invalidate whole queue
                this.game.undo();
                this.clearPremove();
                this.triggerErrorShake();
                this.clearHighlights();

                $(`#board .square-${expected.from}`).addClass('highlight-hint-src');
                $(`#board .square-${expected.to}`).addClass('highlight-hint-dst');
                userProgress.recordMistake(this.currentLine.id);

                if (this.isBlindStreak) {
                  this.streakScore = 0;
                  this.updateUI();
                  this.onBlindStreakEnd();
                  return false;
                }

                this.showToast(`Incorrect premove! Expected ${expected.san}. Try again!`, 'error');
              }
            } else {
              // Move is illegal in current position (e.g. CPU took piece or blocked): flush queue
              this.clearPremove();
            }
          } else {
            this.clearPremove();
          }
        }

        this.updateUI();

        if (this.moveIndex >= this.currentLine.moves.length) {
          this.isBlackAnimating = false;
          this.clearPremove();
          this.onLineComplete();
          return false;
        }

        if (this.game.turn() === 'b') {
          setTimeout(() => this.playBlackResponse(), APP_CONFIG.blackDelayMs || 300);
        }

        return false;
      }
    );
  }

  requestHint() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;
    const expected = this.currentLine.moves[this.moveIndex];
    this.clearHighlights();

    $(`#board .square-${expected.from}`).addClass('highlight-hint-src');
    $(`#board .square-${expected.to}`).addClass('highlight-hint-dst');

    if (!this.isBlindStreak) {
      this.showToast(`Hint: Play ${expected.piece.toUpperCase()} to ${expected.to} (${expected.san})`, 'success');
    } else {
      this.showToast(`Hint: Target square is ${expected.to}`, 'success');
    }
  }

  onLineComplete() {
    this.isBlackAnimating = false;
    $('#board').css('pointer-events', '');

    if (this.isBlindStreak) {
      this.streakScore++;
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      this.showToast(`Line Cleared! Continuing Survival Streak (${this.streakScore} ${lineUnit})!`, 'success');
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
    if (this.moveIndex > 0) {
      this.moveIndex--;
      if (this.game.history().length > 0) this.game.undo();
      if (this.board) this.board.position(this.game.fen());
      this.updateUI();
    }
  }

  stepNext() {
    this.cancelAutoAdvance();
    if (this.currentLine && this.moveIndex < this.currentLine.moves.length) {
      const nextM = this.currentLine.moves[this.moveIndex];
      this.game.move(nextM.san);
      this.moveIndex++;
      if (this.board) this.board.position(this.game.fen());
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

    if (this.isBlindStreak) {
      if (this.currentMode === 'drill') {
        $('#active-line-category').text('DRILL MODE');
        $('#active-line-title').text('Blind Streak Challenge');
      } else {
        $('#active-line-category').text('ARENA MODE');
        $('#active-line-title').text('Master Survival Challenge');
      }
      $('#line-name').text('??? Hidden Line');
      $('#line-eco').text('Blind Recall Test');
      $('#line-description').text('Identify and execute the correct White repertoire moves without knowing the line name beforehand!');
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

    // Calculate line-based progress metrics across the active Sub-Course session
    if (this.isBlindStreak) {
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      $('#progress-label').text(`Survival Streak: ${this.streakScore} ${lineUnit}`);
      $('#progress-percent').text(`${this.streakScore} ${lineUnit} Streak`);
      const streakPercent = Math.min(100, this.streakScore * 20);
      $('#progress-bar').css('width', `${streakPercent}%`);
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

    if (this.game.turn() === 'w') {
      $('#turn-indicator').html('<span class="turn-dot white"></span><span>Your Turn: White</span>');
      // Evaluate and trigger on-board ambiguity hint across all training modes
      this.checkAndApplyAmbiguityHint();
    } else {
      $('#turn-indicator').html('<span class="turn-dot black"></span><span>Black Responding...</span>');
      clearAmbiguityHints('#board');
    }

    let commentary = '';
    if (this.isAutoAdvancing) {
      commentary = `Line Completed! Next line loading in ${this.autoAdvanceSecondsRemaining}s...`;
    } else if (this.isBlindStreak) {
      const lineUnit = this.streakScore === 1 ? 'Line' : 'Lines';
      commentary = `Survival Streak: <strong>${this.streakScore} ${lineUnit}</strong>. Complete White's repertoire line without mistakes!`;
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
    $tree.empty();

    if (this.isBlindStreak) {
      $tree.html('<p class="card-body-text" style="font-style: italic;">Full sequence tree hidden in Blind Streak mode.</p>');
      return;
    }

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

      const html = `
        <div class="${rowClass}">
          <span class="tree-step-idx">${stepIdx}.</span>
          <span class="tree-step-moves">${wSan} ${bSan}</span>
          <span class="tree-step-status">${statusSymbol}</span>
        </div>
      `;
      $tree.append(html);
    }
  }

  clearHighlights() {
    setSelectedSquare(null);
    clearBoardHighlights('#board');
    clearAmbiguityHints('#board');
    if (!this.hasPremoveQueued()) {
      clearPremoveHighlights('#board');
    }
    $('#board .square-55d63, #board [data-square]').removeClass(
      'highlight-last-move highlight-selected-square highlight-dest-square highlight-selected highlight-target highlight-hint-src highlight-hint-dst square-hint highlight-ambiguity-hint square-selected active-piece premove-dragging-source'
    );
  }

  highlightSquares(from, to) {
    this.clearHighlights();
    $(`#board .square-${from}`).addClass('highlight-last-move');
    $(`#board .square-${to}`).addClass('highlight-last-move');
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
