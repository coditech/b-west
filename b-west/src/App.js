import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PublicApp from "./routes/PublicApp";
import {LoginPage} from "./routes/LoginPage";
import AdminApp from "./routes/AdminApp";
import './styles/App.css'

const mixProps = (passed_props_home) => (props) => ({...passed_props_home, ...props});

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        const data = props.appData;


        this.state = {
            ...data,
            status: 0

        };

    }


    ____componentDidMount() {
        const oldState = this.state;
        this.setState({
            ...oldState, status: 1
        });

        const url = 'http://localhost:3000/api/aboutUs';
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                this.setState({
                    ...data,
                    status: 2

                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const passedProps = this.state;
        const mix = mixProps(passedProps);

        return (
            <div>
                <Switch>

                    <Route path="/admin" component={AdminApp}/>
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
