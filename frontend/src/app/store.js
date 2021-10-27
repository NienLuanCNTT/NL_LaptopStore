import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';
import { categoryListReducer } from 'reducers/categoryReducers';
import { priceListReducer } from 'reducers/priceReducers';

const store = configureStore({
    reducer: {
        checkList: CheckSlice,
        productList: productListReducer,
        productDetail: productDetailsReducer,
        categoryList: categoryListReducer,
        priceList: priceListReducer,

    },
});

export default store;