import React from "react";

const Table = (props) => {
    return (<div className="card-progress">
        <div className="progress-container">
            <span className="progress-badge">Delivery Rate</span>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "90%" }}>
                    <span className="progress-value">90%</span>
                </div>
            </div>
        </div>

        <div className="progress-container progress-success">
            <span className="progress-badge">Open Rate</span>
            <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                    <span className="progress-value">60%</span>
                </div>
            </div>
        </div>

        <div className="progress-container progress-info">
            <span className="progress-badge">Click Rate</span>
            <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: "12%" }}>
                    <span className="progress-value">12%</span>
                </div>
            </div>
        </div>

        <div className="progress-container progress-warning">
            <span className="progress-badge">Hard Bounce</span>
            <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                    <span className="progress-value">5%</span>
                </div>
            </div>
        </div>

        <div className="progress-container progress-danger">
            <span className="progress-badge">Spam Report</span>
            <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: "0.11%" }}>
                    <span className="progress-value">0.11%</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Table;