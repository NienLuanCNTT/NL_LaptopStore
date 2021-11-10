import React from 'react';
import ProductRating from './index';

const StarRatingList = (props) => {
    const { starRating } = props;
    const ratingLimit = [];
    const index = starRating.length
    for (let i = 1; i <= (index <= 10 ? index : 10); i++) {
        [].concat(starRating)
            .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
            .map((item) => (ratingLimit.push(item)));
    }
    return (
        <div>
            {
                ratingLimit.map((item, index) => (
                    <div key={index} className="item">
                        <div className="item-logo">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item-detail">
                            <p className="item-name">
                                <b >{item.userName}</b>
                                <i>{item.datetime}</i>
                            </p>
                            <div className="item-star-rate">
                                <ProductRating rating={item.rating} />
                            </div>
                            <p>{item.note}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default StarRatingList;