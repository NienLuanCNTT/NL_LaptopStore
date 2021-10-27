import Axios from 'axios';
import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from 'constants/productConstants';

export const listCategory = () => async (dispatch) => {
    dispatch({
        type: CATEGORY_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/category');
        dispatch({ type: CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        console.log("Error !!!");
        dispatch({ type: CATEGORY_FAIL, payload: error.message })
    }
}