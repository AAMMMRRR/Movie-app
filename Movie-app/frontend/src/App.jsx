import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
// src/App.jsx
import MovieDetail from "./pages/MovieDetail"; // Import MovieDetail component

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} /> {/* New route for single movie */}
        </Routes>
      </main>
    </MovieProvider>
  );
}



export default App;
