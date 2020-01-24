import React from 'react';
import CurrentWeather from "./Current_Weather";


export default class WeatherCard extends React.Component {
  render() {
    const {data} = this.props
    return (
      <CurrentWeather
        city={data.currentWeatherData.city}
      />
    )
  }
}
