/* ============================================================
   CATALOG SEARCH CONTROLLER (DESKTOP & MOBILE RESPONSIVE SEARCH)
   ============================================================ */

/**
 * Controller for debounced repertoire search across openings, lines, variations, and tactical tags.
 */
export class CatalogSearchController {
  /**
   * @param {Object} options
   * @param {number} [options.debounceMs=150] - Debounce delay in milliseconds
   * @param {Function} [options.onSearch] - Callback invoked with search query
   * @param {Function} [options.onOpenMobile] - Callback invoked when mobile search opens
   */
  constructor(options = {}) {
    this.query = '';
    this.debounceMs = options.debounceMs || 150;
    this.onSearch = options.onSearch || (() => {});
    this.onOpenMobile = options.onOpenMobile || (() => {});
    this.debounceTimer = null;
    this.initEvents();
  }

  /**
   * Initialize DOM event listeners for desktop and mobile search inputs and controls.
   */
  initEvents() {
    if (typeof $ === 'undefined') return;

    // Desktop search input
    $('#catalog-search-desktop').off('input').on('input', (e) => {
      this.handleInput($(e.target).val(), 'desktop');
    });

    // Desktop clear button
    $('#catalog-search-desktop-clear').off('click').on('click', () => {
      this.setQuery('', true);
      $('#catalog-search-desktop').focus();
    });

    // Mobile search trigger in navbar
    $('#btn-search-mobile').off('click').on('click', () => {
      this.openMobileSearch();
    });

    // Mobile search input
    $('#catalog-search-mobile').off('input').on('input', (e) => {
      this.handleInput($(e.target).val(), 'mobile');
    });

    // Mobile clear button
    $('#mobile-search-clear').off('click').on('click', () => {
      this.setQuery('', true);
      $('#catalog-search-mobile').focus();
    });

    // Mobile close / cancel button
    $('#mobile-search-close').off('click').on('click', () => {
      this.closeMobileSearch();
    });

    // Keyboard shortcut (Escape closes search overlay or clears query)
    $(document).off('keydown.catalogSearch').on('keydown.catalogSearch', (e) => {
      if (e.key === 'Escape') {
        const $overlay = $('#mobile-search-overlay');
        if ($overlay.length && !$overlay.hasClass('hidden')) {
          this.closeMobileSearch();
        } else if (this.query) {
          this.setQuery('', true);
        }
      }
    });
  }

  /**
   * Internal input handler with debounced callback dispatch.
   * @param {string} val
   * @param {'desktop' | 'mobile'} source
   */
  handleInput(val, source) {
    this.query = (val || '').trim();

    // Synchronize clear buttons
    const hasText = this.query.length > 0;
    $('#catalog-search-desktop-clear').toggleClass('hidden', !hasText);
    $('#mobile-search-clear').toggleClass('hidden', !hasText);

    // Keep the other input field synchronized
    if (source === 'desktop') {
      $('#catalog-search-mobile').val(val);
    } else {
      $('#catalog-search-desktop').val(val);
    }

    // Debounced search trigger
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.onSearch(this.query);
    }, this.debounceMs);
  }

  /**
   * Sets query programmatically, syncing both inputs and clear buttons.
   * @param {string} val
   * @param {boolean} [notify=true]
   */
  setQuery(val, notify = true) {
    this.query = (val || '').trim();
    if (typeof $ !== 'undefined') {
      $('#catalog-search-desktop').val(val);
      $('#catalog-search-mobile').val(val);
      const hasText = this.query.length > 0;
      $('#catalog-search-desktop-clear').toggleClass('hidden', !hasText);
      $('#mobile-search-clear').toggleClass('hidden', !hasText);
    }

    clearTimeout(this.debounceTimer);
    if (notify && typeof this.onSearch === 'function') {
      this.onSearch(this.query);
    }
  }

  /**
   * Returns current active search query string.
   * @returns {string}
   */
  getQuery() {
    return this.query;
  }

  /**
   * Opens the mobile search overlay takeover and autofocuses the search input.
   */
  openMobileSearch() {
    if (typeof $ === 'undefined') return;
    $('#mobile-search-overlay').removeClass('hidden');
    setTimeout(() => {
      $('#catalog-search-mobile').focus();
    }, 60);

    if (typeof this.onOpenMobile === 'function') {
      this.onOpenMobile();
    }
  }

  /**
   * Closes the mobile search overlay.
   */
  closeMobileSearch() {
    if (typeof $ === 'undefined') return;
    $('#mobile-search-overlay').addClass('hidden');
  }
}
