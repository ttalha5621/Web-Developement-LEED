import React from "react";
import Content from "../Content/Content";
const VContents = (props) => {
    return (
        <div className="col-md-8">
            <div className="tab-content">
                <Content ContentTab="tab-pane active"
                    ContentId="link4"
                    Content="Collaboratively administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after installed base benefits."
                    LessContent=" Dramatically visualize customer directed convergence without revolutionary ROI." />
                <Content ContentTab="tab-pane"
                    ContentId="link5"
                    Content=" Efficiently unleash cross-media information without cross-media value.
                    Quickly maximize timely deliverables for real-time schemas."
                    LessContent="Dramatically maintain clicks-and-mortar solutions without functional solutions." />
                <Content ContentTab="tab-pane"
                    ContentId="link6"
                    Content="Completely synergize resource taxing relationships via premier niche markets. 
                            Professionally cultivate one-to-one customer service with robust ideas."
                    LessContent="Dynamically innovate resource-leveling customer service for state of the art customer service." />
            </div>
        </div>
    )
}
export default VContents;
