import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";
import StarRatingSlice from "pages/Product/component/ProductRating/StarRatingSlice";

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';


const store = configureStore({
    reducer: {
        checkList: CheckSlice,
        productList: productListReducer,
        productDetail: productDetailsReducer,
        starRating: StarRatingSlice,
    },
});

export default store;