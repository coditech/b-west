import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import '../styles/bootstrap.min.css';
import '../styles/Admin.css'
import {SideBar} from "../components/Sidebar";
import {HomeHeaderAdminPage} from "./HomeHeaderAdminPage";
import {HomeAboutUsAdminPage} from "./HomeAboutUsAdminPage";
import {HomeStoriesAdminPage} from "./HomeStoriesAdminPage";
import {HomeFeaturedItemsAdminPage} from "./HomeFeaturedItemsAdminPage";
import {AboutUsAdminPage} from "./AboutUsAdminPage";
import {VillagerStoryAdminPage} from "./VillagerStoryAdminPage";
import {ShopItemAdminPage} from "./ShopItemAdminPage";
import {HeadersAdminPage} from "./HeadersAdminPage";
import {LocationAdminPage} from "./LocationAdminPage";
import {ContactUsAdminPage} from "./ContactUsAdminPage";
import {ProductAdminPage} from "./ProductAdminPage";
import {mixProps} from "../helpers/index";
import {AboutUsAdminAddPage} from "./AboutUsAdminAddPage";
import {AboutUsAdminViewPage} from "./AboutUsAdminViewPage";
import {AboutUsAdminEditPage} from "./AboutUsAdminEditPage";
import {AboutUsHomeSectionAdminPage} from "./AboutUsHomeSectionAdminPage";
import {AboutUsHomeSectionAdminEditPage} from "./AboutUsHomeSectionAdminEditPage";
import {ContactUsAdminEditPage} from "./ContacUsAdminEditPage";
import {FeaturedProductsAdminPage} from "./FeaturedProductsAdminPage";
import {FeaturedProductsAdminEditPage} from "./FeaturedProductsAdminEditPage";
import {FeaturedProductsAdminViewPage} from "./FeaturedProductsAdminViewPage";
import {FeaturedProductsAdminAddPage} from "./FeaturedProductsAdminAddPage";
import {ProductsAdminPage} from "./ProductsAdminPage";
import {ProductsAdminAddPage} from "./ProductsAdminAddPage";
import {ProductsAdminEditPage} from "./ProductsAdminEditPage";
import {ProductsAdminViewPage} from "./ProductsAdminViewPage";
import {FindAStoreHeaderAdminPage} from "./FindAStoreHeaderAdminPage";
import {FindAStoreHeaderAdminEditPage} from "./FindAStoreHeaderAdminEditPage";
import {HomeHeaderAdminEditPage} from "./HomeHeaderAdminEditPage";


const Default = () => {

    return (
        <h3>Default</h3>
    )
};

const toggleMenu = (event) => {
    const target = event.target;
    // target.h
    const wrapper = document.getElementById('wrapper');
    if (wrapper.classList.contains('toggled')) {
        wrapper.classList.remove('toggled');
        target.innerHTML = 'Show Menu';

    } else {
        wrapper.classList.add('toggled');
        target.innerHTML = 'Hide Menu';

    }

};


const AdminApp = (props) => {

    const {aboutUs, aboutUsHomeSection, refreshData, contactUs, featuredProducts, products, findAStore, homeHeader, counter} = props;
    const defaultPassedProps = {...props, refreshData};
    const mixAboutUs = mixProps({...defaultPassedProps, aboutUs});
    const mixAboutUsHomeSection = mixProps({...defaultPassedProps, aboutUsHomeSection});
    const mixContactUs = mixProps({...defaultPassedProps, contactUs});
    const mixFeaturedProducts = mixProps({...defaultPassedProps, featuredProducts});
    const mixProducts = mixProps({...defaultPassedProps, products});
    const mixFindAStore = mixProps({...defaultPassedProps, findAStore});
    const mixHomeHeader = mixProps({...defaultPassedProps, homeHeader});
    return (
        <div>
            <input type={'button'} onClick={() => refreshData()} value={'refresh ' + ( counter)}/>

            <div style={{maxHeight: '60px', width: '100%', backgroundColor: 'blue'}}>
                <button type={'button'} className="btn btn-secondary menu-toggle"
                        id="menu-toggle" onClick={(event) => toggleMenu(event)
                }>Show Menu
                </button>

            </div>
            <div id={'wrapper'} className={'toggled'}>

                <SideBar/>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/admin/aboutpage" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsAdminPage  {...mixAboutUs(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/aboutpage/create" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsAdminAddPage  {...mixAboutUs(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/aboutpage/:id/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsAdminEditPage  {...mixAboutUs(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/aboutpage/:id" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsAdminViewPage  {...mixAboutUs(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/aboutus-home" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsHomeSectionAdminPage  {...mixAboutUsHomeSection(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/aboutus-home/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <AboutUsHomeSectionAdminEditPage  {...mixAboutUsHomeSection(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/contact-us" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ContactUsAdminPage  {...mixContactUs(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/contact-us/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ContactUsAdminEditPage  {...mixContactUs(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/featured-products" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FeaturedProductsAdminPage  {...mixFeaturedProducts(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/featured-products/create" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FeaturedProductsAdminAddPage  {...mixFeaturedProducts(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/featured-products/:id/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FeaturedProductsAdminEditPage  {...mixFeaturedProducts(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/featured-products/:id" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FeaturedProductsAdminViewPage  {...mixFeaturedProducts(props)}/>)
                            }
                            }/>


                            <Route exact path="/admin/products" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ProductsAdminPage  {...mixProducts(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/products/create" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ProductsAdminAddPage  {...mixProducts(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/products/:id/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ProductsAdminEditPage  {...mixProducts(props)}/>)
                            }
                            }/>

                            <Route exact path="/admin/products/:id" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <ProductsAdminViewPage  {...mixProducts(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/find-a-store-header" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FindAStoreHeaderAdminPage  {...mixFindAStore(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/find-a-store-header/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <FindAStoreHeaderAdminEditPage  {...mixFindAStore(props)}/>)
                            }
                            }/>
                            <Route exact path="/admin/home-header" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <HomeHeaderAdminPage  {...mixFindAStore(props)}/>)
                            }
                            }/>   <Route exact path="/admin/home-header/edit" render={(props) => {
                                // TODO: move this to componentDidMount
                                if (typeof window !== 'undefined') {
                                    window.scrollTo(0, 0)
                                }
                                return ( <HomeHeaderAdminEditPage  {...mixFindAStore(props)}/>)
                            }
                            }/>


                            <Route exact path="/admin/about-home" component={HomeAboutUsAdminPage}/>
                            <Route exact path="/admin/home" component={HomeHeaderAdminPage}/>
                            <Route exact path="/admin/stories" component={HomeStoriesAdminPage}/>
                            <Route exact path="/admin/featureditems" component={HomeFeaturedItemsAdminPage}/>
                            <Route exact path="/admin/villagers" component={VillagerStoryAdminPage}/>
                            <Route exact path="/admin/shopitems" component={ShopItemAdminPage}/>
                            <Route exact path="/admin/headers" component={HeadersAdminPage}/>
                            <Route exact path="/admin/locations" component={LocationAdminPage}/>
                            <Route exact path="/admin/contact" component={ContactUsAdminPage}/>

                            <Route exact path="/admin/products" component={ProductAdminPage}/>


                            <Route path="/" component={Default}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default AdminApp;
