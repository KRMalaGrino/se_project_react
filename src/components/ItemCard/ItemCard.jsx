import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

const ItemCard = ({ item, onCardClick, onCardLike }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const handleClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item);
  };

  const isLiked = item.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : ""
  }`;

  return (
    <li className="card">
      <h2 className="card__text">{item.name}</h2>

      {isLoggedIn && (
        <button className={itemLikeButtonClassName} onClick={handleLike}>
          {isLiked ? "❤️" : "🤍"}
        </button>
      )}
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
