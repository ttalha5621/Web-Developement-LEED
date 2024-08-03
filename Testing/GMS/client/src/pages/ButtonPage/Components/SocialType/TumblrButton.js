import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const TumblrButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-tumblr" Icon="fab fa-tumblr-square" Text=" Repost" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-tumblr" Icon="fab fa-tumblr" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-tumblr" Icon="fab fa-tumblr" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-tumblr" Icon="fab fa-tumblr-square" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-tumblr" Icon="fab fa-tumblr-square" Text=" Repost" />
        </div>
    )
}
export default TumblrButton;