import Axios from 'axios';
import { PRICE_REQUEST, PRICE_SUCCESS, PRICE_FAIL } from 'constants/productConstants';

export const listPrice = () => async (dispatch) => {
    dispatch({
        type: PRICE_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/price');
        dispatch({ type: PRICE_SUCCESS, payload: data })
    } catch (error) {
        console.log("Error !!!");
        dispatch({ type: PRICE_FAIL, payload: error.message })
    }
}