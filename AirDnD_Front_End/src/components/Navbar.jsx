import { Link } from "react-router-dom";

const Navbar = ( { loginToken } ) => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      { loginToken ? null : <Link to={"/login"}>Login</Link> }
      { loginToken ? null : <Link to={"/register"}>Register</Link> }
      { loginToken ? <Link to={"/account"}>My Account</Link> : null }
      { loginToken ? <Link to={"/charactersheet"}>Character Sheet Generator</Link>
        : <Link to={"/charactersheet"}>Get Started!</Link> }
    </header>
  )
}

export default Navbar;