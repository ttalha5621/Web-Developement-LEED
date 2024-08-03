import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const GithubButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-github" Icon="fab fa-github" Text=" Connect with Github" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-github" Icon="fab fa-github" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-github" Icon="fab fa-github" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-github" Icon="fab fa-github" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-github" Icon="fab fa-github" Text=" Connect with Github" />
        </div>
    )
}
export default GithubButton;