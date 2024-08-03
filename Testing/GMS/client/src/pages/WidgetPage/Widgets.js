import React from "react";
import ContentCard from "./Components/ContentCard";
import HeaderCards from "./Components/Cards/HeaderCards";
import PricingCard from "./Components/PricingCard";

const Widgets = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <HeaderCards />
                <ContentCard />
                <PricingCard />
            </div>
        </>
    );
}

export default Widgets;