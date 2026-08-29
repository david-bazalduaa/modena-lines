/* ============================================================
   EMBEDDED NATIVE SVG CHESS PIECE ENGINE & BOARD RENDERER
   ============================================================ */

export const SVG_PIECES = {
  wP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-5.41 3.48-5.41 7.47h19c0-3.99-2.41-6.41-5.41-7.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#ffffff" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  wN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#ffffff" stroke="#1b1c20" stroke-width="1.5"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,8.5 C 14.5,9.5 16.5,9.5 16.5,9.5 C 17,8.5 16.5,7.5 16.5,7.5 C 17,7.5 18.5,8.5 19,9.5 C 20,9.5 21,9.5 21,9.5 C 21.5,8.5 22,8.5 22,8.5 C 22.5,9.5 21,10.5 22,10.5 C 22.5,10.5 23,9.5 24,9.5 Z" fill="#ffffff" stroke="#1b1c20" stroke-width="1.5"/><circle cx="15" cy="15" r="1.5" fill="#1b1c20"/></svg>`,
  wB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#ffffff" stroke-linecap="butt"><path d="M9 36c1.2-2.5 7-4 13.5-4 6.5 0 12.3 1.5 13.5 4H9z"/><path d="M15 32c2.5-4.5 4.5-7 7.5-13 3 6 5 8.5 7.5 13H15z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M22.5 21v10" fill="none"/><path d="M22.5 10a5 5 0 0 0-5 5c0 3 2.5 5 5 8 2.5-3 5-5 5-8a5 5 0 0 0-5-5z" fill="#ffffff"/></g></svg>`,
  wR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#ffffff" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36h21l-1.5-21h-18L12 36zM11 15h23v-5h-3v2h-4v-2h-5v2h-4v-2h-4v2h-3v-2z"/><path d="M11 10h23" fill="none"/></g></svg>`,
  wQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#ffffff" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-1.5 21.5-1.5 27 0l2.5-12.5L31 25l-8.5-16.5L14 25 6.5 13.5 9 26z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5h24s0-1.5-1.5-2.5c-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4H9z"/></g></svg>`,
  wK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25c4.5 0 8-3.5 8-8 0-3-2.5-6-5.5-7h-5C17 11 14.5 14 14.5 17c0 4.5 3.5 8 8 8z" fill="#ffffff"/><path d="M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-4-1-5 2.5-7.5 2-3.5-.5-4-5-9.5-5s-6 4.5-9.5 5c-2.5.5-3.5-3-7.5-2-3 6 6 10.5 6 10.5v7z" fill="#ffffff"/><path d="M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>`,

  bP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-5.41 3.48-5.41 7.47h19c0-3.99-2.41-6.41-5.41-7.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#2d3038" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round"/><path d="M12 33h21v2H12z" fill="#ffffff" opacity="0.25"/></svg>`,
  bN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#2d3038" stroke="#1b1c20" stroke-width="1.5"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,8.5 C 14.5,9.5 16.5,9.5 16.5,9.5 C 17,8.5 16.5,7.5 16.5,7.5 C 17,7.5 18.5,8.5 19,9.5 C 20,9.5 21,9.5 21,9.5 C 21.5,8.5 22,8.5 22,8.5 C 22.5,9.5 21,10.5 22,10.5 C 22.5,10.5 23,9.5 24,9.5 Z" fill="#2d3038" stroke="#1b1c20" stroke-width="1.5"/><circle cx="15" cy="15" r="1.5" fill="#ffffff"/></svg>`,
  bB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#2d3038" stroke-linecap="butt"><path d="M9 36c1.2-2.5 7-4 13.5-4 6.5 0 12.3 1.5 13.5 4H9z"/><path d="M15 32c2.5-4.5 4.5-7 7.5-13 3 6 5 8.5 7.5 13H15z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M22.5 21v10" stroke="#ffffff" fill="none"/><path d="M22.5 10a5 5 0 0 0-5 5c0 3 2.5 5 5 8 2.5-3 5-5 5-8a5 5 0 0 0-5-5z" fill="#2d3038"/></g></svg>`,
  bR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#2d3038" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36h21l-1.5-21h-18L12 36zM11 15h23v-5h-3v2h-4v-2h-5v2h-4v-2h-4v2h-3v-2z"/><path d="M11 10h23" fill="none" stroke="#ffffff" opacity="0.3"/></g></svg>`,
  bQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#2d3038" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-1.5 21.5-1.5 27 0l2.5-12.5L31 25l-8.5-16.5L14 25 6.5 13.5 9 26z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5h24s0-1.5-1.5-2.5c-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4H9z"/></g></svg>`,
  bK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#1b1c20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25c4.5 0 8-3.5 8-8 0-3-2.5-6-5.5-7h-5C17 11 14.5 14 14.5 17c0 4.5 3.5 8 8 8z" fill="#2d3038"/><path d="M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-4-1-5 2.5-7.5 2-3.5-.5-4-5-9.5-5s-6 4.5-9.5 5c-2.5.5-3.5-3-7.5-2-3 6 6 10.5 6 10.5v7z" fill="#2d3038"/><path d="M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0" stroke="#ffffff" opacity="0.3"/></g></svg>`
};

