import { configureStore } from "@reduxjs/toolkit";
import CheckSlice from "pages/CheckOut/CheckSlice"

const store = configureStore({
    reducer: {
        checkList: CheckSlice
    },
});

export default store;