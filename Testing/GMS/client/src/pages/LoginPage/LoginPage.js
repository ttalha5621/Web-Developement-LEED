import React from "react";
import LoginForm from "./Components/LoginForm";

const Login = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="col-md-4 ml-auto mr-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;