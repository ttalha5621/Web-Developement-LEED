import React from "react";
import MessageCard from "./CardComponent/MessageCard";
import RevenueCard from "./CardComponent/RevenueCard";
import CustomerCard from "./CardComponent/CustomerCard";
import SupportCard from "./CardComponent/SupportCard";

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                            {/* {<!-- Message Card -->} */}
                            <MessageCard />
                            {/* {<!-- END Message Card -->} */}

                            {/* {<!-- Message Card -->} */}
                            <RevenueCard />
                            {/* {<!-- END Message Card -->} */}

                            {/* {<!-- Customer Card -->} */}
                            <CustomerCard />
                            {/* {<!-- END Customer Card -->} */}

                            {/* {<!-- Support Request Card -->} */}
                            <SupportCard />
                            {/* {<!-- END Support Request Card -->} */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;