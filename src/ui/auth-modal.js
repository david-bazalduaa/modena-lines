/* ============================================================
   NEUMORPHIC AUTHENTICATION MODAL & HEADER USER PROFILE WIDGET
   ============================================================ */

import { authService } from '../services/auth-service.js';

export class AuthModal {
  constructor() {
    this.isOpen = false;
    this.activeTab = 'signin'; // 'signin' | 'signup'
    this.initDOM();
  }

  initDOM() {
    if ($('#auth-modal-overlay').length) return;

    const modalHTML = `
      <div id="auth-modal-overlay" class="auth-modal-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div class="auth-modal-card">
          <!-- Close Button -->
          <button id="auth-modal-close" class="auth-modal-close-btn" aria-label="Close Authentication Modal">&times;</button>

          <!-- Header -->
          <div class="auth-modal-header">
            <div class="auth-brand-badge">
              <span class="auth-brand-icon">K</span>
            </div>
            <h2 id="auth-modal-title" class="auth-modal-title">Modena Cloud Sync</h2>
            <p class="auth-modal-subtitle">Save your master lines and track accuracy across all your devices.</p>
          </div>

          <!-- Google 1-Click Login -->
          <div class="auth-social-section">
            <button id="btn-google-auth" class="auth-google-btn" type="button">
              <svg class="google-icon" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div class="auth-divider">
            <span>or with email</span>
          </div>

          <!-- Tab Switcher -->
          <div class="auth-tabs">
            <button id="auth-tab-signin" class="auth-tab active" type="button">Sign In</button>
            <button id="auth-tab-signup" class="auth-tab" type="button">Create Account</button>
          </div>

          <!-- Error Feedback Container -->
          <div id="auth-error-badge" class="auth-error-badge hidden" role="alert"></div>

          <!-- Form Area -->
          <form id="auth-form" class="auth-form" onsubmit="return false;">
            <div id="auth-name-group" class="auth-input-group hidden">
              <label for="auth-name-input" class="auth-label">Display Name</label>
              <input id="auth-name-input" class="auth-input" type="text" placeholder="Grandmaster" autocomplete="name" />
            </div>

            <div class="auth-input-group">
              <label for="auth-email-input" class="auth-label">Email Address</label>
              <input id="auth-email-input" class="auth-input" type="email" placeholder="chessplayer@example.com" required autocomplete="email" />
            </div>

            <div class="auth-input-group">
              <label for="auth-password-input" class="auth-label">Password</label>
              <input id="auth-password-input" class="auth-input" type="password" placeholder="••••••••" required autocomplete="current-password" />
            </div>

            <button id="auth-submit-btn" class="auth-submit-btn" type="submit">
              <span id="auth-submit-spinner" class="auth-spinner hidden"></span>
              <span id="auth-submit-text">Sign In</span>
            </button>
          </form>

          <p class="auth-footer-notice">
            By signing in, your repertoire training progress, accuracy metrics, and completed lines are securely backed up in Google Cloud Firestore.
          </p>
        </div>
      </div>
    `;

    $('body').append(modalHTML);
    this.bindEvents();
  }

