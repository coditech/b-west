import React from "react";
import '../styles/FindAStoreBanner.css'
import {NavLink} from "react-router-dom";

const FindAStoreBanner = ({ additionalClass,backgroundImage}) => {
    const style = {
        background: "url('" + backgroundImage + "') no-repeat 50% fixed / cover",
        backgroundAttachment: 'fixed !important',
        backgroundPosition: 'center center !important'
    }
    return (
        <section className={`banner style-4 padding-top-90 padding-bottom-90 ${additionalClass}`} style={style}>
            <div className="container-fluid">
                <div className="row counter">
                    {/* Facts */}
                    <div className="col-md-12">

                        <NavLink to={'/find-a-store'} className={'btn btn-color btn-med find-a-store-btn'}>Find A
                            Store</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FindAStoreBanner;