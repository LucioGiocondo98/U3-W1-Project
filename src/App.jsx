import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import NetflixNavbar from "./components/NetflixNavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixFooter from "./components/NetflixFooter";

function App() {
  return (
    <div className="d-flex flex-column">
      <header>
        <NetflixNavbar></NetflixNavbar>;
      </header>
      <main className="flex-grow-1"></main>
      <footer>
        <NetflixFooter></NetflixFooter>
      </footer>
    </div>
  );
}

export default App;
