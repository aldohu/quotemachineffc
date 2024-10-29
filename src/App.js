// src/App.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setQuote } from './redux/quoteReducer';

const App = () => {
	const quote = useSelector((state) => state.text);
	const author = useSelector((state) => state.author);
	const dispatch = useDispatch();

	const fetchQuote = async () => {
		try {
			const response = await axios.get('https://api.quotable.io/random');
			dispatch(
				setQuote({
					content: response.data.content,
					author: response.data.author,
				}),
			);
		} catch (error) {
			console.error('Error fetching quote:', error);
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
