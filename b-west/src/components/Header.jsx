import React from 'react';
import {STATUS} from '../commanConfig';

import '../styles/Header.css';
import {NavLink} from "react-router-dom";

const Header = ({status, image, title, subTitle, actionButton, additionalClass}) => {
    const styleReady = {
        backgroundImage: 'url("' + image.src + '")'
    }
    if (status === STATUS.LOADING || status === STATUS.NONE) {

        return (
            <div className={"jumbotron hero-technology " + additionalClass}>
                <div className={'hero-content'}>
                    <h1 className="hero-title">B-West</h1>
                </div>
            </div>
        )
    }
    if (status === STATUS.READY) {
        return (

            <div className={"jumbotron hero-technology " + additionalClass} style={styleReady}>
                <div className={'hero-content'}>

                    {
                        title ? <h1 className="hero-title">{title}</h1> : null

                    }
                    {
                        subTitle ? <p className="hero-subtitle">{subTitle}</p> : null
                    }


                    {actionButton ? <p>
                        <NavLink to={actionButton} onClick={(event) => actionButton.actionFunction(event)}
                                 className={'btn btn-primary btn-lg hero-button'}
                                 role={'button'}>{actionButton.text}</NavLink>
                    </p> : null}

                </div>
            </div>

        )
    } else {
        return (
            <div className={"jumbotron hero-technology " + additionalClass}
                 style={{minHeight: '200px', background: 'black'}}>
                <div className={'hero-content'}>
                    <h1 className="hero-title">Something went wrong</h1>
                </div>
            </div>

        )
    }
}
export default Header;