import { types } from '../types/types';

const initState = { owner: null, lists: [] };

export const listReducer = (state = initState, action) => {
	switch (action.type) {
		case types.listCreate:
			return {
				...state,
				owner: state.owner == null ? action.payload.owner : state.owner,
				lists: [action.payload.lists, ...state.lists],
			};
		case types.movieAdd:
		// return {
		// 	...state,
		// 	lists:
		// };
		default:
			return state;
	}
};
