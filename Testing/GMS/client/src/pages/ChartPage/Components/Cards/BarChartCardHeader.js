import React from "react";
const BarChartCardHeader = (props) => {
    return (
        <div className="card-header">
            <h5 className="card-category">{props.Category}</h5>
            <h4 className="card-title">{props.Title}</h4>
        </div>
    );
}
export default BarChartCardHeader;


