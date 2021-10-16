import { createSlice } from "@reduxjs/toolkit";
import productImg1 from 'assets/images/products/2.jpg';
import productImg2 from 'assets/images/products/3.jpg';

const checkList = [
    {
        _id: 1,
        name: "Laptop Acer Nitro Gaming AN515 57 51G6 i5 11400H/8GB/512GB SSD/RTX 3050 4GB/Win10",
        image: productImg1,
        quantity: 1,
        price: 25999000,
    },
    {
        _id: 2,
        name: "Laptop Acer Predator Gaming PH315 54 78W5 i7 11800H/8GB/512GB SSD/RTX 3050Ti 4GB/Win10",
        image: productImg2,
        quantity: 2,
        price: 33999000,
    }
]

const initialState = {
    checkList: checkList,
};

const CheckSlice = createSlice({
    name: 'checkList',
    initialState,
    reducers: {
        selectQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const index = state.checkList.findIndex((productList) => productList._id === id);
            if (index < 0) return;
            state.checkList[index].quantity = quantity;
        },
        removeProduct: (state, action) => {
            const { id } = action.payload;
            const index = state.checkList.findIndex((productList) => productList._id === id);
            if (index < 0) return;
            state.checkList.splice(index, 1);
        },
    }
})

const { reducer, actions } = CheckSlice;
export const {
    selectQuantity,
    removeProduct,
} = actions;

export default reducer;