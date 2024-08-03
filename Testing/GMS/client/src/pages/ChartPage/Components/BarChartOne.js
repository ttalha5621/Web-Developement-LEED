import React from "react";
import BarChartCardHeader from "./Cards/BarChartCardHeader";
import ChartFooter from "./Footer/ChartFooter";
import BarChartOneGraph from "./Graph/BarChartOneGraph";

const BarChartOne = (props) => {
    return (
        <>
            <div className="col-md-5 ml-auto">
                <div className="card card-chart">
                    <BarChartCardHeader Category="Simple with grids and numbers" Title="Bar Chart" />
                    <div className="card-body">
                        <BarChartOneGraph />
                    </div>
                    <ChartFooter Icon="now-ui-icons ui-2_time-alarm" Text="Last 7 days"/>
                </div>
            </div>
        </>
    );
}

export default BarChartOne;