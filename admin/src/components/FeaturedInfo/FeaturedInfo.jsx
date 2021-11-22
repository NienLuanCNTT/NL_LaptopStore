import React from 'react'

const FeaturedInfo = () => {
    return (
        <div className="featured">

            <div className="featured__item">
                <span className="featured__item-title">
                    Revenue
                </span>
                <div className="featured__item-content">
                    <span className="featured__item-content-money">$2,415</span>
                    <span className="featured__item-content-moneyrate">
                        -11.4<i class="fas fa-arrow-down"></i>
                    </span>
                </div>
                <div className="featured__item-sub">Compared to last month</div>
            </div>

            <div className="featured__item">
                <span className="featured__item-title">
                    Sales
                </span>
                <div className="featured__item-content">
                    <span className="featured__item-content-money">$4,415</span>
                    <span className="featured__item-content-moneyrate">
                        -1.4<i class="fas fa-arrow-down"></i>
                    </span>
                </div>
                <div className="featured__item-sub">Compared to last month</div>
            </div>

            <div className="featured__item">
                <span className="featured__item-title">
                    Cost
                </span>
                <div className="featured__item-content">
                    <span className="featured__item-content-money">$2,225</span>
                    <span className="featured__item-content-moneyrate">
                        +2.4<i class="fas fa-arrow-up negative"></i>
                    </span>
                </div>
                <div className="featured__item-sub">Compared to last month</div>
            </div>

        </div>
    )
}

export default FeaturedInfo
