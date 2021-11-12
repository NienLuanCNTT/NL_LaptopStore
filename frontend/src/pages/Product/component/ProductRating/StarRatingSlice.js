import axios from 'axios';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};
const today = new Date();
const dateTime = `0${today.getDate()}`.slice(-2) + '/' + `0${today.getMonth() + 1}`.slice(-2) + '/' + today.getFullYear()
    + ' ' + `0${today.getHours()}`.slice(-2) + ':' + `0${today.getMinutes()}`.slice(-2);

const StarRatingSlice = createSlice({
    name: "starRating",
    initialState,
    reducers: {
        addStarRating: (state, action) => {
            const { productId, rating, comment, userInfo } = action.payload;
            const newStarRating = {
                productId,
                userName: userInfo.name,
                image: userInfo.image,
                rating,
                note: comment,
                datetime: dateTime
            }
            axios.post('/api/rating', newStarRating);
        },
        addComment: (state, action) => {
            const { productId, comment, userInfo } = action.payload;
            const newUserComment = {
                productId,
                userName: userInfo.name,
                image: userInfo.image,
                datetime: dateTime,
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
