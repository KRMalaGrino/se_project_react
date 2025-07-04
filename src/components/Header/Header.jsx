import { Link } from "react-router-dom";
import { useContext } from "react";

import logo from "../../images/wtwr-logo.png"; // WTWR logo
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"; // Toggle Switch
import CurrentUserContext from "../../contexts/CurrentUserContext"; // Current User Context

// Add Clothes Button & Header return
const Header = ({
  onAddClick,
  weatherData,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

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
    const firstLetter = currentUser?.username?.charAt(0).toUpperCase() || "?";
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
              {currentUser.username}
            </Link>
            <Link to="/profile" className="header__avatar-fallback">
              {renderAvatar()}
            </Link>
          </>
        ) : (
          <>
            <button onClick={onLoginClick} className="header__auth-link">
              Sign In
            </button>
            <button onClick={onRegisterClick} className="header__auth-link">
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
