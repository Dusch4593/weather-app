import React from 'react';
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast.js";
import fetchForecast from '../fetchForecast';
import fetchCurrentWeather from '../fetchCurrentWeather';


export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
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
      search_query: event.target.value,
    })
  };


  handleClick() {
    const {searchQuery} = this.state;
    if(!searchQuery) return;
    this.setState({loading: true, });
    fetchCurrentWeather(searchQuery)
      .then((currentWeatherData) => {
        this.setState(prevState => ({
          data: {...prevState, currentWeatherData}
        }), () => {
          console.log(this.state.data.currentWeather);
          console.log(this.state.loading);
        })
    });

    fetchForecast(searchQuery)
      .then((forecastData) => {
        this.setState({
          data: Object.assign(this.state.data, {forecast: forecastData}),
          loading: false
        }, () => {
          console.log(this.state.data.forecast);
          console.log(this.state.loading);
        })

    });

  }
  render() {
    const {data} = this.props
    return (
      <div className="weather_section">
        <CurrentWeather
          data={data.currentWeather}
        />
        <Forecast
          data={data.forecast}
        />
      </div>
    )
  }
}
