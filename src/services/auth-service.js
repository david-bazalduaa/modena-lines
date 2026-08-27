/* ============================================================
   AUTHENTICATION SERVICE LAYER (GOOGLE + EMAIL/PASSWORD)
   ============================================================ */

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase.js';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.authListeners = [];
    this.isInitialized = false;

    if (auth) {
      try {
        onAuthStateChanged(auth, (user) => {
          this.currentUser = user;
          this.isInitialized = true;
          this.notifyListeners(user);
        });
      } catch (err) {
        console.warn('[AuthService] Failed to bind auth state listener, defaulting to Guest Mode:', err);
        this.isInitialized = true;
      }
    } else {
      this.isInitialized = true;
    }
  }

  /**
   * Subscribe to authentication state changes.
   * @param {Function} callback (user) => void
   * @returns {Function} unsubscribe function
   */
  onAuthStateChanged(callback) {
    if (typeof callback === 'function') {
      this.authListeners.push(callback);
      if (this.isInitialized) {
        try {
          callback(this.currentUser);
        } catch (err) {
          console.error('[AuthService] Callback invocation error:', err);
        }
      }
    }
    return () => {
      this.authListeners = this.authListeners.filter(fn => fn !== callback);
    };
  }

  notifyListeners(user) {
    this.authListeners.forEach(fn => {
      try {
        fn(user);
      } catch (err) {
        console.error('[AuthService] Listener notification error:', err);
      }
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return Boolean(this.currentUser);
  }

  /**
   * Sign in using Google OAuth Popup Provider.
   */
  async loginWithGoogle() {
    if (!auth) {
      throw new Error('Firebase Authentication is not configured. Please add your credentials in .env');
    }
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      throw new Error(this.getReadableErrorMessage(error));
    }
  }

  /**
   * Register a new account with email and password.
   */
  async registerWithEmail(email, password, displayName = '') {
    if (!auth) {
      throw new Error('Firebase Authentication is not configured. Please add your credentials in .env');
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password);
      if (displayName && displayName.trim()) {
        await updateProfile(result.user, { displayName: displayName.trim() });
      }
      return result.user;
    } catch (error) {
      throw new Error(this.getReadableErrorMessage(error));
    }
  }

  /**
   * Log in with existing email and password.
   */
  async loginWithEmail(email, password) {
    if (!auth) {
      throw new Error('Firebase Authentication is not configured. Please add your credentials in .env');
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password);
      return result.user;
    } catch (error) {
      throw new Error(this.getReadableErrorMessage(error));
    }
  }

  /**
   * Sign out the active user session.
   */
  async logout() {
    if (!auth) {
      this.currentUser = null;
      this.notifyListeners(null);
      return;
    }
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(this.getReadableErrorMessage(error));
    }
  }

  /**
   * Translates Firebase Auth error codes to user-friendly messages.
   */
  getReadableErrorMessage(error) {
    if (!error) return 'An unexpected error occurred.';
    const code = error.code || '';
    switch (code) {
      case 'auth/invalid-email':
        return 'The email address format is invalid.';
      case 'auth/user-disabled':
        return 'This user account has been disabled.';
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
        return 'Invalid email or password. Please verify and try again.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email address.';
      case 'auth/weak-password':
        return 'The password is too weak. Please use at least 6 characters.';
      case 'auth/popup-closed-by-user':
        return 'Google Sign-In popup was closed before completing.';
      case 'auth/popup-blocked':
        return 'Sign-In popup was blocked by browser. Please allow popups for this site.';
      case 'auth/network-request-failed':
        return 'Network connection failed. Please check your internet connection.';
      default:
        return error.message || 'Authentication failed. Please try again.';
    }
  }
}

export const authService = new AuthService();
