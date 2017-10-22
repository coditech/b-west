import React from 'react';
import {NavLink} from "react-router-dom";

import '../styles/SideBar.css'

const SideBar = () => {
    const menItems = [
        {name: 'Home', url: '/'}
        , {name: 'Dashboard', url: '/admin'}
        , {name: 'Users', url: '/admin/user'}
        , {name: 'About Us', url: '/admin/aboutpage'}
    ]


    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">

                {
                    menItems.map(({name, url, active}, index) => {

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

}
export {SideBar}