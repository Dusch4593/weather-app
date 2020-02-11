import React from 'react';

export default class SearchBar extends React.Component {
  render(){
    return(
      <div id="search_bar">
        <input id="search_input"
               type="text"
               value={this.props.searchQuery}
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
