import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice";
import StarRatingSlice from "pages/Product/component/ProductRating/StarRatingSlice";

import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';
import { categoryListReducer } from 'reducers/categoryReducers';
import { priceListReducer } from 'reducers/priceReducers';
import { orderCreateReducer } from './../reducers/orderReduces';

const persistConfig = {
        key: 'root',
        storage,
}

const rootReducer = combineReducers({
        checkList: CheckSlice,
        productList: productListReducer,
        productDetail: productDetailsReducer,
        categoryList: categoryListReducer,
        priceList: priceListReducer,
        orderCreate: orderCreateReducer,
        starRating: StarRatingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
        reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;