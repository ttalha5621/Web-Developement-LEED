import React from "react";
import LeftSection from "./CardCenterComponents/LeftSection";
import RightSection from "./CardCenterComponents/RightSection";

const CardCenter = (props) => {
    return (

        <div className="row">
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default CardCenter;