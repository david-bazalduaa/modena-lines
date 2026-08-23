/* ============================================================
   MODENA LINES — Italian Game Repertoire Trainer & Engine
   All code, variables, function names, and comments in English.
   ============================================================ */

'use strict';

// ────────────────────────────────────────────────────────────
// CONSTANTS & CONFIGURATION
// ────────────────────────────────────────────────────────────
const STORAGE_KEY   = 'modena_lines_v2_state';
const BLACK_DELAY   = 600;   // Delay in ms before Black auto-plays response
const TOAST_LIFE    = 2500;  // Toast duration in ms

// ────────────────────────────────────────────────────────────
// EMBEDDED INLINE SVG PIECE DATA URIS (100% OFFLINE & BUG-PROOF)
// ────────────────────────────────────────────────────────────
const SVG_PIECES = {
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
 * Returns an inline SVG Data URI for any valid piece symbol.
 * Guarantees zero network calls and instantaneous SVG rendering.
 */
function getPieceDataURI(piece) {
  if (SVG_PIECES[piece]) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG_PIECES[piece]);
  }
  return '';
}

// ────────────────────────────────────────────────────────────
// MASTER REPERTOIRE DATABASE (5 MASTER ITALIAN GAME COURSES)
// ────────────────────────────────────────────────────────────
const REPERTOIRE = [

  // ── 1. Giuoco Piano – Main Line Center Attack ──
  {
    id: 'giuoco-piano',
    name: 'Giuoco Piano – Center Attack',
    shortName: 'Giuoco Piano',
    category: 'Main Line',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 d5 9. exd5 Nxd5 10. Qb3 Nce7 11. O-O O-O 12. Rfe1 c6',
    fullAnnotation: 'Deep central battle where White sacrifices a pawn structure edge for active piece play and pressure along the e-file.',
    previewFEN: 'r1bqk2r/pppp1ppp/2n2n2/3p4/2BP4/1Q3N2/PP1N1PPP/R3R1K1 b kq - 1 10',
    annotations: {
      0:  "1. e4 — King's pawn opening. Controls d5 and opens diagonals for your bishop and queen.",
      2:  "2. Nf3 — Develop knight to c3/f3, attacking Black's e5 pawn and preparing kingside castling.",
      4:  "3. Bc4 — The Italian Bishop! Target Black's vulnerable f7 square right from move three.",
      6:  "4. c3 — Prepare central thrust d4! White aims to create a powerful classical pawn duo.",
      8:  "5. d4 — Central strike! Challenge e5 immediately and open lines for White's pieces.",
      10: "6. cxd4 — Reclaim the center. White forms the ideal d4/e4 pawn center duo.",
      12: "7. Bd2 — Interpose check. Offer dark-square bishop trade to preserve momentum.",
      14: "8. Nbxd2 — Recapturing with knight toward center. Harmonious piece development.",
      16: "9. exd5 — Opening the central e-file where White will stack rooks.",
      18: "10. Qb3 — Aggressive queen deployment! Pressure b7 and eye d5 simultaneously.",
      20: "11. O-O — Castle early into kingside safety.",
      22: "12. Rfe1 — Seize the e-file with maximum rook activity!"
    }
  },

  // ── 2. Evans Gambit – Main Line Compromised Defense ──
  {
    id: 'evans-gambit',
    name: 'Evans Gambit – Compromised Defense',
    shortName: 'Evans Gambit',
    category: 'Romantic Gambit',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3 O-O 12. Rad1',
    fullAnnotation: 'The romantic, aggressive sacrifice. White yields two pawns for overwhelming development, open files, and total control of the center.',
    previewFEN: 'r1b2rk1/ppppnppp/6q1/b3P3/8/BPN2N2/P4PPP/3R1RK1 b - - 2 12',
    annotations: {
      0:  "1. e4 — King's pawn, seizing central space.",
      2:  "2. Nf3 — Developing knight toward c3/f3, attacking e5.",
      4:  "3. Bc4 — The Italian Bishop eyeing f7.",
      6:  "4. b4! — The Evans Gambit! Sacrifice b-pawn to deflect Black's bishop and gain massive tempos with c3 & d4.",
      8:  "5. c3 — Gain a tempo on Black's bishop while preparing d4.",
      10: "6. d4 — Blow open the center! Rapid line opening takes priority over material balance.",
      12: "7. O-O — Castle into safety before continuing the central assault.",
      14: "8. Qb3 — Eye f7 and pressure Black's queen.",
      16: "9. e5 — Thrust e-pawn forward with tempo, driving Black's queen into awkward square.",
      18: "10. Nxc3 — Recapture with knight, completing overwhelming piece mobilization.",
      20: "11. Ba3 — Slice diagonally across Black's king position, blocking e7-f8 castling routes.",
      22: "12. Rad1 — Activate the final rook. White has full compensation and lethal initiative!"
    }
  },

  // ── 3. Two Knights Defense – Fried Liver Attack ──
  {
    id: 'fried-liver',
    name: 'Fried Liver Attack',
    shortName: 'Fried Liver',
    category: 'Tactical Sacrifice',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5 h6 11. Bxe7 Bxe7 12. O-O-O Rf8 13. Qe4',
    fullAnnotation: 'The ultimate tactical test. White sacrifices a knight on f7 to drag Black\'s king into the open center, maintaining relentless pin pressure.',
    previewFEN: 'r1b2r2/pp2b1p1/2p1k2p/3np3/2BPQ3/2N5/PPP2PPP/2KR3R b - - 1 13',
    annotations: {
      0:  "1. e4 — King's pawn opening.",
      2:  "2. Nf3 — Knight to f3 attacking e5.",
      4:  "3. Bc4 — Italian Bishop on c4.",
      6:  "4. Ng5! — Aggressive knight leap! Double assault on f7.",
      8:  "5. exd5 — Open d-file and isolate d5.",
      10: "6. Nxf7!! — The Fried Liver Sacrifice! Drag Black's king into the brutal crossfire of the center.",
      12: "7. Qf3+ — Check! Queen joins attack with tempo, forcing King to step further into target zone.",
      14: "8. Nc3 — Develop knight to pressure pinned d5 defender.",
      16: "9. d4 — Rip open central files while Black's king is stranded.",
      18: "10. Bg5 — Pin knight on e7 and restrict King mobility.",
      20: "11. Bxe7 — Eliminate key defender.",
      22: "12. O-O-O — Queenside castling! Mobilize d-file rook into immediate attack.",
      24: "13. Qe4 — Centralized queen dominates e-file with mate threats!"
    }
  },

  // ── 4. Two Knights Defense – Polerio / 5...Na5 Main Line Counter ──
  {
    id: 'polerio-counter',
    name: 'Polerio Main Line Counter',
    shortName: 'Polerio Counter',
    category: 'Prophylactic Defense',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 exd3 12. Nxd3',
    fullAnnotation: 'Black avoids the Fried Liver with 5…Na5. White keeps the extra pawn and solidifies the central outpost while Black gets activity.',
    previewFEN: 'r2qk2r/p4pp1/2pb1n1p/n7/8/3N4/PPP1BPPP/RNBQK2R b KQkq - 0 12',
    annotations: {
      0:  "1. e4 — King's pawn opening.",
      2:  "2. Nf3 — Knight development.",
      4:  "3. Bc4 — Italian Bishop aiming at f7.",
      6:  "4. Ng5 — Aggressive knight attack on f7.",
      8:  "5. exd5 — Win pawn on d5.",
      10: "6. Bb5+ — Check! Important intermezzo forcing c6.",
      12: "7. dxc6 — Maintain pawn advantage.",
      14: "8. Be2 — Solid bishop retreat, denying Black tactical tricks on c4.",
      16: "9. Nf3 — Preserve solid pawn structure.",
      18: "10. Ne5 — Dominating central outpost! Knight eyes d7 and f7.",
      20: "11. d4 — Counter-strike in center, opening lines for dark-squared bishop.",
      22: "12. Nxd3 — Recapture on d3, retaining solid extra pawn with great structure!"
    }
  },

  // ── 5. Giuoco Pianissimo – Modern d3 & c3 Maneuvering ──
  {
    id: 'giuoco-pianissimo',
    name: 'Giuoco Pianissimo – Modern d3 & c3',
    shortName: 'Pianissimo',
    category: 'Strategic Maneuvering',
    eco: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O a6 7. Bb3 Ba7 8. Re1 O-O 9. h3 h6 10. Nbd2 Re8 11. Nf1',
    fullAnnotation: 'Strategic, maneuvering Italian favored by Super-GMs. White slowly transfers the knight to g3/f5 for a kingside assault.',
    previewFEN: 'r1bqr1k1/bpp2pp1/p1np1n1p/4p3/2B1P3/1PPP1N1P/P2N1PP1/R1BQR1K1 b - - 1 11',
    annotations: {
      0:  "1. e4 — King's pawn opening.",
      2:  "2. Nf3 — Knight to f3.",
      4:  "3. Bc4 — Italian Bishop on c4.",
      6:  "4. c3 — Prepare potential central expansion.",
      8:  "5. d3 — The Pianissimo! Controlled, solid pawn move establishing patient setup.",
      10: "6. O-O — Castle into safety before initiating long-term piece rerouting.",
      12: "7. Bb3 — Prophylactic bishop retreat to b3, safe from ...Na5 threats.",
      14: "8. Re1 — Support e4 pawn and open e-file for future play.",
      16: "9. h3 — Key prophylaxis! Prevent ...Bg4 pin on f3 knight.",
      18: "10. Nbd2 — Begin famous Italian knight tour Nd2-f1-g3-f5!",
      20: "11. Nf1 — Knight reaches f1, ready to land on g3/f5 for lethal kingside attack."
    }
  }
];

