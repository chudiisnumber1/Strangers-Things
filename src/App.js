import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
