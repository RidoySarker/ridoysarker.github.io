import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
function Skills(props) {

    const data = props.portfolioData;
    let skillList;

    skillList = data.skills.map((s, i) => (
          <div className="col-2" key={i}>
            <div className="site-skill">
              <div className="site-skill__canvas-wrapper">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? s.percentage : 0;
              return (
                <CircularProgressbar
                  value={ percentage } 
                  text={`${ percentage }%`} 
                  className="site-skill__canvas" 
                  styles={buildStyles({                 
                    // Text size
                    textSize: '2rem',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 1,
                  })}                                
                 />  
                  );
            }}
            </VisibilitySensor> 
              </div>
              <div className="site-skill__text"> {s.name}</div>
            </div>           
          </div>          
    ));
    return (
        <Fragment>
               
                <Container className="text-center">
                <h1 className="serviceMainTitle">Skill</h1>
                <Row>
                { skillList } 
                </Row>
                </Container>
        </Fragment>
    )
}

export default Skills
