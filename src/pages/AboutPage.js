import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import portfolioData from "../data/portfolio";
import Timeline from '../components/Timeline/Timeline';

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="About Me"/>
                <About/>
                <Timeline portfolioData={portfolioData}/>
                <Skills portfolioData={portfolioData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;