/**
 * Returns data-URI for embedded SVG piece graphic.
 */
export function getPieceDataURI(piece) {
  if (SVG_PIECES[piece]) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG_PIECES[piece]);
  }
  return '';
}

/**
 * Parses a FEN piece-placement string into an 8x8 matrix array.
 */
export function parseFENPosition(fen) {
  const placement = (fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR').split(' ')[0];
  const rows = placement.split('/');
  const board = [];
  for (let r = 0; r < 8; r++) {
    const row = [];
    const rowStr = rows[r] || '8';
    for (let i = 0; i < rowStr.length; i++) {
      const char = rowStr[i];
      if (/^[1-8]$/.test(char)) {
        for (let e = 0; e < parseInt(char, 10); e++) row.push(null);
      } else {
        row.push({ type: char.toLowerCase(), color: char === char.toUpperCase() ? 'w' : 'b' });
      }
    }
    board.push(row);
  }
  return board;
}

/**
 * Generates lightweight, static 8x8 mini-board HTML string from a FEN string.
 */
export function generateMiniBoardHTML(fen) {
  try {
    let boardArr;
    if (typeof Chess !== 'undefined') {
      try { boardArr = new Chess(fen).board(); } catch (e) { boardArr = parseFENPosition(fen); }
    } else {
      boardArr = parseFENPosition(fen);
    }
    let html = '<div class="mini-board-grid">';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = boardArr && boardArr[r] && boardArr[r][c];
        const sqClass = (r + c) % 2 === 0 ? 'mini-sq light' : 'mini-sq dark';
        let pieceImg = '';
        if (piece && piece.type) {
          const pieceCode = (piece.color === 'w' ? 'w' : 'b') + piece.type.toUpperCase();
          pieceImg = `<img src="${getPieceDataURI(pieceCode)}" alt="${pieceCode}" draggable="false" />`;
        }
        html += `<div class="${sqClass}">${pieceImg}</div>`;
      }
    }
    html += '</div>';
    return html;
  } catch (err) {
    console.warn('[BoardRenderer] Error generating mini board HTML:', err);
    return '<div class="mini-board-grid"></div>';
  }
}

export function renderMiniBoard(containerElement, fen) {
  const $el = $(containerElement);
  if ($el.length) $el.html(generateMiniBoardHTML(fen));
}

/* ============================================================
   CLICK-TO-MOVE EVENT DELEGATION & HIGHLIGHT STATE SYSTEM
   ============================================================ */

let selectedSquare = null;

export function getSelectedSquare() { return selectedSquare; }
export function setSelectedSquare(sq) { selectedSquare = sq; }

/**
 * Extracts square coordinate from any DOM element inside the board.
 */
export function getSquareCoordinate(element) {
  if (!element) return null;

  let el = element;
  for (let i = 0; i < 5 && el; i++) {
    const ds = el.getAttribute ? el.getAttribute('data-square') : null;
    if (ds && /^[a-h][1-8]$/.test(ds)) return ds;

    const cls = el.className || '';
    const clsStr = typeof cls === 'string' ? cls : (cls.baseVal || '');
    const match = clsStr.match(/square-([a-h][1-8])\b/);
    if (match) return match[1];

    el = el.parentElement;
  }
  return null;
}

let lastMoveExecutionTimestamp = 0;

/**
 * Clears all click-to-move, hint, and premove highlights from the board and resets selection state.
 */
