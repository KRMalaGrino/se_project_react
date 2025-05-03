const getWhatToWear = () => {
  // What to wear function based on current weather
};

const ItemCard = () => {
  return (
    <div className="ItemCard">
      <p className="ItemCard__CurrentTemp">
        Today is `${getWhatToWear}` F / You may want to wear:
      </p>
      <ul className="ItemCards">
        <li className="Item">
          <img
            className="Item__Image"
            src="https://coach.scene7.com/is/image/Coach/cu383_blk_a0?$desktopProduct$"
            alt=""
          />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img
            className="Item__Image"
            src="https://joesusa.com/cdn/shop/files/25968_f_fm.jpg?v=1739774847&width=1200"
            alt=""
          />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
        <li className="Item">
          <img className="Item__Image" src="" alt="" />
          <p className="Item__Text">Shirt</p>
        </li>
      </ul>
    </div>
  );
};

export default ItemCard;
