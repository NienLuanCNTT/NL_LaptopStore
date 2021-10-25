import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderMobileR = () => {

    function handleOnClickToggle() {
        const menuToggle = document.querySelector('.menu-toggle-mobile');

        if (menuToggle.style.transform === 'translateX(200px)') {
            menuToggle.style.transform = 'translateX(0)';
        } else {
            menuToggle.style.transform = 'translateX(200px)';
        }
    }

    const { checkList } = useSelector((state) => state.checkList);

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
                <i className="btn-toggle"
                    onClick={handleOnClickToggle}
                >
                    <span className="btn-toggle-sm">{checkList.length}</span>
                    <box-icon name='category' type='solid' color='#676464' />
                </i>
                <div className="menu-toggle-mobile">
                    <div>
                        <Link to="/account">
                            <p>
                                <box-icon name='user-circle' color='#434242' ></box-icon>
                                <span>Đăng Nhập</span>
                            </p>
                        </Link >
                    </div>
                    <div>
                        <Link to="/cart">
                            <p>
                                <span className="cart-toggle-sm">{checkList.length}</span>
                                <box-icon name='cart-alt' color='#434242' ></box-icon>
                                <span>Giỏ Hàng</span>
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <p>
                                <box-icon name='notification' type='solid' color='#434242' ></box-icon>
                                <span>Thông báo</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobileR;