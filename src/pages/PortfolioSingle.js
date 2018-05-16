import React from "react";

import Vimeo from "@u-wave/react-vimeo";

import vars from "../elements/constants";


const findProject = (id) => {

    let results = vars.portfolio.filter( (item) => item.id == id);
    return results[0];

}

const findSections = (id) => {

    let results = vars.portfolioSections.filter( (item) => item.portfolio_id == id );
    return results;
}



const findTestimonials = (id) => {

    let results = vars.testimonials.filter( (item) => item.portfolio_id == id );
    return results;
}




const PortfolioSingle = ({ match }) => {
    
    let projectId = match.params.id;
    let project = findProject(projectId);
    console.log("PRJ =", project);
    let sections = findSections(projectId);
    console.log("SECTIONS =", sections);
    let testimonials = findTestimonials(projectId);
    console.log("testimonials=", testimonials);

    const renderDetailRow = (label, value) => {
            
        return value ? ( 
            <div className="twocol-row">
                <label>{label}</label>
                <span>
                    {value}
                </span>
            </div>
        ) : null;
    }

    const renderSection = (section) => {

        let sectionImg = section.image;
        
        if( sectionImg ){

            if( sectionImg.includes('vimeo') ){
                let res = sectionImg.split('_');
                let vimeoId = res[1];

                sectionImg =  <div className="vimeo-wrapper">
                    <Vimeo video={project.main_video.replace(/\s+/,'')} autoplay={false} muted={false} loop={true} />
                </div>;
            } else {
                sectionImg = <img src={`/images/portfolio_sections/${section.image}`} />;
            }
        }
        
        
        

        return (
        <div className="p-section">
            <div className="p-section__title">
                {section.title}
            </div>
            { section['image-align'] == 'center' ? 
                <div className="p-section__content">{sectionImg}</div>
            :
            (
            <div className="p-section__content">
                <div className="col-sm-6 p-section__content--left">
                {
                    section['image-align'] == 'left' ? 
                        sectionImg
                        :
                        <p class="p-section__content--text">{section.content}</p>
                }
                </div>
                <div className="col-sm-6 p-section__content--right">
                {
                    section['image-align'] == 'right' ? 
                        sectionImg
                        :
                        <p class="p-section__content--text">{section.content}</p>
                }
                </div>
                <div className="clearfix" />
            </div>
            )  
            }     
            
        </div>
        );
    }



    return (
    <div>
        <div className="project-header">
            <h1 className="heading_huge">{project.title}</h1>

            <div className="vimeo-wrapper">
                <Vimeo video={project.main_video.replace(/\s+/,'')} autoplay={false} muted={false} loop={true} />
                
                {/* <div className="vimeo-overlay">
                    &nbsp;
                </div> */}
            </div>

            <div className="project-header__details">
                <div className="col-sm-8">
                    { project.main_title && 
                    <h3 className="heading_medium">
                        {project.main_title}
                    </h3>
                    }

                    { project.main_description && 
                    <p className="project-header__description">
                        {project.main_description}
                    </p>
                    }
                </div>
                <div className="col-sm-4">
                    <h3 className="heading_medium">DETAILS</h3>

                    <div className="twocol-list">
                        {renderDetailRow('CATG', vars.portfolioCategories[project.category_id].name)}
                        {renderDetailRow('SERVICES', project.services)}
                        {renderDetailRow('CLIENT', project.client)}
                        
                    </div>
                </div>
                <div className="clearfix spacer" />
                
            </div>
        </div>

        <div class="project-sections">
            {
                sections.map( (section) => renderSection(section) )
            }
        </div>
    </div>
    );
}

export default PortfolioSingle;