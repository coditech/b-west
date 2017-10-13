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
// SLIDER REVOLUTION 4.x CSS SETTINGS
import '../../assets/rs-plugin/css/settings.css';
//  COLORS
import '../../assets/css/default.css';
import Menu from '../../components/Menu';


class PublicApp extends React.Component {

    render() {

        return (
            <div id={'wrap'}>


                {/* Header */}
                <Menu />
                <Switch>

                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        )
    }
}
export default PublicApp;
