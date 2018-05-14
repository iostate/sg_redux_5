import axios from 'axios';

const API_KEY = 'a2cdb0ee58179a060e6fb23be74ed093';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Make action.type a constant. Keeps the action types consistent
export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Receives the weather from the OpenWeather API
 * @param {string} city 
 */
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);


	return {
		// use const instead of string
		type: FETCH_WEATHER,
		payload: request
	};
}