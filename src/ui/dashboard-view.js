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
export function renderDashboard(onSelectCourse, activeColorFilter = 'white', onSwitchFilter = null) {
  const $grid = $('#course-grid');
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

  // Filter courses by side ('white' vs 'black')
  const filteredCourses = COURSES.filter(course => (course.side || 'white') === activeColorFilter);

  // Empty state handling when no courses match the filter
  if (filteredCourses.length === 0) {
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

  // Render course cards for filtered repertoires
  filteredCourses.forEach((course) => {
    const originalCourseIndex = COURSES.findIndex(c => c.id === course.id);
    let completedCount = 0;
    let totalLines = 0;

    if (course.subCourses && course.subCourses.length > 0) {
      course.subCourses.forEach(sub => {
        const lines = sub.lines || [];
        totalLines += lines.length;
        lines.forEach(line => {
          if (typeof userProgress.isLineCompleted === 'function' ? userProgress.isLineCompleted(line) : userProgress.getLineStat(line.id).completed) {
            completedCount++;
          }
        });
      });
    } else if (course.lines) {
      totalLines = course.lines.length;
      course.lines.forEach(line => {
        if (typeof userProgress.isLineCompleted === 'function' ? userProgress.isLineCompleted(line) : userProgress.getLineStat(line.id).completed) {
          completedCount++;
        }
      });
    }

    const subCount = course.subCourses ? course.subCourses.length : 0;
    const percent = totalLines > 0 ? Math.round((completedCount / totalLines) * 100) : 0;

    const cardHTML = `
      <div class="course-card" data-course-index="${originalCourseIndex}" data-course-id="${course.id}">
        <div class="card-top-preview card-preview-board">
          <span class="course-badge">${course.category}</span>
          ${generateMiniBoardHTML(course.previewFEN)}
        </div>
        <div class="course-card-info">
          <h4>${course.title}</h4>
          <p class="card-subtitle" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            ${course.subtitle || ''}
          </p>
          <p>${course.description}</p>
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
  });

  $('.view-course-btn, .course-card').off('click').on('click', function (e) {
    e.stopPropagation();
    const idx = $(this).data('course-index');
    if (idx !== undefined && onSelectCourse && COURSES[idx]) {
      onSelectCourse(COURSES[idx]);
    }
  });
}
