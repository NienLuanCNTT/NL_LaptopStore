import React from 'react';
import productImg1 from 'assets/images/products/8.jpg';

ProductConfig.propTypes = {};

function ModalClose() {
    const ModalCheck = document.querySelector('.modal__product-config');

    ModalCheck.style.display = 'none';
}

function ProductConfig(props) {
    const dataConfig = [
        {
            _id: 1,
            title: 'Bộ xử lý',
            value: [
                { name: "Phiên bản", cfg: "DDR4" },
                { name: "Công nghệ CPU", cfg: "Core i5" },
                { name: "Loại CPU", cfg: "11400H" },
                { name: "Tốc độ CPU", cfg: "2.60 GHz" },
                { name: "Tốc độ BUS", cfg: "8 GT/s" },
            ]
        },
        {
            _id: 2,
            title: 'RAM',
            value: [
                { name: "Dung lượng RAM", cfg: "8 GB" },
                { name: "Loại RAM", cfg: "DDR4" },
                { name: "Tốc độ RAM", cfg: "3200 MHz" },
                { name: "Số khe cắm rời", cfg: "2" },
                { name: "Hỗ trợ RAM tối đa", cfg: "32 GB" },
            ]
        },
        {
            _id: 3,
            title: 'Màn hình',
            value: [
                { name: "Kích thước màn hình", cfg: "15.6\"" },
                { name: "Loại màn hình", cfg: "LED" },
                { name: "Độ phân giải", cfg: "1920 x 1080 Pixel" },
                { name: "Tần số quét", cfg: "144 Hz" },
                { name: "Tấm nền", cfg: "IPS" },
                { name: "Công nghệ màn hình", cfg: "Acer ComfyView LED-backlit" }
            ]
        },

    ]


    return (
        <div className="modal__product-config">
            <div className="modal__wrapper">
                <div className="modal__box">
                    <div className="modal__card">
                        <div className="card-title">
                            <p>Laptop Acer Nitro Gaming AN515 57 51G6 i5 11400H/8GB/512GB SSD/RTX 3050 4GB/Win10</p>
                            <span onClick={ModalClose} id="modal__close" className="modal-close">X</span>
                        </div>
                        <div className="card-body">
                            <div className="card-img">
                                <img src={productImg1} alt="" />
                            </div>
                            {
                                dataConfig.map((item) => (
                                    <div
                                        key={item._id}
                                        className="card-row"
                                    >
                                        <div className="card-row-title">
                                            <p>{item.title}</p>
                                        </div>
                                        <table>
                                            <tbody>
                                                {
                                                    item.value.map((value, index) => (
                                                        <tr key={index}>
                                                            <td>{value.name}</td>
                                                            <td>{value.cfg}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductConfig;