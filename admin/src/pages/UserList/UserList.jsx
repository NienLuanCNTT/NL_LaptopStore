import { deleteUser, listUsers } from 'actions/userAction';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core'
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { Link } from 'react-router-dom';
import axios from 'axios';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         MuiTablePagination: '20px',
//     }
// }));


const UserList = () => {
    document.title = "Admin - Users"

    const [data, setData] = useState();

    useEffect(() => {
        const fetchOrderList = async () => {
            const users = await axios.get('/api/users');
            console.log('users ', users);
            const userList = users.data || [];

            setData(userList);
        }
        fetchOrderList();
    }, []);

    console.log(DataGrid);





    // const userList = useSelector((state) => state.userList);
    // const { loading, error, users } = userList;
    // const [data, setData] = useState(users);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);


    const handleDelete = (id) => {
        setData(data.filter((item) => item._id !== id))
        dispatch(deleteUser(id))
        window.location.reload();

    }


    // const classes = useStyles();

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 250, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.id}</span>
                )
            }
        },
        {
            field: 'name', headerName: 'User', width: 220, headerClassName: 'text', renderCell: (params) => {
                return (
                    <div className="columnUser">
                        <img className="columnUser__img" src={params.row.isAdmin ? params.row.image : params.row.image.split('\\').join('/')} alt="" />
                        <span>
                            {params.row.name}
                        </span>
                    </div>
                )
            }
        },
        {
            field: 'email', headerName: 'Email', width: 200, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.email}</span>
                )
            }
        },
        {
            field: 'phone', headerName: 'Phone', width: 150, headerClassName: 'text', renderCell: (params) => {
                return (
                    <span className="text">{params.row.phone}</span>
                )
            }
        },
        {
            field: 'isAdmin', headerName: 'Admin', width: 300, headerClassName: 'text', renderCell: (params) => {
                return (
                    <div className="behavior">
                        <Link to={`/user/${params.row.id}`}>
                            <button className="behavior__edit">Edit</button>
                        </Link>
                        <button className="behavior__delete" onClick={() => handleDelete(params.row.id)}><i class="fas fa-trash"></i></button>
                    </div>
                )
            }
        },
    ]


    return (

        <div className="userlist">

            <div className="userlist__header">
                <span className="userlist__header-title">User List</span>
                <Link to='/register' >
                    <button className="userlist__header-create">Create Account</button>
                </Link>
            </div>

            <div className="userlist__main">
                {
                    data &&
                    <DataGrid
                        disableSelectionOnClick
                        rows={data && data.map((user, index) => ({ id: user._id, name: user.name, image: user.image, email: user.email, phone: user.phone, isAdmin: user.isAdmin }))}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    // className={classes.root}
                    />
                }

            </div>



        </div>
    )
}

export default UserList
