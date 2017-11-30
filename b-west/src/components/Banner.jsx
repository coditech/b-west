import React from "react";
import '../styles/Banner.css'

const Banner = ({backgroundImage}) => {
    const style = {
        backgroundImage: "url('" + backgroundImage + "')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50% fixed / cover'
    }

    return (
        <section className="banner style-4 padding-top-90 padding-bottom-90"
                 style={style}>
            <div className="container-fluid">
                <div className="row counter">
                    {/* Facts */}
                    <div className="col-md-12">
                        {/* Icon */}
                        <h2>
                            <i className={'fa fa-instagram insta-logo'}/>
                            @b-west
                        </h2>
                        <h3>Join Our JOIN OUR JOURNEY</h3>
                        <a href={'https://instagram.com/bwestngo/'} target={'_blank'}
                           className={' btn btn-color btn-med insta_btn'}>Follow Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Banner;