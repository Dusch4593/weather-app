import React from 'react';
import kelvinToFahrenheit from '../../../kelvinToFahrenheit.js';
import classes from './Forecast.module.css';




export default class Forecast extends React.Component {
  render() {
    let {data} = this.props;
    if(!data.city) return null;
    let city = data.city;

    const forecastDayCards = data.forecast.map(item => (
      <div key={item.dt_txt} className={classes.card}>
        <div>
          {getDayOfWeek(item.dt_txt)}
        </div>
        <div>
          {kelvinToFahrenheit(item.main.temp).toFixed(1)}
        </div>
        <img alt="weather_icon" src={`http://openweathermap.org/img/wn/` + item.weather[0].icon + ".png"}/>
        <div>
          H: {kelvinToFahrenheit(item.main.temp_max).toFixed(1)} | L: {kelvinToFahrenheit(item.main.temp_min).toFixed(1)}
        </div>
      </div>

  ));
    console.log(data.forecast);
    console.log(forecastDayCards)

    function getDayOfWeek(date) {
      let day = '';
      let dayIndex = new Date(date).getDay();
      switch(dayIndex) {
        case 0:
          day += "Sunday";
          break;
        case 1:
          day += "Monday";
          break;
        case 2:
          day += "Tuesday";
          break;
        case 3:
          day += "Wednesday";
          break;
        case 4:
          day += "Thursday";
          break;
        case 5:
          day += "Friday";
          break;
        case 6:
          day += "Saturday";
          break;
        default:
          break;
      }
      return day;
    }




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
