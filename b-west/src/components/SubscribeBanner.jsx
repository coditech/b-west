import React from "react";
import "../styles/Subscribe.css";

const showForm = event => {
    event.preventDefault();
    document.getElementById('footer__form').style.display = "block";
};

const SubscribeBanner = () => {
    return (

        <div
            className="newsletter-footer js-controller-loaded"
            id="subscriber-section"
            onClick={event => showForm(event)}>
            <div className="newsletter-footer__content">
                <h1 className="newsletter-footer__title a a--fade-up a--animating">
                    NEWSLETTER SIGNUP
                </h1>
                <div className="newsletter-footer__text a a--fade-up a--animating">
                    Sign up and receive 15% off your first purchase.
                </div>
                <div
                    className="newsletter-footer__form displayNone"
                    id="footer__form">
                    <form className="js-component-loaded">
                        <div className="newsletter-footer__input-wrapper">
                            <h1 className="newsletter-footer__title a a--fade-up a--animating">
                                NEWSLETTER SIGNUP
                            </h1>
                            <input
                                className="newsletter-footer__input"
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                            />
                            <button className="newsletter-footer__cta">Subscribe</button>
                        </div>
                        <div className="newsletter-footer__error"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {SubscribeBanner};