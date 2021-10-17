import sliderData from 'assets/fake-data/slider'
// import productData from 'assets/fake-data/product'
import Slider from 'components/Slider'
import ProductCard from 'components/ProductCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Section, { SectionTitle, SectionBody } from 'components/Section'
import Grid from 'components/Grid'
import Helmet from 'components/Helmet'
import LoadingBox from 'components/LoadingBox'
import MessageBox from 'components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from 'actions/productActions'

const Home = () => {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div>
            {
                loading ? (<LoadingBox></LoadingBox>) : error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (
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
                    )
            }

        </div>
    )
}

export default Home
