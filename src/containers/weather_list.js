import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
/**
 * Displays the weather list
 */
class WeatherList extends Component {


	convertKelvinToFahrenheit(kelvins) {
		console.log('Kelvins converted to Fahrenheit: ', ((kelvins - 273.15) * 1.8000) + 32.00);
		return (((kelvins - 273.15) * 1.8000) + 32.00);
	}
	/**
	 * Create table rows with the city name. Responsible for rendering
	 * a single row. 
	 * @param {*} cityData Weather data that is being passed in from
	 * 						props
	 */
	renderWeather(cityData) {
		const cityName = cityData.city.name; // city name from search query
		const temps = cityData.list.map(weather => weather.main.temp); // kelvin units
		const pressures = cityData.list.map(weather => weather.main.pressure); // measured in hectopascals
		const humidities = cityData.list.map(weather => weather.main.humidity); 

		return (
			<tr key={cityName}>
				<td>{cityName} </td>
				<td> <Chart data={temps} color="orange" units="K" /> </td>
				<td> <Chart data={pressures} color="green" units="hPa" /> </td>
				<td> <Chart data={humidities} color="orange" units="%" /> </td>
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
						<th>Temperaure (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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