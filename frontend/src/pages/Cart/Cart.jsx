import cartEmty from 'assets/images/empty-cart.png';
import { removeProduct, selectQuantity } from 'pages/CheckOut/CheckSlice';
import ProductCheck from 'pages/Product/component/ProductCheck';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from './../../utils/numberWithCommas';
import CartList from './components/CartList';

function Cart() {
    const { checkList } = useSelector((state) => state.checkList);
    const dispatch = useDispatch();

    function ModalCheckOpen() {
        const ModalCheck = document.querySelector('.modal__product-check');
        ModalCheck.style.display = 'block';
    }

    const handleQuantityChange = (id, quantity) => {
        dispatch(selectQuantity({ id, quantity }));
    }

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct({ id }));
    }

    const total = checkList.reduce(
        (sum, product) => (
            sum +
            product.price *
            product.quantity

        ), 0)

    return (

        <div className="cart">
            <ProductCheck />
            {
                checkList.length >= 1 && (
                    <div>
                        <h1>Giỏ Hàng ({checkList.length})</h1>
                        <div className="cart-content">

                            <CartList
                                checkList={checkList}
                                onChangeQuantity={handleQuantityChange}
                                onRemoveProduct={handleRemoveProduct}
                            />
                            <div className="cart-total">
                                <div className="cart-total-pricenomal">
                                    <b>Tạm tính: </b>
                                    <i>{numberWithCommas(total)}₫</i>
                                </div>
                                <div className="cart-total-price">
                                    <p>Thành tiền: </p>
                                    <span>{numberWithCommas(total)}₫</span>
                                </div>
                                <div className="btn">
                                    <p className=" btn-checkout" onClick={ModalCheckOpen}>
                                        Tiến hành thành toán
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }{
                checkList.length === 0 && (
                    <div className="cart-empty">
                        <div className="cart-empty">
                            <img src={cartEmty} alt="" />
                        </div>
                        <i>Bạn chưa thêm sản phẩm nào vào giỏ hàng đấy!!</i>
                        <div className="btn btn-cont">
                            <Link to="/" >Tiếp tục mua sắm nào</Link>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Cart;