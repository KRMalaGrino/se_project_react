import { Link } from "react-router-dom";
import { useContext } from "react";

import logo from "../../images/wtwr-logo.png"; // WTWR logo
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"; // Toggle Switch
import CurrentUserContext from "../../contexts/CurrentUserContext"; // Current User Context

// Add Clothes Button & Header return
const Header = ({ onAddClick, weatherData, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const userName = "Ryan Malagrino"; // UserName
  // Current Date
  const currentDate = () =>
    new Date().toLocaleString("default", { month: "long", day: "numeric" });

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          className="header__avatar"
          src={currentUser.avatar}
          alt={`${currentUser.name}'s avatar`}
        />
      );
    }
    const firstLetter = currentUser?.name?.charAt(0).toUpperCase() || "?";
    return <div className="header__avatar-fallback">{firstLetter}</div>;
  };

  return (
    <header className="header">
      <div className="header__wrapper-left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate()} {weatherData?.city || ""}
        </p>
      </div>
      <div className="header__wrapper-right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              onClick={onAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__username">
              {currentUser.name}
            </Link>
            <Link to="/profile">{renderAvatar()}</Link>
          </>
        ) : (
          <>
            <Link to="/signin" className="header__auth-link">
              Sign In
            </Link>
            <Link to="/signup" className="header__auth-link">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
