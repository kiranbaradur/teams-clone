import React from "react";
import Sidebar from "../common/sidebar";
import LeftFold from "./left-fold";
import RightFold from "./right-fold";
import Header from "../common/header";
import "./calls.css";
function Calls() {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="leftFold">
                    <LeftFold />
                </div>
                <div className="rightFold">
                    <RightFold />
                </div>
            </div>
        </div>
    );
}

export default Calls;
