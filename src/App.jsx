import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import NetflixNavbar from "./components/NetflixNavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixFooter from "./components/NetflixFooter";
import StarWarsList from "./components/StarWarsList";
import SeriesList from "./components/SeriesList";
import AnimeList from "./components/AnimeList";

function App() {
  return (
    <div className="d-flex flex-column bg-dark">
      <header className="border-bottom border-1 border-tertiary">
        <NetflixNavbar></NetflixNavbar>
      </header>
      <main className="flex-grow-1">
        <StarWarsList></StarWarsList>
        <SeriesList></SeriesList>
        <AnimeList></AnimeList>
      </main>
      <footer>
        <NetflixFooter></NetflixFooter>
      </footer>
    </div>
  );
}

export default App;
