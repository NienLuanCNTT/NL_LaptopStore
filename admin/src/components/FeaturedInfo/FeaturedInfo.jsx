import React from 'react'

const FeaturedInfo = () => {
    return (
        <div className="featured">

            <div className="featured__item">
                <div className="featured__item-icon">
                    <i className="fas fa-shopping-bag"></i>
                </div>

                <div className="featured__item-content">
                    <span className="featured__item-content-title">
                        Total Sales
                    </span>
                    <span className="featured__item-content-money">$2,415</span>
                </div>
            </div>

            <div className="featured__item">
                <div className="featured__item-icon">
                    <i className="fas fa-dollar-sign"></i>
                </div>

                <div className="featured__item-content">
                    <span className="featured__item-content-title">
                        Total Income
                    </span>
                    <span className="featured__item-content-money">$3,415</span>
                </div>
            </div>

            <div className="featured__item">
                <div className="featured__item-icon">
                    <i className="fas fa-shopping-basket"></i>
                </div>

                <div className="featured__item-content">
                    <span className="featured__item-content-title">
                        Total Orders
                    </span>
                    <span className="featured__item-content-money">$1,715</span>
                </div>
            </div>

        </div>
    )
}

export default FeaturedInfo
