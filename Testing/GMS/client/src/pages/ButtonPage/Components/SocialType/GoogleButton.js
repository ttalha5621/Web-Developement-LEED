import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const GoogleButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-google" Icon="fab fa-google-plus-g" Text=" Share on Google+" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-google" Icon="fab fa-google-plus-g" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-google" Icon="fab fa-google-plus-g" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-google" Icon="fab fa-google-plus-g" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-google" Icon="fab fa-google-plus-g" Text=" Share on Google+" />
        </div>
    )
}
export default GoogleButton;