import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = ({ menuItems }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-social__items">
          <li className="footer-social__item">
            <a
              className="social_link"
              href="http://instagram.com/villagergoods"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={"fa fa-instagram"} />
            </a>
          </li>
          <li className="footer-social__item">
            <a
              className="social_link"
              href="http://facebook.com/villagergoods"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={"fa fa-facebook"} />
            </a>
          </li>
        </ul>

        <ul className="footer__links">
          {menuItems.map(({ url, name }, index) => (
            <li key={index} className={"footer__list-item"}>
              <NavLink exact={true} to={url} className={"footer__link"}>
                {name + "    "}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="footer__credit">
          <a
            href="http://codi.tech"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
           <span className={'licence'}> Designed And Developped By </span>
            <img src={"/codi-logo-white.svg"} alt={'Codi Logo'} className={"footer-logo-codi"} />
          </a>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
