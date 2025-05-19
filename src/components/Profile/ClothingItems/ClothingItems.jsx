import ItemCard from "../../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../../utils/constants.js";

const ClothingItems = ({ onAddClick, onCardClick }) => {
  return (
    <div className="clothingItems">
      <div className="clothingItems__text-wrapper">
        <p className="clothingItems__title">Your items</p>
        <button
          className="clothingItems__add-btn"
          type="button"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} /> // pass onCardClick as prop
          );
        })}
      </ul>
    </div>
  );
};

export default ClothingItems;
