import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/charactersheet"}>Get Started!</Link>
    </header>
  )
}

export default Navbar;