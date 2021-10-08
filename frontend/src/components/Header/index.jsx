import React from 'react';
import { Link } from 'react-router-dom';

import iconUser from 'assets/svg/icon-user.svg';
import iconCart from 'assets/svg/icon-cart.svg';
import iconNotif from 'assets/svg/icon-noti.svg';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__nav">
                    <div className="header__nav-logo">
                        <Link to="/">
                            LaptopStore
                        </Link>
                    </div>
                    <div className="header__nav-brain">Thương Hiệu</div>
                    <div className="header__nav-search">
                        <input
                            type="text"
                            className="header__nav-search-input"
                            placeholder="Nhập sản phẩm cần tìm,..."
                        />
                        <button
                            type="submit"
                            className="header__nav-search-button"
                        >
                            Search
                        </button>
                    </div>
                    <div className="header__nav-menu-right">
                        <div className="header__nav-menu-right-item">
                            <Link to="/notification">
                                <img
                                    className="header__nav-menu-right-item-icon"
                                    src={iconNotif} alt="notif"
                                />
                            </Link>
                        </div>
                        <div className="header__nav-menu-right-item">
                            <Link to="/cart">
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
                </div>
            </div>
        </div>
    );
}

export default Header;