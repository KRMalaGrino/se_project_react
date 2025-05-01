// WTWR Logo
import logo from "../../images/react.svg";
// Current Date
const getCurrentDate = () =>
  new Date().toLocaleString("default", { month: "long", day: "numeric" });
// Current Location
// ---------------- See section 5 ----------------
// User Name & Avatar
const userName = "Ryan Joseph Malagrino";
const avatar =
  "https://i.ytimg.com/vi/zbF3SsoTUvA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC8cp5-bDhUMAEv7i6tBacv9Qp5VQ";
// Add Clothes Button
// Header return
const Header = ({ onAddClothes }) => {
  return (
    <header className="Header">
      <img className="Header__Logo" src={logo} alt="Logo" />
      <div className="Header__Date">{getCurrentDate()}</div>
      <div className="Header__Location">***See Section 5***</div>
      <button className="Header__Add-Clothes-Btn" onClick={onAddClothes}>
        + Add Clothes
      </button>
      <p className="Header__Username">{userName}</p>
      <img
        className="Header__Avatar"
        src={avatar}
        alt={`${userName}'s avatar`}
      />
    </header>
  );
};

export default Header;
