import React, {Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-router-dom";
function TopBanner(props) {
    const data = props.portfolioData;
    return (
        <Fragment>
        <Container fluid={true} className="topFixedBanner p-0" >
            <div className="topBannerOverlay">
               <Container className="topContent">
                   <Row>
                       <Col className="text-center">
                            <h1 className="topTitle">Hi. I'm {data.name}</h1>
                           <h2 className="topSubTitle">I'm a <ReactTypingEffect text="Backend Developer"/></h2>
                           
                           <Button variant="primary"><Link className="link-style" to="/about">More Info</Link></Button>
                       </Col>
                   </Row>
               </Container>
            </div>
        </Container>
    </Fragment>
    )
}

export default TopBanner
