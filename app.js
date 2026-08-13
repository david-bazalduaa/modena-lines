/* ============================================================
   MODENA LINES — Italian Game Repertoire Trainer
   All code, variables, comments, and annotations in English.
   ============================================================ */

'use strict';

// ────────────────────────────────────────────────────────────
// CONSTANTS
// ────────────────────────────────────────────────────────────
const STORAGE_KEY   = 'modena_lines_state';
const BLACK_DELAY   = 650;   // ms before auto-playing Black's response
const ERROR_DISPLAY = 2200;  // ms to show error toast
const TOAST_LIFE    = 2400;  // ms toast stays visible
const PIECE_THEME   =
  'https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/img/chesspieces/wikipedia/{piece}.png';

// ────────────────────────────────────────────────────────────
// DEEP REPERTOIRE DATABASE  (5 master-level Italian Game lines)
// ────────────────────────────────────────────────────────────
const REPERTOIRE = [

  // ── 1. Giuoco Piano – Main Line Center Attack (12 moves) ──
  {
    name: 'Giuoco Piano – Main Line Center Attack',
    shortName: 'Giuoco Piano',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Nce7 11. O-O O-O 12. Rfe1 c6',
    fullAnnotation:
      'Deep central battle where White sacrifices a pawn structure edge for active piece play and pressure along the e-file.',
    annotations: {
      0:  'King\'s pawn opening — seizing the center and opening diagonals for the bishop and queen.',
      2:  'Developing the knight to its ideal square, attacking the e5 pawn.',
      4:  'The Italian Bishop! Targeting the vulnerable f7 square from the powerful c4 diagonal.',
      6:  'Preparing the central thrust d4 — the hallmark of the Italian Game\'s sharpest main line.',
      8:  'The central strike! White challenges Black\'s e5 pawn and opens the position for piece activity.',
      10: 'Recapturing with the c-pawn. White builds a strong d4/e4 pawn duo, accepting an isolated d-pawn for active play.',
      12: 'Blocking the check and offering to trade dark-squared bishops, maintaining the powerful d4 pawn center.',
      14: 'Recapturing with the knight toward the center. White\'s pieces develop naturally and harmoniously.',
      16: 'Taking in the center. The tension resolves with an open e-file that White will immediately seize.',
      18: 'An aggressive queen deployment! Pressuring b7 and eyeing d5, creating dual threats that restrict Black\'s coordination.',
      20: 'Castling into safety while the rooks connect. The f1-rook will soon land on the open e-file.',
      22: 'The rook seizes the open e-file with powerful effect. White has a pleasant initiative with harmonious pieces.'
    }
  },

  // ── 2. Evans Gambit – Main Line Compromised Defense (12 moves) ──
  {
    name: 'Evans Gambit – Compromised Defense',
    shortName: 'Evans Gambit',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Rad1',
    fullAnnotation:
      'The romantic, aggressive sacrifice. White yields two pawns for overwhelming development, open files, and total control of the center.',
    annotations: {
      0:  'King\'s pawn — the standard aggressive opening choice.',
      2:  'Developing and pressuring e5.',
      4:  'The Italian Bishop on c4, eyeing the f7 weakness.',
      6:  'The Evans Gambit! A bold b4 pawn sacrifice to deflect the bishop, seize time and space. One of chess\'s most romantic openings.',
      8:  'Attacking the bishop again and preparing the massive d4 central thrust.',
      10: 'The second pawn sacrifice! White tears open the center at all costs for rapid development and attacking chances.',
      12: 'Castling first! Development and king safety take priority over material recovery — classic gambit technique.',
      14: 'Targeting f7 and the c3 pawn. The queen joins the assault with tempo, forcing Black to defend on multiple fronts.',
      16: 'Pushing e5 with tempo, driving Black\'s queen back and gaining critical central space.',
      18: 'Recapturing the pawn while developing the knight with tempo. White regains material with overwhelming piece activity.',
      20: 'A powerful dark-squared bishop move! Preventing Black from castling by controlling the e7 and f8 squares.',
      22: 'The final piece enters the fray. Every single White piece is now active with devastating compensation for the sacrificed material.'
    }
  },

  // ── 3. Two Knights Defense – Fried Liver Attack (13 moves) ──
  {
    name: 'Two Knights Defense – Fried Liver Attack',
    shortName: 'Fried Liver',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5 h6 11. Bxe7 Bxe7 12. O-O-O Rf8 13. Qe4',
    fullAnnotation:
      'The ultimate tactical test. White sacrifices a knight on f7 to drag Black\'s king into the open center, maintaining relentless pin pressure.',
    annotations: {
      0:  'King\'s pawn opening.',
      2:  'Developing the knight toward the center.',
      4:  'The Italian Bishop on c4.',
      6:  'The aggressive knight leap! Targeting f7, the weakest point in Black\'s entire position. This move signals serious tactical intentions.',
      8:  'Accepting the challenge. White captures and waits for Black\'s recapture to launch the sacrifice.',
      10: 'The Fried Liver sacrifice! White gives up an entire knight on f7 to tear open Black\'s king cover. The king is forced into the center.',
      12: 'Check! The queen enters with devastating tempo, forcing the king to walk further into the crossfire.',
      14: 'Developing the knight with tempo. Nc3 eyes d5 and e4, supporting the attack while bringing more firepower to bear.',
      16: 'Opening the center while Black\'s king is stranded on e6. Every tempo is critical in this razor-sharp position.',
      18: 'Pinning the knight on e7 and adding unbearable pressure on the exposed king. The dark squares around Black\'s king collapse.',
      20: 'Capturing the knight and eliminating a key defender. White simplifies toward a position where Black\'s exposed king cannot hide.',
      22: 'Castling queenside, connecting the rooks, and unleashing the h1-rook into the attack via the d-file.',
      24: 'Centralizing the queen with crushing effect. Threats of Qxe7+ and pressure along the entire e-file leave Black paralyzed.'
    }
  },

  // ── 4. Two Knights Defense – Polerio / Main Line Counter-Attack (12 moves) ──
  {
    name: 'Two Knights Defense – Polerio Main Line',
    shortName: 'Polerio',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 exd3 12. Nxd3',
    fullAnnotation:
      'Black avoids the Fried Liver with 5…Na5. White keeps the extra pawn and solidifies the central outpost while Black gets activity.',
    annotations: {
      0:  'King\'s pawn opening.',
      2:  'Developing the knight.',
      4:  'The Italian Bishop on c4, targeting f7.',
      6:  'The aggressive Ng5, identical to the Fried Liver setup. But Black will diverge with Na5 instead of allowing Nxf7.',
      8:  'Capturing the d5 pawn. White stays a pawn up and challenges Black to prove compensation.',
      10: 'An important intermezzo check! Disrupting Black\'s coordination before they can fully organize counterplay.',
      12: 'Capturing on c6, opening the b-file for Black but maintaining the extra pawn. A critical material vs. activity imbalance.',
      14: 'Retreating the bishop to the safe e2 square. White consolidates the extra pawn and avoids tactical tricks.',
      16: 'Retreating the knight to f3. A solid, positional approach — White defends the extra pawn while maintaining central control.',
      18: 'Centralizing the knight powerfully on e5. This outpost dominates the position and eyes critical squares like d7, f7, and c6.',
      20: 'Striking the center with d4! Challenging Black\'s advanced e-pawn and opening lines for White\'s pieces.',
      22: 'Recapturing on d3 with the knight. White has equalized the pawn count but maintains a solid, well-coordinated position with the better structure.'
    }
  },

  // ── 5. Giuoco Pianissimo – Modern Mainline with d3 & c3 (11 moves) ──
  {
    name: 'Giuoco Pianissimo – Modern d3 & c3',
    shortName: 'Pianissimo',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Re1 O-O 9. h3 h6 10. Nbd2 Re8 11. Nf1',
    fullAnnotation:
      'Strategic, maneuvering Italian favored by Super-GMs. White slowly transfers the knight to g3/f5 for a kingside assault.',
    annotations: {
      0:  'King\'s pawn opening.',
      2:  'Knight development, attacking e5.',
      4:  'The Italian Bishop. In the Pianissimo, this bishop stays on the a2-g8 diagonal but White delays d4.',
      6:  'Preparing d4 potential, but White intentionally delays it for a slow, strategic buildup.',
      8:  'The Giuoco Pianissimo! A restrained d3 instead of the aggressive d4. White builds a rock-solid center and plans a slow kingside expansion.',
      10: 'Castling early, keeping all options open. The king is safe while White plans the famous knight maneuver.',
      12: 'Retreating the bishop to b3, where it remains actively aimed at f7 but is safe from Na5 attacks.',
      14: 'The rook immediately takes up position on the semi-open e-file, supporting the e4 pawn and preparing future central action.',
      16: 'A key prophylactic move! Preventing …Bg4 pins on the f3 knight and preparing a slow kingside pawn expansion with g4.',
      18: 'The knight heads for the f1-g3 maneuver — a signature plan in this system. From d2, the knight reroutes to the kingside.',
      20: 'Beginning the famous knight maneuver Nf1→g3→f5. From f5, the knight becomes a monster, targeting h6, d6, and e7.'
    }
  }
];

