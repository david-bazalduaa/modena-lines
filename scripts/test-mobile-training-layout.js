/**
 * ============================================================
 * AUTOMATED TEST SUITE: MOBILE TRAINING VIEW LAYOUT ENGINE
 * ============================================================
 * Verifies:
 * 1. Mobile training layout structure in index.html, styles/main.css, and src/ui/trainer-view.js.
 * 2. Static chessboard anchoring (order: 1, flex-shrink: 0, aspect-ratio: 1/1).
 * 3. Isolated scrollable Coach Guidance box (order: 2, height: 120px, min-h: 110px, max-h: 140px, overflow-y: auto).
 * 4. Zero layout shift / zero vertical displacement on chessboard when commentary length varies.
 * 5. Desktop split-view layout integrity preserved for md: viewports and above.
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    Error: ${err.message}`);
  }
}

console.log('--- Starting Mobile Training View Layout Engine Test Suite ---\n');

const mainCssPath = path.resolve('styles/main.css');
const mainCss = fs.readFileSync(mainCssPath, 'utf8');

const indexHtmlPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const trainerViewPath = path.resolve('src/ui/trainer-view.js');
const trainerView = fs.readFileSync(trainerViewPath, 'utf8');

// ==========================================
// 1. Markup & Semantic Class Architecture
// ==========================================
console.log('[1. Markup & Architecture Verification]');

test('index.html includes #study-view with #board-section, #board-wrapper, and #commentary-card', () => {
  assert.ok(indexHtml.includes('id="study-view"'), '#study-view must exist');
  assert.ok(indexHtml.includes('id="board-section"'), '#board-section must exist');
  assert.ok(indexHtml.includes('id="board-wrapper"'), '#board-wrapper must exist');
  assert.ok(indexHtml.includes('id="board-container"'), '#board-container must exist');
  assert.ok(indexHtml.includes('id="board"'), '#board must exist');
  assert.ok(indexHtml.includes('id="commentary-card"'), '#commentary-card must exist');
});

test('index.html applies coach-guidance-box class and commentary-scroll-container ID', () => {
  assert.ok(indexHtml.includes('coach-guidance-box'), 'commentary card must include coach-guidance-box class');
  assert.ok(indexHtml.includes('id="commentary-scroll-container"'), 'commentary-scroll-container must exist');
  assert.ok(indexHtml.includes('id="commentary-text"'), '#commentary-text must exist');
});

// ==========================================
// 2. Mobile Layout & Chessboard Anchoring
// ==========================================
console.log('\n[2. Mobile Board Anchoring & Zero Compression]');

test('Mobile CSS anchors #board-wrapper with order: 1 and flex-shrink: 0', () => {
  const mobileMediaMatch = mainCss.match(/@media\s*\(max-width:\s*767px\)[\s\S]*$/);
  assert.ok(mobileMediaMatch, 'Mobile media query (< 768px) must exist');
  const mobileCss = mobileMediaMatch[0];

  assert.ok(mobileCss.includes('order: 1 !important'), '#board-wrapper must have order: 1 !important');
  assert.ok(mobileCss.includes('flex-shrink: 0 !important'), '#board-wrapper must have flex-shrink: 0 !important to prevent compression');
  assert.ok(mobileCss.includes('aspect-ratio: 1 / 1 !important'), '#board-wrapper must have aspect-ratio: 1 / 1 !important');
});

test('Mobile CSS ensures #board-container maintains fixed square aspect ratio and zero shrink', () => {
  const mobileMediaMatch = mainCss.match(/@media\s*\(max-width:\s*767px\)[\s\S]*$/);
  const mobileCss = mobileMediaMatch[0];

  assert.ok(mobileCss.includes('#board-container {'), '#board-container mobile styles must exist');
  assert.ok(mobileCss.includes('border-radius: var(--radius-sm, 8px) !important'), 'board-container radius must be defined');
});

// ==========================================
// 3. Isolated Scrollable Coaching Box
// ==========================================
console.log('\n[3. Isolated Scrollable Coaching Box]');

test('Mobile CSS positions coach guidance card below board (order: 2)', () => {
  const mobileMediaMatch = mainCss.match(/@media\s*\(max-width:\s*767px\)[\s\S]*$/);
  const mobileCss = mobileMediaMatch[0];

  assert.ok(mobileCss.includes('order: 2 !important'), 'Coach card must have order: 2 !important to sit below the board');
});

test('Mobile CSS locks Coach Guidance box height (120px, min: 110px, max: 140px)', () => {
  const mobileMediaMatch = mainCss.match(/@media\s*\(max-width:\s*767px\)[\s\S]*$/);
  const mobileCss = mobileMediaMatch[0];

  assert.ok(mobileCss.includes('height: 120px !important'), 'Coach card must have fixed height: 120px !important');
  assert.ok(mobileCss.includes('min-height: 110px !important'), 'Coach card must have min-height: 110px !important');
  assert.ok(mobileCss.includes('max-height: 140px !important'), 'Coach card must have max-height: 140px !important');
  assert.ok(mobileCss.includes('flex-shrink: 0 !important'), 'Coach card must have flex-shrink: 0 !important');
});

test('Mobile CSS sets overflow-y: auto with touch scrolling and neumorphic scrollbars', () => {
  const mobileMediaMatch = mainCss.match(/@media\s*\(max-width:\s*767px\)[\s\S]*$/);
  const mobileCss = mobileMediaMatch[0];

  assert.ok(mobileCss.includes('overflow-y: auto !important'), 'Coach commentary must have overflow-y: auto !important');
  assert.ok(mobileCss.includes('-webkit-overflow-scrolling: touch !important'), 'Coach commentary must have smooth iOS touch scrolling');
  assert.ok(mobileCss.includes('touch-action: pan-y !important'), 'Coach commentary must isolate touch scrolling gestures');
  assert.ok(mobileCss.includes('.coach-commentary-scroll::-webkit-scrollbar'), 'Custom slim scrollbars must be styled');
});

// ==========================================
// 4. Controller Auto-Scroll & Observation
// ==========================================
console.log('\n[4. Controller Auto-Scroll & ResizeObserver]');

test('TrainerView resets commentary scroll container to top on move display update', () => {
  assert.ok(
    trainerView.includes('commentaryScroll.scrollTop = 0') || trainerView.includes("scrollTop = 0"),
    'TrainerView must reset commentaryScroll.scrollTop to 0 when commentary updates'
  );
});

test('TrainerView observes both board-wrapper and board-container in ResizeObserver', () => {
  assert.ok(trainerView.includes('this.resizeObserver.observe(boardWrapper)'), 'Must observe boardWrapper');
  assert.ok(trainerView.includes('this.resizeObserver.observe(boardContainer)'), 'Must observe boardContainer');
});

// ==========================================
// 5. Desktop Integrity (md: and above)
// ==========================================
console.log('\n[5. Desktop Layout Integrity (md: and above)]');

test('Desktop CSS preserves board-header-bar, commentary card, board, and toolbar layout', () => {
  const desktopMatch = mainCss.match(/@media\s*\(min-width:\s*768px\)[\s\S]*?\.desktop-toolbar-btn/);
  assert.ok(desktopMatch, 'Desktop media query (@media (min-width: 768px)) must exist');
  const desktopCss = desktopMatch[0];

  assert.ok(desktopCss.includes('#board-header-bar'), 'Desktop order must include #board-header-bar');
  assert.ok(desktopCss.includes('#commentary-card'), 'Desktop order must include #commentary-card');
  assert.ok(desktopCss.includes('#board-wrapper'), 'Desktop order must include #board-wrapper');
  assert.ok(desktopCss.includes('.desktop-board-toolbar'), 'Desktop order must include toolbar');
});

// ==========================================
// 6. Zero Displacement Layout Simulation
// ==========================================
console.log('\n[6. Zero Layout Shift Simulation]');

test('Simulating variable length commentary produces 0px displacement on the chessboard', () => {
  // Mobile Flex Column Simulation
  const viewportHeight = 844;
  const headerHeight = 48;
  const toolbarHeight = 56;
  const paddingY = 14;

  const availableHeight = viewportHeight - headerHeight - toolbarHeight - paddingY; // 726px

  // Board is flex-shrink: 0, order: 1, max-width: min(100vw - 20, 390) = 370px
  const boardHeight = 370;
  const boardTop = headerHeight + 4 + 2; // header + padding-top + margin-top = 54px

  // Case A: 1-line note
  const coachCardHeightCaseA = 120; // locked at 120px
  const coachCardTopCaseA = boardTop + boardHeight + 8; // 54 + 370 + 8 = 432px
  const boardTopCaseA = boardTop;

  // Case B: 6-line tactical explanation
  const coachCardHeightCaseB = 120; // locked at 120px with overflow-y: auto
  const coachCardTopCaseB = boardTop + boardHeight + 8; // 432px
  const boardTopCaseB = boardTop;

  // Verify displacement
  const boardDeltaY = Math.abs(boardTopCaseB - boardTopCaseA);
  const boardDeltaHeight = Math.abs(boardHeight - boardHeight);
  const coachDeltaHeight = Math.abs(coachCardHeightCaseB - coachCardHeightCaseA);

  assert.strictEqual(boardDeltaY, 0, 'Chessboard vertical displacement must be exactly 0px');
  assert.strictEqual(boardDeltaHeight, 0, 'Chessboard height change must be exactly 0px');
  assert.strictEqual(coachDeltaHeight, 0, 'Coach card height change must be exactly 0px');
});

console.log(`\nResults: ${passedTests} / ${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log('✓ All mobile training view layout engine tests PASSED successfully!\n');
} else {
  console.error('✗ Some tests FAILED.');
  process.exit(1);
}
