import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import ProviderPage from "./components/ProviderPage";
import Navbar from "./components/Navbar";
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import LandingPage from './components/Landing';
import { Container, Row, Col } from "./components/Grid";


class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlepagechange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return <Router>
    <div>
      <Navbar 
        handlePageChange={this._handlePageChange} />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/contractor" component={ProviderPage} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="landing" component={LandingPage}/>
        <Route exact path="/landing" component={LoginPage}/>
 
      </Wrapper>

  </div>
    
  </Router>;
  }
};

export default App;