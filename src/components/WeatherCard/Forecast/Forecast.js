import React from 'react';
import kelvinToFahrenheit from '../../../kelvinToFahrenheit.js';
import classes from './Forecast.module.css';

export default class Forecast extends React.Component {

  render() {
    let {data, city} = this.props;
    if(!data.city) return null;
    let dates = [];
    data.forecast.forEach(date => {

      dates.push(getDayOfWeek(date.dt_txt) + " ");
    });

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
      }
      return day;
    }




    return (
      <div className={classes.forecastCard}>
        <div>
          5-Day Forecast for {city}
        </div>
        <div>
        {dates}
        </div>
      </div>
    )
  }
}