export function clearBoardHighlights(boardSelector = '#board') {
  selectedSquare = null;
  $(boardSelector).find('.square-55d63, [data-square], .square').removeClass(
    'highlight-selected-square highlight-dest-square highlight-selected highlight-target highlight-hint-src highlight-hint-dst square-hint highlight-ambiguity-hint highlight-premove highlight-premove-src highlight-premove-dst premove-dragging-source'
  );
  // Restore default opacity & visibility on all piece images
  $(boardSelector).find('img, .piece-417db').css({ opacity: '', visibility: '', display: '' });
}

/**
 * Explicitly clears selection state, restores piece visibility, and initiates debounce cooldown.
 */
export function resetClickToMoveState(boardSelector = '#board') {
  selectedSquare = null;
  lastMoveExecutionTimestamp = Date.now();
  clearBoardHighlights(boardSelector);
}

/**
 * Clears highlight classes from the DOM WITHOUT resetting selectedSquare state.
 */
export function clearBoardHighlightsKeepState(boardSelector = '#board') {
  $(boardSelector).find('.square-55d63, [data-square], .square').removeClass(
    'highlight-selected-square highlight-dest-square highlight-selected highlight-target highlight-hint-src highlight-hint-dst square-hint highlight-ambiguity-hint'
  );
}

/**
 * Highlights queued premove source and destination squares with distinct Chess.com red tint.
 * Supports both individual square arguments (fromSquare, toSquare) and ordered multi-premove queue arrays.
 */
export function highlightPremoveSquares(fromOrQueue, toSquare, boardSelector = '#board') {
  clearPremoveHighlights(boardSelector);
  if (!fromOrQueue) return;

  if (Array.isArray(fromOrQueue)) {
    fromOrQueue.forEach(move => {
      if (move && move.from) {
        $(boardSelector).find('.square-' + move.from + ', [data-square="' + move.from + '"]').addClass('highlight-premove highlight-premove-src');
      }
      if (move && move.to) {
        $(boardSelector).find('.square-' + move.to + ', [data-square="' + move.to + '"]').addClass('highlight-premove highlight-premove-dst');
      }
    });
  } else {
    if (fromOrQueue) {
      $(boardSelector).find('.square-' + fromOrQueue + ', [data-square="' + fromOrQueue + '"]').addClass('highlight-premove highlight-premove-src');
    }
    if (toSquare) {
      $(boardSelector).find('.square-' + toSquare + ', [data-square="' + toSquare + '"]').addClass('highlight-premove highlight-premove-dst');
    }
  }
}

/**
 * Clears premove red highlights from the board.
 */
export function clearPremoveHighlights(boardSelector = '#board') {
  $(boardSelector).find('.square-55d63, [data-square]').removeClass(
    'highlight-premove highlight-premove-src highlight-premove-dst'
  );
}

/**
 * Clears on-board ambiguity hints without affecting active selection state.
 */
export function clearAmbiguityHints(boardSelector = '#board') {
  $(boardSelector).find('.square-55d63, [data-square]').removeClass(
    'square-hint highlight-ambiguity-hint'
  );
}

/**
 * Highlights candidate source/target square with pulsing amber ambiguity glow.
 */
export function highlightAmbiguityHintSquare(fromSquare, toSquare, boardSelector = '#board') {
  if (!fromSquare) return;
  const $from = $(boardSelector).find('.square-' + fromSquare + ', [data-square="' + fromSquare + '"]');
  $from.addClass('square-hint highlight-ambiguity-hint');

  if (toSquare) {
    const $to = $(boardSelector).find('.square-' + toSquare + ', [data-square="' + toSquare + '"]');
    $to.addClass('square-hint');
  }
}

/**
 * Highlights selected source square or valid destination square.
 */
export function highlightBoardSquare(square, type = 'selected', boardSelector = '#board') {
  if (!square) return;
  const $sq = $(boardSelector).find('.square-' + square + ', [data-square="' + square + '"]');
  if (type === 'selected') {
    $sq.addClass('highlight-selected-square');
  } else if (type === 'destination') {
    $sq.addClass('highlight-dest-square');
  } else if (type === 'ambiguity-hint' || type === 'hint') {
    $sq.addClass('square-hint highlight-ambiguity-hint');
  }
}

/**
 * Click-to-Move & Premove Handler using event delegation on board container.
 * Active throughout training sessions, enabling instant moves on White turns
 * and queued premoves with right-click / click cancellation during Black turns.
 */
