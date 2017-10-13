import React from 'react';
import Header from "../../components/Header";
import {STATUS} from "../commanConfig";
import {fetchHeaderData} from "../api/index";


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
        const headerData = fetchHeaderData()
        const newState = {
            ...oldState
            , status: STATUS.READY
            , headerData: headerData
        }
        this.setState(newState);

    }

    render() {
        if (this.state.status === STATUS.NONE) {
            return (
                <h2>None...</h2>
            )
        }
        if (this.state.status === STATUS.LOADING) {
            return (
                <div><h2>Loiding...</h2></div>
            )
        }
        if (this.state.status === STATUS.READY) {
            return (
                <div>

                    {/* End Header */}
                    {/*======= HOME MAIN SLIDERs =========*/}
                    <Header {...this.state.headerData}/>

                    {/* Content */}
                    <div id="content">
                        {/* Welcome */}
                        <section className="welcome intro-style-2 padding-top-80  dark-pattern">
                            <div className="container">
                                <div className="row">
                                    {/* Intro Text */}
                                    <div className="col-md-5">
                                        <div className="heading-block no-margin">
                                            <h2 className="no-margin margin-top-30 text-transform-none">Growth up</h2>
                                            <h1 className="no-margin margin-bottom-30 ">your business</h1>
                                            <span className="margin-bottom-10">Welcome The ZAP - Best solution for Creative Website</span>
                                        </div>
                                        <hr/>
                                        <p className="font-crimson">These cases are perfectly simple and easy to
                                            distinguish. In
                                            a free hour, when our power of choice is untrammelled and when nothing
                                            prevents
                                            our
                                            being able to do what we like best, every pleasure is to be welcomed and
                                            every
                                            pain
                                            avoided. But in certain circumstances and owing to the claims of duty or the
                                            obligations of business it will frequently occur that pleasures have to be
                                            repudiated and annoyances accepted. </p>
                                    </div>
                                    {/* Intro Image */}
                                    <div className="col-md-7 text-center"><a href="#."> <img className="responsive-img"
                                                                                             src="../../assets/images/intro/intro-2.png"
                                                                                             alt="Intro "/> </a></div>
                                </div>
                            </div>
                        </section>
                        {/* OUR CORE FEATURES */}
                        <section className="padding-top-80 padding-bottom-80">
                            <div className="container">
                                {/* Intro Style 2 */}
                                <div className="intro-5 margin-top-20">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="heading-block no-margin-bottom margin-top-100"><span
                                                className="margin-bottom-15 margin-top-20">We work with passion</span>
                                                <h2 className="margin-bottom-20 margin-top-1">WE ARE CREATIVE
                                                    AGENCY</h2>
                                            </div>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim
                                                ipsam
                                                voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                                            <a href="#."
                                               className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ
                                                MORE</a></div>
                                        {/* Image */}
                                        <div className="col-md-6"><img className="img-responsive"
                                                                       src="images/intro/intro-5.png"
                                                                       alt={""}/></div>
                                    </div>
                                </div>
                                {/* Intro Style 5 */}
                                <div className="intro-5 margin-top-20">
                                    <div className="row">
                                        {/* Image */}
                                        <div className="col-md-6"><img className="img-responsive"
                                                                       src="images/intro/intro-6.png"
                                                                       alt={""}/></div>
                                        <div className="col-md-6">
                                            <div className="heading-block no-margin-bottom margin-top-0"><span
                                                className="margin-bottom-15">A truly multi - concept theme</span>
                                                <h2 className="margin-bottom-20 margin-top-1">THE ZAP - BEST PSD
                                                    TEMPLATE</h2>
                                            </div>
                                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum
                                                necessitatibus
                                                saepe
                                                eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                                Itaque
                                                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                                voluptatibus
                                                maiores alias consequatur aut perferendis doloribus asperiores
                                                repellat.</p>
                                            <a href="#."
                                               className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ
                                                MORE</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
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
                        {/* Blog */}
                        <section className="blog padding-top-80 padding-bottom-80">
                            {/* TITTLE */}
                            <div className="container">
                                {/* MAIN HEADING */}
                                <div className="heading-block text-center">
                                    <h3>LATEST BLOG</h3>
                                    <hr className="color"/>
                                    <span>Tell your Story</span></div>
                                {/* BLOG ROW */}
                                <div className="row">
                                    {/* BLOG POST */}
                                    <div className="col-md-4">
                                        <article className="blog-post">
                                            <div className="post-img"><img src="/assets/images/blog/2/blog-1.png"
                                                                           alt={""}/>
                                            </div>
                                            {/* BLOG DETAIL */}
                                            <a href="#." className="tittle-post"> Faster Response Time with Reverse </a>
                                            <span
                                                className="post-bt">by <span
                                                className="text-color-primary">Natasha</span></span>
                                            <ul className="post-info">
                                                <li><i className="fa fa-comments-o"/>97</li>
                                                <li><i className="fa fa-eye"/>565</li>
                                                <li><i className="fa fa-bookmark-o"/>Photography</li>
                                                <li><span className="date font-crimson">27 JAN</span></li>
                                            </ul>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                molestias
                                                excepturi sint occaecati cupiditate non provident</p>
                                            <a href="#."
                                               className="btn gray-border margin-top-20 text-normal">READMORE</a>
                                        </article>
                                    </div>
                                    {/* BLOG POST */}
                                    <div className="col-md-4">
                                        <article className="blog-post">
                                            <div className="post-img"><img src="/assets/images/blog/2/blog-2.png"
                                                                           alt={""}/>
                                            </div>
                                            {/* BLOG DETAIL */}
                                            <a href="#." className="tittle-post"> Faster Response Time with Reverse </a>
                                            <span
                                                className="post-bt">by <span
                                                className="text-color-primary">Natasha</span></span>
                                            <ul className="post-info">
                                                <li><i className="fa fa-comments-o"/>97</li>
                                                <li><i className="fa fa-eye"/>565</li>
                                                <li><i className="fa fa-bookmark-o"/>Photography</li>
                                                <li><span className="date font-crimson">27 JAN</span></li>
                                            </ul>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                molestias
                                                excepturi sint occaecati cupiditate non provident</p>
                                            <a href="#."
                                               className="btn gray-border margin-top-20 text-normal">READMORE</a>
                                        </article>
                                    </div>
                                    {/* BLOG POST */}
                                    <div className="col-md-4">
                                        <article className="blog-post">
                                            <div className="post-img"><img src="/assets/images/blog/2/blog-3.png"
                                                                           alt={""}/>
                                            </div>
                                            {/* BLOG DETAIL */}
                                            <a href="#." className="tittle-post"> Faster Response Time with Reverse </a>
                                            <span
                                                className="post-bt">by <span
                                                className="text-color-primary">Natasha</span></span>
                                            <ul className="post-info">
                                                <li><i className="fa fa-comments-o"/>97</li>
                                                <li><i className="fa fa-eye"/>565</li>
                                                <li><i className="fa fa-bookmark-o"/>Photography</li>
                                                <li><span className="date font-crimson">27 JAN</span></li>
                                            </ul>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                molestias
                                                excepturi sint occaecati cupiditate non provident</p>
                                            <a href="#."
                                               className="btn gray-border margin-top-20 text-normal">READMORE</a>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>

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
        if (this.state.status === STATUS.ERROR) {
            return (
                <h2>Error</h2>
            )
        }

    }
}

export {HomePage}