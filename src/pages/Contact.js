import React from "react";

import vars from "../elements/constants";

const Contact = () => (
    <div>
        <div className="col-sm-8">
            <h2 className="heading_huge">Say Hello!</h2>
            <h5 className="qtext">Whether you love beards or are interested in working together.</h5>

            <div className="spacer"> </div>
            
            <div className="twocol-row">
                <label>TEL</label>
                <span>{vars.phoneNumber}</span>
            </div>


            <div className="twocol-row">
                <label>ADR</label>
                <span>Office 4, Second Floor, 
                Bridgeworks, 
                67 Bridge Street, 
                M3 3BQ, 
                Manchester, UK</span>
            </div>

            <div className="twocol-row">
                <label>EML</label>
                <span>ideas@beardedfellows.co.uk</span>
            </div>
        </div>
        <div className="col-sm-7">
            <div className="mapContainer">
            </div>
        </div>
    </div>
);

export default Contact;