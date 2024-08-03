import React from "react";
import Maps from "./Maps/Maps";

const GoogleMap = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <Maps Id="satelliteMap" Size="col-md-12" />
                    <Maps Title="Regular Map" Id="regularMap" Size="col-md-6" />
                    <Maps Title="Custom Skin & Settings Map" Id="customSkinMap" Size="col-md-6" />
                </div>
            </div>
        </>
    )
}
export default GoogleMap;