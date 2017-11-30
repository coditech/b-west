import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {HomePage} from "./HomePage";
import Menu from '../components/Menu';
import Footer from "../components/Footer";
import {ProductsPage} from "./ProductsPage";

//import '../styles/ionicons.min.css';
//import '../styles/bootstrap.min.css';
import '../styles/theme-main.css';
import '../styles/theme-style.css';
import '../styles/theme-responsive.css';
import '../styles/PublicApp.css'
import {FindAStorePage} from "./FindAStorePage";
import {AboutUsPage} from "./AboutUsPage";
import {ContactUsPage} from "./ContactUsPage";
import {VillagersPage} from "./VillagersPage";
import {ProductItemPage} from "./ProductItemPage";
import {mixProps} from "../helpers/index";
import {shuffle} from "../utils";

class PublicApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            menu: props.menu,
            homeHeader: props.homeHeader,
            aboutUsHomeSection: props.aboutUsHomeSection,
            featuredStories: props.featuredStories,
            instaBanner: props.instaBanner,
            featuredProducts: props.featuredProducts,
            findAStoereBanner: props.findAStoereBanner,
            aboutUs: props.aboutUs,
            findAStore: props.findAStore,
            villagersStories: props.villagersStories,
            villagersStoriesHeader: props.villagersStoriesHeader,
            products: props.products,
            productsPageHeader: props.productsPageHeader,
            subscriberBanner: props.subscriberBanner,
            contactUs: props.contactUs

        }
    }

    render() {
        const {
            menu, homeHeader, aboutUsHomeSection, featuredStories, instaBanner,
            featuredProducts, findAStoereBanner, aboutUs, findAStore,
            villagersStories, villagersStoriesHeader,
            products, productsPageHeader, subscriberBanner,
            contactUs
        } = this.state;
        const mixHomePage = mixProps({
            homeHeader,
            aboutUsHomeSection,
            featuredStories,
            instaBanner,
            featuredProducts,
            findAStoereBanner,
            subscriberBanner,
            findAStore
        });
        const mixAboutPage = mixProps({aboutUs});
        const mixFindAStore = mixProps({findAStore});
        const mixVillagers = mixProps({villagersStories, villagersStoriesHeader});
        const mixProductsPage = mixProps({products, productsPageHeader})
        const mixContactPage = mixProps({contactUs})
        return (
            <div id={'wrap'}>
                {/* Header */}
                <Menu {...menu}/>
                <Switch>
                    <Route exact path="/" render={(props) => {

                        return (<HomePage {...mixHomePage(props)}/>)
                    }

                    }/>
                    <Route exact path="/about-us" render={(props) => {

                        return (<AboutUsPage {...mixAboutPage(props)}/>)
                    }
                    }/>
                    <Route exact path="/find-a-store" render={(props) => {

                        return (<FindAStorePage {...mixFindAStore(props)}/>)
                    }
                    }/>
                    <Route exact path="/villagers" render={(props) => {

                        return (<VillagersPage {...mixVillagers(props)}/>)
                    }
                    }/>

                    <Route exact path="/products" render={(props) => {

                        return (<ProductsPage {...mixProductsPage(props)}/>)
                    }
                    }/>
                    <Route exact path="/products/:slug" render={(props) => {

                        const product = this.state.products.find(({slug}) => {
                            return slug === props.match.params.slug;
                        });
                        console.log(JSON.stringify(product));

                        let related_products = [];
                        if (product) {
                            if (product.related_products) {
                                related_products = product.related_products.map(product_id => {
                                    return this.state.products.find(item => item.id === product_id);
                                });
                                related_products = shuffle(related_products);
                            }

                        }


                        // const relatedProducts =
                        // related_products = [];
                        const mixProductItemPage = mixProps({product, related_products});

                        return product ?
                            (<ProductItemPage {...mixProductItemPage(props)} productFound={true}/>) :
                            <ProductItemPage {...mixProductItemPage(props)} productFound={false}/>;

                    }
                    }/>
                    <Route exact path="/contact-us" render={(props) => {

                        return (<ContactUsPage {...mixContactPage(props)}/>)
                    }
                    }/>

                </Switch>
                <Footer {...menu}/>


            </div>
        )
    }
}

export default PublicApp;
