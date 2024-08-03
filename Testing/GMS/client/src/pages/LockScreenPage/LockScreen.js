import React from "react";
import HeaderImage from "./Components/HeaderImage";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const LockScreen = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="col-md-4 ml-auto mr-auto">
                    <div className="card card-lock text-center">
                        <HeaderImage />
                        <Form Name="Joe Gardner" Placeholder="Enter Password" />
                        <Footer Button="btn btn-primary btn-round btn-lg" Title="Unlock" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LockScreen;