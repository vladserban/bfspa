import React from "react";
import { Link } from "react-router-dom";


import vars from "../elements/constants";

const PortfolioBox = (props) => (
    <Link to={`/portfolio/${props.id}`}>

    <div className="portfolio-box" 
        style={{backgroundImage: `url(images/portfolio_thumbs/${props.thumbnail})`}}>
        <div className="portfolio-box__info">
            <span className="portfolio-box__category">{vars.portfolioCategories[props.category_id].name}</span>
            /
            <span className="portfolio-box__title">{props.title}</span>
        </div>
    </div>
    </Link>
);

export default PortfolioBox;