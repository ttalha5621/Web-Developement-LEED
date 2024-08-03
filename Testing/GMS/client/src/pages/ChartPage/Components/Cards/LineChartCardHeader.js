import React from "react";

const LineChartCardHeader = (props) => {
    return (
        <div className="card-header">
            <h5 className="card-category">{props.Category}</h5>
            <h4 className="card-title">{props.Title}</h4>
            <div className="dropdown">
                <button type="button" className={props.Button}
                    data-toggle="dropdown">
                    <i className={props.Icon}></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">{props.FItem}</a>
                    <a className="dropdown-item" href="#">{props.SItem}</a>
                    <a className="dropdown-item" href="#">{props.TItem}</a>
                    <a className="dropdown-item text-danger" href="#">{props.FoItem}</a>
                </div>
            </div>
        </div>
    );
}
export default LineChartCardHeader;

