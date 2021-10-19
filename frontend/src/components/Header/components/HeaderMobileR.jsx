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
                    <box-icon name='search-alt' color='#06a8ef' ></box-icon>
                </button>
            </div>

        </div>
    );
};

export default HeaderMobileR;