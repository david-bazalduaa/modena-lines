/* ============================================================
   MAIN APPLICATION ENTRY POINT & ROUTER
   ============================================================ */

import { COURSES, getAllLines } from './data/courses.js';
import { userProgress } from './storage/user-progress.js';
import { renderDashboard, renderCourseLinesHub } from './ui/dashboard-view.js';
import { TrainerView } from './ui/trainer-view.js';

class App {
  constructor() {
    this.currentView = 'catalog';
    this.trainer = new TrainerView();
    this.allLines = getAllLines();
  }

  init() {
    this.updateHeaderMetrics();
    this.initNavigation();

    // Default route: render Course Catalog
    this.showCatalogView();

    console.log('Modena Lines White Neumorphic Modular SPA Initialized!');
  }

  initNavigation() {
    $('#nav-catalog-btn, #brand-home').off('click').on('click', () => {
      this.showCatalogView();
    });

    $('#nav-study-btn').off('click').on('click', () => {
      this.showStudyView();
    });

    $('#back-to-courses-btn').off('click').on('click', () => {
      this.showCatalogView();
    });
  }

  updateHeaderMetrics() {
    const metrics = userProgress.recalculateMetrics(this.allLines);
    $('#header-accuracy').text(metrics.overallAccuracy + '%');
    $('#header-completed').text(`${metrics.completedCount}/${metrics.totalCount}`);

    $('#dash-total-mastered').text(metrics.completedCount);
    $('#dash-avg-accuracy').text(metrics.overallAccuracy + '%');
    $('#dash-total-drills').text(metrics.attemptsTotal);

    $('#stat-lines').text(`${metrics.completedCount}/${metrics.totalCount}`);
  }

  showCatalogView() {
    this.currentView = 'catalog';
    $('#dashboard-view').removeClass('hidden').addClass('active');
    $('#course-lines-view').addClass('hidden').removeClass('active');
    $('#study-view').addClass('hidden').removeClass('active');

    $('#nav-catalog-btn').addClass('active');
    $('#nav-study-btn').removeClass('active');

    this.updateHeaderMetrics();
    renderDashboard((targetLine) => {
      this.startLineDrill(targetLine);
    });
  }

  showCourseLinesHub(course) {
    this.currentView = 'course-hub';
    $('#nav-catalog-btn').addClass('active');
    $('#nav-study-btn').removeClass('active');

    renderCourseLinesHub(course, (targetLine) => {
      this.startLineDrill(targetLine);
    });
  }

  showStudyView() {
    this.currentView = 'study';
    $('#dashboard-view').addClass('hidden').removeClass('active');
    $('#course-lines-view').addClass('hidden').removeClass('active');
    $('#study-view').removeClass('hidden').addClass('active');

    $('#nav-catalog-btn').removeClass('active');
    $('#nav-study-btn').addClass('active');

    if (!this.trainer.currentLine && this.allLines.length > 0) {
      this.trainer.loadLine(this.allLines[0]);
    } else if (this.trainer.board) {
      setTimeout(() => this.trainer.board.resize(), 50);
    }
  }

  startLineDrill(line) {
    this.showStudyView();
    this.trainer.loadLine(line);
    this.updateHeaderMetrics();
  }

  startBlindStreakMode(course, mode) {
    this.showStudyView();
    this.trainer.startBlindStreak(course, mode);
    this.updateHeaderMetrics();
  }
}

$(document).ready(() => {
  const app = new App();
  app.init();
  window.appInstance = app;
});
