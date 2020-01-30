import React from 'react';
import CurrentWeather from "./Current_Weather";
import Forecast from "./Forecast.js";


export default class WeatherCard extends React.Component {
  render() {
    const {data} = this.props

    return (
      <div className="weather_section">
        <CurrentWeather
          data={data.currentWeatherData}
        />
        <Forecast
          data={data.forecastData}
        />
      </div>
    )
  }
}
