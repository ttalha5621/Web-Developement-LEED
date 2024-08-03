import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const BehanceButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-behance" Icon="fab fa-behance-square" Text=" Follow Us" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-behance" Icon="fab fa-behance" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-behance" Icon="fab fa-behance" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-behance" Icon="fab fa-behance" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-behance" Icon="fab fa-behance-square" Text=" Follow Us" />
        </div>
    )
}
export default BehanceButton;

