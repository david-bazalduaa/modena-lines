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
  }

  /**
   * Initializes click event listeners on the repertoire filter toggle buttons.
   */
  initEvents() {
    // Handle clicks on filter tabs (supporting both data-filter and button IDs)
    $('#repertoire-filter-tabs').on('click', '.nav-tab', (e) => {
      const $btn = $(e.currentTarget);
      const targetFilter = $btn.data('filter') || ($btn.attr('id') === 'nav-black-btn' ? 'black' : 'white');
      
      if (targetFilter && targetFilter !== this.activeFilter) {
        this.setActiveFilter(targetFilter, true);
      } else if (targetFilter) {
        // Trigger callback even if already active to bring user back to catalog view if in another view
        this.onFilterChange(this.activeFilter);
      }
    });
  }

  /**
   * Sets the active color filter and updates the UI toggle state with smooth neumorphic transition.
   * @param {'white' | 'black'} filter - The target filter state
   * @param {boolean} notify - Whether to invoke the onFilterChange callback
   */
  setActiveFilter(filter, notify = true) {
    this.activeFilter = filter === 'black' ? 'black' : 'white';

    // Update active class on tab buttons
    $('#repertoire-filter-tabs .nav-tab').removeClass('active');
    $(`#repertoire-filter-tabs .nav-tab[data-filter="${this.activeFilter}"]`).addClass('active');

    if (notify && typeof this.onFilterChange === 'function') {
      this.onFilterChange(this.activeFilter);
    }
  }

  /**
   * Returns current active color filter.
   * @returns {'white' | 'black'}
   */
  getActiveFilter() {
    return this.activeFilter;
  }
}
