import React from 'react';

ProductConfig.propTypes = {};

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

    const { product, setConfigModal } = props;

    return (
        <div className="modal__product-config">
            <div className="modal__wrapper">
                <div className="modal__box">
                    <div className="modal__card">
                        <div className="card-title">
                            <p>{product.name}</p>
                            <span onClick={() => setConfigModal(false)} id="modal__close" className="modal-close">X</span>
                        </div>
                        <div className="card-body">
                            <div className="card-img">
                                <img src={product.image} alt="" />
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