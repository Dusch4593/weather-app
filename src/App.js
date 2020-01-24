import React from 'react';
import Search_Bar from './components/Search_Bar';
import './App.css';
import fetchForecast from './fetchForecast';
import fetchCurrentWeather from './fetchCurrentWeather';
import CurrentWeather from './components/Current_Weather.js';
import WeatherCard from './components/WeatherCard.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_query: '',
      data: {
        currentWeatherData: {},
        forecastData: {},
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
  }

  handleClick() {
    const {search_query} = this.state;
    if(!search_query) return;
    this.setState({loading: true, });
    fetchCurrentWeather(search_query)
      .then((currentWeatherData) => {
        this.setState({currentWeatherData,})
        console.log(currentWeatherData)
      })
    fetchForecast(search_query)
      .then((forecastData) => {
        this.setState({forecastData, loading: false})
      })

  }
  render() {

    return (
      <div className="main-wrapper">
        <header id="header_text"><strong>Weather App</strong></header>
        <Search_Bar
          onChange={(event) => this.handleChange(event)}
          search_query={this.state.search_query}
          onClick={() => this.handleClick()}
        />
        <div className="results">
          <WeatherCard data={this.state.data.currentWeatherData} loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}

export default App;
