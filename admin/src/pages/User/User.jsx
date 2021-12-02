import { detailsUser, updateUser } from 'actions/userAction';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { USER_UPDATE_RESET } from 'constants/userConstants';
import { toast } from 'react-toastify';
import axios from 'axios';


const User = () => {

    document.title = "Admin - User";
    const { id } = useParams();



    const dispatch = useDispatch();
    // const userDetails = useSelector((state) => state.userDetails);
    // const { loading, error, user } = userDetails;

    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await axios.get(`/api/users/${id}`);
            // console.log(user.data);
            // const userList = users.data || [];

            setUser(user.data);
        }
        fetchUser();
    }, []);

    console.log('use ', user);

    const userUpdate = useSelector((state) => state.userUpdate);
    // rename => error: 
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdate;

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);

    console.log(user);

    useEffect(() => {
        dispatch({ type: USER_UPDATE_RESET });

    }, [dispatch]);





    const submitInfo = (e) => {
        e.preventDefault();
        dispatch(updateUser({ userId: user._id, name, email, phone }));
        toast.success('Cập nhật thành công');
    }




    return (

        <>
            {
                user &&
                <div className="user">

                    <div className="user__title">
                        <div className="user__title-edit">Edit User</div>
                        <button className="user__title-create">Create</button>
                    </div>

                    <div className="user__content">

                        <div className="user__content-show">
                            <div className="showtop">

                                <img className="showtop-img" src={user.isAdmin ? user.image : user.image.split('\\').join('/')} alt="" />


                                <div className="showtop-name">
                                    {user.name}
                                </div>
                            </div>

                            <div className="showbottom">

                                <div className="showbottom-email">
                                    <i className="far fa-envelope eicon"></i>
                                    <span className="econtent">
                                        {user.email}
                                    </span>
                                </div>

                                <div className="showbottom-phone">
                                    <i className="fas fa-phone picon"></i>
                                    <span className="pcontent">
                                        {user.phone}
                                    </span>
                                </div>


                            </div>
                        </div>

                        <div className="user__content-update">
                            <span className="updateTitle">
                                Edit
                            </span>
                            <form className="updateForm" onSubmit={submitInfo} >
                                <div className="updateForm__left">

                                    <div className="updateForm__left-item">
                                        <label className="item__label">Username</label>
                                        <input className="item__input" type="text" defaultValue={user.name} onChange={e => setName(e.target.value)} />
                                    </div>

                                    <div className="updateForm__left-item">
                                        <label className="item__label">Phone</label>
                                        <input className="item__input" type="text" defaultValue={user.phone} onChange={e => setPhone(e.target.value)} />
                                    </div>

                                    <div className="updateForm__left-item">
                                        <label className="item__label">Email</label>
                                        <input className="item__input" type="text" defaultValue={user.email} onChange={e => setEmail(e.target.value)} />
                                    </div>

                                </div>

                                <div className="updateForm__right">
                                    <div className="updateForm__right-item">

                                        <img className="rightImg" src={user.isAdmin && typeof (user.image) === 'string' ? user.image : user.image.split('\\').join('/')} alt="" />

                                        <div className="choose">
                                            <input className="rightFile" type="file" />
                                            <i className="fas fa-upload"></i>
                                        </div>

                                    </div>

                                    <button type="submit" className="rightUpdate">Update</button>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>



            }

        </>
    )

}

export default User
