const ItemCard = ({ item, onCardClick, onCardLike }) => {
  const handleClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item);
  };

  return (
    <li className="card">
      <h2 className="card__text">{item.name}</h2>
      <button className="card__like-button" onClick={handleLike}>
        {item.isLiked ? "❤️" : "🤍"}
      </button>
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
