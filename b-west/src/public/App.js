import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {HomePage} from "./HomePage";

// import './App.css';
import './assets/css/ionicons.min.css';
import './assets/css/bootstrap/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// SLIDER REVOLUTION 4.x CSS SETTINGS
import './assets/rs-plugin/css/settings.css';
//  COLORS
import './assets/css/default.css';
// import "jquery";
// import "wowjs";
// import 'modernizr'

// import './assets/js/vendors/jquery/jquery.min.js';
// import './assets/js/vendors/wow.min.js';
// import './assets/js/vendors/bootstrap.min.js';
// import './assets/js/vendors/own-menu.js';
// import './assets/js/vendors/flexslider/jquery.flexslider-min.js';
// import './assets/js/vendors/jquery.countTo.js';
// import './assets/js/vendors/jquery.isotope.min.js';
// import './assets/js/vendors/jquery.bxslider.min.js';
// import './assets/js/vendors/owl.carousel.min.js';
// import './assets/js/vendors/jquery.sticky.js';
// import './assets/rs-plugin/js/jquery.themepunch.tools.min.js';
// import './assets/rs-plugin/js/jquery.themepunch.revolution.min.js';
// import './assets/js/zap.js';


const App = () => (
    <div>
        <nav>
            Menu
        </nav>

        <Switch>

            <Route exact path="/" component={HomePage}/>
        </Switch>
    </div>
);

export default App;
