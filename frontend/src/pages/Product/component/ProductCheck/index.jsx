import axios from 'axios';
import ProvinceList from 'components/ProvinceList';
import CheckoutList from 'pages/CheckOut/CheckoutList';
import { removeProduct, selectQuantity } from 'pages/CheckOut/CheckSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartEmty from 'assets/images/empty-cart.png';
import InputField from 'custom-field/InputField';
import RadioField from 'custom-field/RadioField';
import { createCheckOut } from 'actions/orderActions';
import { ORDER_CREATE_RESET } from 'constants/orderConstants';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';


ProductCheck.propTypes = {};


function ProductCheck(props) {

    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [commune, setCommune] = useState([]);
    const dispatch = useDispatch();

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

    function ModalClose() {
        const ModalCheck = document.querySelector('.modal__product-check');
        ModalCheck.style.display = 'none';
    }

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

    const handleCheckOut = () => {
        dispatch(createCheckOut({ ...checkList, orderItems: checkList.checkList }));
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
            props.history.push(`/oder/${order._id}`);
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
                            <span onClick={ModalClose} id="modal__close" className="modal-close">X</span>
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
                                            <form action="/" method="post">
                                                <div className="card-form-inner-genger">


                                                    <div className="form-box-radio">
                                                        <RadioField
                                                            id="genger0"
                                                            title="Anh"
                                                            name="genger"
                                                            type="radio"
                                                        />
                                                    </div>
                                                    <div className="form-box-radio">
                                                        <RadioField
                                                            id="genger1"
                                                            title="Chị"
                                                            name="genger"
                                                            type="radio"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="card-form-center">
                                                    <div className="card-form-info">
                                                        <InputField
                                                            type="text" name="fullname" placeholder="Nhập Họ và Tên*" className="mr-10"
                                                        />
                                                        <InputField type="text" name="phone" placeholder="Nhập Số điện thoại"
                                                        />
                                                    </div>
                                                    <InputField type="email" name="email" placeholder="Nhập Email"
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
                                                        <ProvinceList
                                                            filter={filter}
                                                            setFilter={setFilter}
                                                            city={city}
                                                            district={district}
                                                            commune={commune}
                                                        />
                                                    </div>
                                                )}

                                            </form>
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

export default ProductCheck;