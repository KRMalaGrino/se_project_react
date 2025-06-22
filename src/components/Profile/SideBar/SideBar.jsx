import avatar from "../../../images/avatar.jpg"; // Avatar

const SideBar = () => {
  const userName = "Ryan Malagrino"; // UserName

  return (
    <div className="sideBar">
      <div className="sideBar__wrapper-top">
        <img
          className="sideBar__avatar"
          src={avatar}
          alt={`${userName}'s avatar`}
        />
        <p className="sideBar__username">{userName}</p>
      </div>
      <div className="sideBar__wrapper-bottom">
        <button type="button" className="sideBar__button">
          Change profile data
        </button>
        <button type="button" className="sideBar__button">
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