// ────────────────────────────────────────────────────────────
// PGN & MOVE PARSING UTILITIES
// ────────────────────────────────────────────────────────────

/**
 * Strips move numbers from raw PGN string and extracts SAN move tokens.
 */
function parsePGN(pgn) {
  return pgn
    .split(/\s+/)
    .filter(function (token) {
      return token !== '' && !/^\d+\.$/.test(token);
    });
}

/**
 * Normalizes moves through chess.js to guarantee clean SAN matching.
 */
function normalizeMoves(rawMoves) {
  var tempGame = new Chess();
  var normalized = [];
  for (var i = 0; i < rawMoves.length; i++) {
    var res = tempGame.move(rawMoves[i], { sloppy: true });
    if (res) {
      normalized.push({
        san: res.san,
        from: res.from,
        to: res.to,
        piece: res.piece,
        color: res.color,
        fen: tempGame.fen()
      });
    } else {
      console.error('Invalid move token in repertoire:', rawMoves[i]);
      break;
    }
  }
  return normalized;
}

/**
 * Builds processed repertoire data structures.
 */
function buildProcessedLines() {
  return REPERTOIRE.map(function (line) {
    var raw = parsePGN(line.pgn);
    var normMoves = normalizeMoves(raw);
    return {
      id:             line.id,
      name:           line.name,
      shortName:      line.shortName,
      category:       line.category,
      eco:            line.eco,
      pgn:            line.pgn,
      moves:          normMoves,
      totalHalfMoves: normMoves.length,
      fullAnnotation: line.fullAnnotation,
      annotations:    line.annotations,
      previewFEN:     line.previewFEN
    };
  });
}

