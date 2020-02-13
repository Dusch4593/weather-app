import React from 'react';
import classes from './App.css';
import WeatherCard from './WeatherCard/WeatherCard.js';

class App extends React.Component {
  render() {
    return (
      <div className={classes.main_wrapper}>
        <header id="header_text"><strong>Weather App</strong></header>
        <p id="sub_header_text">Powered by Open Weather API</p>
        <WeatherCard className="weatherCard" />
        <footer>Brandon Dusch 2020</footer>
      </div>
    )
  }
}

export default App;
