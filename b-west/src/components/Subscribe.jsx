import React from "react";
import { render } from "react-dom";

import "../styles/Subscribe.css";

const onMouseEnter = event => {
  document.getElementById('footer__form').style.display = "block";
  };

const SubscribeBanner = () => {
  return (
    <div
      className="newsletter-footer js-controller-loaded"
      id="subscriber-section"
      onMouseEnter={event => onMouseEnter(event)}
      onMouseLeave={event =>
        setTimeout(() => {
          // alert("leave");
          onMouseLeave(event);
        }, 5000)}
      onClick={event => {
        alert(123);
      }}
     
    >
      <div className="newsletter-footer js-controller-loaded">
        <div className="newsletter-footer__content">
          <h1 className="newsletter-footer__title a a--fade-up a--animating">
            NEWSLETTER SIGNUP
          </h1>
          <div className="newsletter-footer__text a a--fade-up a--animating">
            Sign up and receive 15% off your first purchase.
          </div>
          <div
            className="newsletter-footer__form displayNone"
                        id="footer__form"
          >
            <form
              action="//villagergoods.us12.list-manage.com/subscribe/post?u=fe5323ebbb5534fd950e2491f&amp;id=83003db6a2"
              method="POST"
              js-component="mailchimp"
              novalidate="true"
              className="js-component-loaded"
            >
              <div className="newsletter-footer__input-wrapper">
                <h1 className="newsletter-footer__title a a--fade-up a--animating">
                  NEWSLETTER SIGNUP
                </h1>
                <input
                  className="newsletter-footer__input"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Email Address"
                />
                <button className="newsletter-footer__cta">Subscribe</button>
              </div>
              <div
                className="newsletter-footer__error"
                js-newsletter-error=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export {SubscribeBanner};