const LogOutModal = ({ handleCloseClick, isOpen, handleLogout }) => {
  return (
    <div className={`logout-modal ${isOpen ? "logout-modal_opened" : ""}`}>
      <div className="logout-modal__container">
        <div className="logout-modal__wrapper">
          <p className="logout-modal__text">
            Are you sure you want to logout ?
          </p>
          <button
            className="logout-modal__confirm-logout-btn"
            type="button"
            onClick={handleLogout}
          >
            Yes, logout
          </button>
          <button
            className="logout-modal__cancel-btn"
            type="button"
            onClick={handleCloseClick}
          >
            No
          </button>
        </div>
        <button
          onClick={handleCloseClick}
          type="button"
          className="logout-modal__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default LogOutModal;
