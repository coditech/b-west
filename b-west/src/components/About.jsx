import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/About.css'

const About = ({title, subTitle, content, imageOne, imageTwo}) => {
    console.log('content', content)

    const style = {
        maxHeight: '500px',
        overflow: 'hidden'
    }
    return (
        <section className="welcome intro-style-2 padding-top-20  padding-bottom-20 dark-pattern about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-center">
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

                    <div className="col-md-7 text-center about-image-block">
                        <div className={' image1'}>
                            <img
                                className=""
                                src={imageOne.src}
                                alt={imageOne.alt}
                            />
                        </div>
                        <div className={' image2'} style={style}>
                            <img
                                className="img-responsive"
                                src={imageTwo.src}
                                alt={imageTwo.alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {About};