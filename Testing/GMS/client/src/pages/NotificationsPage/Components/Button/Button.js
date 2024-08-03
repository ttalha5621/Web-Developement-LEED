import React from "react";
const Button = (props) => {
    return (
        <div className={props.Alert} data-notify={props.Notify}>
            <button type="button" aria-hidden="true" className="close">
                <i className={props.Icon}></i>
            </button>
            <span data-notify="icon" className={props.NewIcon}></span>
    <span data-notify={props.Message}><b> {props.Heading} </b>{props.Text}</span>
        </div>
    )
}
export default Button
//message

                                                                   