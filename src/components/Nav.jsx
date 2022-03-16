import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/Posts">Posts</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
    </div>
  );
};

export default Nav;
