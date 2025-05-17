import { useEffect, useState } from "react";

import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

// Handle logic for getting the weather data
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 0, C: 0 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  // toggle switch context F to C
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // Click Add Clothes
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  // Click Card Preview
  const handleCardClick = (card) => {
    setActiveModal("card-preview");
    setSelectedCard(card);
  };

  // Close modal
  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__content">
          <Header onAddClick={handleAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} onCardClick={handleCardClick} />
          <Footer />
          <ModalWithForm
            titleText="New Garment"
            buttonText="Add Garment"
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            isOpen={activeModal === "add-garment"}
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
              />
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
              />
            </label>
            <fieldset className="modal-with-form__fieldset">
              <legend className="modal-with-form__legend">
                Select the weather type:
              </legend>
              <label
                className="modal-with-form__radio-label"
                htmlFor="radio-hot"
              >
                <input
                  className="modal-with-form__radio-input"
                  type="radio"
                  id="radio-hot"
                  name="weather"
                />
                Hot
              </label>
              <label
                className="modal-with-form__radio-label"
                htmlFor="radio-warm"
              >
                <input
                  className="modal-with-form__radio-input"
                  type="radio"
                  id="radio-warm"
                  name="weather"
                />
                Warm
              </label>
              <label
                className="modal-with-form__radio-label"
                htmlFor="radio-cold"
              >
                <input
                  className="modal-with-form__radio-input"
                  type="radio"
                  id="radio-cold"
                  name="weather"
                />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseClick={closeActiveModal}
          ></ItemModal>
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
