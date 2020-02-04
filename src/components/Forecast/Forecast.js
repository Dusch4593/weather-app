import React from 'react';
import kelvinToFahrenheit from '../kelvinToFahrenheit.js';

export default class Forecast extends React.Component {

  render() {
    let {data} = this.props;

      let city = data.city
      let dates = [];
      if(data.forecast){
        data.forecast.forEach(date => {
          dates.push(date)
        })
      }





    return (
      <div>
        {city}
        {dates}
      </div>
    )
  }
}
