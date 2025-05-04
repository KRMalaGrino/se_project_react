import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

const getWhatToWear = () => {
  // What to wear function based on current weather
};

const Main = () => {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is `${getWhatToWear}` F / You may want to wear:
        </p>
        <ItemCard />
      </section>
    </main>
  );
};

export default Main;
