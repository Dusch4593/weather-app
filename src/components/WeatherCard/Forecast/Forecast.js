import React from 'react';
import kelvinToFahrenheit from '../../../kelvinToFahrenheit.js';
import getDayOfWeek from '../../../getDayOfWeek.js';
import classes from './Forecast.module.css';




export default class Forecast extends React.Component {
  render() {
    let {data} = this.props;
    if(Object.entries(data).length === 0 || data === undefined) {
      return (
        <>
          <p>Forcast for search query not found.</p>
        </>
      );
    }

    let city = data.city

    const forecastDayCards = data.forecast.map(item => (
      <div key={item.dt_txt} className={classes.card}>
        <div>
          <strong>{getDayOfWeek(item.dt_txt)}</strong>
        </div>
        <div>
          {kelvinToFahrenheit(item.main.temp).toFixed(1)}&#730;
        </div>
        <img alt="weather_icon" src={`http://openweathermap.org/img/wn/` + item.weather[0].icon + ".png"}/>
        <div>
          {item.weather[0].description}
        </div>
        <div>
          <strong>{kelvinToFahrenheit(item.main.temp_max).toFixed(1)}&#730; </strong> | {kelvinToFahrenheit(item.main.temp_min).toFixed(1)}&#730;
        </div>
      </div>

    ));

    return (
      <div className={classes.forecastWrapper}>
        <div>
          <strong>5-Day Forecast for {city}</strong>
        </div>
        <div className={classes.dayCards}>
          {forecastDayCards}
        </div>
      </div>
    )
  }
}
