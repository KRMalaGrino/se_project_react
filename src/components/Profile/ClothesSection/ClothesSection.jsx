import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext.jsx";

import ItemCard from "../../ItemCard/ItemCard.jsx";

const ClothesSection = ({
  onAddClick,
  onCardClick,
  clothingItems,
  onCardLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner?.toString() === currentUser._id
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
          const isLiked = item.likes.includes(currentUser._id);

          return (
            <li key={item._id} className="clothesSection__card">
              <ItemCard
                item={item}
                onCardClick={onCardClick}
                onCardLike={() => onCardLike({ _id: item._id, isLiked })}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
