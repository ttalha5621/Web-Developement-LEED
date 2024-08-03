import React from "react";
import LineChartCardHeader from "./Cards/LineChartCardHeader";
import ChartFooter from "./Footer/ChartFooter";
import LineChartTwoGraph from "./Graph/LineChartTwoGraph";

const LineChartTwo = (props) => {
    return (
        <>
            <div className="col-md-5 mr-auto">
                <div className="card card-chart">
                    <LineChartCardHeader Category="With numbers and grid" Title="Line Chart 2"
                        Button="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret"
                        Icon="fas fa-cog" FItem="Action" SItem="Another Action"
                        TItem="Something Else" FoItem="Remove Data" />
                    <div className="card-body" />
                    <div className="card-body">
                        <LineChartTwoGraph />
                    </div>
                    <ChartFooter Icon="now-ui-icons arrows-1_refresh-69" Text="Just Updated" />
                </div>
            </div>
        </>
    );
}

export default LineChartTwo;