import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import '../../assets/css/bootstrap/css/bootstrap.min.css';

import {SideBar} from "../../components/Sidebar";

const User = () => {

    return (
        <h3>Users</h3>
    )
}
const Product = () => {

    return (
        <h3>Product</h3>
    )
}

const Default = () => {

    return (
        <h3>Default</h3>
    )
};
class AdminApp extends React.Component {

    constructor(props, context) {
        super(props, context)
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
                            12
                            <Switch>

                                <Route exact path="/user" component={User}/>
                                <Route exact path="/product" component={Product}/>
                                <Route exact path="/" component={Default}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminApp;
