const ItemCard = ({ item, onCardClick }) => {
  const handleClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__text">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
