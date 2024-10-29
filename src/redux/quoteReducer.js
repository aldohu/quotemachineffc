// src/redux/quoteReducer.js

const SET_QUOTE = 'SET_QUOTE';

export const setQuote = (quote) => ({
	type: SET_QUOTE,
	payload: quote,
});

const initialState = {
	text: '',
	author: '',
};

const quoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_QUOTE:
			return {
				...state,
				text: action.payload.content,
				author: action.payload.author,
			};
		default:
			return state;
	}
};

export default quoteReducer;
