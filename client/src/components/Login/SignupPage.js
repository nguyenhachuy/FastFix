import React from 'react';
import {SignupForm} from './SignupForm';
import { Container, Row, Col } from "./../Grid";
import API from "../../utils/API";

class SignupPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
            },
            errors: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
          user
        });
        
    }
    
    handleSubmit(event) {
        console.log("User Info" + this.state.user);
        if (this.state.user.password != this.state.user.confirmPassword)
        {
            alert("The passwords do not match!");
        }
        else
        {
            API.createUser(this.state.user)
              .then(res =>
                this.setState({
                    username: '',
                    password: ''
                })
              )
              .catch(err => console.log(err));
        }
        event.preventDefault();
    }
    
    
    handleSignup(event) {
        alert('Hello');
        event.preventDefault();
    }
    render() {
        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>
                    <SignupForm
                    handleChange={this.handleChange}
                    //handleSignup={this.handleSignup}
                    handleSubmit={this.handleSubmit}
                    user={this.state.user}
                    errors={this.state.errors}
                    />
                </Col>
            </Row>
        )    
    }
}


export {SignupPage};