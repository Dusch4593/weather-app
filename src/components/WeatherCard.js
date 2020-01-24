import React from 'react';
import CurrentWeather from "./Current_Weather";
import Forecast from "./Forecast";

export default class WeatherCard extends React.Component {
  render() {
    const {data} = this.props
    return (
      <CurrentWeather
        city={data.city}
        temp={data.temp}
      />
    )
  }
}