// ────────────────────────────────────────────────────────────
// PGN UTILITIES
// ────────────────────────────────────────────────────────────

/**
 * Parse a PGN string into an array of raw SAN move tokens.
 * Strips move numbers (e.g. "1.", "12.") and whitespace.
 */
function parsePGN(pgn) {
  return pgn
    .split(/\s+/)
    .filter(function (token) {
      return token !== '' && !/^\d+\.$/.test(token);
    });
}

/**
 * Play through all moves using chess.js and return an array of
 * normalized SAN strings.  This guarantees exact-match comparison
 * during the drill, regardless of minor PGN formatting differences.
 */
function normalizeMoves(rawMoves) {
  var tempGame = new Chess();
  var normalized = [];
  for (var i = 0; i < rawMoves.length; i++) {
    var result = tempGame.move(rawMoves[i], { sloppy: true });
    if (result) {
      normalized.push(result.san);
    } else {
      console.error('Invalid move in repertoire:', rawMoves[i], '(index ' + i + ')');
      break;
    }
  }
  return normalized;
}

/**
 * Pre-process every repertoire line: parse PGN → normalize moves.
 * Called once on startup.
 */
function buildProcessedLines() {
  return REPERTOIRE.map(function (line) {
    var raw = parsePGN(line.pgn);
    var moves = normalizeMoves(raw);
    return {
      name:           line.name,
      shortName:      line.shortName,
      pgn:            line.pgn,
      moves:          moves,              // normalized SAN array
      totalHalfMoves: moves.length,
      annotations:    line.annotations,
      fullAnnotation: line.fullAnnotation
    };
  });
}

