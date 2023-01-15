import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { FIREBASE_API_KEY } from '../clientkey';

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: 'webproject-11d2d.firebaseapp.com',
	projectId: 'webproject-11d2d',
	storageBucket: 'webproject-11d2d.appspot.com',
	messagingSenderId: '935325010856',
	appId: '1:935325010856:web:fbc6a945d1b8405a6c2b9d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
