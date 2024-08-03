import React from "react";

const RegistrationForm = (props) => {
    return (
        <form className="form" method="" action="#">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="now-ui-icons users_circle-08"></i>
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="First Name..." />
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="now-ui-icons text_caps-small"></i>
                    </div>
                </div>
                <input type="text" placeholder="Last Name..." className="form-control" />
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="now-ui-icons ui-1_email-85"></i>
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="Email..." />
            </div>

            <div className="form-check text-left">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />
                    <span className="form-check-sign"></span>
                                    I agree to the <a href="#something">terms and conditions</a>.
                                    </label>
            </div>
        </form>
    );
}

export default RegistrationForm;