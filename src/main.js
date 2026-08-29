/* ============================================================
   MAIN APPLICATION ENTRY POINT & 3-LEVEL ROUTER (DOM ISOLATION)
   ============================================================ */

import { COURSES, getAllLines } from './data/courses.js';
import { userProgress } from './storage/user-progress.js';
import { authService } from './services/auth-service.js';
import { authModal, renderHeaderAuth } from './ui/auth-modal.js';
import { HeaderView } from './ui/header-view.js';
import { renderDashboard } from './ui/dashboard-view.js';
import { renderSubCourseHub } from './ui/subcourse-view.js';
import { TrainerView } from './ui/trainer-view.js';

class App {
  constructor() {
    this.currentView = 'catalog'; // 'catalog' | 'subcourse' | 'study'
    this.activeColorFilter = 'white'; // 'white' | 'black'
    this.selectedCourse = null;
    this.selectedSubCourse = null;
    this.trainer = new TrainerView();
    this.allLines = getAllLines();
    this.headerView = null;
  }

  init() {
    this.initHeader();
    this.updateHeaderMetrics();
    this.initNavigation();
    this.initAuth();

    // Subscribe to progress changes from local or cloud synchronization
    userProgress.subscribe(() => {
      this.updateHeaderMetrics();
      this.refreshCurrentView();
    });

    // Listen to real-time line mastery events for instant synchronous header pill updates
    window.addEventListener('line-mastered', () => {
      this.updateHeaderMetrics();
    });

    // Default route: render Level 1 Course Catalog View
    this.showCatalogView();

    console.log('Modena Lines 3-Level Navigation Router & Cloud Sync Initialized!');
  }

  initHeader() {
    this.headerView = new HeaderView({
      initialFilter: this.activeColorFilter,
      onFilterChange: (newFilter) => {
        this.activeColorFilter = newFilter;
        this.showCatalogView();
      }
    });
  }

  initAuth() {
    // Render initial auth deck
    renderHeaderAuth('#header-auth-container', authService.getCurrentUser(), () => {
      authModal.open('signin');
    });

    // Listen to reactive auth state transitions
    authService.onAuthStateChanged((user) => {
      renderHeaderAuth('#header-auth-container', user, () => {
        authModal.open('signin');
      });
      this.updateHeaderMetrics();
      this.refreshCurrentView();
    });
  }

  initNavigation() {
    // Level 1 Nav shortcuts
    $('#brand-home, #nav-catalog-btn-bottom').off('click').on('click', () => {
      this.showCatalogView();
    });

    // Level 2 Nav shortcut from bottom bar
    $('#nav-subcourse-btn-bottom').off('click').on('click', () => {
      if (this.selectedCourse) {
        this.showSubCourseHub(this.selectedCourse);
      } else if (COURSES.length > 0) {
        this.showSubCourseHub(COURSES[0]);
      } else {
        this.showCatalogView();
      }
    });
  }

  refreshCurrentView() {
    if (this.currentView === 'catalog') {
      renderDashboard(
        (targetCourse) => {
          this.showSubCourseHub(targetCourse);
        },
        this.activeColorFilter,
        (targetFilter) => {
          if (this.headerView) {
            this.headerView.setActiveFilter(targetFilter, true);
          }
        }
      );
    } else if (this.currentView === 'subcourse' && this.selectedCourse) {
      renderSubCourseHub(
        this.selectedCourse,
        userProgress,
        (targetSubCourse) => {
          this.startSubCourse(targetSubCourse);
        },
        () => {
          this.showCatalogView();
        }
      );
    } else if (this.currentView === 'study' && this.trainer && this.trainer.currentSubCourse) {
      this.trainer.renderLinesList();
    }
  }

