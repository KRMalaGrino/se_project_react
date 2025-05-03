const ModalWithForm = () => {
  return (
    <div className={`modal modal_type_${name}`}>
      <form className="ModalWithForm__Form">
        <h2 className="ModalWithForm__Title">New garment</h2>
        <label className="ModalWithForm__Label" htmlFor="Name">
          <input
            className="ModalWithForm__Input"
            type="text"
            id="Name"
            name="Name"
            placeholder="Name"
            minlength="2"
            maxlength="200"
            required
          />
        </label>
        <label className="ModalWithForm__Label" htmlFor="Image-Url">
          <input
            className="ModalWithForm__Input"
            type="url"
            id="Image-Url"
            name="Image-Url"
            placeholder="Image Url"
            required
          />
        </label>
        <div className="ModalWithForm__RadioBtn-Wrapper">
          <h2 className="ModalWithForm__RadioBtn-Title">
            Select the weather type:
          </h2>
          <label className="ModalWithForm__Label" htmlFor="radio-hot">
            <input
              className="ModalWithForm__Input"
              type="radio"
              id="radio-hot"
              name="radio-hot"
            />
            Hot
          </label>
          <label className="ModalWithForm__Label" htmlFor="radio-warm">
            <input
              className="ModalWithForm__Input"
              type="radio"
              id="radio-warm"
              name="radio-warm"
            />
            Warm
          </label>
          <label className="ModalWithForm__Label" htmlFor="radio-cold">
            <input
              className="ModalWithForm__Input"
              type="radio"
              id="radio-cold"
              name="radio-cold"
            />
            Cold
          </label>
        </div>
        <button className="ModalWithForm__Btn-AddGarment">Add garment</button>
      </form>
      <button className="ModalWithForm__Btn-Close"></button>
    </div>
  );
};

export default ModalWithForm;
