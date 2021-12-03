import { configureStore } from "@reduxjs/toolkit";
import { UpdateConfigReducer } from "reducers/configReducers";
import { productDetailsReducer, productListReducer } from 'reducers/productReducers';
import { userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateImageReducer, userUpdateReducer } from "reducers/userReducers";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { orderCreateReducer } from './../reducers/orderReduces';




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
        userUpdateImage: userUpdateImageReducer,
        userList: userListReducer,
        config: UpdateConfigReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
        reducer: persistedReducer,
        initialState,
});

export const persistor = persistStore(store);
export default store;