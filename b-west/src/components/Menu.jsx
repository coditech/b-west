import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ menuItems, logo, menuAction }) => {
  const menuOpen = event => {
    const ownmenu = document.getElementById("ownmenu");
    if (ownmenu.classList.contains("open")) {
      ownmenu.classList.remove("open");
    } else {
      ownmenu.classList.add("open");
    }
  };
  const menuClick = event => {
    const ownmenu = document.getElementById("ownmenu");
    if (ownmenu.classList.contains("open")) {
      ownmenu.classList.remove("open");
    }
  };
  return (
    <header className="header">
      <div className="sticky">
        <div className="container">
          <div className="logo">
            <a href={"/"}>
              <img src={logo.src} className={"img-responsive"} alt={logo.alt} />
            </a>
          </div>
          {/* Nav */}
          <nav>
            <ul id="ownmenu" className="ownmenu">
              <li
                className="showhide"
                onClick={event => {
                  menuOpen(event);
                }}
              >
                <span className="title" />
                <span className="icon fa fa-bars" />
              </li>
              {menuItems.map(({ active, url, name }, index) => (
                <li key={index} className={"menu-item "}>
                  <NavLink
                    exact={true}
                    to={url}
                    onClick={event => {
                      menuClick(event);
                    }}
                  >
                    {name}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
