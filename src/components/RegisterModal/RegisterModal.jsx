import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const RegisterModal = ({ handleCloseClick, isOpen, handleRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrl = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle register submission
    handleRegistration({ email, password, name, avatarUrl });
    // empty the inputs
    setEmail("");
    setPassword("");
    setName("");
    setAvatarUrl("");
  };

  return (
    <ModalWithForm
      titleText="Sign up"
      buttonText="Next"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal-with-form__label" htmlFor="email">
        {" "}
        Email*
        <input
          className="modal-with-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="200"
          required
          onChange={handleEmail}
          value={email}
        />
        <span className="modal-with-form__error" id="register-email-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="password">
        {" "}
        Password*
        <input
          className="modal-with-form__input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength="8"
          required
          onChange={handlePassword}
          value={password}
        />
        <span className="modal-with-form__error" id="register-password-error">
          Please enter a valid password.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="name">
        {" "}
        Name
        <input
          className="modal-with-form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={handleName}
          value={name}
        />
        <span className="modal-with-form__error" id="register-name-error">
          Please enter a valid name.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="avatarUrl">
        {" "}
        Avatar URL
        <input
          className="modal-with-form__input"
          type="url"
          id="avatarUrl"
          name="avatarUrl"
          placeholder="Avatar Url"
          required
          onChange={handleAvatarUrl}
          value={avatarUrl}
        />
        <span className="modal-with-form__error" id="register-avatar-url-error">
          Please enter a valid URL.
        </span>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
