import React from "react";

const ProgressBar = (props) => {
    return (
        <>
            <h4 className="card-title">{props.Title}</h4>
            <div className={props.Color2}>
                <span className="progress-badge">{props.Badge}</span>
                <div className="progress">
                    <div className={props.Color} role="progressbar" aria-valuenow="60" style={{ width: "25%;" }}
                        aria-valuemin="0" aria-valuemax="100" >
                        <span className="progress-value">{props.Value}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
