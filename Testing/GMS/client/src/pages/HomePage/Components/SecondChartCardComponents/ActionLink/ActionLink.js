import React from "react";

const ActionLink = (props) => {
    return (
        <div className="card-header">
            <h5 className="card-category">Summer Email Campaign</h5>
            <h2 className="card-title">55,300</h2>
            <div className="dropdown">
                <button type="button" className="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret"
                    data-toggle="dropdown">
                    <i className="fas fa-cog"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                </div>
            </div>
        </div>
    );
}

export default ActionLink;