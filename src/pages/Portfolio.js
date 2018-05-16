import React from "react";

import vars from "../elements/constants";
import PortfolioBox from "../elements/portfolio-box";


class Portfolio extends React.Component {

    constructor(props){
        super(props);


    }

    renderItems() {

    }

    render() {
        return (
            <div>
                {/* <section className="section-filters">
                    <div className="row no-gutters">
                    
                        <div className="col-xs-12">
                            <div className="filters">
                                <ul className="filters__links">
                                    <li><a href="#">All</a></li>
                                    <li><a href="#">Animation</a></li>
                                    <li><a href="#">Live Action</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section-items">
                    <div className="row no-gutters">
                    {
                        vars.portfolio.map( (project, index) => {
                            
                            return (
                                <div key={project.id} className="col-xs-12 col-sm-4">
                                    <PortfolioBox {...project} />
                                </div>
                            );
                        })
                    }
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;