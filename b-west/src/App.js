import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import superagent from 'superagent';

import PublicApp from "./routes/PublicApp";
import {LoginPage} from "./routes/LoginPage";
import AdminApp from "./routes/AdminApp";
import './styles/App.css'
import {mixProps} from "./helpers/index";
const PrivateRoute = ({component: Component, passedProps, ...rest}) => {

    return (
        <Route {...rest} render={props => {
            const {auth} = passedProps;
            props = {...props, ...passedProps};
            return (
                auth.isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
            )
        }}/>
    )
};

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        const data = props.appData;

        this.refreshData = this.refreshData.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            status: 2,
            counter: 0,
            auth: {
                isAuthenticated: false
            },
            ...data,
        };

    }

    refresh(data) {
        this.setState(...this.state, ...data);
    }

    refreshData() {
        let data = {};
        superagent.get('/api/alldata').then(res => {

            data = res.body.data;

            const oldState = this.state;
            const counter = oldState.counter + 1;
            this.setState({
                ...data, counter
            })

        })
    }


    render() {
        const {refreshData} = this;
        const passedProps = {...this.state, refreshData};
        const mix = mixProps(passedProps);

        return (
            <div>
                <Switch>
                    <PrivateRoute path="/admin/:page?/:page2?/:page3?/:page4?" component={AdminApp}
                                  passedProps={{...passedProps}}/>

                    {/*<Route path="/admin" render={(props) => {*/}
                        {/*return (<AdminApp {...mix(props)}/>)*/}
                    {/*}*/}
                    {/*}/>*/}
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" render={(props) => {
                        // TODO: move this to componentDidMount
                        if (typeof window !== 'undefined') {
                            window.scrollTo(0, 0)
                        }
                        return ( <PublicApp  {...mix(props)}/>)
                    }
                    }/>
                </Switch>

            </div>
        )
    }
}

export default App;
