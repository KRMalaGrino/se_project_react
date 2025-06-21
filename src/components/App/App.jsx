// react imports
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// utils imports
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import {
  getClothingItems,
  addNewClothingItem,
  deleteClothingItem,
} from "../../utils/api.js";
import * as auth from "../../utils/auth.js";

// context imports
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

// component imports
import Header from "../Header/Header.jsx";
import Profile from "../Profile/Profile.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

// modal component imports
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

function App() {
  // all use states
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
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
    const token = localStorage.getItem("jwt");
    addNewClothingItem(name, imageUrl, weather, token)
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
    const token = localStorage.getItem("jwt");
    deleteClothingItem(_id, token)
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

  // handle register
  const handleRegistration = ({
    email,
    password,
    confirmPassword,
    name,
    avatarUrl,
  }) => {
    if (password === confirmPassword) {
      auth
        .register(email, password, name, avatarUrl)
        .then(() => {
          navigate("/login");
        })
        .catch(console.error);
    }
  };

  // handle login
  const handleLogin = ({ email, password }) => {
    auth
      .login(email, password)
      .then((loginData) => {
        localStorage.setItem("jwt", loginData.token);
        setIsLoggedIn(true);
        closeActiveModal();
        return auth.getUserInfo(loginData.token);
      })
      .then((user) => {
        setUserData({ username: user.name, email: user.email });
        navigate("/profile");
      })
      .catch(console.error);
  };

  // edit profile
  const handleEditProfileSubmit = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    auth
      .editProfile(token, name, avatar)
      .then((updatedUser) => {
        setUserData({ username: updatedUser.name, email: updatedUser.email });
        closeActiveModal();
      })
      .catch(console.error);
  };

  // Escape key close modal
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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

  // use effect for checking if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkTokenValidity(token)
        .then((user) => {
          setIsLoggedIn(true);
          setUserData({ username: user.name, email: user.email });
        })
        .catch((err) => {
          console.error("Token invalid or expired", err);
          setIsLoggedIn(false);
          localStorage.removeItem("jwt");
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser: userData, isLoggedIn }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <div className="app__content">
            <Header
              onAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onAddClick={handleAddClick}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItemModalSubmit={handleAddItemModalSubmit}
              handleCloseClick={closeActiveModal}
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
            <RegisterModal
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
              handleCloseClick={closeActiveModal}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              handleCloseClick={closeActiveModal}
              handleLogin={handleLogin}
            />
            <EditProfileModal
              isOpen={activeModal === "edit-profile"}
              handleCloseClick={closeActiveModal}
              handleEditProfileSubmit={handleEditProfileSubmit}
            />
          </div>
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
