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

  recordAttempt(lineId) {
    const st = this.getLineStat(lineId);
    st.attempts = (st.attempts || 0) + 1;
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
    this.save();
  }

  recalculateMetrics(allLines) {
    let completedCount = 0;
    let attemptsTotal = 0;
    let accSum = 0;
    let accCount = 0;

    (allLines || []).forEach(line => {
      const isCompleted = this.isLineCompleted(line);
      if (isCompleted) completedCount++;
      const st = this.state.lineStats[line.id];
      if (st) {
        attemptsTotal += (st.attempts || 0);
        if (st.accuracy !== undefined) {
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
      totalCount: (allLines || []).length,
      attemptsTotal,
      overallAccuracy: this.state.overallAccuracy
    };
  }
}

export const userProgress = new UserProgress();
