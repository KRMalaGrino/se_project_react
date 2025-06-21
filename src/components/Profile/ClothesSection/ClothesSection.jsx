import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

import ItemCard from "../../ItemCard/ItemCard.jsx";

const ClothesSection = ({ onAddClick, onCardClick, clothingItems }) => {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothesSection">
      <div className="clothesSection__text-wrapper">
        <p className="clothesSection__title">Your items</p>
        <button
          className="clothesSection__add-btn"
          type="button"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothesSection__list">
        {userItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} /> // pass onCardClick as prop
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
