import { useContext } from "react";

import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

const Main = ({ weatherData, onCardClick, clothingItems, onCardLike }) => {
  // Context
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData?.temp?.[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((filteredItem) => {
              const isLiked = filteredItem.likes.includes(currentUser._id);

              return (
                <ItemCard
                  key={filteredItem._id}
                  item={filteredItem}
                  onCardClick={onCardClick}
                  onCardLike={() =>
                    onCardLike({ _id: filteredItem._id, isLiked })
                  }
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
