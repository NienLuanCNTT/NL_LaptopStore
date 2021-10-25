import iconUser from 'assets/svg/icon-user.svg';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    starRating: [
        {
            _id: 1,
            name: "Alexander",
            img: iconUser,
            rating: 5,
            note: "Máy mượt học onl tốt",
            datetime: "11/10/2021 14:34",
        }, {
            _id: 2,
            name: "Jonh Dang",
            img: iconUser,
            rating: 4,
            note: "Máy chạy ổn",
            datetime: "15/10/2021 09:25",
        }, {
            _id: 3,
            name: "Khoa Pug",
            img: iconUser,
            rating: 5,
            note: "Máy tốt nha",
            datetime: "14/08/2021 13:44",
        },
    ],
    userComments: [
        {
            _id: 1,
            name: "Pham Minh Hiếu",
            img: iconUser,
            datetime: "14/08/2021 13:13",
            comment: "Cho em hỏi máy này học SolidWorks với autocad đc ko ạ?",
        },
        {
            _id: 2,
            name: "VLinh",
            img: iconUser,
            datetime: "30/09/2021 22:27",
            comment: "Chơi game mượt không?",
        },
        {
            _id: 3,
            name: "Trong Toàn",
            img: iconUser,
            datetime: "14/08/2021 09:25",
            comment: "Máy này xem phim nét không ạ?",
        },
    ]
};

const StarRatingSlice = createSlice({
    name: "starRating",
    initialState,
    reducers: {
        addStarRating: (state, action) => {
            const { rating, comment, userProfile } = action.payload;
            const today = new Date();
            const newStarRating = {
                _id: state.starRating.length + 1,
                name: userProfile.name,
                img: iconUser || userProfile.img,
                rating,
                note: comment,
                datetime:
                    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
            }
            state.starRating.push(newStarRating);
        },
        addComment: (state, action) => {
            const { comment, userProfile } = action.payload;
            const today = new Date();
            const newUserComment = {
                _id: state.userComments.length + 1,
                name: userProfile.name,
                img: iconUser || userProfile.img,
                datetime: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    + ' ' + today.getHours() + ':' + today.getMinutes(),
                comment,
            }
            state.userComments.push(newUserComment);
        }
    }
})

const { reducer, actions } = StarRatingSlice;
export const {
    addStarRating,
    addComment,
} = actions;

export default reducer;
