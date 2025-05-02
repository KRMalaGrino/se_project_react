const getCurrentWeather = () => {
  // Get current weather data from an API
};

const WeatherCard = () => {
  return (
    <div className="WeatherCard">
      <h2 className="WeatherCard__CurrentWeather">{getCurrentWeather}75 F</h2>
    </div>
  );
};

export default WeatherCard;
