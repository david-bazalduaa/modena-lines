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
    let totalLines = 0;

    if (course.subCourses && course.subCourses.length > 0) {
      course.subCourses.forEach(sub => {
        const lines = sub.lines || [];
        totalLines += lines.length;
        lines.forEach(line => {
          const st = userProgress.getLineStat(line.id);
          if (st.completed) completedCount++;
        });
      });
    } else if (course.lines) {
      totalLines = course.lines.length;
      course.lines.forEach(line => {
        const st = userProgress.getLineStat(line.id);
        if (st.completed) completedCount++;
      });
    }

    const subCount = course.subCourses ? course.subCourses.length : 0;
    const percent = totalLines > 0 ? Math.round((completedCount / totalLines) * 100) : 0;

    const cardHTML = `
      <div class="course-card" data-course-index="${courseIndex}">
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
        <button class="card-action-btn view-course-btn" data-course-index="${courseIndex}">
          <span>Explore Sub-Courses &rarr;</span>
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
