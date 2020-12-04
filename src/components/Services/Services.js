import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicsLogo from '../../asset/image/graphics.svg'
import webLogo from '../../asset/image/web.svg'
import mobileLogo from '../../asset/image/mobile.svg'
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard text-center">
                               <img src="https://img.icons8.com/clouds/64/000000/web-settings.png"/>
                               <h2 className="serviceName">Web Development</h2>
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>


                           </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center " >
                                <img src="https://img.icons8.com/nolan/64/web.png"/>
                                <h2 className="serviceName">Application Development </h2>
                                <p className="serviceDescription">Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src="https://img.icons8.com/nolan/64/api-settings.png"/>
                                <h2 className="serviceName">Restful Api </h2>
                                <p  className="serviceDescription">Representational state transfer is a software architectural style that defines a set of constraints to be used for creating Web services.</p>
                            </div>
                        </Col>


                    </Row>
                </Container>


                
            </Fragment>
        );
    }
}

export default Services;