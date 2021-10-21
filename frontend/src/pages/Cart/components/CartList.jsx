import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const { checkList } = props;

    return (
        <div className="cart-items">
            {
                checkList.map((product) => (
                    <CartItem key={product._id} product={product} />
                ))}
        </div>
    );
};

export default CartList;