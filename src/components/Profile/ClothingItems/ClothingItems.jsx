import ItemCard from "../../ItemCard/ItemCard.jsx";

const ClothingItems = ({ onAddClick, onCardClick, clothingItems }) => {
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
      <ul className="clothingItems__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} /> // pass onCardClick as prop
          );
        })}
      </ul>
    </div>
  );
};

export default ClothingItems;
