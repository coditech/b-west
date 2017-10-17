import React from 'react';
import '../styles/StoreLocator.css';
import Header from "../components/Header";


const iframe = '<iframe allowfullscreen=\'true\' frameborder="0" width="100%" height="700px"\n' +
    '                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBZ6uoGFiBceh7ni0WpT9B_iA9BO6ERIjA&amp;center=-33.8569%2C151.2152&amp;zoom=11"></iframe>';

class FindAStorePage extends React.Component {


    constructor(props, context) {

        super(props, context);
        this.state = {
            findAStore: props.findAStore
        }

    }

    iframe() {
        return {
            __html: iframe
        }
    }


    render() {

        const {findAStore} = this.state;
        return (
            <div>
                <Header {...findAStore.header} additionalClass={'find-a-store'}/>
                <div className="container store-locator margin-top-80">

                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 store-container">
                            {
                                findAStore.stores.map(({name, location, address}, index) => {

                                    return (
                                        <article className="card fl-left" key={index}>
                                            <section className="location">
                                                <section className="card-cont">
                                                    <small>{location}</small>
                                                    <h3>{name}</h3>
                                                    <div className="even-location">
                                                        <i className="fa fa-map-marker"/>
                                                        {
                                                            address ? <div className={'address'}
                                                                           dangerouslySetInnerHTML={{__html: address}}/> : null
                                                        }
                                                    </div>
                                                    <button type={'button'} className={'mapBtn'}>Locate On Map</button>
                                                </section>
                                            </section>
                                        </article>
                                    )
                                })
                            }

                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7" dangerouslySetInnerHTML={this.iframe()}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {FindAStorePage}
