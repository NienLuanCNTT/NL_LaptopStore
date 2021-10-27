import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addStarRating } from '../StarRatingSlice';

const StarRating = (props) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [isRating, setIsRating] = useState(false);
    const [cmtRating, setcmtRating] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        setcmtRating(e.target.value);
    }

    const handleAddStarRating = (rating, comment, userProfile) => {
        setIsRating(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(addStarRating({ rating, comment, userProfile }));
                toast.success("Add a Rating is complete 👌👌");

                resolve(true);
                setIsRating(false);
            }, 2000);
        })
    }

    const { useprofile } = props;

    return (
        <div className="star-rating-box">
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    const style = {
                        color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                    }

                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                            />
                            <i
                                className="fas fa-star"
                                style={style}
                                onMouseEnter={() => (setRating(ratingValue))}
                                onMouseLeave={() => setHover(null)}
                            ></i>
                        </label>
                    )
                })}
                <div className="level-rating">
                    {
                        rating === 1 ? "Không thích"
                            : rating === 2 ? "Tạm được"
                                : rating === 3 ? "Bình thường"
                                    : rating === 4 ? "Hài lòng"
                                        : rating === 5 ? "Tuyệt vời"
                                            : ""
                    }
                </div>
            </div>
            <div className="comment-rating">
                <textarea
                    name="cmt-rating"
                    cols="30"
                    rows="10"
                    placeholder="Viết đánh giá của bạn"
                    onChange={handleOnChange}
                ></textarea>
                <button onClick={() => handleAddStarRating(rating, cmtRating, useprofile)}>
                    {isRating && <i className="fas fa-spinner fa-spin"></i>} Gửi đánh giá
                </button>
            </div>

        </div>
    );
};

export default StarRating;