import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SportsClub from "./pages/SportsClub";
import Managements from "./pages/Managements";
import SportsComplex from "./pages/SportsComplex";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/club" element={<SportsClub />} />
        <Route path="/managements" element={<Managements />} />
        <Route path="/complex" element={<SportsComplex />} />
      </Routes>
    </Router>
  );
}

export default App;
