import React from "react";
import Images from "../../../assets/index";

const LoginForm = (props) => {
    return (
        <form className="form" method="" action="#">
            <div className="card card-login card-plain">
                <div className="card-header ">
                    <div className="logo-container">
                        <img src={Images.NowLogo} alt="..." />
                    </div>
                </div>

                <div className="card-body ">
                    <div className="input-group no-border form-control-lg">
                        <span className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="now-ui-icons users_circle-08"></i>
                            </div>
                        </span>
                        <input type="text" className="form-control" placeholder="First Name..." />
                    </div>

                    <div className="input-group no-border form-control-lg">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="now-ui-icons text_caps-small"></i>
                            </div>
                        </div>
                        <input type="text" placeholder="Last Name..." className="form-control" />
                    </div>

                </div>

                <div className="card-footer ">
                    <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block mb-3">Get
                        Started</a>
                    <div className="pull-left">
                        <h6><a href="#pablo" className="link footer-link">Create Account</a></h6>
                    </div>

                    <div className="pull-right">
                        <h6><a href="#pablo" className="link footer-link">Need Help?</a></h6>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;