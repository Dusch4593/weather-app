import React from 'react';

export default class CurrentWeather extends React.Component {
  render() {
    const {
      city,
      temp,
      hiTemp,
      lowTemp,
      description,
      icon
    } = this.props;
    return (
      <div className="currentWeatherCard">
        <div className="city">
          <h3>{city}</h3>
        </div>
        <div className="currentTemp">
          <h4>{temp}</h4>
        </div>
      </div>
    )
  }
}
