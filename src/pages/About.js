import React from "react";
import vars from "../elements/constants";

const About = () => (
    
    <div>
        <section className="about-header">
            <h1 className="about-header__heading">
                Manchester-Born <br />
                <span className="about-header__heading--orange">
                    Creative Studio
                </span> <br />
                <span className="about-header__heading--underline" />
            </h1>


            <h3 className="qtext">
                We are a strategic partner to our clients, immersing ourselves in their business and bringing value through the realisation of great ideas with powerful video and animation content.
            </h3>
        </section>


        <section className="about-main">
        <div className="spacer" />
        
        <div className="row no-gutters">

            <div className="col-sm-4">
                <h2 className="heading_huge">THE BEARDED FELLOWS</h2>
                
                <div class="about-left-team">
                    <h3 className="qtext">Artists at heart.</h3>
                    <h3 className="qtext">Makers by trade.</h3>
                    <h3 className="qtext">Marketers by necessity.</h3>
                </div>
                
               
            </div>
            <div className="col-sm-8">
            {
                    vars.team.map( (teamMember, index) => {
                        
                        return (
                            <div key={teamMember.id} className="col-sm-6">
                                <div className="image-box" 
                                    style={{backgroundImage: `url(images/team/${teamMember.profile_picture})`}}>
                                    <div className="image-box__info">
                                        <span className="image-box__category">{teamMember.first_name}</span>
                                        /
                                        <span className="image-box__title">{teamMember.job_position}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                
            
            </div>
        
        </div>
        </section>
    </div>

);

export default About;