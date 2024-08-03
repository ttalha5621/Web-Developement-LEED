import React from "react";
import Button from "../Button/Button";
const VButtons = (props) => {
    return (
        <div className="col-md-4">
            <ul className="nav nav-pills nav-pills-primary flex-column" role="tablist">
                <Button Nav="nav-link active" Link="#link4" Text="Profile"/>
                <Button Nav="nav-link" Link="#link5" Text="Settings"/>
                <Button Nav="nav-link" Link="#link6" Text="Options"/>
            </ul>
        </div>
    )
}
export default VButtons;
