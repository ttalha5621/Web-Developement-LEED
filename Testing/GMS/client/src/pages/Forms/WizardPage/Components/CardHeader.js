import React from "react";

const CardHeader = (props) => {
    return (
        <div className="card-header text-center" data-background-color="orange">
            <h3 className="card-title">
                Build Your Profile
                                        </h3>
            <h3 className="description">This information will let us know more about you.</h3>
            <div className="wizard-navigation">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#about" data-toggle="tab"
                            role="tab" aria-controls="about" aria-selected="true">
                            <i className="now-ui-icons users_circle-08"></i>
                                            About
                                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#account" data-toggle="tab"
                            data-toggle="tab" role="tab" aria-controls="account"
                            aria-selected="false">
                            <i className="now-ui-icons ui-1_settings-gear-63"></i>
                                            Account
                                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#address" data-toggle="tab"
                            data-toggle="tab" role="tab" aria-controls="address"
                            aria-selected="false">
                            <i className="now-ui-icons ui-1_email-85"></i>
                                            Address
                                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardHeader;