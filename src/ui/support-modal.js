/* ============================================================
   NEUMORPHIC SUPPORT / DONATION MODAL (SPANISH & MXN)
   ============================================================ */

import { SUPPORT_CONFIG } from '../config/settings.js';

export class SupportModal {
  constructor() {
    this.isOpen = false;
    this.config = SUPPORT_CONFIG;
    const defaultTier = this.config.tiers.find(t => t.default) || this.config.tiers[0];
    this.selectedTierId = defaultTier ? defaultTier.id : 'tier-100';
    this.initDOM();
  }

  initDOM() {
    if (typeof $ === 'undefined' || typeof document === 'undefined') return;
    if ($('#support-modal-overlay').length) return;

    const tiersHTML = this.config.tiers.map((tier) => {
      const isSelected = tier.id === this.selectedTierId;
      return `
        <button
          type="button"
          class="support-tier-chip ${isSelected ? 'active' : ''}"
          data-tier-id="${tier.id}"
          data-amount="${tier.amount !== null ? tier.amount : ''}"
          role="radio"
          aria-checked="${isSelected}"
        >
          <span class="support-tier-amount">${tier.label}</span>
        </button>
      `;
    }).join('');

    const initialUrl = this.buildPayPalUrl(this.selectedTierId);
    const initialCtaLabel = this.buildCtaLabel(this.selectedTierId);

    const modalHTML = `
      <div id="support-modal-overlay" class="support-modal-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="support-modal-title">
        <div class="support-modal-card">
          <!-- Close Button -->
          <button id="support-modal-close" class="support-modal-close-btn" aria-label="Cerrar modal de apoyo">&times;</button>

          <!-- Header -->
          <div class="support-modal-header">
            <div class="support-brand-badge">
              <svg class="support-brand-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h2 id="support-modal-title" class="support-modal-title">${this.config.title}</h2>
            <p class="support-modal-description">${this.config.message}</p>
          </div>

          <!-- Tiers Section -->
          <div class="support-tiers-section">
            <span class="support-tiers-label">Selecciona una aportación</span>
            <div class="support-tiers-grid" role="radiogroup" aria-label="Montos de donación">
              ${tiersHTML}
            </div>
          </div>

          <!-- Embedded Payment Action Container -->
          <div id="paypal-donate-button-container" class="support-payment-container">
            <a
              id="support-paypal-cta"
              href="${initialUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="support-paypal-btn"
              aria-label="${initialCtaLabel}"
            >
              <svg class="paypal-cta-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .771-.657h6.817c3.483 0 6.07 1.636 5.508 5.688-.475 3.424-2.736 5.37-6.07 5.37h-2.43l-1.127 7.216h-1.337zm1.888-12.06h2.09c2.193 0 3.652-1.082 3.968-3.35.297-2.128-.99-3.238-3.183-3.238H8.56l-1.596 6.588z"/>
              </svg>
              <span id="support-cta-label">${initialCtaLabel}</span>
            </a>

            <div class="support-payment-methods">
              <svg class="support-lock-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Acepta saldo PayPal, tarjeta de débito o crédito</span>
            </div>
          </div>

          <!-- Footer Legal Notice -->
          <p class="support-footer-notice">${this.config.footer}</p>
        </div>
      </div>
    `;

    $('body').append(modalHTML);
    this.bindEvents();
  }

  bindEvents() {
    // Close modal handlers
    $('#support-modal-close').on('click', () => this.close());

    $('#support-modal-overlay').on('click', (e) => {
      if ($(e.target).is('#support-modal-overlay')) {
        this.close();
      }
    });

    $(document).on('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Tier chip selection
    const self = this;
    $('.support-tier-chip').on('click', function () {
      const tierId = $(this).data('tier-id');
      self.selectTier(tierId);
    });
  }

  selectTier(tierId) {
    this.selectedTierId = tierId;
    if (typeof $ === 'undefined') return;

    // Update chips state
    $('.support-tier-chip').each(function () {
      const isCurrent = $(this).data('tier-id') === tierId;
      $(this).toggleClass('active', isCurrent);
      $(this).attr('aria-checked', isCurrent ? 'true' : 'false');
    });

    // Update PayPal link and CTA label
    const url = this.buildPayPalUrl(tierId);
    const label = this.buildCtaLabel(tierId);

    const $cta = $('#support-paypal-cta');
    $cta.attr('href', url);
    $cta.attr('aria-label', label);
    $('#support-cta-label').text(label);
  }

  buildPayPalUrl(tierId) {
    const tier = this.config.tiers.find(t => t.id === tierId);
    const baseUrl = this.config.paypalMeUrl.replace(/\/+$/, '');
    if (tier && tier.amount !== null && tier.amount !== undefined) {
      return `${baseUrl}/${tier.amount}${this.config.currency}`;
    }
    return baseUrl;
  }

  buildCtaLabel(tierId) {
    const tier = this.config.tiers.find(t => t.id === tierId);
    if (tier && tier.amount !== null && tier.amount !== undefined) {
      return `Donar ${tier.label} con PayPal`;
    }
    return 'Donar con PayPal';
  }

  open() {
    this.isOpen = true;
    this.initDOM();
    if (typeof $ === 'undefined') return;
    $('#support-modal-overlay').removeClass('hidden');
    $('body').addClass('modal-open');
    setTimeout(() => {
      $('#support-modal-close').focus();
    }, 50);
  }

  close() {
    this.isOpen = false;
    if (typeof $ === 'undefined') return;
    $('#support-modal-overlay').addClass('hidden');
    $('body').removeClass('modal-open');
  }
}

export const supportModal = new SupportModal();
