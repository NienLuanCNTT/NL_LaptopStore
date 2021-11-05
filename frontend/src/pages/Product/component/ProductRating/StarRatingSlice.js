import axios from 'axios';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const StarRatingSlice = createSlice({
    name: "starRating",
    initialState,
    reducers: {
        addStarRating: (state, action) => {
            const { productId, rating, comment, userInfo } = action.payload;
            const today = new Date();
            const newStarRating = {
                productId,
                userName: userInfo.name,
                image: userInfo.image,
                rating,
                note: comment,
                datetime:
                    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
            }
            axios.post('/api/rating', newStarRating);
        },
        addComment: (state, action) => {
            const { productId, comment, userInfo } = action.payload;
            const today = new Date();
            const newUserComment = {
                productId,
                userName: userInfo.name,
                image: userInfo.image,
                datetime: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
                comment,
            }
            axios.post('/api/usercmts', newUserComment);
        }
    }
})

const { reducer, actions } = StarRatingSlice;
export const {
    addStarRating,
    addComment,
} = actions;

export default reducer;
