import axios from 'axios';
import React, { useEffect, useState } from 'react';

ProductConfig.propTypes = {};

function ProductConfig(props) {

    const { product, setConfigModal } = props;

    const [config, setConfig] = useState();
    useEffect(() => {
        const fetchConfig = async () => {
            const data = await axios.get(`/api/config/${product._id}`);
            const config = data.data[0] || [];

            setConfig(config);

        }
        fetchConfig();
    }, []);

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
    console.log(config);

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

                            <div className="card-row">
                                <div className="card-row-title">
                                    <p>Bộ Xử Lý</p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Phiên bản</td>
                                            <td>{config?.CPU.version}</td>
                                        </tr>
                                        <tr>
                                            <td>Công nghệ</td>
                                            <td>{config?.CPU.cpuTech}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại CPU</td>
                                            <td>{config?.CPU.cpuType}</td>
                                        </tr>
                                        <tr>
                                            <td>Tốc độ CPU</td>
                                            <td>{config?.CPU.cpuSpeed}</td>
                                        </tr>
                                        <tr>
                                            <td>Tốc độ BUS</td>
                                            <td>{config?.CPU.busSpeed}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="card-row-title">
                                    <p>RAM</p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Dung lượng RAM</td>
                                            <td>{config?.RAM.ramCapacity}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại RAM</td>
                                            <td>{config?.RAM.ramType}</td>
                                        </tr>
                                        <tr>
                                            <td>Tốc độ RAM</td>
                                            <td>{config?.RAM.ramSpeed}</td>
                                        </tr>
                                        <tr>
                                            <td>Số khe cắm rời</td>
                                            <td>{config?.RAM.ramSlot}</td>
                                        </tr>
                                        <tr>
                                            <td>Hỗ trợ RAM tối đa</td>
                                            <td>{config?.RAM.ramMax}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="card-row-title">
                                    <p>Màn hình</p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Kích thước màn hình</td>
                                            <td>{config?.Screen.screenSize}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại màn hình</td>
                                            <td>{config?.Screen.screenType}</td>
                                        </tr>
                                        <tr>
                                            <td>Độ phân giải</td>
                                            <td>{config?.Screen.resolution}</td>
                                        </tr>
                                        <tr>
                                            <td>Tần số quét</td>
                                            <td>{config?.Screen.sweepFrequency}</td>
                                        </tr>
                                        <tr>
                                            <td>Tần số quét</td>
                                            <td>{config?.Screen.bgPanels}</td>
                                        </tr>
                                        <tr>
                                            <td>Công nghệ màn hình</td>
                                            <td>{config?.Screen.screenTech}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductConfig;