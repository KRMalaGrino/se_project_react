import avatar from "../../../images/avatar.jpg"; // Avatar

const SideBar = () => {
  const userName = "Ryan Malagrino"; // UserName

  return (
    <div className="sideBar">
      <img
        className="sideBar__avatar"
        src={avatar}
        alt={`${userName}'s avatar`}
      />
      <p className="sideBar__userName">{userName}</p>
    </div>
  );
};

export default SideBar;
