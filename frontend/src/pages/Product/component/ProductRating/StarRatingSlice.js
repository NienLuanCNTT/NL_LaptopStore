import iconUser from 'assets/svg/icon-user.svg';
import axios from 'axios';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const StarRatingSlice = createSlice({
    name: "starRating",
    initialState,
    reducers: {
        addStarRating: (state, action) => {
            const { productId, rating, comment, userProfile } = action.payload;
            const today = new Date();
            const newStarRating = {
                productId,
                userName: userProfile.name,
                image: iconUser || userProfile.img,
                rating,
                note: comment,
                datetime:
                    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
            }
            axios.post('http://localhost:5000/api/rating', newStarRating);
        },
        addComment: (state, action) => {
            const { productId, comment, userProfile } = action.payload;
            const today = new Date();
            const newUserComment = {
                productId,
                userName: userProfile.name,
                image: iconUser || userProfile.img,
                datetime: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
                comment,
            }
            axios.post('http://localhost:5000/api/usercmts', newUserComment);
        }
    }
})

const { reducer, actions } = StarRatingSlice;
export const {
    addStarRating,
    addComment,
} = actions;

export default reducer;
