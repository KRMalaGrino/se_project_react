const ModalWithForm = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <form className="modal__form">
          <p className="modal__title">New garment</p>
          <label className="modal__label" htmlFor="Name">
            {" "}
            Name
            <input
              className="modal__input"
              type="text"
              id="Name"
              name="Name"
              placeholder="Name"
              minlength="2"
              maxlength="200"
              required
            />
          </label>
          <label className="modal__label" htmlFor="Image-Url">
            {" "}
            Image
            <input
              className="modal__input"
              type="url"
              id="Image-Url"
              name="Image-Url"
              placeholder="Image URL"
              required
            />
          </label>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>
            <label className="modal__radio-label" htmlFor="radio-hot">
              <input
                className="modal__radio-input"
                type="radio"
                id="radio-hot"
                name="radio-hot"
              />
              Hot
            </label>
            <label className="modal__radio-label" htmlFor="radio-warm">
              <input
                className="modal__radio-input"
                type="radio"
                id="radio-warm"
                name="radio-warm"
              />
              Warm
            </label>
            <label className="modal__radio-label" htmlFor="radio-cold">
              <input
                className="modal__radio-input"
                type="radio"
                id="radio-cold"
                name="radio-cold"
              />
              Cold
            </label>
          </fieldset>
          <button className="modal__add-garment-btn">Add garment</button>
        </form>
        <button className="modal__close-btn modal__close-btn_type_add-clothes"></button>
      </div>
    </div>
  );
};

export default ModalWithForm;
