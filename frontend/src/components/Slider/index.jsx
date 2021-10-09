import React from 'react'
import PropTypes from 'prop-types'


const Slider = props => {

    const data = props.data;

    const activeSlide = 0;

    return (
        <div className="slider">
            {
                data.map((item, index) => (
                    // <div className={`slider__item ${activeSlide ? 'active' : ''} `}>
                    //     <div className="slider__item__image">
                    //         <img src={item.img} alt="" />
                    //     </div>
                    // </div>
                    <sliderItem key={index} item={item} active={activeSlide} />
                ))
            }
        </div>
    )
}




Slider.propTypes = {
    data: PropTypes.array.isRequired
}

const sliderItem = props => (
    <div className={`slider__item ${props.active ? 'active' : ''} `}>
        <div className="slider-item__image">
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default Slider
