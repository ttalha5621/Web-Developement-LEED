import React from "react";
import RangeValidation from "./Components/RangeValidation";
import RegistrationLoginForms from "./Components/RegistrationLoginForms";
import TypeValidation from "./Components/TypeValidationForm";

const ValidationForm = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <RegistrationLoginForms />
                    <div className="col-md-12">
                        <TypeValidation />
                    </div>
                    <div className="col-md-12">
                        <RangeValidation />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ValidationForm;