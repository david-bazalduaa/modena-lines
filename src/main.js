/* ============================================================
   MAIN APPLICATION ENTRY POINT & ROUTER (DOM ISOLATION)
   ============================================================ */

import { COURSES, getAllLines } from './data/courses.js';
import { userProgress } from './storage/user-progress.js';
import { renderDashboard } from './ui/dashboard-view.js';
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

    // Default route: render Course Catalog View
    this.showCatalogView();

    console.log('Modena Lines SPA Router & View Lifecycle Initialized!');
  }

  initNavigation() {
    $('#nav-catalog-btn, #brand-home, #nav-catalog-btn-bottom').off('click').on('click', () => {
      this.showCatalogView();
    });

    $('#nav-study-btn').off('click').on('click', () => {
      this.showStudyView();
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

    // Completely hide Study View & floating bottom controls deck
    $('#study-view').addClass('hidden').removeClass('active');
    $('#controls-bar').addClass('hidden');

    // Show Dashboard Catalog
    $('#dashboard-view').removeClass('hidden').addClass('active');

    $('#nav-catalog-btn').addClass('active');
    $('#nav-study-btn').removeClass('active');

    this.updateHeaderMetrics();
    renderDashboard((targetCourse) => {
      this.startCourseDrill(targetCourse);
    });
  }

  showStudyView() {
    this.currentView = 'study';

    // Completely hide Dashboard View
    $('#dashboard-view').addClass('hidden').removeClass('active');
    $('#course-lines-view').addClass('hidden').removeClass('active');

    // Show Study Board & floating bottom controls deck
    $('#study-view').removeClass('hidden').addClass('active');
    $('#controls-bar').removeClass('hidden');

    $('#nav-catalog-btn').removeClass('active');
    $('#nav-study-btn').addClass('active');

    if (!this.trainer.currentCourse && COURSES.length > 0) {
      this.trainer.loadCourse(COURSES[0]);
    } else if (this.trainer.board) {
      setTimeout(() => this.trainer.board.resize(), 50);
    }
  }

  startCourseDrill(course) {
    this.showStudyView();
    this.trainer.loadCourse(course);
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
