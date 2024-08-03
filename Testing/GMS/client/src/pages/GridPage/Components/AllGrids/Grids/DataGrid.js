import React from "react";
const DataGrid = (props) => {
    return (
        <div className={props.Size}>
            <div className="card">
                <div className="card-body text-center">
                    <code>{props.Text}</code>
                </div>
            </div>
        </div>
    )
}

export default DataGrid;