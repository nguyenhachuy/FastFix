import React from 'react';

import {Redirect} from 'react-router-dom';
import {LoginForm} from './LoginForm';
import {Row, Col } from "./../Grid";
import Cookies from 'js-cookie';
import API from "../../utils/API";
class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
              username: '',
              password: ''
            },
            userInfo: [],
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
    
    userExistCheck(data) {
        let password = this.state.user.password;
        console.log(data);
        if (data.length === 0){
            alert("User doesn't exist")
        }
        else {
            // Password Check
            console.log(data[0].password);
            if (data[0].password !== password) {
                alert("Password is wrong")
            }
            else {
                // Move to User page
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let user = this.state.user;
        let userInfo = [];
        console.log(user.username);

        API.getUserByName(user.username)
          .then(res =>
            //console.log(res.data)
            //this.setState({ userInfo: res.data})
            this.userExistCheck(res.data)
          )
          .catch(err => console.log(err));

        /*
        let user = this.state.user;        
        console.log('A name was submitted: ' + user.username + " " + user.password);
        this.setState({
            username: '',
            password: ''
        });
        Cookies.set('token', 'password');
        this.state.redirectToReferrer = true;
        */
      
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
  

export {LoginPage};