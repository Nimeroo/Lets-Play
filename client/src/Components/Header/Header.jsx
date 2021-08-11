import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ user, logout }) {
  const authenticatedOptions = (
    <>
      <button onClick={logout} className="links" id="logout">
        Logout
      </button>
    </>
  );

  const unauthenticatedOptions = (
    <div className="user-links">
      <NavLink className="links" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="links" to="/login">
        Login
      </NavLink>
    </div>
  );

  return (
    <div id="nav">
      <NavLink to="/">
        <img id="home-icon" src="../../assets/Lets-Play-Logo.png"></img>
      </NavLink>
      <div className="nav-user-info">
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && <div>Welcome bak {user.username}!</div>}
      </div>
    </div>
  );
}

export default Header;
