import React from "react";
import VButtons from "./VerticalTabs/VButtons";
import VContents from "./VerticalTabs/VContents";
import Title from "./Title/Title";
const VerticalTabs = (props) => {
    return (
        <div className="col-md-6">
            <div className="card ">
                <Title Title="Navigation Pills -" title="Vertical Tabs" Card="card-title"/>
                <div className="card-body ">
                    <div className="row">
                        <VButtons />
                        <VContents />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerticalTabs;
