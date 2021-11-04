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
import numberWithCommas from 'utils/numberWithCommas';



function CheckOut(props) {
    const { setcheckOutModal } = props;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;


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

    const [shipOptions, setShipOption] = useState('');

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


    const [shipState, setshipState] = useState({
        fullName: userInfo?.name,
        phone: '',
        city: 'Thành Phố Cần Thơ',
        district: 'Ninh Kiều',
        commune: 'Hưng Lợi',
        address: 'Tòa nhà LaptopStore, 30/4',
    })

    const [checkFrom, setCheckFrom] = useState({
        phonenumber: {
            value: '',
            isInputValid: true,
            errorMessage: ''
        },
        fullname: {
            value: '',
            isInputValid: true,
            errorMessage: ''
        },
        email: {
            value: '',
            isInputValid: true,
            errorMessage: ''
        }
    });

    const [check, setCheck] = useState({});
    function FormError(props) {
        if (props.isHidden) { return null; }
        return (<div className="form-error">{props.errorMessage}</div>)
    }


    const validateInput = (type, checkingText) => {
        if (type === "phonenumber") {
            const regexp = /^\d{10}$/;
            const checkingResult = regexp.exec(checkingText);
            if (checkingResult !== null) {
                setCheckFrom({
                    ...checkFrom,
                    phonenumber: {
                        isInputValid: true,
                        errorMessage: '',
                    }
                })
                setCheck({ ...check, phonenumber: true, });
            } else {
                setCheckFrom({
                    ...checkFrom,
                    phonenumber: {
                        isInputValid: false,
                        errorMessage: 'Số điện thoại phải có 10 chữ số.'
                    }
                })
                setCheck({ ...check, phonenumber: false });
            }
        }
        if (type === "fullname") {
            if (checkingText) {
                setCheckFrom({
                    ...checkFrom,
                    fullname: {
                        isInputValid: true,
                        errorMessage: '',
                    }
                })
                setCheck({ ...check, fullname: true });
            } else {
                setCheckFrom({
                    ...checkFrom,
                    fullname: {
                        isInputValid: false,
                        errorMessage: 'Tên không để trống, chứa chữ số'
                    }
                })
                setCheck({ ...check, fullname: false });
            }
        }
        if (type === "email") {
            const regexp = /([a-zA-Z0-9_/./-])+\@gmail.com/g;
            const checkingResult = regexp.exec(checkingText);
            if (checkingResult !== null) {
                setCheckFrom({
                    ...checkFrom,
                    email: {
                        isInputValid: true,
                        errorMessage: '',
                    }
                })
                setCheck({ ...check, email: true });
            } else {
                setCheckFrom({
                    ...checkFrom,
                    email: {
                        isInputValid: false,
                        errorMessage: 'Email không đúng định dạng'
                    }
                })
                setCheck({ ...check, email: false });
            }
        }
    }
    useEffect(() => {
        if (userInfo)
            setCheck({ ...check, fullname: true, email: true });
        if (shipOptions === 'home' || shipOptions === 'store') {
            setCheck({ ...check, ship: true })
        } else {
            setCheck({ ...check, ship: false })
        }
    }, [userInfo, shipOptions])
    console.log(check);

    const handleCheckOut = (e) => {
        e.preventDefault();

        dispatch(createCheckOut({
            orderItems: checkList,
            shipingAddress: {
                fullName: shipState.fullName,
                phone: shipState.phone,
                city: shipState.city,
                district: shipState.district,
                commune: shipState.commune,
                address: shipState.address
            },
            totalPrice: total,
            userId: userInfo._id
        }));
        // setcheckOutModal(false);
    }

    const onCityFilter = ({ target }) => {
        const obj = JSON.parse(target.value);
        setFilter({ ...filter, cityCode: obj.value });
        setshipState({ ...shipState, city: obj.label });
    }
    const onDistrictFilter = ({ target }) => {
        const obj = JSON.parse(target.value);
        setFilter({ ...filter, districtCode: obj.value });
        setshipState({ ...shipState, district: obj.label });
    }
    const total = checkList.reduce(
        (sum, product) =>
            sum +
            product.price *
            product.quantity,
        0
    );

    useEffect(() => {
        if (success) {
            // props.history.push('/');
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
                                                <p>{numberWithCommas(total)}</p>
                                            </div>
                                            <div className="cart-total-price">
                                                <p>Cần thanh toán: </p>
                                                <p>{numberWithCommas(total)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="">
                                        <div className="card-form">
                                            <div className="card-form-block">
                                                <h1>Thông tin khách hàng</h1>
                                                <div className="card-form-center">
                                                    <div className="card-form-info">
                                                        <div>
                                                            <InputField
                                                                type="text"
                                                                name="fullname"
                                                                placeholder="Nhập Họ và Tên*"
                                                                defaultValue={'' || userInfo?.name}
                                                                className="mr-10"
                                                                // onChange={(e) => setshipState({ ...shipState, fullName: e.target.value })}
                                                                onChange={(e) => validateInput("fullname", e.target.value)}

                                                            />
                                                            <FormError
                                                                isHidden={checkFrom.fullname.isInputValid}
                                                                errorMessage={checkFrom.fullname.errorMessage}
                                                            />
                                                        </div>
                                                        <div>
                                                            <InputField
                                                                type="text"
                                                                name="phonenumber"
                                                                placeholder="Nhập Số điện thoại"
                                                                // onChange={(e) => setshipState({ ...shipState, phone: e.target.value })}
                                                                onChange={(e) => validateInput("phonenumber", e.target.value)}
                                                            />
                                                            <FormError
                                                                isHidden={checkFrom.phonenumber.isInputValid}
                                                                errorMessage={checkFrom.phonenumber.errorMessage}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <InputField
                                                            type="email"
                                                            name="email"
                                                            placeholder="Nhập Email"
                                                            defaultValue={'' || userInfo?.email}
                                                            onChange={(e) => validateInput("email", e.target.value)}
                                                        />
                                                        <FormError
                                                            isHidden={checkFrom.email.isInputValid}
                                                            errorMessage={checkFrom.email.errorMessage}
                                                        />
                                                    </div>

                                                </div>
                                                <h2>Chọn hình thức giao hàng</h2>
                                                <div className="card-form-ship">
                                                    <div className="form-box-radio">
                                                        <RadioField
                                                            id="shiphome"
                                                            title="Giao hàng tận nơi, miễn phí"
                                                            name="ship"
                                                            type="radio"
                                                            onChange={() => setShipOption('home')}
                                                        />
                                                    </div>
                                                    <div className="form-box-radio">
                                                        <RadioField
                                                            id="shipshop"
                                                            title="Nhận tại cửa hàng"
                                                            name="ship"
                                                            type="radio"
                                                            onChange={() => setShipOption('store')}
                                                        />
                                                    </div>
                                                </div>
                                                {shipOptions === 'home' && (
                                                    <div className="card-form-ship-address">
                                                        <div className="card-form-inner">
                                                            <div className="box__select ship-address-city">
                                                                <SelectField
                                                                    label
                                                                    name="Thành Phố" //lable name
                                                                    id="city"
                                                                    options={city}
                                                                    defaultOption={userInfo?.city || "--Chọn Thành Phố--"}
                                                                    onChange={onCityFilter}
                                                                />
                                                            </div>
                                                            <div className=" box__select ship-address-district">
                                                                <SelectField
                                                                    label
                                                                    name="Quận/Huyện" //lable name
                                                                    id="district"
                                                                    options={district}
                                                                    defaultOption={userInfo?.district || "--Chọn Quận/Huyện--"}
                                                                    onChange={onDistrictFilter}
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="box__select ship-address-commune">
                                                            <SelectField
                                                                label
                                                                name="Xã/Phường"
                                                                id="commune"
                                                                defaultOption={userInfo?.commune || "--Chọn Xã/Phường--"}
                                                                options={commune}
                                                                onChange={(e) => setshipState({ ...shipState, commune: JSON.parse(e.target.value).label })}
                                                            />
                                                        </div>

                                                        <div className="ship-address-specific">
                                                            <InputField
                                                                type="text"
                                                                name="ship-address"
                                                                placeholder="Nhập địa chỉ cụ thể*"
                                                                defaultValue={'' || userInfo?.address}
                                                                onChange={(e) => setshipState({ ...shipState, address: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {shipOptions === 'store' &&
                                                    <div className="ship-address-specific">
                                                        <p>
                                                            <b>Địa chỉ cửa hàng: </b>
                                                            <i> Tòa nhà LaptopStore, 30/4, Hưng Lợi, Ninh Kiều, TP. Cần Thơ</i>
                                                        </p>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                        <div className="card-checkout">
                                            <button
                                                type="submit"
                                                className="btn btn-checkout"
                                            // onClick={handleCheckOut}
                                            >
                                                {loadding && <i className="fas fa-spinner fa-spin"></i>}  Hoàn tất đặt hàng
                                            </button>
                                            <p>Cảm ơn bạn đã đến với cửa hàng của chúng tôi</p>
                                            {loadding && <LoadingBox />}
                                            {error && <MessageBox variant="danger">{error}</MessageBox>}
                                        </div>
                                    </form>
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