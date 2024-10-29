// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setQuote } from './redux/quoteReducer';
import store from './redux/store'; // Import the store

const App = () => {
	const quote = useSelector((state) => state.quote.text); // access the combined reducer state
	const author = useSelector((state) => state.quote.author); // access the combined reducer state
	const dispatch = useDispatch();

	const fetchQuote = async () => {
		try {
			const response = await axios.get('http://localhost:5000/quote');
			console.log('Response:', response.data); // Log the response data
			const quoteData = response.data;
			dispatch(
				setQuote({
					content: quoteData.content,
					author: quoteData.author,
				}),
			);
			console.log('State after dispatch:', store.getState()); // Log the state after dispatch
		} catch (error) {
			console.error('Error fetching quote:', error.message);
		}
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div id="quote-box">
			<p id="text">{quote}</p>
			<div id="author">{author}</div>
			<button
				id="new-quote"
				onClick={fetchQuote}
			>
				New Quote
			</button>
			<a
				id="tweet-quote"
				href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
					`${quote} - ${author}`,
				)}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				Tweet Quote
			</a>
		</div>
	);
};

export default App;
