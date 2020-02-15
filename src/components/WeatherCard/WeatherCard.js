import React from 'react';
import SearchBar from "./SearchBar/SearchBar"
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast.js";
import fetchForecast from '../../fetchForecast';
import fetchCurrentWeather from '../../fetchCurrentWeather';
import classes from './WeatherCard.module.css';


export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: {
        currentWeather: {},
        forecast: {}
      },
      loading: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value,
    })
  };


  handleClick() {
    const {searchQuery} = this.state;
    if(!searchQuery) return;
    this.setState({loading: true, });
    fetchCurrentWeather(searchQuery)
      .then((currentWeatherData) => {
        console.log(this.state.data)
        this.setState(prevState => ({
          data: {...prevState.data, currentWeather: currentWeatherData}
        }), () => {
          console.log(this.state.data);
          console.log(this.state.loading);
        })
    });

    fetchForecast(searchQuery)
      .then((forecastData) => {
        this.setState(prevState => ({
          data: {...prevState.data, forecast: forecastData},
          loading: false,
        }), () => {
          console.log(this.state.data);
          console.log(this.state.loading);
        })

    });
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="searchBar">
          <SearchBar
            searchQuery = {this.state.searchQuery}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        </div>
        <div className={classes.wrapper}>
          <CurrentWeather
            data={this.state.data.currentWeather}
          />
          <Forecast
            data={this.state.data.forecast}
          />
        </div>
      </div>

    )
  }
}
