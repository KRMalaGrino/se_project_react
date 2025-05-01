import "./App.css";
import Header from "../Header/Header.jsx";

const handleAddClothesClick = () => {
  addClothesModalOpen(true);
};

function App() {
  return (
    <>
      <Header onAddClothes={handleAddClothesClick} />
      <Main>
        <WeatherCard />
        <ItemCard />
      </Main>
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </>
  );
}

export default App;
