import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";

import { productListReducer } from 'reducers/productReducers';


const store = configureStore({
    reducer: {
        checkList: CheckSlice,
        productList: productListReducer,

    },
});

export default store;