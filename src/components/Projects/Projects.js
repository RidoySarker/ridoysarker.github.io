import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projects(props) {
  const project = props.portfolioData.projects;
  let projectlist;
  projectlist = project.map((data, i) => (
    <Col sm={12} md={6} lg={4} className="p-2">
      <Card className="projectCard">
        <Card.Img variant="top" src={data.imageUrl} />
        <Card.Body>
          <Card.Title className="projectCardTitle">{data.title}</Card.Title>
          <Card.Text className="projectCardDes">{data.description}</Card.Text>
          <a className="btn btn-info" href={data.codeLink}>
            Github
          </a>
          <span> </span>
          <a className="btn btn-info" href={data.link}>
            Demo
          </a>
          <span> </span>
          <a className="btn btn-info" href={data.blink}>
            Backend
          </a>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Fragment>
      <Container className="text-center">
        <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
        <Row>{projectlist}</Row>
      </Container>
    </Fragment>
  );
}

export default Projects;
