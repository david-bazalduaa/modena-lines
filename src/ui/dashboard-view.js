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
  const filteredCourses = courseList.filter(course => {
    if (!course) return false;
    const side = course.side || 'white';
    return side === activeColorFilter;
  });

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
