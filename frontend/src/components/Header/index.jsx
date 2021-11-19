import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo/logo_header.png'
import HeaderPCR from './components/HeaderPCR';
import HeaderMobileR from './components/HeaderMobileR';

import brand from 'assets/fake-data/brand';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from 'actions/userAction';
import numberWithCommas from 'utils/numberWithCommas'
import { listProducts } from 'actions/productActions'
import LoadingBox from 'components/LoadingBox'
import MessageBox from 'components/MessageBox'

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
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);

    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((product) => {
            return product.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFilterData([]);
        }
        else {
            setFilterData(newFilter);
        }

    }

    const clearInput = () => {
        setFilterData([]);
        setWordEntered('');
    }



    console.log(products);

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
                    <div className="search">
                        <div className="header__nav-search">
                            <input
                                type="text"
                                className="header__nav-search-input"
                                placeholder="Nhập sản phẩm cần tìm..."
                                onChange={handleFilter}
                                value={wordEntered}
                            />
                            <button className="header__nav-search-button">
                                {
                                    filterData.length === 0 ?
                                        (<box-icon name='search-alt' animation='tada' color='#06a8ef' ></box-icon>)
                                        : (<i className="fas fa-times close" onClick={clearInput}></i>)
                                }

                            </button>
                        </div>
                        {filterData.length !== 0 && (
                            <div className="header__nav-result">
                                {
                                    loading ? null : error ?
                                        (<MessageBox variant="danger">{error}</MessageBox>) : (
                                            filterData.map((product, index) => (
                                                <Link to={`/product/${product._id}`}>
                                                    <div key={index} className="result" onClick={clearInput}>

                                                        <div className="result__image">
                                                            <img src={product.image} alt="" />
                                                        </div>

                                                        <div className="result__name">
                                                            {product.name}
                                                        </div>

                                                        <div className="result__price">
                                                            {numberWithCommas(product.price)} <span className="result__price-currency">₫</span>
                                                        </div>

                                                    </div>
                                                </Link>
                                            ))
                                        )
                                }
                            </div>
                        )
                        }
                    </div>
                    <HeaderPCR checkList={checkList} userInfo={userInfo} signoutHandler={signoutHandler} total={total} />
                    <HeaderMobileR checkList={checkList} userInfo={userInfo} signoutHandler={signoutHandler} />
                </div>
            </div>
        </div >
    );
}

export default Header;