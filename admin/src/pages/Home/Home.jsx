import FeaturedInfo from 'components/FeaturedInfo/FeaturedInfo'
import React from 'react'


const Home = () => {
    document.title = "Admin - Home"
    return (

        <div className="home">
            <FeaturedInfo />

        </div>
    )
}

export default Home
