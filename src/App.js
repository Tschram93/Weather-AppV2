import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');
	const weatherApi = `${process.env.REACT_APP_WEATHER_URL}${location}${process.env.REACT_APP_API_KEY}`;

	const searchLocation = async ( event ) => {
		if (event.key === 'Enter') {
			axios.get(weatherApi)
				.then((response) => {
					setData(response.data);
					console.log(response.data);
			});
			setLocation('');
		}
	};

	return (
		<div className='App'>
			<div className='search'>
				<input
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeholder='Enter Location'
					type='text'
					value={location}
				/>
			</div>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>{data.name}</p>
					</div>
					<div className='temp'>
						{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
					</div>
					<div className='description'>
						{data.weather ? <p>{data.weather.main}</p> : null}
					</div>
				</div>

				{data.name !== undefined && (
					<div className='bottom'>
						<div className='feels'>
							{data.main ? (
								<p className='bold'>{data.main.feels_like.toFixed()}°F</p>
							) : null}
							<p>Feels Like</p>
						</div>
						<div className='humidity'>
							{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
							<p>Humidity</p>
						</div>
						<div className='wind'>
							{data.wind ? (
								<p className='bold'>{data.wind.speed.toFixed()} MPH</p>
							) : null}
							<p>Wind Speed</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
