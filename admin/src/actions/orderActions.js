import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_Detail_FAIL, ORDER_Detail_REQUEST, ORDER_Detail_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "constants/orderConstants";


export const createCheckOut = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.post('http://localhost:5000/api/orders', order
            , {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                }
            }
        )
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const cancleOrder = (order) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/api/orders/cancle', order)
        dispatch({ payload: data.order });

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listOrders = () => async (dispatch) => {
    dispatch({
        type: ORDER_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('/api/orders');
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_LIST_FAIL, payload: error.message })
    }
}

export const DetailOrder = (id) => async (dispatch) => {
    dispatch({
        type: ORDER_Detail_REQUEST
    });
    try {
        const { data } = await axios.get(`/api/orders/${id}`);
        dispatch({ type: ORDER_Detail_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_Detail_FAIL, payload: error.message })
    }
}