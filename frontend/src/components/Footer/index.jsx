import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__top-logo">
                        <Link to="/">
                            LaptopStore
                        </Link>
                    </div>
                    <div className="footer__top-right">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
