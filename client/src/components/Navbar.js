import React from "react";
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const AuthButton = withRouter(
  ({ history }) =>
    Cookies.get('token') ? (
        <a
          onClick={() => {
            Cookies.remove('token');
            history.push('/');
          }}
          className="float-right"
          href="#"
        >
          Sign out
        </a>
    ) : ( null
      )
);

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
      <Link to="/login" handlePageChange={props.handleagechange}>Log In</Link>
    </li>
    <li
      className={
       window.location.pathname === "/signup"
          ? "active"
          : ""
      }
    >
      <Link to="/signup" handlePageChange={props.handleagechange}>Sign Up</Link>
    </li>
    <li
      className=""
    >
      <AuthButton/>
    </li>

  </ul>
</div>
</nav>;
export default Navbar;