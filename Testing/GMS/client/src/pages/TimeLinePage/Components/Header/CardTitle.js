import React from "react";

const CardTitle = (props) => {
    return (
        <div className="timeline-heading">
            <span className={props.Badge}>{props.Title}</span>
        </div>
    );
}

export default CardTitle;