import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';


const store = configureStore({
    reducer: {
        checkList: CheckSlice,
        productList: productListReducer,
        productDetail: productDetailsReducer,

    },
});

export default store;