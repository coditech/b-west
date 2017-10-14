import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {HomePage} from "./HomePage";
import '../../assets/css/ionicons.min.css';
import '../../assets/css/bootstrap/css/bootstrap.min.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

//  COLORS
import '../../assets/css/default.css';
import Menu from '../../components/Menu';
import Footer from "../../components/Footer";


class PublicApp extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            menuItems: [
                {
                    name: "Home",
                    url: "/",
                },
                {
                    name: "About Us",
                    url: "/about-us",
                },
                {
                    name: "Villagers",
                    url: "/villagers",
                },
                {
                    name: "Products",
                    url: "/products",
                },
                {
                    name: "Contact Us",
                    url: "/contact-us",
                }
            ],
            logo: {
                src: '/b-west-latin-logo.png'
                , alt: 'B-West Logo'
            }
        }
    }

    render() {


        return (
            <div id={'wrap'}>


                {/* Header */}
                <Menu {...this.state}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
                <Footer />

                
            </div>
        )
    }
}

export default PublicApp;
