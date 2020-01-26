import React from 'react';
import kelvinToFahrenheit from '../kelvinToFahrenheit.js'

export default class CurrentWeather extends React.Component {
  render() {
    let {
      city,
      temp,
      hiTemp,
      lowTemp,
      description,
      icon
    } = this.props;

    if(temp !== undefined) {
      //temp = ((temp-273.15)* (9/5) + 32).toFixed(2);
      temp = kelvinToFahrenheit(temp).toFixed(2);
      hiTemp = kelvinToFahrenheit(hiTemp).toFixed(2);
      lowTemp = kelvinToFahrenheit(lowTemp).toFixed(2);
      let iconLink = "http://openweathermap.org/img/w/" + icon + ".png"
      return (
        <div className="currentWeatherCard">
          <div className="city">
            {city}
          </div>
          <div className="temp">
            {temp}&#730;
          </div>
          <div className="hiLowTemps">
            High: {hiTemp}&#730; | Low: {lowTemp}&#730;
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
    return (null)
  }
}
