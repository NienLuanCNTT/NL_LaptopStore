import { configureStore } from "@reduxjs/toolkit";


import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

import { productDetailsReducer, productListReducer } from 'reducers/productReducers';
import { orderCreateReducer, orderDetailReducer, orderListReducer } from './../reducers/orderReduces';
import { userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateReducer } from "reducers/userReducers";
import { UpdateConfigReducer } from "reducers/configReducers";

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

        userList: userListReducer,
        orderList: orderListReducer,
        detailOrder: orderDetailReducer,
        config: UpdateConfigReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
        reducer: persistedReducer,
        initialState,
});

export const persistor = persistStore(store);
export default store;