import { DataGrid } from '@material-ui/data-grid';
import { listOrders } from 'actions/orderActions';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import OrderDetailModal from 'components/OrderDetailModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


OrderList.propTypes = {};

function OrderList(props) {

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;
    const [data, setData] = useState(orders);
    const [detailModal, setdetailModal] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrders());
    }, [dispatch]);

    const [curId, setCurId] = useState('');

    const handleDetailOrder = (id) => {
        setdetailModal(true);
        setCurId(id)
    }

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.id}</span>
                )
            }
        },
        {
            field: 'userId', headerName: 'USER ID', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.userId}</span>
                )
            }
        },
        {
            field: 'oder_date', headerName: 'Order Date', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.dateTime}</span>
                )
            }
        },
        {
            field: 'received_date', headerName: 'Order Received', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.dateReceived}</span>
                )
            }
        },
        {
            field: 'totalPrice', headerName: 'TOTAL PRICE', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.totalPrice}</span>
                )
            }
        },
        {
            field: 'status', headerName: 'STATUS', width: 200, headerClassName: 'text', renderCell: (params) => {
                return (

                    <span className="text">
                        {params.row.status === "pending" && <div className="btn item-pending">Pending</div>}
                        {params.row.status === "transport" && <div className="btn item-transport">Transport</div>}
                        {params.row.status === "receved" && <div className="btn item-receved">Revieced</div>}
                        {params.row.status === "cancle" && <div className="btn item-cancle">Cancled</div>}
                    </span>
                )
            }
        },
        {
            field: 'admin', headerName: 'Admin', width: 150, headerClassName: 'text', renderCell: (params) => {
                return (
                    <button
                        className="detail-order"
                        onClick={() => handleDetailOrder(params.row.id)}
                    >
                        <i class="fas fa-info-circle"></i> Detail
                    </button>
                )
            }
        },
    ]
    return (
        <div className="order">
            {detailModal &&
                <OrderDetailModal
                    setdetailModal={setdetailModal}
                    curId={curId}
                />}
            {
                loading ? (<LoadingBox></LoadingBox>) : error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (<div className="userlist__main">

                        <DataGrid
                            disableSelectionOnClick
                            rows={data.map((order, index) => ({
                                id: order._id,
                                userId: order.userId,
                                totalPrice: order.totalPrice,
                                status: order.status,
                                dateTime: order.dateTime,
                                dateReceived: order.dateReceived,
                            }))}

                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>)
            }
        </div>
    );
}

export default OrderList;