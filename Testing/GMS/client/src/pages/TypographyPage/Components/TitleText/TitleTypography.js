import React from "react";
const TitleTypography = (props) => {
    return (
        <div className="card-header">
            <h5 className="title">{props.Title}</h5>
    <p className="category">{props.Text}</p>
        </div>
    );
}
export default TitleTypography;