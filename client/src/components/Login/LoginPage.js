import React from 'react';
import LoginForm from './LoginForm';
import { Container, Row, Col } from "./../Grid";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });          
    
    }
    
    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.username + " " + this.state.password);
        this.setState({
            username: '',
            password: ''
        });
        event.preventDefault();
    }
    
    
    handleSignup = event => {
        alert('Hello');
        event.preventDefault();
    }
    render() {
        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>
                    {/* <form class="form-signin" onSubmit={this.handleSubmit}>
                        <h2 class="form-signin-heading">Please sign in</h2>
                        <label for="username" class="sr-only">Email address</label>
                        <input type="text" name="username" class="form-control" placeholder="Email address" required="" autofocus="" 
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                        <label for="password" class="sr-only">Password</label>
                        <input type="password" name="password" class="form-control" placeholder="Password" required="" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        <div class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"
                            onChange={this.handleChange}
                            /> 
                            Remember me
                        </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="Submit">Sign in</button>
                        <button class="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleSignup}>Sign up</button>
                    </form>     */}
                    <LoginForm
                    handleChange={this.handleChange}
                    handleSignup={this.handleSignup}
                    handleSubmit={this.handleSubmit}
                    username={this.state.username}
                    password={this.state.password}
                    />
                </Col>
            </Row>
        )    
    }
}


export default LoginPage;