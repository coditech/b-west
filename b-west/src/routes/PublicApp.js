import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {HomePage} from "./HomePage";
import Menu from '../components/Menu';
import Footer from "../components/Footer";
import {ProductsPage} from "./ProductsPage";

import '../styles/ionicons.min.css';
import '../../styles/bootstrap.min.css';
import '../../styles/font-awesome.min.css';
import '../../styles/theme-main.css';
import '../../styles/theme-style.css';
import '../../styles/theme-responsive.css';


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
            },
        }
    }

    render() {


        return (
            <div id={'wrap'}>
                {/* Header */}
                <Menu {...this.state}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/products" component={ProductsPage}/>

                </Switch>
                <Footer/>


            </div>
        )
    }
}

export default PublicApp;
