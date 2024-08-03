import React from "react";
const Button = (props) => {
    return (
        <button className={props.cssClass} onClick={props.Click} data-toggle={props.Modal} data-target={props.Data}>
            <span className={props.Label}>
                <i className={props.Icon}></i>
            </span>
            {props.Text}
        </button>


    )
}
export default Button;
