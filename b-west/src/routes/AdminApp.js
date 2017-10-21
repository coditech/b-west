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


const User = () => {

    return (
        <h3>Users</h3>
    )
}

const Default = () => {

    return (
        <h3>Default</h3>
    )
};

class AdminApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log("props ", props)
        this.state = {
            toggled: true
        }
    }

    render() {

        const {
            toggled
        } = this.state;

        const toggleMenu = () => {

            const oldState = this.state;
            const newState = {...oldState, toggled: !oldState.toggled}
            this.setState(newState);
        }
        const passedProps = this.state;
        const mix = mixProps(passedProps);
        return (
            <div>
                <div style={{maxHeight: '60px', width: '100%', backgroundColor: 'blue'}}>
                    <button type={'button'} className="btn btn-secondary menu-toggle"
                            id="menu-toggle" onClick={(event) => toggleMenu(event)
                    }>{toggled ? 'Show Menu' : 'Hide Menu'} </button>

                </div>
                <div id={'wrapper'} className={toggled ? 'toggled' : ''}>

                    <SideBar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path="/admin/aboutpage" render={(props) => {
                                    // TODO: move this to componentDidMount
                                    if (typeof window !== 'undefined') {
                                        window.scrollTo(0, 0)
                                    }
                                    return ( <AboutUsAdminPage  {...mix(props)}/>)
                                }
                                }/>


                                <Route exact path="/admin/home" component={HomeHeaderAdminPage}/>
                                <Route exact path="/admin/stories" component={HomeStoriesAdminPage}/>
                                <Route exact path="/admin/featureditems" component={HomeFeaturedItemsAdminPage}/>
                                <Route exact path="/admin/villagers" component={VillagerStoryAdminPage}/>
                                <Route exact path="/admin/shopitems" component={ShopItemAdminPage}/>
                                <Route exact path="/admin/headers" component={HeadersAdminPage}/>
                                <Route exact path="/admin/locations" component={LocationAdminPage}/>
                                <Route exact path="/admin/contact" component={ContactUsAdminPage}/>

                                <Route exact path="/admin/products" component={ProductAdminPage}/>



                                <Route  path="/" component={Default}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminApp;
