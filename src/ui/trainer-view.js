/* ============================================================
   TRAINER VIEW (DIRECT COURSE BOARD & UNIFIED MOVE ENGINE)
   ============================================================ */

import { APP_CONFIG } from '../config/settings.js';
import {
  getPieceDataURI,
  initClickToMove,
  clearBoardHighlights,
  clearBoardHighlightsKeepState,
  highlightBoardSquare,
  setSelectedSquare
} from '../engine/board-renderer.js';
import { processLineData } from '../engine/chess-logic.js';
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
   * Initializes the non-repeating line progression queue for the active course loop.
   */
  initLineQueue() {
    if (!this.currentCourse || !this.currentCourse.lines) {
      this.lineQueue = [];
      return;
    }

    // Build array of uncompleted line indices in the current course loop
    this.lineQueue = [];
    this.currentCourse.lines.forEach((line, index) => {
      if (!this.completedInLoop.has(line.id)) {
        this.lineQueue.push(index);
      }
    });

    // If all lines have been completed in this loop, reset loop memory to allow a new loop
    if (this.lineQueue.length === 0) {
      this.completedInLoop.clear();
      this.lineQueue = this.currentCourse.lines.map((_, index) => index);
    }
  }

  /**
   * Retrieves the next available line index from the non-repeating queue.
   */
  getNextLineIndexFromQueue() {
    if (!this.currentCourse || !this.currentCourse.lines || this.currentCourse.lines.length === 0) {
      return -1;
    }

    if (this.lineQueue.length === 0) {
      this.initLineQueue();
    }

    // Check if the whole course loop has been finished
    if (this.completedInLoop.size >= this.currentCourse.lines.length) {
      return -1; // Indicates full course loop completion
    }

    // Current line index
    const currentIdx = this.currentCourse.lines.findIndex(l => l.id === this.currentLine?.id);
    
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

      const nextIndex = this.getNextLineIndexFromQueue();
      if (nextIndex >= 0 && this.currentCourse && this.currentCourse.lines[nextIndex]) {
        const nextLine = this.currentCourse.lines[nextIndex];
        
        // Synchronize variation dropdown UI selection
        $('#variation-select').val(nextIndex);

        // Load new line starting position with clean state reset
        this.loadLine(nextLine, this.currentMode);
        this.showToast(`Auto-advanced to: ${stripEmojis(nextLine.name)}`, 'success');
      } else {
        // Course loop completed!
        this.completedInLoop.clear();
        this.initLineQueue();
        const finishMsg = "Course Loop Mastered! You have completed all repertoire lines in this course.";
        $('#commentary-text').html(`<strong>${finishMsg}</strong>`);
        this.showToast("Course Loop Mastered!", 'success');
      }
    }, 2000);
  }

  /**
   * Safely re-binds chessboard instance and binds unblocked click-to-move listener.
   */
  rebindBoard(fenPosition) {
    const $boardContainer = $('#board');
    if ($boardContainer.length) {
      $boardContainer.empty();
    }

    if (this.board && typeof this.board.destroy === 'function') {
      try { this.board.destroy(); } catch (e) {}
    }
    this.board = null;

    setTimeout(() => {
      const config = {
        position: fenPosition || 'start',
        draggable: true,
        orientation: APP_CONFIG.defaultOrientation,
        pieceTheme: getPieceDataURI,
        onDragStart: this.onDragStart.bind(this),
        onDrop: this.onDrop.bind(this),
        onSnapEnd: this.onSnapEnd.bind(this)
      };

      this.board = Chessboard('board', config);

      // Unblock and bind native delegated click-to-move handler
      initClickToMove('#board', () => this.game, (fromSq, toSq) => {
        this.handleUserMove(fromSq, toSq);
      });

      if (this.board) {
        this.board.resize();
      }
    }, 100);

    this.initControls();
  }

  initControls() {
    $('#submit-move-btn').off('click').on('click', () => this.handleTextMoveSubmit());
    $('#move-input').off('keydown').on('keydown', (e) => {
      if (e.key === 'Enter') this.handleTextMoveSubmit();
    });

    $('#btn-start').off('click').on('click', () => this.resetDrill());
    $('#btn-hint').off('click').on('click', () => this.requestHint());
    $('#btn-reset').off('click').on('click', () => this.resetDrill());
    $('#btn-flip').off('click').on('click', () => {
      if (this.board) this.board.flip();
    });

    $('#btn-prev').off('click').on('click', () => this.stepPrev());
    $('#btn-next').off('click').on('click', () => this.stepNext());
  }

  loadCourse(course, lineIndex = 0) {
    this.cancelAutoAdvance();
    this.currentCourse = course;
    if (!course || !course.lines || course.lines.length === 0) return;

    this.completedInLoop.clear();
    this.initLineQueue();

    this.renderVariationDropdown();
    this.renderModeDeckPanel();
    this.loadLine(course.lines[lineIndex]);
  }

  renderVariationDropdown() {
    const $select = $('#variation-select');
    if (!$select.length || !this.currentCourse) return;

    $select.empty();
    this.currentCourse.lines.forEach((line, index) => {
      const st = userProgress.getLineStat(line.id);
      const cleanName = stripEmojis(line.name);
      const label = `${cleanName} ${st.completed ? '(Mastered)' : ''}`;
      $select.append(`<option value="${index}">${label}</option>`);
    });

    $select.off('change').on('change', (e) => {
      const idx = parseInt($(e.target).val(), 10);
      if (!isNaN(idx) && this.currentCourse.lines[idx]) {
        this.loadLine(this.currentCourse.lines[idx], this.currentMode);
      }
    });
  }

  renderModeDeckPanel() {
    renderModeDeck('trainer-mode-deck-container', this.currentCourse, userProgress, (selectedMode) => {
      this.cancelAutoAdvance();
      this.currentMode = selectedMode;
      if (selectedMode === 'drill' || selectedMode === 'arena') {
        this.startBlindStreak(this.currentCourse, selectedMode);
      } else {
        this.isBlindStreak = false;
        this.resetDrill();
      }
    }, this.currentMode);
  }

  loadLine(rawLine, mode = 'learn') {
    this.cancelAutoAdvance();
    this.isBlindStreak = false;
    this.currentMode = mode;
    this.currentLine = processLineData(rawLine);
    this.rebindBoard('start');
    this.resetDrill();
  }

  startBlindStreak(course, mode) {
    this.cancelAutoAdvance();
    this.isBlindStreak = true;
    this.currentMode = mode;
    this.streakScore = 0;

    if (mode === 'drill') {
      this.blindPool = course.lines.filter(line => userProgress.getLineStat(line.id).completed);
    } else {
      this.blindPool = course.lines;
    }

    if (this.blindPool.length === 0) {
      alert('No learned lines available for this mode yet!');
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
    this.showToast(`Blind Streak Active! Current Streak: ${this.streakScore}`, 'success');
  }

  resetDrill() {
    this.cancelAutoAdvance();
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
    this.showToast(`Drill started: ${stripEmojis(this.currentLine.name)}`, 'success');
  }

  onDragStart(source, piece) {
    if (this.game.game_over()) return false;
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return false;

    if (this.game.turn() !== 'w' || piece.search(/^b/) !== -1) {
      return false;
    }

    // Synchronize selection state and legal destination highlights during drag
    setSelectedSquare(source);
    clearBoardHighlightsKeepState('#board');
    highlightBoardSquare(source, 'selected', '#board');

    const legalMoves = this.game.moves({ square: source, verbose: true }) || [];
    legalMoves.forEach(m => highlightBoardSquare(m.to, 'destination', '#board'));

    return true;
  }

  onDrop(source, target) {
    if (source === target) {
      // User tapped/clicked without dragging: preserve click-to-move highlights!
      return 'snapback';
    }

    // User actually dragged piece to a different square
    this.clearHighlights();
    const move = this.handleUserMove(source, target);
    if (!move) return 'snapback';
  }

  onSnapEnd() {
    if (this.board) this.board.position(this.game.fen());
  }

  /**
   * UNIFIED MOVE EXECUTION PIPELINE
   * All user moves (Drag-and-Drop, Click-to-Move, and SAN Input) flow through this single method.
   */
  handleUserMove(fromSquare, toSquare, promoPiece = 'q') {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return null;
    if (this.game.turn() !== 'w') return null;

    const expected = this.currentLine.moves[this.moveIndex];

    // 1. Verify move validity in chess.js
    const testMove = this.game.move({
      from: fromSquare,
      to: toSquare,
      promotion: promoPiece || 'q'
    });

    if (!testMove) {
      this.showToast('Illegal move!', 'error');
      this.triggerErrorShake();
      this.clearHighlights();
      return null;
    }

    // 2. Compare against expected repertoire move for active line
    if (testMove.san !== expected.san) {
      this.game.undo();
      this.triggerErrorShake();
      this.clearHighlights();

      // Highlight expected move coordinates
      $(`#board .square-${expected.from}`).addClass('highlight-hint-src');
      $(`#board .square-${expected.to}`).addClass('highlight-hint-dst');

      if (this.isBlindStreak) {
        this.onBlindStreakEnd();
        return null;
      }

      this.showToast(`Incorrect! Expected ${expected.san}`, 'error');
      userProgress.recordMistake(this.currentLine.id);
      return null;
    }

    // 3. Move is correct: advance index, play feedback, update UI, and trigger Black response
    this.moveIndex++;
    if (this.isBlindStreak) {
      this.streakScore++;
    }

    if (this.board) this.board.position(this.game.fen());
    this.highlightSquares(testMove.from, testMove.to);
    this.triggerSuccessGlow();
    this.updateUI();

    if (this.moveIndex >= this.currentLine.moves.length) {
      this.onLineComplete();
      return testMove;
    }

    if (this.game.turn() === 'b') {
      setTimeout(() => this.playBlackResponse(), APP_CONFIG.blackDelayMs);
    }
    return testMove;
  }

  handleTextMoveSubmit() {
    const $input = $('#move-input');
    const sanText = $input.val().trim();
    if (!sanText || !this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;

    $input.val('');

    // Pre-validate SAN move
    const testMove = this.game.move(sanText, { sloppy: true });
    if (!testMove) {
      this.showToast(`Invalid move notation: "${sanText}"`, 'error');
      this.triggerErrorShake();
      return;
    }

    // Undo temporary move so it routes through unified handleUserMove
    this.game.undo();
    this.handleUserMove(testMove.from, testMove.to, testMove.promotion);
  }

  playBlackResponse() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;

    const blackMoveData = this.currentLine.moves[this.moveIndex];
    this.game.move(blackMoveData.san);
    this.moveIndex++;

    if (this.board) this.board.position(this.game.fen());
    this.highlightSquares(blackMoveData.from, blackMoveData.to);
    this.updateUI();

    if (this.moveIndex >= this.currentLine.moves.length) {
      this.onLineComplete();
      return;
    }

    if (this.game.turn() === 'b') {
      setTimeout(() => this.playBlackResponse(), APP_CONFIG.blackDelayMs);
    }
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
    if (this.isBlindStreak) {
      this.showToast(`Line Cleared! Continuing Survival Streak (${this.streakScore} Moves)!`, 'success');
      setTimeout(() => {
        this.pickNextBlindLine();
      }, 1000);
      return;
    }

    userProgress.markCompleted(this.currentLine.id, this.currentLine.totalHalfMoves / 2);
    if (this.currentLine) {
      this.completedInLoop.add(this.currentLine.id);
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
    this.showToast(`Streak Ended! Final Survival Score: ${finalScore} Moves`, 'error');

    setTimeout(() => {
      if (confirm(`Streak Ended!\nFinal Survival Score: ${finalScore} Moves.\n\nWould you like to try another blind streak run?`)) {
        this.streakScore = 0;
        this.pickNextBlindLine();
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
    if (!this.currentLine) return;

    if (this.isBlindStreak) {
      if (this.currentMode === 'drill') {
        $('#active-line-category').text('DRILL MODE');
        $('#active-line-title').text('Blind Streak Challenge');
      } else {
        $('#active-line-category').text('ARENA MODE');
        $('#active-line-title').text('Master Survival Challenge');
      }
      $('#line-name').text(`??? Hidden Line`);
      $('#line-eco').text('Blind Recall Test');
      $('#line-description').text('Identify and execute the correct White repertoire moves without knowing the line name beforehand!');
    } else {
      if (this.currentMode === 'learn') {
        $('#active-line-category').text('LEARN MODE');
        $('#active-line-title').text(stripEmojis(this.currentLine ? this.currentLine.name : 'Discover New Lines'));
      } else if (this.currentMode === 'practice') {
        $('#active-line-category').text('PRACTICE MODE');
        $('#active-line-title').text(stripEmojis(this.currentLine ? this.currentLine.name : 'Perfect Learned Lines'));
      } else {
        $('#active-line-category').text(stripEmojis(this.currentLine.category));
        $('#active-line-title').text(stripEmojis(this.currentLine.name));
      }
      $('#line-name').text(stripEmojis(this.currentLine.name));
      $('#line-eco').text(stripEmojis(this.currentLine.eco));
      $('#line-description').text(stripEmojis(this.currentLine.fullAnnotation));
    }

    const currentMoveNum = Math.floor(this.moveIndex / 2);
    const totalMovesNum = Math.ceil(this.currentLine.totalHalfMoves / 2);
    const percent = Math.min(100, Math.round((this.moveIndex / this.currentLine.totalHalfMoves) * 100));

    $('#progress-label').text(`Move ${currentMoveNum} / ${totalMovesNum}`);
    $('#progress-percent').text(`${percent}% Mastered`);
    $('#progress-bar').css('width', percent + '%');

    if (this.game.turn() === 'w') {
      $('#turn-indicator').html('<span class="turn-dot white"></span><span>Your Turn: White</span>');
    } else {
      $('#turn-indicator').html('<span class="turn-dot black"></span><span>Black Responding...</span>');
    }

    let commentary = '';
    if (this.isAutoAdvancing) {
      commentary = `Line Completed! Next line loading in ${this.autoAdvanceSecondsRemaining}s...`;
    } else if (this.isBlindStreak) {
      commentary = `Survival Streak: <strong>${this.streakScore} Moves</strong>. Play White's repertoire move!`;
    } else {
      commentary = this.currentLine.annotations[this.moveIndex] || this.currentLine.annotations[this.moveIndex - 1] || this.currentLine.fullAnnotation;
      if (this.moveIndex >= this.currentLine.totalHalfMoves) {
        commentary = "Line Complete! You've mastered all moves in this repertoire variation.";
      }
    }
    $('#commentary-text').html(stripEmojis(commentary));

    this.renderMoveHistory();
    this.renderStepTree();

    const st = userProgress.getLineStat(this.currentLine.id);
    $('#stat-accuracy').text((st.accuracy !== undefined ? st.accuracy : 100) + '%');
    $('#stat-attempts').text(st.attempts || 0);

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
    clearBoardHighlights('#board');
    $('#board .square-55d63').removeClass('highlight-last-move');
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
