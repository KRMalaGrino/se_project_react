const onClose = () => {};

const ItemModal = () => {
  return (
    <div className={`Modal Modal_Type_${name}`}>
      <img className="ItemModal__Image" />
      <div className="ItemModal__TextWrapper"></div>
      <h2 className="ItemModal__Title"></h2>
      <p className="ItemModal__Description"></p>
      <button className="ItemModal__Btn-Close"></button>
    </div>
  );
};

export default ItemModal;