// ────────────────────────────────────────────────────────────
// APPLICATION STATE
// ────────────────────────────────────────────────────────────
var processedLines = [];          // populated on init

var state = {
  lineOrder:      [0, 1, 2, 3, 4],
  orderIndex:     0,              // position inside lineOrder
  currentLineIdx: 0,              // actual index into processedLines
  halfMoveIndex:  0,              // 0-based half-move cursor
  isDrillActive:  false,
  isWaitingUser:  false,
  completedLines: {},             // { lineIdx: true }
  stats: {
    totalAttempts:   0,
    correctAttempts: 0,
    linesCompleted:  0
  }
};

var game  = null;   // chess.js instance
var board = null;   // chessboard.js instance
var toastTimer = null;

// ────────────────────────────────────────────────────────────
// INITIALIZATION
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

function init() {
  processedLines = buildProcessedLines();
  game = new Chess();

  initBoard();
  loadState();
  renderLineSelector();
  bindEvents();
  refreshUI();
}

// ────────────────────────────────────────────────────────────
// BOARD SETUP  (chessboard.js)
// ────────────────────────────────────────────────────────────
function initBoard() {
  var config = {
    draggable:   true,
    position:    'start',
    pieceTheme:  PIECE_THEME,
    onDragStart: onDragStart,
    onDrop:      onDrop,
    onSnapEnd:   onSnapEnd
  };
  board = Chessboard('board', config);

  // Make the board responsive on window resize
  $(window).on('resize', function () { board.resize(); });
}

// ────────────────────────────────────────────────────────────
// EVENT BINDING
// ────────────────────────────────────────────────────────────
function bindEvents() {
  $('#btn-start').on('click',   startDrill);
  $('#btn-shuffle').on('click', shuffleLines);
  $('#btn-next').on('click',    nextLine);
  $('#btn-reset').on('click',   resetAll);

  // Text input
  $('#move-input').on('keydown', function (e) {
    if (e.key === 'Enter') handleTextInput();
  });
  $('#submit-move-btn').on('click', handleTextInput);
}

// ────────────────────────────────────────────────────────────
// DRILL ENGINE
// ────────────────────────────────────────────────────────────

