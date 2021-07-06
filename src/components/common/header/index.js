import React from "react";
import "./header.css";
function Header() {
    return (
        <div className="header">
            <div className="menu">
                <i class="fi-rr-layout-fluid"></i>
            </div>
            <div className="leftFold">
                <label className="label">Microsoft Teams</label>
            </div>
            <div className="rightFold">
                <div className="search">
                    <i class="fi-rr-search"></i>
                    <input placeholder="Search" />
                </div>
                <div className="profile">
                    <div className="options">
                        <i class="fi-rr-menu-dots"></i>
                    </div>
                    <img
                        src="https://image.flaticon.com/icons/png/128/2922/2922510.png"
                        alt="Avatar"
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
