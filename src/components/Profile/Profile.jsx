import SideBar from "./SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection.jsx";

const Profile = ({ onAddClick, onCardClick, clothingItems }) => {
  return (
    <div className="profile">
      <section className="profile__sideBar">
        <SideBar />
      </section>
      <section className="profile__clothesSection">
        <ClothesSection
          onAddClick={onAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
};

export default Profile;
