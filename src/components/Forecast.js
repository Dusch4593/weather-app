import React from 'react';
import kelvinToFahrenheit from '../kelvinToFahrenheit.js';

export default class Forecast extends React.Component {
  render() {
      let {data} = this.props;
      let city = data.city;
      let forecast = data.forecast;
    return (
      <div>
        {city}
        {forecast}
      </div>
    )
  }
}
