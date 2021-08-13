import { NavLink } from "react-router-dom";
import "./Header.css";
import gameLogo from "../../assets/Lets-Play-Logo.png"


function Header({ user, logout }) {
  const authenticatedOptions = (
    <>
      <button onClick={logout} className="links" id="logout">
        Logout
      </button>
    </>
  );

  const unauthenticatedOptions = (
    <div className="user-links-container">
      <NavLink className="user-links" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="user-links" to="/login">
        Login
      </NavLink>
    </div>
  );

  return (
    <div id="nav">
      <NavLink to="/">
        <img id="home-icon" src={gameLogo}></img>
      </NavLink>
      <div id="nav-user-info">
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && <div className="user-links">Welcome back {user.username}!</div>}
      </div>
    </div>
  );
}

export default Header;
