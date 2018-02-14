import React from 'react';
import LoadingIcon from './LoadingIcon';
import { Container, Row, Col } from "./../Grid";
import './Landing.css';
class LandingPage extends React.Component {
    handleOnclickUser = event => {
        alert('Transfer to user login page')
    }
    handleOnclickProvider = event => {
        alert('Transfer to provider login page')
        
    }
    render() {
        return (
            <Row className="row">
                <Col className={['col-xs-12', 'col-centered'].join(" ")}>
                    <LoadingIcon onClick={this.handleOnclickUser} type="user" link="/login"/>
                    <LoadingIcon onClick={this.handleOnclickProvider} type="wrench" link="/login"/>
                </Col>
            </Row>
        )
    }
}
export default LandingPage;
