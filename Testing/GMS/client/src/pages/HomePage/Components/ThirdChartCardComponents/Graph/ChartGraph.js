import React from "react";
import Chart from "./Chart";
import Map from "./Map";

const ChartGraph = (props) => {
    return (
        <div className="card-body">
            <div className="chart-area">
                <Chart />
            </div>
            <Map />
        </div>
    );
}

export default ChartGraph;