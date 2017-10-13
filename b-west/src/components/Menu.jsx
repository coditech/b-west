import React from "react";
import {NavLink} from "react-router-dom";

const dataTest = [
    {
        name: "Home",
        url: "/asd",
        active: false
    },
    {
        name: "Home2",
        url: "/asd2",
        active: true
    },
    {
        name: "Home3",
        url: "/asd3",
        active: false
    }
];

const Menu = ({menu}) => {
    return (
        <header className="header">
            <div className="sticky">
                <div className="container">
                    <div className="logo">
                        <a href={'/'}>
                            <img src="/assets/images/logo.png" alt={""}/>
                        </a>
                    </div>
                    {/* Nav */}
                    <nav>
                        <ul id="ownmenu" className="ownmenu">
                            {dataTest.map((menuItem, index) => (
                                <li className={menuItem.active ? "active" : ""} key={index}>
                                    <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
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
