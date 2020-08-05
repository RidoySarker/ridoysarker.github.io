import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/project" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/ProjectDetails" component={ProjectDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;