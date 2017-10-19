import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import '../styles/bootstrap.min.css';
import '../styles/Admin.css'
import {SideBar} from "../components/Sidebar";
import {HomeHeaderAdminPage} from "./HomeHeaderAdminPage";
import {HomeAboutUsAdminPage} from "./HomeAboutUsAdminPage";

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
                            <Switch>

                                <Route exact path="admin/user" component={User}/>
                                <Route exact path="/admin/home" component={HomeHeaderAdminPage}/>
                                <Route exact path="/admin/about" component={HomeAboutUsAdminPage}/>
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
