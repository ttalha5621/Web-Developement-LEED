import React from "react";
import Images from "../../../assets/index";

const TestimonialCard = (props) => {
    return (
        <div className="card card-testimonial">
            <div className="card-header card-header-avatar">
                <a href="#pablo">
                    <img className="img img-raised" src={Images.James} alt="..." />
                </a>
            </div>
            <div className="card-body ">
                <p className="card-description">
                    The networking at Web Summit is like no other European tech conference.
                    </p>
                <div className="icon icon-primary">
                    <i className="fa fa-quote-right"></i>
                </div>
            </div>
            <div className="card-footer ">
                <h4 className="card-title">Alton becker</h4>
                <p className="category">@altonbecker</p>
            </div>
        </div>
    );
}

export default TestimonialCard;