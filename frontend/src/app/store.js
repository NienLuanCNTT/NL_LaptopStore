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
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateReducer } from "reducers/userReducers";

const persistConfig = {
        key: 'root',
        storage,
}

const initialState = {
        userSignin: {
                userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
        },
}

const rootReducer = combineReducers({
        checkList: CheckSlice,
        productList: productListReducer,
        productDetail: productDetailsReducer,
        categoryList: categoryListReducer,
        priceList: priceListReducer,
        orderCreate: orderCreateReducer,
        starRating: StarRatingSlice,
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdate: userUpdateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
        reducer: persistedReducer,
        initialState,
});

export const persistor = persistStore(store);
export default store;