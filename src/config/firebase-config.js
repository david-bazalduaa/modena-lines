/* ============================================================
   FIREBASE CONFIGURATION & ENVIRONMENT LOADERS
   ============================================================ */

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
};

export function isFirebaseConfigured() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

  return Boolean(
    apiKey &&
    apiKey.trim() !== '' &&
    apiKey !== 'your-api-key-here' &&
    projectId &&
    projectId.trim() !== '' &&
    projectId !== 'your-project-id'
  );
}
