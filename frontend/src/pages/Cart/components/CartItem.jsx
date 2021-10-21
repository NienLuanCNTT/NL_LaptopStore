import React from 'react';

const CartItem = (props) => {
    const product = props;

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={product.image} alt="" />
            </div>
            <div className="cart-item-info">
                <h2>{product.name}</h2>
                <p>{product.quantity}</p>
                <p className="btn">Xóa</p>
            </div>
        </div>
    );
};

export default CartItem;