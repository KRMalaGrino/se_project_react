import SideBar from "./SideBar/SideBar.jsx";
import ClothingItems from "./ClothingItems/ClothingItems.jsx";

const Profile = () => {
  return (
    <div className="profile">
      <section className="profile__sideBar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothingItems />
      </section>
    </div>
  );
};

export default Profile;
