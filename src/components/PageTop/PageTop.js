import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Particles from 'react-particles-js';
class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                    <Particles className="canvas"/>
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="pageTitle">{this.props.pagetitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;