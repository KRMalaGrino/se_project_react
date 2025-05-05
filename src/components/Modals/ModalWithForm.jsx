const ModalWithForm = () => {
  return (
    <div className="modal modal_type_add-clothes">
      <div className="modal__container">
        <form className="modal-with-form__form">
          <p className="modal-with-form__title">New garment</p>
          <label className="modal-with-form__label-text" htmlFor="Name">
            {" "}
            Name
            <input
              className="modal-with-form__input-text"
              type="text"
              id="Name"
              name="Name"
              placeholder="Name"
              minlength="2"
              maxlength="200"
              required
            />
          </label>
          <label className="modal-with-form__label-text" htmlFor="Image-Url">
            {" "}
            Image
            <input
              className="modal-with-form__input-text"
              type="url"
              id="Image-Url"
              name="Image-Url"
              placeholder="Image Url"
              required
            />
          </label>
          <div className="modal-with-form__radio-btn-wrapper">
            <p className="modal-with-form__radio-btn-title">
              Select the weather type:
            </p>
            <label className="modal-with-form__label-radio" htmlFor="radio-hot">
              <input
                className="modal-with-form__input-radio"
                type="radio"
                id="radio-hot"
                name="radio-hot"
              />
              Hot
            </label>
            <label
              className="modal-with-form__label-radio"
              htmlFor="radio-warm"
            >
              <input
                className="modal-with-form__input-radio"
                type="radio"
                id="radio-warm"
                name="radio-warm"
              />
              Warm
            </label>
            <label
              className="modal-with-form__label-radio"
              htmlFor="radio-cold"
            >
              <input
                className="modal-with-form__input-radio"
                type="radio"
                id="radio-cold"
                name="radio-cold"
              />
              Cold
            </label>
          </div>
          <button className="modal-with-form__btn-add-garment">
            Add garment
          </button>
        </form>
        <button className="modal__close-btn modal__close-btn_type_add-clothes"></button>
      </div>
    </div>
  );
};

export default ModalWithForm;
