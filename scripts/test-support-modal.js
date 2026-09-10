/**
 * ============================================================
 * AUTOMATED TEST SUITE: SPANISH SUPPORT MODAL & MXN TIERS
 * ============================================================
 * Verifies:
 * 1. SUPPORT_CONFIG in settings.js (currency MXN, tiers without emojis, custom amount).
 * 2. SupportModal class lifecycle: DOM generation, open/close, non-destructive behavior.
 * 3. Dynamic PayPal URL generation for preset MXN amounts (50MXN, 100MXN, 200MXN, and base link).
 * 4. User-facing Spanish copy (title, description, button labels, footer).
 * 5. CSS classes and neumorphic styling for the support modal overlay, card, and chips.
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { SUPPORT_CONFIG, APP_CONFIG, PAYPAL_DONATE_URL } from '../src/config/settings.js';
import { SupportModal } from '../src/ui/support-modal.js';

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

console.log('--- Starting Spanish Support Modal (MXN) Integration Test Suite ---');

// ==========================================
// 1. Settings & Config Verification
// ==========================================
console.log('\n[1. Settings & Configuration]');

test('SUPPORT_CONFIG is defined with currency MXN', () => {
  assert.ok(SUPPORT_CONFIG, 'SUPPORT_CONFIG must be exported');
  assert.strictEqual(SUPPORT_CONFIG.currency, 'MXN', 'Currency must be MXN');
  assert.strictEqual(SUPPORT_CONFIG.paypalMeUrl, PAYPAL_DONATE_URL);
  assert.strictEqual(APP_CONFIG.supportConfig, SUPPORT_CONFIG);
});

test('SUPPORT_CONFIG tiers contain $50 MXN, $100 MXN, $200 MXN, and Monto libre without emojis', () => {
  assert.ok(Array.isArray(SUPPORT_CONFIG.tiers), 'Tiers must be an array');
  assert.strictEqual(SUPPORT_CONFIG.tiers.length, 4, 'Must have 4 tiers');

  const amounts = SUPPORT_CONFIG.tiers.map(t => t.amount);
  assert.deepStrictEqual(amounts, [50, 100, 200, null]);

  const labels = SUPPORT_CONFIG.tiers.map(t => t.label);
  assert.deepStrictEqual(labels, ['$50 MXN', '$100 MXN', '$200 MXN', 'Monto libre']);

  // Ensure no emojis exist in labels
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;
  SUPPORT_CONFIG.tiers.forEach(tier => {
    assert.ok(!emojiRegex.test(tier.label), `Tier label "${tier.label}" must not contain emojis`);
  });
});

test('Default tier is $100 MXN', () => {
  const defaultTier = SUPPORT_CONFIG.tiers.find(t => t.default);
  assert.ok(defaultTier, 'A default tier must be specified');
  assert.strictEqual(defaultTier.amount, 100);
});

test('User-facing text is in Spanish', () => {
  assert.strictEqual(SUPPORT_CONFIG.title, 'Apoya a Modena Lines');
  assert.ok(SUPPORT_CONFIG.message.includes('comunidad de ajedrez'));
  assert.ok(SUPPORT_CONFIG.message.includes('100% libres de publicidad'));
  assert.ok(SUPPORT_CONFIG.footer.includes('Pago seguro procesado por PayPal'));
});

// ==========================================
// 2. URL Generation & Tier Logic
// ==========================================
console.log('\n[2. Dynamic PayPal URL & CTA Label Building]');

// Mock minimal DOM environment for class testing
class MockElement {
  constructor(tag = 'div') {
    this.tag = tag;
    this.classList = new Set();
    this.attributes = {};
    this.textValue = '';
    this.handlers = {};
  }
  addClass(c) { this.classList.add(c); return this; }
  removeClass(c) { this.classList.delete(c); return this; }
  toggleClass(c, val) { if (val) this.classList.add(c); else this.classList.delete(c); return this; }
  attr(k, v) { if (v !== undefined) { this.attributes[k] = v; return this; } return this.attributes[k]; }
  text(t) { if (t !== undefined) { this.textValue = t; return this; } return this.textValue; }
  data(k) { return this.attributes[`data-${k}`]; }
  on(evt, fn) { this.handlers[evt] = fn; return this; }
  focus() {}
}

const mockOverlay = new MockElement();
const mockCta = new MockElement();
const mockCtaLabel = new MockElement();
const mockBody = new MockElement();

const mockChips = SUPPORT_CONFIG.tiers.map(t => {
  const chip = new MockElement();
  chip.attr('data-tier-id', t.id);
  chip.attr('data-amount', t.amount !== null ? t.amount : '');
  return chip;
});

// Mock minimal jQuery
global.$ = function(selector) {
  if (selector instanceof MockElement) return selector;
  if (selector === '#support-modal-overlay') return {
    length: 1,
    removeClass: (c) => mockOverlay.removeClass(c),
    addClass: (c) => mockOverlay.addClass(c),
    on: (evt, fn) => mockOverlay.on(evt, fn)
  };
  if (selector === '#support-paypal-cta') return {
    attr: (k, v) => mockCta.attr(k, v)
  };
  if (selector === '#support-cta-label') return {
    text: (t) => mockCtaLabel.text(t)
  };
  if (selector === 'body') return {
    addClass: (c) => mockBody.addClass(c),
    removeClass: (c) => mockBody.removeClass(c),
    append: () => {}
  };
  if (selector === '.support-tier-chip') return {
    each: (fn) => { mockChips.forEach(c => fn.call(c)); },
    on: () => {}
  };
  if (selector === '#support-modal-close') return {
    on: () => {},
    focus: () => {}
  };
  return { length: 0, on: () => {}, addClass: () => {}, removeClass: () => {} };
};

global.document = {
  on: () => {}
};

test('SupportModal generates correct PayPal URLs for all tiers', () => {
  const modal = new SupportModal();

  assert.strictEqual(modal.buildPayPalUrl('tier-50'), 'https://paypal.me/pagamejpygael/50MXN');
  assert.strictEqual(modal.buildPayPalUrl('tier-100'), 'https://paypal.me/pagamejpygael/100MXN');
  assert.strictEqual(modal.buildPayPalUrl('tier-200'), 'https://paypal.me/pagamejpygael/200MXN');
  assert.strictEqual(modal.buildPayPalUrl('tier-custom'), 'https://paypal.me/pagamejpygael');
});

test('SupportModal generates correct CTA labels in Spanish', () => {
  const modal = new SupportModal();

  assert.strictEqual(modal.buildCtaLabel('tier-50'), 'Donar $50 MXN con PayPal');
  assert.strictEqual(modal.buildCtaLabel('tier-100'), 'Donar $100 MXN con PayPal');
  assert.strictEqual(modal.buildCtaLabel('tier-200'), 'Donar $200 MXN con PayPal');
  assert.strictEqual(modal.buildCtaLabel('tier-custom'), 'Donar con PayPal');
});

test('SupportModal selectTier updates state and attributes', () => {
  const modal = new SupportModal();
  modal.selectTier('tier-200');

  assert.strictEqual(modal.selectedTierId, 'tier-200');
  assert.strictEqual(mockCta.attributes['href'], 'https://paypal.me/pagamejpygael/200MXN');
  assert.strictEqual(mockCtaLabel.textValue, 'Donar $200 MXN con PayPal');
});

test('SupportModal open and close toggles modal-open on body and hidden on overlay', () => {
  const modal = new SupportModal();

  modal.open();
  assert.strictEqual(modal.isOpen, true);
  assert.ok(mockBody.classList.has('modal-open'));
  assert.ok(!mockOverlay.classList.has('hidden'));

  modal.close();
  assert.strictEqual(modal.isOpen, false);
  assert.ok(!mockBody.classList.has('modal-open'));
  assert.ok(mockOverlay.classList.has('hidden'));
});

// ==========================================
// 3. HTML Markup & Components
// ==========================================
console.log('\n[3. HTML & Navigation Integration]');

const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');

test('index.html contains #btn-donate with label "Apoyar" and Spanish aria-label', () => {
  assert.ok(indexHtml.includes('id="btn-donate"'), '#btn-donate must exist');
  assert.ok(indexHtml.includes('aria-label="Apoyar a Modena Lines"'), 'aria-label must be in Spanish');
  assert.ok(indexHtml.includes('<span class="donate-label">Apoyar</span>'), 'Label must be "Apoyar"');
});

const mainJs = fs.readFileSync(path.resolve('src/main.js'), 'utf8');

test('main.js imports and wires supportModal to #btn-donate', () => {
  assert.ok(mainJs.includes("import { supportModal } from './ui/support-modal.js'"), 'main.js must import supportModal');
  assert.ok(mainJs.includes('supportModal.open()'), 'main.js must call supportModal.open() on #btn-donate click');
});

// ==========================================
// 4. Neumorphic CSS Styling & Mobile Sheet
// ==========================================
console.log('\n[4. Neumorphic CSS & Mobile Sheet Verification]');

const componentsCss = fs.readFileSync(path.resolve('styles/components.css'), 'utf8');

test('components.css defines support modal overlay, card, and chips with neumorphic tokens', () => {
  assert.ok(componentsCss.includes('.support-modal-overlay'), '.support-modal-overlay must be defined');
  assert.ok(componentsCss.includes('.support-modal-card'), '.support-modal-card must be defined');
  assert.ok(componentsCss.includes('.support-tier-chip'), '.support-tier-chip must be defined');
  assert.ok(componentsCss.includes('.support-paypal-btn'), '.support-paypal-btn must be defined');
  assert.ok(componentsCss.includes('var(--shadow-extruded-lg)'), 'Must use neumorphic extruded large shadow');
  assert.ok(componentsCss.includes('var(--shadow-pressed)'), 'Must use neumorphic pressed shadow for active chip');
});

test('components.css contains mobile bottom-sheet styling with safe-area-inset-bottom', () => {
  assert.ok(componentsCss.includes('@media (max-width: 600px)'), 'Must define responsive rules for mobile');
  assert.ok(componentsCss.includes('safe-area-inset-bottom'), 'Must support safe-area-inset-bottom on mobile devices');
  assert.ok(componentsCss.includes('align-items: flex-end'), 'Mobile sheet must dock at bottom of viewport');
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL SUPPORT MODAL TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
