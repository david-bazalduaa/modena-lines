/* ============================================================
   USER PROGRESS & LOCALSTORAGE PERSISTENCE ENGINE
   ============================================================ */

import { APP_CONFIG } from '../config/settings.js';

class UserProgress {
  constructor() {
    this.state = {
      lineStats: {},       // map lineId -> { completed: bool, attempts: int, accuracy: int, mistakes: int }
      totalAttempts: 0,
      completedCount: 0,
      overallAccuracy: 100
    };
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(APP_CONFIG.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.lineStats) {
          this.state = parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage read warning:', e);
    }
  }

  save() {
    try {
      localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('LocalStorage write warning:', e);
    }
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

  markCompleted(lineId, totalMoves) {
    const st = this.getLineStat(lineId);
    st.completed = true;
    const mistakes = st.mistakes || 0;
    const acc = Math.max(0, Math.round(((totalMoves - mistakes) / totalMoves) * 100));
    st.accuracy = acc;
    st.mistakes = 0;
    this.save();
  }

  recalculateMetrics(allLines) {
    let completedCount = 0;
    let attemptsTotal = 0;
    let accSum = 0;
    let accCount = 0;

    allLines.forEach(line => {
      const st = this.state.lineStats[line.id];
      if (st) {
        if (st.completed) completedCount++;
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
      totalCount: allLines.length,
      attemptsTotal,
      overallAccuracy: this.state.overallAccuracy
    };
  }
}

export const userProgress = new UserProgress();
