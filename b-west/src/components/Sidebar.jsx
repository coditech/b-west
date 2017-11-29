import React from 'react';
import {NavLink} from "react-router-dom";

import '../styles/SideBar.css'

const SideBar = () => {
    const menItems = [
        {name: 'Home', url: '/'}
        , {name: 'Dashboard', url: '/admin'}
        , {name: 'Users', url: '/admin/users'}
        , {name: 'About Us', url: '/admin/aboutpage'}
        , {name: 'About Us Home Page', url: '/admin/aboutus-home'}
        , {name: 'Contact Us', url: '/admin/contact-us'}
        , {name: 'Featured Products', url: '/admin/featured-products'}
        , {name: 'Products', url: '/admin/products'}
        , {name: 'Find A Store Header', url: '/admin/find-a-store-header'}
        , {name: 'Find A Store', url: '/admin/find-a-store'}
        , {name: 'Home Header', url: '/admin/home-header'}
        , {name: 'Instagram Banner', url: '/admin/instagram-banner'}
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