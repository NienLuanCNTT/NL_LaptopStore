import React from 'react';
import { Link } from 'react-router-dom';

import iconUser from 'assets/svg/icon-user.svg';
import iconCart from 'assets/svg/icon-cart.svg';
import iconNotif from 'assets/svg/icon-noti.svg';


const brain = [
    {
        id: 1,
        title: "HP",
        list: [
            "Palivison",
            "Elitedesk",
            "Z Workstation",
        ]
    },
    {
        id: 2,
        title: "DELL",
        list: [
            "Optiplex",
            "Precision",
            "Alienware",
        ]
    },
    {
        id: 3,
        title: "Apple",
        list: [
            "iMac",
            "Mac",
            "Mac Pro",
        ]
    },
    {
        id: 4,
        title: "Asus",
        list: [
            "Zenbook",
            "Vivobook",
            "Pro Art Studio",
        ]
    },
]

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
                    <div className="header__nav-brain">
                        <div className=""> Thương Hiệu</div>
                        <div>
                            {
                                brain.map((brain, index) => {
                                    <ul key={index}>
                                        {brain.title}

                                        {brain.list.map((list) => {
                                            <li>{list}</li>
                                        })}
                                    </ul>
                                })
                            }
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default Header;