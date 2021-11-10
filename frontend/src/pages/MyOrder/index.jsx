import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyOrderList from './components/MyOrderList';

const MyOrder = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [myOrders, setmyOrders] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const fetchUserOrder = async () => {
            const order = await axios.get(`http://localhost:5000/api/orders/${userInfo._id}`);
            const data = order.data || [];

            setmyOrders(data);
            return;
        }
        fetchUserOrder();
    }, [userInfo._id]);

    console.log(filter);

    console.log(myOrders[1].status)
    return (
        <div className="my-order">
            <div className="my-order-title">Lịch Sử Mua Hàng</div>
            <div className="my-order-content">
                <div className="my-order-menu_top">
                    <div className="menu_top-items">
                        <div className="menu_top-item active">
                            {myOrders?.length ? <span className="menu_top-item-number">{myOrders.length}</span> : ''}
                            <i className="fas fa-border-all"></i> Tất Cả
                        </div>
                        <div className="menu_top-item">
                            {/* <span className="menu_top-item-number">0</span> */}
                            <i className="fas fa-tools"></i> Đang xử Lý
                        </div>
                        <div className="menu_top-item">
                            {/* <span className="menu_top-item-number">0</span> */}
                            <i className="fas fa-dolly-flatbed"></i> Đang vận chuyển
                        </div>
                        <div className="menu_top-item">
                            {/* <span className="menu_top-item-number">0</span> */}
                            <i className="fas fa-clipboard-check"></i> Đã Nhận
                        </div>
                        <div className="menu_top-item">
                            {/* <span className="menu_top-item-number">0</span> */}
                            <i className="fas fa-times-circle" ></i> Đã Hủy
                        </div>
                    </div>
                </div>
                <div className="my-order-list">
                    <MyOrderList orders={myOrders} />
                </div>
            </div>
        </div>
    );
}

export default MyOrder;