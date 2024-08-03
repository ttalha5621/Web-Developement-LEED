import React from "react";

const ContributionHeader = (props) => {
    return (
        <div className="card-body ">
            <h1 className="card-title">{props.Title}</h1>
    <h3 className="card-category">{props.Category}</h3>
    <p className="card-description">{props.Description}</p>
        </div>
    );
}

export default ContributionHeader;



