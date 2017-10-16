import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-social__items">
          <li className="footer-social__item">
            <a
              className=" social_link"
              href="http://instagram.com/villagergoods"
              target="_blank"
            >
              <i className={"fa fa-instagram"} />
            </a>
          </li>
          <li className="footer-social__item">
            <a
              className="social_link"
              href="http://facebook.com/villagergoods"
              target="_blank"
            >
              <i className={"fa fa-facebook"} />
            </a>
          </li>
        </ul>
        <ul className="footer__links">
          <li className="footer__list-item">
            <a href="/pages/coconut-water" className="footer__link">
              Coconut Water
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/collections/shop" className="footer__link">
              Shop
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/pages/contact" className="footer__link">
              Contact
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/pages/terms-of-service" className="footer__link">
              Terms of Use
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/pages/privacy-policy" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/pages/faq" className="footer__link">
              FAQs
            </a>
          </li>
        </ul>

        <p className="footer__credit">
          <a
            href="http://codi.tech"
            className="footer__credit-href"
            target="_blank"
          >
            Designed And Developped By
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
