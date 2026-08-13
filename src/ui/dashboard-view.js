/* ============================================================
   DASHBOARD VIEW (CATALOG & COURSE LINES HUB)
   ============================================================ */

import { COURSES } from '../data/courses.js';
import { generateMiniBoardHTML } from '../engine/board-renderer.js';
import { userProgress } from '../storage/user-progress.js';
import { renderModeDeck } from './mode-selector.js';

export function renderDashboard(onSelectLine) {
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
        <div class="card-top-preview">
          <span class="course-badge">${course.category}</span>
          ${generateMiniBoardHTML(course.previewFEN)}
        </div>
        <div class="course-card-info">
          <h4>${course.title}</h4>
          <p>${course.description}</p>
        </div>
        <div class="course-progress-block">
          <div class="course-progress-header">
            <span>Progress (${completedCount}/${totalLines} Lines)</span>
            <span>${percent}%</span>
          </div>
          <div class="course-progress-track">
            <div class="course-progress-fill" style="width: ${percent}%"></div>
          </div>
        </div>
        <button class="card-action-btn view-course-btn" data-course-index="${courseIndex}">
          <span>Explore Opening Course →</span>
        </button>
      </div>
    `;
    $grid.append(cardHTML);
  });

  $('.view-course-btn, .course-card').off('click').on('click', function (e) {
    e.stopPropagation();
    const idx = $(this).data('course-index');
    if (idx !== undefined) {
      renderCourseLinesHub(COURSES[idx], onSelectLine);
    }
  });
}

export function renderCourseLinesHub(course, onSelectLine) {
  $('#dashboard-view').addClass('hidden').removeClass('active');
  $('#course-lines-view').removeClass('hidden').addClass('active');
  $('#study-view').addClass('hidden').removeClass('active');

  $('#course-lines-title').text(course.title);
  $('#course-lines-desc').text(course.subtitle + ' — ' + course.description);

  // Render Training Deck Modes Widget
  renderModeDeck('course-mode-deck-container', course, userProgress, (selectedMode) => {
    console.log('Selected Training Mode:', selectedMode);
    if (selectedMode === 'drill' || selectedMode === 'arena') {
      if (window.appInstance) {
        window.appInstance.startBlindStreakMode(course, selectedMode);
      }
    }
  });

  const $hubList = $('#lines-hub-list');
  $hubList.empty();

  if (course.lines.length === 0) {
    $hubList.html('<p class="card-body-text" style="padding: 1rem;">More variations coming soon for this opening category!</p>');
    return;
  }

  course.lines.forEach((line, lineIndex) => {
    const st = userProgress.getLineStat(line.id);
    const itemHTML = `
      <div class="line-hub-item" data-line-id="${line.id}">
        <div class="line-hub-info">
          <span class="meta-tag">${line.category}</span>
          <h4 class="line-hub-title">${line.name}</h4>
          <span class="line-hub-moves">${line.eco}</span>
          <p class="card-body-text" style="margin-top: 0.3rem;">${line.fullAnnotation}</p>
        </div>
        <button class="card-action-btn train-line-btn" data-line-id="${line.id}" style="width: 170px;">
          <span>${st.completed ? '🏆 Mastered' : '▶ Train Line'}</span>
        </button>
      </div>
    `;
    $hubList.append(itemHTML);
  });

  $('.train-line-btn, .line-hub-item').off('click').on('click', function (e) {
    const lineId = $(this).data('line-id');
    const targetLine = course.lines.find(l => l.id === lineId);
    if (targetLine && onSelectLine) {
      onSelectLine(targetLine);
    }
  });
}
