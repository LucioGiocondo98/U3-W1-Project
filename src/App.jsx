import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import NetflixNavbar from "./components/NetflixNavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixFooter from "./components/NetflixFooter";
import StarWarsList from "./components/StarWarsList";
import SeriesList from "./components/SeriesList";
import AnimeList from "./components/AnimeList";
import TvShowBar from "./components/TVShowBar";

function App() {
  return (
    <div
      className="d-flex flex-column"
      style={{ backgroundColor: "rgb(34, 31, 31)" }}
    >
      <header className="border-bottom border-1 border-tertiary">
        <NetflixNavbar></NetflixNavbar>
      </header>
      <main className="flex-grow-1">
        <TvShowBar></TvShowBar>
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
