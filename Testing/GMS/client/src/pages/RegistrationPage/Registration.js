import React from "react";
import RegistrationCard from "./Components/RegistrationCard";
import Info from "./Components/Info";

const Registration = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <Info />
                    <RegistrationCard />
                </div>
            </div>
        </div>
    );
}

export default Registration;