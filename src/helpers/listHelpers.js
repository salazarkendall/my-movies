import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const loadUserLists = async (uid) => {
	const myLists = [];

	const querySnapshot = await getDocs(collection(db, uid));
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		myLists.push(data.name);
	});

	return new Promise((resolve, reject) => {
		if (myLists) {
			resolve(myLists);
		} else {
			reject('No lists');
		}
	});
};
