/* ============================================================
   PROGRESS REPOSITORY PATTERN (FIRESTORE & LOCALSTORAGE FALLBACK)
   ============================================================ */

import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.js';
import { APP_CONFIG } from '../config/settings.js';

export class ProgressRepository {
  constructor() {
    this.storageKey = APP_CONFIG.storageKey || 'modena_lines_v3_state';
    this.listeners = [];
  }

  /**
   * Reads repertoire progress for the given user (or guest).
   * @param {Object|null} user Firebase User object or null
   * @returns {Promise<Object>} State object { lineStats, totalAttempts, completedCount, overallAccuracy }
   */
  async loadProgress(user = null) {
    if (user && db) {
      try {
        const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const cloudData = docSnap.data();
          return {
            lineStats: cloudData.lineStats || {},
            totalAttempts: cloudData.totalAttempts || 0,
            completedCount: cloudData.completedCount || 0,
            overallAccuracy: cloudData.overallAccuracy !== undefined ? cloudData.overallAccuracy : 100
          };
        } else {
          // New cloud user: check if there is guest local storage data to migrate
          const localData = this.loadFromLocalStorage();
          if (localData && Object.keys(localData.lineStats || {}).length > 0) {
            console.log('[ProgressRepository] Migrating guest local progress to new Firestore document...');
            await this.saveProgress(localData, user);
            return localData;
          }
          return this.getEmptyState();
        }
      } catch (error) {
        console.warn('[ProgressRepository] Failed to load from Firestore, falling back to LocalStorage:', error);
        return this.loadFromLocalStorage();
      }
    }

    // Guest User
    return this.loadFromLocalStorage();
  }

  /**
   * Persists progress to Firestore (if authenticated) or LocalStorage (if guest).
   * @param {Object} state
   * @param {Object|null} user
   */
  async saveProgress(state, user = null) {
    if (user && db) {
      try {
        const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
        await setDoc(userDocRef, {
          lineStats: state.lineStats || {},
          totalAttempts: state.totalAttempts || 0,
          completedCount: state.completedCount || 0,
          overallAccuracy: state.overallAccuracy || 100,
          updatedAt: serverTimestamp()
        }, { merge: true });
        
        // Also keep local cache updated
        this.saveToLocalStorage(state);
      } catch (error) {
        console.warn('[ProgressRepository] Firestore save error, saving to LocalStorage fallback:', error);
        this.saveToLocalStorage(state);
      }
    } else {
      this.saveToLocalStorage(state);
    }
  }

  /**
   * Merges existing guest localStorage progress with user's Cloud Firestore data on login.
   * @param {Object} user Firebase User
   * @returns {Promise<Object>} Merged State
   */
  async mergeLocalWithCloud(user) {
    const localData = this.loadFromLocalStorage();
    if (!user || !db) return localData;

    try {
      const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
      const docSnap = await getDoc(userDocRef);
      const cloudData = docSnap.exists() ? docSnap.data() : { lineStats: {} };

      const mergedLineStats = { ...(cloudData.lineStats || {}) };
      const localStats = localData.lineStats || {};

      Object.keys(localStats).forEach((lineId) => {
        const local = localStats[lineId];
        const cloud = mergedLineStats[lineId];

        if (!cloud) {
          mergedLineStats[lineId] = { ...local };
        } else {
          mergedLineStats[lineId] = {
            completed: Boolean(local.completed || cloud.completed),
            attempts: Math.max(local.attempts || 0, cloud.attempts || 0),
            accuracy: Math.max(local.accuracy || 0, cloud.accuracy || 0),
            mistakes: Math.min(local.mistakes !== undefined ? local.mistakes : 0, cloud.mistakes !== undefined ? cloud.mistakes : 0)
          };
        }
      });

      const mergedState = {
        lineStats: mergedLineStats,
        totalAttempts: Math.max(localData.totalAttempts || 0, cloudData.totalAttempts || 0),
        completedCount: Math.max(localData.completedCount || 0, cloudData.completedCount || 0),
        overallAccuracy: cloudData.overallAccuracy || localData.overallAccuracy || 100
      };

      // Persist merged state back to Firestore
      await this.saveProgress(mergedState, user);
      return mergedState;
    } catch (err) {
      console.warn('[ProgressRepository] Progress migration merge error:', err);
      return localData;
    }
  }

  loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && parsed.lineStats) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[ProgressRepository] LocalStorage read warning:', e);
    }
    return this.getEmptyState();
  }

  saveToLocalStorage(state) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(state));
    } catch (e) {
      console.warn('[ProgressRepository] LocalStorage write warning:', e);
    }
  }

  getEmptyState() {
    return {
      lineStats: {},
      totalAttempts: 0,
      completedCount: 0,
      overallAccuracy: 100
    };
  }
}

export const progressRepository = new ProgressRepository();
