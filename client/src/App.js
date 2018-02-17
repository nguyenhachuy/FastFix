import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import ProviderPage from "./components/ProviderPage";
import Navbar from "./components/Navbar";
import logo from './logo.svg';
import './App.css';
import { LoginPage, SignupPage } from './components/Login';
import LandingPage from './components/Landing';
import { Container, Row, Col } from "./components/Grid";
import PrivateRoute from './components/PrivateRoute';
import Auth from './components/Auth';

class App extends Component {
  state = {
    currentPage: "Home",
    isAuthenticated: false
  };

  handlepagechange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return <Router>
    <div>
      <Navbar 
        handlePageChange={this._handlePageChange} />
      <AuthButton/>
      <Wrapper>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage}/>
        {/* <Route exact path="/landing" component={LandingPage}/> */}
        <Route exact path="/signup" component={SignupPage}/>
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute path="/contractor" component={UserPage} />

        </Wrapper>

      </div>

    </Router>;
  }
};


export default App;
