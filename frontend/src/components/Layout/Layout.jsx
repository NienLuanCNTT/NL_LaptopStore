import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from 'components/Header';
import Footer from 'components/Footer';
import Routes from 'routes/Routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
                    </div>
                    <Footer />
                </div>
            )} />
            <ToastContainer style={{ fontSize: 14 }} />
        </BrowserRouter>
    );
}

export default Layout;