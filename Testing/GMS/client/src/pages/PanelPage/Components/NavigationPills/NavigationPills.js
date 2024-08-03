import React from "react";
import HorizontalTabs from "./SubComponents/HorizontalTabs";
import VerticalTabs from "./SubComponents/VerticalTabs";
import CollapsibleGroupItem from "./SubComponents/CollapsibleGroupItem";
import VerticalIconsTabs from "./SubComponents/VerticalIconsTabs";
import PageSubcategories from "./SubComponents/PageSubcategories";
const NavigationPills = (props) => {
    return (
        <>
            <div className="row">
                <HorizontalTabs />
                <VerticalTabs />

            </div>
            <div className="row">
                <CollapsibleGroupItem />
                <VerticalIconsTabs />
            </div>

            <div className="row">
                <PageSubcategories />
            </div>
        </>
    )
}
export default NavigationPills;