import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const DribbleButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-dribbble" Icon="fab fa-dribbble" Text=" Find us on Dribble" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-dribbble" Icon="fab fa-dribbble" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-dribbble" Icon="fab fa-dribbble" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-dribbble" Icon="fab fa-dribbble" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-dribbble" Icon="fab fa-dribbble" Text=" Find us on Dribble" />
        </div>
    )
}
export default DribbleButton;
