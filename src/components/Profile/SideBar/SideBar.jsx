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
        <p className="sideBar__text">{userName}</p>
      </div>
      <div className="sideBar__wrapper-bottom">
        <p className="sideBar__text">Change profile data</p>
        <p className="sideBar__text">Log out</p>
      </div>
    </div>
  );
};

export default SideBar;
