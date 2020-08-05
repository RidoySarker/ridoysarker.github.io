import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Projects from "../components/Projects/Projects";
import portfolioData from "../data/portfolio";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project"/>
                <PageTop pagetitle="Project List"/>
                <Projects portfolioData={portfolioData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;