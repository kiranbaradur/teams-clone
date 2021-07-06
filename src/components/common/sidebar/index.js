import React from "react";
import "./sidebar.css";
import { SidebarData, SidebarMore, SidebarBottom } from "../../../data/sidebar";
import SidebarOption from "./sidebar-option";
function Sidebar() {
    const topOptions = SidebarData;
    const more = SidebarMore;
    const bottomOptions = SidebarBottom;
    return (
        <div className="sidebar">
            <div className="top">
                <div className="">
                    {topOptions.map((option) => {
                        return (
                            <SidebarOption
                                option={option}
                                isActive={
                                    option.name === "Calls" ? true : false
                                }
                            />
                        );
                    })}
                </div>
                <div>
                    <SidebarOption option={more} />
                </div>
            </div>
            <div className="bottom">
                {bottomOptions.map((option) => {
                    return <SidebarOption option={option} />;
                })}
            </div>
        </div>
    );
}

export default Sidebar;
