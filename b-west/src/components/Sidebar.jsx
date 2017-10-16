import React from 'react';
import {NavLink} from "react-router-dom";

import '../styles/SideBar.css'

const SideBar = () => {
    const menItems = [
        {name: 'Home', url: '/', active: true}
        , {name: 'Dashboard', url: '/admin', active: true}
        , {name: 'Users', url: '/admin/user', active: false}
    ]


    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">

                {
                    menItems.map(({name, url, active}, index) => {

                        return (
                            <li key={index}>
                                <NavLink className={active ? 'active' : ''} to={url}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}
export {SideBar}