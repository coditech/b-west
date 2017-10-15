import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import * as firebase from 'firebase';

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
import {ProductsPage} from "./ProductsPage";

const config = {
    apiKey: "AIzaSyCeMr31aX1fWxxIPRr8Zvemmm6-zOmYhws",
    authDomain: "b-west.firebaseapp.com",
    databaseURL: "https://b-west.firebaseio.com",
    projectId: "b-west",
    storageBucket: "b-west.appspot.com",
    messagingSenderId: "277196104830"
};
firebase.initializeApp(config);

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
            speed: 10
        }
    }


    componentDidMount() {
        const oldState = this.state;

        const rootRef = firebase.database().ref().child('b-west');
        const speedRef = rootRef.child('speed');
        console.log('snap ==>', 23);

        rootRef.on('value', snap => {
            console.log('snap ==>', snap);

            this.setState({
                ...oldState,
                speed: snap.val()
            })
        })

    }

    render() {


        return (
            <div id={'wrap'}>

                <div>
                    {this.state.speed}
                </div>
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
