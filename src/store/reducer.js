export const initialState = {
	stage: 'easy',
	dimension: [4, 2],
	tries: 0,
	timer: 0,
	presetWindow: false,
	card_state: Array(8).fill(false),
	card_id: Array(8).fill(0),
};
const reducer = (state, action) => {
	console.log(action.type);
	switch (action.type) {
		case 'SET_STAGE':
			return {
				...state,
				stage: action.item,
			};
		case 'SET_DIMENSION':
			return {
				...state,
				dimension: action.item,
			};
		case 'SET_TRIES':
			return {
				...state,
				tries: action.item,
			};
		case 'SET_TIMER':
			return {
				...state,
				timer: action.item,
			};
		case 'SET_PRESET_WINDOW':
			return {
				...state,
				presetWindow: action.item,
			};
		case 'SET_CARD_STATE':
			return {
				...state,
				card_state: action.item,
			};
		case 'SET_CARD_ID':
			return {
				...state,
				card_id: action.item,
			};
		default: {
			return state;
		}
	}
};

export default reducer;
