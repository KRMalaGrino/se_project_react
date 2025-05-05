import Sunny from "../../images/Sunny.png";

const getCurrentWeather = () => {
  // Get current weather data from an API
};

const WeatherCard = () => {
  return (
    <section className="weather-card">
      <img className="weather-card__image" src={Sunny} alt="" />
      <h2 className="weather-card__temp">{getCurrentWeather}75 F</h2>
    </section>
  );
};

export default WeatherCard;
