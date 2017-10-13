import React from 'react';
import Header from "../../components/Header";
import {STATUS} from "../../commanConfig";
import {fetchHeaderData} from "../api/index";
import {About} from "../../components/About";
import Stories from "../../components/Stories";
import Store from "../../components/Store";
import SmallSlider from "../../components/SmallSlider";


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
        console.log(this.state);
        alert(123);
    };

    componentDidMount() {
        const oldState = this.state;
        this.setState({...oldState, headerData: {...oldState.headerData, status: STATUS.LOADING}});
        fetchHeaderData()
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
                src: '/assets/images/intro/intro-2.png'
                , alt: 'Image One Logo'
            }
            , imageTwo: {
                src: '/assets/images/intro/intro-2.png'
                , alt: 'Image Two Logo'
            }
        }

        const passedStory = {
            story: {
                firstStory: {
                    title: "THE ZAP - BEST PSD TEMPLATE",
                    slogan: "allahu akbar",
                    desc:
                        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
                    image: "/assets/images/intro/intro-2.png",
                    alt: "",
                },
                secondStory: {
                    title: "THE ZAP - BEST PSD TEMPLATE 2",
                    slogan: "allahu akbar 2",
                    desc:
                        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
                    image: "/assets/images/intro/intro-2.png",
                    alt: "",
                },
            }
        };
        return (
            <div>

                {/* End Header */}
                {/*======= HOME MAIN SLIDERs =========*/}
                <Header {...this.state.headerData}/>

                {/* Content */}
                <div id="content">
                    {/* Welcome */}
                    <About {...aboutData}/>
                    <Stories {...passedStory}/>

                    {/* Facts */}
                    <section className="facts style-4 padding-top-90 padding-bottom-90"
                             style={{background: '#f4f4f4'}}>
                        <div className="container-fluid">
                            <div className="row counter">
                                {/* Facts */}
                                <div className="col-md-12">
                                    {/* Icon */}
                                    <img src="/assets/images/fact/icon-1.png" alt={""}/>
                                    <div className="c-style-7 c-text-white"><span className="number"> <span
                                        className="timer" data-speed={2000} data-refresh-interval={100} data-to={35}
                                        data-from={0}>35</span> </span>
                                        <h5>Team Member</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Store */}
                    <Store />
                    {/* Small Slider*/}
                    <SmallSlider />


                </div>
                {/* End Content */}
                {/* Footer */}
                <footer id="footer">
                    <div className="footer-wrapper">
                        {/* Footer Top */}
                        <div className="footer-top">
                            <div className="footer-top-wrapper">
                                <div className="container">
                                    <div className="row">
                                        {/* About Block */}
                                        <div className="col-md-4">
                                            <div className="block block-about">
                                                <h3 className="block-title no-underline"><span
                                                    className="text-primary">Creative Agency from London - UK</span>
                                                </h3>
                                                <div className="block-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley
                                                        of
                                                        type
                                                        and scrambled it to make a type specimen book.</p>
                                                    <img className="footer-logo"
                                                         src="images/footer/footer_logo_1.png"
                                                         alt={""}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End About Block */}
                                        {/* Footer Links Block */}
                                        <div className="col-md-2">
                                            <div className="block block-links">
                                                <h3 className="block-title"><span>Info</span></h3>
                                                <div className="block-content">
                                                    <ul>
                                                        <li><a href="#.">Theme Features</a></li>
                                                        <li><a href="#.">Page Builder</a></li>
                                                        <li><a href="#.">Privacy Policy</a></li>
                                                        <li><a href="#.">Shop Rules</a></li>
                                                        <li><a href="#.">Services</a></li>
                                                        <li><a href="#.">Gallery Layout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Footer Links Block */}
                                        {/* Twitter Widget Block */}
                                        <div className="col-md-3">
                                            <div className="block block-twitter-widget">
                                                <h3 className="block-title"><span>Twitter Widget</span></h3>
                                                <div className="block-content">
                                                    <div className="twitter-item">
                                                        <div className="twitter-content"> Looking for an awesome
                                                            CREATIVE
                                                            WordPress Theme? Esquise was updated and optimized to
                                                            run
                                                            even
                                                            better. Find it here: <a href="http://t.co/0WWEMQEQ48"
                                                                                     target="_blank"
                                                                                     rel="noopener noreferrer">http://t.co/0WWEMQEQ48</a>
                                                        </div>
                                                        <div className="twitter-context"><i
                                                            className="fa fa-twitter"/><span
                                                            className="twitter-date">01 day ago</span></div>
                                                    </div>
                                                    <div className="twitter-item">
                                                        <div className="twitter-content"> It is a long established
                                                            fact
                                                            that
                                                            a reader will be distracted by the readable . Find it
                                                            here:
                                                            <a
                                                                href="http://t.co/0WWEMQEQ48"
                                                                rel="noopener noreferrer"
                                                                target="_blank">http://t.co/0WWEMQEQ48</a>
                                                        </div>
                                                        <div className="twitter-context"><i
                                                            className="fa fa-twitter"/><span
                                                            className="twitter-date">02 days ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Twitter Widget Block */}
                                        {/* Instagram Widget Block */}
                                        <div className="col-md-3">
                                            <div className="block block-instagram-widget">
                                                <h3 className="block-title"><span>Instagram Widget</span></h3>
                                                <ul>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_01.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_02.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_03.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_04.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_05.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                    <li><a href="#.."> <img
                                                        src="images/footer/footer_instagram_06.png"
                                                        alt={""}/> <span className="overlay"><i
                                                        className="fa fa-search"/></span> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Instagram Widget Block */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Footer Top */}
                        {/* Footer Bottom */}
                        <div className="footer-bottom">
                            <div className="footer-bottom-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 copyright">
                                            <p>© 2015 ZAP Creative HTML Template. Designed By wpelite.</p>
                                        </div>
                                        <div className="col-md-6 social-links">
                                            <ul className="right">
                                                <li><a href="#."><i className="fa fa-facebook"/></a></li>
                                                <li><a href="#."><i className="fa fa-twitter"/></a></li>
                                                <li><a href="#."><i className="fa fa-dribbble"/></a></li>
                                                <li><a href="#."><i className="fa fa-behance"/></a></li>
                                                <li><a href="#."><i className="fa fa-pinterest"/></a></li>
                                                <li><a href="#."><i className="fa fa-google-plus"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Footer Bottom */}
                    </div>
                </footer>
                {/* End Footer */}
                {/* GO TO TOP */}
                <a className="cd-top"><i className="fa fa-angle-up"/></a>
                {/* GO TO TOP End */}
            </div>
        )

    }
}

export {HomePage}