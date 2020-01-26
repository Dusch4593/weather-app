import React from 'react';
import CurrentWeather from "./Current_Weather";


export default class WeatherCard extends React.Component {
  render() {
    const {data} = this.props

    return (
      <CurrentWeather
        city={data.currentWeatherData.city}
        temp={data.currentWeatherData.temp}
        hiTemp={data.currentWeatherData.hiTemp}
        lowTemp={data.currentWeatherData.lowTemp}
        description={data.currentWeatherData.description}
        icon={data.currentWeatherData.icon}
      />
    )
  }
}
