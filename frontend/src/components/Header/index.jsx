import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo/logo_header.png'
import HeaderPCR from './components/HeaderPCR';
import HeaderMobileR from './components/HeaderMobileR';

const brain = [
    {
        id: 1,
        title: "HP",
        list: [
            { name: "Palivison", path: "/hp?subbrand=palivision" },
            { name: "Elitedesk", path: "/hp?subbrand=elitedesk" },
            { name: "Z Workstation", path: "/hp?subbrand=z-workstation" },
            { name: "Envy", path: "/hp?subbrand=envy" },
            { name: "Omen", path: "/hp?subbrand=omen" },
            { name: "ZBook", path: "/hp?subbrand=zbook" },
        ]
    },
    {
        id: 2,
        title: "DELL",
        list: [
            { name: "Optiplex", path: "/dell?subbrand=optiplex" },
            { name: "Precision", path: "/dell?subbrand=precision" },
            { name: "Alienware", path: "/dell?subbrand=alienware" },
            { name: "Vostro", path: "/dell?subbrand=vostro" },
            { name: "XPS", path: "/dell?subbrand=xps" },
            { name: "G-Gaming Series", path: "/dell?subbrand=g-gaming-series" },
            { name: "Latitude", path: "/dell?subbrand=latitude" },
        ]
    },
    {
        id: 3,
        title: "Apple",
        list: [
            { name: "iMac", path: "/apple?subbrand=imac" },
            { name: "Mac", path: "/apple?subbrand=mac" },
            { name: "Mac Pro", path: "/apple?subbrand=mac-pro" },
        ]
    },
    {
        id: 4,
        title: "Asus",
        list: [
            { name: "Zenbook", path: "/asus?subbrand=zenbook" },
            { name: "Vivobook", path: "/asus?subbrand=vivobook" },
            { name: "Pro Art Studio", path: "/asus?subbrand=pro-art-studio" },
        ]
    },
    {
        id: 5,
        title: "Microsoft",
        list: [
            { name: "Surface Laptop", path: "/microsoft?subbrand=surface-laptop" },
            { name: "Surface Book", path: "/microsoft?subbrand=surface-book" },
            { name: "Surface Pro", path: "/microsoft?subbrand=surface-pro" },
        ]
    },
    {
        id: 6,
        title: "Razer",
        list: [
            { name: "Blade Stealth", path: "/razer?subbrand=blade-stealth" },
            { name: "Blade Pro", path: "/razer?subbrand=blade-pro" },
        ]
    },
    {
        id: 7,
        title: "Acer",
        list: [
            { name: "Nitro", path: "/acer?subbrand=nitro" },
            { name: "Swift", path: "/acer?subbrand=swift" },
            { name: "Predator", path: "/acer?subbrand=predator" },
            { name: "Aspire", path: "/acer?subbrand=aspire" },
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
                            <img src={logo} className="header__nav-logo" alt="logo" />
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
                                            >
                                                <Link to="/product/:slug">
                                                    {list.name}
                                                </Link>
                                            </li>
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
                            <box-icon name='search-alt' color='#06a8ef' ></box-icon>
                        </button>
                    </div>
                    <HeaderPCR />
                    <HeaderMobileR />
                </div>
            </div>
        </div>
    );
}

export default Header;