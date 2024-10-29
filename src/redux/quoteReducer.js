// redux/quoteReducer.js
const initialState = {
	text: '',
	author: '',
};

const quoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_QUOTE':
			return {
				...state,
				text: action.payload.content,
				author: action.payload.author,
			};
		default:
			return state;
	}
};

// Action creator
export const setQuote = (quote) => ({
	type: 'SET_QUOTE',
	payload: quote,
});

export default quoteReducer;
