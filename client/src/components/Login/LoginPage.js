import React from 'react';
import LoginForm from './LoginForm';
import { Container, Row, Col } from "./../Grid";
class LoginPage extends React.Component{
    
    handleLogin = event => {
        alert('hi');
    }
    handleSignup = event => {
        alert('hello');
    }
    render() {
        return (
            <Row className="row">
                <Col className="col-xs-6 col-xs-offset-3">
                    <h1> 
                        Login Page hooray    
                    </h1>
                    <LoginForm 
                    handleLogin={this.handleLogin}
                    handleSignup={this.handleSignup}
                    >
                    </LoginForm>
                </Col>
            </Row>
        )    
    }
}


export default LoginPage;