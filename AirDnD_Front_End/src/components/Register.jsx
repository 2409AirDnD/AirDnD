import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  const register = async (event) => {
  event.preventDefault()
  
  try{
  const postCreds = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      avatar: avatar
    }),
  });

  if (!postCreds.ok) {
    const errorData = await postCreds.json();
    throw new Error(error.message);
  }

  const responseJSON = await postCreds.json();
  const token = responseJSON.token;
  setToken(token);

}catch(error){
  console.error("Registration unsuccessful:", error);
  alert(error.message)
}
  };

  return (
    <>
      <form id="register-form" onSubmit={register}>
      <h2 id="register-header">Register</h2>
      {token ? ( 
        <p id="register-thank-you">Welcome to AirDnD! Please click <Link to="/login">here</Link> to log in and get started.</p>
      ) : (
        <>
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
        </>
      )}
      </form>
    </>
    );
  };

export default Register;