import React from "react";

const ProfileForms = (props) => {
    return (
        <div className={props.Size}>
            <div className="form-group">
                <label>{props.Text}</label>
                <input type="text" className="form-control" disabled=""
                    placeholder={props.Placeholder} value={props.Value} />
            </div>
        </div>
    );
}
export default ProfileForms;



