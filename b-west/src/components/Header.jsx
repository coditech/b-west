import React from 'react';
import {STATUS} from '../commanConfig';

import './Header.css';
import {NavLink} from "react-router-dom";

const Header = ({status, image, title, subTitle, actionButton}) => {

    console.log('Status ==>>', status);
    if (status === STATUS.LOADING || status === STATUS.NONE) {

        return (
            <section className="home-slider">
                <div className="tp-banner-container">
                    <div className="tp-banner">
                        <ul>
                            {/* SLIDE  */}
                            <li data-transition="fade"
                                data-saveperformance="off">
                                {/* MAIN IMAGE */}

                                {/* LAYERS */}
                                {/* LAYER NR. 2 */}
                                <div className="tp-caption mediumtext skewfromright tp-resizeme" data-x="center"
                                     data-hoffset={0} data-y="center" data-voffset={0}
                                     data-easing="Power3.easeInOut" data-splitin="words"
                                     data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                     style={{zIndex: 6, fontSize: 48, color: '#fff'}}>
                                    B-West
                                </div>
                                {/* LAYER NR. 3 */}
                                <div className="tp-caption font-italic font-crimson skewfromleft tp-resizeme"
                                     data-x="center" data-hoffset={0} data-y="center" data-voffset={60}
                                     data-easing="Power3.easeInOut" data-splitin="none"
                                     data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                     style={{zIndex: 7, color: '#fff', fontSize: 24}}>
                                    B-west Sub title
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

    if (status === STATUS.READY) {
        return (
            <section className="home-slider">
                <div className="tp-banner-container">
                    <div className="tp-banner">
                        <ul>
                            {/* SLIDE  */}
                            <li data-transition="fade"
                                data-saveperformance="off">
                                {/* MAIN IMAGE */}
                                <img src={image.src} alt={image.alt}
                                     data-bgposition="center top"
                                     data-bgfit="cover" data-bgrepeat="no-repeat"/>
                                {/* LAYERS */}
                                {/* LAYER NR. 2 */}
                                <div className="tp-caption mediumtext skewfromright tp-resizeme" data-x="center"
                                     data-hoffset={0} data-y="center" data-voffset={0}
                                     data-easing="Power3.easeInOut" data-splitin="words"
                                     data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                     style={{zIndex: 6, fontSize: 48, color: '#fff'}}>
                                    {title}
                                </div>
                                {/* LAYER NR. 3 */}
                                <div className="tp-caption font-italic font-crimson skewfromleft tp-resizeme"
                                     data-x="center" data-hoffset={0} data-y="center" data-voffset={60}
                                     data-easing="Power3.easeInOut" data-splitin="none"
                                     data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                     style={{zIndex: 7, color: '#fff', fontSize: 24}}>
                                    {subTitle}
                                </div>
                                {/* LAYER NR. 4 */}
                                <div className="tp-caption sfb tp-resizeme" data-x="center" data-hoffset={0}
                                     data-y="center" data-voffset={140}
                                     data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none"
                                     data-elementdelay="0.1" data-endelementdelay="0.1"
                                     style={{zIndex: 8, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}><a
                                    className="btn btn-med btn-color"
                                    onClick={(event) => actionButton.actionFunction(event)}>{actionButton.text}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
    return (<h2>Some error</h2>)
}

const Header2 = ({status, image, title, subTitle, actionButton}) => {

    console.log('Status ==>>', status);
    if (status === STATUS.LOADING || status === STATUS.NONE) {

        return (
            <section className="home-slider">
                <header className="hero">
                    <div className="center-content">
                        <h1>An Article Title</h1>
                        <h3>A longer subtitle but still important</h3>
                        <a className="button">Some Action Here</a>
                    </div>
                </header>
            </section>
        )
    }

    if (status === STATUS.READY) {
        return (
            <section className="home-slider">
                <header className="hero">
                    <div className="center-content">
                        <h1>An Article Title</h1>
                        <h3>A longer subtitle but still important</h3>
                        <a className="button">Some Action Here</a>
                    </div>
                </header>
            </section>

        )
    }
    return (<h2>Some error</h2>)
}

const Header3 = ({status, image, title, subTitle, actionButton}) => {
    const style = {
        backgroundImage: 'url("' + image.src + '")'
    }
    return (

        <div className="jumbotron hero-technology" style={style}>
            <div className={'hero-content'}>
                <h1 className="hero-title">Hero Technology</h1>
                <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
                    dapibus
                    ac
                    facilisis in, egestas eget quam.</p>

                <p>
                    <NavLink to={'/'} className={'btn btn-primary btn-lg hero-button'} role={'button'}>Learn
                        More</NavLink>
                </p>
            </div>
        </div>
    )
}
export {Header2, Header3}
export default Header;