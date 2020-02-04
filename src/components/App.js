import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard.js';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <header id="header_text"><strong>Weather App</strong></header>
        <p id="sub_header_text">Powered by Open Weather API</p>
        <SearchBar
          onChange={this.handleChange}
          search_query={this.state.search_query}
          onClick={this.handleClick}
        />
        <div className="results">
          <WeatherCard data={this.state.data} loading={this.state.loading}/>
        </div>
        <footer>Brandon Dusch 2020</footer>
      </div>
    )
  }
}

export default App;
