import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import Home from 'pages/Home/Home';
import UserList from 'pages/UserList/UserList';
import './sass/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from 'pages/User/User';

import AddConfig from 'components/AddConfig/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderList from 'pages/OrderList';
import Register from 'pages/Register/Register';

function App() {
  return (
    <BrowserRouter>


      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/orders" element={<OrderList />} />

          <Route path="/configadd" element={<AddConfig />} />

          <Route path="/user/:id" element={<User />} />

          <Route path="/register" element={<Register />} />


        </Routes>

      </div>

      <ToastContainer style={{ fontSize: 15 }} />

    </BrowserRouter>
  );
}

export default App;
