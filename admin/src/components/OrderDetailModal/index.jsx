import React, { useEffect } from 'react';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { DetailOrder } from 'actions/orderActions';
import numberWithCommas from 'utils/numberWithCommas';

OrderDetailModal.propTypes = {};

function OrderDetailModal(props) {
    const { setdetailModal, curId } = props;
    const dispatch = useDispatch();

    const DetOrder = useSelector((state) => state.detailOrder);
    const { loading, error, orders } = DetOrder;

    useEffect(() => {
        dispatch(DetailOrder(curId));
    }, [curId]);

    async function handleCloseModal() {
        localStorage.removeItem('detailOrder');
        setdetailModal(false);
    }



    console.log(orders?.orderItems)
    return (
        <>


            <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__box">
                        {loading ? (<LoadingBox></LoadingBox >) : error ?
                            (<MessageBox variant="danger">{error}</MessageBox>) :
                            (
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

                                    <div className="order__info">
                                        <div className="order__info-title">
                                            <h2>INFO</h2>
                                        </div>
                                        <div className="order__info-content">
                                            <div className="item">
                                                <p>ID Order</p>
                                                <span>{orders[0]._id}</span>
                                            </div>
                                            <div className="item">
                                                <p>Order Date</p>
                                                <span>{orders[0].dateTime}</span>
                                            </div>
                                            <div className="item">
                                                <p>Received Date</p>
                                                <span>{orders[0].dateReceived}</span>
                                            </div>
                                            <div className="item">
                                                <p>Satus</p>
                                                <span className="text">
                                                    {orders[0].status === "pending" && <div className="btn item-pending">Pending</div>}
                                                    {orders[0].status === "transport" && <div className="btn item-transport">Transport</div>}
                                                    {orders[0].status === "receved" && <div className="btn item-receved">Revieced</div>}
                                                    {orders[0].status === "cancle" && <div className="btn item-cancle">Cancled</div>}
                                                </span>
                                                <div className="update-status">
                                                    <button>Next Status</button>
                                                </div>
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
                                                    <th>ID</th>
                                                    <th>IMG</th>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Into Money</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        orders[0].orderItems.map((order, index) => (
                                                            <tr>
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
                                                        orders[0].orderItems.reduce(
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

                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>

    );
}

export default OrderDetailModal;