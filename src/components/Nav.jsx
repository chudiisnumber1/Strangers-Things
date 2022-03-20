import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Nav = () => {
  // const logState = false;
  // isLogin ? (logState = LogoutBtn) : (logState = LoginBtn);
  // function LogoutBtn() {
  //   return (
  //     <Link className="logging" to="/Login">
  //       Login
  //     </Link>
  //   );
  // }
  // function LoginBtn() {
  //   return (
  //     <Link className="logging" to="/Posts">
  //       Logout
  //     </Link>
  //   );
  // }
  return (
    <div className="navBar">
      <div className="title">Stranger Things</div>
      <Link className="links" to="/Posts">
        AllPosts
      </Link>
      <Link className="links" to="/Profile">
        Profile
      </Link>
      <Link className="links" to="/Login">
        Login
      </Link>
      <Link className="links" to="/Signup">
        Signup
      </Link>
    </div>
  );
};

export default Nav;
