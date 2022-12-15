import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Main";
import Game from "./components/Game";
import NavBar from "./components/Navbar";
import Winner from "./components/Winner";
import History from "./components/History";
import WinnerRecord from "./components/WinnerRecord";
import SpaceBetweenPage from "./components/SpaceBetweenPage";

function App() {
  return (
    <div className="App">
      <Hero />
      <SpaceBetweenPage />
      <Game />
      <SpaceBetweenPage />
      <Winner />
      <SpaceBetweenPage />
      <History />
      <SpaceBetweenPage />
      <WinnerRecord />
      <SpaceBetweenPage />
    </div>
  );
}

export default App;
