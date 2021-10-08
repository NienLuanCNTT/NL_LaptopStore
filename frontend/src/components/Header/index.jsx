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
            "Envy",
            "Omen",
            "ZBook",
        ]
    },
    {
        id: 2,
        title: "DELL",
        list: [
            "Optiplex",
            "Precision",
            "Alienware",
            "Vostro",
            "XPS",
            "G-Gaming Series",
            "Latitude",
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
    {
        id: 5,
        title: "Microsoft",
        list: [
            "Surface Laptop",
            "Surface Book",
            "Surface Pro",
        ]
    },
    {
        id: 6,
        title: "Razer",
        list: [
            "Blade Stealth",
            "Blade Pro",
        ]
    },
    {
        id: 7,
        title: "Acer",
        list: [
            "Nitro",
            "Swift",
            "Predator",
            "Aspire",
        ]
    },

]

// function onMouseOver() {
//     const listElement = document.getElementById('listid');

//     listElement.setAttribute("style", "display: flex; height:auto");
// }

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
                        <div
                            className="header__nav-brain-title"
                        // onMouseOver={onMouseOver}
                        >Thương Hiệu</div>
                        <div id="listid" className="header__nav-brain-list">
                            {
                                brain.map((brain, index) => (
                                    <ul
                                        className="header__nav-brain-list-items"
                                        key={index}
                                    >
                                        <h3 className="header__nav-brain-list-items-title">{brain.title}</h3>

                                        {brain.list.map((list, index) => (
                                            <li
                                                key={index}
                                                className="header__nav-brain-list-items-item"
                                            >{list}</li>
                                        ))}
                                    </ul>
                                ))
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