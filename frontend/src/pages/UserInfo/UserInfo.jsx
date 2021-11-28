import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'components/Helmet'
import { detailsUser, updateUser } from 'actions/userAction';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { USER_UPDATE_RESET } from 'constants/userConstants';
import { toast } from 'react-toastify';
import { TOAST_OPTIONS } from 'constants/productConstants';




const UserInfo = (props) => {


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdate = useSelector((state) => state.userUpdate);
    // rename => error: 
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdate;
    const dispatch = useDispatch();



    useEffect(() => {
        // if (!user) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(detailsUser(userInfo._id));
        // }
        // else {
        //     setName(user.name);
        //     setEmail(user.email);
        //     setImage(user.image);
        // }

    }, [dispatch, userInfo._id]);



    const [name, setName] = useState(userInfo && userInfo.name);
    const [email, setEmail] = useState(userInfo && userInfo.email);
    const [image, setImage] = useState(userInfo && userInfo.image);
    const [phone, setPhone] = useState(userInfo && userInfo.phone);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');



    const submitInfo = (e) => {

        console.log('error: ', errorUpdate);
        console.log('success: ', successUpdate);
        console.log('user: ', user);
        console.log('userInfo ', userInfo);
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            toast.warn('Nhập lại mật khẩu không chính xác', {
                ...TOAST_OPTIONS,
            });
        }
        else {


            dispatch(updateUser({ userId: user._id, name, email, currentPassword, newPassword, phone }));
            // toast.success('Cập nhật thành công', {

            // });
            // }

            // if (successUpdate) {
            //     toast.success('Cập nhật thành công', {
            //         ...TOAST_OPTIONS,
            //     });
            // }
        }





    }

    const onAvatarChange = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);

    }


    return (
        <Helmet title="Tài Khoản">
            {
                loading ? <LoadingBox></LoadingBox>
                    : error ? <MessageBox variant="danger">{error}</MessageBox>
                        : (
                            <>
                                {loadingUpdate && <LoadingBox></LoadingBox>}
                                {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
                                {successUpdate && (<MessageBox variant="success">Cập nhật thành công</MessageBox>)}

                                <div className="userInfo">
                                    <div className="userInfo__item">
                                        <div className="userInfo__item__title">
                                            Thông tin tài khoản
                                        </div>
                                        <div className="userInfo__item__content">
                                            <form className="userInfo__item__content__form" onSubmit={submitInfo} >
                                                <div className="form-item avatar">


                                                    <img className="form-item__img" src={user?.isAdmin && typeof (image) === 'string' ? image : image.split('\\').join('/')} alt="" />

                                                    <div className="choose">
                                                        <input className="form-item__file" type="file" onChange={e => onAvatarChange(e)} />
                                                        <span>Thay ảnh đại diện</span>
                                                    </div>

                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Số điện thoại</label>
                                                    <input className="form-item__input" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Tên người dùng</label>
                                                    <input className="form-item__input" type="text" value={name} onChange={e => setName(e.target.value)} />
                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Email</label>
                                                    <input className="form-item__input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Nhập mật khẩu hiện tại</label>
                                                    <input className="form-item__input" type="password" placeholder="Nhập mật khẩu hiện tại"
                                                        onChange={e => setCurrentPassword(e.target.value)} />
                                                </div>

                                                <div className="changePassword">
                                                    Thay đổi mật khẩu
                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Nhập mật khẩu mới</label>
                                                    <input className="form-item__input" type="password" placeholder="Nhập mật khẩu mới"
                                                        onChange={e => setNewPassword(e.target.value)} />
                                                </div>

                                                <div className="form-item">
                                                    <label className="form-item__label" htmlFor="">Nhập lại mật khẩu mới</label>
                                                    <input className="form-item__input" type="password" placeholder="Nhập lại mật khẩu mới"
                                                        onChange={e => setConfirmNewPassword(e.target.value)} />
                                                </div>

                                                <div className="form-item">
                                                    <button type="submit" className="form-item__btn">Cập nhật</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
            }
        </Helmet >

    )

}



export default UserInfo
