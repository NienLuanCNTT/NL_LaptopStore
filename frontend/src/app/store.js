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
<<<<<<< HEAD
        categoryList: categoryListReducer,
        priceList: priceListReducer,

=======
        starRating: StarRatingSlice,
>>>>>>> ecc9285a825b8f16d81e5ec2d99623de5884a835
    },
});

export default store;