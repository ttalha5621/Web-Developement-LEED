import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const RedditButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-reddit" Icon="fab fa-reddit" Text=" Repost . 232" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-reddit" Icon="fab fa-reddit" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-reddit" Icon="fab fa-reddit" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-reddit" Icon="fab fa-reddit" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-reddit" Icon="fab fa-reddit" Text=" Repost . 232" />
        </div>
    )
}
export default RedditButton;