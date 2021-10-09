import React from 'react'

import productImg from 'assets/images/products/4.jpg'

const Product = () => {
    return (
        <div className="product">
            <div className="product__detail">
                <div className="product__detail-top">
                    <div className="product__detail-top-name">
                        <p>
                            Laptop Acer Nitro Gaming AN515 57 51G6 i5 11400H/8GB/512GB SSD/RTX 3050 4GB/Win10
                        </p>
                        <span>(No.00762458)</span>
                    </div>
                    <div className="product__detail-top-vote">
                        <div className="product__detail-top-vote-star">*****</div>
                        <div className="product__detail-top-vote-number"> 10 đánh giá</div>
                    </div>
                </div>
                <div className="product__detail-content">
                    <div className="product__detail-content-left">
                        <div className="product__detail-content-left-img">
                            <img src={productImg} alt="" />
                        </div>
                        <div className="product__detail-content-left-img">
                            <p>15.6", 1920 x 1080 Pixel, IPS, 144 Hz, Acer ComfyView LED-backlit</p>
                            <p>Intel Core i5-11400H</p>
                            <p>8 GB, DDR4, 3200 MHz</p>
                            <p>SSD 512 GB</p>
                            <p>NVIDIA GeForce RTX3050 4GB</p>
                            <div>Xem thông số kỹ thuật</div>
                        </div>
                    </div>
                    <div className="product__detail-content-right">
                        <div className="product__detail-content-right-price">25.000.000 Đ</div>
                        <div className="product__detail-content-right-uudai">
                            <p>Tặng PMH 200.000đ mua máy in Brother</p>
                            <p>Giảm đến 300.000đ khi mua bảo hành (rơi vỡ + vào nước) kèm máyr</p>
                            <p>Tặng PMH 100.000đ mua Microsoft 365 Personal/Family/Home & Student khi mua Online đến 31/10 </p>
                            <p>Tặng thêm 1 năm bảo hành chính hãng Acer </p>
                        </div>
                        <div className="product__detail-content-right-muangay">Mua ngay</div>

                    </div>
                </div>
            </div>
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
                <img src={productImg} alt="" />
            </div>
            <div className="product__vote">
                <h2>Đánh giá của khách hàng</h2>
                <button>Viết đánh giá</button>
                <p>* * * * *</p>
            </div>
            <div className="product__comment">
                <h3>Bình luận</h3>
                <span>10 bình luận</span>

                <p>bình luận của bạn</p>
                <area></area>
                <button>Gửi</button>
            </div>

        </div>
    )
}

export default Product
