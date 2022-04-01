import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Redirect } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/Login">
          {token ? <Redirect to="/Profile" /> : <Login />}
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
