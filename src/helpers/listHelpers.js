import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const loadUserLists = async (uid) => {
	const myLists = [];

	const querySnapshot = await getDocs(collection(db, uid));
	querySnapshot.forEach((doc) => {
		const data = doc.data();

		const listData = {
			id: doc.id,
			name: data.name,
		};

		myLists.push(listData);
	});

	return new Promise((resolve, reject) => {
		if (myLists) {
			resolve(myLists);
		} else {
			reject('No lists');
		}
	});
};

export const getMovieDocument = async (uid, listId) => {
	
};
