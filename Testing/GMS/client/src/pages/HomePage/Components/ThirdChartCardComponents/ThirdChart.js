import React from "react";
import Tittle from "./Tittle/Tittle";
import Graph from "./Graph/ChartGraph";
import Footer from "./Footer/Footer";

const ThirdChart = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card card-chart">
                <Tittle />
                <Graph />
                <Footer />

            </div>
        </div>
    );
}

export default ThirdChart;