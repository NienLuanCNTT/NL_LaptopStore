import { createCheckOut } from 'actions/orderActions';
import cartEmty from 'assets/images/empty-cart.png';
import axios from 'axios';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { ORDER_CREATE_RESET } from 'constants/orderConstants';
import InputField from 'custom-field/InputField';
import RadioField from 'custom-field/RadioField';
import SelectField from 'custom-field/SelectField';
import CheckoutList from 'pages/CheckOut/CheckoutList';
import { removeProduct, selectQuantity } from 'pages/CheckOut/CheckSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';





CheckOut.propTypes = {};


function CheckOut(props) {
    const { setcheckOutModal } = props;

    const userInfo = {
        _id: '6180b47d2acc1120918991c1',
        fullname: 'Trần Minh A',
        email: 'trana@gmail.com',
        address: 'Hưng Lợi Ninh Kiều Cần Thơ',
        city: 'Cần Thơ',
        district: 'Ninh Kiều',
        commune: 'Hưng Lợi',
        phone: '0123456789'
    }


    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [commune, setCommune] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();


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

    const [shipOptions, setShipOption] = useState(null);
    const { checkList } = useSelector((state) => state.checkList);
    const orderCreate = useSelector((state) => state.orderCreate);
    const { loadding, success, error, order } = orderCreate;

    const handleQuantityChange = (id, quantity) => {
        dispatch(selectQuantity({ id, quantity }));
    };

    // handle remove product
    const handleRemoveProduct = (id) => {
        dispatch(removeProduct({ id }));
    };

    const [shipCity, setshipCity] = useState(userInfo.city);
    const [shipDistrict, setshipDistrict] = useState(userInfo.district);
    const [shipCommune, setshipCommune] = useState(userInfo.commune);
    const [shipAddress, setshipAddress] = useState(userInfo.address);

    console.log(shipCity, ',', shipDistrict, ',', shipCommune, ',', shipAddress);

    const handleCheckOut = () => {
        dispatch(createCheckOut({
            orderItems: checkList,
            ShippingAddress: {
                city: shipCity,
                district: shipDistrict,
                commune: shipCommune,
                address: shipAddress
            }
        }));
        // setcheckOutModal(false);
    }

    const onCityFilter = ({ target }) => {
        const obj = JSON.parse(target.value);
        setFilter({ ...filter, cityCode: obj.value });
        setshipCity(obj.label);
    }
    const onDistrictFilter = ({ target }) => {
        const obj = JSON.parse(target.value);
        setFilter({ ...filter, districtCode: obj.value });
        setshipDistrict(obj.label);
    }
    const total = checkList.reduce(
        (sum, product) =>
            sum +
            product.price *
            product.quantity,
        0
    );
    const numberFormat = (number) => {
        const numberFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        return numberFormat;
    };

    useEffect(() => {
        if (success) {
            // props.history.push(`/oder/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success]);

    return (
        <div className="modal__product-check">
            <div className="modal__wrapper">
                <div className="modal__box">
                    <div className="modal__card">
                        <div className="card-title">
                            Có {checkList.length} sản phẩm trong giỏ hàng
                            <span onClick={() => setcheckOutModal(false)} id="modal__close" className="modal-close">X</span>
                        </div>

                        {
                            checkList.length === 0 && (
                                <div className="txt-center">
                                    <img src={cartEmty} alt="" />
                                </div>
                            )
                        }{
                            checkList.length > 0 && (
                                <div className="card-body">
                                    <div className="card-product">
                                        <CheckoutList
                                            checkList={checkList}
                                            onQuantityChange={handleQuantityChange}
                                            onProductRemove={handleRemoveProduct}
                                        />
                                    </div>

                                    <div className="card-center">
                                        <div className="card-total">
                                            <div className="cart-total-normal">
                                                <p>Tạm tính:</p>
                                                <p>{numberFormat(total)}</p>
                                            </div>
                                            <div className="cart-total-price">
                                                <p>Cần thanh toán: </p>
                                                <p>{numberFormat(total)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-form">
                                        <div className="card-form-block">
                                            <h1>Thông tin khách hàng</h1>
                                            <div className="card-form-center">
                                                <div className="card-form-info">
                                                    <InputField
                                                        type="text"
                                                        name="fullname"
                                                        placeholder="Nhập Họ và Tên*"
                                                        defaultValue={'' || userInfo?.fullname}
                                                        className="mr-10"
                                                    />
                                                    <InputField
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Nhập Số điện thoại"
                                                        defaultValue={'' || userInfo?.phone}
                                                    />

                                                </div>
                                                <InputField
                                                    type="email"
                                                    name="email"
                                                    placeholder="Nhập Email"
                                                    defaultValue={'' || userInfo?.email}
                                                />

                                            </div>
                                            <h2>Chọn hình thức giao hàng</h2>
                                            <div className="card-form-ship">
                                                <div className="form-box-radio">
                                                    <RadioField
                                                        id="shiphome"
                                                        title="Giao hàng tận nơi, miễn phí"
                                                        name="ship"
                                                        type="radio"
                                                        onChange={() => setShipOption(true)}
                                                    />
                                                </div>
                                                <div className="form-box-radio">
                                                    <RadioField
                                                        id="shipshop"
                                                        title="Nhận tại cửa hàng"
                                                        name="ship"
                                                        type="radio"
                                                        onChange={() => setShipOption(false)}
                                                    />

                                                </div>
                                            </div>
                                            {shipOptions && (
                                                <div className="card-form-ship-address">
                                                    <div className="card-form-inner">
                                                        <div className="box__select ship-address-city">
                                                            <SelectField
                                                                label
                                                                name="Thành Phố" //lable name
                                                                id="city"
                                                                options={city}
                                                                defaultOption={userInfo.city || "--Chọn Thành Phố--"}
                                                                onChange={onCityFilter}
                                                            />
                                                        </div>
                                                        <div className=" box__select ship-address-district">
                                                            <SelectField
                                                                label
                                                                name="Quận/Huyện" //lable name
                                                                id="district"
                                                                options={district}
                                                                defaultOption={userInfo.district || "--Chọn Quận/Huyện--"}
                                                                onChange={onDistrictFilter}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="box__select ship-address-commune">
                                                        <SelectField
                                                            label
                                                            name="Xã/Phường"
                                                            id="commune"
                                                            defaultOption={userInfo.commune || "--Chọn Xã/Phường--"}
                                                            options={commune}
                                                            onChange={(e) => setshipCommune(JSON.parse(e.target.value).label)}
                                                        />
                                                    </div>

                                                    <div className="ship-address-specific">
                                                        <InputField
                                                            type="text"
                                                            name="ship-address"
                                                            placeholder="Nhập địa chỉ cụ thể*"
                                                            defaultValue={'' || userInfo.address}
                                                            onChange={(e) => setshipAddress(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="card-checkout">
                                        <button
                                            className="btn btn-checkout"
                                            onClick={handleCheckOut}
                                        >
                                            {loadding && <i className="fas fa-spinner fa-spin"></i>}  Hoàn tất đặt hàng
                                        </button>
                                        <p>Cảm ơn bạn đã đến với cửa hàng của chúng tôi</p>
                                        {loadding && <LoadingBox />}
                                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;