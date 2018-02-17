import React from 'react';

import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Row, Col } from "./../Grid";
import Cookies from 'js-cookie';
import API from "../../utils/API";
import Auth from '../Auth';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
                username: '',
                password: '',
                type:'User'
            },
            userInfo: [],
            redirectToReferrer: false,
            loginFailed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
        this.handleAuthFailure = this.handleAuthFailure.bind(this);
        this.clearUser = this.clearUser.bind(this);
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
                this.state.redirectToReferrer = true;
            }
        }
    }
/*
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

    }
    */
    
    handleSubmit(event) {
        event.preventDefault();
        let user = this.state.user;
        console.log(user);
        Auth.authenticate(user, this.handleAuthSuccess, this.handleAuthFailure);
    }

    handleAuthSuccess() {
        this.clearUser();
        this.setState({
            redirectToReferrer: true,
            loginFailed: false
            
        });
        Cookies.set('token', 'password');
        this.state.redirectToReferrer = true;
      
    }


    clearUser() {
        let user = this.state.user;
        user.username = '';
        user.password ='';
        user.type = '';
        this.setState({
            user
        })        
    }

    handleAuthFailure() {
        this.clearUser();
        this.setState({
            loginFailed: true
        });
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            if (from.pathname !== '/')
                return <Redirect to={from} />;
            else if(Cookies.get('type') === 'user')
                return <Redirect to={'/user'}/>;
            else
                return <Redirect to={'/contractor'}/>;
        }


        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>
                    {(from.pathname !== '/') &&
                                        <p>You must log in to view the page at {from.pathname}</p>                                        
                    }

                    <LoginForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        user={this.state.user}
                        loginFailed={this.state.loginFailed}
                    />
                </Col>
            </Row>
        )
    }
}


export { LoginPage };