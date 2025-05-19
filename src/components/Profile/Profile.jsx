import SideBar from "./SideBar/SideBar.jsx";
import ClothingItems from "./ClothingItems/ClothingItems.jsx";

const Profile = ({ onAddClick, onCardClick, clothingItems }) => {
  return (
    <div className="profile">
      <section className="profile__sideBar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothingItems
          onAddClick={onAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
};

export default Profile;
