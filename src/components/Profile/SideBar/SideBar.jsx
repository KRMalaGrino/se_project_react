import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

const SideBar = ({ openEditProfileClick, openLogoutModal }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt={`${currentUser.name}'s avatar`}
        />
      );
    }
    const firstLetter = currentUser?.username?.charAt(0).toUpperCase() || "?";
    return <div className="sidebar__avatar-fallback">{firstLetter}</div>;
  };

  return (
    <div className="sideBar">
      <div className="sideBar__wrapper-top">
        {renderAvatar()}
        <p className="sideBar__username">{currentUser.username}</p>
      </div>
      <div className="sideBar__wrapper-bottom">
        <button
          onClick={openEditProfileClick}
          type="button"
          className="sideBar__button"
        >
          Change profile data
        </button>
        <button
          onClick={openLogoutModal}
          type="button"
          className="sideBar__button"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
