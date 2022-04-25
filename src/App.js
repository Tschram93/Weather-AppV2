import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
	const weatherApi = `${process.env.REACT_APP_WEATHER_URL}=detroit,michigan${process.env.REACT_APP_API_KEY}`;
	console.log(weatherApi);
	return (
		<div className='App'>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>Detroit</p>
					</div>
					<div className='temp'>
						<h1>60℉</h1>
					</div>
					<div className='description'>
						<p>Cloudy</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						<p className='bold'>65℉</p>
						<p>Feels Like</p>
					</div>
					<div className='humidity'>
						<p className='bold'>20%</p>
						<p>Humidity</p>
					</div>
					<div className='wind'>
						<p className='bold'>8 MPH</p>
            <p>Wind Speed</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
