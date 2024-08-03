import React from "react";
import Button from "../Button/Button";
const VIconsButtons = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <ul className="nav nav-pills nav-pills-primary nav-pills-icons flex-column"
                role="tablist">
                <Button Nav="nav-link active" Link="#link10" Icon="now-ui-icons objects_umbrella-13" Text="Home"/>
                <Button Nav="nav-link" Link="#link11" Icon="now-ui-icons ui-2_settings-90" Text="Settings"/>
            </ul>
        </div>
    )
}
export default VIconsButtons;
