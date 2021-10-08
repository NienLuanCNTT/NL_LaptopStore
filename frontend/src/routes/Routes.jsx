import Home from 'pages/Home';
import Product from 'pages/Product';
import Cart from 'pages/Cart';
import React from 'react';

import { Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:slug" component={Product} />
        </Switch>
    );
}

export default Routes;
