/* ============================================================
   DASHBOARD VIEW (COURSE CATALOG & SIDE-BASED FILTERING)
   ============================================================ */

import { COURSES } from '../data/courses.js';
import { generateMiniBoardHTML } from '../engine/board-renderer.js';
import { userProgress } from '../storage/user-progress.js';

/**
 * Renders the main Course Catalog grid filtered by repertoire side ('white' | 'black').
 * @param {Function} onSelectCourse - Callback invoked when a course card is selected
 * @param {'white' | 'black'} activeColorFilter - Selected side filter
 * @param {Function} onSwitchFilter - Optional callback to switch filter programmatically
 */
/**
 * Pure helper function to test if a course matches a search query.
 * Matches against course title, subtitle, category, description, sub-course variations,
 * and individual line names, annotations, and tactical punishment tags (e.g. Checkmate, Greek Gift, Fork, Blunder, Gambit).
 * @param {Object} course
 * @param {string} query
 * @returns {boolean}
 */
export function matchesCourseQuery(course, query) {
  if (!course) return false;
  if (!query || !query.trim()) return true;
  const q = query.toLowerCase().trim();

  // 1. Top-level course metadata
  if (course.title && course.title.toLowerCase().includes(q)) return true;
  if (course.subtitle && course.subtitle.toLowerCase().includes(q)) return true;
  if (course.category && course.category.toLowerCase().includes(q)) return true;
  if (course.description && course.description.toLowerCase().includes(q)) return true;

  const testLine = (line) => {
    if (!line) return false;
    if (line.name && line.name.toLowerCase().includes(q)) return true;
    if (line.shortName && line.shortName.toLowerCase().includes(q)) return true;
    if (line.category && line.category.toLowerCase().includes(q)) return true;
    if (line.description && line.description.toLowerCase().includes(q)) return true;
    if (line.fullAnnotation && line.fullAnnotation.toLowerCase().includes(q)) return true;
    if (line.tag && line.tag.toLowerCase().includes(q)) return true;
    if (line.punishmentTag && line.punishmentTag.toLowerCase().includes(q)) return true;
    if (Array.isArray(line.tags) && line.tags.some(t => t && t.toLowerCase().includes(q))) return true;
    if (line.annotations && typeof line.annotations === 'object') {
      for (const key of Object.keys(line.annotations)) {
        if (line.annotations[key] && line.annotations[key].toLowerCase().includes(q)) return true;
      }
    }
    return false;
  };

  // 2. Sub-course modules & lines inspection
  const subCourses = Array.isArray(course.subCourses) ? course.subCourses : [];
  for (const sub of subCourses) {
    if (!sub) continue;
    if (sub.title && sub.title.toLowerCase().includes(q)) return true;
    if (sub.description && sub.description.toLowerCase().includes(q)) return true;

    const lines = Array.isArray(sub.lines) ? sub.lines : [];
    for (const line of lines) {
      if (testLine(line)) return true;
    }
  }

  // 3. Flat course lines fallback
  if (Array.isArray(course.lines)) {
    for (const line of course.lines) {
      if (testLine(line)) return true;
    }
  }

  return false;
}

/**
 * Renders the main Course Catalog grid filtered by repertoire side ('white' | 'black') and optional search query.
 * @param {Function} onSelectCourse - Callback invoked when a course card is selected
 * @param {'white' | 'black'} activeColorFilter - Selected side filter
 * @param {Function} onSwitchFilter - Optional callback to switch filter programmatically
 * @param {string} [searchQuery=''] - Real-time search query
 * @param {Function} [onClearSearch=null] - Callback to clear search query
 */
