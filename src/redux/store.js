import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteReducer';
const store = configureStore({ reducer: { quote: quoteReducer } });
export default store;