/** Start (or restart) the drill for the currently selected line. */
function startDrill() {
  var lineIdx = state.lineOrder[state.orderIndex];
  state.currentLineIdx = lineIdx;
  state.halfMoveIndex  = 0;
  state.isDrillActive  = true;
  state.isWaitingUser  = false;

  game.reset();
  board.position('start', false);

  var line = processedLines[lineIdx];
  setLineInfo(line.name, line.fullAnnotation);
  setCommentary('Let\'s begin! Play White\'s first move: <strong>1. ' + line.moves[0] + '</strong>');
  updateBadge('Drilling', true);
  clearHighlights();

  $('#btn-start').find('.btn-icon').text('⟳');
  $('#btn-start').contents().last()[0].textContent = ' Restart';
  $('#btn-next').prop('disabled', false);

  updateMoveHistory();
  refreshUI();
  nextTurn();
}

/** Determine whose turn it is and act accordingly. */
function nextTurn() {
  var line = processedLines[state.currentLineIdx];

  // Line complete?
  if (state.halfMoveIndex >= line.totalHalfMoves) {
    completeLine();
    return;
  }

  // Even indices = White (0, 2, 4, …);  Odd = Black
  if (state.halfMoveIndex % 2 === 0) {
    promptUser();
  } else {
    autoPlayBlack();
  }
}

/** Prompt the user to play White's next move. */
function promptUser() {
  state.isWaitingUser = true;
  enableInput(true);

  var line = processedLines[state.currentLineIdx];
  var moveNum = Math.floor(state.halfMoveIndex / 2) + 1;
  var expected = line.moves[state.halfMoveIndex];

  $('#input-hint').text('Move ' + moveNum + ' — White to play');
  setBoardGlow('active');
  refreshUI();
}

/** Auto-play Black's response after a short delay. */
function autoPlayBlack() {
  state.isWaitingUser = false;
  enableInput(false);

  var line = processedLines[state.currentLineIdx];
  var san  = line.moves[state.halfMoveIndex];

  setTimeout(function () {
    var result = game.move(san, { sloppy: true });
    if (!result) {
      console.error('Auto-play failed for Black:', san);
      return;
    }
    board.position(game.fen());

    // Show annotation for Black's half-move if one exists
    if (line.annotations[state.halfMoveIndex]) {
      setCommentary(line.annotations[state.halfMoveIndex]);
    }

    state.halfMoveIndex++;
    updateMoveHistory();
    refreshUI();
    nextTurn();
  }, BLACK_DELAY);
}

// ────────────────────────────────────────────────────────────
// MOVE HANDLING  —  Drag & Drop
// ────────────────────────────────────────────────────────────

function onDragStart(source, piece) {
  // Only allow dragging if we're waiting for user input and it's a White piece
  if (!state.isWaitingUser) return false;
  if (game.game_over())     return false;
  if (piece.search(/^b/) !== -1) return false;  // prevent dragging Black pieces
  return true;
}

function onDrop(source, target) {
  if (!state.isWaitingUser) return 'snapback';

  // Attempt the move in chess.js
  var move = game.move({
    from:      source,
    to:        target,
    promotion: 'q'   // auto-queen (no promotions in these lines)
  });

  if (move === null) return 'snapback';  // illegal

  var line     = processedLines[state.currentLineIdx];
  var expected = line.moves[state.halfMoveIndex];

  if (move.san === expected) {
    handleCorrectMove(move);
  } else {
    // Wrong move — undo it
    game.undo();
    handleIncorrectMove(move.san, expected);
    return 'snapback';
  }
}

function onSnapEnd() {
  board.position(game.fen());
}

// ────────────────────────────────────────────────────────────
// MOVE HANDLING  —  Text Input
// ────────────────────────────────────────────────────────────
function handleTextInput() {
  if (!state.isWaitingUser) return;

  var raw = $('#move-input').val().trim();
  if (!raw) return;

  // Normalize common castling variants
  var input = raw.replace(/0/g, 'O');

  var move = game.move(input, { sloppy: true });

  if (!move) {
    showToast('Invalid move notation: ' + raw, 'error');
    $('#move-input').val('').focus();
    return;
  }

  var line     = processedLines[state.currentLineIdx];
  var expected = line.moves[state.halfMoveIndex];

  if (move.san === expected) {
    board.position(game.fen());
    handleCorrectMove(move);
  } else {
    game.undo();
    handleIncorrectMove(move.san, expected);
  }

  $('#move-input').val('');
}

