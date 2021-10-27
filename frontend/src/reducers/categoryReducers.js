const { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } = require("constants/productConstants");

export const categoryListReducer = (state = { loading: true, category: [] }, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return { loading: true };
        case CATEGORY_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_FAIL:
            return { loading: false, error: action.payload };

        default: return state;
    }
}