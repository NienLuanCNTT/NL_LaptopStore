import sliderData from 'assets/fake-data/slider'
import productData from 'assets/fake-data/product'
import Slider from 'components/Slider'
import ProductCard from 'components/ProductCard'
import React from 'react'

import Section, { SectionTitle, SectionBody } from 'components/Section'
import Grid from 'components/Grid'
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
                {/* brand section */}

                {/* end brand section */}

                {/* best selling section */}
                <Section>
                    <SectionTitle>Best Sellers</SectionTitle>

                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {
                                productData.map((product) => (
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
