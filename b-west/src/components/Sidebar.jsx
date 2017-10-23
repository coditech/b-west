import React from 'react';
import {NavLink} from "react-router-dom";

import '../styles/SideBar.css'

const SideBar = () => {
    const menItems = [
        {name: 'Home', url: '/'}
        , {name: 'Dashboard', url: '/admin'}
        , {name: 'Users', url: '/admin/user'}
        , {name: 'About Us', url: '/admin/aboutpage'}
        , {name: 'About Us Home Page', url: '/admin/aboutus-home'}
        , {name: 'Contact Us', url: '/admin/contact-us'}
        , {name: 'Products', url: '/admin/products'}
    ];


    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">

                {
                    menItems.map(({name, url}, index) => {

                        return (
                            <li key={index}>
                                <NavLink exact={true} to={url}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

};
export {SideBar}