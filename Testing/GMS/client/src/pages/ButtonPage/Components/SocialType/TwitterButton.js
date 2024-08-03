import React from "react";
import TwitterButtons from "./TwitterButton/TwitterButtons";
const TwitterButton = (props) => {
    return (
        <div className="row">
            <TwitterButtons Size="col-md-4 col-sm-5" cssClass="btn btn-twitter" Icon="fab fa-twitter" Text=" Connect with twitter" heading="Default" />
            <TwitterButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-twitter" Icon="fab fa-twitter" heading="&nbsp;" />
            <TwitterButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-twitter" Icon="fab fa-twitter" heading="&nbsp;" />
            <TwitterButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-twitter" Icon="fab fa-twitter" heading="Neutral" />
            <TwitterButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-twitter" Icon="fab fa-twitter" Text=" Connect with twitter" heading="&nbsp;" />
        </div>
    )
}
export default TwitterButton;
