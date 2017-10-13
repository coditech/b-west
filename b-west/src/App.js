import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PublicApp from "./Pages/PublicPages/PublicApp";
import {LoginPage} from "./Pages/PublicPages/LoginPage";
import {MenuPage} from "./Pages/PublicPages/MenuPage";
import AdminApp from "./Pages/AdminPages/AdminApp";

const App = () => (
    <Switch>

        <Route path="/admin" component={AdminApp}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/menu" component={MenuPage}/>
        <Route path="/" component={PublicApp}/>
    </Switch>
);

export default App;
