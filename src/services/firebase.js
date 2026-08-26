/* ============================================================
   FIREBASE MODULAR SDK INITIALIZATION & SERVICE EXPORTS
   ============================================================ */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { firebaseConfig, isFirebaseConfigured } from '../config/firebase-config.js';

let app = null;
let auth = null;
let db = null;
let analytics = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);

    if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
      isSupported().then((supported) => {
        if (supported) {
          analytics = getAnalytics(app);
          console.log('[Firebase Analytics] Initialized with measurementId:', firebaseConfig.measurementId);
        }
      }).catch((e) => {
        console.warn('[Firebase Analytics] Not supported in current environment:', e);
      });
    }

    console.log('[Firebase] Initialized successfully for project:', firebaseConfig.projectId);
  } catch (error) {
    console.warn('[Firebase] Initialization error, falling back to LocalStorage:', error);
  }
} else {
  console.info('[Firebase] Config keys missing or incomplete. Operating in LocalStorage Guest Mode.');
}

export { app, auth, db, analytics };