  updateHeaderMetrics() {
    this.allLines = getAllLines();
    const metrics = userProgress.recalculateMetrics(this.allLines);
    if (this.headerView && typeof this.headerView.updateProgressMetrics === 'function') {
      this.headerView.updateProgressMetrics(metrics);
    } else {
      $('#header-accuracy').text(metrics.overallAccuracy + '%');
      $('#header-completed').text(`${metrics.completedCount}/${metrics.totalCount}`);
    }

    $('#dash-total-mastered').text(metrics.completedCount);
    $('#dash-avg-accuracy').text(metrics.overallAccuracy + '%');
    
    const streak = metrics.dailyStreak || 0;
    const streakUnit = streak === 1 ? 'Day' : 'Days';
    $('#dash-daily-streak-num').text(`${streak} ${streakUnit}`);
    $('#dash-total-drills').text(metrics.attemptsTotal);

    $('#stat-lines').text(`${metrics.completedCount}/${metrics.totalCount}`);
  }

  /**
   * LEVEL 1: MAIN CATALOG VIEW (/catalog)
   */
  showCatalogView() {
    this.currentView = 'catalog';

    // Hide Level 2 Sub-Course Hub & Level 3 Study View
    $('#subcourse-view').addClass('hidden').removeClass('active');
    $('#study-view').addClass('hidden').removeClass('active');

    // Show Level 1 Dashboard Catalog
    $('#dashboard-view').removeClass('hidden').addClass('active');

    this.updateHeaderMetrics();
    renderDashboard(
      (targetCourse) => {
        this.showSubCourseHub(targetCourse);
      },
      this.activeColorFilter,
      (targetFilter) => {
        if (this.headerView) {
          this.headerView.setActiveFilter(targetFilter, true);
        }
      }
    );
  }

  /**
   * LEVEL 2: SUB-COURSE SELECTION HUB (/course/:courseId)
   */
  showSubCourseHub(course) {
    this.currentView = 'subcourse';
    this.selectedCourse = course || (COURSES.length > 0 ? COURSES[0] : null);

    if (!this.selectedCourse) {
      this.showCatalogView();
      return;
    }

    // Hide Level 1 Catalog & Level 3 Study View
    $('#dashboard-view').addClass('hidden').removeClass('active');
    $('#study-view').addClass('hidden').removeClass('active');

    // Show Level 2 Sub-Course Hub
    $('#subcourse-view').removeClass('hidden').addClass('active');

    this.updateHeaderMetrics();
    renderSubCourseHub(
      this.selectedCourse,
      userProgress,
      (targetSubCourse) => {
        this.startSubCourse(targetSubCourse);
      },
      () => {
        this.showCatalogView();
      }
    );
  }

  /**
   * LEVEL 3: INTERACTIVE STUDY BOARD VIEW (/study/:subCourseId)
   */
  showStudyView(subCourse = null) {
    this.currentView = 'study';

    // Completely hide Level 1 and Level 2 views
    $('#dashboard-view').addClass('hidden').removeClass('active');
    $('#subcourse-view').addClass('hidden').removeClass('active');

    // Show Study Board
    $('#study-view').removeClass('hidden').addClass('active');

    if (subCourse) {
      this.selectedSubCourse = subCourse;
      this.trainer.loadSubCourse(subCourse, 0, this.selectedCourse);
    } else if (!this.trainer.currentSubCourse) {
      // Default to first subcourse of first course
      if (COURSES.length > 0 && COURSES[0].subCourses && COURSES[0].subCourses.length > 0) {
        this.selectedCourse = COURSES[0];
        this.selectedSubCourse = COURSES[0].subCourses[0];
        this.trainer.loadSubCourse(this.selectedSubCourse, 0, this.selectedCourse);
      }
    } else if (this.trainer.board) {
      setTimeout(() => this.trainer.board.resize(), 50);
    }

    this.updateHeaderMetrics();
  }

  startSubCourse(subCourse) {
    this.showStudyView(subCourse);
  }

  startCourseDrill(course) {
    this.showSubCourseHub(course);
  }

  startBlindStreakMode(subCourse, mode) {
    this.showStudyView(subCourse);
    this.trainer.startBlindStreak(subCourse, mode);
    this.updateHeaderMetrics();
  }
}

$(document).ready(() => {
  const app = new App();
  app.init();
  window.appInstance = app;
});
