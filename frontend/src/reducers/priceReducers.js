const { PRICE_REQUEST, PRICE_SUCCESS, PRICE_FAIL } = require("constants/productConstants");

export const priceListReducer = (state = { loading: true, price: [] }, action) => {
    switch (action.type) {
        case PRICE_REQUEST:
            return { loading: true };
        case PRICE_SUCCESS:
            return { loading: false, price: action.payload };
        case PRICE_FAIL:
            return { loading: false, error: action.payload };

        default: return state;
    }
}