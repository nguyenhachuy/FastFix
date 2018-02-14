import React from "react";
import { Link } from "react-router-dom";


const Navbar = props =>

<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
      FastFix
    </Link>
  </div>
  <ul className="nav navbar-nav">
    <li
      className={
        window.location.pathname === "/"
          ? "active"
          : ""
      }
    >
      <Link to="/" handlepagechange={props.handlepagechange}>Home</Link>
    </li>
    <li
      className={
       window.location.pathname === "/user"
          ? "active"
          : ""
      }
    >
      <Link to="/user" handlepagechange={props.handlepagechange}>User</Link>
    </li>
    <li
      className={
       window.location.pathname === "/contractor"
          ? "active"
          : ""
      }
    >
      <Link to="/contractor" handlepagechange={props.handlepagechange}>Contractor</Link>
    </li>
    <li
      className={
       window.location.pathname === "/login"
          ? "active"
          : ""
      }
    >
      <Link to="/login" handlepagechange={props.handleagechange}>Log In</Link>
    </li>
    <li
      className={
       window.location.pathname === "/signup"
          ? "active"
          : ""
      }
    >
      <Link to="/signup" handlepagechange={props.handleagechange}>Sign Up</Link>
    </li>

  </ul>
</div>
</nav>;
export default Navbar;