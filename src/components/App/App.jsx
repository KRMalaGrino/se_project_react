import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import {
  getClothingItems,
  addNewClothingItem,
  deleteClothingItem,
} from "../../utils/api.js";

import Header from "../Header/Header.jsx";
import Profile from "../Profile/Profile.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal.jsx";

// Handle logic for getting the weather data
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
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

  // Add Clothing Item Modal Submission
  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addNewClothingItem(name, imageUrl, weather)
      .then((newItem) => {
        // add new clothing item
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        // close active modal
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to add new clothing item", err);
      });
  };

  // Click delete item button
  const handleDeleteItem = (_id) => {
    deleteClothingItem(_id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== _id)
        );
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to delete clothing item", err);
      });
  };

  // Click Confirm Delete Modal
  const handleConfirmDelete = (card) => {
    setSelectedCard(card);
    setActiveModal("confirm-delete");
  };

  // use effect for weather coordinates
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // use effect for getting clothing items
  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setClothingItems(data);
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
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onAddClick={handleAddClick}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
          <AddItemModal
            activeModal={activeModal}
            handleCloseClick={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            isOpen={activeModal === "card-preview"}
            card={selectedCard}
            onDeleteClick={handleConfirmDelete}
            handleCloseClick={closeActiveModal}
          />
          <ConfirmDeleteModal
            isOpen={activeModal === "confirm-delete"}
            onDeleteClick={() => handleDeleteItem(selectedCard?._id)}
            handleCloseClick={closeActiveModal}
          />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
