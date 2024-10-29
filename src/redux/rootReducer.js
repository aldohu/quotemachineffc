// redux/rootReducer.js
import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
	quote: quoteReducer, // you can name this whatever you like
});

export default rootReducer;
