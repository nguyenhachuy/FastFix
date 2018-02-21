import React from 'react';
import LoadingIcon from './LoadingIcon';
import { Row, Col } from "./../Grid";
import './Landing.css';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect :'',
        };
        this.handleOnclickProvider = this.handleOnclickProvider.bind(this);
        this.handleOnclickUser = this.handleOnclickUser.bind(this);
    }

    handleOnclickUser = event => {
        // Cookies.set('type', 'user');
        event.preventDefault();
        this.setState({
            redirect: '/login'
        })
    }
    handleOnclickProvider = event => {
        // Cookies.set('type', 'provider');
        event.preventDefault();
        this.setState({
            redirect: '/login'
        })
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return (
            <div>
                <Row className="row">
                    <Col className={['col-xs-12', 'col-centered'].join(" ")}>
                        <LoadingIcon onClick={this.handleOnclickUser} type="user" link="/login" />
                        <LoadingIcon onClick={this.handleOnclickProvider} type="wrench" link="/login" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LandingPage;
