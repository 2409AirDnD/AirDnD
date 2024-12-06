import { Routes, Route } from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import LandingPage from "./components/LandingPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<LandingPage />} />
    </Routes>
    </>
  )
}

export default App