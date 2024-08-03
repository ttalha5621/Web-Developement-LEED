import React from "react";
import LineChartCardHeader from "./Cards/LineChartCardHeader";
import ChartFooter from "./Footer/ChartFooter";
import LineChartOneGraph from "./Graph/LineChartOneGraph";

const LineChartOneCardHeader = (props) => {
    return (
        <>
            <div className="col-md-5 ml-auto">
                <div className="card card-chart">
                    <LineChartCardHeader Category="Simple with gradient" Title="Line Chart"
                        Button="btn btn-round dropdown-toggle btn-outline-default btn-icon no-caret"
                        Icon="fas fa-cog" FItem="Action" SItem="Another Action"
                        TItem="Something Else" FoItem="Remove Data" />
                    <div className="card-body">
                        <LineChartOneGraph />
                    </div>
                    <ChartFooter Icon="now-ui-icons arrows-1_refresh-69" Text="Just Updated" />
                </div>
            </div>
        </>
    );
}

export default LineChartOneCardHeader;