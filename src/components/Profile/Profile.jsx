import SideBar from "./SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection.jsx";

const Profile = ({
  onAddClick,
  onCardClick,
  clothingItems,
  openEditProfileClick,
  openLogoutModal,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <section className="profile__sideBar">
        <SideBar
          openEditProfileClick={openEditProfileClick}
          openLogoutModal={openLogoutModal}
        />
      </section>
      <section className="profile__clothesSection">
        <ClothesSection
          onAddClick={onAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
