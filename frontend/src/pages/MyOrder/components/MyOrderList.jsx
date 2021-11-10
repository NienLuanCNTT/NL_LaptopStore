import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from './../../../utils/numberWithCommas';

const MyOrderList = (props) => {
    const { orders, currentTab } = props;

    return (
        <div>
            {
                orders ? [].concat(orders)
                    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                    .filter(order => currentTab === "all" ? true : order.status === currentTab)
                    .map((order, index) => (
                        <div key={index} className="my-order-list-item">
                            <div className="item-tag"
                                style={{
                                    color:
                                        order.status === "receved" ? "green" :
                                            order.status === "cancle" ? "#d40a25" :
                                                "#ffc318"
                                }}
                            >
                                <i className="fas fa-tag"></i>
                            </div>
                            <div className="item-top">
                                <div className="item-top-left">
                                    <i className="far fa-clock"></i>
                                    <i> Ngày đặt hàng: {order.dateTime}</i>
                                </div>
                                <div className="item-top-status_right">
                                    {order.status === "pending" && <div className="btn item-pending">Đang xử lý</div>}
                                    {order.status === "transport" && <div className="btn item-transport">Đang vận chuyển</div>}
                                    {order.status === "receved" && <div className="btn item-receved">Đã nhận</div>}
                                    {order.status === "cancle" && <div className="btn item-cancle">Đã hủy</div>}
                                </div>
                            </div>
                            {
                                order.orderItems.map((item, index) => (
                                    <div key={index} className="item-content-items">
                                        <Link to={`/product/${item._id}`} className="item-content">
                                            <img src={item.image} alt="" />
                                            <div className="item-content-info">
                                                <p>{item.name}</p>
                                                <i>Số lượng: x{item.quantity}</i>
                                            </div>
                                            <div className="item-content-price">
                                                <b>
                                                    {numberWithCommas(item.price * item.quantity)}₫
                                                </b>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                            <div className="item-total">
                                Total: <b>{numberWithCommas(order.totalPrice)} ₫</b>
                            </div>
                            {
                                order.status === "pending"
                                && <div className="item-cancle btn">Hủy đặt hàng</div>
                            }
                        </div>
                    )) : <div className="item-order-empty">Chưa có đơn hàng nào!</div>
            }
        </div>
    );
};

export default MyOrderList;