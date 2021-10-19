import iconCart from 'assets/svg/icon-cart.svg';
import iconNotif from 'assets/svg/icon-noti.svg';
import iconUser from 'assets/svg/icon-user.svg';
import React from 'react';
import { Link } from 'react-router-dom';


const HeaderPCR = () => {
    return (
        <div className="header__nav-menu-right">
            <div className="header__nav-menu-right-item">
                <Link to="/">
                    <img
                        className="header__nav-menu-right-item-icon"
                        src={iconNotif} alt="notif"
                    />
                </Link>
            </div>

            <div className="header__nav-menu-right-item">
                <Link to="/cart">
                    <span className="header__nav-menu-right-item-sm">
                        0
                    </span>
                    <img
                        className="header__nav-menu-right-item-icon"
                        src={iconCart} alt="cart"
                    />
                </Link>
            </div>

            <div className="header__nav-menu-right-item">
                <Link to="/sign-in">
                    <img
                        className="header__nav-menu-right-item-icon"
                        src={iconUser} alt="user"
                    />
                </Link>
            </div>
        </div>
    );
};

export default HeaderPCR;