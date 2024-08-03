import React from "react";
import Content from "../Content/Content";
const SubcategoriesContents = (props) => {
    return (
        <div className="tab-content tab-space tab-subcategories">
            <Content
                ContentTab="tab-pane active"
                ContentId="link7"
                Content="Collaboratively administrate empowered markets via plug-and-play networks.
                         Dynamically procrastinate B2C users after installed base benefits."
                LessContent="Dramatically visualize customer directed convergence without revolutionary ROI." />
            <Content
                ContentTab="tab-pane"
                ContentId="link8"
                Content="Efficiently unleash cross-media information without cross-media value. Quickly
                         maximize timely deliverables for real-time schemas."
                LessContent="Dramatically maintain clicks-and-mortar solutions without functional solutions." />
            <Content
                ContentTab="tab-pane"
                ContentId="link9"
                Content="Completely synergize resource taxing relationships via premier niche markets.
                         Professionally cultivate one-to-one customer service with robust ideas."
                LessContent="Dynamically innovate resource-leveling customer service for state of the art customer service." />
        </div>
    )
}
export default SubcategoriesContents;
