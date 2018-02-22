import React from "react";
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


const Navbar = props =>

<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
     
    </Link>
  </div>
  <ul className="nav navbar-nav">
    {/* <li
      className={
        window.location.pathname === "/"
          ? "active"
          : ""
      }
    >
      <Link to="/" handlePageChange={props.handlePageChange}>Home</Link>
    </li> */}
    <li
      className={
       window.location.pathname === "/user"
          ? "active"
          : ""
      }
    >
      <Link to="/user" handlePageChange={props.handlePageChange}>User</Link>
    </li>
    <li
      className={
       window.location.pathname === "/contractor"
          ? "active"
          : ""
      }
    >
      <Link to="/contractor" handlePageChange={props.handlePageChange}>Contractor</Link>
    </li>
    <li
      className={
       window.location.pathname === "/login"
          ? "active"
          : ""
      }
    >
      <Link to="/login" handlePageChange={props.handlePageChange}>Log In</Link>
    </li>
    <li
      className={
       window.location.pathname === "/signup"
          ? "active"
          : ""
      }
    >
      <Link to="/signup" handlePageChange={props.handlePageChange}>Sign Up</Link>
    </li>
    

  </ul>
    <div className={window.location.pathname === "/contractor"
          ? "contractor-icon"  : "diplay-hidden"}>
    </div>
        
    <div className={window.location.pathname === "/user"
          ? "user-icon"  : "diplay-hidden"}>
    </div>
</div>
</nav>;
export default Navbar;