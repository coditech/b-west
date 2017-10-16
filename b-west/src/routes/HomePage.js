import React from 'react';
import {STATUS} from "../commanConfig";
import {fetchHomeHeaderData} from "../helpers/index";
import {About} from "../components/About";
import Stories from "../components/Stories";
import Store from "../components/Store";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {NavLink} from "react-router-dom";


class HomePage extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            status: STATUS.NONE
            , headerData: {
                status: STATUS.NONE
                , image: {
                    src: '',
                    alt: ''
                }
                , title: ''
                , subTitle: ''
                , actionButton: {
                    text: ''
                    , actionFunction: ''
                }
            }
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

    componentDidMount() {
        const oldState = this.state;

        this.setState({...oldState, headerData: {...oldState.headerData, status: STATUS.LOADING}});
        fetchHomeHeaderData()
            .then(headerData => {
                this.setState((oldState) => ({
                    ...oldState
                    , status: STATUS.READY
                    , headerData: headerData
                }))
            })

    }

    render() {
        const aboutData = {
            title: 'B-West'
            , subTitle: 'B-West Hon-Kong'
            , content: '<p>Hello world <a></a><p>'
            , imageOne: {
                src: '/beityLogo.png'
                , alt: 'Image One Logo'
            }
            , imageTwo: {
                src: '/b-westAboutImage2.jpg'
                , alt: 'Image Two Logo'
            }
        }

        const passedStory = {
            story: {
                firstStory: {
                    title: "THE ZAP - BEST PSD TEMPLATE",
                    slogan: "slogan here",
                    desc:
                        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
                    image: "/villagers1.jpg",
                    alt: "",
                },
                secondStory: {
                    title: "THE ZAP - BEST PSD TEMPLATE 2",
                    slogan: "slogan here 2",
                    desc:
                        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
                    image: "/villagers2.jpg",
                    alt: "",
                },
            }
        };
        return (
            <div>

                {/* End Header */}
                {/*======= HOME MAIN SLIDERs =========*/}
                {/*<Header {...this.state.headerData}/>*/}
                <Header {...this.state.headerData}/>
                {/* Content */}
                <div id="content">
                    {/* Welcome */}
                    <About {...aboutData}/>
                    <Stories {...passedStory}/>
                    <Banner {...{backgroundImage: '/followus.jpg'}}/>
                    {/* Facts */}


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

                            <Store/>
                            <div className="text-center">
                                <NavLink to={'/products'} className={'btn btn-large dark-border font-normal margin-top-50 letter-space-1'}>SHOW MORE</NavLink>
                            </div>
                        </div>
                    </section>
                    {/* Small Slider*/}
                    {/*<SmallSlider/>*/}


                </div>
                {/* End Content */}
                {/* Footer */}

                

                {/* End Footer */}
                {/* GO TO TOP */}
                <a className="cd-top"><i className="fa fa-angle-up"/></a>
                {/* GO TO TOP End */}
            </div>
        )

    }
}

export {HomePage}