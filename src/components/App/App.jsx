import { useEffect, useState } from "react";

import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../Modals/ModalWithForm.jsx";
import ItemModal from "../Modals/ItemModal.jsx";

// Handle logic for getting the weather data
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

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
    <>
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
          >
            <label className="modal__label" htmlFor="Name">
              {" "}
              Name
              <input
                className="modal__input"
                type="text"
                id="Name"
                name="Name"
                placeholder="Name"
                minLength="2"
                maxLength="200"
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
              <legend className="modal__legend">
                Select the weather type:
              </legend>
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
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseClick={closeActiveModal}
          ></ItemModal>
        </div>
      </div>
    </>
  );
}

export default App;
