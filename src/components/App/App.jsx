import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

const handleAddClothesClick = () => {
  addClothesModalOpen(true);
};

function App() {
  return (
    <>
      <div className="app">
        <div className="app__content">
          <Header onAddClothes={handleAddClothesClick} />
          <Main />
          <Footer />
          <ModalWithForm />
          <ItemModal />
        </div>
      </div>
    </>
  );
}

export default App;
