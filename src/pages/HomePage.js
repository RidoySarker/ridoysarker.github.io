import React, {Component,Fragment} from 'react';
import About from "../components/About/About";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import portfolioData from "../data/portfolio";
import Timeline from '../components/Timeline/Timeline';
import '../sass/main.scss';
class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Ridoy Chandra Sarker"/>
                <TopBanner portfolioData={portfolioData}/>
                <About/>
                <Timeline portfolioData={portfolioData}/>
                <Skills portfolioData={portfolioData}/>
                <Projects portfolioData={portfolioData}/>
                <Services/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;