import React from "react";
import {NavLink} from "react-router-dom";

const Menu = ({menuItems, logo}) => {
    return (
        <header className="header">
            <div className="sticky">
                <div className="container">
                    <div className="logo">
                        <a href={'/'}>
                            <img src={logo.src} className={'img-responsive'} alt={logo.alt}/>
                        </a>
                    </div>
                    {/* Nav */}
                    <nav>
                        <ul id="ownmenu" className="ownmenu">
                            {menuItems.map(({active, url, name}, index) => (
                                <li key={index}>
                                    <NavLink exact={true} to={url}>{name}</NavLink>
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
