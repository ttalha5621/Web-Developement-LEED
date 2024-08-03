import React from "react";

import BottomCard from "./BottomCard/BottomCard";
import Card from "./Card";
import CardCenter from "./CardCenter";

const Content = (props) => {
    return (
        <div className="content">
            <Card />
            <CardCenter />
            <BottomCard />
        </div>
    )
}

export default Content;