import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

export const createList = (owner, list, listId) => ({
	type: types.listCreate,
	payload: {
		owner,
		listId,
		lists: {
			...list,
		},
	},
});

export const startCreateList = (name) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		const newList = {
			name: name,
			// id: '',
			movies: [],
		};

		await addDoc(collection(db, uid), newList);
		dispatch(createList(uid, newList, 'abc'));
	};
};

export const addMovie = (id, movie) => ({
	type: types.movieAdd,
	payload: {
		id,
		movie,
	},
});

export const startAddMovie = (movie, listId) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		const docRef = doc(db, uid, listId);
		const querySnapshot = await getDoc(docRef);
		const mainDoc = querySnapshot.data();
		mainDoc.movies.push(movie);
		await setDoc(docRef, mainDoc);
		dispatch(addMovie(listId, movie));
	};
};
