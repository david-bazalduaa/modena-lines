/**
 * ============================================================
 * AUTOMATED TEST SUITE: MONOCHROMATIC REPERTOIRE SEARCH BAR
 * ============================================================
 * Verifies:
 * 1. Pure matching helper matchesCourseQuery(course, query) across titles, sub-modules,
 *    tactical tags (Checkmate, Greek Gift, Fork, Blunder, Gambit), and descriptions.
 * 2. CatalogSearchController debounced real-time query synchronization between desktop & mobile.
 * 3. Mobile search button placement strictly between pawn toggle and support heart button.
 * 4. Desktop recessed search bar inside catalog section header row.
 * 5. Monochromatic styling constraints: no disruptive bright accent colors or colored focus rings.
 * 6. Clean empty-state card when 0 openings match query.
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { COURSES } from '../src/data/courses.js';
import { matchesCourseQuery } from '../src/ui/dashboard-view.js';
import { CatalogSearchController } from '../src/ui/catalog-search.js';

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

console.log('--- Starting Repertoire Search Bar Test Suite ---');

// ==========================================
// 1. Pure Matching Logic
// ==========================================
console.log('\n[1. Pure Search Filter Logic (matchesCourseQuery)]');

const italianCourse = COURSES.find(c => c.id === 'italian-game');
const sicilianCourse = COURSES.find(c => c.id === 'sicilian-defense');
const frenchCourse = COURSES.find(c => c.id === 'french-defense');

test('Empty or whitespace query matches all courses', () => {
  assert.strictEqual(matchesCourseQuery(italianCourse, ''), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, '   '), true);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, null), true);
});

test('Matches opening title case-insensitively', () => {
  assert.strictEqual(matchesCourseQuery(italianCourse, 'italian'), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, 'ITALIAN'), true);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, 'sicilian'), true);
  assert.strictEqual(matchesCourseQuery(frenchCourse, 'french'), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, 'french'), false);
});

test('Matches sub-course variation names', () => {
  assert.strictEqual(matchesCourseQuery(italianCourse, 'Giuoco Piano'), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, 'Evans Gambit'), true);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, 'Najdorf'), true);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, 'Dragon'), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, 'Dragon'), false);
});

test('Matches tactical punishment tags (Greek Gift, Fork, Gambit, Blunder)', () => {
  assert.strictEqual(matchesCourseQuery(italianCourse, 'Gambit'), true);
  assert.strictEqual(matchesCourseQuery(italianCourse, 'Greek Gift'), true);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, 'Fork'), true);
});

test('Returns false for completely non-existent query', () => {
  assert.strictEqual(matchesCourseQuery(italianCourse, 'xyzrandomnonexistentquery123'), false);
  assert.strictEqual(matchesCourseQuery(sicilianCourse, 'xyzrandomnonexistentquery123'), false);
});

// ==========================================
// 2. HTML Markup & Placement Verification
// ==========================================
console.log('\n[2. HTML Markup & Placement Architecture]');

const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');

test('Mobile search trigger (#btn-search-mobile) sits strictly between pawn toggle and support button', () => {
  assert.ok(indexHtml.includes('id="btn-search-mobile"'), '#btn-search-mobile must exist');

  const pawnToggleIdx = indexHtml.indexOf('id="repertoire-filter-mobile"');
  const searchBtnIdx = indexHtml.indexOf('id="btn-search-mobile"');
  const donateBtnIdx = indexHtml.indexOf('id="btn-donate"');

  assert.ok(pawnToggleIdx !== -1, 'pawn toggle must exist');
  assert.ok(searchBtnIdx !== -1, 'search button must exist');
  assert.ok(donateBtnIdx !== -1, 'donate button must exist');

  assert.ok(pawnToggleIdx < searchBtnIdx, 'Pawn toggle must come before search button');
  assert.ok(searchBtnIdx < donateBtnIdx, 'Search button must come before support button');
});

test('Mobile search overlay container (#mobile-search-overlay) exists with input, clear, and close buttons', () => {
  assert.ok(indexHtml.includes('id="mobile-search-overlay"'), '#mobile-search-overlay must exist');
  assert.ok(indexHtml.includes('id="catalog-search-mobile"'), '#catalog-search-mobile must exist');
  assert.ok(indexHtml.includes('id="mobile-search-clear"'), '#mobile-search-clear must exist');
  assert.ok(indexHtml.includes('id="mobile-search-close"'), '#mobile-search-close must exist');
});

test('Desktop recessed search bar is situated inside .section-title-bar with clear button', () => {
  assert.ok(indexHtml.includes('class="catalog-search-desktop-wrapper"'), '.catalog-search-desktop-wrapper must exist');
  assert.ok(indexHtml.includes('id="catalog-search-desktop"'), '#catalog-search-desktop must exist');
  assert.ok(indexHtml.includes('id="catalog-search-desktop-clear"'), '#catalog-search-desktop-clear must exist');

  const sectionBarIdx = indexHtml.indexOf('class="section-title-bar catalog-header-row"');
  const desktopSearchIdx = indexHtml.indexOf('id="catalog-search-desktop"');
  assert.ok(sectionBarIdx !== -1, 'Section title bar must exist');
  assert.ok(desktopSearchIdx > sectionBarIdx, 'Desktop search must be inside section title bar');
});

// ==========================================
// 3. Monochromatic Neumorphic CSS Styling
// ==========================================
console.log('\n[3. Monochromatic Neumorphic CSS Verification]');

const componentsCss = fs.readFileSync(path.resolve('styles/components.css'), 'utf8');
const mainCss = fs.readFileSync(path.resolve('styles/main.css'), 'utf8');

test('components.css defines desktop recessed search bar with neutral slate styling', () => {
  assert.ok(componentsCss.includes('.catalog-search-desktop-wrapper'), '.catalog-search-desktop-wrapper must exist');
  assert.ok(componentsCss.includes('.catalog-search-input'), '.catalog-search-input must exist');
  assert.ok(componentsCss.includes('var(--shadow-pressed)'), 'Input must have recessed inner shadow');
  // Check no bright accent colors in input focus
  const searchInputBlock = componentsCss.substring(
    componentsCss.indexOf('.catalog-search-input:focus'),
    componentsCss.indexOf('.catalog-search-input:focus') + 300
  );
  assert.ok(!searchInputBlock.includes('#3b82f6') && !searchInputBlock.includes('blue'), 'Focus ring must not be bright blue');
  assert.ok(!searchInputBlock.includes('purple') && !searchInputBlock.includes('green'), 'Focus ring must not be purple or green');
});

test('components.css defines circular mobile search button matching heart pill dimensions', () => {
  assert.ok(componentsCss.includes('.search-pill-btn'), '.search-pill-btn must exist in CSS');
  assert.ok(componentsCss.includes('border-radius: 50%'), 'Mobile search pill must be circular');
  assert.ok(componentsCss.includes('width: 32px;'), 'Width must be 32px');
  assert.ok(componentsCss.includes('height: 32px;'), 'Height must be 32px');
});

test('components.css defines mobile search takeover overlay', () => {
  assert.ok(componentsCss.includes('.mobile-search-overlay'), '.mobile-search-overlay must exist in CSS');
  assert.ok(componentsCss.includes('.mobile-search-inner'), '.mobile-search-inner must exist in CSS');
  assert.ok(componentsCss.includes('fixed'), 'Overlay must be fixed at top of screen');
});

test('main.css switches search controls cleanly between mobile and desktop', () => {
  const mobileQuery = mainCss.substring(mainCss.indexOf('@media (max-width: 767px)'));
  assert.ok(mobileQuery.includes('.catalog-search-desktop-wrapper') && mobileQuery.includes('display: none !important;'), 'Desktop search must be hidden on mobile');
  assert.ok(mobileQuery.includes('#btn-search-mobile') && mobileQuery.includes('display: flex !important;'), 'Mobile search trigger must be visible on mobile');
});

// ==========================================
// 4. CatalogSearchController Simulation
// ==========================================
console.log('\n[4. CatalogSearchController Real-Time Sync & Debounce]');

class MockElement {
  constructor(id) {
    this.id = id;
    this.value = '';
    this.classes = new Set();
    this.handlers = {};
    this.length = 1;
  }
  val(v) { if (v !== undefined) { this.value = v; return this; } return this.value; }
  addClass(c) { this.classes.add(c); return this; }
  removeClass(c) { this.classes.delete(c); return this; }
  toggleClass(c, state) {
    if (state) this.classes.add(c); else this.classes.delete(c);
    return this;
  }
  hasClass(c) { return this.classes.has(c); }
  focus() {}
  off() { return this; }
  on(evt, fn) { this.handlers[evt] = fn; return this; }
}

const mockDesktopInput = new MockElement('catalog-search-desktop');
const mockDesktopClear = new MockElement('catalog-search-desktop-clear');
mockDesktopClear.addClass('hidden');
const mockMobileInput = new MockElement('catalog-search-mobile');
const mockMobileClear = new MockElement('mobile-search-clear');
mockMobileClear.addClass('hidden');
const mockMobileOverlay = new MockElement('mobile-search-overlay');
mockMobileOverlay.addClass('hidden');
const mockMobileTrigger = new MockElement('btn-search-mobile');
const mockMobileClose = new MockElement('mobile-search-close');

global.$ = function(selector) {
  if (selector === '#catalog-search-desktop') return mockDesktopInput;
  if (selector === '#catalog-search-desktop-clear') return mockDesktopClear;
  if (selector === '#catalog-search-mobile') return mockMobileInput;
  if (selector === '#mobile-search-clear') return mockMobileClear;
  if (selector === '#mobile-search-overlay') return mockMobileOverlay;
  if (selector === '#btn-search-mobile') return mockMobileTrigger;
  if (selector === '#mobile-search-close') return mockMobileClose;
  return { length: 0, off: () => ({ on: () => {} }), on: () => {}, val: () => '', toggleClass: () => {}, addClass: () => {}, removeClass: () => {} };
};

global.document = {
  off: () => ({ on: () => {} }),
  on: () => {}
};

test('CatalogSearchController synchronizes desktop input with mobile input', (done) => {
  let notifiedQuery = null;
  const searchCtrl = new CatalogSearchController({
    debounceMs: 50,
    onSearch: (q) => { notifiedQuery = q; }
  });

  searchCtrl.handleInput('sicilian', 'desktop');

  assert.strictEqual(mockMobileInput.val(), 'sicilian');
  assert.strictEqual(searchCtrl.getQuery(), 'sicilian');
  assert.ok(!mockDesktopClear.hasClass('hidden'), 'Clear button must be visible when query is typed');

  setTimeout(() => {
    assert.strictEqual(notifiedQuery, 'sicilian', 'onSearch callback must receive debounced query');
    done();
  }, 70);
});

test('CatalogSearchController setQuery("") clears both inputs and hides clear buttons', () => {
  const searchCtrl = new CatalogSearchController({ debounceMs: 50 });
  searchCtrl.setQuery('', false);

  assert.strictEqual(mockDesktopInput.val(), '');
  assert.strictEqual(mockMobileInput.val(), '');
  assert.ok(mockDesktopClear.hasClass('hidden'), 'Desktop clear button must be hidden when empty');
  assert.ok(mockMobileClear.hasClass('hidden'), 'Mobile clear button must be hidden when empty');
});

test('CatalogSearchController openMobileSearch reveals overlay and closeMobileSearch hides it', () => {
  const searchCtrl = new CatalogSearchController({ debounceMs: 50 });

  searchCtrl.openMobileSearch();
  assert.ok(!mockMobileOverlay.hasClass('hidden'), 'Overlay must not have hidden class when opened');

  searchCtrl.closeMobileSearch();
  assert.ok(mockMobileOverlay.hasClass('hidden'), 'Overlay must have hidden class when closed');
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL REPERTOIRE SEARCH TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
