import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, updateProductImage } from 'actions/productActions';
import { toast } from 'react-toastify';
import { PRODUCT_UPDATE_RESET } from 'constants/productConstants';

const Product = () => {
    document.title = 'Admin - ProductDetail';
    const { id } = useParams();
    const [product, setProduct] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await axios.get(`/api/products/${id}`);
            setProduct(product.data);
        }

        fetchProduct();
    }, []);

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [oldPrice, setOldPrice] = useState();
    const [note, setNote] = useState();
    const [rating, setRating] = useState();
    const [numReviews, setNumReviews] = useState();
    const [countInStock, setCountInStock] = useState();
    const [image, setImage] = useState('');

    useEffect(() => {
        dispatch({ type: PRODUCT_UPDATE_RESET });
        // dispatch({ type: USER_IMAGE_RESET })
    }, [dispatch]);



    const productUpdate = useSelector((state) => state.productUpdate);
    const { success, error, loading } = productUpdate;


    const productUpdateImage = useSelector((state) => state.productUpdateImage);
    const { success: successImage, error: errorImage, loading: loadingImage } = productUpdateImage;




    const submitInfo = (e) => {
        e.preventDefault();
        if (image === '') {
            dispatch(updateProduct({ id: product._id, name, category, price, oldPrice, note, countInStock }));
            console.log('Không có hình')
        }
        else {
            dispatch(updateProductImage({ id: product._id, name, category, price, oldPrice, note, countInStock, image }));
            console.log('Có hình')
            setImage('');
        }
        toast.success('Cập nhật thành công');
    }


    const onImageChange = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
    }



    return (
        <>
            {
                product &&
                <div className="product">
                    <div className="product__title">
                        <div className="product__title-edit">Edit Product</div>
                        <Link to='/createProduct' >
                            <button className="product__title-create">Create</button>
                        </Link>
                    </div>

                    <div className="product__content">
                        <form className="updateForm" onSubmit={submitInfo} >

                            {/* left */}
                            <div className="updateForm__left">

                                <div className="updateForm__left-item">
                                    <label className="item__label">ID: </label>
                                    <span className="id">{product._id}</span>
                                </div>

                                <div className="updateForm__left-item fileImage">

                                    <img className="leftImg" src={product.image} alt="" />

                                    <div className="choose">
                                        <input className="leftFile" type="file" onChange={e => onImageChange(e)} />
                                        <i className="fas fa-upload"></i>
                                    </div>
                                </div>


                                <div className="updateForm__left-item">
                                    <label className="item__label">Product Name</label>
                                    <input className="item__input" type="text" defaultValue={product.name} onChange={e => setName(e.target.value)} />
                                </div>

                                <div className="updateForm__left-item">
                                    <label className="item__label">Category</label>
                                    <input className="item__input" type="text" defaultValue={product.category} onChange={e => setCategory(e.target.value)} />
                                </div>

                                <div className="updateForm__left-item">
                                    <label className="item__label">Note</label>
                                    <input className="item__input" type="text" defaultValue={product.note} onChange={e => setNote(e.target.value)} />
                                </div>

                            </div>


                            {/* right  */}

                            <div className="updateForm__right">
                                <div className="updateForm__right-item">
                                    <label className="item__label">Current Price (₫)</label>
                                    <input className="item__input" type="text" defaultValue={product.price} onChange={e => setPrice(e.target.value)} />
                                </div>

                                <div className="updateForm__right-item">
                                    <label className="item__label">Old Price (₫)</label>
                                    <input className="item__input" type="text" defaultValue={product.old_price} onChange={e => setOldPrice(e.target.value)} />
                                </div>

                                <div className="updateForm__right-item">
                                    <label className="item__label">Count In Stock</label>
                                    <input className="item__input" type="text" defaultValue={product.countInStock} onChange={e => setCountInStock(e.target.value)} />
                                </div>

                                <div className="updateForm__right-item">
                                    <Link to={`/configadd/${product._id}`}>
                                        <button className="config">Add Config</button>
                                    </Link>
                                </div>



                                <div className="updateForm__right-item">
                                    <Link to={`/rating/${product._id}`}>
                                        <button className="rating">Rating</button>
                                    </Link>

                                    <Link to={`/comment/${product._id}`}>
                                        <button className="rating cmt">Comment</button>
                                    </Link>

                                </div>



                                <button type="submit" className="rightUpdate">Update</button>
                            </div>
                        </form>
                    </div>


                </div>
            }
        </>
    )
}

export default Product