export function initClickToMove(boardSelector = '#board', getGameInstance, onMoveExecution, onPremoveCancel) {
  const boardContainer = document.querySelector('#board-container') || document.querySelector(boardSelector);
  if (!boardContainer) return;

  // Clean up previous event listeners
  if (boardContainer._boardClickHandler) {
    boardContainer.removeEventListener('pointerdown', boardContainer._boardClickHandler, true);
  }
  if (boardContainer._boardContextMenuHandler) {
    boardContainer.removeEventListener('contextmenu', boardContainer._boardContextMenuHandler);
  }
  if (boardContainer._boardTouchMoveHandler) {
    boardContainer.removeEventListener('touchmove', boardContainer._boardTouchMoveHandler, { passive: false });
  }
  if (boardContainer._boardTouchStartHandler) {
    boardContainer.removeEventListener('touchstart', boardContainer._boardTouchStartHandler, { passive: false });
  }

  // Intercept touchmove on the board canvas to prevent mobile window scrolling during piece drag & tap
  const touchMoveHandler = function(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  };

  const touchStartHandler = function(e) {
    if (e.touches && e.touches.length > 1 && e.cancelable) {
      e.preventDefault();
    }
  };

  // Right-click anywhere on the board instantly cancels any active premove
  const contextMenuHandler = function(e) {
    e.preventDefault();
    clearBoardHighlights(boardSelector);
    clearPremoveHighlights(boardSelector);
    if (typeof onPremoveCancel === 'function') {
      onPremoveCancel();
    }
  };

  boardContainer.addEventListener('touchmove', touchMoveHandler, { passive: false });
  boardContainer.addEventListener('touchstart', touchStartHandler, { passive: false });
  boardContainer.addEventListener('contextmenu', contextMenuHandler);
  boardContainer._boardTouchMoveHandler = touchMoveHandler;
  boardContainer._boardTouchStartHandler = touchStartHandler;
  boardContainer._boardContextMenuHandler = contextMenuHandler;

  const handler = function(e) {
    // Only handle primary left click/tap for selection and moves
    if (e.button && e.button !== 0) return;

    // Synthetic touch event deduplication & cooldown guard:
    // Mobile browsers emit delayed synthetic pointer/mouse events after touchend.
    // If a move was executed within the last 350ms, ignore subsequent synthetic clicks.
    const now = Date.now();
    if (now - lastMoveExecutionTimestamp < 350) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      return;
    }

    const clickedSquare = getSquareCoordinate(e.target);
    if (!clickedSquare) return;

    const game = typeof getGameInstance === 'function' ? getGameInstance() : getGameInstance;
    if (!game || typeof game.get !== 'function') return;

    if (typeof game.game_over === 'function' && game.game_over()) return;

    const isBlackTurn = typeof game.turn === 'function' && game.turn() === 'b';
    const clickedPiece = game.get(clickedSquare);

    // ============================================================
    // CASE 1: No square currently selected (selectedSquare === null)
    // ============================================================
    if (selectedSquare === null) {
      if (clickedPiece && clickedPiece.color === 'w') {
        selectedSquare = clickedSquare;
        clearBoardHighlightsKeepState(boardSelector);
        highlightBoardSquare(clickedSquare, 'selected', boardSelector);

        // Highlight legal destination squares in current position
        const legalMoves = game.moves({ square: clickedSquare, verbose: true }) || [];
        legalMoves.forEach(m => highlightBoardSquare(m.to, 'destination', boardSelector));
      } else if (typeof onPremoveCancel === 'function') {
        // Tapped an empty square without selection -> cancel queued premove
        onPremoveCancel();
        clearPremoveHighlights(boardSelector);
      }
      return;
    }

    // ============================================================
    // CASE 2: A square is already selected (selectedSquare !== null)
    // ============================================================

    // 2A. Clicked the same square -> Keep selection and allow immediate drag initiation without canceling
    if (clickedSquare === selectedSquare) {
      return;
    }

    // 2B. Clicked another friendly White piece -> Switch selection and allow immediate drag initiation
    if (clickedPiece && clickedPiece.color === 'w') {
      selectedSquare = clickedSquare;
      clearBoardHighlightsKeepState(boardSelector);
      highlightBoardSquare(clickedSquare, 'selected', boardSelector);

      const legalMoves = game.moves({ square: clickedSquare, verbose: true }) || [];
      legalMoves.forEach(m => highlightBoardSquare(m.to, 'destination', boardSelector));
      return;
    }

    // 2C. Clicked a target destination square (empty square or enemy piece)
    if (e.cancelable) e.preventDefault();
    e.stopPropagation();

    const fromSquare = selectedSquare;
    const toSquare = clickedSquare;

    // Reset selection state and set cooldown timestamp to block synthetic double-fires
    selectedSquare = null;
    lastMoveExecutionTimestamp = Date.now();
    clearBoardHighlights(boardSelector);

    if (typeof onMoveExecution === 'function') {
      onMoveExecution(fromSquare, toSquare, isBlackTurn);
    }
  };

  boardContainer.addEventListener('pointerdown', handler, true);
  boardContainer._boardClickHandler = handler;
}

