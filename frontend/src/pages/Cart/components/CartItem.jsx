import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from 'utils/numberWithCommas';

const CartItem = (props) => {
    const {
        product,
        onQuantityChange,
        onRemove
    } = props;

    const handleQuantityChange = (id, quantity) => {
        if (!onQuantityChange) return;
        onQuantityChange(id, quantity);
    }

    const handleRemoveProduct = (id) => {
        if (!onRemove) return;
        onRemove(id);
    }

    return (
        <div className="cart-item">
            <Link to={`/product/${product._id}`} className="cart-item-img">
                <img src={product.image} alt="" />
            </Link>
            <div className="cart-item-info">
                <Link
                    to={`/product/${product._id}`}
                    className="cart-item-info-name"
                >
                    {product.name}
                </Link>
                <div className="cart-item-quantity">
                    <div className="btn btn-minus"
                        disabled={product.quantity === 1}
                        onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
                    >-</div>
                    <p>{product.quantity}</p>
                    <div className="btn btn-plus"
                        disabled={product.quantity}
                        onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
                    >+</div>
                </div>
                <p
                    className="btn btn-del"
                    onClick={() => handleRemoveProduct(product._id)}

                >
                    <i className="fas fa-trash-alt"></i>
                    Xóa
                </p>
            </div>
            <div className="cart-item-price">
                {numberWithCommas(product.price * product.quantity)}₫
            </div>
        </div>
    );
};

export default CartItem;