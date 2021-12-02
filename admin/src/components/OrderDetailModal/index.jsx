import { statusUpdate } from 'actions/orderActions';
import axios from 'axios';
import LoadingBox from 'components/LoadingBox';
import { TOAST_OPTIONS } from 'constants/configConstants';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import numberWithCommas from 'utils/numberWithCommas';

OrderDetailModal.propTypes = {};

function OrderDetailModal(props) {
    const { setdetailModal, curId, orderList, setData } = props;
    const dispatch = useDispatch();

    const [order, setOrder] = useState();

    useEffect(() => {
        const fetchOrderDetail = async () => {
            const orderD = await axios.get(`/api/orders/${curId}`);
            const orderDetail = orderD.data[0] || [];

            setOrder(orderDetail);
        }
        fetchOrderDetail();
    }, [curId]);

    function handleCloseModal() {
        setdetailModal(false);
    }

    const today = new Date();
    const dateTime = `0${today.getDate()}`.slice(-2) + '/' + `0${today.getMonth() + 1}`.slice(-2) + '/' + today.getFullYear()
        + ' ' + `0${today.getHours()}`.slice(-2) + ':' + `0${today.getMinutes()}`.slice(-2);

    const handleStatusUpdate = (id, status, dateUpdate) => {
        toast.warn('🚀🚀 Pending....', {
            ...TOAST_OPTIONS,
        });

        setTimeout(() => {
            dispatch(statusUpdate({ id, status, dateUpdate }));

            const index = orderList?.findIndex(order => order._id === id);

            if (index) {
                const ordersUpdated = [...orderList];
                ordersUpdated[index].status = status;
                ordersUpdated[index].dateUpdate = dateUpdate;
                setData(ordersUpdated);
                setOrder(ordersUpdated[index]);
            }

            toast.success('Update status success', {
                ...TOAST_OPTIONS,
            });

        }, 1500)
    }
    console.log(order);

    return (
        <>
            <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__box">
                        <div className="order__content">

                            <div className="modal__title">
                                Order Details
                                <div
                                    className="modal__close"
                                    onClick={handleCloseModal}
                                >
                                    <i className="far fa-times-circle"></i>
                                </div>
                            </div>

                            {order ? <>
                                <div className="order__info">
                                    <div className="order__info-title">
                                        <h2>INFO</h2>
                                    </div>
                                    <div className="order__info-content">
                                        <div className="item">
                                            <p>ID Order</p>
                                            <span>{order._id}</span>
                                        </div>
                                        <div className="item">
                                            <p>Order Date</p>
                                            <span>{order.dateTime}</span>
                                        </div>
                                        <div className="item">
                                            <p>Received Date</p>
                                            <span>{order.dateUpdate}</span>
                                        </div>
                                        <div className="item">
                                            <p>Satus</p>

                                            {order.status === "pending" &&

                                                (<><div className="btn item-pending">Pending</div>
                                                    <div className="update-status">
                                                        <button onClick={() => handleStatusUpdate(order._id, 'transport', dateTime)}>
                                                            Next Status
                                                        </button>
                                                    </div></>)

                                            }
                                            {order.status === "transport" &&
                                                (<><div className="btn item-transport">Transport</div>
                                                    <div className="update-status">
                                                        <button onClick={() => handleStatusUpdate(order._id, 'receved', dateTime)}>
                                                            Next Status
                                                        </button>
                                                    </div></>)

                                            }
                                            {order.status === "receved" && <div className="btn item-receved">Revieced</div>}
                                            {order.status === "cancle" && <div className="btn item-cancle">Cancled</div>}


                                        </div>
                                    </div>
                                </div>
                                <div className="orders__list">
                                    <div className="orders__list-title">
                                        <h2>Order List</h2>
                                    </div>
                                    <div className="orders__list-item">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>IMG</th>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Into Money</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    order.orderItems.map((order, index) => (
                                                        <tr key={index}>
                                                            <td>{order._id}</td>
                                                            <td>
                                                                <img src={order.image} alt="" />
                                                            </td>
                                                            <td>{order.name}</td>
                                                            <td>{order.quantity}</td>
                                                            <td>{order.price}</td>
                                                            <td>{order.price * order.quantity}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="total">
                                    <b>TOTAL PRICE:
                                        <span className="price">
                                            {
                                                numberWithCommas(
                                                    order.orderItems.reduce(
                                                        (sum, order) =>
                                                            sum +
                                                            order.price *
                                                            order.quantity
                                                        , 0)
                                                )
                                            } VNĐ
                                        </span>
                                    </b>
                                </div>
                                <div className="btn-cancle">
                                    <button
                                        className="btn"
                                        onClick={handleCloseModal}
                                    >
                                        Cancle
                                    </button>
                                </div>
                            </> : <LoadingBox />}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default OrderDetailModal;