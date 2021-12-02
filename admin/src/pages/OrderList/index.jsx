import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import LoadingBox from 'components/LoadingBox';
import OrderDetailModal from 'components/OrderDetailModal';
import React, { useEffect, useState } from 'react';


OrderList.propTypes = {};

function OrderList(props) {

    const [data, setData] = useState();
    const [detailModal, setdetailModal] = useState(false)

    useEffect(() => {
        const fetchOrderList = async () => {
            const orders = await axios.get('/api/orders');
            const orderList = orders.data || [];

            setData(orderList);
        }
        fetchOrderList();
    }, []);

    const [curId, setCurId] = useState();

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
            field: 'update_date', headerName: 'DATE UPDATE', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.dateUpdate}</span>
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
                    orderList={data}
                    setData={setData}
                />}
            <div className="userlist__main">
                {data ?
                    <DataGrid
                        disableSelectionOnClick
                        rows={data.map((order, index) => ({
                            id: order._id,
                            userId: order.userId,
                            totalPrice: order.totalPrice,
                            status: order.status,
                            dateTime: order.dateTime,
                            dateUpdate: order.dateUpdate,
                        }))}

                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    /> : <LoadingBox />
                }

            </div>
        </div>
    );
}

export default OrderList;