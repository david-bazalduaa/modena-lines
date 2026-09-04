/* ============================================================
   CHESSGROUND INTEGRATION & BOARD RENDERER ENGINE
   ============================================================ */

import { Chessground } from 'chessground';

/**
 * Embedded Native SVG Chess Piece Graphics.
 * Pure vector definitions ensuring zero blur, sharp scaling, and rapid rendering.
 */
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
 * Generates data URI for embedded SVG piece graphic.
 * @param {string} piece - Piece code like 'wP', 'bN'
 * @returns {string} data URI string
 */
export function getPieceDataURI(piece) {
  if (SVG_PIECES[piece]) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG_PIECES[piece]);
  }
  return '';
}

/**
 * Dynamically binds our custom piece SVG set into CSS variables on the document root.
 * This allows Chessground piece elements to consume them cleanly via var(--piece-w-p), etc.
 */
export function injectPieceCSSVariables() {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  const roleMap = {
    P: 'pawn',
    N: 'knight',
    B: 'bishop',
    R: 'rook',
    Q: 'queen',
    K: 'king'
  };

  for (const [key, svg] of Object.entries(SVG_PIECES)) {
    const colorChar = key[0]; // 'w' or 'b'
    const roleChar = key[1];  // 'P', 'N', etc.
    const colorName = colorChar === 'w' ? 'white' : 'black';
    const roleName = roleMap[roleChar] || 'pawn';
    const varName = `--piece-${roleName}-${colorName}`;
    const uri = getPieceDataURI(key);
    root.style.setProperty(varName, `url("${uri}")`);
  }
}

// Ensure CSS variables are initialized immediately upon module load
injectPieceCSSVariables();

/**
 * Parses a FEN piece-placement string into an 8x8 matrix array.
 * @param {string} fen
 * @returns {Array<Array<Object|null>>}
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
 * Consumed by catalog and dashboard preview cards.
 * @param {string} fen
 * @returns {string}
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

/**
 * Renders static mini-board into target container.
 */
export function renderMiniBoard(containerElement, fen) {
  const $el = typeof $ !== 'undefined' ? $(containerElement) : null;
  if ($el && $el.length) {
    $el.html(generateMiniBoardHTML(fen));
  } else if (containerElement) {
    containerElement.innerHTML = generateMiniBoardHTML(fen);
  }
}

/**
 * Calculates a legal destinations Map (Square -> Array of Target Squares)
 * directly from a chess.js instance for Chessground's movable.dests config.
 * @param {Object} game - chess.js instance
 * @returns {Map<string, string[]>}
 */
export function calculateLegalDests(game) {
  const dests = new Map();
  if (!game || typeof game.moves !== 'function') return dests;

  const moves = game.moves({ verbose: true });
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    if (!dests.has(m.from)) {
      dests.set(m.from, []);
    }
    dests.get(m.from).push(m.to);
  }
  return dests;
}

/* ============================================================
   CHESSGROUND BOARD CONTROLLER WRAPPER
   ============================================================ */

/**
 * Factory that mounts and manages a Chessground board instance inside a DOM element.
 * Provides unified, reactive methods for FEN synchronization, legal move restrictions,
 * orientation toggles, hardware-accelerated piece animations, and premove handling.
 *
 * @param {HTMLElement|string} targetElement - DOM element or selector (e.g. '#board')
 * @param {Object} [options] - Configuration options
 * @returns {Object} Board controller instance
 */
