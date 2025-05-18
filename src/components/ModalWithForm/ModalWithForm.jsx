const ModalWithForm = ({
  children,
  titleText,
  buttonText,
  handleCloseClick,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal-with-form ${isOpen && "modal-with-form_opened"}`}>
      <div className="modal-with-form__container">
        <p className="modal-with-form__title">{titleText}</p>
        <form onSubmit={onSubmit} className="modal-with-form__form">
          {children}
          <button className="modal-with-form__add-garment-btn">
            {buttonText}
          </button>
        </form>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal-with-form__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default ModalWithForm;
