import React from 'react';
import { SignupForm } from './SignupForm';
import { Container, Row, Col } from "./../Grid";

import API from "../../utils/API";

import Auth from '../Auth';
import { Redirect } from 'react-router-dom';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
                attribute: 'User'
            },
            errors: [],
            signupFailed: false,
            redirect: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearUser = this.clearUser.bind(this);
        this.handleSignupFailure = this.handleSignupFailure.bind(this);
        this.handleSignupSucces = this.handleSignupSucces.bind(this);
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
        console.log("User Info" + JSON.stringify(this.state.user));
        if (this.state.user.password != this.state.user.confirmPassword) {
            alert("The passwords do not match!");
        }
        else {
            let user = this.state.user;

            API.createUser(this.state.user)
                .then( (res) => {
                    //this.setState({
                    //    username: '',
                    //    password: ''
                    //})
                    console.log(res.data);
                    //Put auth set cookie here and we're done.
                    Auth.setCookie(res.data.username, res.data.attribute);
                    this.handleSignupSucces();
                })
                .catch(err => this.handleSignupFailure(err));
        }
        event.preventDefault();
    }
    /*
    handleSubmit(event) {
        let user = this.state.user;
        Auth.signup(user, this.handleSignupSucces, this.handleSignupFailure);
        event.preventDefault();
    }
    */

    clearUser() {
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
                attribute: ''
            }
        });
    }

    handleSignupSucces() {
        this.clearUser();
        this.setState({
            signupFailed: false,
            redirect: true
        });
    }


    handleSignupFailure(errorsx) {
        //this.clearUser();
        this.setState({
            signupFailed: true,
            redirect: false,
            errors: errorsx
        });
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={'/'} />;

        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>
                    <SignupForm

                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        user={this.state.user}
                        errors={this.state.errors}
                        signupFailed={this.state.signupFailed}
                    />
                </Col>
            </Row>
        )
    }
}


export { SignupPage };