import React, { Component } from 'react';
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
import Chat from "./components/Chat";
import './App.css';
import { LoginPage, SignupPage } from './components/Login';
import LandingPage from './components/Landing';
import { Container, Row, Col } from "./components/Grid";
import Test from './components/test';



class App extends Component {
  state = {
    currentPage: "Home"
  };

  render() {
    return <Router>
    <div>
      <Navbar 
        handlePageChange={this._handlePageChange} />
      <AuthButton/>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/contractor" component={ProviderPage} />
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/login" component={LoginPage}/>
        {/* <Route exact path="/landing" component={LandingPage}/> */}
        <Route exact path="/signup" component={SignupPage}/>
        <PrivateRoute path="/protected" component={LandingPage} />

      </Wrapper>

  </div>
    
  </Router>;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
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
