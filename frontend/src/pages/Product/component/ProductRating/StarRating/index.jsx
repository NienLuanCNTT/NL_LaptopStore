import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

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
                ></textarea>
                <button>Gửi đánh giá</button>
            </div>
        </div>
    );
};

export default StarRating;