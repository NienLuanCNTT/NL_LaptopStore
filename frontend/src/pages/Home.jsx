import sliderData from 'assets/fake-data/slider'
// import productData from 'assets/fake-data/product'
import Slider from 'components/Slider'
import ProductCard from 'components/ProductCard'
import React, { useEffect, useState } from 'react'

import Section, { SectionTitle, SectionBody } from 'components/Section'
import Helmet from 'components/Helmet'
import LoadingBox from 'components/LoadingBox'
import MessageBox from 'components/MessageBox'
import Pagination from 'components/Pagination'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from 'actions/productActions'

const Home = () => {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const paginate = pageNumber => setCurrentPage(pageNumber);





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
                                <SectionTitle>Sản Phẩm</SectionTitle>

                                <SectionBody>


                                    <ProductCard
                                        products={products}
                                        col={4}
                                        currentPage={currentPage}
                                        postsPerPage={postsPerPage}

                                    />

                                    <Pagination products={products} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage} />


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
