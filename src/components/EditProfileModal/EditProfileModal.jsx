import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  handleCloseClick,
  isOpen,
  handleEditProfileSubmit,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfileSubmit({ name, avatar })
      .then(() => {
        setName("");
        setAvatarUrl("");
      })
      .catch((err) => {
        console.error("Failed to update profile", err);
      });
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.username || "");
      setAvatarUrl(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  return (
    <ModalWithForm
      titleText="Change profile data"
      buttonText="Save changes"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal-with-form__label" htmlFor="name">
        {" "}
        Name*
        <input
          className="modal-with-form__input"
          type="name"
          id="name"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="200"
          required
          onChange={handleNameChange}
          value={name}
        />
        <span className="modal-with-form__error" id="editProfile-name-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="avatar">
        {" "}
        Avatar*
        <input
          className="modal-with-form__input"
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Avatar"
          required
          onChange={handleAvatarUrlChange}
          value={avatar}
        />
        <span className="modal-with-form__error" id="editProfile-avatar-error">
          Please enter a valid url.
        </span>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
