import { detailsUser } from 'actions/userAction';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';

const User = () => {
    document.title = "Admin - User";

    const { id } = useParams();
    console.log(id);

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    useEffect(() => {
        dispatch(detailsUser(id))
    }, [dispatch, id]);

    console.log(user);

    return (

        <>

            {
                loading ? (<LoadingBox></LoadingBox >) : error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (
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
                                    content
                                </div>
                            </div>

                        </div>
                    )

            }
        </>

    )

}

export default User
