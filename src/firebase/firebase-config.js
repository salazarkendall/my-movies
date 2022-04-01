import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCssDocGaFQOJvjKsgh_gNpTu5thbGkVLg',
	authDomain: 'my-movie-queue.firebaseapp.com',
	projectId: 'my-movie-queue',
	storageBucket: 'my-movie-queue.appspot.com',
	messagingSenderId: '60116961391',
	appId: '1:60116961391:web:04cfbb598e2d200ac8a59a',
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider };
