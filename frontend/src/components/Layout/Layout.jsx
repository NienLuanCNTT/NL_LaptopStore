import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from 'components/Header';
import Footer from 'components/Footer';
import Routes from 'routes/Routes';


function Layout() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <div className="container">
                        <Header {...props} />
                        <div className="main">
                            <Routes />
                        </div>
                        <Footer />
                    </div>
                </div>
            )} />
        </BrowserRouter>
    );
}

export default Layout;