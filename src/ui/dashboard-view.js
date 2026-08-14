/* ============================================================
   DASHBOARD VIEW (COURSE CATALOG & MINI-BOARD PREVIEWS)
   ============================================================ */

import { COURSES } from '../data/courses.js';
import { generateMiniBoardHTML } from '../engine/board-renderer.js';
import { userProgress } from '../storage/user-progress.js';

export function renderDashboard(onSelectCourse) {
  const $grid = $('#course-grid');
  $grid.empty();

  COURSES.forEach((course, courseIndex) => {
    let completedCount = 0;
    course.lines.forEach(line => {
      const st = userProgress.getLineStat(line.id);
      if (st.completed) completedCount++;
    });

    const totalLines = course.lines.length;
    const percent = totalLines > 0 ? Math.round((completedCount / totalLines) * 100) : 0;

    const cardHTML = `
      <div class="course-card" data-course-index="${courseIndex}">
        <div class="card-top-preview card-preview-board">
          <span class="course-badge">${course.category}</span>
          ${generateMiniBoardHTML(course.previewFEN)}
        </div>
        <div class="course-card-info">
          <h4>${course.title}</h4>
          <p>${course.description}</p>
        </div>
        <div class="course-progress-block">
          <div class="course-progress-header">
            <span>Progress (${completedCount}/${totalLines} Lines Mastered)</span>
            <span>${percent}%</span>
          </div>
          <div class="course-progress-track">
            <div class="course-progress-fill" style="width: ${percent}%"></div>
          </div>
        </div>
        <button class="card-action-btn view-course-btn" data-course-index="${courseIndex}">
          <span>Train Opening Course \u2192</span>
        </button>
      </div>
    `;
    $grid.append(cardHTML);
  });

  $('.view-course-btn, .course-card').off('click').on('click', function (e) {
    e.stopPropagation();
    const idx = $(this).data('course-index');
    if (idx !== undefined && onSelectCourse) {
      onSelectCourse(COURSES[idx]);
    }
  });
}
