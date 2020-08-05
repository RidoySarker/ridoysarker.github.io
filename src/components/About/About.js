import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import myimage from '../../asset/image/my-image.jpg';
class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={12}>
                        <img className="myimage" src={myimage}/> 
                        </Col>
                        <Col>
                            <h1 className="aboutme">About Me</h1>  
                            <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail" className="form-flex">
                                <Form.Label column sm="2">
                                Name:
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="Ridoy Chandra Sarker" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail" className="form-flex">
                                <Form.Label column sm="2">
                                Address:
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="Kazipara , Mirpur-10 , Dhaka" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail" className="form-flex">
                                <Form.Label column sm="2">
                                Email:
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="csridoy42@gmail.com" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail" className="form-flex">
                                <Form.Label column sm="2">
                                Phone:
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="+8801883448329" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail" className="form-flex">
                                <Form.Label column sm="2">
                                Github:
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="https://github.com/RidoySarker" />
                                </Col>
                            </Form.Group>

                            </Form>
                            <a href="../../../Image/Ridoy_Chandra_Sarker.pdf" className="btn btn-primary">DOWNLOAD CV</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;