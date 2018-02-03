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
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlepagechange = page => {
    this.setState({ currentPage: page });
  };

  render() {
<<<<<<< bd9c69a977687083bd9419aee491a30135472f53
    return <Router>
    <div>
      <Navbar 
        handlePageChange={this._handlePageChange} />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/contractor" component={ProviderPage} />
      </Wrapper>

  </div>
    
  </Router>;
=======
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
      <Container>
        <Row className="justify-content-center">
          <Col className ="col-5">
            <LoginPage>
            </LoginPage>  
          </Col>
        </Row>     
      </Container>
      </div>
    );
>>>>>>> Added bootstrap and login form
  }
};

export default App;
