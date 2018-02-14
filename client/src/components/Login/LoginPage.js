import React from 'react';
import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Row, Col } from "./../Grid";
import Cookies from 'js-cookie';
// import API from '../../utils/API';
import Auth from '../Auth';
class LoginPage extends React.Component {
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
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }
    handleAuth(token) {
        Cookies.set('token', token);
        this.setState({
            redirectToReferrer: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let user = this.state.user;
        this.setState({
            username: '',
            password: ''
        });

        console.log('A name was submitted: ' + user.username + " " + user.password);
        Auth.authenticate(user, this.handleAuth);

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


export { LoginPage };