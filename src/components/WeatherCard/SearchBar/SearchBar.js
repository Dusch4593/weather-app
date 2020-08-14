import React from 'react';

const SearchBar = props => {
    return(
      <div id="search_bar">
        <input id="search_input"
               type="text"
               value={props.searchQuery}
               onChange={props.onChange}
               onKeyPress={(event) => {
                 if(event.key === "Enter"){
                   props.onClick();
                 }
               }}
               placeholder="Enter city..."
        />
        <button id="current_weather_btn" onClick={props.onClick}>Get Weather</button>
      </div>
    )
}

export default SearchBar
