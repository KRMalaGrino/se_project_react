import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  handleLogin,
  onSwapToRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login submission
    handleLogin({ email, password });
    // empty the inputs
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      titleText="Log in"
      buttonText="Log in"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      toggleText={
        <span>
          <button
            type="button"
            className="modal-with-form__link-btn"
            onClick={onSwapToRegister}
          >
            or Sign Up
          </button>
        </span>
      }
    >
      <label className="modal-with-form__label" htmlFor="email">
        {" "}
        Email
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
        <span className="modal-with-form__error" id="login-email-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="password">
        {" "}
        Password
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
        <span className="modal-with-form__error" id="login-password-error">
          Please enter a valid password.
        </span>
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
