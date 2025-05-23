// React JSX Version -

import { useState, useEffect } from "react";

const useFormValidation = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const hasErrors = Object.values(errors).some(Boolean);
    const allFieldsFilled = Object.values(values).every((val) => val !== "");
    setIsValid(!hasErrors && allFieldsFilled);
  }, [errors, values]);

  const handleChange = (e) => {
    const { name, value, validity, validationMessage } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validity.valid ? "" : validationMessage,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsValid(false);
  };

  return { values, errors, isValid, handleChange, resetForm };
};

export default useFormValidation;

// Vanilla JS Version -

// const settings = {
//   formSelector: ".modal-with-form__form",
//   inputSelector: ".modal-with-form__input",
//   inputRadioSelector: ".modal-with-form__radio-input",
//   submitButtonSelector: ".modal-with-form__add-garment-btn",
//   inactiveButtonClass: ".modal-with-form__add-garment-btn_disabled",
//   inputErrorClass: ".modal-with-form__input_type_error",
//   errorClass: ".modal-with-form_error_visible",
// };

// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   if (!errorElement) return;
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
//   inputElement.classList.add(config.inputErrorClass);
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   if (!errorElement) return;
//   errorElement.textContent = "";
//   errorElement.classList.remove(config.errorClass);
//   inputElement.classList.remove(config.inputErrorClass);
// };

// const checkInputValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(
//       formElement,
//       inputElement,
//       inputElement.validationMessage,
//       config
//     );
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, config) => {
//   if (hasInvalidInput(inputList)) {
//     disableButton(buttonElement, config);
//   } else {
//     enableButton(buttonElement, config);
//   }
// };

// const enableButton = (buttonElement, config) => {
//   buttonElement.classList.remove(config.inactiveButtonClass);
//   buttonElement.disabled = false;
// };

// const disableButton = (buttonElement, config) => {
//   buttonElement.classList.add(config.inactiveButtonClass);
//   buttonElement.disabled = true;
// };

// const resetValidation = (formElement, inputList, config) => {
//   inputList.forEach((input) => {
//     hideInputError(formElement, input, config);
//   });
// };

// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(config.inputSelector)
//   );
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, config);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement, config);
//       toggleButtonState(inputList, buttonElement, config);
//     });
//   });
// };

// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, config);
//   });
// };

// export { enableValidation, resetValidation, disableButton, settings };
