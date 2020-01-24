import React from 'react';

export default class SearchBar extends React.Component {
  render(){
    return(
      <div id="search_bar">
        <input type="text"
               value={this.props.search_query}
               onChange={this.props.onChange}
               onKeyPress={(event) => {
                 if(event.key === "Enter"){
                   this.props.onClick();
                 }
               }}
               placeholder="Enter city..."
        />

        <button id="current_weather_btn" onClick={this.props.onClick}>Get Weather</button>
      </div>
    )
  }

}
