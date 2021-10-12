import productImg1 from 'assets/images/products/2.jpg';
import productImg2 from 'assets/images/products/3.jpg';
import React from 'react';

ProductCheck.propTypes = {};

const productList = [
    {
        name: "Laptop Acer Nitro Gaming AN515 57 51G6 i5 11400H/8GB/512GB SSD/RTX 3050 4GB/Win10",
        image: productImg1,
        quality: 1,
        price: "25.999.000",
    },
    {
        name: "Laptop Acer Predator Gaming PH315 54 78W5 i7 11800H/8GB/512GB SSD/RTX 3050Ti 4GB/Win10",
        image: productImg2,
        quality: 1,
        price: "33.999.000",
    }
]


function ModalClose() {
    const ModalCheck = document.querySelector('.modal__product-check');
    ModalCheck.style.display = 'none';
}

function ProductCheck(props) {
    return (
        <div>
            <div className="modal__product-check">
                <div className="modal__wrapper">
                    <div className="modal__box">
                        <div className="modal__card">
                            <div className="card-title">
                                Có 1 sản phẩm trong giỏ hàng
                                <span onClick={ModalClose} id="modal__close" className="modal-close">X</span>
                            </div>
                            <div className="card-body">
                                <div className="card-product">
                                    {
                                        productList.map((item, index) => (
                                            <div
                                                key={index}
                                                className="product-card"
                                            >
                                                <div className="product-img">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="product-card-info">
                                                    <div className="product-card-info-title">
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className="product-card-listuudai">
                                                        <ul>
                                                            <li>- Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máy</li>
                                                            <li>- Tặng PMH 200.000đ mua máy in Brother</li>
                                                            <li>- Tặng PMH 100.000đ mua Microsoft 365 Personal/Family/Home &amp; Student khi mua Online đến 31/10</li>
                                                            <li>- Tặng thêm 1 năm bảo hành chính hãng Acer</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-card-quality">
                                                    <div className="product-card-quality-wrap">
                                                        <div className="btn btn-minus">-</div>
                                                        <input type="text" readonly="" class="cs-input-cart" value={item.quality} />
                                                        <div className="btn btn-plus">+</div>
                                                    </div>
                                                    <div className="btn btn-remove">xóa</div>
                                                </div>
                                                <div className="product-card-price">{item.price}đ</div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="card-center">
                                    <div className="card-total">
                                        <div className="cart-total-normal">
                                            <p>Tạm tính:</p>
                                            <p>69.999.000đ</p>
                                        </div>
                                        <div className="cart-total-price">
                                            <p>Cần thanh toán: </p>
                                            <p>69.999.000đ</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-form">
                                    <div className="card-form-block">
                                        <h1>Thông tin khách hàng</h1>
                                        <form action="/" method="post">
                                            <div className="card-form-genger">
                                                <div className="form-box-radio">
                                                    <input type="radio" id="genger0" name="genger" />
                                                    <label htmlFor="genger0">Anh</label>
                                                </div>
                                                <div className="form-box-radio">
                                                    <input type="radio" name="genger" id="genger1" />
                                                    <label htmlFor="genger1">Chị</label>
                                                </div>
                                            </div>
                                            <div className="card-form-center">
                                                <div className="card-form-info">
                                                    <input type="text" className="mr-10" placeholder="Nhập Họ và Tên*" />
                                                    <input type="text" placeholder="Nhập Số điện thoại" />
                                                </div>
                                                <div className="card-form-email">
                                                    <input type="email" placeholder="Nhập Email" />
                                                </div>
                                            </div>
                                            <h2>Chọn hình thức giao hàng</h2>
                                            <div className="card-form-ship">
                                                <div className="form-box-radio">
                                                    <input type="radio" id="shiphome" name="ship" />
                                                    <label htmlFor="shiphome">Giao hàng tận nơi, miễn phí</label>
                                                </div>
                                                <div className="form-box-radio">
                                                    <input type="radio" name="ship" id="shipshop" />
                                                    <label htmlFor="shipshop">Nhận tại cửa hàng</label>
                                                </div>
                                                <div className="card-form-ship-address">

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card-checkout">
                                    <button className="btn btn-checkout"> Hoàn tất đặt hàng</button>
                                    <p>Cảm ơn bạn đã đến với cửa hàng của chúng tôi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheck;