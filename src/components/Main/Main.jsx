import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

const getWhatToWear = () => {
  // What to wear function based on current weather
};

// figure the4 logic for filtering cards and returning it in the component
const Main = ({ weather }) => {
  // const { weatherType } = weather;
  // const filteredCards = createReadStream.filter(
  //   (card) => card.weather === weatherType
  // );

  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is `${getWhatToWear}` F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems.map((item) => {
            return (
              <div className="item" key={item._id}>
                <h2 className="item__text">{item.name}</h2>
                <img className="item__image" src={item.link} alt={item.name} />
              </div>
            );
          })}
        </ul>
        <ItemCard />
      </section>
    </main>
  );
};

export default Main;
