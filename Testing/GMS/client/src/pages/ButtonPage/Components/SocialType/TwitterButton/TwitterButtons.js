import React from "react";
const TwitterButtons = (props) => {
    return (
        <div className={props.Size}>
            <p className="category">{props.heading}</p>
            <button className={props.cssClass}>
                <i className={props.Icon}></i>
                {props.Text}
            </button>
        </div>
    )
}
export default TwitterButtons;