const getWhatToWear = () => {
  // What to wear function based on current weather
};

const ItemCard = () => {
  return (
    <div className="ItemCard">
      <p className="ItemCard__CurrentTemp">
        Today is `${getWhatToWear}` F / You may want to wear:
      </p>
      <ul className="Items">
        <template id="Item-Template">
          <li className="Item">
            <img className="Item__Image" src="" alt="" />
            <p className="Item__Text"></p>
          </li>
        </template>
      </ul>
    </div>
  );
};

export default ItemCard;
