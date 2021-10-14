import productImg1 from 'assets/images/products/2.jpg';
import productImg2 from 'assets/images/products/3.jpg';
import ProvinceList from 'components/ProvinceList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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

    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [commune, setCommune] = useState([]);

    // Set filter when change
    const [filter, setFilter] = useState({
        cityCode: null,
        districtCode: null,
    });

    // Fetch city on Province page
    useEffect(() => {
        const fetchCity = async () => {
            const City = await axios.get("https://provinces.open-api.vn/api/");
            const data = City.data || [];
            const cityOptions = data.map((ct) => ({
                label: ct.name,
                value: ct.code,
            }));


            setCity(cityOptions);
        };
        fetchCity();
    }, []);

    // Fetch district when city change
    useEffect(() => {
        const fetchDistrict = async () => {
            if (filter.cityCode === null) return;
            const District = await axios.get(
                `https://provinces.open-api.vn/api/p/${filter.cityCode}/?depth=2`
            );

            const data = District.data.districts || [];
            const districtOptions = data.map((ct) => ({
                label: ct.name,
                value: ct.code,
            }));

            setDistrict(districtOptions);
        };
        fetchDistrict();
    }, [filter]);

    // Fetch commune when district change
    useEffect(() => {
        const fetchCommune = async () => {
            if (filter.districtCode === null) return;
            const Commune = await axios.get(
                `https://provinces.open-api.vn/api/d/${filter.districtCode}/?depth=2`
            );

            const data = Commune.data.wards || [];
            const communeOptions = data.map((ct) => ({
                label: ct.name,
                value: ct.code,
            }));

            setCommune(communeOptions);
        };
        fetchCommune();
    }, [filter]);

    const boxHomeAddress = document.querySelector(".card-form-ship-address");

    const shipOption = () => {
        const shipHomeElement = document.getElementById('shiphome');
        const shipStoreElement = document.getElementById('shipshop');

        if (shipHomeElement.checked === true) {
            boxHomeAddress.style.display = "block";
        }

        if (shipStoreElement.checked === true) {
            boxHomeAddress.style.display = "none";
        }
    }

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
                                                        <input type="text" readOnly="" className="cs-input-cart" value={item.quality} />
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
                                            <div className="card-form-inner">
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
                                                    <input type="radio" id="shiphome" name="ship" onChange={shipOption} />
                                                    <label htmlFor="shiphome">Giao hàng tận nơi, miễn phí</label>
                                                </div>
                                                <div className="form-box-radio">
                                                    <input type="radio" name="ship" id="shipshop" onChange={shipOption} />
                                                    <label htmlFor="shipshop">Nhận tại cửa hàng</label>
                                                </div>
                                            </div>
                                            <div className="card-form-ship-address">
                                                <ProvinceList
                                                    defaultValue="Chon"
                                                    setValue
                                                    filter={filter}
                                                    setFilter={setFilter}
                                                    city={city}
                                                    district={district}
                                                    commune={commune}
                                                />
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