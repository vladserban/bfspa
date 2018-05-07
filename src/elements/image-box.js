import React from "react";
import vars from "../elements/constants";

const ImageBox = (props) => (

    <div className="image-box" 
        style={{backgroundImage: `url(${props.image})`}}>
        <div className="image-box__info">
            <span className="image-box__category">{vars.portfolioCategories[props.category_id].name}</span>
            /
            <span className="image-box__title">{props.title}</span>
        </div>
    </div>
);

export default PortfolioBox;