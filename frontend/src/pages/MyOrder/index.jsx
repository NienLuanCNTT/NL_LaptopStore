import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyOrderList from './components/MyOrderList';

const MyOrder = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [myOrders, setmyOrders] = useState();

    useEffect(() => {
        const fetchUserOrder = async () => {
            const orders = await axios.get(`http://localhost:5000/api/orders/${userInfo._id}`);
            const data = orders.data || [];

            // const newOrder = data.map((order, index) => ({
            //     orderItems: order.orderItems,
            //     status: order.status,
            // }
            // ));

            // console.log(newOrder);
            setmyOrders(data);
            return;
        }
        fetchUserOrder();
    }, [userInfo._id]);

    const [currentTab, setCurrentTab] = useState('all');

    const countStatus = (status) => {
        return myOrders?.filter(bill => bill.status === status).length;
    }

    return (
        <div className="my-order">
            <div className="my-order-title">Lịch Sử Mua Hàng</div>
            <div className="my-order-content">
                <div className="my-order-menu_top">
                    <div className="menu_top-items">
                        <div className="menu_top-item active"
                            onClick={() => setCurrentTab('all')}
                        >
                            {myOrders?.length ? <span className="menu_top-item-number">{myOrders.length}</span> : ''}
                            <i className="fas fa-border-all"></i> Tất Cả
                        </div>
                        <div className="menu_top-item"
                            onClick={() => setCurrentTab('pending')}
                        >
                            {
                                countStatus('pending') &&
                                <span className="menu_top-item-number">
                                    {countStatus("pending")}
                                </span>
                            }
                            <i className="fas fa-tools"></i> Đang xử Lý
                        </div>
                        <div className="menu_top-item"
                            onClick={() => setCurrentTab('transport')}
                        >
                            {
                                countStatus('transport') ?
                                    <span className="menu_top-item-number">
                                        {countStatus("transport")}
                                    </span> : ''
                            }
                            <i className="fas fa-dolly-flatbed"></i> Đang vận chuyển
                        </div>
                        <div className="menu_top-item"
                            onClick={() => setCurrentTab('receved')}
                        >
                            {
                                countStatus('receved') ?
                                    <span className="menu_top-item-number">
                                        {countStatus("receved")}
                                    </span> : ''
                            }
                            <i className="fas fa-clipboard-check"></i> Đã Nhận
                        </div>
                        <div className="menu_top-item"
                            onClick={() => setCurrentTab('cancle')}
                        >
                            {
                                countStatus('cancle') ?
                                    <span className="menu_top-item-number">
                                        {countStatus("cancle")}
                                    </span> : ''
                            }
                            <i className="fas fa-times-circle" ></i> Đã Hủy
                        </div>
                    </div>
                </div>
                <div className="my-order-list">
                    <MyOrderList orders={myOrders} currentTab={currentTab} />
                </div>
            </div>
        </div>
    );
}

export default MyOrder;