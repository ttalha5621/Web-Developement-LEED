import React from "react";
import VIconsButtons from "./VerticalIconsTabs/VIconsButtons";
import VIconsContents from "./VerticalIconsTabs/VIconsContents";
import Title from "./Title/Title";
const VerticalIconsTabs = (props) => {
    return (
        <div className="col-md-6">
            <div className="card ">
                <Title Title="Navigation Pills Icons -" title="Vertical Tabs"/>
                <div className="card-body ">
                    <div className="row">
                        <VIconsButtons />
                        <VIconsContents />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerticalIconsTabs;
