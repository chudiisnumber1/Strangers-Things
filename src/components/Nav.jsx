import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Nav;
