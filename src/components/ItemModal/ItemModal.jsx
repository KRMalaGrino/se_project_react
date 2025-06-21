import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemModal = ({ isOpen, card, onDeleteClick, handleCloseClick }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleDeleteClick = () => {
    onDeleteClick(card);
  };

  const isOwner = card?.owner === currentUser?._id;

  return (
    <div className={`item-modal ${isOpen && "item-modal_opened"}`}>
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
            <p className="item-modal__title">{card?.name || ""}</p>
            <p className="item-modal__weather">
              Weather: {card?.weather || ""}
            </p>
          </div>
          {isOwner && (
            <button
              className="item-modal__delete-btn"
              type="button"
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
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
