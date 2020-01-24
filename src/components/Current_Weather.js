import React from 'react';

export default class CurrentWeather extends React.Component {
  render() {
    const {city,} = this.props;
    return (
      <div className="currentWeatherCard">
        <div className="city">
          <h3>{city}</h3>
        </div>
      </div>
    )
  }
}
