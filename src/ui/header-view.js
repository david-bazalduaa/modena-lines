/* ============================================================
   HEADER VIEW & REPERTOIRE CATEGORY FILTER SWITCH
   ============================================================ */

/**
 * Controller for the top navigation bar and repertoire filter toggle (White Openings vs Black Defenses).
 */
export class HeaderView {
  /**
   * @param {Object} options
   * @param {string} options.initialFilter - Initial active color filter ('white' | 'black')
   * @param {Function} options.onFilterChange - Callback invoked when filter selection changes
   */
  constructor(options = {}) {
    this.activeFilter = options.initialFilter || 'white';
    this.onFilterChange = options.onFilterChange || (() => {});
    this.$container = $('#repertoire-filter-tabs');
    this.initEvents();
    this.updateMobileToggle();
  }

  /**
   * Initializes click event listeners on both desktop tabs and mobile pawn toggle.
   */
  initEvents() {
    // 1. Desktop Segmented Tab Clicks
    $('#repertoire-filter-tabs').off('click', '.nav-tab').on('click', '.nav-tab', (e) => {
      const $btn = $(e.currentTarget);
      const targetFilter = $btn.data('filter') || ($btn.attr('id') === 'nav-black-btn' ? 'black' : 'white');
      
      if (targetFilter && targetFilter !== this.activeFilter) {
        this.setActiveFilter(targetFilter, true);
      } else if (targetFilter) {
        // Trigger callback even if already active to return user to catalog view if in another view
        this.onFilterChange(this.activeFilter);
      }
    });

    // 2. Mobile Minimalist Pawn Buttons Clicks
    $('#repertoire-filter-mobile').off('click', '.mobile-pawn-btn').on('click', '.mobile-pawn-btn', (e) => {
      e.stopPropagation();
      const $btn = $(e.currentTarget);
      const targetFilter = $btn.data('filter') || 'white';
      
      if (targetFilter && targetFilter !== this.activeFilter) {
        this.setActiveFilter(targetFilter, true);
      } else if (targetFilter) {
        this.onFilterChange(this.activeFilter);
      }
    });

    // 3. Mobile Capsule Track Tap (Direct switch toggling)
    $('#mobile-pawn-track').off('click').on('click', (e) => {
      if ($(e.target).is('#mobile-pawn-track') || $(e.target).is('#mobile-pawn-slider')) {
        const nextFilter = this.activeFilter === 'white' ? 'black' : 'white';
        this.setActiveFilter(nextFilter, true);
      }
    });
  }

  /**
   * Sets the active color filter and updates both desktop tabs and mobile toggle with smooth neumorphic transition.
   * @param {'white' | 'black'} filter - The target filter state
   * @param {boolean} notify - Whether to invoke the onFilterChange callback
   */
  setActiveFilter(filter, notify = true) {
    this.activeFilter = filter === 'black' ? 'black' : 'white';

    // 1. Update active class on desktop tab buttons
    $('#repertoire-filter-tabs .nav-tab').removeClass('active');
    $(`#repertoire-filter-tabs .nav-tab[data-filter="${this.activeFilter}"]`).addClass('active');

    // 2. Update mobile micro-toggle state
    this.updateMobileToggle();

    if (notify && typeof this.onFilterChange === 'function') {
      this.onFilterChange(this.activeFilter);
    }
  }

  /**
   * Synchronizes the mobile capsule track, sliding thumb, and button accessibility attributes.
   */
  updateMobileToggle() {
    if (typeof $ === 'undefined') return;

    const isBlack = this.activeFilter === 'black';
    const $mobileToggle = $('#repertoire-filter-mobile');
    const $slider = $('#mobile-pawn-slider');
    const $btnWhite = $('#mobile-nav-white-btn');
    const $btnBlack = $('#mobile-nav-black-btn');

    if ($slider.length) {
      $slider.attr('data-active', this.activeFilter);
      $slider.toggleClass('slide-black', isBlack);
    }

    if ($btnWhite.length) {
      $btnWhite.toggleClass('active', !isBlack);
      $btnWhite.attr('aria-checked', (!isBlack).toString());
    }

    if ($btnBlack.length) {
      $btnBlack.toggleClass('active', isBlack);
      $btnBlack.attr('aria-checked', isBlack.toString());
    }

    if ($mobileToggle.length) {
      $mobileToggle.attr('data-active', this.activeFilter);
    }
  }

  /**
   * Returns current active color filter.
   * @returns {'white' | 'black'}
   */
  getActiveFilter() {
    return this.activeFilter;
  }

  /**
   * Synchronously updates the top navigation header metric badge (Accuracy and Completed count) if present.
   * @param {Object} metrics
   * @param {number} [metrics.overallAccuracy]
   * @param {number} [metrics.completedCount]
   * @param {number} [metrics.totalCount]
   */
  updateProgressMetrics(metrics) {
    if (!metrics) return;
    const $acc = $('#header-accuracy');
    if ($acc.length && metrics.overallAccuracy !== undefined) {
      $acc.text(metrics.overallAccuracy + '%');
    }
    const $comp = $('#header-completed');
    if ($comp.length && metrics.completedCount !== undefined && metrics.totalCount !== undefined) {
      $comp.text(`${metrics.completedCount}/${metrics.totalCount}`);
    }
  }
}
