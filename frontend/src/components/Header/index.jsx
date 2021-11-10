import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo/logo_header.png'
import HeaderPCR from './components/HeaderPCR';
import HeaderMobileR from './components/HeaderMobileR';

import brand from 'assets/fake-data/brand';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from 'actions/userAction';

function Header() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const { checkList } = useSelector((state) => state.checkList);

    const total = checkList.reduce(
        (sum, product) =>
            sum +
            product.price *
            product.quantity,
        0
    );

    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }
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
                        <Link to={'/catalog'}>
                            <div
                                className="header__nav-brain-title"
                            // onMouseOver={onMouseOver}
                            >Thương Hiệu</div>
                        </Link>
                        <div id="listid" className="header__nav-brain-list">
                            {
                                brand.map((brain, index) => (
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
                            <box-icon name='search-alt' animation='tada' color='#06a8ef' ></box-icon>
                        </button>
                    </div>
                    <HeaderPCR checkList={checkList} userInfo={userInfo} signoutHandler={signoutHandler} total={total} />
                    <HeaderMobileR checkList={checkList} userInfo={userInfo} signoutHandler={signoutHandler} />
                </div>
            </div>
        </div>
    );
}

export default Header;