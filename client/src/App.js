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
import Test from './components/test';
import Auth from './components/Auth';

class App extends Component {
  state = {
    currentPage: "Home",
  };

  handlepagechange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return <Router>
    <div>
      <Wrapper>
      <Navbar 
        handlePageChange={this._handlePageChange} />
      
      <AuthButton />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage}/>
        {/* <Route exact path="/landing" component={LandingPage}/> */}
        <Route exact path="/signup" component={SignupPage}/>
        <PrivateRoute path="/user" component={UserPage} />
        <Route path="/test" component={Test} />
        <PrivateRoute path="/contractor" component={ProviderPage} />

        </Wrapper>

      </div>

    </Router>;
  }
};
const AuthButton = withRouter(
  ({ history }) =>
    Cookies.get('id') ? (
      <p>      
      
        Welcome {Cookies.get('id')}
        <button
          onClick={() => {
            Auth.signout(() => {
            })
            history.push('/');              
            
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);


export default App;
