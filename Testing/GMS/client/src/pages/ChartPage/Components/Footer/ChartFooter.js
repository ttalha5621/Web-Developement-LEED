import React from "react";

const ChartFooter = (props) => {
    return (
        <div className="card-footer">
            <div className="stats">
                <i className={props.Icon}></i> {props.Text}
            </div>
        </div>
    );
}
export default ChartFooter;
