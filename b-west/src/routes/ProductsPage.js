import React from 'react';
import '../styles/StoreLocator.css';
import Header from "../components/Header";
import {STATUS} from "../commanConfig";
import {fetchFindAStoreHeaderData} from "../helpers/index";

const iframe = '<iframe allowfullscreen=\'true\' frameborder="0" width="100%" height="700px"\n' +
    '                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBZ6uoGFiBceh7ni0WpT9B_iA9BO6ERIjA&amp;center=-33.8569%2C151.2152&amp;zoom=11"></iframe>';

class ProductsPage extends React.Component {


    constructor(props, context) {

        super(props, context);
        this.state = {
            status: STATUS.NONE
            , headerData: {
                status: STATUS.READY
                , image: {
                    src: '',
                    alt: ''
                }
                , title: ''
                , subTitle: ''
                , actionButton: {
                    text: ''
                    , actionFunction: ''
                },
                additionalClass: 'find-a-store'
            }
        }

    }

    iframe() {
        return {
            __html: iframe
        }
    }

    componentDidMount() {
        const oldState = this.state;

        this.setState({...oldState, headerData: {...oldState.headerData, status: STATUS.LOADING}});
        fetchFindAStoreHeaderData()
            .then(headerData => {
                this.setState((oldState) => ({
                    ...oldState
                    , status: STATUS.READY
                    , headerData: {...headerData, additionalClass: 'find-a-store'}
                }))
            })

    }


    render() {

        return (
            <div>
                <Header {...this.state.headerData}/>
                <div className="container-fluid store-locator">

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <article className="card fl-left">
                                <section className="date">
                                    <section className="card-cont">
                                        <small>B-West</small>
                                        <h3>Bekaa Store</h3>
                                        <div className="even-date">
                                            <i className="fa fa-map-marker"/>
                                            <div className="address"><span>Address 1</span><span>Address 2</span></div>
                                        </div>
                                        <a>Locate On Map</a></section>
                                </section>
                            </article>
                            <article className="card fl-left">
                                <section className="date">
                                    <section className="card-cont">
                                        <small>B-West</small>
                                        <h3>Bekaa Store</h3>
                                        <div className="even-date"><i className="fa fa-map-marker"/>
                                            <div className="address"><span>Address 1</span><span>Address 2</span></div>
                                        </div>
                                        <a >Locate On Map</a></section>
                                </section>
                            </article>
                            <article className="card fl-left">
                                <section className="date">
                                    <section className="card-cont">
                                        <small>B-West</small>
                                        <h3>Bekaa Store</h3>
                                        <div className="even-date"><i className="fa fa-map-marker"/>
                                            <div className="address"><span>Address 1</span><span>Address 2</span></div>
                                        </div>
                                        <a >Locate On Map</a></section>
                                </section>
                            </article>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7" dangerouslySetInnerHTML={this.iframe()}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {ProductsPage}