// ────────────────────────────────────────────────────────────
// CORRECT / INCORRECT  HANDLERS
// ────────────────────────────────────────────────────────────

function handleCorrectMove(move) {
  state.isWaitingUser = false;
  enableInput(false);

  state.stats.totalAttempts++;
  state.stats.correctAttempts++;

  var line = processedLines[state.currentLineIdx];
  var annotation = line.annotations[state.halfMoveIndex];

  // Visual feedback
  setBoardGlow('correct');
  flashHighlight(move.from, move.to, 'highlight-correct');
  showToast('✓ Correct! ' + move.san, 'success');

  // Show annotation if available
  if (annotation) {
    setCommentary(annotation);
  } else {
    setCommentary('Good — <strong>' + move.san + '</strong> is correct.');
  }

  state.halfMoveIndex++;
  updateMoveHistory();
  refreshUI();
  saveState();

  // Short pause, then advance
  setTimeout(function () {
    clearHighlights();
    setBoardGlow('');
    nextTurn();
  }, BLACK_DELAY);
}

function handleIncorrectMove(played, expected) {
  state.stats.totalAttempts++;

  var line = processedLines[state.currentLineIdx];
  var annotation = line.annotations[state.halfMoveIndex] || '';

  // Visual feedback
  setBoardGlow('incorrect');
  boardShake();
  showToast('✗ Incorrect. Expected: ' + expected, 'error');

  var commentary = '❌ You played <strong>' + played + '</strong> — the correct move is <strong>' + expected + '</strong>.';
  if (annotation) {
    commentary += '<br><br>' + annotation;
  }
  setCommentary(commentary);

  refreshUI();
  saveState();

  // Re-prompt after delay (rewind to same position)
  setTimeout(function () {
    setBoardGlow('active');
    enableInput(true);
    $('#move-input').focus();
  }, ERROR_DISPLAY);
}

// ────────────────────────────────────────────────────────────
// LINE COMPLETION
// ────────────────────────────────────────────────────────────
function completeLine() {
  state.isDrillActive = false;
  state.isWaitingUser = false;
  enableInput(false);

  var lineIdx = state.currentLineIdx;
  state.completedLines[lineIdx] = true;
  state.stats.linesCompleted = Object.keys(state.completedLines).length;

  setBoardGlow('correct');
  boardCelebrate();
  updateBadge('Completed!', false);

  var line = processedLines[lineIdx];
  setCommentary('🎉 <strong>Line complete!</strong> — ' + line.name + '<br><br>Press <strong>Next Line</strong> to continue or select another line.');
  showToast('🎉 Line complete! ' + line.name, 'success');

  renderLineSelector();
  refreshUI();
  saveState();
}

/** Advance to the next line in the order. */
function nextLine() {
  if (state.orderIndex < state.lineOrder.length - 1) {
    state.orderIndex++;
  } else {
    state.orderIndex = 0; // wrap around
  }
  state.currentLineIdx = state.lineOrder[state.orderIndex];
  highlightActivePill();
  startDrill();
}

// ────────────────────────────────────────────────────────────
// SHUFFLE
// ────────────────────────────────────────────────────────────
function shuffleLines() {
  // Fisher-Yates shuffle
  var arr = state.lineOrder.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  state.lineOrder = arr;
  state.orderIndex = 0;
  state.currentLineIdx = arr[0];

  renderLineSelector();
  highlightActivePill();
  showToast('🔀 Lines shuffled!', 'info');
  saveState();

  // If a drill isn't active, show the new first line's info
  if (!state.isDrillActive) {
    var line = processedLines[state.currentLineIdx];
    setLineInfo(line.name, line.fullAnnotation);
  }
}

