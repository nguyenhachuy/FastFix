import React from 'react';
import {Redirect} from 'react-router-dom';
import {LoginForm} from './LoginForm';
import {Row, Col } from "./../Grid";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
              username: '',
              password: ''
            },
            redirectToReferrer: false
            
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
        event.preventDefault();
        let user = this.state.user;        
        console.log('A name was submitted: ' + user.username + " " + user.password);
        this.setState({
            username: '',
            password: ''
        });
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
      
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
          }
      
          
        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>
                    <p>You must log in to view the page at {from.pathname}</p>

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
  
  

export {LoginPage};