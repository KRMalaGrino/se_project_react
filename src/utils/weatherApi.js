// import { ApiKey, Coordinates } from "./constants";

// figure function logic for fetching the weather data
function fetchWeatherData() {}

function getWeatherType(temp) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}

export default fetchWeatherData;
