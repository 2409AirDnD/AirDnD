import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
const Navbar = ({ loginToken, setLoginToken }) => {
  const { userId } = useParams();
  console.log("USERID", userId);
  const navigate = useNavigate();
  const Logout = async () => {
    setLoginToken("");
    navigate("/");
  };
  return (
    <>
      <header>
        <Link to={"/"}>Home</Link>
        {loginToken ? null : <Link to={"/login"}>Login</Link>}
        {loginToken ? null : <Link to={"/register"}>Register</Link>}
        {loginToken ? <Link to={`/account`}>My Account</Link> : null}
        {loginToken ? (
          <Link to={"/charactersheet"}>Character Sheet Generator</Link>
        ) : (
          <Link to={"/charactersheet"}>Get Started!</Link>
        )}
        {loginToken ? <button onClick={() => Logout()}>Logout</button> : null}
      </header>
    </>
  );
};

export default Navbar;
