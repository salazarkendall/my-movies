import { types } from '../types/types';

const initState = {};

export const listReducer = (state = initState, action) => {
	switch (action.type) {
		case types.listCreate:
			return {
				...state,
			};

		default:
			break;
	}
};