/**
 * Detects castling moves and returns associated Rook coordinates and piece code.
 */
function getCastlingRookInfo(fromSquare, toSquare) {
  // White Kingside: King e1 -> g1, Rook h1 -> f1
  if (fromSquare === 'e1' && toSquare === 'g1') {
    return { rookFrom: 'h1', rookTo: 'f1', pieceCode: 'wR' };
  }
  // White Queenside: King e1 -> c1, Rook a1 -> d1
  if (fromSquare === 'e1' && toSquare === 'c1') {
    return { rookFrom: 'a1', rookTo: 'd1', pieceCode: 'wR' };
  }
  // Black Kingside: King e8 -> g8, Rook h8 -> f8
  if (fromSquare === 'e8' && toSquare === 'g8') {
    return { rookFrom: 'h8', rookTo: 'f8', pieceCode: 'bR' };
  }
  // Black Queenside: King e8 -> c8, Rook a8 -> d8
  if (fromSquare === 'e8' && toSquare === 'c8') {
    return { rookFrom: 'a8', rookTo: 'd8', pieceCode: 'bR' };
  }
  return null;
}

/**
 * Executes a hardware-accelerated 60 FPS piece glide animation across the chessboard
 * with strict 1-to-1 piece rendering (guaranteeing zero ghosting on destination squares).
 * Automatically detects castling moves (O-O and O-O-O) and triggers synchronized dual-piece
 * sliding transitions for both King and Rook simultaneously.
 *
 * @param {Object} boardInstance - Active chessboard.js instance.
 * @param {string} fromSquare - Source square coordinate (e.g. 'e7' or 'e8').
 * @param {string} toSquare - Destination square coordinate (e.g. 'e5' or 'g8').
 * @param {string} targetFen - Target FEN position string.
 * @param {number} durationMs - Animation duration in milliseconds (default: 300).
 * @param {Function} [onComplete] - Callback fired strictly when all pieces settle.
 */
