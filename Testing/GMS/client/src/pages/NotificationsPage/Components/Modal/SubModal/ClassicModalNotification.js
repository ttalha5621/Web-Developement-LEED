import React from "react";
const ClassicModalNotification = (props) => {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header justify-content-center">
                    <button type="button" className="close" data-dismiss="modal"
                        aria-hidden="true">
                        <i className={props.Icon}></i>
                    </button>
    <h4 className="title title-up">{props.Title}</h4>
                </div>
                <div className="modal-body">
                    <p> {props.Paragraph}
</p>
                </div>
                <div className="modal-footer">
    <button type="button" className={props.Alert}>{props.Button}</button>
                    <button type="button" className={props.DangerAlert}
                        data-dismiss="modal">{props.CloseButton}</button>
                </div>
            </div>
        </div>
    )
}
export default ClassicModalNotification;