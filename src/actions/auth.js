import { getAuth, signInWithPopup } from 'firebase/auth';
import {
	googleAuthProvider,
	facebookAuthProvider,
} from '../firebase/firebase-config';
import { types } from '../types/types';

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startGoogleLogin = () => {
	return (dispatch) => {
		const auth = getAuth();
		signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
		});
	};
};

export const startFacebookLogin = () => {
	return (dispatch) => {
		const auth = getAuth();
		signInWithPopup(auth, facebookAuthProvider).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
		});
	};
};
