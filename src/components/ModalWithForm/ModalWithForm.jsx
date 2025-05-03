const ModalWithForm = () => {
  return (
    <div className={`modal modal_type_${name}`}>
      <form className="ModalWithForm__Form">
        <h2 className="ModalWithForm__Title">New garment</h2>
        <label className="ModalWithForm__Label">
          <input className="ModalWithForm__Input">Name</input>
        </label>
        <label className="ModalWithForm__Label">
          <input className="ModalWithForm__Input">Image</input>
        </label>
        <div className="ModalWithForm__RadioBtn-Wrapper">
          <h2 className="ModalWithForm__RadioBtn-Title">
            Select the weather type:
          </h2>
          <label className="ModalWithForm__Label">
            <input className="ModalWithForm__Input">Hot</input>
          </label>
          <label className="ModalWithForm__Label">
            <input className="ModalWithForm__Input">Warm</input>
          </label>
          <label className="ModalWithForm__Label">
            <input className="ModalWithForm__Input">Cold</input>
          </label>
        </div>
        <button className="ModalWithForm__Btn-AddGarment">Add garment</button>
      </form>
      <button className="ModalWithForm__Btn-Close"></button>
    </div>
  );
};

export default ModalWithForm;
