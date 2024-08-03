import React from "react";

const Address = (props) => {
    return (
        <div className="tab-pane fade" id="address">
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <h5 className="info-text"> Are you living in a nice area? </h5>
                </div>
                <div className="col-sm-7">
                    <div className="form-group">
                        <label>Street Name</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Street No.</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="form-group">
                        <label>Country</label>
                        <select className="selectpicker" data-size="7"
                            data-style="btn btn-primary btn-round"
                            title="Single Select">
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa"> American Samoa </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antarctica"> Antarctica </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address;