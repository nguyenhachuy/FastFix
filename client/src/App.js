import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  render() {
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
  }
}

export default App;
