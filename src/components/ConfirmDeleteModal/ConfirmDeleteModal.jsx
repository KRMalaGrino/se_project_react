const ConfirmDeleteModal = ({ isOpen, handleCloseClick, onDeleteClick }) => {
  return (
    <div
      className={`confirm-delete-modal ${
        isOpen ? "confirm-delete-modal_opened" : ""
      }`}
    >
      <div className="confirm-delete-modal__container">
        <div className="confirm-delete-modal__wrapper">
          <p className="confirm-delete-modal__text">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <button
            className="confirm-delete-modal__confirm-delete-btn"
            type="button"
            onClick={onDeleteClick}
          >
            Yes, delete item
          </button>
          <button
            className="confirm-delete-modal__cancel-btn"
            type="button"
            onClick={handleCloseClick}
          >
            Cancel
          </button>
        </div>
        <button
          onClick={handleCloseClick}
          type="button"
          className="confirm-delete-modal__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
