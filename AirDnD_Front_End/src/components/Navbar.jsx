import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({ loginToken }) => {
  const navigate = useNavigate();
  const Logout = async () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <header>
        <Link to={"/"}>Home</Link>
        {loginToken ? null : <Link to={"/login"}>Login</Link>}
        {loginToken ? null : <Link to={"/register"}>Register</Link>}
        {loginToken ? <Link to={"/account"}>My Account</Link> : null}
        {loginToken ? (
          <Link to={"/charactersheet"}>Character Sheet Generator</Link>
        ) : (
          <Link to={"/charactersheet"}>Get Started!</Link>
        )}
      </header>
      <div id>
        {" "}
        = "logout-block"
        <button onClick={() => Logout()}>Logout</button>
      </div>
    </>
  );
};

export default Navbar;
