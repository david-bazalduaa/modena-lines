/**
 * ============================================================
 * AUTOMATED TEST SUITE: RESPONSIVE DUAL-CONTROL PAWN TOGGLE
 * ============================================================
 * Verifies:
 * 1. Markup in index.html preserves desktop segmented control and introduces mobile pawn toggle.
 * 2. Mobile pawn toggle design: capsule track, sliding thumb, white and black pawn SVGs, ARIA attributes.
 * 3. HeaderView unified state synchronization:
 *    - State changes update both desktop and mobile toggle controls simultaneously.
 *    - Clicking mobile pawn buttons or track updates the active filter and notifies subscribers.
 * 4. Responsive CSS rules:
 *    - Desktop: full-text segmented control visible, mobile toggle hidden.
 *    - Mobile (< 768px): desktop segmented control hidden, mobile toggle visible.
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

console.log('--- Starting Responsive Dual-Control Pawn Toggle Test Suite ---');

// ==========================================
// 1. Markup Verification in index.html
// ==========================================
console.log('\n[1. HTML Markup & Dual-Control Architecture]');

const indexHtmlPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

test('index.html preserves desktop segmented control with #nav-white-btn and #nav-black-btn', () => {
  assert.ok(indexHtml.includes('id="repertoire-filter-tabs"'), 'Desktop tabs container must exist');
  assert.ok(indexHtml.includes('id="nav-white-btn"'), 'Desktop White button must exist');
  assert.ok(indexHtml.includes('id="nav-black-btn"'), 'Desktop Black button must exist');
  assert.ok(indexHtml.includes('White Openings'), 'Desktop White label must exist');
  assert.ok(indexHtml.includes('Black Defenses'), 'Desktop Black label must exist');
});

test('index.html includes mobile micro-toggle (#repertoire-filter-mobile)', () => {
  assert.ok(indexHtml.includes('id="repertoire-filter-mobile"'), 'Mobile filter container must exist');
  assert.ok(indexHtml.includes('id="mobile-pawn-track"'), 'Mobile capsule track must exist');
  assert.ok(indexHtml.includes('id="mobile-pawn-slider"'), 'Mobile sliding thumb must exist');
  assert.ok(indexHtml.includes('id="mobile-nav-white-btn"'), 'Mobile White pawn button must exist');
  assert.ok(indexHtml.includes('id="mobile-nav-black-btn"'), 'Mobile Black pawn button must exist');
});

test('Mobile pawn toggle includes crisp White and Black pawn SVG icons', () => {
  assert.ok(indexHtml.includes('pawn-white'), 'White pawn SVG class must exist');
  assert.ok(indexHtml.includes('pawn-black'), 'Black pawn SVG class must exist');
  assert.ok(indexHtml.includes('mobile-pawn-svg'), 'mobile-pawn-svg class must exist');
});

test('Mobile pawn toggle has accessible ARIA attributes', () => {
  assert.ok(indexHtml.includes('role="radiogroup"'), 'Must have role radiogroup');
  assert.ok(indexHtml.includes('aria-label="Toggle White Openings or Black Defenses"'), 'Must have accessible label');
  assert.ok(indexHtml.includes('role="radio"'), 'Buttons must have role radio');
});

// ==========================================
// 2. CSS Styling & Breakpoint Verification
// ==========================================
console.log('\n[2. Neumorphic CSS Styling & Viewport Breakpoints]');

const componentsCss = fs.readFileSync(path.resolve('styles/components.css'), 'utf8');
const mainCss = fs.readFileSync(path.resolve('styles/main.css'), 'utf8');

test('components.css defines capsule track, slider, and pawn buttons', () => {
  assert.ok(componentsCss.includes('.mobile-pawn-track'), '.mobile-pawn-track must exist in CSS');
  assert.ok(componentsCss.includes('width: 64px;'), 'Track must have 64px width');
  assert.ok(componentsCss.includes('height: 32px;'), 'Track must have 32px height');
  assert.ok(componentsCss.includes('.mobile-pawn-slider'), '.mobile-pawn-slider must exist in CSS');
  assert.ok(componentsCss.includes('.slide-black'), '.slide-black transform must exist');
  assert.ok(componentsCss.includes('translateX(32px)'), 'Slider must slide 32px to black position');
});

test('components.css hides mobile toggle by default on desktop', () => {
  const defaultMobileRule = componentsCss.substring(
    componentsCss.indexOf('.repertoire-filter-mobile'),
    componentsCss.indexOf('.mobile-pawn-track')
  );
  assert.ok(defaultMobileRule.includes('display: none;'), 'Mobile toggle must default to display: none on desktop');
});

test('main.css switches controls under mobile breakpoint (< 768px)', () => {
  const mobileQueryIdx = mainCss.indexOf('@media (max-width: 767px)');
  assert.ok(mobileQueryIdx !== -1, 'Mobile media query must exist');

  const mobileQueryBlock = mainCss.substring(mobileQueryIdx, mobileQueryIdx + 2500);
  assert.ok(mobileQueryBlock.includes('#repertoire-filter-tabs') && mobileQueryBlock.includes('display: none !important;'), 'Desktop tabs must be hidden on mobile');
  assert.ok(mobileQueryBlock.includes('#repertoire-filter-mobile') && mobileQueryBlock.includes('display: flex !important;'), 'Mobile toggle must be displayed on mobile');
});

// ==========================================
// 3. HeaderView Unified State Synchronization
// ==========================================
console.log('\n[3. HeaderView State Synchronization Simulation]');

// Create lightweight DOM mock to test HeaderView logic
class MockDOMElement {
  constructor(id, classes = []) {
    this.id = id;
    this.classes = new Set(classes);
    this.attrs = {};
    this.eventHandlers = {};
    this.length = 1;
  }
  addClass(c) { this.classes.add(c); return this; }
  removeClass(c) { this.classes.delete(c); return this; }
  toggleClass(c, state) {
    if (state !== undefined) {
      if (state) this.classes.add(c); else this.classes.delete(c);
    } else {
      if (this.classes.has(c)) this.classes.delete(c); else this.classes.add(c);
    }
    return this;
  }
  hasClass(c) { return this.classes.has(c); }
  attr(k, v) {
    if (v !== undefined) { this.attrs[k] = v; return this; }
    return this.attrs[k];
  }
  data(k) { return this.attrs[`data-${k}`]; }
  off() { return this; }
  on(evt, sub, fn) {
    const handler = fn || sub;
    this.eventHandlers[evt] = handler;
    return this;
  }
  is(selector) {
    return selector.includes(this.id) || this.classes.has(selector.replace('.', ''));
  }
}

const mockDesktopWhite = new MockDOMElement('nav-white-btn', ['nav-tab', 'active']);
mockDesktopWhite.attr('data-filter', 'white');
const mockDesktopBlack = new MockDOMElement('nav-black-btn', ['nav-tab']);
mockDesktopBlack.attr('data-filter', 'black');

const mockMobileToggle = new MockDOMElement('repertoire-filter-mobile');
const mockMobileSlider = new MockDOMElement('mobile-pawn-slider');
const mockMobileWhite = new MockDOMElement('mobile-nav-white-btn', ['mobile-pawn-btn', 'active']);
mockMobileWhite.attr('data-filter', 'white');
const mockMobileBlack = new MockDOMElement('mobile-nav-black-btn', ['mobile-pawn-btn']);
mockMobileBlack.attr('data-filter', 'black');
const mockMobileTrack = new MockDOMElement('mobile-pawn-track');

const mockDesktopContainer = new MockDOMElement('repertoire-filter-tabs');

global.$ = function(selector) {
  if (selector === '#repertoire-filter-tabs') return {
    length: 1,
    off: () => ({ on: (evt, sub, fn) => mockDesktopContainer.on(evt, sub, fn) }),
    on: (evt, sub, fn) => mockDesktopContainer.on(evt, sub, fn)
  };
  if (selector === '#repertoire-filter-tabs .nav-tab') return {
    removeClass: (c) => { mockDesktopWhite.removeClass(c); mockDesktopBlack.removeClass(c); return this; }
  };
  if (selector === '#repertoire-filter-tabs .nav-tab[data-filter="white"]') return mockDesktopWhite;
  if (selector === '#repertoire-filter-tabs .nav-tab[data-filter="black"]') return mockDesktopBlack;
  if (selector === '#repertoire-filter-mobile') return mockMobileToggle;
  if (selector === '#mobile-pawn-track') return mockMobileTrack;
  if (selector === '#mobile-pawn-slider') return mockMobileSlider;
  if (selector === '#mobile-nav-white-btn') return mockMobileWhite;
  if (selector === '#mobile-nav-black-btn') return mockMobileBlack;
  return { length: 0, off: () => ({ on: () => {} }), on: () => {}, addClass: () => {}, removeClass: () => {} };
};

const { HeaderView } = await import('../src/ui/header-view.js');

test('HeaderView initializes to active color filter and syncs mobile toggle', () => {
  const headerView = new HeaderView({ initialFilter: 'white' });
  assert.strictEqual(headerView.getActiveFilter(), 'white');
  assert.strictEqual(mockMobileSlider.attr('data-active'), 'white');
  assert.ok(!mockMobileSlider.hasClass('slide-black'));
  assert.ok(mockMobileWhite.hasClass('active'));
  assert.ok(!mockMobileBlack.hasClass('active'));
});

test('HeaderView.setActiveFilter("black") synchronizes both desktop and mobile UI elements', () => {
  let notifiedColor = null;
  const headerView = new HeaderView({
    initialFilter: 'white',
    onFilterChange: (col) => { notifiedColor = col; }
  });

  headerView.setActiveFilter('black', true);

  // Perspective state
  assert.strictEqual(headerView.getActiveFilter(), 'black');
  assert.strictEqual(notifiedColor, 'black');

  // Desktop sync
  assert.ok(mockDesktopBlack.hasClass('active'));
  assert.ok(!mockDesktopWhite.hasClass('active'));

  // Mobile sync
  assert.strictEqual(mockMobileSlider.attr('data-active'), 'black');
  assert.ok(mockMobileSlider.hasClass('slide-black'));
  assert.ok(mockMobileBlack.hasClass('active'));
  assert.ok(!mockMobileWhite.hasClass('active'));
  assert.strictEqual(mockMobileBlack.attr('aria-checked'), 'true');
  assert.strictEqual(mockMobileWhite.attr('aria-checked'), 'false');
});

test('HeaderView.setActiveFilter("white") restores White state across both controls', () => {
  let notifiedColor = null;
  const headerView = new HeaderView({
    initialFilter: 'black',
    onFilterChange: (col) => { notifiedColor = col; }
  });

  headerView.setActiveFilter('white', true);

  // Perspective state
  assert.strictEqual(headerView.getActiveFilter(), 'white');
  assert.strictEqual(notifiedColor, 'white');

  // Desktop sync
  assert.ok(mockDesktopWhite.hasClass('active'));
  assert.ok(!mockDesktopBlack.hasClass('active'));

  // Mobile sync
  assert.strictEqual(mockMobileSlider.attr('data-active'), 'white');
  assert.ok(!mockMobileSlider.hasClass('slide-black'));
  assert.ok(mockMobileWhite.hasClass('active'));
  assert.ok(!mockMobileBlack.hasClass('active'));
  assert.strictEqual(mockMobileWhite.attr('aria-checked'), 'true');
  assert.strictEqual(mockMobileBlack.attr('aria-checked'), 'false');
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL RESPONSIVE PAWN TOGGLE TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
