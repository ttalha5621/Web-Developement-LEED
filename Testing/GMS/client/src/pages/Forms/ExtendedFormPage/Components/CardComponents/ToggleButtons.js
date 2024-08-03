import React from "react";

const ToggleButtons = (props) => {
    return (
        <>
            <div className="col-md-4">
                <p className="category">{props.Title}</p>
                <input type="checkbox" checked name="checkbox" className="bootstrap-switch"
                    data-on-label={props.OnLabel}
                    data-off-label={props.OffLabel} />
                <input type="checkbox" name="checkbox" className="bootstrap-switch"
                    data-on-label={props.OnLabel}
                    data-off-label={props.OffLabel} />
            </div>
        </>
    );
}

export default ToggleButtons;
