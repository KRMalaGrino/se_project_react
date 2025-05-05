import { useState } from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../Modals/ModalWithForm.jsx";
import ItemModal from "../Modals/ItemModal.jsx";

// import fetchWeatherData from "../../utils/weatherApi.js";

// Global variables
const modals = document.querySelectorAll(".modal_opened");
const activeModal = document.querySelector(".modal_opened");
const modalCloseButtons = document.querySelectorAll(".modal__close-btn");
const modalPreview = document.querySelector(".modal_type_item");
const cardImage = document.querySelector(".card__image");
const modalImage = document.querySelector(".item-modal__image");
const modalTitle = document.querySelector(".item-modal__title");
const modalDescription = document.querySelector(".item-modal__description");
const addClothesButton = document.querySelector(".header__add-clothes-btn");

// Click outside modal to close
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__button-close")
    ) {
      closeModal(modal);
    }
  });
});
// Global handleEscape button
function handleEscape(evt) {
  if (evt.key === "Escape") {
    closeModal(activeModal);
  }
}
// Global open modal
function openModal(modals) {
  modals.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}
// Global close modal
function closeModal(modals) {
  modals.classList.remove("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modals = button.closest(".modal");
    closeModal(modals);
  });
});

// ------------------------ Add Clothes Modal -----------------------------

// addClothesButton.addEventListener("click", () => {
//   openModal(ModalWithForm);
// });

// ----------------------- Card Preview Modal -----------------------------

// cardImage.addEventListener("click", () => {
//   modalImage.src = data.link;
//   modalImage.alt = data.name;
//   modalTitle.textContent = data.name;
//   // modalDescription.textContent = `Weather: ${}`

//   openModal(modalPreview);
// });

// ------------------------------------------------------------------------

// Handle logic for handling Add Clothes Click
const handleAddClothesClick = () => {
  addClothesModalOpen(true);
};

// Handle logic for getting the weather data
function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  // useEffect(() => {
  //   fetchWeatherData().then(setWeather);
  // });

  return (
    <>
      <div className="app">
        <div className="app__content">
          <Header onAddClothes={handleAddClothesClick} />
          <Main weatherData={weatherData} />
          <Footer />
          <ModalWithForm />
          <ItemModal />
        </div>
      </div>
    </>
  );
}

export default App;
