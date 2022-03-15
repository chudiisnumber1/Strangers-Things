import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
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
