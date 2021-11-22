import React from 'react'
import logo from 'assets/logo/logo_store.png';
import avatar from 'assets/images/dog.jpg';



const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar__Wrapper">
                <div className="topLeft">
                    <div className="topLeft__logo">
                        <img src={logo} className="topLeft__logo-img" alt="" />
                    </div>
                </div>
                <div className="topRight">

                    <div className="topRight__icon">
                        <i className="far fa-bell noti"></i>
                        <span className="topRight__icon-amount">
                            6
                        </span>
                    </div>

                    <div className="topRight__icon">
                        <i class="fas fa-globe noti"></i>
                        <span className="topRight__icon-amount">
                            2
                        </span>
                    </div>

                    <div className="topRight__icon">
                        <i class="fas fa-cog noti"></i>
                    </div>

                    <img src={avatar} alt="" className="topRight__avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
