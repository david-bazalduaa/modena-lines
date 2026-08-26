/* ============================================================
   FIREBASE MODULAR SDK INITIALIZATION & SERVICE EXPORTS
   ============================================================ */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigured } from '../config/firebase-config.js';

let app = null;
let auth = null;
let db = null;

try {
  if (isFirebaseConfigured()) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('[Firebase] Initialized successfully with project:', firebaseConfig.projectId);
  } else {
    console.info('[Firebase] Config keys not detected. Operating in LocalStorage Guest Mode.');
  }
} catch (error) {
  console.warn('[Firebase] Initialization error, falling back to LocalStorage:', error);
}

export { app, auth, db };
