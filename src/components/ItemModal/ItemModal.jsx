const onClose = () => {};

const ItemModal = () => {
  return (
    <div className="item-modal">
      <div className="item-modal__container">
        <img
          className="item-modal__image"
          src="https://coach.scene7.com/is/image/Coach/cu383_blk_a0?$desktopProductZoom$"
          alt="Shirt"
        />
        <div className="item-modal__text-wrapper">
          <p className="item-modal__title">Shirt</p>
          <p className="item-modal__description">Weather: Hot</p>
        </div>
        <button className="item-modal__btn-close"></button>
      </div>
    </div>
  );
};

export default ItemModal;
