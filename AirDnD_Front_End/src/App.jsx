import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterSheet from "./components/CharacterSheet";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/charactersheet" element={<CharacterSheet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
