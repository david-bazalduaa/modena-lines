/* ============================================================
   TRAINER VIEW & COACH PANEL (SAFE BOARD RE-INIT & BLIND STREAK)
   ============================================================ */

import { APP_CONFIG } from '../config/settings.js';
import { getPieceDataURI } from '../engine/board-renderer.js';
import { processLineData } from '../engine/chess-logic.js';
import { userProgress } from '../storage/user-progress.js';

export class TrainerView {
  constructor() {
    this.currentLine = null;
    this.moveIndex = 0;
    this.game = new Chess();
    this.board = null;
    this.selectedSquare = null;
    this.toastTimer = null;
    
    // Blind streak game mode state
    this.isBlindStreak = false;
    this.currentMode = 'learn'; // 'learn' | 'practice' | 'drill' | 'arena'
    this.streakScore = 0;
    this.blindPool = [];
  }

  /**
   * Safely re-binds and re-initializes chessboard instance to prevent frozen boards or memory leaks.
   */
  rebindBoard(fenPosition) {
    const $boardContainer = $('#board');
    if ($boardContainer.length) {
      $boardContainer.empty();
    }

    this.board = null;

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

    // Unbind previous window resize & click handlers to prevent duplicate listeners
    $(window).off('resize.trainerBoard').on('resize.trainerBoard', () => {
      if (this.board) this.board.resize();
    });

    $('#board').off('click.squareSelect').on('click.squareSelect', '.square-55d63', (e) => {
      const sq = $(e.currentTarget).data('square');
      this.handleSquareClick(sq);
    });

    // Schedule resize after DOM layout stabilization
    setTimeout(() => {
      if (this.board) {
        this.board.resize();
      }
    }, 50);

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

  loadLine(rawLine, mode = 'learn') {
    this.isBlindStreak = false;
    this.currentMode = mode;
    this.currentLine = processLineData(rawLine);
    this.rebindBoard('start');
    this.resetDrill();
  }

  /**
   * Starts a Blind Streak session (Drill Mode / Arena Mode)
   */
  startBlindStreak(course, mode) {
    this.isBlindStreak = true;
    this.currentMode = mode;
    this.streakScore = 0;

    // Filter lines based on mode rules
    if (mode === 'drill') {
      // Pick from learned lines
      this.blindPool = course.lines.filter(line => userProgress.getLineStat(line.id).completed);
    } else {
      // Arena mode picks from all repertoire lines
      this.blindPool = course.lines;
    }

    if (this.blindPool.length === 0) {
      alert('No lines available for this mode yet!');
      return;
    }

    this.pickNextBlindLine();
  }

  pickNextBlindLine() {
    const randomIndex = Math.floor(Math.random() * this.blindPool.length);
    const rawLine = this.blindPool[randomIndex];
    this.currentLine = processLineData(rawLine);
    this.rebindBoard('start');

    this.game.reset();
    this.moveIndex = 0;
    this.selectedSquare = null;
    this.clearHighlights();

    this.updateUI();
    this.showToast(`🔥 Blind Streak Active! Current Streak: ${this.streakScore}`, 'success');
  }

  resetDrill() {
    if (this.isBlindStreak) {
      this.streakScore = 0;
      this.pickNextBlindLine();
      return;
    }

    this.game.reset();
    this.moveIndex = 0;
    this.selectedSquare = null;
    if (this.board) this.board.position('start');
    this.clearHighlights();

    if (this.currentLine) {
      userProgress.recordAttempt(this.currentLine.id);
    }

    this.updateUI();
    this.showToast(`Drill started: ${this.currentLine.name}`, 'success');
  }

  onDragStart(source, piece) {
    if (this.game.game_over()) return false;
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return false;

    if (this.game.turn() !== 'w' || piece.search(/^b/) !== -1) {
      return false;
    }

    this.clearHighlights();
    return true;
  }

  onDrop(source, target) {
    this.clearHighlights();
    if (source === target) return 'snapback';

    const move = this.attemptMove(source, target);
    if (!move) return 'snapback';
  }

  onSnapEnd() {
    if (this.board) this.board.position(this.game.fen());
  }

  /**
   * Dual Move Interaction: Click-to-Select piece & Click-to-Move destination
   */
  handleSquareClick(square) {
    if (!square || !this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;
    if (this.game.turn() !== 'w') return;

    if (!this.selectedSquare) {
      const piece = this.game.get(square);
      if (piece && piece.color === 'w') {
        this.selectedSquare = square;
        this.clearHighlights();
        $(`#board .square-${square}`).addClass('highlight-hint-src');
      }
    } else {
      const src = this.selectedSquare;
      const piece = this.game.get(square);

      if (piece && piece.color === 'w' && src !== square) {
        // Switch selection to another White piece
        this.selectedSquare = square;
        this.clearHighlights();
        $(`#board .square-${square}`).addClass('highlight-hint-src');
      } else {
        this.selectedSquare = null;
        this.clearHighlights();
        if (src !== square) {
          this.attemptMove(src, square);
        }
      }
    }
  }

  attemptMove(fromSq, toSq, promoPiece) {
    const expected = this.currentLine.moves[this.moveIndex];
    const testMove = this.game.move({
      from: fromSq,
      to: toSq,
      promotion: promoPiece || 'q'
    });

    if (!testMove) {
      this.showToast('Illegal move!', 'error');
      this.triggerErrorShake();
      return null;
    }

    if (testMove.san !== expected.san) {
      this.game.undo();
      this.triggerErrorShake();

      if (this.isBlindStreak) {
        this.onBlindStreakEnd();
        return null;
      }

      this.showToast(`Incorrect! Expected ${expected.san}`, 'error');
      userProgress.recordMistake(this.currentLine.id);
      return null;
    }

    // Correct Move!
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

  playBlackResponse() {
    if (!this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;

    const expected = this.currentLine.moves[this.moveIndex];
    const bMove = this.game.move(expected.san);

    if (bMove) {
      this.moveIndex++;
      if (this.board) this.board.position(this.game.fen());
      this.highlightSquares(bMove.from, bMove.to);
      this.updateUI();

      if (this.moveIndex >= this.currentLine.moves.length) {
        this.onLineComplete();
      }
    }
  }

  handleTextMoveSubmit() {
    const val = $('#move-input').val().trim();
    if (!val || !this.currentLine || this.moveIndex >= this.currentLine.moves.length) return;

    if (this.game.turn() !== 'w') {
      this.showToast("Wait for Black's response!", 'error');
      return;
    }

    const expected = this.currentLine.moves[this.moveIndex];
    const testMove = this.game.move(val, { sloppy: true });

    if (!testMove) {
      this.showToast(`Invalid notation: "${val}"`, 'error');
      this.triggerErrorShake();
      return;
    }

    if (testMove.san !== expected.san) {
      this.game.undo();
      this.triggerErrorShake();

      if (this.isBlindStreak) {
        this.onBlindStreakEnd();
        return;
      }

      this.showToast(`Incorrect! Typed ${testMove.san}, expected ${expected.san}`, 'error');
      userProgress.recordMistake(this.currentLine.id);
      return;
    }

    $('#move-input').val('');
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
      this.showToast(`💡 Hint: Play ${expected.piece.toUpperCase()} to ${expected.to} (${expected.san})`, 'success');
    } else {
      this.showToast(`💡 Hint: Target square is ${expected.to}`, 'success');
    }
  }

  onLineComplete() {
    if (this.isBlindStreak) {
      this.showToast(`✨ Line Cleared! Continuing Survival Streak (${this.streakScore} Moves)!`, 'success');
      setTimeout(() => {
        this.pickNextBlindLine();
      }, 1000);
      return;
    }

    userProgress.markCompleted(this.currentLine.id, this.currentLine.totalHalfMoves / 2);
    this.triggerSuccessGlow();
    this.showToast(`🎉 Line Mastered! 100% Complete!`, 'success');
    this.updateUI();
  }

  onBlindStreakEnd() {
    const finalScore = this.streakScore;
    this.showToast(`💥 Streak Ended! Final Survival Score: ${finalScore} Moves`, 'error');

    setTimeout(() => {
      if (confirm(`💥 Streak Ended!\nFinal Survival Score: ${finalScore} Moves.\n\nWould you like to try another blind streak run?`)) {
        this.streakScore = 0;
        this.pickNextBlindLine();
      }
    }, 400);
  }

  stepPrev() {
    if (this.moveIndex > 0) {
      this.moveIndex--;
      if (this.game.history().length > 0) this.game.undo();
      if (this.board) this.board.position(this.game.fen());
      this.updateUI();
    }
  }

  stepNext() {
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
      $('#active-line-title').text(`🔥 ${this.currentMode === 'arena' ? 'Arena Survival' : 'Blind Drill Streak'} (${this.streakScore} Moves)`);
      $('#active-line-category').text('Blind Survival Mode');
      $('#line-name').text(`??? Hidden Line`);
      $('#line-eco').text('Blind Recall Test');
      $('#line-description').text('Identify and execute the correct White repertoire moves without knowing the line name beforehand!');
    } else {
      $('#active-line-title').text(this.currentLine.name);
      $('#active-line-category').text(this.currentLine.category);
      $('#line-name').text(this.currentLine.name);
      $('#line-eco').text(this.currentLine.eco);
      $('#line-description').text(this.currentLine.fullAnnotation);
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
    if (this.isBlindStreak) {
      commentary = `🔥 Survival Streak: <strong>${this.streakScore} Moves</strong>. Play White's repertoire move!`;
    } else {
      commentary = this.currentLine.annotations[this.moveIndex] || this.currentLine.annotations[this.moveIndex - 1] || this.currentLine.fullAnnotation;
      if (this.moveIndex >= this.currentLine.totalHalfMoves) {
        commentary = "🏆 Line Complete! You've mastered all moves in this repertoire variation.";
      }
    }
    $('#commentary-text').html(commentary);

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

      const statusSymbol = isCompleted ? '✅' : (isCurrent ? '👉' : '⚪');

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
    $('#board .square-55d63').removeClass('highlight-last-move highlight-hint-src highlight-hint-dst');
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
    $('#toast-message').text(message);
    $toast.removeClass('hidden success error').addClass(type || 'success');

    if (type === 'error') {
      $('#toast-icon').text('⚠️');
    } else {
      $('#toast-icon').text('✨');
    }

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => $toast.addClass('hidden'), APP_CONFIG.toastDurationMs);
  }
}
