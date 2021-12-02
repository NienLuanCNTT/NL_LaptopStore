import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__wrapper__menu">
                    <div className="menuTitle">Dashboard</div>
                    <ul className="menuList">
                        <li className="menuList__item active">
                            <i className="fas fa-home menuList__item-icon"></i>
                            <span className="menuList__item-name">Home</span>
                        </li>

                        <li className="menuList__item">
                            <Link to="/users">
                                <i className="fas fa-user menuList__item-icon"></i>
                                <span className="menuList__item-name">Users</span>
                            </Link>
                        </li>

                        <li className="menuList__item">
                            <i className="fas fa-store menuList__item-icon"></i>
                            <span className="menuList__item-name">Products</span>
                        </li>

                        <li className="menuList__item">
                            <Link to="/orders">
                                <i className="fas fa-shopping-cart menuList__item-icon"></i>
                                <span className="menuList__item-name">Orders</span>
                            </Link>
                        </li>

                        <li className="menuList__item">
                            <i className="far fa-chart-bar menuList__item-icon"></i>
                            <span className="menuList__item-name">Analytics</span>
                        </li>

                        <li className="menuList__item">
                            <i className="fas fa-chart-line menuList__item-icon"></i>
                            <span className="menuList__item-name">Sales</span>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default SideBar
