import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const PinterestButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-pinterest" Icon="fab fa-pinterest" Text=" Pint it · 212" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-pinterest" Icon="fab fa-pinterest" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-pinterest" Icon="fab fa-pinterest" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-pinterest" Icon="fab fa-pinterest" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-pinterest" Icon="fab fa-pinterest" Text=" Pint it · 212" />
        </div>
    )
}
export default PinterestButton;