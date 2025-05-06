const ModalWithForm = ({
  children,
  titleText,
  buttonText,
  activeModal,
  handleCloseClick,
}) => {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__container">
        <p className="modal__title">{titleText}</p>
        <form className="modal__form">
          {children}
          <button className="modal__add-garment-btn">{buttonText}</button>
        </form>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn modal__close-btn_type_add-clothes"
        ></button>
      </div>
    </div>
  );
};

export default ModalWithForm;
