/* ============================================================
   SUB-COURSE SELECTION HUB VIEW (LEVEL 2 ROUTER VIEW)
   ============================================================ */

import { generateMiniBoardHTML } from '../engine/board-renderer.js';

export function renderSubCourseHub(course, userProgress, onSelectSubCourse, onBackToCatalog) {
  if (!course) return;

  const $grid = $('#subcourse-grid');
  $grid.empty();

  // Populate hero section
  $('#subcourse-hero-title').text(course.title);
  $('#subcourse-hero-desc').text(course.description);

  const subCourses = course.subCourses || [];
  let totalCourseLines = 0;
  let totalCourseMastered = 0;

  subCourses.forEach(sub => {
    const lines = sub.lines || [];
    totalCourseLines += lines.length;
    lines.forEach(line => {
      if (typeof userProgress.isLineCompleted === 'function' ? userProgress.isLineCompleted(line) : userProgress.getLineStat(line.id).completed) {
        totalCourseMastered++;
      }
    });
  });

  const percentOverall = totalCourseLines > 0 ? Math.round((totalCourseMastered / totalCourseLines) * 100) : 0;

  $('#subcourse-total-mastered').text(totalCourseMastered);
  $('#subcourse-modules-count').text(subCourses.length);
  $('#subcourse-avg-accuracy').text(percentOverall + '%');
  $('#subcourse-grid-badge').text(`${subCourses.length} Sub-Course Modules`);

  // Render Sub-Course Cards
  subCourses.forEach((subCourse, index) => {
    const lines = subCourse.lines || [];
    let subCompletedCount = 0;

    lines.forEach(line => {
      if (typeof userProgress.isLineCompleted === 'function' ? userProgress.isLineCompleted(line) : userProgress.getLineStat(line.id).completed) {
        subCompletedCount++;
      }
    });

    const subTotalLines = lines.length;
    const subPercent = subTotalLines > 0 ? Math.round((subCompletedCount / subTotalLines) * 100) : 0;

    const cardHTML = `
      <div class="course-card subcourse-card" data-subcourse-id="${subCourse.id}">
        <div class="card-top-preview card-preview-board">
          <span class="course-badge">${subCourse.category || 'Repertoire'}</span>
          ${generateMiniBoardHTML(subCourse.previewFEN)}
        </div>
        <div class="course-card-info">
          <h4>${subCourse.title}</h4>
          <p class="card-subtitle" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            ${subCourse.subtitle || ''}
          </p>
          <p>${subCourse.description}</p>
        </div>
        <div class="course-progress-block">
          <div class="course-progress-header">
            <span>Progress (${subCompletedCount}/${subTotalLines} Lines Mastered)</span>
            <span>${subPercent}%</span>
          </div>
          <div class="course-progress-track">
            <div class="course-progress-fill" style="width: ${subPercent}%"></div>
          </div>
        </div>
        <button class="card-action-btn view-subcourse-btn" data-subcourse-id="${subCourse.id}">
          <span>Train Sub-Course Module &rarr;</span>
        </button>
      </div>
    `;
    $grid.append(cardHTML);
  });

  // Bind Back Button
  $('#btn-back-to-catalog').off('click').on('click', () => {
    if (onBackToCatalog) onBackToCatalog();
  });

  // Bind Card Click Events
  $('.view-subcourse-btn, .subcourse-card').off('click').on('click', function (e) {
    e.stopPropagation();
    const subId = $(this).data('subcourse-id');
    const matchedSub = subCourses.find(s => s.id === subId);
    if (matchedSub && onSelectSubCourse) {
      onSelectSubCourse(matchedSub);
    }
  });
}
