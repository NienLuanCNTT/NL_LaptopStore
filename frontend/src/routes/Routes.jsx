import Home from 'pages/Home';
import Product from 'pages/Product/Product';
import Cart from 'pages/Cart/Cart';
import Catalog from 'pages/Catalog/Catalog';
// import Signin from 'pages/Signin/Signin';
import React from 'react';

import { Route, Switch } from 'react-router-dom'
import MyOrder from 'pages/MyOrder';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/myorder" component={MyOrder} />
            {/* <Route path="/signin" component={Signin} /> */}
        </Switch>
    );
}

export default Routes;
