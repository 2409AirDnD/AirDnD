import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Username:
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
          />
        </label>
      </form>
    </>
  );
}

export default Login;