export function createChessgroundBoard(targetElement, options = {}) {
  const el = typeof targetElement === 'string' ? document.querySelector(targetElement) : targetElement;
  if (!el) {
    console.error('[BoardRenderer] Target element not found:', targetElement);
    return null;
  }

  // Clear existing contents to ensure clean mounting
  el.innerHTML = '';
  injectPieceCSSVariables();

  const startFen = options.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  const initialOrientation = options.orientation || 'white';
  const initialTurn = options.turnColor || (startFen.includes(' b ') ? 'black' : 'white');

  // Track active custom square highlight classes (hints, ambiguity, etc.)
  const customHighlights = new Map();

  const groundConfig = {
    fen: startFen,
    orientation: initialOrientation,
    turnColor: initialTurn,
    coordinates: options.coordinates !== undefined ? Boolean(options.coordinates) : true,
    autoCastle: true,
    viewOnly: Boolean(options.viewOnly),
    disableContextMenu: true,
    blockTouchScroll: true,
    animation: {
      enabled: options.animationEnabled !== false,
      duration: options.animationDuration || 250
    },
    highlight: {
      lastMove: options.highlightLastMove !== false,
      check: true,
      custom: customHighlights
    },
    movable: {
      free: false, // Strict legal moves only
      color: options.movableColor !== undefined ? options.movableColor : 'white',
      dests: options.dests || new Map(),
      showDests: true,
      events: {
        after: (orig, dest, metadata) => {
          if (typeof options.onMove === 'function') {
            options.onMove(orig, dest, metadata);
          }
        }
      }
    },
    premovable: {
      enabled: options.premovesEnabled !== false,
      showDests: true,
      castle: true,
      events: {
        set: (orig, dest, metadata) => {
          if (typeof options.onPremoveSet === 'function') {
            options.onPremoveSet(orig, dest, metadata);
          }
        },
        unset: () => {
          if (typeof options.onPremoveUnset === 'function') {
            options.onPremoveUnset();
          }
        }
      }
    },
    events: {
      select: (key) => {
        if (typeof options.onSelect === 'function') {
          options.onSelect(key);
        }
      }
    }
  };

  const ground = Chessground(el, groundConfig);

  // Return unified controller API
  const controller = {
    ground,
    element: el,

    /**
     * Updates board position via FEN.
     * Guards against redundant DOM teardown and piece reconstruction if the board
     * position already matches the target FEN placement.
     * @param {string} fen
     * @param {boolean} [animate=false]
     */
    setFen(fen, animate = false) {
      if (!fen) return;
      const normalizedFen = fen === 'start' ? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' : fen;
      const posOnly = normalizedFen.split(' ')[0];
      const currentPos = typeof ground.getFen === 'function' ? ground.getFen() : null;
      const turn = normalizedFen.includes(' b ') ? 'black' : 'white';

      // If Chessground piece coordinates already match target position, bypass expensive DOM reconstruction
      if (currentPos && currentPos === posOnly && ground.state.turnColor === turn) {
        return;
      }

      ground.set({
        fen: normalizedFen,
        turnColor: turn,
        animation: { enabled: Boolean(animate) }
      });
    },

    /**
     * Drop-in compatibility alias matching chessboard.js .position()
     */
    position(fen, animate = false) {
      if (typeof fen === 'undefined') {
        return ground.getFen();
      }
      this.setFen(fen, animate);
    },

    /**
     * Updates legal move destinations map for the active player.
     * @param {Map<string, string[]>} dests
     * @param {'white'|'black'|'both'} [playerColor='white']
     */
    setDests(dests, playerColor = 'white') {
      ground.set({
        movable: {
          dests: dests || new Map(),
          color: playerColor,
          showDests: true
        }
      });
    },

    /**
     * Sets active turn color while keeping the player's controllable color aligned.
     * @param {'w'|'b'|'white'|'black'} turnColor
     * @param {'white'|'black'} [playerColor='white']
     */
    setTurn(turnColor, playerColor = 'white') {
      const normalizedTurn = turnColor === 'b' ? 'black' : (turnColor === 'w' ? 'white' : turnColor);
      ground.set({
        turnColor: normalizedTurn,
        movable: {
          color: playerColor
        }
      });
    },

    /**
     * Atomically updates game turn, player movable color, and legal destination map
     * in a single batch without triggering redundant redraws or element thrashing.
     * Guards against duplicate calls when turn and dests are already aligned.
     * @param {'white'|'black'|'w'|'b'} turnColor
     * @param {Map<string, string[]>} dests
     * @param {string} [playerColor='white']
     */
    syncTurnAndDests(turnColor, dests, playerColor = 'white') {
      const normalizedTurn = turnColor === 'b' ? 'black' : (turnColor === 'w' ? 'white' : turnColor);
      const currentTurn = ground.state.turnColor;
      const currentColor = ground.state.movable ? ground.state.movable.color : null;
      const currentDests = ground.state.movable ? ground.state.movable.dests : null;

      const sameTurn = currentTurn === normalizedTurn;
      const sameColor = currentColor === playerColor;
      const sameDests = (!dests || dests.size === 0) && (!currentDests || currentDests.size === 0);

      // Skip redundant ground.set render pass if turn, color, and dests already match
      if (sameTurn && sameColor && sameDests) {
        return;
      }

      ground.set({
        turnColor: normalizedTurn,
        movable: {
          color: playerColor,
          dests: dests || new Map(),
          showDests: true
        }
      });
    },

    /**
     * Waits for any active piece animation on the board to finish before firing callback.
     * Dynamically checks remaining animation time and synchronizes with the exact frame
     * where hardware-accelerated CSS transforms settle.
     * @param {Function} callback
     * @param {number} [maxTimeoutMs=500] - Safety timeout fallback
     */
    onAnimationComplete(callback, maxTimeoutMs = 500) {
      let resolved = false;
      let timerId = null;

      const done = () => {
        if (resolved) return;
        resolved = true;
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
        callback();
      };

      const animState = ground.state.animation;
      if (!animState || animState.enabled === false || !animState.current) {
        done();
        return;
      }

      const cur = animState.current;
      const durationMs = cur.frequency ? (1 / cur.frequency) : (animState.duration || 250);
      const elapsed = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - (cur.start || 0);
      const remainingMs = Math.max(0, durationMs - elapsed);

      const check = () => {
        if (resolved) return;
        if (!ground.state.animation || !ground.state.animation.current) {
          done();
        } else {
          requestAnimationFrame(check);
        }
      };

      requestAnimationFrame(check);
      const safetyMs = Math.min(maxTimeoutMs, Math.ceil(remainingMs + 32));
      timerId = setTimeout(done, safetyMs);
    },

    /**
     * Executes currently queued Chessground premove if valid in the current board state.
     * @returns {boolean} Whether a premove was successfully executed.
     */
    playPremove() {
      if (typeof ground.playPremove === 'function') {
        return ground.playPremove();
      }
      return false;
    },

    /**
     * Programmatically sets a premove onto Chessground's state.
     * @param {string} orig
     * @param {string} dest
     */
    setPremove(orig, dest) {
      if (!orig || !dest) return;
      ground.state.premovable.current = [orig, dest];
      ground.state.dom.redraw();
    },

    /**
     * Returns whether Chessground has a premove currently queued.
     * @returns {boolean}
     */
    hasPremove() {
      return Boolean(ground.state.premovable && ground.state.premovable.current);
    },

    /**
     * Returns the currently queued premove coordinates [orig, dest] or null.
     * @returns {[string, string]|null}
     */
    getPremove() {
      return (ground.state.premovable && ground.state.premovable.current) || null;
    },

    /**
     * Programmatically executes an animated move on the board.
     * @param {string} orig - Source square (e.g. 'e2')
     * @param {string} dest - Target square (e.g. 'e4')
     */
    move(orig, dest) {
      if (!orig || !dest) return;
      ground.move(orig, dest);
    },

    /**
     * Sets or clears last move highlighted squares.
     * Skips redundant ground.set if current lastMove is already aligned.
     * @param {string|null} from
     * @param {string|null} to
     */
    setLastMove(from, to) {
      const current = ground.state.lastMove;
      if (from && to) {
        if (current && current[0] === from && current[1] === to) return;
        ground.set({ lastMove: [from, to] });
      } else {
        if (!current || current.length === 0) return;
        ground.set({ lastMove: [] });
      }
    },

    /**
     * Sets board orientation perspective.
     * @param {'white'|'black'} orientation
     */
    setOrientation(orientation) {
      ground.set({ orientation: orientation === 'black' ? 'black' : 'white' });
    },

    /**
     * Toggles board orientation between white and black.
     */
    flip() {
      ground.toggleOrientation();
    },

    /**
     * Returns current board orientation.
     */
    getOrientation() {
      return ground.state.orientation;
    },

    /**
     * Highlights move hint source and target squares.
     * @param {string} fromSquare
     * @param {string} toSquare
     */
    highlightHint(fromSquare, toSquare) {
      if (fromSquare) customHighlights.set(fromSquare, 'highlight-hint-src');
      if (toSquare) customHighlights.set(toSquare, 'highlight-hint-dst');
      ground.set({ highlight: { custom: new Map(customHighlights) } });
    },

    /**
     * Highlights candidate square with pulsing ambiguity indicator.
     * @param {string} fromSquare
     * @param {string} [toSquare]
     */
    highlightAmbiguity(fromSquare, toSquare) {
      if (fromSquare) customHighlights.set(fromSquare, 'highlight-ambiguity-hint');
      if (toSquare) customHighlights.set(toSquare, 'highlight-hint-dst');
      ground.set({ highlight: { custom: new Map(customHighlights) } });
    },

    /**
     * Clears all custom highlight markers from the board.
     * Skips render if custom highlights are already empty.
     */
    clearCustomHighlights() {
      if (customHighlights.size === 0) return;
      customHighlights.clear();
      ground.set({ highlight: { custom: new Map() } });
    },

    /**
     * Highlights premove source and destination squares.
     * @param {string} fromSquare
     * @param {string} [toSquare]
     */
    highlightPremove(fromSquare, toSquare) {
      if (fromSquare) customHighlights.set(fromSquare, 'highlight-premove-src current-premove');
      if (toSquare) customHighlights.set(toSquare, 'highlight-premove-dst premove-dest');
      ground.set({ highlight: { custom: new Map(customHighlights) } });
    },

    /**
     * Clears any pending premove on the board and removes premove highlight markers.
     * Only invokes ground.set if premove highlight markers were actually present.
     */
    clearPremove() {
      if (typeof ground.cancelPremove === 'function') {
        ground.cancelPremove();
      }
      let changed = false;
      for (const [key, val] of customHighlights.entries()) {
        if (val.includes('premove')) {
          customHighlights.delete(key);
          changed = true;
        }
      }
      if (changed) {
        ground.set({ highlight: { custom: new Map(customHighlights) } });
      }
    },

    /**
     * Forces board dimension recalculation and redraw on resize.
     */
    resize() {
      ground.redrawAll();
    },

    /**
     * Destroys Chessground instance and detaches event listeners.
     */
    destroy() {
      ground.destroy();
    }
  };

  return controller;
}