// ────────────────────────────────────────────────────────────
// APPLICATION STATE MANAGEMENT
// ────────────────────────────────────────────────────────────
var processedLines = [];
var currentLineIndex = 0;
var moveIndex = 0;           // Current half-move index in line
var game = null;             // chess.js instance
var board = null;            // chessboard.js instance
var selectedSquare = null;   // For click-to-move input
var currentView = 'catalog'; // 'catalog' | 'study'

var state = {
  lineStats: {},             // Map lineId -> { completed: bool, attempts: int, accuracy: float, mistakes: int }
  totalAttempts: 0,
  completedCount: 0,
  overallAccuracy: 100
};

// ────────────────────────────────────────────────────────────
// LOCAL STORAGE PERSISTENCE
// ────────────────────────────────────────────────────────────
function loadState() {
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      var parsed = JSON.parse(saved);
      if (parsed && parsed.lineStats) {
        state = parsed;
      }
    }
  } catch (e) {
    console.warn('LocalStorage read error:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage write error:', e);
  }
  updateGlobalMetrics();
}

function updateGlobalMetrics() {
  var totalComp = 0;
  var totalAtt = 0;
  var totalAccSum = 0;
  var countWithAcc = 0;

  processedLines.forEach(function (line) {
    var st = state.lineStats[line.id];
    if (st) {
      if (st.completed) totalComp++;
      totalAtt += (st.attempts || 0);
      if (st.accuracy !== undefined) {
        totalAccSum += st.accuracy;
        countWithAcc++;
      }
    }
  });

  state.completedCount = totalComp;
  state.totalAttempts = totalAtt;
  state.overallAccuracy = countWithAcc > 0 ? Math.round(totalAccSum / countWithAcc) : 100;

  $('#header-accuracy').text(state.overallAccuracy + '%');
  $('#header-completed').text(totalComp + '/' + processedLines.length);

  $('#dash-total-mastered').text(totalComp);
  $('#dash-avg-accuracy').text(state.overallAccuracy + '%');
  $('#dash-total-drills').text(totalAtt);
}

