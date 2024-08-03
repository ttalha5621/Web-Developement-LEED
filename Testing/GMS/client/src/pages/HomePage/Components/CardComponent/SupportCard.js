import React from "react";

const SupportCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="statistics">
                <div className="info">
                    <div className="icon icon-danger">
                        <i className="fas fa-life-ring"></i>
                    </div>
                    <h3 className="info-title">353</h3>
                    <h6 className="stats-title">Support Requests</h6>
                </div>
            </div>
        </div>
    );
}

export default SupportCard;