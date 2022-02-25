import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCYmLBcIMRmeCBbPyaXqvYOjhZR5h6vvDY',
	authDomain: 'sql-demos-1d750.firebaseapp.com',
	projectId: 'sql-demos-1d750',
	storageBucket: 'sql-demos-1d750.appspot.com',
	messagingSenderId: '662749292633',
	appId: '1:662749292633:web:b1abeeb863eef4e8382948',
	//tuinformación de tu app en firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider };
