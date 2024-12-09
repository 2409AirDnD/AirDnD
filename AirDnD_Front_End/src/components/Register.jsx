import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  const register = async (event) => {
  event.preventDefault()

  const postCreds = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      avatar: avatar
    }),
  })

  const responseJSON = await postCreds.json();
  const token = responseJSON.token;
  setToken(token);
}

  return (
    <>
      <h2 id="register-header">Register</h2>
      <form id="register-form" onSubmit={register}>
        <div id="register-inputs">
        <label>
          Username:
          <input
            value={ username }
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            username="username"
            required
          />
        </label>
        <label>
          Email:
          <input
            value= { email }
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Password:
          <input
            value= { password }
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            required
          />
        </label>
        <label>Avatar:</label>
        <input
          value= { avatar }
          onChange={(event) => setAvatar(event.target.value)}
          type="text"
          name="upload avatarURL"
          placeholder="Enter image URL."
          required
        />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
    );
  };

export default Register;