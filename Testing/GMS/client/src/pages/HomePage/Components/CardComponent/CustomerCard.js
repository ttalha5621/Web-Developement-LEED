import React from "react";

const CustomerCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="statistics">
                <div className="info">
                    <div className="icon icon-info">
                        <i className="fas fa-user-alt"></i>
                    </div>
                    <h3 className="info-title">562</h3>
                    <h6 className="stats-title">Customers</h6>
                </div>
            </div>
        </div>
    );
}

export default CustomerCard;