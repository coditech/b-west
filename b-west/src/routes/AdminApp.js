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

}


const AdminApp = (props) => {

    const passedProps = props;
    const {aboutUs, refreshData} = props;
    const defaultPassedProps = {refreshData};
    const mixAboutUs = mixProps({...defaultPassedProps, aboutUs});
    return (
        <div>
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
                            }/> <Route exact path="/admin/aboutpage/:id" render={(props) => {
                            // TODO: move this to componentDidMount
                            if (typeof window !== 'undefined') {
                                window.scrollTo(0, 0)
                            }
                            return ( <AboutUsAdminViewPage  {...mixAboutUs(props)}/>)
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

}

export default AdminApp;
