import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const LinkedinButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-linkedin" Icon="fab fa-linkedin" Text=" Connect with Linkedin" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-linkedin" Icon="fab fa-linkedin" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-linkedin" Icon="fab fa-linkedin" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-linkedin" Icon="fab fa-linkedin" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-linkedin" Icon="fab fa-linkedin" Text=" Connect with Linkedin" />
        </div>
    )
}
export default LinkedinButton;