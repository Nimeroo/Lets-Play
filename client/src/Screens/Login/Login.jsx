import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="login-div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(formData);
        }}
        id="login-form-container"
      >
        <h4 id="login-title">Login</h4>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button id="login-button" type="submit">
          Login
        </button>
        <Link to="/signup" className="redirect">
          New to Game Station? Click to here to sign up!
        </Link>
      </form>
    </div>
  );
};

export default Login;
