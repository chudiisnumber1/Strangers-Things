import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../api";
//import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //let history = useHistory();

  async function fetchUserLogin() {
    try {
      const token = await userLogin(username, password);
      localStorage.setItem("token", token);
      userLogin(username, password);
      // isLogin = true;
      //history.push("/profile");
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="logBox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Username: ", username, "password: ", password);
          fetchUserLogin();
          setUsername("");
          setPassword("");
        }}
      >
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
      <Route path="/profile.jsx" />
    </div>
  );
};

export default Login;
