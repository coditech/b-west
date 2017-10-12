import React from 'react';


const Header = ({image, title, subTitle}) => {

    const actionFunctionButton = (event) => {
        event.preventDefault();
        alert(123);
    }
    const data = {
        image: {
            src: '../../assets/images/sliders/2/slide-1.jpg',
            alt: 'Header Image'
        }
        , title: 'Hello world this is a title'
        , subTitle: 'Hello world this is a subtitle'
        , actionButton: {
            text: 'Hello World'
            , actionFunction: actionFunctionButton
        }
    }
    return (
        <section className="home-slider">
            <div className="tp-banner-container">
                <div className="tp-banner">
                    <ul>
                        {/* SLIDE  */}
                        <li data-transition="fade" data-slotamount={7} data-masterspeed={300}
                            data-saveperformance="off">
                            {/* MAIN IMAGE */}
                            <img src={data.image.src} alt={data.image.alt}
                                 data-bgposition="center top"
                                 data-bgfit="cover" data-bgrepeat="no-repeat"/>
                            {/* LAYERS */}
                            {/* LAYER NR. 2 */}
                            <div className="tp-caption mediumtext skewfromright tp-resizeme" data-x="center"
                                 data-hoffset={0} data-y="center" data-voffset={0} data-speed={500}
                                 data-start={1400} data-easing="Power3.easeInOut" data-splitin="words"
                                 data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                 data-endspeed={300} style={{zIndex: 6, fontSize: 48, color: '#fff'}}>
                                {data.title}
                            </div>
                            {/* LAYER NR. 3 */}
                            <div className="tp-caption font-italic font-crimson skewfromleft tp-resizeme"
                                 data-x="center" data-hoffset={0} data-y="center" data-voffset={60} data-speed={500}
                                 data-start={1900} data-easing="Power3.easeInOut" data-splitin="none"
                                 data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"
                                 data-endspeed={300} style={{zIndex: 7, color: '#fff', fontSize: 24}}>
                                {data.subTitle}
                            </div>
                            {/* LAYER NR. 4 */}
                            <div className="tp-caption sfb tp-resizeme" data-x="center" data-hoffset={0}
                                 data-y="center" data-voffset={140} data-speed={500} data-start={2300}
                                 data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none"
                                 data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}
                                 style={{zIndex: 8, maxWidth: 'auto', maxHeight: 'auto', whiteSpace: 'nowrap'}}><a
                                className="btn btn-med btn-color"
                                onClick={(event) => data.actionButton.actionFunction(event)}>{data.actionButton.text}</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Header;