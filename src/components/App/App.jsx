import Header from "../Header/Header.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
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
        <div className="App__Content">
          <Header onAddClothes={handleAddClothesClick} />
          <main>
            <WeatherCard />
            <ItemCard />
          </main>
          <Footer />
          <ModalWithForm />
          <ItemModal />
        </div>
      </div>
    </>
  );
}

export default App;
