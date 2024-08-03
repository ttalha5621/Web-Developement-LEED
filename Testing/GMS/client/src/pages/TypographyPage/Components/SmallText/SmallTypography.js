import React from "react";
const SmallTypography = (props) => {
    return (
        <div className={props.Heading}>
            <h2><span>{props.Title}</span>
                {props.Text} <br />
                <small>{props.Content}</small>
            </h2>
        </div>
    );
}
export default SmallTypography;