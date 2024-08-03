import React from 'react';
import Images from "../../../../assets/index";

const Content = (props) => {
    return (
        <div className="tab-pane show active" id="about">
            <h5 className="info-text"> Let's start with the basic information (with validation)</h5>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="picture-container">
                        <div className="picture">
                            <img src={Images.DefaultAvatar} alt="..."
                                className="picture-src" id="wizardPicturePreview"
                                title="" />
                            <input type="file" id="wizard-picture" />
                        </div>
                        <h6 className="description">Choose Picture</h6>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group form-control-lg">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="now-ui-icons users_circle-08"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control"
                            placeholder="First Name (required)" name="firstname" />
                    </div>

                    <div className="input-group form-control-lg">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="now-ui-icons text_caps-small"></i>
                            </div>
                        </div>
                        <input type="text" placeholder="Last Name (required)"
                            className="form-control" name="lastname" />
                    </div>
                </div>
                <div className="col-lg-10 mt-3">
                    <div className="input-group form-control-lg">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="now-ui-icons text_caps-small"></i>
                            </div>
                        </div>
                        <input type="email" placeholder="Email (required)"
                            className="form-control" name="email" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;