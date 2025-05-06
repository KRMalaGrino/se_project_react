import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ weatherData }) => {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0];
  return (
    <section className="weather-card">
      <img
        className="weather-card__image"
        src={weatherOption?.url}
        alt={`${weatherOption?.day ? "day" : "night"} ${
          weatherOption?.condition
        }`}
      />
      <h2 className="weather-card__temp">{weatherData.temp.F} &deg; F</h2>
    </section>
  );
};

export default WeatherCard;
