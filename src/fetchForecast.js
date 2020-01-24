const extractData = (response) => {
  if (!response) return {};

  const weatherData = response.results;
  // Filter out all the data points in weatherData.list whose dt_txt field reads "XX20-XX-XX 00:00:00" and store in weatherInfo
  // get weather info
  let regex = /00:00:00/g;

  const city = weatherData.city.name;
  const forecast = weatherData.list.filter((dataPoint) => (regex.test(dataPoint.dt_txt)));


  return {
    city,
    forecast
  };
}


export default function fetchForecast(query) {
  const OPEN_WEATHER_MAP_URL = `http://localhost:3001/forecast?q=` + query;
  return fetch(OPEN_WEATHER_MAP_URL)
              .then(res => res.json())
              .then(extractData)
              .then((data) => {console.log(data)})
              .catch(console.log)

};
