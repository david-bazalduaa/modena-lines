/* ============================================================
   USER PROGRESS MANAGER WITH REPOSITORY PATTERN & CLOUD SYNC
   ============================================================ */

import { progressRepository } from './progress-repository.js';
import { authService } from '../services/auth-service.js';

class UserProgress {
  constructor() {
    this.state = {
      lineStats: {},       // map lineId -> { completed: bool, attempts: int, accuracy: int, mistakes: int }
      totalAttempts: 0,
      completedCount: 0,
      overallAccuracy: 100
    };
    this.currentUser = null;
    this.changeListeners = [];

    // Initialize with local cache first for instant synchronous startup
    this.state = progressRepository.loadFromLocalStorage();

    // Hook into authentication state changes for cloud sync & migration
    authService.onAuthStateChanged(async (user) => {
      this.currentUser = user;
      try {
        if (user) {
          // Authenticated: merge any guest progress with Cloud Firestore
          const cloudState = await progressRepository.mergeLocalWithCloud(user);
          if (cloudState) {
            this.state = cloudState;
            this.notifySubscribers();
          }
        } else {
          // Guest / Logged out: fallback to local storage
          this.state = progressRepository.loadFromLocalStorage();
          this.notifySubscribers();
        }
      } catch (err) {
        console.warn('[UserProgress] Cloud sync error, keeping local progress:', err);
        this.state = progressRepository.loadFromLocalStorage();
        this.notifySubscribers();
      }
    });
  }

  /**
   * Subscribe to progress state changes (e.g., after cloud sync).
   * @param {Function} callback (state) => void
   */
  subscribe(callback) {
    if (typeof callback === 'function') {
      this.changeListeners.push(callback);
    }
    return () => {
      this.changeListeners = this.changeListeners.filter(fn => fn !== callback);
    };
  }

  notifySubscribers() {
    this.changeListeners.forEach(fn => {
      try {
        fn(this.state);
      } catch (err) {
        console.error('[UserProgress] Subscriber notification error:', err);
      }
    });
  }

  save() {
    progressRepository.saveProgress(this.state, this.currentUser);
  }

  getLineStat(lineId) {
    if (!this.state.lineStats[lineId]) {
      this.state.lineStats[lineId] = {
        completed: false,
        attempts: 0,
        accuracy: 100,
        mistakes: 0
      };
    }
    return this.state.lineStats[lineId];
  }

  /**
   * Evaluates and updates the daily practice streak based on calendar activity.
   */
  checkAndUpdateDailyStreak() {
    if (!this.state.streakData) {
      this.state.streakData = {
        currentDailyStreak: 0,
        lastActiveDate: null
      };
    }

    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    const yDate = new Date();
    yDate.setDate(yDate.getDate() - 1);
    const yesterday = `${yDate.getFullYear()}-${String(yDate.getMonth() + 1).padStart(2, '0')}-${String(yDate.getDate()).padStart(2, '0')}`;

    const last = this.state.streakData.lastActiveDate;

    if (!last) {
      this.state.streakData.currentDailyStreak = 1;
      this.state.streakData.lastActiveDate = today;
    } else if (last === today) {
      if (this.state.streakData.currentDailyStreak === 0) {
        this.state.streakData.currentDailyStreak = 1;
      }
    } else if (last === yesterday) {
      this.state.streakData.currentDailyStreak = (this.state.streakData.currentDailyStreak || 0) + 1;
      this.state.streakData.lastActiveDate = today;
    } else {
      // More than 1 day elapsed: reset streak
      this.state.streakData.currentDailyStreak = 1;
      this.state.streakData.lastActiveDate = today;
    }

    this.save();
    return this.state.streakData.currentDailyStreak;
  }

  getDailyStreak() {
    if (!this.state.streakData || !this.state.streakData.lastActiveDate) {
      return 0;
    }

    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    const yDate = new Date();
    yDate.setDate(yDate.getDate() - 1);
    const yesterday = `${yDate.getFullYear()}-${String(yDate.getMonth() + 1).padStart(2, '0')}-${String(yDate.getDate()).padStart(2, '0')}`;

    const last = this.state.streakData.lastActiveDate;
    if (last === today || last === yesterday) {
      return this.state.streakData.currentDailyStreak || 0;
    }
    return 0;
  }

  recordAttempt(lineId) {
    const st = this.getLineStat(lineId);
    st.attempts = (st.attempts || 0) + 1;
    this.checkAndUpdateDailyStreak();
    this.save();
  }

  recordMistake(lineId) {
    const st = this.getLineStat(lineId);
    st.mistakes = (st.mistakes || 0) + 1;
    this.save();
  }

  isLineCompleted(line) {
    if (!line) return false;
    if (typeof line === 'string') {
      const st = this.state.lineStats[line];
      return Boolean(st && st.completed);
    }
    if (line.mastered === true || line.completedInLearn === true) return true;
    const st = this.state.lineStats[line.id];
    return Boolean(st && st.completed);
  }

  markCompleted(lineId, totalMoves) {
    const st = this.getLineStat(lineId);
    st.completed = true;
    const mistakes = st.mistakes || 0;
    const moves = totalMoves && totalMoves > 0 ? totalMoves : 1;
    const acc = Math.max(0, Math.round(((moves - mistakes) / moves) * 100));
    st.accuracy = acc;
    st.mistakes = 0;
    this.checkAndUpdateDailyStreak();
    this.save();
  }

  recalculateMetrics(allLines) {
    let completedCount = 0;
    let attemptsTotal = 0;
    let accSum = 0;
    let accCount = 0;

    const linesList = allLines || [];
    linesList.forEach(line => {
      const isCompleted = this.isLineCompleted(line);
      if (isCompleted) completedCount++;

      const st = this.state.lineStats[line.id];
      if (st) {
        attemptsTotal += (st.attempts || 0);
        if (st.accuracy !== undefined && (st.attempts > 0 || st.completed)) {
          accSum += st.accuracy;
          accCount++;
        }
      }
    });

    this.state.completedCount = completedCount;
    this.state.totalAttempts = attemptsTotal;
    this.state.overallAccuracy = accCount > 0 ? Math.round(accSum / accCount) : 100;

    return {
      completedCount,
      totalCount: linesList.length,
      attemptsTotal,
      overallAccuracy: this.state.overallAccuracy,
      dailyStreak: this.getDailyStreak()
    };
  }
}

export const userProgress = new UserProgress();
