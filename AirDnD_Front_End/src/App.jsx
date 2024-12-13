import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CharacterSheet from "./components/CharacterSheet";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  const [userId, setUserId] = useState(null);
  const [loginToken, setLoginToken] = useState("");

  return (
    <>
      <Navbar loginToken={loginToken} setLoginToken={setLoginToken} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/charactersheet" element={<CharacterSheet />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login setLoginToken={setLoginToken} setUserId={setUserId} />
          }
        />
        <Route path="/account" element={<Account userId={userId} />} />
      </Routes>
    </>
  );
}

export default App;
