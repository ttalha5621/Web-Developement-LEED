import React from "react";
import HButtons from "./HorizontalTabs/HButtons";
import HContents from "./HorizontalTabs/HContents";
import Title from "./Title/Title";
const HorizontalTabs = (props) => {
    return (
        <div className="col-md-6">
            <div className="card ">
                <Title Title="Navigation Pills -" title="Horizontal Tabs" Card="card-title"/>
                <div className="card-body ">
                    <HButtons />
                    <HContents />
                </div>
            </div>
        </div>
    )
}
export default HorizontalTabs;
