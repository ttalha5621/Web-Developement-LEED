import React from "react";

const CardIcons = (props) => {
    return (
        <div className={props.Column}>
            <div className={props.Type}>
                <i className={props.Icon}></i>
            </div>
        </div>
    )
}

export default CardIcons;

