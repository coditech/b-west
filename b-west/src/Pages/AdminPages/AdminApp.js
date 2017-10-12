import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

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
}

const AdminApp = () => (
    <div id={'wrap'}>
        <Switch>

            <Route exact path="/user" component={User}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/" component={Default}/>
        </Switch>
    </div>
);

export default AdminApp;
