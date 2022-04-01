import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
	signInWithPopup,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
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

export const logout = () => ({ type: types.logout });

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

export const startLogout = () => {
	return (dispatch) => {
		const auth = getAuth();
		signOut(auth).then(() => {
			dispatch(logout());
		});
	};
};

export const startRegister = (name, lastname, email, password) => {
	return (dispatch) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password).then(
			async ({ user }) => {
				await updateProfile(user, {
					displayName: `${name} ${lastname}`,
				});
				dispatch(login(user.uid, user.displayName));
			}
		);
	};
};

export const startNormalLogin = (email, password) => {
	return (dispatch) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
		});
	};
};
