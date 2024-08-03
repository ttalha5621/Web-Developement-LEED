import React from "react";
import Footer from "./Registration/Footer";
import RegistrationForm from "./Registration/RegistrationForm";
import RegistrationHeader from "./Registration/RegistrationHeader";

const RegistrationCard = (props) => {
    return (
        <div className="col-md-4 mr-auto">
            <div className="card card-signup text-center">
                <RegistrationHeader Title="Register" TButton="btn btn-icon btn-round btn-twitter"
                    TIcon="fab fa-twitter" DButton="btn btn-icon btn-round btn-dribbble" DIcon="fab fa-dribbble"
                    FButton="btn btn-icon btn-round btn-facebook" FIcon="fab fa-facebook-f" Text="or be classic" />

                <div className="card-body ">
                    <RegistrationForm />
                </div>
                <Footer Title="Get Started" Button="btn btn-primary btn-round btn-lg" />
            </div>
        </div>
    )
}

export default RegistrationCard;