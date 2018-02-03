import React from 'react';
import LoadingIcon from './LoadingIcon';
import { Container, Row, Col } from "./../Grid";

class LandingPage extends React.Component {
    render() {
        return (
            <Row className="row">
                <Col className="col-xs-10 col-xs-offset-1">
                    <LoadingIcon/>
                    <LoadingIcon/>
                </Col>        
            </Row>
        )
    }
}