/* ============================================================
   LEGACY / BACKWARD COMPATIBILITY ADAPTERS
   ============================================================ */

export function clearBoardHighlights(boardSelector = '#board') {
  const $board = typeof $ !== 'undefined' ? $(boardSelector) : null;
  if ($board && $board.length) {
    $board.find('square').removeClass(
      'highlight-selected-square highlight-dest-square highlight-selected highlight-target highlight-hint-src highlight-hint-dst square-hint highlight-ambiguity-hint highlight-premove highlight-premove-src highlight-premove-dst square-selected active-piece premove-dragging-source'
    );
  }
}

export function clearBoardHighlightsKeepState(boardSelector = '#board') {
  clearBoardHighlights(boardSelector);
}

export function clearAmbiguityHints(boardSelector = '#board') {
  const $board = typeof $ !== 'undefined' ? $(boardSelector) : null;
  if ($board && $board.length) {
    $board.find('square').removeClass('square-hint highlight-ambiguity-hint');
  }
}

export function highlightAmbiguityHintSquare(fromSquare, toSquare, boardSelector = '#board') {
  if (!fromSquare) return;
  const $board = typeof $ !== 'undefined' ? $(boardSelector) : null;
  if ($board && $board.length) {
    $board.find(`square.${fromSquare}`).addClass('square-hint highlight-ambiguity-hint');
    if (toSquare) {
      $board.find(`square.${toSquare}`).addClass('square-hint');
    }
  }
}