export function glidePieceOnBoard(boardInstance, fromSquare, toSquare, targetFen, durationMs = 300, onComplete) {
  if (!boardInstance) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const $boardContainer = $('#board .chessboard-63f37').length ? $('#board .chessboard-63f37') : $('#board');
  const $from = $(`#board .square-${fromSquare}, #board [data-square="${fromSquare}"]`);
  const $to = $(`#board .square-${toSquare}, #board [data-square="${toSquare}"]`);

  // Fallback if square elements are not rendered in DOM
  if (!$boardContainer.length || !$from.length || !$to.length) {
    boardInstance.position(targetFen, false);
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const $originalPieceImg = $from.find('img, .piece-417db');
  let pieceSrc = $originalPieceImg.attr('src');

  if (!pieceSrc) {
    const currentPos = typeof boardInstance.position === 'function' ? boardInstance.position() : {};
    const pieceCode = currentPos && currentPos[fromSquare];
    if (pieceCode) {
      pieceSrc = getPieceDataURI(pieceCode);
    }
  }

  if (!pieceSrc) {
    boardInstance.position(targetFen, false);
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const boardRect = $boardContainer[0].getBoundingClientRect();
  const fromRect = $from[0].getBoundingClientRect();
  const toRect = $to[0].getBoundingClientRect();

  const startX = fromRect.left - boardRect.left;
  const startY = fromRect.top - boardRect.top;
  const deltaX = toRect.left - fromRect.left;
  const deltaY = toRect.top - fromRect.top;

  // 1. Instantly hide static piece on source square
  $from.addClass('animating-source-square');
  $from.find('img, .piece-417db').css({
    opacity: '0',
    visibility: 'hidden',
    display: 'none'
  });

  // 2. Spawn sliding King/Primary piece overlay element
  const $floatingPiece = $(`
    <img src="${pieceSrc}" class="gliding-piece-overlay" alt="moving piece" style="
      position: absolute;
      top: ${startY}px;
      left: ${startX}px;
      width: ${fromRect.width}px;
      height: ${fromRect.height}px;
      z-index: 999;
      pointer-events: none;
      user-select: none;
      will-change: transform;
      transform: translate3d(0, 0, 0);
      transition: transform ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1);
    " />
  `);
  $boardContainer.append($floatingPiece);

  // 3. Handle Castling: Spawn synchronized Rook overlay if castling move detected
  const castlingInfo = getCastlingRookInfo(fromSquare, toSquare);
  let $fromRook = null;
  let $floatingRook = null;
  let rookDeltaX = 0;
  let rookDeltaY = 0;

  if (castlingInfo) {
    $fromRook = $(`#board .square-${castlingInfo.rookFrom}, #board [data-square="${castlingInfo.rookFrom}"]`);
    const $toRook = $(`#board .square-${castlingInfo.rookTo}, #board [data-square="${castlingInfo.rookTo}"]`);

    if ($fromRook.length && $toRook.length) {
      let rookPieceSrc = $fromRook.find('img, .piece-417db').attr('src');
      if (!rookPieceSrc) {
        rookPieceSrc = getPieceDataURI(castlingInfo.pieceCode);
      }

      if (rookPieceSrc) {
        const rookFromRect = $fromRook[0].getBoundingClientRect();
        const rookToRect = $toRook[0].getBoundingClientRect();
        const rookStartX = rookFromRect.left - boardRect.left;
        const rookStartY = rookFromRect.top - boardRect.top;
        rookDeltaX = rookToRect.left - rookFromRect.left;
        rookDeltaY = rookToRect.top - rookFromRect.top;

        // Hide static rook on its starting square
        $fromRook.addClass('animating-source-square');
        $fromRook.find('img, .piece-417db').css({
          opacity: '0',
          visibility: 'hidden',
          display: 'none'
        });

        // Spawn sliding Rook overlay element
        $floatingRook = $(`
          <img src="${rookPieceSrc}" class="gliding-piece-overlay gliding-rook-overlay" alt="castling rook" style="
            position: absolute;
            top: ${rookStartY}px;
            left: ${rookStartX}px;
            width: ${rookFromRect.width}px;
            height: ${rookFromRect.height}px;
            z-index: 998;
            pointer-events: none;
            user-select: none;
            will-change: transform;
            transform: translate3d(0, 0, 0);
            transition: transform ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1);
          " />
        `);
        $boardContainer.append($floatingRook);
      }
    }
  }

  // 4. Initiate GPU translation for both King and Rook simultaneously
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $floatingPiece.css('transform', `translate3d(${deltaX}px, ${deltaY}px, 0)`);
      if ($floatingRook) {
        $floatingRook.css('transform', `translate3d(${rookDeltaX}px, ${rookDeltaY}px, 0)`);
      }
    });
  });

  // 5. Clean animation handshake upon arrival of both pieces
  let completed = false;
  const finishGlide = () => {
    if (completed) return;
    completed = true;

    // Restore King source square
    $from.removeClass('animating-source-square');
    $from.find('img, .piece-417db').css({
      opacity: '',
      visibility: '',
      display: ''
    });
    $floatingPiece.remove();

    // Restore Rook source square if castling
    if ($fromRook && $fromRook.length) {
      $fromRook.removeClass('animating-source-square');
      $fromRook.find('img, .piece-417db').css({
        opacity: '',
        visibility: '',
        display: ''
      });
    }
    if ($floatingRook) {
      $floatingRook.remove();
    }

    let handledByCallback = false;
    if (typeof onComplete === 'function') {
      handledByCallback = onComplete() === true;
    }

    if (!handledByCallback && boardInstance && typeof boardInstance.position === 'function') {
      boardInstance.position(targetFen, false);
    }
  };

  $floatingPiece.one('transitionend', finishGlide);
  setTimeout(finishGlide, durationMs + 40);
}

