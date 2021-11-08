import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTjEPwPsAGV3IvRlLGmARUV2DD__5tT1w',
  authDomain: 'asobiba-insider.firebaseapp.com',
  projectId: 'asobiba-insider',
  storageBucket: 'asobiba-insider.appspot.com',
  messagingSenderId: '63993230649',
  appId: '1:63993230649:web:10d4fdce1e7a1b27c624e8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
