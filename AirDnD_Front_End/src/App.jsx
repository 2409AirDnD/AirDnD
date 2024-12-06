import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<LandingPage />} />
      <Route path="/charactersheet" element= {<CharacterSheet />} />
      <Route path="/register" element= {<Register.jsx />} />
    </Routes>
    </>
  )
}

export default App