import React from 'react';
import {STATUS} from "../commanConfig";
import {About} from "../components/About";
import Stories from "../components/Stories";
import Store from "../components/Store";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {NavLink} from "react-router-dom";
import {SubscribeBanner} from "../components/SubscribeBanner";
import {FindAStorePage} from "./FindAStorePage";
import FindAStoreBanner from "../components/FIndAStoreBanner";


class HomePage extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            status: STATUS.NONE
            , homeHeader: props.homeHeader,
            aboutUsHomeSection: props.aboutUsHomeSection,
            featuredStories: props.featuredStories,
            instaBanner: props.instaBanner,
            featuredProducts: props.featuredProducts,
            findAStoereBanner: props.findAStoereBanner
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
        const {homeHeader, aboutUsHomeSection, featuredStories, instaBanner, featuredProducts, findAStoereBanner} = this.state;
        return (
            <div>

                {/* End Header */}
                {/*======= HOME MAIN SLIDERs =========*/}
                {/*<Header {...this.state.headerData}/>*/}
                <Header {...homeHeader}/>
                {/* Content */}
                <div id="content">
                    {/* Welcome */}
                    <About {...aboutUsHomeSection}/>
                    <Stories {...featuredStories}/>
                    <Banner {...instaBanner}/>
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

                            <Store {...{featuredProducts}}/>
                            <div className="text-center">
                                <NavLink to={'/products#wrap'}
                                         className={'btn btn-large dark-border font-normal margin-top-50 letter-space-1'}>SHOW
                                    MORE</NavLink>
                            </div>
                        </div>
                    </section>
                    <FindAStoreBanner {...{backgroundImage: findAStoereBanner.backgroundImage}}/>
                    {/* Small Slider*/}
                    {/*<SmallSlider/>*/}


                </div>
                {/* End Content */}
                {/* Footer */}


                <SubscribeBanner/>
                {/* End Footer */}
                {/* GO TO TOP */}
                <a className="cd-top"><i className="fa fa-angle-up"/></a>
                {/* GO TO TOP End */}
            </div>
        )

    }
}

export {HomePage}