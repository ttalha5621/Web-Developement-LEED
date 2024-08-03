import React from "react";
import BottomLeftCard from "./Card/BottomLeftCard";
import BottomMiddleCard from "./Card/BottomMiddleCard";
import BottomRightCard from "./Card/BottomRightCard";

const BottomCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <BottomLeftCard />
                    <BottomMiddleCard />

                </div>
            </div>
            <div className="col-md-6">
                <BottomRightCard />
            </div>
        </div>
    )
}

export default BottomCard;