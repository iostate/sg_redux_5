import React, { Component } from 'react'
import { connect } from 'react-redux';
/**
 * Displays the weather list
 */
class WeatherList extends Component {

	constructor(props) {
		super(props);
		this.convertKelvinToFahrenheit = this.convertKelvinToFahrenheit.bind(this);
	}

	convertKelvinToFahrenheit(kelvins) {
		console.log('Kelvins converted to Fahrenheit: ', ((kelvins - 273.15) * 1.8000) + 32.00);
		return (((kelvins - 273.15) * 1.8000) + 32.00);
	}
	/**
	 * Create table rows with the city name
	 * @param {*} cityData Weather data that is being passed in from
	 * 						props
	 */
	renderWeather(cityData) {
		const cityName = cityData.city.name; // city name from search query
		const firstForecast = cityData.list[0]; // reference to first forecast
		temperatureInKelvins = firstForecast.main.temp; // temperature from first forecast
		const weatherInFahrenheit = () => {
			convertKelvinToFahrenheit(temperatureInKelvins);
		}
		const weather = firstForecast.weather[0].main; // retrieve general weather conditions
		const humidity = firstForecast.main.humidity;
		return (
			<tr>
				<td key={cityName}>{cityName}</td>
				<td key={cityName + 'Temperature'}>
					{/* {this.convertKelvinToFahrenheit(temperatureInKelvins)} */}
					{weatherInFahrenheit}
				</td>
				<td key={cityName + 'Weather'}>{weather}</td>
				<td key={cityName + 'Humidity'}>{`${humidity}%`}</td>
			</tr>
		);
	}

	
	/**
	 * Create a table that will hold the name of the City,
	 * Temperature, Weather, and Humidity
	 */
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperaure</th>
						<th>Weather</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}


// Concise ES6 way of doing mapStateToProps
// when the name of the prop is the same as the argument
function mapStateToProps({weather}) {
	return { weather }; // { weather } == { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);	