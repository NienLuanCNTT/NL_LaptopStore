import React from 'react';

const HeaderMobileR = () => {
    return (
        <div className="header__nav-menu-mobile">
            <div className="header__nav-search-mobile">
                <input
                    type="text"
                    className="header__nav-search-input"
                    placeholder="Nhập sản phẩm cần tìm,..."
                />
                <button
                    type="submit"
                    className="header__nav-search-button"
                >
                    <box-icon name='search-alt' color='#06a8ef' />
                </button>
            </div>

            <div className="header__nav-toggle-mobile">
                <i className="btn-toggle">
                    <box-icon name='category' type='solid' color='#676464' />
                </i>
                <div className="menu-toggle-mobile">

                </div>
            </div>
        </div>
    );
};

export default HeaderMobileR;