import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixFooter from "./components/NetflixFooter";
import StarWarsList from "./components/StarWarsList";
import SeriesList from "./components/SeriesList";
import AnimeList from "./components/AnimeList";
import TvShowBar from "./components/TVShowBar";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "rgb(34, 31, 31)" }}
      >
        <header className="border-bottom border-1 border-tertiary">
          <NetflixNavbar></NetflixNavbar>
        </header>
        <main className="flex-grow-1">
          <TvShowBar></TvShowBar>
          <Routes>
            <Route path="/TVShows" element={<StarWarsList />}></Route>

            <Route
              path="/"
              element={
                <>
                  <SeriesList />
                  <AnimeList />
                </>
              }
            />

            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>

        <NetflixFooter></NetflixFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
