import React from "react";
import Header from "../Common/Header";
import { Link, Outlet } from "react-router-dom";
// import WebDevelopement from "./Services/WebDevelopement";
// import MobileAppDevelopement from "./Services/MobileAppDevelopement";
// import DesktopAppDevelopement from "./Services/DesktopAppDevelopement";

export default function Services() {
    return (
        <>
            <Header />
            <h1>Services Page</h1>
            <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                    <>
                        <ul>
                            <li>
                                <Link to={"/Services/WebDevelopement"}>
                                    Website Developement
                                </Link>
                            </li>
                            <li>
                                <Link to={"/Services/MobileAppDevelopement"}>
                                    Mobile Application Developement
                                </Link>
                            </li>
                            <li>
                                <Link to={"/Services/DesktopAppDevelopement"}>
                                    Desktop Application Developement
                                </Link>
                            </li>
                        </ul>
                    </>
                </div>
            <Outlet />
            </div>
        </>
    );
}
