import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { loadUserLists } from '../helpers/listHelpers';
import { types } from '../types/types';

export const createList = (owner, list) => ({
	type: types.listCreate,
	payload: {
		owner,
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
		dispatch(createList(uid, newList));
	};
};

// export const getListsFromUser = () => {
// 	return async (dispatch, getState) => {
// 		const uid = getState().auth.uid;
// 		loadUserLists(uid);
// 	};
// };
