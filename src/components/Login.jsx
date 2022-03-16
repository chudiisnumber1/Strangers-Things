import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="LogBox">
      {" "}
      {/*Logbox is not meant to target the navbar, just center the login elements with the screen*/}
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Login</button>{" "}
        <button type="submit">Forgot Password</button>
        {/*make this on submit,record values, and change page to home*/}
      </div>
      <div>
        <h3>Register new user (Check code)</h3>{" "}
        {/*Need to fix this functiuonality*/}
      </div>
    </form>
  );
};

export default Login;
