import logo from "../../images/react.svg"

const getCurrentDate = () => 
    new Date().toLocaleString('default', {month: 'long', day: 'numeric'});

const userName = ;
const avatar = ;

return (
  <header className="Header">
    <img className="Header__Logo" src={logo} alt="Logo" />
    <div className="Header__Date">{getCurrentDate()}</div>
    <div className="Header__Location">See Section 5</div>
    <button className="Header__Add-Clothes-Btn" onClick={}>+ Add Clothes</button>
    <p className="Header__Username"></p>
    <img className="Header__Avatar" src="" alt="" />
  </header>
);

export default Header;
