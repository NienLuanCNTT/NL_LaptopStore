import React from 'react'
import PropTypes from 'prop-types'


const Slider = props => {

    const data = props.data;

    return (
        <div className="slider">
            {
                data.map((item, index) => (
                    <sliderItem key={index} item={item} />
                ))
            }
        </div>
    )
}

Slider.propTypes = {
    data: PropTypes.array.isRequired
}

const sliderItem = props => {
    <div className="slider-item">
        <div className="slider-item__image">
            <img src={props.img} alt="" />
        </div>
    </div>
}

export default Slider
