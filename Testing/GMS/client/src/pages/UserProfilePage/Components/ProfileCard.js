import React from "react";
import Images from "../../../assets/index";
import SocialIcons from "./SocialIcons/SocialIcons";

const ProfileCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="card card-user">
                <div className="image">
                    <img src={Images.Background5} alt="..." />
                </div>
                <div className="card-body">
                    <div className="author">
                        <a href="#">
                            <img className="avatar border-gray" src={Images.Mike} alt="..." />
                            <h5 className="title">Mike Andrew</h5>
                        </a>
                        <p className="description">
                            michael24
                                    </p>
                    </div>
                    <p className="description text-center">
                        "Lamborghini Mercy <br />
                                             Your chick she so thirsty <br />
                                             I'm in that two seat Lambo"
                                </p>
                </div>
                <hr />
                <div className="button-container">
                    <SocialIcons Button="btn btn-neutral btn-icon btn-round btn-lg" Icon="fab fa-facebook-square" />
                    <SocialIcons Button="btn btn-neutral btn-icon btn-round btn-lg" Icon="fab fa-google-plus-square"/>
                    <SocialIcons Button="btn btn-neutral btn-icon btn-round btn-lg" Icon="fab fa-twitter"/>

                </div>
            </div>
        </div>
    );
}

export default ProfileCard;