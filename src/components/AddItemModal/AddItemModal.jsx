import { useState } from "react";

// import useFormValidation from "../../utils/validation.js";

import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const AddItemModal = ({ handleCloseClick, isOpen, onAddItemModalSubmit }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = () => {
    e.preventDefault();
    // add new clothing item submission
    onAddItemModalSubmit({ name, imageUrl, weather });
    // empty the inputs
    setName("");
    setImageUrl("");
    setWeather("");
  };

  return (
    <ModalWithForm
      titleText="New Garment"
      buttonText="Add Garment"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal-with-form__label" htmlFor="Name">
        {" "}
        Name
        <input
          className="modal-with-form__input"
          type="text"
          id="Name"
          name="Name"
          placeholder="Name"
          minLength="2"
          maxLength="200"
          required
          onChange={handleNameChange}
          value={name}
        />
        <span className="modal-with-form__error" id="addItem-text-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="Image-Url">
        {" "}
        Image
        <input
          className="modal-with-form__input"
          type="url"
          id="Image-Url"
          name="Image-Url"
          placeholder="Image URL"
          required
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
        <span className="modal-with-form__error" id="addItem-url-error">
          Please enter a URL.
        </span>
      </label>
      <fieldset className="modal-with-form__fieldset">
        <legend className="modal-with-form__legend">
          Select the weather type:
        </legend>
        <label className="modal-with-form__radio-label" htmlFor="radio-hot">
          <input
            className="modal-with-form__radio-input"
            type="radio"
            id="radio-hot"
            name="weather"
            onChange={handleWeatherChange}
            value="hot"
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label className="modal-with-form__radio-label" htmlFor="radio-warm">
          <input
            className="modal-with-form__radio-input"
            type="radio"
            id="radio-warm"
            name="weather"
            onChange={handleWeatherChange}
            value="warm"
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label className="modal-with-form__radio-label" htmlFor="radio-cold">
          <input
            className="modal-with-form__radio-input"
            type="radio"
            id="radio-cold"
            name="weather"
            onChange={handleWeatherChange}
            value="cold"
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
