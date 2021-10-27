import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";
import StarRatingSlice from "pages/Product/component/ProductRating/StarRatingSlice";

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

                starRating: StarRatingSlice,
        },
});

export default store;