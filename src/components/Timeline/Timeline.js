import React, { Component } from 'react';

const Timeline  = (props) => {
  const data = props.portfolioData;
  let expList;
  expList = data.education.map((exp, i) => (
    <div className="stepper__list" key={ i }>
      <div className="stepper__item">
        <div className="stepper__step">
          <div className="stepper__timeline">
            <div className="stepper__circle"> </div>
           
            <div className="stepper__timeline-Topheading">  { exp.date }   </div>
            <div className="stepper__timeline-heading"> { exp.title }   </div>
          </div>
        </div>
        <div className="stepper__info">
          <div className="stepper__body">
            <h3 className="stepper__title"> { exp.institute }</h3>
            <div className="stepper__sub"> { exp. description } </div>
          </div>
        </div>              
      </div>
    </div>     
  ))
    let workList;
    workList = data.work.map((work, i) => (
    <div className="stepper__list" key={ i }>
      <div className="stepper__item">
        <div className="stepper__step">
          <div className="stepper__timeline">
            <div className="stepper__circle"> </div>
           
            <div className="stepper__timeline-Topheading">  { work.date }   </div>
            <div className="stepper__timeline-heading"> { work.title }   </div>
          </div>
        </div>
        <div className="stepper__info">
          <div className="stepper__body">
            <h3 className="stepper__title"> { work.company }</h3>
            <div className="stepper__sub"> { work. description } </div>
          </div>
        </div>              
      </div>
    </div>     
  ))
	return(
    <section className="site-section  site-section--with-background">
      <div className="container">
          <div className="site-section__icon stroke-white">

          </div>        
        <h1 className="site-heading text-white"> Education  </h1>
        <div className="stepper">
           { expList }                             
        </div>

        <h1 className="site-heading text-white"> Work  </h1>
        <div className="stepper">
           { workList }                             
        </div> 
      </div>
    </section>	  
		)
}



export default Timeline ;
