const getCurrentWeather = () => {
  // Get current weather data from an API
};

const WeatherCard = () => {
  return (
    <div className="WeatherCard">
      <h2 className="WeatherCard__CurrentWeather">{getCurrentWeather}</h2>
    </div>
  );
};

export { WeatherCard, getCurrentWeather };
