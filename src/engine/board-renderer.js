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

export function getPieceDataURI(piece) {
  if (SVG_PIECES[piece]) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG_PIECES[piece]);
  }
  return '';
}

export function generateMiniBoardHTML(fen) {
  const temp = new Chess(fen || 'r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PPPP1PPP/RNBQK2R w KQkq - 0 4');
  const boardArr = temp.board();
  let html = '<div class="mini-board-grid">';

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = boardArr[r][c];
      const isLight = (r + c) % 2 === 0;
      const sqClass = isLight ? 'mini-sq light' : 'mini-sq dark';
      let pieceImg = '';
      if (piece) {
        const pieceCode = (piece.color === 'w' ? 'w' : 'b') + piece.type.toUpperCase();
        pieceImg = `<img src="${getPieceDataURI(pieceCode)}" alt="${pieceCode}"/>`;
      }
      html += `<div class="${sqClass}">${pieceImg}</div>`;
    }
  }
  html += '</div>';
  return html;
}
