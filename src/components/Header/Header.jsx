import { Link } from "react-router-dom";

import logo from "../../images/wtwr-logo.png"; // WTWR logo
import avatar from "../../images/avatar.jpg"; // Avatar
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

// Add Clothes Button & Header return
const Header = ({ onAddClick, weatherData }) => {
  const userName = "Ryan Joseph Malagrino"; // UserName
  // Current Date
  const currentDate = () =>
    new Date().toLocaleString("default", { month: "long", day: "numeric" });

  return (
    <header className="header">
      <div className="header__wrapper-left">
        <img className="header__logo" src={logo} alt="logo" />
        <p className="header__date-and-location">
          {currentDate()} {weatherData?.city || ""}
        </p>
      </div>
      <div className="header__wrapper-right">
        <ToggleSwitch />
        <button
          onClick={onAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <Link to="/profile">
          <p className="header__username">{userName}</p>
        </Link>
        <img
          className="header__avatar"
          src={avatar}
          alt={`${userName}'s avatar`}
        />
      </div>
    </header>
  );
};

export default Header;
