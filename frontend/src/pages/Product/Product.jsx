import { detailProduct } from 'actions/productActions';
import FEcredit from 'assets/logo/fecredit.png';
import VNpay from 'assets/logo/vnpay.png';
import iconUser from 'assets/svg/icon-user.svg';

import 'boxicons';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from 'utils/numberWithCommas';
import ProductCheck from './component/ProductCheck';

import ProductConfig from './component/ProductConfig';
import ProductRating from './component/ProductRating';





const Product = (props) => {
    const dispatch = useDispatch();
    // get id inside URl
    const productId = props.match.params.id;
    const productDetail = useSelector((state) => state.productDetail);
    console.log(productDetail);
    const { loading, error, product } = productDetail;

    useEffect(() => {
        dispatch(detailProduct(productId));
    }, [dispatch, productId]);



    const userRating = [
        {
            _id: 1,
            name: "Alexander",
            img: iconUser,
            rating: 5,
            note: "Máy mượt học onl tốt",
            datetime: "11/10/2021 14:34",
        }, {
            _id: 2,
            name: "Jonh Dang",
            img: iconUser,
            rating: 4,
            note: "Máy chạy ổn",
            datetime: "15/10/2021 09:25",
        }, {
            _id: 3,
            name: "Khoa Pug",
            img: iconUser,
            rating: 5,
            note: "Máy tốt nha",
            datetime: "14/08/2021 13:44",
        },

    ]

    const userComments = [
        {
            name: "Pham Minh Hiếu",
            img: iconUser,
            datetime: "14/08/2021 13:13",
            comment: "Cho em hỏi máy này học SolidWorks với autocad đc ko ạ?",
        },
        {
            name: "VLinh",
            img: iconUser,
            datetime: "30/09/2021 22:27",
            comment: "Chơi game mượt không?",
        },
        {
            name: "Trong Toàn",
            img: iconUser,
            datetime: "14/08/2021 09:25",
            comment: "Máy này xem phim nét không ạ?",
        },

    ]

    function ModalCheckOpen() {
        const ModalCheck = document.querySelector('.modal__product-check');
        ModalCheck.style.display = 'block';
    }
    function ModalConfigOpen() {
        const ModalCheck = document.querySelector('.modal__product-config');
        ModalCheck.style.display = 'block';
    }


    return (
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
                                                onClick={ModalCheckOpen}
                                                className="btn-muangay"
                                            >
                                                Mua ngay
                                            </button>
                                            <button to="/product/1" className="btn-addtocart">
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
                                <div className="product__box-vote-list">
                                    {
                                        userRating.map((item) => (
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
                                    }
                                </div>
                            </div>

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
                                    }
                                </div>
                            </div>
                        </div >



                    )
            }

        </div >

    )
}


export default Product


