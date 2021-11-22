import { listProducts } from 'actions/productActions';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Chart = () => {

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);

    console.log('products: ', products);


    return (

        <div>
            {
                loading ? (<LoadingBox></LoadingBox>) : error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (<div className="chart">
                        <div className="chart__title">
                            Sales Analytics
                        </div>
                    </div>)
            }
        </div>

    )
}

export default Chart
