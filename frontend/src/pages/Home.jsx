import sliderData from 'assets/fake-data/slider'
import Slider from 'components/Slider'
import React from 'react'

import Helmet from 'components/Helmet'

const Home = () => {

    return (
        <div>
            <Helmet title="Trang chủ">
                <Slider
                    data={sliderData}
                    control={true}
                    auto={true}
                    timeOut={4000}
                />
            </Helmet>
        </div>
    )
}

export default Home
