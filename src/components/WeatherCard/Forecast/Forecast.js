import React from 'react';
import kelvinToFahrenheit from '../../../kelvinToFahrenheit.js';
import classes from './Forecast.module.css';


const ForecastDayCard = (props) => null;

export default class Forecast extends React.Component {
  render() {
    let {data} = this.props;
    if(!data.city) return null;
    let city = data.city;
    const forecastDayCards = data.forecast.map(weather => <ForecastDayCard key={weather.dt_txt}/>);
    console.log(forecastDayCards);

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
      <div className={classes.forecastCard}>
        <div>
          5-Day Forecast for {city}
        </div>
        <div>
          {forecastDayCards}
        </div>
      </div>
    )
  }
}
