import React from 'react';
import {STATUS} from "../commanConfig";
import {About} from "../components/About";
import Stories from "../components/Stories";
import Store from "../components/Store";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {NavLink} from "react-router-dom";
import {SubscribeBanner} from "../components/SubscribeBanner";
import FindAStoreBanner from "../components/FIndAStoreBanner";


class HomePage extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            status: STATUS.NONE,
            homeHeader: props.homeHeader,
            aboutUsHomeSection: props.aboutUsHomeSection,
            featuredStories: props.featuredStories,
            instaBanner: props.instaBanner,
            featuredProducts: props.featuredProducts,
            findAStoereBanner: props.findAStoereBanner,
            subscriberBanner: props.subscriberBanner,
            findAStore: props.findAStore
        }
        this.bindMe([
            'actionFunctionButton'
        ])
    }


    bindMe(methodNames) {
        methodNames.map(methodName =>
            this[methodName] = this[methodName].bind(this)
        )
    }

    actionFunctionButton = (event) => {
        event.preventDefault();
        alert(123);
    };


    render() {
        const {homeHeader, aboutUsHomeSection, featuredStories, subscriberBanner, instaBanner, featuredProducts, findAStore} = this.state;
        const homeHeaderData = {
            title: homeHeader.title,
            content: homeHeader.content,
            image: {
                src: homeHeader.imageSrc,
                alt: homeHeader.imageAlt
            },
            actionButton: {
                show: homeHeader.actionButtonShow,
                text: homeHeader.actionButtonText,
                url: homeHeader.actionButtonUrl
            }

        };

        return (
            <div>

                {/* End Header */}
                {/*======= HOME MAIN SLIDERs =========*/}
                {/*<Header {...this.state.headerData}/>*/}
                {
                    homeHeaderData ? <Header {...homeHeaderData}/> : null
                }

                {/* Content */}
                <div id="content">
                    {/* Welcome */}
                    {
                        aboutUsHomeSection ? <About {...aboutUsHomeSection}/> : null
                    }
                    {
                        featuredStories ? <Stories {...featuredStories}/> : null
                    }
                    {
                        instaBanner ? <Banner {...instaBanner}/> : null
                    }

                    {/* Store */}

                    <section className="shop padding-top-80 padding-bottom-80">
                        {/*<!-- TITTLE -->*/}
                        <div className="container">
                            {/*<!-- MAIN HEADING -->*/}
                            <div className="heading-block text-center">
                                <h3>LATEST PRODUCTS</h3>
                                <hr className="color"/>
                                {/*<span>Tell your Story</span>*/}
                            </div>

                            {
                                featuredProducts ? <Store {...{featuredProducts}}/> : null
                            }
                            <div className="text-center">
                                <NavLink to={'/products#wrap'}
                                         className={'btn btn-large dark-border font-normal margin-top-50 letter-space-1'}>SHOW
                                    MORE</NavLink>
                            </div>
                        </div>
                    </section>
                    {
                        findAStore ? <FindAStoreBanner {...{backgroundImage: findAStore.bannerBackgroundImage}}/> : null
                    }

                    {/* Small Slider*/}
                    {/*<SmallSlider/>*/}


                </div>


                {subscriberBanner ? subscriberBanner.display ?
                    <SubscribeBanner url={subscriberBanner.mailchimpUrl}/> : null : null}

                <a className="cd-top"><i className="fa fa-angle-up"/></a>
                {/* GO TO TOP End */}
            </div>
        )

    }
}

export {HomePage}