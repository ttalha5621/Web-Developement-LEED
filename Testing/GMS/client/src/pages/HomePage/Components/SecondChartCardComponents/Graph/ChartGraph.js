import React from "react";
import EmailsCampaignChart from '../../../../Charts/EmailsCampaignChart';

const ChartGraph = (props) => {
    return (
        <div className="chart-area">
            {/* <canvas id="emailsCampaignChart"></canvas> */}
            <EmailsCampaignChart />
        </div>
    );
}

export default ChartGraph;