import { useState } from "react";
const Register = () => {
  //  const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  //const [avatar, setAvatar] = useState('')
  //const [username, setUsername] = useState('')
  //const [token, setToken] = useState('')
  //const handleSubmit = async (event) => {
  //event.preventDefault()
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Username:
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            username="username"
          />
        </label>
        <label>
          Email:
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
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
        <label>Avatar:</label>
        <input
          onChange={(event) => setAvatar(event.target.value)}
          type="text"
          name="upload avatarURL"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
//}

export default Register;
