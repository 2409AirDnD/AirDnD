import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterSheet from "./components/CharacterSheet";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/charactersheet" element={<CharacterSheet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
