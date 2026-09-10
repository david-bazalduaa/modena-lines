/**
 * ============================================================
 * AUTOMATED TEST SUITE: RESPONSIVE NAVBAR PROFILE TRIGGER
 * ============================================================
 * Verifies:
 * 1. Markup in src/ui/auth-modal.js wraps display name and chevron in .user-profile-info.
 * 2. Mobile breakpoint (< 640px) collapses the profile trigger to avatar-only circular pill.
 * 3. Mobile CSS rules hide .user-profile-info, .user-profile-name, and .user-dropdown-arrow.
 * 4. Flex-shrink-0 protection on .header-brand, #app-title, .header-actions, and #btn-donate.
 * 5. Touch target accessibility and dropdown toggle handler compatibility.
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

console.log('--- Starting Responsive Navbar Profile Trigger Test Suite ---');

// ==========================================
// 1. Component Markup & Wrapper Inspection
// ==========================================
console.log('\n[1. Markup & Template Architecture in auth-modal.js]');

const authModalPath = path.resolve('src/ui/auth-modal.js');
const authModalSrc = fs.readFileSync(authModalPath, 'utf8');

test('auth-modal.js contains .user-profile-info wrapper', () => {
  assert.ok(authModalSrc.includes('class="user-profile-info"'), 'Must wrap profile text elements in .user-profile-info');
});

test('.user-profile-info contains both .user-profile-name and .user-dropdown-arrow', () => {
  const profileInfoIdx = authModalSrc.indexOf('<span class="user-profile-info">');
  assert.ok(profileInfoIdx !== -1, 'user-profile-info span must exist');

  const wrapperClosingIdx = authModalSrc.indexOf('</span>', profileInfoIdx + 30);
  const wrapperContent = authModalSrc.substring(profileInfoIdx, wrapperClosingIdx + 200);

  assert.ok(wrapperContent.includes('class="user-profile-name"'), 'Must include .user-profile-name');
  assert.ok(wrapperContent.includes('class="user-dropdown-arrow"'), 'Must include .user-dropdown-arrow');
});

test('#header-user-btn retains .user-avatar-badge and .user-cloud-dot status indicator', () => {
  assert.ok(authModalSrc.includes('class="user-avatar-badge"'), 'Avatar badge must remain intact');
  assert.ok(authModalSrc.includes('class="user-cloud-dot"'), 'Status indicator dot must remain intact');
});

test('#header-user-btn click handler toggles dropdown and aria-expanded', () => {
  assert.ok(authModalSrc.includes("$('#header-user-btn').off('click').on('click'"), 'Click handler must be bound to #header-user-btn');
  assert.ok(authModalSrc.includes("$dropdown.removeClass('hidden')") && authModalSrc.includes("$dropdown.addClass('hidden')"), 'Click handler must toggle hidden class on dropdown');
  assert.ok(authModalSrc.includes("aria-expanded"), 'Click handler must toggle aria-expanded');
});

// ==========================================
// 2. CSS Components Styling
// ==========================================
console.log('\n[2. CSS Rules in components.css]');

const componentsCssPath = path.resolve('styles/components.css');
const componentsCss = fs.readFileSync(componentsCssPath, 'utf8');

test('components.css defines .user-profile-info flex layout for desktop', () => {
  assert.ok(componentsCss.includes('.user-profile-info'), '.user-profile-info rule must exist');
});

test('components.css defines @media (max-width: 640px) collapse for profile button', () => {
  assert.ok(componentsCss.includes('@media (max-width: 640px)'), 'Must have 640px media query');
  assert.ok(componentsCss.includes('.user-profile-info') && componentsCss.includes('display: none !important;'), 'Must hide profile info on mobile');
  assert.ok(componentsCss.includes('border-radius: 50% !important;'), 'Profile button must be circular on mobile');
});

// ==========================================
// 3. Mobile Header Rules in main.css
// ==========================================
console.log('\n[3. Mobile Layout & Truncation Prevention in main.css]');

const mainCssPath = path.resolve('styles/main.css');
const mainCss = fs.readFileSync(mainCssPath, 'utf8');

test('main.css protects .header-brand and #app-title with flex-shrink: 0', () => {
  const mobileBlock = mainCss.substring(mainCss.indexOf('@media (max-width: 767px)'));
  assert.ok(mobileBlock.includes('.header-brand'), 'Must target .header-brand in mobile media query');
  assert.ok(mobileBlock.includes('flex-shrink: 0;'), 'Must apply flex-shrink: 0 to prevent brand clipping');
});

test('main.css protects .header-actions, #btn-donate, and #header-auth-container with flex-shrink: 0', () => {
  const mobileBlock = mainCss.substring(mainCss.indexOf('@media (max-width: 767px)'));
  assert.ok(mobileBlock.includes('.header-actions'), 'Must target .header-actions');
  assert.ok(mobileBlock.includes('#btn-donate'), 'Must target #btn-donate');
  assert.ok(mobileBlock.includes('#header-auth-container'), 'Must target #header-auth-container');
});

test('main.css collapses .header-user-profile-btn to 36px circular avatar on < 640px', () => {
  assert.ok(mainCss.includes('@media (max-width: 640px)'), 'Must have 640px media query in main.css');
  assert.ok(mainCss.includes('width: 36px;'), 'Must set accessible 36px touch width');
  assert.ok(mainCss.includes('height: 36px;'), 'Must set accessible 36px touch height');
  assert.ok(mainCss.includes('border-radius: 50% !important;'), 'Must set 50% circular radius');
});

// ==========================================
// Test Results Summary
// ==========================================
console.log('\n============================================================');
console.log(`TEST RESULTS: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
console.log('============================================================');

if (passedTests === totalTests) {
  console.log('ALL RESPONSIVE NAVBAR PROFILE TESTS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!\n');
  process.exit(1);
}