// ────────────────────────────────────────────────────────────
// RESET
// ────────────────────────────────────────────────────────────
function resetAll() {
  localStorage.removeItem(STORAGE_KEY);

  state.lineOrder      = [0, 1, 2, 3, 4];
  state.orderIndex     = 0;
  state.currentLineIdx = 0;
  state.halfMoveIndex  = 0;
  state.isDrillActive  = false;
  state.isWaitingUser  = false;
  state.completedLines = {};
  state.stats          = { totalAttempts: 0, correctAttempts: 0, linesCompleted: 0 };

  game.reset();
  board.position('start', false);

  setLineInfo('Select a line to begin', 'Choose one of the five Italian Game variations below, then press <strong>Start Drill</strong>.');
  setCommentary('Start a drill to see move-by-step analysis.');
  $('#move-history').text('—');
  enableInput(false);
  setBoardGlow('');
  updateBadge('Ready', false);

  $('#btn-start').find('.btn-icon').text('▶');
  $('#btn-start').contents().last()[0].textContent = ' Start Drill';
  $('#btn-next').prop('disabled', true);

  renderLineSelector();
  refreshUI();
  showToast('↺ All progress reset', 'info');
}

// ────────────────────────────────────────────────────────────
// UI  HELPERS
// ────────────────────────────────────────────────────────────

function refreshUI() {
  updateProgress();
  updateStats();
}

/* ── Line Info Card ── */
function setLineInfo(title, description) {
  $('#line-name').text(title);
  $('#line-description').html(description);
}

/* ── Commentary Card ── */
function setCommentary(html) {
  var el = $('#commentary-text');
  el.removeClass('animate-in');
  // Force reflow for animation restart
  void el[0].offsetWidth;
  el.html(html).addClass('animate-in');
}

/* ── Progress Bar ── */
function updateProgress() {
  if (!state.isDrillActive) {
    $('#progress-label').text('Move 0 / 0');
    $('#progress-percent').text('0 %');
    $('#progress-bar').css('width', '0%');
    return;
  }
  var line = processedLines[state.currentLineIdx];
  // Count only White's moves completed (even half-moves)
  var whiteMoves      = Math.ceil(line.totalHalfMoves / 2);
  var whiteMovesDone  = Math.ceil(state.halfMoveIndex / 2);
  var pct = whiteMoves > 0 ? Math.round((whiteMovesDone / whiteMoves) * 100) : 0;

  $('#progress-label').text('Move ' + whiteMovesDone + ' / ' + whiteMoves);
  $('#progress-percent').text(pct + ' %');
  $('#progress-bar').css('width', pct + '%');
}

/* ── Move History ── */
function updateMoveHistory() {
  var line = processedLines[state.currentLineIdx];
  var html = '';
  for (var i = 0; i < line.totalHalfMoves; i++) {
    if (i % 2 === 0) {
      // Move number
      html += '<span class="' + (i < state.halfMoveIndex ? 'move-played' : 'move-pending') + '">';
      html += (Math.floor(i / 2) + 1) + '. ';
      html += '</span>';
    }
    var cls = 'move-pending';
    if (i < state.halfMoveIndex)   cls = 'move-played';
    if (i === state.halfMoveIndex) cls = 'move-current';

    html += '<span class="' + cls + '">' + line.moves[i] + '</span> ';

    if (i % 2 === 1) html += ' ';
  }
  $('#move-history').html(html || '—');

  // Auto-scroll to bottom
  var container = document.getElementById('move-history');
  container.scrollTop = container.scrollHeight;
}

/* ── Stats ── */
function updateStats() {
  var acc = state.stats.totalAttempts > 0
    ? Math.round((state.stats.correctAttempts / state.stats.totalAttempts) * 100)
    : 0;
  $('#stat-accuracy').text(acc + ' %');
  $('#stat-lines').text(state.stats.linesCompleted);
  $('#stat-attempts').text(state.stats.totalAttempts);
}

/* ── Header Badge ── */
function updateBadge(text, active) {
  $('#badge-text').text(text);
  var dot = $('.badge-dot');
  if (active) {
    dot.css('background', 'var(--gold)');
    dot.css('box-shadow', '0 0 6px var(--gold-glow)');
  } else {
    dot.css('background', 'var(--emerald)');
    dot.css('box-shadow', '0 0 6px var(--emerald-glow)');
  }
}

