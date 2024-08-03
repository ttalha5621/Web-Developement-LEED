import React from "react";
import SocialButtons from "./SocialButton/SocialButtons";
const YoutubeButton = (props) => {
    return (
        <div className="row">
            <SocialButtons Size="col-md-4 col-sm-5" cssClass="btn btn-youtube" Icon="fab fa-youtube" Text=" View on Youtube" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon  btn-youtube" Icon="fab fa-youtube" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-round btn-youtube" Icon="fab fa-youtube" />
            <SocialButtons Size="col-md-1 col-sm-1" cssClass="btn btn-icon btn-neutral btn-youtube" Icon="fab fa-youtube" />
            <SocialButtons Size="col-md-3 col-sm-4" cssClass="btn btn-neutral btn-youtube" Icon="fab fa-youtube" Text=" View on Youtube" />
        </div>
    )
}
export default YoutubeButton;