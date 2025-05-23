const ItemModal = ({ activeModal, card, onDeleteClick, handleCloseClick }) => {
  return (
    <div
      className={`item-modal ${
        activeModal === "card-preview" && "item-modal_opened"
      }`}
    >
      <div className="item-modal__container">
        {card?.imageUrl && (
          <img
            className="item-modal__image"
            src={card.imageUrl}
            alt={card.name}
          />
        )}
        <div className="item-modal__lower-wrapper">
          <div className="item-modal__text-wrapper">
            <p className="item-modal__title">{card.name}</p>
            <p className="item-modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            className="item-modal__delete-btn"
            type="button"
            onClick={onDeleteClick}
          >
            Delete item
          </button>
        </div>
        <button
          onClick={handleCloseClick}
          type="button"
          className="item-modal__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default ItemModal;
