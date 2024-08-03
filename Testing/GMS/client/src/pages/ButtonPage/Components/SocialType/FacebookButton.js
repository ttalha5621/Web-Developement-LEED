import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const FacebookButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-facebook" Icon="fab fa-facebook" Text=" Share · 2.2k" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-facebook" Icon="fab fa-facebook-f" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-facebook" Icon="fab fa-facebook-f" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-facebook" Icon="fab fa-facebook" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-facebook" Icon="fab fa-facebook" Text=" Share · 2.2k" />
        </div>
    )
}
export default FacebookButton;
