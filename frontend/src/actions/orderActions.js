import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "constants/orderConstants"
import { cartEmpty } from '../pages/CheckOut/CheckSlice';


export const createCheckOut = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        // const { userSignin: { userInfo } } = getState();
        const { data } = await axios.post('/api/orders', order
            , {
                headers: {
                    Authorization: `Bearer `,
                    // Authorization: `Bearer ${userInfo.token}`,
                }
            }
        )
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch(cartEmpty());
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

/*
 dispatch(createCheckOut({
            ShippingAddress: {
                city: '',
                district: '',
                commune: '',
                address: ''
            }
        }));
*/