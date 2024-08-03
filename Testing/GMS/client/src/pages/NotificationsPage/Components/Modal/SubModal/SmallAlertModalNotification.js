import React from "react";

const SmallAlertModalNotification = (props) => {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header" data-dismiss="modal">
                    <p>{props.title}</p>
                    <i className={props.Icon} ></i>
                </div>
                <div className="modal-body">
                    {props.form}
                </div>
                <div className="modal-footer">
                    <button type="button"
                        className={props.Alert}>{props.Button}</button>
                    <button type="button" className={props.Alert}
                        data-dismiss="modal">{props.CloseButton}</button>
                </div>
            </div>
        </div>
    )
}
export default SmallAlertModalNotification