/* ── Line Selector Pills ── */
function renderLineSelector() {
  var container = $('#line-selector');
  container.empty();

  for (var oi = 0; oi < state.lineOrder.length; oi++) {
    var idx  = state.lineOrder[oi];
    var line = processedLines[idx];
    var isActive    = (idx === state.currentLineIdx);
    var isCompleted = !!state.completedLines[idx];

    var statusIcon = isCompleted ? '✓' : (isActive && state.isDrillActive ? '●' : '○');
    var cls = 'line-pill';
    if (isActive)    cls += ' active';
    if (isCompleted) cls += ' completed';

    var pill = $(
      '<button class="' + cls + '" data-line-index="' + idx + '" data-order-index="' + oi + '">' +
        '<span class="pill-status">' + statusIcon + '</span>' +
        '<span>' + line.shortName + '</span>' +
      '</button>'
    );

    pill.on('click', function () {
      var li = parseInt($(this).attr('data-line-index'), 10);
      var oidx = parseInt($(this).attr('data-order-index'), 10);
      state.orderIndex = oidx;
      state.currentLineIdx = li;
      highlightActivePill();

      if (state.isDrillActive) {
        startDrill();
      } else {
        var l = processedLines[li];
        setLineInfo(l.name, l.fullAnnotation);
        setCommentary('Press <strong>Start Drill</strong> to begin this line.');
      }
    });

    container.append(pill);
  }
}

function highlightActivePill() {
  $('.line-pill').removeClass('active');
  $('.line-pill[data-line-index="' + state.currentLineIdx + '"]').addClass('active');
}

/* ── Input enable/disable ── */
function enableInput(on) {
  $('#move-input').prop('disabled', !on);
  $('#submit-move-btn').prop('disabled', !on);
  if (on) {
    $('#move-input').focus();
  }
}

/* ── Board Glow ── */
function setBoardGlow(mode) {
  var glow = $('#board-glow');
  glow.removeClass('active correct incorrect');
  if (mode === 'active')    glow.addClass('active');
  if (mode === 'correct')   glow.addClass('active correct');
  if (mode === 'incorrect') glow.addClass('active incorrect');
}

/* ── Board Shake ── */
function boardShake() {
  var el = $('#board-container');
  el.addClass('board-shake');
  setTimeout(function () { el.removeClass('board-shake'); }, 500);
}

/* ── Board Celebration ── */
function boardCelebrate() {
  var el = $('#board-container');
  el.addClass('celebration');
  setTimeout(function () { el.removeClass('celebration'); }, 900);
}

/* ── Square Highlights ── */
function flashHighlight(from, to, cls) {
  var squareFrom = $('#board .square-' + from);
  var squareTo   = $('#board .square-' + to);
  // chessboard.js uses data-square attributes — try alternative selector
  if (!squareFrom.length) {
    squareFrom = $('[data-square="' + from + '"]');
    squareTo   = $('[data-square="' + to   + '"]');
  }
  squareFrom.addClass(cls);
  squareTo.addClass(cls);
}

function clearHighlights() {
  $('.highlight-correct, .highlight-incorrect, .highlight-hint').each(function () {
    $(this).removeClass('highlight-correct highlight-incorrect highlight-hint');
  });
}

/* ── Toast Notifications ── */
function showToast(message, type) {
  var toast = $('#status-toast');
  if (toastTimer) clearTimeout(toastTimer);

  toast.removeClass('hidden visible success error info').text('');
  toast.addClass(type || 'info').text(message);

  // Trigger reflow
  void toast[0].offsetWidth;
  toast.addClass('visible');

  toastTimer = setTimeout(function () {
    toast.removeClass('visible');
    setTimeout(function () { toast.addClass('hidden'); }, 350);
  }, TOAST_LIFE);
}

// ────────────────────────────────────────────────────────────
// LOCAL STORAGE — Persistence
// ────────────────────────────────────────────────────────────

function saveState() {
  try {
    var data = {
      lineOrder:      state.lineOrder,
      orderIndex:     state.orderIndex,
      currentLineIdx: state.currentLineIdx,
      completedLines: state.completedLines,
      stats:          state.stats
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Could not save state to localStorage:', e);
  }
}

function loadState() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    var data = JSON.parse(raw);
    if (data.lineOrder)      state.lineOrder      = data.lineOrder;
    if (data.orderIndex != null) state.orderIndex  = data.orderIndex;
    if (data.currentLineIdx != null) state.currentLineIdx = data.currentLineIdx;
    if (data.completedLines) state.completedLines  = data.completedLines;
    if (data.stats)          state.stats           = data.stats;

    // Restore UI to reflect loaded state
    var line = processedLines[state.currentLineIdx];
    if (line) {
      setLineInfo(line.name, line.fullAnnotation);
    }
  } catch (e) {
    console.warn('Could not load state from localStorage:', e);
  }
}
