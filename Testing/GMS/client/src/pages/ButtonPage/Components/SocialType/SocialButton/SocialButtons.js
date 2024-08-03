import React from "react";
const SocialButtons = (props) => {
    return (
        <div className={props.Size}>
            <button className={props.cssClass}>
                <i className={props.Icon}></i>
                {props.Text}
            </button>
        </div>
    )
}
export default SocialButtons;




