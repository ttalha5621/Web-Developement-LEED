import React from "react";
import Footer from "../shared/Footer/Footer";
import NavigationPills from "./Components/NavigationPills/NavigationPills";
const Panel = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm">
            </div>
            <div className="content">
                <NavigationPills />
            </div>
        </>
    )
}
export default Panel;