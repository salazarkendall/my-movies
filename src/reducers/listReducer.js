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
			console.log(state.lists);
			return {
				...state,
				lists: [
					state.lists
						.find((list) => list.id === action.payload.id)
						.push(action.payload.movie),
					// ...state.lists,
				],
			};
		default:
			return state;
	}
};
