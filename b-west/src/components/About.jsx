import React from "react";
import {NavLink} from "react-router-dom";

const About = ({title, subTitle, content, imageOne, imageTwo}) => {
    console.log('content', content)
    return (
        <section className="welcome intro-style-2 padding-top-80  dark-pattern">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="heading-block no-margin">

                            <h1 className="no-margin margin-bottom-30 ">
                                {title}
                            </h1>

                            <span className="margin-bottom-10">{subTitle}</span>
                            <div className="font-crimson" dangerouslySetInnerHTML={{__html: content}}/>

                            <NavLink to={'/about-us'}
                                     className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ&nbsp;
                                MORE
                            </NavLink>

                        </div>
                    </div>
                    <br/>

                    <div className="col-md-7 text-center">
                        <div className="row" style={{position: 'relative'}}>
                            <div className={'col-'}  style={{position: 'absolute'}}>
                                <img
                                    className=""
                                    src={imageOne.src}
                                    alt={imageOne.alt}
                                />
                            </div>
                            <div className={'col-xs-6 col-xs-push-6'}>
                                <img
                                    className=""
                                    src={imageTwo.src}
                                    alt={imageTwo.alt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {About};