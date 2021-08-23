import React from "react";
import "./SignUp.css";
import { useState } from "react";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { username, email, password, password_confirmation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="signup-div">
      <form
        id="signup-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSignUp(formData);
        }}
      >
        <h3 id="signup-title">Sign-Up</h3>
        <label htmlFor="username">
          Username:
          <input
            className="signup-input"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            className="signup-input"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            className="signup-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password_confirmation">
          Confirm Password:
          <input
            className="signup-input"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChange}
          />
        </label>

        <button id="signup-button" type="submit">
          Sign Up
        </button>
        <a className="redirect" href="/login">
          Already have an account? Click to here to login!
        </a>
      </form>
    </div>
  );
};

export default SignUp;
