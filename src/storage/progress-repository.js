/* ============================================================
   PROGRESS REPOSITORY PATTERN (FIRESTORE & LOCALSTORAGE FALLBACK)
   ============================================================ */

import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.js';
import { APP_CONFIG } from '../config/settings.js';

/**
 * Deterministically reconciles two progress state objects using Union/Max conflict resolution:
 * - Mastered lines (completed: true) remain mastered across all devices.
 * - Attempt counts and accuracies are monotonically resolved without regressing.
 * - Line-level timestamps (lastCompletedAt, lastAttemptedAt, updatedAt) favor the newer event.
 * - Daily practice streaks are resolved by active date recency and max streak values.
 * - Aggregate metrics (completedCount, totalAttempts, overallAccuracy) are deterministically recalculated.
 *
 * @param {Object|null} stateA Primary or local state
 * @param {Object|null} stateB Secondary or remote state
 * @returns {Object} Deterministically reconciled state object
 */
export function reconcileProgressStates(stateA, stateB) {
  const a = stateA && typeof stateA === 'object' ? stateA : {};
  const b = stateB && typeof stateB === 'object' ? stateB : {};

  const aLineStats = (a.lineStats && typeof a.lineStats === 'object') ? a.lineStats : {};
  const bLineStats = (b.lineStats && typeof b.lineStats === 'object') ? b.lineStats : {};

  const mergedLineStats = {};
  const allLineIds = new Set([...Object.keys(aLineStats), ...Object.keys(bLineStats)]);

  const parseTime = (val) => {
    if (!val) return 0;
    if (typeof val.toDate === 'function') return val.toDate().getTime(); // Firestore Timestamp
    if (typeof val.seconds === 'number') return val.seconds * 1000;
    const t = new Date(val).getTime();
    return isNaN(t) ? 0 : t;
  };

  allLineIds.forEach((lineId) => {
    const lineA = aLineStats[lineId];
    const lineB = bLineStats[lineId];

    if (!lineA && lineB) {
      mergedLineStats[lineId] = { ...lineB };
      return;
    }
    if (lineA && !lineB) {
      mergedLineStats[lineId] = { ...lineA };
      return;
    }

    // Both devices have stats for this line -> resolve conflicts
    const completed = Boolean(lineA.completed || lineB.completed);
    const attempts = Math.max(lineA.attempts || 0, lineB.attempts || 0);

    // Accuracy resolution:
    // If either is completed, take the highest accuracy recorded or preserve mastered accuracy.
    let accuracy = 100;
    const accA = lineA.accuracy !== undefined ? lineA.accuracy : null;
    const accB = lineB.accuracy !== undefined ? lineB.accuracy : null;
    if (accA !== null && accB !== null) {
      accuracy = Math.max(accA, accB);
    } else if (accA !== null) {
      accuracy = accA;
    } else if (accB !== null) {
      accuracy = accB;
    }

    // Mistakes resolution:
    // If mastered, mistakes is 0; otherwise take min recorded or non-regressive value
    let mistakes = 0;
    if (!completed) {
      const mistA = lineA.mistakes !== undefined ? lineA.mistakes : null;
      const mistB = lineB.mistakes !== undefined ? lineB.mistakes : null;
      if (mistA !== null && mistB !== null) {
        mistakes = Math.min(mistA, mistB);
      } else if (mistA !== null) {
        mistakes = mistA;
      } else if (mistB !== null) {
        mistakes = mistB;
      }
    }

    // Timestamps resolution
    const compTimeA = parseTime(lineA.lastCompletedAt);
    const compTimeB = parseTime(lineB.lastCompletedAt);
    let lastCompletedAt = null;
    if (completed) {
      if (compTimeA > 0 || compTimeB > 0) {
        lastCompletedAt = new Date(Math.max(compTimeA, compTimeB)).toISOString();
      } else {
        lastCompletedAt = new Date().toISOString();
      }
    }

    const attTimeA = parseTime(lineA.lastAttemptedAt);
    const attTimeB = parseTime(lineB.lastAttemptedAt);
    let lastAttemptedAt = null;
    if (attTimeA > 0 || attTimeB > 0) {
      lastAttemptedAt = new Date(Math.max(attTimeA, attTimeB)).toISOString();
    }

    const updTimeA = parseTime(lineA.updatedAt);
    const updTimeB = parseTime(lineB.updatedAt);
    let updatedAt = null;
    if (updTimeA > 0 || updTimeB > 0) {
      updatedAt = new Date(Math.max(updTimeA, updTimeB)).toISOString();
    } else if (lastCompletedAt || lastAttemptedAt) {
      updatedAt = lastCompletedAt || lastAttemptedAt;
    }

    mergedLineStats[lineId] = {
      completed,
      attempts,
      accuracy,
      mistakes,
      ...(lastCompletedAt ? { lastCompletedAt } : {}),
      ...(lastAttemptedAt ? { lastAttemptedAt } : {}),
      ...(updatedAt ? { updatedAt } : {})
    };
  });

  // Calculate dynamic aggregate metrics
  let calculatedCompletedCount = 0;
  let calculatedTotalAttempts = 0;
  let accuracySum = 0;
  let accuracyCount = 0;

  Object.values(mergedLineStats).forEach((stat) => {
    if (stat.completed) {
      calculatedCompletedCount++;
    }
    calculatedTotalAttempts += (stat.attempts || 0);
    if (stat.attempts > 0 || stat.completed) {
      accuracySum += (stat.accuracy !== undefined ? stat.accuracy : 100);
      accuracyCount++;
    }
  });

  const totalAttempts = Math.max(
    a.totalAttempts || 0,
    b.totalAttempts || 0,
    calculatedTotalAttempts
  );

  const completedCount = Math.max(
    a.completedCount || 0,
    b.completedCount || 0,
    calculatedCompletedCount
  );

  const overallAccuracy = accuracyCount > 0
    ? Math.round(accuracySum / accuracyCount)
    : (a.overallAccuracy !== undefined ? a.overallAccuracy : (b.overallAccuracy !== undefined ? b.overallAccuracy : 100));

  // Streak data resolution
  const streakA = a.streakData || { currentDailyStreak: 0, lastActiveDate: null };
  const streakB = b.streakData || { currentDailyStreak: 0, lastActiveDate: null };

  let mergedStreak = { currentDailyStreak: 0, lastActiveDate: null };
  const dateA = streakA.lastActiveDate;
  const dateB = streakB.lastActiveDate;

  if (dateA && dateB) {
    if (dateA > dateB) {
      mergedStreak = { ...streakA };
    } else if (dateB > dateA) {
      mergedStreak = { ...streakB };
    } else {
      mergedStreak = {
        currentDailyStreak: Math.max(streakA.currentDailyStreak || 0, streakB.currentDailyStreak || 0),
        lastActiveDate: dateA
      };
    }
  } else if (dateA) {
    mergedStreak = { ...streakA };
  } else if (dateB) {
    mergedStreak = { ...streakB };
  }

  // Global updatedAt resolution
  const globalTimeA = parseTime(a.updatedAt);
  const globalTimeB = parseTime(b.updatedAt);
  let globalUpdatedAt = new Date().toISOString();
  if (globalTimeA > 0 || globalTimeB > 0) {
    globalUpdatedAt = new Date(Math.max(globalTimeA, globalTimeB)).toISOString();
  }

  return {
    lineStats: mergedLineStats,
    totalAttempts,
    completedCount,
    overallAccuracy,
    streakData: mergedStreak,
    updatedAt: globalUpdatedAt
  };
}

