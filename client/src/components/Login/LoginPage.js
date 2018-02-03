import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{
    
    handleLogin = event => {
        alert('hi');
    }
    handleSignup = even => {
        alert('hello');
    }
    render() {
        return (
            <div>
                <h1> 
                    Login Page hooray    
                </h1>
                <LoginForm 
                handleLogin={this.handleLogin}
                handleSignup={this.handleSignup}
                >
                </LoginForm>
            </div>
        )    
    }
}


export default LoginPage;