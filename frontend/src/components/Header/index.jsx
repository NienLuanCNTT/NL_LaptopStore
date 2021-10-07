import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__nav">
                    <div className="header__nav-logo">LaptopStore</div>
                    <div className="header__nav-brain">Thương Hiệu</div>
                    <div className="header__nav-search">
                        <input
                            type="text"
                            className="header__nav-input"
                            placeholder="Nhập sản phẩm cần tìm,..." />
                        {/* <button className="header__nav-search-button">Search</button> */}
                    </div>
                    <div className="header__nav-menu-right">
                        <ul>
                            <li>TB</li>
                            <li>Cart</li>
                            <li>User</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;