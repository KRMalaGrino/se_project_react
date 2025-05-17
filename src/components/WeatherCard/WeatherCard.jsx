import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../utils/constants.js";

const WeatherCard = ({ weatherData }) => {
  // Context
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // filtering to possible weather options
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  // choosing the final weather option or settling for default
  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }
  // rendering the component
  return (
    <section className="weather-card">
      <img
        className="weather-card__image"
        src={weatherOption?.url}
        alt={`${weatherOption?.day ? "day" : "night"} ${
          weatherOption?.condition
        }`}
      />
      <h2 className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
        {currentTemperatureUnit}
      </h2>
    </section>
  );
};

export default WeatherCard;
