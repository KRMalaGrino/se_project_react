import logo from "../../images/wtwr-logo.png"; // WTWR logo
import avatar from "../../images/avatar.jpg"; // Avatar

const userName = "Ryan Joseph Malagrino"; // UserName

// Current Date
const getCurrentDate = () =>
  new Date().toLocaleString("default", { month: "long", day: "numeric" });
// Current Location
const getCurrentLocation = () => {}; // ----- See section 5 -----

// Add Clothes Button & Header return
const Header = ({ onAddClothes }) => {
  return (
    <header className="header">
      <div className="header__wrapper-left">
        <img className="header__logo" src={logo} alt="logo" />
        <p className="header__date-and-location">
          {getCurrentDate()} {getCurrentLocation()} ***See Section 5***
        </p>
      </div>
      <div className="header__wrapper-right">
        <button className="header__add-clothes-btn" onClick={onAddClothes}>
          + Add Clothes
        </button>
        <p className="header__username">{userName}</p>
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
