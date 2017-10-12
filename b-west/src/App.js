import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PublicApp from "./Pages/PublicPages/PublicApp";

const App = () => (
    <Switch>

        <Route path="/admin" component={PublicApp}/>
        <Route path="/" component={PublicApp}/>
    </Switch>
);

export default App;
