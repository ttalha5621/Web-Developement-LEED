import React from "react";
import Title from "./Components/Title";
import LineChartOne from "./Components/LineChartOne";
import LineChartTwo from "./Components/LineChartTwo";
import BarChartOne from "./Components/BarChartOne";
import BarChartTwo from "./Components/BarChartTwo"

const Chart = (props) => {
    return (
        <>
            <Title />
            <div className="content">
                <div className="row">
                    <LineChartOne />
                    <LineChartTwo />
                </div>
                <div className="row">
                    <BarChartOne />
                    <BarChartTwo />
                </div>
            </div>
        </>
    );
}

export default Chart;