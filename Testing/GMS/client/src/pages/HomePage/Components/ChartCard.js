import React from "react";
import FirstChart from "./FirstChartCardComponents/FirstChart";
import SecondChart from "./SecondChartCardComponents/SecondChart";
import ThirdChart from "./ThirdChartCardComponents/ThirdChart";

const ChartCard = (props) => {
    return (
        <div className="row">
            {/* {<!-- First Chart Card -->} */}
            <FirstChart />
            {/* {<!-- First Chart Card -->} */}

            {/* {<!-- First Chart Card -->} */}
            <SecondChart />
            {/* {<!-- First Chart Card -->} */}

            {/* {<!-- First Chart Card -->} */}
            <ThirdChart />
            {/* {<!-- First Chart Card -->} */}


        </div>
    );
}

export default ChartCard;