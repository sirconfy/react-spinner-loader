import React, { useState, useEffect } from 'react';
import {ColorRing } from  'react-loader-spinner';
import "./style.css"


const GenerateQuote = () => {
	const [loading, setLoading] = useState(false);
	const [quote, setQuote] = useState({});

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const getRandomQuote = () => {
		setLoading(true);
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setQuote(data);
			});
	};
	return (
		<div className="container">
			{loading ? (
				<div className="loader-container">
				
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
				</div>
			) : (
				<div className="main-content">
					
					<p>
						This is a demo Project to show how Spinner Loader works in react.
					</p>
						<div className="quote-section">
						<blockquote className="quote">{quote.content}</blockquote>
						<span className="author"> By: {quote.author}</span>
					</div>
					<br/>
					<div className="generate">
					
						<button className="btn get-quote" onClick={getRandomQuote}>
							Generate Quote
						</button>
					</div>
					

				
				</div>
			)}



		</div>
	);
};


export default GenerateQuote;




