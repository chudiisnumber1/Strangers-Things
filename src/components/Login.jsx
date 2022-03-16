import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <form className="LogBox">
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
      </div>
    </form>
  );
};

export default Login;
