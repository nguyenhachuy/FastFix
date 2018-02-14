import React from 'react';
import LoadingIcon from './LoadingIcon';
import { Row, Col } from "./../Grid";
import './Landing.css';
import Cookies from 'js-cookie';
class LandingPage extends React.Component {
    handleOnclickUser = event => {
        Cookies.set('type', 'user');
    }
    handleOnclickProvider = event => {
        Cookies.set('type', 'provider');
    }
    render() {
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