  bindEvents() {
    // Close modal handlers
    $('#auth-modal-close').on('click', () => this.close());
    $('#auth-modal-overlay').on('click', (e) => {
      if ($(e.target).is('#auth-modal-overlay')) {
        this.close();
      }
    });

    $(document).on('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Tab Switching
    $('#auth-tab-signin').on('click', () => this.setTab('signin'));
    $('#auth-tab-signup').on('click', () => this.setTab('signup'));

    // Google Sign-In
    $('#btn-google-auth').on('click', async () => {
      this.clearError();
      this.setLoading(true);
      try {
        await authService.loginWithGoogle();
        this.close();
      } catch (err) {
        this.showError(err.message);
      } finally {
        this.setLoading(false);
      }
    });

    // Email/Password Form Submit
    $('#auth-form').on('submit', async (e) => {
      e.preventDefault();
      this.clearError();

      const email = $('#auth-email-input').val();
      const password = $('#auth-password-input').val();
      const name = $('#auth-name-input').val();

      if (!email || !password) {
        this.showError('Please provide both email and password.');
        return;
      }

      this.setLoading(true);
      try {
        if (this.activeTab === 'signup') {
          if (password.length < 6) {
            throw new Error('Password must be at least 6 characters.');
          }
          await authService.registerWithEmail(email, password, name);
        } else {
          await authService.loginWithEmail(email, password);
        }
        this.close();
      } catch (err) {
        this.showError(err.message);
      } finally {
        this.setLoading(false);
      }
    });
  }

  setTab(tab) {
    this.activeTab = tab;
    this.clearError();

    if (tab === 'signup') {
      $('#auth-tab-signup').addClass('active');
      $('#auth-tab-signin').removeClass('active');
      $('#auth-name-group').removeClass('hidden');
      $('#auth-submit-text').text('Create Account');
    } else {
      $('#auth-tab-signin').addClass('active');
      $('#auth-tab-signup').removeClass('active');
      $('#auth-name-group').addClass('hidden');
      $('#auth-submit-text').text('Sign In');
    }
  }

  showError(msg) {
    const $err = $('#auth-error-badge');
    $err.text(msg).removeClass('hidden');
  }

  clearError() {
    $('#auth-error-badge').text('').addClass('hidden');
  }

  setLoading(isLoading) {
    const $btn = $('#auth-submit-btn');
    const $googleBtn = $('#btn-google-auth');
    const $spinner = $('#auth-submit-spinner');
    const $text = $('#auth-submit-text');

    if (isLoading) {
      $btn.prop('disabled', true).addClass('loading');
      $googleBtn.prop('disabled', true);
      $spinner.removeClass('hidden');
      $text.addClass('dimmed');
    } else {
      $btn.prop('disabled', false).removeClass('loading');
      $googleBtn.prop('disabled', false);
      $spinner.addClass('hidden');
      $text.removeClass('dimmed');
    }
  }

  open(initialTab = 'signin') {
    this.isOpen = true;
    this.setTab(initialTab);
    $('#auth-form')[0].reset();
    this.clearError();
    $('#auth-modal-overlay').removeClass('hidden');
    $('body').addClass('modal-open');
    setTimeout(() => $('#auth-email-input').focus(), 100);
  }

  close() {
    this.isOpen = false;
    $('#auth-modal-overlay').addClass('hidden');
    $('body').removeClass('modal-open');
    this.clearError();
  }
}

export const authModal = new AuthModal();

/**
 * Render Header User Profile / Auth Button Component.
 */
export function renderHeaderAuth(containerElement, user, onSignInClick) {
  const $container = $(containerElement);
  if (!$container.length) return;

  if (!user) {
    // Logged Out / Guest State
    $container.html(`
      <button id="header-signin-btn" class="header-auth-btn" title="Sign in to sync progress across devices">
        <svg class="auth-btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
          <polyline points="10 17 15 12 10 7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
        <span>Sign In</span>
      </button>
    `);

    $('#header-signin-btn').off('click').on('click', () => {
      if (typeof onSignInClick === 'function') {
        onSignInClick();
      } else {
        authModal.open('signin');
      }
    });
  } else {
    // Logged In / Authenticated State
    const displayName = user.displayName || user.email.split('@')[0] || 'Grandmaster';
    const initials = (displayName.charAt(0) || 'U').toUpperCase();
    const photoURL = user.photoURL;

    const avatarHTML = photoURL
      ? `<img class="user-avatar-img" src="${photoURL}" alt="${displayName}" referrerpolicy="no-referrer" />`
      : `<span class="user-avatar-initials">${initials}</span>`;

    $container.html(`
      <div class="user-profile-menu-wrapper">
        <button id="header-user-btn" class="header-user-profile-btn" aria-haspopup="true" aria-expanded="false" title="Account: ${displayName}">
          <div class="user-avatar-badge">
            ${avatarHTML}
            <span class="user-cloud-dot" title="Cloud Sync Active"></span>
          </div>
          <span class="user-profile-name">${displayName}</span>
          <svg class="user-dropdown-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div id="user-profile-dropdown" class="user-profile-dropdown hidden">
          <div class="user-dropdown-header">
            <p class="dropdown-user-name">${displayName}</p>
            <p class="dropdown-user-email">${user.email || 'Cloud Account'}</p>
          </div>
          <div class="dropdown-sync-status">
            <span class="sync-status-indicator"></span>
            <span>Cloud Sync Active</span>
          </div>
          <div class="dropdown-divider"></div>
          <button id="dropdown-signout-btn" class="dropdown-item danger">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    `);

    // Toggle Dropdown
    $('#header-user-btn').off('click').on('click', function (e) {
      e.stopPropagation();
      const $dropdown = $('#user-profile-dropdown');
      const isHidden = $dropdown.hasClass('hidden');
      if (isHidden) {
        $dropdown.removeClass('hidden');
        $(this).attr('aria-expanded', 'true');
      } else {
        $dropdown.addClass('hidden');
        $(this).attr('aria-expanded', 'false');
      }
    });

    // Close Dropdown on outside click
    $(document).off('click.userProfile').on('click.userProfile', (e) => {
      if (!$(e.target).closest('.user-profile-menu-wrapper').length) {
        $('#user-profile-dropdown').addClass('hidden');
        $('#header-user-btn').attr('aria-expanded', 'false');
      }
    });

    // Sign out button
    $('#dropdown-signout-btn').off('click').on('click', async () => {
      $('#user-profile-dropdown').addClass('hidden');
      try {
        await authService.logout();
      } catch (err) {
        alert('Sign out error: ' + err.message);
      }
    });
  }
}
