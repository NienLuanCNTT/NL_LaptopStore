import React from 'react';
import { useSelector } from 'react-redux';
import CartList from './components/CartList';

function Cart() {
    const { checkList } = useSelector((state) => state.checkList);

    return (

        <div className="cart">
            {
                checkList === 0 ? (<div>Không có sản phẩm trong giỏ hàng</div>) :
                    (<CartList checkList={checkList} />)
            }

        </div>
    );
}

export default Cart;