// ────────────────────────────────────────────────────────────
// VIEW SWITCHING (DASHBOARD CATALOG vs STUDY BOARD)
// ────────────────────────────────────────────────────────────
function switchView(viewName) {
  currentView = viewName;
  if (viewName === 'catalog') {
    $('#dashboard-view').removeClass('hidden').addClass('active');
    $('#study-view').addClass('hidden').removeClass('active');
    $('#nav-catalog-btn').addClass('active');
    $('#nav-study-btn').removeClass('active');
    renderCourseCatalog();
  } else {
    $('#dashboard-view').addClass('hidden').removeClass('active');
    $('#study-view').removeClass('hidden').addClass('active');
    $('#nav-catalog-btn').removeClass('active');
    $('#nav-study-btn').addClass('active');
    
    // Resize board to fit container properly
    if (board) {
      setTimeout(function () {
        board.resize();
      }, 50);
    }
  }
}

// ────────────────────────────────────────────────────────────
// DASHBOARD CATALOG & MINI-BOARD RENDERER
// ────────────────────────────────────────────────────────────
function renderCourseCatalog() {
  var $grid = $('#course-grid');
  $grid.empty();

  processedLines.forEach(function (line, index) {
    var st = state.lineStats[line.id] || { completed: false, attempts: 0, accuracy: 100 };
    var progressPercent = st.completed ? 100 : Math.round(((st.attempts > 0 ? 1 : 0) / 1) * 20);

    var cardHTML = `
      <div class="course-card" data-line-index="${index}">
        <div class="card-top-preview">
          <span class="course-badge">${line.category}</span>
          ${generateMiniBoardHTML(line.previewFEN)}
        </div>
        <div class="course-card-info">
          <h4>${line.name}</h4>
          <p>${line.fullAnnotation}</p>
        </div>
        <div class="course-progress-block">
          <div class="course-progress-header">
            <span>${st.completed ? 'Mastered' : 'Progress'}</span>
            <span>${st.completed ? '100%' : progressPercent + '%'}</span>
          </div>
          <div class="course-progress-track">
            <div class="course-progress-fill" style="width: ${st.completed ? '100%' : progressPercent + '%'}"></div>
          </div>
        </div>
        <button class="card-action-btn start-course-btn" data-line-index="${index}">
          <span>${st.completed ? 'Practice Course' : 'Start Line'}</span>
        </button>
      </div>
    `;
    $grid.append(cardHTML);
  });

  // Attach event handlers
  $('.start-course-btn, .course-card').off('click').on('click', function (e) {
    var idx = $(this).data('line-index');
    if (idx !== undefined) {
      selectLine(idx);
      switchView('study');
    }
  });
}

/**
 * Generates an 8x8 SVG/HTML mini-board grid preview for a FEN.
 */
