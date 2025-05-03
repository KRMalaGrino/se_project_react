const onClose = () => {};

const ItemModal = () => {
  return (
    <div className="ItemModal">
      <div className="ItemModal__Container">
        <img
          className="ItemModal__Image"
          src="https://coach.scene7.com/is/image/Coach/cu383_blk_a0?$desktopProductZoom$"
          alt="Shirt"
        />
        <div className="ItemModal__TextWrapper">
          <p className="ItemModal__Title">Shirt</p>
          <p className="ItemModal__Description">Weather: Hot</p>
        </div>
        <button className="ItemModal__Btn-Close"></button>
      </div>
    </div>
  );
};

export default ItemModal;
