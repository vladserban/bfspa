import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import { Link } from "react-router-dom";

import vars from "../elements/constants";
import Portfolio from "./Portfolio";
import PortfolioBox from "../elements/portfolio-box";
import PortfolioSingle from "./PortfolioSingle";

const Home = () => {
    
    
    return (
    <section>
        <div className="row">
            <div className="vimeo-wrapper">
                <Vimeo video="226016174" autoplay={true} muted={true} loop={true} />
                
                <div className="vimeo-overlay">
                    <h1 className="vimeo-overlay__heading">
                        Manchester-Born <br />
                        <span className="vimeo-overlay__heading--orange">
                            Creative Studio
                        </span> <br />
                        <span className="vimeo-overlay__heading--underline" />
                    </h1>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="spacer" />
            <h2 className="heading_huge">
            GUIDING YOUR BUSINESSES GROWTH THROUGH COMPELLING CONTENT
            </h2>

            <div className="spacer" />
        </div>

        <div className="row no-gutters">
            <div className="col-xs-12 col-sm-4">
                <h2 className="heading_huge">THE BEARDED APPROACH</h2>
            </div>
            <div className="col-xs-12 col-sm-8">
                {
                    vars.homeBoxes.map( (homebox) => {
                        return <HomeBox key={homebox.id} {...homebox} />
                    })
                }
            </div>

        </div>


        <div className="spacer" />
        
        <div className="row no-gutters">
                <div className="col-xs-12 col-sm-6">
                    <h2 className="heading_huge">AWARD WINNING PROJECTS</h2>
                </div>
                {
                    vars.portfolio.map( (project, index) => {
                        
                        return index < 5 ? (
                            <div key={project.id} className="col-xs-6 col-sm-3">
                                <PortfolioBox {...project} />
                            </div>
                        ): null;
                    })
                }
                <div className="col-xs-6 col-sm-3">
                    <div className="portfolio-box">
                        <div className="portfolio-box__more">
                        <Link to="/portfolio">
                            <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                            More over here
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    );
}


const HomeBox = (props) => (
    <div className="home-box col-sm-6">
        <div className="home-box__content">
            <h4 className="home-box__title">{props.title}</h4>
            <p className="home-box__description">{props.content}</p>
        </div>
    </div>
);

// const PortfolioBox = (props) => (
//     <div className="portfolio-box" style={{backgroundImage: `url(images/portfolio_thumbs/${props.thumbnail})`}}>
//         <div className="portfolio-box__info">
//             <span className="portfolio-box__category">{vars.portfolioCategories[props.category_id].name}</span>
//             /
//             <span className="portfolio-box__title">{props.title}</span>
//         </div>
//     </div>
// )


export default Home;