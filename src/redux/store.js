import { createStore } from 'redux';
import quoteReducer from './quoteReducer';

const store = createStore(quoteReducer);

export default store;
