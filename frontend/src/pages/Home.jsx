import sliderData from 'assets/fake-data/slider'
import Slider from 'components/Slider'
import React, { useState } from 'react'


const Home = () => {

    const [data] = useState(sliderData);

    return (
        <Slider data={data} />
    )
}

export default Home
