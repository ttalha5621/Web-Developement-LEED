import React from "react";
import BarChartCardHeader from "./Cards/BarChartCardHeader";
import ChartFooter from "./Footer/ChartFooter";
import BarChartTwoGraph from "./Graph/BarChartTwoGraph";

const BarChartTwo = (props) => {
    return (
        <>
            <div className="col-md-5 mr-auto">
                <div className="card card-chart">
                    <BarChartCardHeader Category="Multiple bars no gradient" Title="Bar Chart 2" />
                    <div className="card-body">
                        <BarChartTwoGraph />
                    </div>
                    <ChartFooter Icon="now-ui-icons ui-2_time-alarm" Text="Last 7 days" />
                </div>
            </div>
        </>
    );
}

export default BarChartTwo;