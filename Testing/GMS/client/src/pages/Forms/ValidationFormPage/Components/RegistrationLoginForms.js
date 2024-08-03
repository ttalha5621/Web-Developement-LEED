import React from "react";
import RegisterLoginForm from "./RegisterLoginForm/RegisterLoginForm";

const RegistrationLoginForms = (props) => {
    return (
        <>
            <div className="col-md-6">
                <RegisterLoginForm Id="RegisterValidation" Action="#" Title="Register Form"
                    Label=" Email Address *" Name="email" Type="email" Label2="Password *" Name2="password"
                    Type2="password" Id2="registerPassword" Label3="Confirm Password *" Name3="password_confirmation"
                    Id3="registerPasswordConfirmation" Type3="password" Equal="#registerPassword"
                    Required="* Required fields" Button="Register" />
            </div>

            <div className="col-md-6">
                <RegisterLoginForm Id="LoginValidation" Action="#" Title="Login Form"
                    Label=" Full Name *" Name="fullname" Type="text" Email="true" Label2="Email Address *"
                    Name2="email" Type2="email" Email2="true" Label3="Password *" Name3="password"
                    Type3="password" Required="* Required fields" Button="Register" />
            </div>
        </>
    )
}

export default RegistrationLoginForms;