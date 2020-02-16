const extractData = (response) => {
  if (!response) return {};

  const weatherData = response.results;
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const hiTemp = weatherData.main.temp_max;
  const lowTemp = weatherData.main.temp_min;
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;

  return {
    city,
    temp,
    hiTemp,
    lowTemp,
    description,
    icon
  }
}


export default function fetchCurrentWeather(query) {
  const OPEN_WEATHER_MAP_URL = "http://localhost:3001/currentWeather?q=" + query;
  return fetch(OPEN_WEATHER_MAP_URL)
              .then(res => res.json())
              .then(extractData)
              .then((data) => {return data})
              .catch(console.log)

};
