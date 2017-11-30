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
        this.getUsersData = this.getUsersData.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            status: 2,
            counter: 0,
            users: [],
            auth: {
                isAuthenticated: false,
                username: '',
                email: '',
                token: ''
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

    getUsersData() {

        superagent.post('/api/users_get').set('x-access-token', this.state.auth.token).then(res => {
            const users = res.body.users;
            const oldState = this.state;
            const newState = {
                ...oldState,
                users
            };
            this.setState(newState);
        }).catch(err => {

        });
    }

    login(email, password, history) {
        superagent.post('/api/login').send({
            email,
            password

        }).then(res => {
            if (res.body.success) {

                const oldState = this.state;
                const newState = {
                    ...oldState,
                    auth: {
                        isAuthenticated: true,
                        ...res.body.user,
                        token: res.body.token
                    }
                };
                this.setState(newState);
                setTimeout(() => {
                    history.push('/admin');

                }, 200);
            }
            else {
            }


        }).catch(err => {

        });
    }

    render() {
        const {refreshData, getUsersData, login} = this;
        const passedProps = {...this.state, login, refreshData, getUsersData};
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
                    <Route path="/login" render={props => {
                        // TODO: move this to componentDidMount
                        if (typeof window !== 'undefined') {
                            window.scrollTo(0, 0)
                        }
                        return (<LoginPage  {...mix(props)}/>)
                    }}/>
                    <Route path="/" render={(props) => {
                        // TODO: move this to componentDidMount
                        if (typeof window !== 'undefined') {
                            window.scrollTo(0, 0)
                        }
                        return (<PublicApp  {...mix(props)}/>)
                    }
                    }/>
                </Switch>

            </div>
        )
    }
}

export default App;
