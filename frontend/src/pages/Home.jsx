import sliderData from 'assets/fake-data/slider'
// import productData from 'assets/fake-data/product'
import Slider from 'components/Slider'
import ProductCard from 'components/ProductCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Section, { SectionTitle, SectionBody } from 'components/Section'
import Grid from 'components/Grid'
import Helmet from 'components/Helmet'

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();

    }, [])

    return (
        <div>
            <Helmet title="Trang chủ">
                <Slider
                    data={sliderData}
                    control={true}
                    auto={true}
                    timeOut={4000}
                />
                {/* brand section */}

                {/* end brand section */}

                {/* best selling section */}
                <Section>
                    <SectionTitle>Best Sellers</SectionTitle>

                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {
                                products.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>

                {/* end best selling section */}



            </Helmet>
        </div>
    )
}

export default Home
