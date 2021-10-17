import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'boxicons'

import numberWithCommas from 'utils/numberWithCommas'

const ProductCard = props => {
    const product = props.product;
    return (
        <div className="product-card">
            <Link to={`/product/${product._id}`}>
<<<<<<< HEAD

=======
>>>>>>> 8d32840fc3a80e3c0c5bd22d686799bd3ed6c1bb
                <div className="product-card__image">
                    <img src={product.image} alt="" />
                </div>
                <div className="product-card__info">
                    <div className="product-card__info__name">
                        {product.name}
                    </div>
                    <div className="product-card__info__price">
                        <span className="product-card__info__price__text">
                            Giá từ: </span> {numberWithCommas(product.price)} <span className="product-card__info__price__currency">₫</span>
                    </div>
                    {
                        product.old_price ? (
                            <div className="product-card__info__old-price">
                                {numberWithCommas(product.old_price)} ₫
                            </div>
                        ) : null
                    }
                    <div className="product-card__info__note">
                        <box-icon name='gift' color="#d53b2a"></box-icon> <span className="product-card__info__note__text">{product.note}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,

}

export default ProductCard
