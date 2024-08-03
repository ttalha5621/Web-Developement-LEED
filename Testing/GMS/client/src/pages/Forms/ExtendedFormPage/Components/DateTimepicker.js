import React from "react";

const DateTimePicker = (props) => {
    return <div className="col-md-4">
        <div className="card ">
            <div className="card-header ">
                <h4 className="card-title">{props.Title}</h4>
            </div>
            <div className="card-body ">
                <div className="form-group">
                    <input type="text" className={props.Form} value={props.Value} />
                </div>
            </div>
        </div>
    </div>
}

export default DateTimePicker;