import React from "react";
import {NavLink} from "react-router-dom";

const About = ({title, subTitle, content, imageOne, imageTwo}) => {

    return (
        <section className="welcome intro-style-2 padding-top-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="heading-block no-margin">

                            <h1 className="no-margin margin-bottom-30 ">
                                {title}
                            </h1>
                            <span className="margin-bottom-10">{subTitle}</span>

                            <NavLink to={'/about-us'}
                                     className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ&nbsp;
                                MORE
                            </NavLink>

                        </div>
                        <p className="font-crimson"  dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                    <br/>

                    <div className="col-md-7 text-center">

                        <img
                            className="responsive-img"
                            src={imageOne.src}
                            alt={imageOne.alt}
                        />
                        <img
                            className="responsive-img"
                            src={imageTwo.src}
                            alt={imageTwo.alt}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export {About};