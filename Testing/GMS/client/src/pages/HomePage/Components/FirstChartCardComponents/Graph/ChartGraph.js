import React from "react";
import ActiveUsersChart from '../../../../Charts/ActiveUsersChart';

const ChartGraph = (props) => {
    return (
        <div className="chart-area">
            {/* <canvas id="activeUsers"></canvas> */}
            <ActiveUsersChart />
        </div>
    );
}

export default ChartGraph;