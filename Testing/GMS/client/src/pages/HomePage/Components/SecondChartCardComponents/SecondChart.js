import React from "react";
import ChartGraph from "./Graph/ChartGraph";
import ActionLink from "./ActionLink/ActionLink";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";

const SecondChart = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card card-chart">

                {/* {<!-- ActionLink -->} */}
                <ActionLink />
                {/* {<!-- END ActionLink -->} */}

                <div className="card-body">

                    {/* {<!-- First Chart Graph -->} */}
                    <ChartGraph />
                    {/* {<!-- END First Chart Graph -->} */}

                    {/* {<!-- Chart Table -->} */}
                    <Table />
                    {/* {<!-- END Chart Table -->} */}

                </div>

                {/* {<!-- Chart Footer -->} */}
                <Footer />
                {/* {<!-- END Chart Footer -->} */}

            </div>
        </div>
    );
}

export default SecondChart;