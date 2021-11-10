import React from 'react';

const StarRatingList = (props) => {
    const { userComments } = props;
    return (
        <div className="product__comment-list">
            {
                [].concat(userComments)
                    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                    .map((item, index) => (
                        <div key={index} className="comment">
                            <div className="comment-logo">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="comment-detail">
                                <p className="item-name">
                                    <b>{item.userName}</b>
                                    <i>{item.datetime}</i>
                                </p>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

export default StarRatingList;