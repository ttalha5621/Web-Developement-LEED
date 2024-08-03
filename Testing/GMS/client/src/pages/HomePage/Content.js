import React from "react";
import Card from "./Components/Card";
import ChartCard from "./Components/ChartCard";
import TableContent from "./TableContent";

const Content = (props) => {
    return (
        <div className="content">

            {/* {<!-- Card  --> } */}
            <Card />
            {/* {<!-- END Card  --> } */}

            {/* {<!-- Chart Card  --> } */}
            <ChartCard />
            {/* {<!-- END Chart Card  --> } */}

            {/* {<!-- Table Content  --> } */}
            <TableContent />
            {/* {<!-- END Table Content  --> } */}

        </div>
    );
}

export default Content;