export function highlightBoardSquare(square, type = 'selected', boardSelector = '#board') {
  if (!square) return;
  const $board = typeof $ !== 'undefined' ? $(boardSelector) : null;
  if ($board && $board.length) {
    const $sq = $board.find(`square.${square}`);
    if (type === 'selected') $sq.addClass('highlight-selected-square');
    else if (type === 'destination') $sq.addClass('highlight-dest-square');
  }
}

export function highlightPremoveSquares(fromOrQueue, toSquare, boardSelector = '#board') {
  // Managed natively by Chessground premovable state & current-premove class
}

export function clearPremoveHighlights(boardSelector = '#board') {
  // Managed natively by Chessground premovable state
}

export function setSelectedSquare(sq) {
  // Managed natively by Chessground selection
}

export function getSelectedSquare() {
  return null;
}

export function setMoveCooldown() {}
export function isMoveCooldownActive() { return false; }

/**
 * Executes a piece glide transition across the board.
 * In Chessground, this delegates directly to controller.move(from, to) with native animation.
 */
export function glidePieceOnBoard(boardController, fromSquare, toSquare, targetFen, durationMs = 250, onComplete) {
  if (boardController && typeof boardController.move === 'function') {
    boardController.move(fromSquare, toSquare);
    setTimeout(() => {
      if (typeof onComplete === 'function') onComplete();
    }, durationMs);
    return;
  }
  if (typeof onComplete === 'function') onComplete();
}

/**
 * Click-to-move initialization stub for backward compatibility.
 * Native click-to-move, tap-to-move, and drag-and-drop are handled natively by Chessground.
 */
export function initClickToMove() {
  // Handled natively by Chessground pointer events engine
}
