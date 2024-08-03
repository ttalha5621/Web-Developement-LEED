import React from "react";

const Form = (props) => {
    return (
        <div className="card-body ">
            <h4 className="card-title">{props.Name}</h4>
            <div className="form-group">
                <input type="password" className="form-control" placeholder={props.Placeholder} />
            </div>
        </div>
    );
}

export default Form;