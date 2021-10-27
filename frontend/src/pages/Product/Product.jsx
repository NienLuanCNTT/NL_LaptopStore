import { detailProduct } from 'actions/productActions';
import FEcredit from 'assets/logo/fecredit.png';
import VNpay from 'assets/logo/vnpay.png';
import iconUser from 'assets/svg/icon-user.svg';

import 'boxicons';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { TOAST_OPTIONS } from 'constants/productConstants';
import { addToCart } from 'pages/CheckOut/CheckSlice';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import numberWithCommas from 'utils/numberWithCommas';
import ProductCheck from './component/ProductCheck';

import ProductConfig from './component/ProductConfig';
import ProductRating from './component/ProductRating';
import StarRating from './component/ProductRating/StarRating';
import { addComment } from './component/ProductRating/StarRatingSlice';

import Helmet from 'components/Helmet';



const Product = (props) => {
    const dispatch = useDispatch();
    // get id inside URl
    const { id } = useParams();
    const productDetail = useSelector((state) => state.productDetail);
    console.log(productDetail);
    const { loading, error, product } = productDetail;

    const handleAddProduct = (id, product) => {
        dispatch(addToCart({ id, product }));
        toast.success('Added a product to the cart 👌👌', {
            ...TOAST_OPTIONS,
        })
    }

    useEffect(() => {
        dispatch(detailProduct(id));
    }, [dispatch, id]);

    const [rating, setRating] = useState(null);

    const handleOpenRating = () => {
        const ratingValue = true;
        setRating(ratingValue);
    }

    const userProfile = {
        _id: 5,
        name: 'Arthor',
        img: iconUser,
    }

    const [isComment, setIsComment] = useState(false);
    const [comment, setcomment] = useState('');

    const handleOnChange = (e) => {
        setcomment(e.target.value);
    }
    const handleClickCommet = (comment, userProfile) => {
        setIsComment(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(addComment({ comment, userProfile }))
                toast.success("Add a commet is complete 👌👌");

                resolve(true);
                setIsComment(false);
            }, 1000);
        })
    }

    const { starRating } = useSelector((state) => state.starRating);
    const { userComments } = useSelector((state) => state.starRating);

    const ModalCheckOpen = (id, product) => {
        const ModalCheck = document.querySelector('.modal__product-check');
        ModalCheck.style.display = 'block';
        dispatch(addToCart({ id, product }));
        toast.success('Added a product to the cart 👌👌', {
            ...TOAST_OPTIONS,
        });
    }
    function ModalConfigOpen() {
        const ModalCheck = document.querySelector('.modal__product-config');
        ModalCheck.style.display = 'block';
    }


    return (
        <Helmet title="Chi tiết">
            <div>
                {
                    loading ? (<LoadingBox></LoadingBox>) : error ?
                        (<MessageBox variant="danger">{error}</MessageBox>) :
                        (
                            <div className="product">
                                <ProductConfig product={product} />
                                <ProductCheck />
                                <div className="product__detail">
                                    <div className="product__detail-top">
                                        <div className="product__detail-top-name">
                                            <p>
                                                {product.name}
                                                <span>(No.00762458)</span>
                                            </p >
                                        </div >
                                        <a href="#rating">
                                            <div className="product__detail-top-ratting">
                                                <div className="product__detail-top-ratting-star">
                                                    <ProductRating rating={product.rating} numReviews={product.numReviews} />
                                                </div>
                                                <div className="product__detail-top-ratting-number">{product.numReviews} đánh giá</div>
                                            </div>
                                        </a>
                                    </div >
                                    <div className="product__detail-content">
                                        <div className="product__detail-content-left">
                                            <div className="product__detail-content-left-img">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div className="product__detail-content-left-config">
                                                <ul>
                                                    <li>
                                                        <box-icon name='laptop' color="#b6bfc7"></box-icon>
                                                        <p>15.6", 1920 x 1080 Pixel, IPS, 144 Hz, Acer ComfyView LED-backlit</p>
                                                    </li>
                                                    <li>
                                                        <box-icon type='solid' name='chip' color="#b6bfc7"></box-icon>
                                                        <p>Intel Core i5-11400H</p>
                                                    </li>
                                                    <li>
                                                        <box-icon type='solid' name='microchip' color="#b6bfc7"></box-icon>
                                                        <p>8 GB, DDR4, 3200 MHz</p>
                                                    </li>
                                                    <li>
                                                        <box-icon name='hdd' color="#b6bfc7"></box-icon>
                                                        <p>SSD 512 GB</p>
                                                    </li>
                                                    <li>
                                                        <box-icon name='barcode-reader' color="#b6bfc7"></box-icon>
                                                        <p>NVIDIA GeForce RTX3050 4GB</p>
                                                    </li>
                                                </ul>
                                                <p className="btn config-detail-modal" onClick={ModalConfigOpen}>Xem chi tiết thông số kỹ thuật</p>
                                            </div>
                                        </div>
                                        <div className="product__detail-content-right">
                                            <div className="product__detail-content-right-price">{numberWithCommas(product.price)} ₫</div>
                                            <div className="product__detail-content-right-uudai">
                                                <p>
                                                    <span><box-icon name='check-circle' type='solid' color='#03fd1e' ></box-icon></span>
                                                    Tặng PMH 200.000đ mua máy in Brother
                                                </p>
                                                <p>
                                                    <span><box-icon name='check-circle' type='solid' color='#03fd1e' ></box-icon></span>
                                                    Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy
                                                </p>
                                                <p>
                                                    <span><box-icon name='check-circle' type='solid' color='#03fd1e' ></box-icon></span>
                                                    Tặng PMH 100.000đ mua Microsoft 365 Personal/Family/Home & Student khi mua Online đến 31/10
                                                </p>
                                                <p>
                                                    <span><box-icon name='check-circle' type='solid' color='#03fd1e' ></box-icon></span>
                                                    Tặng thêm 1 năm bảo hành chính hãng Acer
                                                </p>
                                            </div>
                                            <h3>Ưu đãi khi thanh toán</h3>
                                            <div className="product__detail-content-right-uudaithanhtoan">
                                                <div>
                                                    <img src={VNpay} alt="" />
                                                    <p>Giảm: 300.000đ</p>
                                                    <i>sản phẩm từ 2Tr</i>
                                                </div>
                                                <div>
                                                    <img src={FEcredit} alt="" />
                                                    <p>Giảm: 200.000đ</p>
                                                    <i>sản phẩm từ 1Tr</i>
                                                </div>
                                            </div>
                                            <div className="product__detail-content-right-pay">
                                                <button
                                                    id="btn-check"
                                                    onClick={() => { ModalCheckOpen(product._id, product) }}
                                                    className="btn-muangay"
                                                >
                                                    Mua ngay
                                                </button>
                                                <button
                                                    to="/product/1"
                                                    className="btn-addtocart"
                                                    onClick={() => { handleAddProduct(product._id, product) }}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                            <div className="product__detail-content-right-paygop">
                                                <div>
                                                    <Link to="/product">
                                                        <b>TRẢ GÓP 0%</b>
                                                        <p>Duyệt nhanh qua điện thoại</p>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/product">
                                                        <b>TRẢ GÓP Qua thẻ</b>
                                                        <p>Visa, Master Card, JCB</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                                <div className="product__tongquan">
                                    <h2>Đánh giá chi tiết</h2>
                                    <p>Với ngoại hình tạo nên từ hàng loạt đường nét gai góc, hầm hố; Acer Predator Helios 300 2021 sẽ phù hợp với các bạn game thủ cá tính, muốn khẳng định phong cách mọi lúc mọi nơi. Kết hợp với sức mạnh từ vi xử lý Intel 11th Gen cùng card đồ hoạ RTX 3000 đời mới; sản phẩm sẽ là một cỗ máy chiến đấu thực thụ trên mặt trận tác vụ hiệu năng cao.
                                        Thiết kế gai góc, hoàn thiện cứng cáp
                                        Tuy sở hữu form dáng tổng thể khá tương đồng
                                        với Nitro 5 – một dòng máy phổ thông nổi tiếng của Acer,
                                        nhưng Predator Helios 300 2021 không
                                        vì vậy mà trở nên mờ nhạt. Với những đường nét góc cạnh ở khe
                                        tản nhiệt, nắp máy, v.v. được làm nổi nhờ lớp sơn Xanh Biển,
                                        chiếc máy trông tựa một con robot chiến đấu mà ta thường thấy trong các bộ phim khoa học – viễn tưởng. Cũng nhờ cách thiết kế và phối màu này mà khác với Nitro, Predator Helios 300 2021 tỏ ra nổi bật dù được đặt ở bất kỳ đâu. Với những game thủ không ngại khoe cá tính, ngoại hình của máy sẽ là yếu tố rất đáng cân nhắc.
                                    </p>
                                    <img src={product.image} alt="" />
                                    <p>Với ngoại hình tạo nên từ hàng loạt đường nét gai góc, hầm hố; Acer Predator Helios 300 2021 sẽ phù hợp với các bạn game thủ cá tính, muốn khẳng định phong cách mọi lúc mọi nơi. Kết hợp với sức mạnh từ vi xử lý Intel 11th Gen cùng card đồ hoạ RTX 3000 đời mới; sản phẩm sẽ là một cỗ máy chiến đấu thực thụ trên mặt trận tác vụ hiệu năng cao.
                                        Thiết kế gai góc, hoàn thiện cứng cáp
                                        Tuy sở hữu form dáng tổng thể khá tương đồng
                                        với Nitro 5 – một dòng máy phổ thông nổi tiếng của Acer,
                                        nhưng Predator Helios 300 2021 không
                                        vì vậy mà trở nên mờ nhạt. Với những đường nét góc cạnh ở khe
                                        tản nhiệt, nắp máy, v.v. được làm nổi nhờ lớp sơn Xanh Biển,
                                        chiếc máy trông tựa một con robot chiến đấu mà ta thường thấy trong các bộ phim khoa học – viễn tưởng. Cũng nhờ cách thiết kế và phối màu này mà khác với Nitro, Predator Helios 300 2021 tỏ ra nổi bật dù được đặt ở bất kỳ đâu. Với những game thủ không ngại khoe cá tính, ngoại hình của máy sẽ là yếu tố rất đáng cân nhắc.
                                    </p>
                                    <img src={product.image} alt="" />
                                    <div id="rating"></div>
                                </div>

                                <div className="product__box-vote">
                                    <div className="box-vote-head">
                                        <div className="box-vote-head-left">
                                            <h1>Đánh giá của khách hàng</h1>
                                            <div className="vote-tb">
                                                <p>Đánh giá trung bình</p>
                                                <div className="vote">
                                                    <div className="star-number">{product.rating}</div>
                                                    <ProductRating rating={product.rating} numReviews={product.numReviews} />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-vote">Viết đánh giá</button>
                                    </div>
<<<<<<< HEAD
                                    <div className="product__box-vote-list">
                                        {
                                            userRating.map((item) => (
=======
                                    <button className="btn btn-vote" onClick={handleOpenRating}>Viết đánh giá</button>
                                </div>
                                {rating && <StarRating useprofile={userProfile} />}
                                <div className="product__box-vote-list">
                                    {
                                        [].concat(starRating)
                                            .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                                            .map((item) => (
>>>>>>> ecc9285a825b8f16d81e5ec2d99623de5884a835
                                                <div key={item._id} className="item">
                                                    <div className="item-logo">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="item-detail">
                                                        <b className="item-name">{item.name}</b>
                                                        <div className="item-star-rate">
                                                            <ProductRating rating={item.rating} numReviews={product.numReviews} />
                                                        </div>
                                                        <p>{item.note}</p>
                                                        <i>{item.datetime}</i>
                                                    </div>
                                                </div>
                                            ))
<<<<<<< HEAD
                                        }
                                    </div>
=======
                                    }
>>>>>>> ecc9285a825b8f16d81e5ec2d99623de5884a835
                                </div>

<<<<<<< HEAD
                                <div id="comment" className="product__comment">
                                    <div className="product__comment-top">
                                        <div className="product__comment-top-head">
                                            <h1>Bình luận</h1>
                                            <span>1 bình luận</span>
                                        </div>
                                        <div className="product__comment-top-write">
                                            <textarea type="text" placeholder="Viết câu hỏi của bạn" />
                                            <button>Gửi</button>
                                        </div>
                                    </div>
                                    <div className="product__comment-list">
                                        {
                                            userComments.map((item, index) => (
=======
                            <div id="comment" className="product__comment">
                                <div className="product__comment-top">
                                    <div className="product__comment-top-head">
                                        <h1>Bình luận</h1>
                                        <span>1 bình luận</span>
                                    </div>
                                    <div className="product__comment-top-write">
                                        <textarea type="text" placeholder="Viết câu hỏi của bạn" onChange={handleOnChange} />
                                        <button onClick={() => handleClickCommet(comment, userProfile)}>
                                            {isComment && <i className="fas fa-spinner fa-spin"></i>} Gửi
                                        </button>
                                    </div>
                                </div>
                                <div className="product__comment-list">
                                    {

                                        [].concat(userComments)
                                            .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                                            .map((item, index) => (
>>>>>>> ecc9285a825b8f16d81e5ec2d99623de5884a835
                                                <div key={index} className="comment">
                                                    <div className="comment-logo">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="comment-detail">
                                                        <p><b className="item-name">{item.name}</b> <i>{item.datetime}</i></p>
                                                        <p>{item.comment}</p>
                                                    </div>
                                                </div>
                                            ))
<<<<<<< HEAD
                                        }
                                    </div>
                                </div>
                            </div >



                        )
                }
=======
                                    }
                                </div>
                            </div>
                        </div >
                    )
            }
>>>>>>> ecc9285a825b8f16d81e5ec2d99623de5884a835

            </div >
        </Helmet>

    )
}


export default Product



