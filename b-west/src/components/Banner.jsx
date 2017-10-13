import React from "react";
import './Banner.css'

const Banner = ({backgroundImage}) => {
    const style = {
        background: "url('" + backgroundImage + "') no-repeat 50% fixed / cover"
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
                            <i className={'fa fa-instagram'} style={{fontSize: '3rem', display: 'block'}}/>
                            @b-west
                        </h2>
                        <h3>Join Our JOIN OUR JOURNEY</h3>
                        <a href={'https://instagram.com'} target={'_blank'} className={'insta_btn'}>Follow Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

{/*<section className="facts style-4 padding-top-90 padding-bottom-90"*/
}
{/*style={{background: '#f4f4f4'}}>*/
}
{/*<div className="container-fluid">*/
}
{/*<div className="row counter">*/
}
{/*/!* Facts *!/*/
}
{/*<div className="col-md-12">*/
}
{/*/!* Icon *!/*/
}
{/*<i className={'fa fa-instagram'} style={{width: '100px'}}/>*/
}
{/*<div className="c-style-7 c-text-white"><span className="number"> <span*/
}
{/*className="timer" data-speed={2000} data-refresh-interval={100} data-to={35}*/
}
{/*data-from={0}>35</span> </span>*/
}
{/*<h5>Team Member</h5>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</section>*/
}
export default Banner;