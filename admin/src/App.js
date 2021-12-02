import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import Home from 'pages/Home/Home';
import UserList from 'pages/UserList/UserList';
import './sass/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from 'pages/User/User';


function App() {
  return (
    <BrowserRouter>


      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/users" element={<UserList />} />

          <Route path="/user/:id" element={<User />} />


        </Routes>

      </div>


    </BrowserRouter>
  );
}

export default App;
