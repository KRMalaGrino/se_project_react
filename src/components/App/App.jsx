import "./App.css";
import Header from "../Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
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