function generateMiniBoardHTML(fen) {
  var temp = new Chess(fen || 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PPPP1PPP/RNBQK2R w KQkq - 0 4');
  var boardArr = temp.board();
  var html = '<div class="mini-board-grid">';

  for (var r = 0; r < 8; r++) {
    for (var c = 0; c < 8; c++) {
      var piece = boardArr[r][c];
      var isLight = (r + c) % 2 === 0;
      var sqClass = isLight ? 'mini-sq light' : 'mini-sq dark';
      var pieceImg = '';
      if (piece) {
        var pieceCode = (piece.color === 'w' ? 'w' : 'b') + piece.type.toUpperCase();
        pieceImg = `<img src="${getPieceDataURI(pieceCode)}" alt="${pieceCode}"/>`;
      }
      html += `<div class="${sqClass}">${pieceImg}</div>`;
    }
  }
  html += '</div>';
  return html;
}

// ────────────────────────────────────────────────────────────
// CHESSBOARD & DRILL ENGINE SETUP
// ────────────────────────────────────────────────────────────
function initChessEngine() {
  game = new Chess();

  var boardConfig = {
    position: 'start',
    draggable: true,
    orientation: 'white',
    pieceTheme: getPieceDataURI,
    onDragStart: handleDragStart,
    onDrop: handleDrop,
    onSnapEnd: handleSnapEnd
  };

  board = Chessboard('board', boardConfig);
  $(window).on('resize', function () {
    if (board) board.resize();
  });

  // Attach click square handler for tap-to-move
  $('#board').on('click', '.square-55d63', handleSquareClick);
}

// ────────────────────────────────────────────────────────────
// BOARD DRAG & CLICK EVENT HANDLERS
// ────────────────────────────────────────────────────────────
function handleDragStart(source, piece, position, orientation) {
  if (game.game_over()) return false;

  // White repertoire trainer: User can only drag White pieces on White's turn
  var line = processedLines[currentLineIndex];
  if (!line) return false;

  var currentHalfMove = line.moves[moveIndex];
  if (!currentHalfMove) return false;

  // On White turn, only allow moving White pieces
  if (game.turn() !== 'w' || piece.search(/^b/) !== -1) {
    return false;
  }

  clearHighlights();
  return true;
}

function handleDrop(source, target) {
  clearHighlights();
  if (source === target) return 'snapback';

  var move = attemptUserMove(source, target);
  if (!move) {
    return 'snapback';
  }
}

function handleSnapEnd() {
  board.position(game.fen());
}

function handleSquareClick() {
  var square = $(this).data('square');
  if (!square) return;

  var line = processedLines[currentLineIndex];
  if (!line || moveIndex >= line.moves.length) return;

  if (game.turn() !== 'w') return;

  if (!selectedSquare) {
    // Select source square if it has a White piece
    var p = game.get(square);
    if (p && p.color === 'w') {
      selectedSquare = square;
      clearHighlights();
      $(`#board .square-${square}`).addClass('highlight-hint-src');
    }
  } else {
    // Attempt move to target square
    var src = selectedSquare;
    selectedSquare = null;
    clearHighlights();

    if (src !== square) {
      attemptUserMove(src, square);
    }
  }
}

// ────────────────────────────────────────────────────────────
// MOVE EVALUATION & ACTIVE RECALL FEEDBACK LOOP
// ────────────────────────────────────────────────────────────
function attemptUserMove(fromSq, toSq, promoPiece) {
  var line = processedLines[currentLineIndex];
  if (!line || moveIndex >= line.moves.length) return null;

  var expectedMove = line.moves[moveIndex];

  // Validate legal move in chess.js
  var testMove = game.move({
    from: fromSq,
    to: toSq,
    promotion: promoPiece || 'q'
  });

  if (!testMove) {
    showToast('Illegal chess move!', 'error');
    triggerErrorShake();
    return null;
  }

  // Check if user's move matches White's expected repertoire move
  if (testMove.san !== expectedMove.san) {
    // Undo wrong move in engine
    game.undo();
    showToast(`Incorrect move! Played ${testMove.san}, expected White's line move.`, 'error');
    triggerErrorShake();
    recordMistake();
    return null;
  }

  // Correct Move!
  moveIndex++;
  board.position(game.fen());
  highlightMoveSquares(testMove.from, testMove.to);
  triggerSuccessGlow();
  updateUI();

  // Check if line complete
  if (moveIndex >= line.moves.length) {
    onLineComplete();
    return testMove;
  }

  // Auto-play Black's response if next turn is Black
  if (game.turn() === 'b') {
    setTimeout(playBlackResponse, BLACK_DELAY);
  }

  return testMove;
}

function playBlackResponse() {
  var line = processedLines[currentLineIndex];
  if (!line || moveIndex >= line.moves.length) return;

  var expectedMove = line.moves[moveIndex];
  var bMove = game.move(expectedMove.san);

  if (bMove) {
    moveIndex++;
    board.position(game.fen());
    highlightMoveSquares(bMove.from, bMove.to);
    updateUI();

    if (moveIndex >= line.moves.length) {
      onLineComplete();
    }
  }
}

// ────────────────────────────────────────────────────────────
// TEXT SAN MOVE INPUT HANDLER
// ────────────────────────────────────────────────────────────
function handleTextMoveSubmit() {
  var inputVal = $('#move-input').val().trim();
  if (!inputVal) return;

  var line = processedLines[currentLineIndex];
  if (!line || moveIndex >= line.moves.length) return;

  if (game.turn() !== 'w') {
    showToast("Wait for Black's response move!", 'error');
    return;
  }

  var expectedMove = line.moves[moveIndex];
  var testMove = game.move(inputVal, { sloppy: true });

  if (!testMove) {
    showToast(`Invalid notation: "${inputVal}". Try SAN format like Nf3 or Bc4.`, 'error');
    triggerErrorShake();
    return;
  }

  if (testMove.san !== expectedMove.san) {
    game.undo();
    showToast(`Incorrect! You typed ${testMove.san}, expected ${expectedMove.san}.`, 'error');
    triggerErrorShake();
    recordMistake();
    return;
  }

  // Correct text move
  $('#move-input').val('');
  moveIndex++;
  board.position(game.fen());
  highlightMoveSquares(testMove.from, testMove.to);
  triggerSuccessGlow();
  updateUI();

  if (moveIndex >= line.moves.length) {
    onLineComplete();
    return;
  }

  if (game.turn() === 'b') {
    setTimeout(playBlackResponse, BLACK_DELAY);
  }
}

// ────────────────────────────────────────────────────────────
// HINT ENGINE
// ────────────────────────────────────────────────────────────
function requestHint() {
  var line = processedLines[currentLineIndex];
  if (!line || moveIndex >= line.moves.length) return;

  var expectedMove = line.moves[moveIndex];
  clearHighlights();

  $(`#board .square-${expectedMove.from}`).addClass('highlight-hint-src');
  $(`#board .square-${expectedMove.to}`).addClass('highlight-hint-dst');

  showToast(`Hint: Play ${expectedMove.piece.toUpperCase() || 'Pawn'} to ${expectedMove.to} (${expectedMove.san})`, 'success');
}

// ────────────────────────────────────────────────────────────
// LINE SELECTION & DRILL CONTROLS
// ────────────────────────────────────────────────────────────
function selectLine(index) {
  if (index < 0 || index >= processedLines.length) return;
  currentLineIndex = index;
  resetDrill();
}

function resetDrill() {
  game.reset();
  moveIndex = 0;
  selectedSquare = null;
  board.position('start');
  clearHighlights();

  var line = processedLines[currentLineIndex];
  if (!state.lineStats[line.id]) {
    state.lineStats[line.id] = { completed: false, attempts: 0, accuracy: 100, mistakes: 0 };
  }
  state.lineStats[line.id].attempts = (state.lineStats[line.id].attempts || 0) + 1;
  saveState();

  updateUI();
  showToast(`Drill started: ${line.name}`, 'success');
}

function onLineComplete() {
  var line = processedLines[currentLineIndex];
  var st = state.lineStats[line.id] || {};
  st.completed = true;

  var mistakes = st.mistakes || 0;
  var totalMoves = line.totalHalfMoves / 2;
  var acc = Math.max(0, Math.round(((totalMoves - mistakes) / totalMoves) * 100));
  st.accuracy = acc;
  st.mistakes = 0;

  state.lineStats[line.id] = st;
  saveState();

  triggerSuccessGlow();
  showToast(`Line Mastered! 100% Complete with ${acc}% Accuracy!`, 'success');
  updateUI();
}

function recordMistake() {
  var line = processedLines[currentLineIndex];
  if (!state.lineStats[line.id]) {
    state.lineStats[line.id] = { completed: false, attempts: 1, accuracy: 100, mistakes: 0 };
  }
  state.lineStats[line.id].mistakes = (state.lineStats[line.id].mistakes || 0) + 1;
  saveState();
}

// ────────────────────────────────────────────────────────────
// UI UPDATE & STEP TREE RENDERER
// ────────────────────────────────────────────────────────────
function updateUI() {
  var line = processedLines[currentLineIndex];
  if (!line) return;

  // Active line headers
  $('#active-line-title').text(line.name);
  $('#active-line-category').text(line.category);
  $('#line-name').text(line.name);
  $('#line-eco').text(line.eco);
  $('#line-description').text(line.fullAnnotation);

  // Move progress
  var currentMoveNum = Math.floor(moveIndex / 2);
  var totalMovesNum = Math.ceil(line.totalHalfMoves / 2);
  var percent = Math.min(100, Math.round((moveIndex / line.totalHalfMoves) * 100));

  $('#progress-label').text(`Move ${currentMoveNum} / ${totalMovesNum}`);
  $('#progress-percent').text(`${percent}% Mastered`);
  $('#progress-bar').css('width', percent + '%');

  // Turn indicator
  if (game.turn() === 'w') {
    $('#turn-indicator').html('<span class="turn-dot white"></span><span>Your Turn: White</span>');
  } else {
    $('#turn-indicator').html('<span class="turn-dot black"></span><span>Black Responding...</span>');
  }

  // Coach Guidance commentary text
  var commentary = line.annotations[moveIndex] || line.annotations[moveIndex - 1] || line.fullAnnotation;
  if (moveIndex >= line.totalHalfMoves) {
    commentary = "Line Complete! You've mastered all moves in this White repertoire variation.";
  }
  $('#commentary-text').html(commentary);

  // Render Move History list
  renderMoveHistory(line);

  // Render Full Step Tree
  renderStepTree(line);

  // Render stats
  var st = state.lineStats[line.id] || { accuracy: 100, completed: false, attempts: 0 };
  $('#stat-accuracy').text((st.accuracy !== undefined ? st.accuracy : 100) + '%');
  $('#stat-lines').text(state.completedCount + '/' + processedLines.length);
  $('#stat-attempts').text(st.attempts || 0);

  // Control button states
  $('#btn-prev').prop('disabled', moveIndex <= 0);
  $('#btn-next').prop('disabled', moveIndex >= line.totalHalfMoves);
}

function renderMoveHistory(line) {
  var $history = $('#move-history');
  $history.empty();

  if (moveIndex === 0) {
    $history.html('<span class="empty-history">No moves played yet. Start drilling!</span>');
    return;
  }

  var html = '';
  for (var i = 0; i < moveIndex; i += 2) {
    var moveNum = Math.floor(i / 2) + 1;
    var wMove = line.moves[i] ? line.moves[i].san : '';
    var bMove = (i + 1 < moveIndex && line.moves[i + 1]) ? line.moves[i + 1].san : '';

    html += `
      <div class="history-pair">
        <span class="move-num">${moveNum}.</span>
        <span class="move-ply ${i === moveIndex - 1 ? 'active' : ''}">${wMove}</span>
        ${bMove ? `<span class="move-ply ${i + 1 === moveIndex - 1 ? 'active' : ''}">${bMove}</span>` : ''}
      </div>
    `;
  }
  $history.html(html);
}

function renderStepTree(line) {
  var $tree = $('#line-step-tree');
  $tree.empty();

  for (var i = 0; i < line.moves.length; i += 2) {
    var stepIdx = Math.floor(i / 2) + 1;
    var wSan = line.moves[i] ? line.moves[i].san : '';
    var bSan = line.moves[i + 1] ? line.moves[i + 1].san : '';

    var isCompleted = i + 1 < moveIndex;
    var isCurrent = i === moveIndex || i + 1 === moveIndex;

    var rowClass = 'tree-step-row';
    if (isCompleted) rowClass += ' completed';
    if (isCurrent) rowClass += ' current';

    var statusSymbol = isCompleted ? 'DONE' : (isCurrent ? 'NOW' : 'NEXT');

    var html = `
      <div class="${rowClass}">
        <span class="tree-step-idx">${stepIdx}.</span>
        <span class="tree-step-moves">${wSan} ${bSan}</span>
        <span class="tree-step-status">${statusSymbol}</span>
      </div>
    `;
    $tree.append(html);
  }
}

// ────────────────────────────────────────────────────────────
// HIGHLIGHT & ANIMATION HELPERS
// ────────────────────────────────────────────────────────────
function clearHighlights() {
  $('#board .square-55d63').removeClass('highlight-last-move highlight-hint-src highlight-hint-dst');
}

function highlightMoveSquares(from, to) {
  clearHighlights();
  $(`#board .square-${from}`).addClass('highlight-last-move');
  $(`#board .square-${to}`).addClass('highlight-last-move');
}

function triggerSuccessGlow() {
  var $glow = $('#board-glow');
  $glow.removeClass('error').addClass('active correct');
  setTimeout(function () {
    $glow.removeClass('active correct');
  }, 700);
}

function triggerErrorShake() {
  var $glow = $('#board-glow');
  var $wrapper = $('#board-wrapper');

  $glow.removeClass('correct').addClass('active error');
  $wrapper.addClass('neumorphic-shake');

  setTimeout(function () {
    $glow.removeClass('active error');
    $wrapper.removeClass('neumorphic-shake');
  }, 600);
}

function showToast(message, type) {
  var $toast = $('#status-toast');
  $('#toast-message').text(message);

  $toast.removeClass('hidden success error').addClass(type || 'success');

  $('#toast-icon').addClass('hidden').empty();

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(function () {
    $toast.addClass('hidden');
  }, TOAST_LIFE);
}

// ────────────────────────────────────────────────────────────
// EVENT LISTENERS & APPLICATION INITIALIZATION
// ────────────────────────────────────────────────────────────
function initEventListeners() {
  // Navigation Tabs
  $('#nav-catalog-btn, #brand-home').on('click', function () {
    switchView('catalog');
  });

  $('#nav-study-btn').on('click', function () {
    switchView('study');
  });

  // Text move submission
  $('#submit-move-btn').on('click', handleTextMoveSubmit);
  $('#move-input').on('keydown', function (e) {
    if (e.key === 'Enter') {
      handleTextMoveSubmit();
    }
  });

  // Bottom Control Deck
  $('#btn-catalog').on('click', function () {
    switchView('catalog');
  });

  $('#btn-start').on('click', function () {
    resetDrill();
  });

  $('#btn-hint').on('click', function () {
    requestHint();
  });

  $('#btn-reset').on('click', function () {
    resetDrill();
  });

  $('#btn-flip').on('click', function () {
    if (board) board.flip();
  });

  $('#btn-prev').on('click', function () {
    if (moveIndex > 0) {
      moveIndex--;
      if (game.history().length > 0) {
        game.undo();
      }
      board.position(game.fen());
      updateUI();
    }
  });

  $('#btn-next').on('click', function () {
    var line = processedLines[currentLineIndex];
    if (line && moveIndex < line.moves.length) {
      var nextM = line.moves[moveIndex];
      game.move(nextM.san);
      moveIndex++;
      board.position(game.fen());
      updateUI();
    }
  });
}

// Startup Initialization
$(document).ready(function () {
  processedLines = buildProcessedLines();
  loadState();
  initChessEngine();
  initEventListeners();
  renderCourseCatalog();
  selectLine(0);

  console.log('Modena Lines SPA initialized successfully with inline SVG piece engine!');
});
