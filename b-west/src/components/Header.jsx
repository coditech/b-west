import React from 'react';
import {STATUS} from '../commanConfig';

import '../styles/Header.css';
import {NavLink} from "react-router-dom";

const Header = ({status, image, title, subTitle, actionButton, additionalClass, content}) => {
    let styleReady = {};
    if (image) {
        styleReady = {
            backgroundImage: 'url("' + image.src + '")'
        }
    } else {
        additionalClass +=' dark-pattern'
    }

        return (

            <div className={"jumbotron hero-technology " + additionalClass} style={styleReady}>
                <div className={'hero-content'}>

                    {
                        title ? <h2 className="hero-title">{title}</h2> : null

                    }
                    {
                        subTitle ? <h3>{subTitle}</h3> : null
                    }
                    {
                        content ? <div className={'header-content'} dangerouslySetInnerHTML={{__html: content}}/> : null
                    }


                    {actionButton ?
                        <NavLink to={actionButton} onClick={(event) => actionButton.actionFunction(event)}
                                 className={'btn btn-primary btn-lg hero-button'}
                                 role={'button'}>{actionButton.text}</NavLink> : null}

                </div>
            </div>

        )

}

export default Header;