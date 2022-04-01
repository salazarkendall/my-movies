import { addDoc, collection } from 'firebase/firestore';
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
			id: uid,
			movies: ['movie1', 'movie2'],
		};

		await addDoc(collection(db, uid), newList);
		dispatch(createList(uid, newList, 'abc'));
	};
};

export const addMovie = () => {};
