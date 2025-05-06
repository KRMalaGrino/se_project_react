const ItemModal = ({ activeModal, card, handleCloseClick }) => {
  return (
    <div
      className={`modal ${activeModal === "card-preview" && "modal_opened"}`}
    >
      <div className="modal__container modal__container_type_card-preview">
        <img className="modal__image" src={card.link} alt="Shirt" />
        <div className="modal__text-wrapper">
          <p className="modal__title_type_card-preview">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default ItemModal;
