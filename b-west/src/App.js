import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PublicApp from "./routes/PublicApp";
import {LoginPage} from "./routes/LoginPage";
import AdminApp from "./routes/AdminApp";
import './styles/App.css'

const App = () => (
    <Switch>

        <Route path="/admin" component={AdminApp}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/" component={PublicApp}/>
    </Switch>
);

export default App;
