import {
  ServiceAccount,
  initializeApp,
  cert,
  getApps,
} from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '').replace(
    /\\n/g,
    '\n'
  ),
};

const app =
  getApps()[0] ||
  initializeApp({
    credential: cert(serviceAccount),
  });

export const auth = getAuth(app);
export const db = getFirestore(app);