export function renderDashboard(onSelectCourse, activeColorFilter = 'white', onSwitchFilter = null, searchQuery = '', onClearSearch = null) {
  const $grid = $('#course-grid');
  if (!$grid.length) return;
  $grid.empty();

  // Update section title text according to active repertoire filter
  const $sectionTitle = $('#catalog-section-title');
  if ($sectionTitle.length) {
    $sectionTitle.text(
      activeColorFilter === 'black'
        ? 'Black Defenses & Counter-Attacks'
        : 'Master White Opening Repertoires'
    );
  }

  // Filter courses safely by side ('white' vs 'black')
  const courseList = Array.isArray(COURSES) ? COURSES : [];
  let filteredCourses = courseList.filter(course => {
    if (!course) return false;
    const side = course.side || 'white';
    return side === activeColorFilter;
  });

  // Filter by search query if active
  const isSearchActive = Boolean(searchQuery && searchQuery.trim().length > 0);
  if (isSearchActive) {
    filteredCourses = filteredCourses.filter(course => matchesCourseQuery(course, searchQuery));
  }

  // Empty state handling when no courses match the filter or search
  if (filteredCourses.length === 0) {
    if (isSearchActive) {
      const sanitizedQuery = $('<div>').text(searchQuery).html();
      const emptySearchHTML = `
        <div class="empty-state-card empty-search-card" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h4>No openings found for "${sanitizedQuery}"</h4>
          <p>Try searching for a different opening name, variation, or tactical tag like "Gambit", "Fork", or "Greek Gift".</p>
          <button id="btn-clear-search-empty" class="card-action-btn" style="width: auto; padding: 0.6rem 1.4rem; margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Clear Search</span>
          </button>
        </div>
      `;
      $grid.append(emptySearchHTML);

      $('#btn-clear-search-empty').off('click').on('click', function (e) {
        e.stopPropagation();
        if (typeof onClearSearch === 'function') {
          onClearSearch();
        }
      });
      return;
    }

    const emptyStateHTML = `
      <div class="empty-state-card empty-repertoire-card" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">${activeColorFilter === 'black' ? '♚' : '♔'}</div>
        <h4>${activeColorFilter === 'black' ? 'Black Defenses Coming Soon!' : 'White Openings Coming Soon!'}</h4>
        <p>
          ${
            activeColorFilter === 'black'
              ? 'Black Defenses coming soon! Master White Openings in the meantime.'
              : 'White opening master lines are currently being prepared. Explore our Black defenses in the meantime!'
          }
        </p>
        <button id="btn-switch-repertoire" class="card-action-btn" style="width: auto; padding: 0.6rem 1.4rem; margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem;">
          <span>${activeColorFilter === 'black' ? 'Explore White Openings &rarr;' : 'Explore Black Defenses &rarr;'}</span>
        </button>
      </div>
    `;
    $grid.append(emptyStateHTML);

    $('#btn-switch-repertoire').off('click').on('click', function (e) {
      e.stopPropagation();
      if (typeof onSwitchFilter === 'function') {
        onSwitchFilter(activeColorFilter === 'black' ? 'white' : 'black');
      }
    });

    return;
  }

  // Render course cards for filtered repertoires with resilient error handling
  filteredCourses.forEach((course) => {
    try {
      const originalCourseIndex = courseList.findIndex(c => c && c.id === course.id);
      let completedCount = 0;
      let totalLines = 0;

      // Safe calculation of completed lines and total lines
      if (course.subCourses && Array.isArray(course.subCourses)) {
        course.subCourses.forEach(sub => {
          if (!sub) return;
          const lines = Array.isArray(sub.lines) ? sub.lines : [];
          totalLines += lines.length;
          lines.forEach(line => {
            if (!line) return;
            try {
              if (userProgress && typeof userProgress.isLineCompleted === 'function') {
                if (userProgress.isLineCompleted(line)) completedCount++;
              } else if (userProgress && typeof userProgress.getLineStat === 'function') {
                const stat = userProgress.getLineStat(line.id);
                if (stat && stat.completed) completedCount++;
              }
            } catch (err) {
              console.warn('[DashboardView] Progress calculation warning for line:', line.id, err);
            }
          });
        });
      } else if (course.lines && Array.isArray(course.lines)) {
        totalLines = course.lines.length;
        course.lines.forEach(line => {
          if (!line) return;
          try {
            if (userProgress && typeof userProgress.isLineCompleted === 'function') {
              if (userProgress.isLineCompleted(line)) completedCount++;
            } else if (userProgress && typeof userProgress.getLineStat === 'function') {
              const stat = userProgress.getLineStat(line.id);
              if (stat && stat.completed) completedCount++;
            }
          } catch (err) {
            console.warn('[DashboardView] Progress calculation warning for line:', line.id, err);
          }
        });
      }

      const subCount = (course.subCourses && Array.isArray(course.subCourses)) ? course.subCourses.length : 0;
      const percent = totalLines > 0 ? Math.round((completedCount / totalLines) * 100) : 0;

      let miniBoardHTML = '';
      try {
        miniBoardHTML = generateMiniBoardHTML(course.previewFEN);
      } catch (boardErr) {
        console.warn('[DashboardView] Board preview render error for course:', course.id, boardErr);
        miniBoardHTML = '<div class="mini-board-grid"></div>';
      }

      const cardHTML = `
        <div class="course-card" data-course-index="${originalCourseIndex}" data-course-id="${course.id || ''}">
          <div class="card-top-preview card-preview-board">
            <span class="course-badge">${course.category || 'Repertoire'}</span>
            ${miniBoardHTML}
          </div>
          <div class="course-card-info">
            <h4>${course.title || 'Untitled Course'}</h4>
            <p class="card-subtitle" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem;">
              ${course.subtitle || ''}
            </p>
            <p>${course.description || ''}</p>
          </div>
          <div class="course-progress-block">
            <div class="course-progress-header">
              <span>Progress (${completedCount}/${totalLines} Lines • ${subCount} Modules)</span>
              <span>${percent}%</span>
            </div>
            <div class="course-progress-track">
              <div class="course-progress-fill" style="width: ${percent}%"></div>
            </div>
          </div>
          <button class="card-action-btn view-course-btn" data-course-index="${originalCourseIndex}">
            <span>Explore Sub-Courses &rarr;</span>
          </button>
        </div>
      `;
      $grid.append(cardHTML);
    } catch (courseRenderErr) {
      console.error('[DashboardView] Failed to render course card:', course, courseRenderErr);
      const fallbackHTML = `
        <div class="course-card" data-course-id="${(course && course.id) || 'course'}">
          <div class="course-card-info">
            <h4>${(course && course.title) || 'Opening Repertoire'}</h4>
            <p>${(course && course.description) || 'Master your opening lines with structured practice.'}</p>
          </div>
        </div>
      `;
      $grid.append(fallbackHTML);
    }
  });

  $('.view-course-btn, .course-card').off('click').on('click', function (e) {
    e.stopPropagation();
    const idx = $(this).data('course-index');
    if (idx !== undefined && onSelectCourse && courseList[idx]) {
      onSelectCourse(courseList[idx]);
    }
  });
}
