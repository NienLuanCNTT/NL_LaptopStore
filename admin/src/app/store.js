import { configureStore } from "@reduxjs/toolkit";


import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';
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
        productList: productListReducer,
        productDetail: productDetailsReducer,
        orderCreate: orderCreateReducer,
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