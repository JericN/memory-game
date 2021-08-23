export const initialState = {
	stage: 'easy',
	dimension: [4, 2],
	count: 8,
	tries: 0,
	timer: 0,
	presetWindow: null,
	playing: true,
	card_state: Array(8).fill(false),
	card_id: getCardList(8),
	card_front_img: null,
	card_back_img: null,
	theme: 'winter',
};
const reducer = (state, action) => {
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
		case 'SET_COUNT':
			return {
				...state,
				count: action.item,
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
		case 'SET_PLAYING':
			return {
				...state,
				playing: action.item,
			};
		case 'SET_CARD_STATE':
			return {
				...state,
				card_state: action.item,
			};
		case 'SET_CARD_ID':
			return {
				...state,
				card_id: getCardList(action.item),
			};
		case 'SET_THEME':
			return {
				...state,
				theme: action.item,
			};
		default: {
			return state;
		}
	}
};

function getCardList(count) {
	let arr = Array(count / 2).fill(1);
	for (let i in arr) {
		do {
			var num = Math.floor(Math.random() * 700 + 100);
		} while (arr.includes(num));
		arr[i] = num;
	}
	arr = [...arr, ...arr];
	arr.sort(() => Math.random() - 0.5);
	return arr;
}

export default reducer;
