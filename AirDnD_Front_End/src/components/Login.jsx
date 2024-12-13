import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setLoginToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      const postCredentials = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!postCredentials.ok) {
        throw new Error("Invalid Credentials");
      }

      const responseJSON = await postCredentials.json();
      const token = responseJSON.token;
      const userId = responseJSON.userId;
      console.log(responseJSON);
      setLoginToken(token);
      setLoginSuccess(true);
      setTimeout(() => {
        navigate(`/account/${userId}`);
      }, 3500);
    } catch (e) {
      alert(e.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h2 id="login-header">Login</h2>
      <form id="login-form" onSubmit={login}>
        {loginSuccess ? (
          <p id="login-thank-you">
            Thank you for logging in. You will be redirected shortly.
          </p>
        ) : (
          <>
            <div id="login-inputs">
              <label>
                Username:
                <input
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  name="username"
                  required
                />
              </label>
              <label>
                Password:
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  required
                />
              </label>
            </div>
            <button>Log In</button>
          </>
        )}
      </form>
    </>
  );
}

export default Login;