export class ProgressRepository {
  constructor() {
    this.legacyStorageKey = APP_CONFIG.storageKey || 'modena_lines_v3_state';
    this._pendingStates = {};
    this._pendingRemoteState = null;
    this._cloudDebounceTimer = null;
    this._unsubscribeSnapshot = null;
    this._activeListenerUid = null;

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => this.flushSave());
      window.addEventListener('pagehide', () => this.flushSave());
    }
  }

  /**
   * Deterministically returns the localStorage key for the given user context.
   * @param {Object|null} user
   * @returns {string}
   */
  getStorageKey(user = null) {
    if (user && user.uid) {
      return `modena_lines_v3_state_${user.uid}`;
    }
    return 'modena_lines_v3_state_guest';
  }

  /**
   * Reads repertoire progress for the given user (or guest).
   * Reconciles remote Firestore state with local partition cache.
   *
   * @param {Object|null} user Firebase User object or null
   * @returns {Promise<Object>} State object
   */
  async loadProgress(user = null) {
    const localData = this.loadFromLocalStorage(user);

    if (user && user.uid && db) {
      try {
        const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const cloudData = docSnap.data();
          const reconciled = reconcileProgressStates(localData, cloudData);
          this.saveToLocalStorage(reconciled, user);
          return reconciled;
        } else {
          // New cloud user: check if there is guest local storage data to migrate
          const guestData = this.loadFromLocalStorage(null);
          const candidateData = Object.keys(localData.lineStats || {}).length > 0
            ? localData
            : guestData;

          if (candidateData && Object.keys(candidateData.lineStats || {}).length > 0) {
            console.log('[ProgressRepository] Migrating local progress to new Firestore document...');
            await this.saveProgress(candidateData, user, { immediate: true });
            return candidateData;
          }
          return this.getEmptyState();
        }
      } catch (error) {
        console.warn('[ProgressRepository] Failed to load from Firestore, falling back to LocalStorage:', error);
        return localData;
      }
    }

    // Guest User
    return localData;
  }

  /**
   * Persists progress to LocalStorage (synchronously) and Firestore (if authenticated).
   * Debounces non-urgent cloud writes by 500ms; executes immediately if options.immediate === true.
   *
   * @param {Object} state
   * @param {Object|null} user
   * @param {Object} options { immediate: boolean }
   */
  async saveProgress(state, user = null, { immediate = false } = {}) {
    // 1. Immediately persist to partitioned local storage cache
    this.saveToLocalStorage(state, user);

    if (!user || !user.uid || !db) {
      return;
    }

    this._pendingRemoteState = { state, user };

    if (immediate) {
      await this.flushCloudSave();
      return;
    }

    if (this._cloudDebounceTimer) {
      clearTimeout(this._cloudDebounceTimer);
    }

    this._cloudDebounceTimer = setTimeout(() => {
      this.flushCloudSave();
    }, 500);
  }

  /**
   * Flushes any pending debounced cloud write immediately.
   */
  async flushCloudSave() {
    if (this._cloudDebounceTimer) {
      clearTimeout(this._cloudDebounceTimer);
      this._cloudDebounceTimer = null;
    }

    if (!this._pendingRemoteState) return;

    const { state, user } = this._pendingRemoteState;
    this._pendingRemoteState = null;

    if (!user || !user.uid || !db) return;

    try {
      const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
      await setDoc(userDocRef, {
        lineStats: state.lineStats || {},
        totalAttempts: state.totalAttempts || 0,
        completedCount: state.completedCount || 0,
        overallAccuracy: state.overallAccuracy !== undefined ? state.overallAccuracy : 100,
        streakData: state.streakData || { currentDailyStreak: 0, lastActiveDate: null },
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      console.warn('[ProgressRepository] Firestore save error, cached locally:', error);
    }
  }

  /**
   * Merges existing guest localStorage progress with user's Cloud Firestore data on login.
   * Guarantees zero progress loss and uploads the reconciled state back to Firestore immediately.
   *
   * @param {Object} user Firebase User
   * @returns {Promise<Object>} Merged State
   */
  async mergeLocalWithCloud(user) {
    const guestData = this.loadFromLocalStorage(null);
    const userLocalData = this.loadFromLocalStorage(user);

    if (!user || !user.uid || !db) {
      return reconcileProgressStates(userLocalData, guestData);
    }

    try {
      const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
      const docSnap = await getDoc(userDocRef);
      const cloudData = docSnap.exists() ? docSnap.data() : { lineStats: {} };

      // Reconcile user local cache, guest local progress, and cloud document
      let mergedState = reconcileProgressStates(userLocalData, guestData);
      mergedState = reconcileProgressStates(mergedState, cloudData);

      // Persist reconciled state immediately to Firestore and user cache
      await this.saveProgress(mergedState, user, { immediate: true });

      // Clear guest storage now that guest progress has successfully migrated into user's account
      this.clearGuestStorage();

      return mergedState;
    } catch (err) {
      console.warn('[ProgressRepository] Progress migration merge error:', err);
      const fallback = reconcileProgressStates(userLocalData, guestData);
      this.saveToLocalStorage(fallback, user);
      return fallback;
    }
  }

  /**
   * Subscribes to real-time Firestore updates for the active authenticated user.
   * Filters out local latency-compensated writes (hasPendingWrites) to avoid echo loops.
   *
   * @param {Object} user Firebase User
   * @param {Function} onRemoteChange Callback invoked with reconciled state
   * @returns {Function} Unsubscribe function
   */
  subscribeToRemoteProgress(user, onRemoteChange) {
    if (!user || !user.uid || !db) {
      this.unsubscribeRemoteProgress();
      return () => {};
    }

    if (this._activeListenerUid === user.uid && this._unsubscribeSnapshot) {
      return this._unsubscribeSnapshot;
    }

    this.unsubscribeRemoteProgress();
    this._activeListenerUid = user.uid;

    try {
      const userDocRef = doc(db, 'users', user.uid, 'progress', 'repertoire');
      this._unsubscribeSnapshot = onSnapshot(
        userDocRef,
        { includeMetadataChanges: true },
        (docSnap) => {
          // If this snapshot was triggered by our own pending local write, skip to avoid echo resets
          if (docSnap.metadata && docSnap.metadata.hasPendingWrites) {
            return;
          }

          if (docSnap.exists()) {
            const remoteData = docSnap.data();
            const currentLocal = this.loadFromLocalStorage(user);
            const reconciled = reconcileProgressStates(currentLocal, remoteData);
            this.saveToLocalStorage(reconciled, user);

            if (typeof onRemoteChange === 'function') {
              onRemoteChange(reconciled);
            }
          }
        },
        (error) => {
          console.warn('[ProgressRepository] Remote progress snapshot listener error:', error);
        }
      );
    } catch (err) {
      console.warn('[ProgressRepository] Failed to attach remote progress listener:', err);
    }

    return () => this.unsubscribeRemoteProgress();
  }

  /**
   * Unsubscribes from the active Firestore progress listener.
   */
  unsubscribeRemoteProgress() {
    if (this._unsubscribeSnapshot) {
      try {
        this._unsubscribeSnapshot();
      } catch (e) {}
      this._unsubscribeSnapshot = null;
    }
    this._activeListenerUid = null;
  }

  /**
   * Loads progress state from partitioned LocalStorage with backward-compatible legacy fallback.
   * @param {Object|null} user
   * @returns {Object}
   */
  loadFromLocalStorage(user = null) {
    const key = this.getStorageKey(user);

    if (this._pendingStates[key]) {
      return this._pendingStates[key];
    }

    try {
      if (typeof localStorage === 'undefined') {
        return this.getEmptyState();
      }

      let raw = localStorage.getItem(key);

      // Backward-compatibility: If partitioned key does not exist yet, check legacy storage key
      if (!raw) {
        const legacyRaw = localStorage.getItem(this.legacyStorageKey);
        if (legacyRaw) {
          raw = legacyRaw;
          // Seed the partitioned key so future reads hit the partition directly
          localStorage.setItem(key, legacyRaw);
        }
      }

      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && parsed.lineStats) {
          if (!parsed.streakData) {
            parsed.streakData = { currentDailyStreak: 0, lastActiveDate: null };
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[ProgressRepository] LocalStorage read warning:', e);
    }

    return this.getEmptyState();
  }

  /**
   * Persists progress state into partitioned LocalStorage and updates legacy mirror.
   * @param {Object} state
   * @param {Object|null} user
   */
  saveToLocalStorage(state, user = null) {
    const key = this.getStorageKey(user);
    this._pendingStates[key] = state;

    try {
      if (typeof localStorage !== 'undefined') {
        const serialized = JSON.stringify(state);
        localStorage.setItem(key, serialized);
        // Also update legacy storageKey to ensure external backward compatibility
        localStorage.setItem(this.legacyStorageKey, serialized);
      }
    } catch (e) {
      console.warn('[ProgressRepository] LocalStorage write warning:', e);
    }
  }

  /**
   * Clears the guest partition after successful migration into an authenticated account.
   */
  clearGuestStorage() {
    delete this._pendingStates['modena_lines_v3_state_guest'];
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('modena_lines_v3_state_guest');
      }
    } catch (e) {}
  }

  /**
   * Flushes any pending local or cloud saves before page unload.
   */
  flushSave() {
    this.flushCloudSave();
  }

  getEmptyState() {
    return {
      lineStats: {},
      totalAttempts: 0,
      completedCount: 0,
      overallAccuracy: 100,
      streakData: {
        currentDailyStreak: 0,
        lastActiveDate: null
      },
      updatedAt: null
    };
  }
}

export const progressRepository = new ProgressRepository();
