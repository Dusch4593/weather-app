import React from 'react';
import kelvinToFahrenheit from '../../../kelvinToFahrenheit.js'
import classes from './CurrentWeather.module.css';

export default class CurrentWeather extends React.Component {
  render() {
    let {data} = this.props;
    if(!data.temp) return null;

    let city = data.city;
    let description = data.description;
    let temp = kelvinToFahrenheit(data.temp).toFixed(1);
    let hiTemp = kelvinToFahrenheit(data.hiTemp).toFixed(1);
    let lowTemp = kelvinToFahrenheit(data.lowTemp).toFixed(1);
    let iconLink = "http://openweathermap.org/img/wn/" + data.icon + "@2x.png"
    return (
      <div className={classes.currentWeatherCard}>
        <div className="city">
          <strong>{city}</strong>
        </div>
        <div className="temp">
          Current Temp: {temp}&#730;
        </div>
        <div className="hiLowTemps">
          Hi: {hiTemp}&#730; | Low: {lowTemp}&#730;
        </div>
        <div className="weatherIcon">
          <img src={iconLink}/>
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    )

  }
}
