import React from "react";

const RevenueCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="statistics">
                <div className="info">
                    <div className="icon icon-success">
                        <i className="fas fa-cash-register"></i>
                    </div>
                    <h3 className="info-title"><small>$</small>3,521</h3>
                    <h6 className="stats-title">Today Revenue</h6>
                </div>
            </div>
        </div>
    );
}

export default RevenueCard;