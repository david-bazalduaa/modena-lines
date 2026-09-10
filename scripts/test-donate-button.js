/**
 * ============================================================
 * AUTOMATED TEST SUITE: DONATION / SUPPORT BUTTON INTEGRATION
 * ============================================================
 * Verifies:
 * 1. PAYPAL_DONATE_URL constant and APP_CONFIG settings configuration.
 * 2. #btn-donate anchor markup, attributes, and icon in index.html.
 * 3. Neumorphic soft-pill styling and responsive rules in CSS.
 * 4. Header action deck positioning next to the Sign In / Auth pill.
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { APP_CONFIG, PAYPAL_DONATE_URL } from '../src/config/settings.js';

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

console.log('--- Starting Donate / Support Button Integration Test Suite ---');

// ==========================================
// 1. Settings & Config Verification
// ==========================================
console.log('\n[1. Configuration & PayPal Constants]');

test('PAYPAL_DONATE_URL is defined and is a valid PayPal link', () => {
  assert.ok(PAYPAL_DONATE_URL, 'PAYPAL_DONATE_URL must be defined');
  assert.ok(PAYPAL_DONATE_URL.startsWith('https://paypal.me/'), 'PAYPAL_DONATE_URL must point to https://paypal.me/');
});

test('APP_CONFIG.paypalDonateUrl matches PAYPAL_DONATE_URL', () => {
  assert.strictEqual(APP_CONFIG.paypalDonateUrl, PAYPAL_DONATE_URL);
});

// ==========================================
// 2. HTML Markup & Navbar Integration
// ==========================================
console.log('\n[2. HTML Markup & Component Integration]');

const indexHtmlPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

test('index.html contains #btn-donate inside .header-actions wrapper', () => {
  assert.ok(indexHtml.includes('class="header-actions"'), 'header-actions wrapper must exist');
  assert.ok(indexHtml.includes('id="btn-donate"'), '#btn-donate anchor must exist in index.html');
});

test('#btn-donate has required attributes and Spanish aria-label', () => {
  assert.ok(indexHtml.includes('type="button"'), '#btn-donate must have type="button"');
  assert.ok(indexHtml.includes('aria-label="Apoyar a Modena Lines"'), '#btn-donate must have accessible Spanish aria-label');
  assert.ok(indexHtml.includes('title="Apoyar a Modena Lines"'), '#btn-donate must have title attribute');
});

test('#btn-donate contains SVG icon and Apoyar label', () => {
  assert.ok(indexHtml.includes('donate-icon'), '#btn-donate must include SVG donate icon');
  assert.ok(indexHtml.includes('donate-label'), '#btn-donate must include donate-label');
  assert.ok(indexHtml.includes('Apoyar'), '#btn-donate text must read Apoyar');
});

test('.header-actions encapsulates both #btn-donate and #header-auth-container', () => {
  const actionsBlock = indexHtml.substring(
    indexHtml.indexOf('<div class="header-actions">'),
    indexHtml.indexOf('</header>')
  );
  assert.ok(actionsBlock.includes('id="btn-donate"'), 'header-actions must contain #btn-donate');
  assert.ok(actionsBlock.includes('id="header-auth-container"'), 'header-actions must contain #header-auth-container');
});

// ==========================================
// 3. CSS Neumorphic Soft-Pill Styling
// ==========================================
console.log('\n[3. Neumorphic Soft-Pill & Responsive CSS]');

const componentsCss = fs.readFileSync(path.resolve('styles/components.css'), 'utf8');
const mainCss = fs.readFileSync(path.resolve('styles/main.css'), 'utf8');

test('components.css defines .header-actions and .donate-pill with neumorphic tokens', () => {
  assert.ok(componentsCss.includes('.header-actions'), '.header-actions CSS rule must exist');
  assert.ok(componentsCss.includes('.donate-pill'), '.donate-pill CSS rule must exist');
  assert.ok(componentsCss.includes('var(--shadow-extruded-sm)'), '.donate-pill must use neumorphic extruded shadow');
  assert.ok(componentsCss.includes('var(--radius-pill)'), '.donate-pill must use pill radius');
});

test('main.css defines mobile responsiveness and label collapse for small screens', () => {
  assert.ok(mainCss.includes('.header-actions'), 'main.css must style .header-actions on mobile');
  assert.ok(mainCss.includes('.donate-pill'), 'main.css must style .donate-pill on mobile');
  assert.ok(mainCss.includes('@media (max-width: 440px)'), 'main.css must include narrow viewport media query');
  assert.ok(mainCss.includes('.donate-pill .donate-label'), 'main.css must collapse donate label on narrow screens');
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL DONATE BUTTON TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
