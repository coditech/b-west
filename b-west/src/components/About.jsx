import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/About.css'

const About = ({title, subTitle, content, imageOneSrc, imageOneAlt, imageTwoSrc, imageTwoAlt}) => {
    return (
        <section className="welcome intro-style-2 padding-top-20  padding-bottom-20 dark-pattern about-us">
            <div className="container">
                <div className="row  vertical-center">
                    <div className="col-md-6 text-center">
                        <div className="heading-block no-margin">

                            <h2 className="no-margin margin-bottom-30  title">
                                {title}
                            </h2>

                            <h3 className="margin-bottom-10 subtitle">{subTitle}</h3>
                            <div className="font-crimson content" dangerouslySetInnerHTML={{__html: content}}/>

                            <NavLink to={'/about-us'}
                                     className="btn btn-large font-normal margin-top-50 letter-space-1">READ&nbsp;
                                MORE
                            </NavLink>

                        </div>
                    </div>
                    <br/>

                    <div className="col-md-6 text-center about-image-block">
                        <div className={' image img-responsive'}>
                            <img
                                className=""
                                src={imageTwoSrc}
                                alt={imageOneAlt}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export {About};