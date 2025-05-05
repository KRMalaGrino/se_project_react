const onClose = () => {};

const ItemModal = () => {
  return (
    <div className="modal modal_type_item">
      <div className="modal__container modal__container_type_item">
        <img
          className="item-modal__image"
          src="https://coach.scene7.com/is/image/Coach/cu383_blk_a0?$desktopProductZoom$"
          alt="Shirt"
        />
        <div className="item-modal__text-wrapper">
          <p className="item-modal__title">Shirt</p>
          <p className="item-modal__description">Weather: Hot</p>
        </div>
        <button className="modal__close-btn"></button>
      </div>
    </div>
  );
};

export default ItemModal;
