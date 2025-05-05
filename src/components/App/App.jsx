import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

// import fetchWeatherData from "../../utils/weatherApi.js";

// Handle logic for handling Add Clothes Click
const handleAddClothesClick = () => {
  addClothesModalOpen(true);
};

// Handle logic for getting the weather data
function App() {
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   fetchWeatherData().then(setWeather);
  // });

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
