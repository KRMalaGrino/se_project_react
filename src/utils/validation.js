// React JSX Version -

// import { useState, useEffect } from "react";

// const useFormValidation = (initialValues = {}, validate) => {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);

//   useEffect(() => {
//     const hasErrors = Object.values(errors).some(Boolean);
//     const allFieldsFilled = Object.values(values).every((val) => val !== "");
//     setIsValid(!hasErrors && allFieldsFilled);
//   }, [errors, values]);

//   const handleChange = (e) => {
//     const { name, value, validity, validationMessage } = e.target;

//     setValues((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({
//       ...prev,
//       [name]: validity.valid ? "" : validationMessage,
//     }));
//   };

//   const resetForm = () => {
//     setValues(initialValues);
//     setErrors({});
//     setIsValid(false);
//   };

//   return { values, errors, isValid, handleChange, resetForm };
// };

// export default useFormValidation;
