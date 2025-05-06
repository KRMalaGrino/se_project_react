import Sunny from "../../images/Sunny.png";

const WeatherCard = ({ weatherData }) => {
  return (
    <section className="weather-card">
      <img className="weather-card__image" src={Sunny} alt="" />
      <h2 className="weather-card__temp">{weatherData.temp.F} &deg; F</h2>
    </section>
  );
};

export default WeatherCard;
