import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Posts">
          <Posts />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
