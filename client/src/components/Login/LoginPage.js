import React from 'react';
import {LoginForm} from './LoginForm';
import { Container, Row, Col } from "./../Grid";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
              username: '',
              password: ''
            }
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
        alert('A name was submitted: ' + this.state.username + " " + this.state.password);
        this.setState({
            username: '',
            password: ''
        });
        event.preventDefault();
    }
    render() {
        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>

                    <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    user={this.state.user}
                    />
                </Col>
            </Row>
        )    
    }
}


export {LoginPage};