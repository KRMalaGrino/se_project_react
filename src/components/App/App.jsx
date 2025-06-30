// react imports
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// utils imports
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";

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
import LogOutModal from "../LogOutModal/LogOutModal.jsx";
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
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerError, setRegisterError] = useState("");

  // imported use states
  const navigate = useNavigate();
  const location = useLocation();

  // toggle switch context F to C
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // open Register Modal
  const openRegisterModal = () => {
    setActiveModal("register");
  };

  // open Login Modal
  const openLoginModal = () => {
    setActiveModal("login");
  };

  // open Logout Modal
  const openLogoutModal = () => {
    setActiveModal("logout");
  };

  // open edit profile modal
  const openEditProfileModal = () => {
    setActiveModal("edit-profile");
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
    const token = auth.getToken();
    return api
      .addNewClothingItem(name, imageUrl, weather, token)
      .then((newItem) => {
        // add new clothing item
        setClothingItems((prevItems) => [newItem.data, ...prevItems]);
        // close active modal
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to add new clothing item", err);
      });
  };

  // Click delete item button
  const handleDeleteItem = (_id) => {
    const token = auth.getToken();
    api
      .deleteClothingItem(_id, token)
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
  const handleRegistration = ({ email, password, name, avatarUrl }) => {
    setRegisterError("");
    auth
      .signup(email, password, name, avatarUrl)
      .then(() => {
        // closeActiveModal();
        // navigate("/signin");
        return handleLogin({ email, password });
      })
      .catch((err) => {
        if (err.status === 409) {
          setRegisterError("User with this email already exists.");
        } else {
          setRegisterError("Registration failed. Please try again.");
        }
      });
  };

  // handle login
  const handleLogin = ({ email, password }) => {
    auth
      .signin(email, password)
      .then((loginData) => {
        localStorage.setItem("jwt", loginData.token);
        setIsLoggedIn(true);
        closeActiveModal();
        return auth.checkTokenValidity(loginData.token);
      })
      .then((user) => {
        setUserData({
          _id: user._id,
          username: user.name,
          email: user.email,
          avatar: user.avatar,
        });
        navigate("/profile");
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserData({ username: "", email: "" });
    setClothingItems([]);
    closeActiveModal("logout");
    navigate("/");
  };

  // edit profile
  const handleEditProfileSubmit = ({ name, avatar }) => {
    const token = auth.getToken();
    auth
      .editProfile(token, name, avatar)
      .then((updatedUser) => {
        setUserData((prevUser) => ({
          ...prevUser,
          username: updatedUser.name,
          avatar: updatedUser.avatar,
        }));
        closeActiveModal();
      })
      .catch(console.error);
  };

  // card likes and dislikes
  const handleCardLike = ({ _id, isLiked }) => {
    const token = auth.getToken();
    // check if this card is not currently liked
    !isLiked
      ? api
          .addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
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
    const token = auth.getToken();
    api
      .getClothingItems(token)
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  // use effect for checking if user is logged in
  useEffect(() => {
    const token = auth.getToken();
    if (token) {
      auth
        .checkTokenValidity(token)
        .then((user) => {
          setIsLoggedIn(true);
          setUserData({
            _id: user._id,
            username: user.name,
            email: user.email,
            avatar: user.avatar,
          });
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
              onLoginClick={openLoginModal}
              onRegisterClick={openRegisterModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
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
                      openEditProfileClick={openEditProfileModal}
                      openLogoutModal={openLogoutModal}
                      onCardLike={handleCardLike}
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
              handleCloseClick={() => {
                closeActiveModal();
                setRegisterError("");
              }}
              error={registerError}
              onSwapToLogin={() => {
                setActiveModal("login");
              }}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              handleCloseClick={closeActiveModal}
              handleLogin={handleLogin}
              onSwapToRegister={() => {
                setActiveModal("register");
              }}
            />
            <LogOutModal
              isOpen={activeModal === "logout"}
              handleLogout={handleLogout}
              handleCloseClick={closeActiveModal}
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
