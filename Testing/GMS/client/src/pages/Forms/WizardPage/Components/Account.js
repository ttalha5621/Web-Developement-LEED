import React from "react";

const Account = (props) => {
    return (
        <div className="tab-pane fade" id="account">
            <h5 className="info-text"> What are you doing? (checkboxes) </h5>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Design" />
                                <div className="icon">
                                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                                </div>
                                <h6>Design</h6>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Code" />
                                <div className="icon">
                                    <i className="now-ui-icons business_bulb-63"></i>
                                </div>
                                <h6>Code</h6>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Develop" />
                                <div className="icon">
                                    <i className="now-ui-icons tech_tv"></i>
                                </div>
                                <h6>Develop</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;