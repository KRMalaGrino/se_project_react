import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { WeatherCard } from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

const handleAddClothesClick = () => {
  addClothesModalOpen(true);
};

function App() {
  return (
    <>
      <div className="App">
        <Header onAddClothes={handleAddClothesClick} />
        <Main>
          <WeatherCard />
          <ItemCard />
        </Main>
        <Footer />
        <ModalWithForm />
        <ItemModal />
      </div>
    </>
  );
}

export default App;
