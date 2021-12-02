import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_Detail_FAIL, ORDER_Detail_REQUEST, ORDER_Detail_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "constants/orderConstants"

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case ORDER_CREATE_RESET:
            return {};
        default: return state;
    }
}

export const orderListReducer = (state = { loading: true, orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };

        default: return state;
    }
}

export const orderDetailReducer = (state = { loading: true, orders: [] }, action) => {
    switch (action.type) {
        case ORDER_Detail_REQUEST:
            return { loading: true };
        case ORDER_Detail_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_Detail_FAIL:
            return { loading: false, error: action.payload };

        default: return state;
    }
}
